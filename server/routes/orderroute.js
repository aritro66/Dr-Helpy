const express = require("express");
const router = express.Router();
const { myorder } = require("../controllers/ordercontroller");
const { verify } = require("../middlewares/auth");

router.post("/orders", verify, myorder);

module.exports = router;
