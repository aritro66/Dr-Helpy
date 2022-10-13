const express = require("express");
const router = express.Router();
const {
  login,
  signup,
  logout,
  refresh,
} = require("../controllers/authcontroller");

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

router.post("/refresh", refresh);

module.exports = router;
