const bcrypt = require("bcryptjs"); // encrypting password
const jwt = require("jsonwebtoken"); // json web token
const creater = require("../models/users");

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      phno: user.phno,
      admin: user.admin,
    },
    process.env.JWTKEY,
    {
      expiresIn: "10s",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      phno: user.phno,
      admin: user.admin,
    },
    process.env.JWTREFRESHKEY
  );
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const data2 = await creater.find({ email: req.body.email, allow: true }); // finding user by email
    console.log(data2);
    if (data2) {
      const pass = req.body.password;
      console.log(typeof pass);
      const result = await bcrypt.compareSync(
        pass.toString(),
        data2[0].password
      ); // checks if password is correct
      if (result) {
        const accessToken = generateAccessToken(data2[0]); // creating token
        const refreshToken = generateRefreshToken(data2[0]);
        refreshTokens.push(refreshToken);
        res.json({
          fname: data2[0].fname,
          lname: data2[0].lname,
          email: data2[0].email,
          phno: data2[0].phno,
          admin: data2[0].admin,
          accessToken,
          refreshToken,
        });
      } else {
        res.status(400).json("Wrong password or Wrong user");
      }
    } else {
      res.status(400).json("Wrong password or Wrong user");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("Wrong password or Wrong user");
  }
};

const signup = async (req, res) => {
  console.log(req.body);
  if (req.body.password1 == req.body.password2) {
    // checks if both password equal
    try {
      var salt = bcrypt.genSaltSync(10); // generating salt
      // salt is a string of charcters different from password
      const password = req.body.password1;
      const pass = await bcrypt.hashSync(password.toString(), salt);
      // password is hashed using hashing algorithim and applying salt
      const data = await creater.insertMany([
        {
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          phno: req.body.phno,
          password: pass,
        },
      ]);

      const accessToken = generateAccessToken(data[0]); // creating token
      const refreshToken = generateRefreshToken(data[0]);
      refreshTokens.push(refreshToken);
      res.json({
        fname: data[0].fname,
        lname: data[0].lname,
        email: data[0].email,
        phno: data[0].phno,
        admin: data[0].admin,
        accessToken,
        refreshToken,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json("Unable to sign up");
    }
  } else {
    res.status(400).json("Passwords are not same");
  }
};

const logout = (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("You logged out successfully.");
};

const refresh = (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid!");
  }
  jwt.verify(refreshToken, process.env.JWTREFRESHKEY, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });

  //if everything is ok, create new access token, refresh token and send to user
};

module.exports = {
  login,
  signup,
  logout,
  refresh,
};
