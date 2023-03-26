const express = require("express");
const router = express.Router();
const {
  users,
  block,
  unblock,
  addproduct,
  productDeleteById,
} = require("../controllers/admincontroller");
const { verify } = require("../middlewares/auth");
const { uploadimage } = require("../middlewares/fileupload");

router.get("/users", verify, users);

router.post("/block", verify, block);

router.post("/unblock", verify, unblock);

router.post(
  "/addproduct",
  verify,
  uploadimage.single("img_upload"),
  addproduct
);

router.delete("/deleteproduct", verify, productDeleteById);

module.exports = router;
