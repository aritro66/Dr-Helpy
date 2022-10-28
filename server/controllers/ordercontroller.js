const ordercreater = require("../models/order");

const myorder = async (req, res) => {
  console.log(req.body.email);
  const data = await ordercreater.find({ email: req.body.email }); // finding user by email
  console.log(data);
  res.json(data);
};

module.exports = { myorder };
