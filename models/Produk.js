const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const produkSchema = mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Data nama produk belum terisi!"],
  },
  harga: {
    type: Number,
    required: true,
  },
  categoriId: {
    type: ObjectId,
    ref: "Categori",
  },
  tokoId: {
    type: ObjectId,
    ref: "Toko",
  },
  gambar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Produk", produkSchema);
