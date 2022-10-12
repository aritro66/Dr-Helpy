const express = require("express");
const router = express.Router();
const {
  productList,
  productListById,
} = require("../controllers/productcontroller");

router.get("/", productList);

router.get("/:id", productListById);

module.exports = router;
