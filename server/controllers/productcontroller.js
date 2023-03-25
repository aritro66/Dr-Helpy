// const productcreater = require("../models/products");
const productlistscreater = require("../models/productlists");

const productList = async (req, res) => {
  const productlist = await productlistscreater.find();
  res.json(productlist);
};

const productListById = async (req, res) => {
  const productlist = await productlistscreater.find({ _id: req.params.id });
  res.json(productlist);
};

module.exports = {
  productList,
  productListById,
};
