const express = require("express");
const router = express.Router();
const {
  productList,
  productListById,
} = require("../controllers/productcontroller");
const { verify } = require("../middlewares/auth");

router.get("/", verify, productList);

router.get("/:id", verify, productListById);

module.exports = router;
