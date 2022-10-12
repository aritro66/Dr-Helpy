const productcreater = require("../models/products");

const productList = async (req, res) => {
  const productlist = await productcreater.find();
  res.json(productlist);
};

const productListById = async (req, res) => {
  const productlist = await productcreater.find({ _id: req.params.id });
  res.json(productlist);
};

module.exports = {
  productList,
  productListById,
};
