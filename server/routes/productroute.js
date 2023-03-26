const express = require("express");
const router = express.Router();
const {
  productList,
  productListById,
  reviewList,
  addReview,
} = require("../controllers/productcontroller");
const { verify } = require("../middlewares/auth");

router.get("/", verify, productList);

router.get("/:id", verify, productListById);

router.get("/review/:id", reviewList);

router.post("/addreview", addReview);

module.exports = router;
