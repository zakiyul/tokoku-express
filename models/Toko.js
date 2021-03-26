const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const tokoSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: [true, "Data nama toko belum terisi!"],
  },
  owner: {
    type: String,
    required: [true, "Data owner belum terisi!"],
  },
  alamat: {
    type: String,
    required: [true, "Data alamat belum terisi!"],
  },
  produkId: {
    type: ObjectId,
    ref: "Produk",
  },
});

module.exports = mongoose.model("Toko", tokoSchema);
