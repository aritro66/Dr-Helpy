const express = require("express");
const router = express.Router();
const { admin, block, unblock } = require("../controllers/admincontroller");
const { verify } = require("../middlewares/auth");

router.get("/admin", verify, admin);

router.post("/block", verify, block);

router.post("/unblock", verify, unblock);

module.exports = router;
