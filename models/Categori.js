const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categoriSchema = new mongoose.Schema({
  jenis: String,
  produkId: {
    type: ObjectId,
    ref: "Produk",
  },
});

module.exports = mongoose.model("Categori", categoriSchema);
