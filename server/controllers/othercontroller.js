const productcreater = require("../models/products");

const productList = async (req, res) => {
  const productlist = await productcreater.find();
  res.json(productlist);
};

module.exports = {
  productList,
};
