const mongoose = require("mongoose");
// defining schema
const diseaseSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  desc: { type: String },
  img: { type: String },
  mimetype: { type: String },
  rating: { type: Number },
});
// creating model
const productlistscreater = new mongoose.model("productlists", diseaseSchema);
module.exports = productlistscreater;
