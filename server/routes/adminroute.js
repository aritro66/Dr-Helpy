const express = require("express");
const router = express.Router();
const {
  admin,
  block,
  unblock,
  addproduct,
  productDeleteById,
} = require("../controllers/admincontroller");
const { verify } = require("../middlewares/auth");
const { uploadimage } = require("../middlewares/fileupload");

router.get("/admin", verify, admin);

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
