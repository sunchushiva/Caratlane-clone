const mongoose = require("mongoose");

const braceletSchema = mongoose.Schema({
  id: Number,
  imglink: String,
  name: String,
  details: String,
  MRP: Number,
  MRPx: String,
  brand: String,
  video: String,
  img1: String,
  img2: String,
  img3: String,
  dimension: String,
  weight: String,
  purity: String,
  diamondtype: String,
  settingtype: String,
  totalnum: String,
  totalweight: String,
});

const BraceletsModel = mongoose.model("bracelet", braceletSchema);
module.exports = BraceletsModel;
