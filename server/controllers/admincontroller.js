const jwt = require("jsonwebtoken");
const creater = require("../models/users");
const productlistscreater = require("../models/productlists");
const fs = require("fs");
const path = require("path");

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

const imgBufferToBase64 = async (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "../", filepath), function (err, data) {
      if (err) reject(err);
      else resolve(data.toString("base64"));
    });
  });
};

const addproduct = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body);
    const { name, price, desc, rating } = req.body;
    const imgbase64 = await imgBufferToBase64(req.file.path);

    const data = await productlistscreater.insertMany([
      {
        name: name,
        price: price,
        desc: desc,
        rating: rating,
        img: imgbase64,
        mimetype: req.file.mimetype,
      },
    ]);
    // console.log(data);
    res.json(data[0]);
  } catch (error) {
    console.log(error);
    res.status(401).send("failed");
  }
};

const productDeleteById = async (req, res) => {
  try {
    console.log(req.body);
    const chk = await productlistscreater.findByIdAndDelete(req.body.id);
    console.log(chk);
    res.json(chk._id);
  } catch (error) {
    console.log(error);
    res.status(401).send("couldn't delete");
  }
};

module.exports = { admin, block, unblock, addproduct, productDeleteById };
