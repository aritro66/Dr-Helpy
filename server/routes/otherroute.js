const express = require("express");
const router = express.Router();
const { productList } = require("../controllers/othercontroller");

router.get("/productlist", productList);

module.exports = router;
