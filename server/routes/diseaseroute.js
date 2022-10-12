const express = require("express");
const router = express.Router();
const {
  diseaseList,
  diseaseListById,
} = require("../controllers/diseasecontroller");

router.get("/", diseaseList);

// particular disease page route get method
// using params
router.get("/:id", diseaseListById);

module.exports = router;
