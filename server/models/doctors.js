const mongoose = require("mongoose");
// defining schema
const doctorSchema = new mongoose.Schema({
  registrationno: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  url: { type: String, require: true },
  phno: { type: String, require: true },
  isapproved: { type: Boolean, default: false, require: true },
  DOR: { type: Date, require: true },
  type: { type: String, require: true },
  workarea: { type: String, require: true },
});
// creating model
const doctorcreater = new mongoose.model("doctors", doctorSchema);

module.exports = doctorcreater;
