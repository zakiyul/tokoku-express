const mongoose = require("mongoose");

const categoriSchema = new mongoose.Schema({
  jenis: String,
});

module.exports = mongoose.model("Categori", categoriSchema);
