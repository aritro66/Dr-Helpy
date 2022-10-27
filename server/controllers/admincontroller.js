const jwt = require("jsonwebtoken");
const creater = require("../models/users");

const admin = async (req, res) => {
  const data = await creater.find({ admin: { $ne: true } }); // finding user by email
  const userinfo = [];
  data.forEach((ele) => {
    userinfo.push({
      id: ele._id,
      fname: ele.fname,
      lname: ele.lname,
      email: ele.email,
      allow: ele.allow,
    });
  });
  console.log(userinfo);
  res.json(userinfo);
};

const block = async (req, res, next) => {
  console.log(req.body);
  const result = await creater.updateOne(
    { _id: req.body.id },
    { $set: { allow: false } }
  );
  console.log(result);
  res.json({ msg: "success" });
};

const unblock = async (req, res, next) => {
  console.log(req.body);
  const result = await creater.updateOne(
    { _id: req.body.id },
    { $set: { allow: true } }
  );
  console.log(result);
  res.json({ msg: "success" });
};

module.exports = { admin, block, unblock };
