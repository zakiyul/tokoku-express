const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Toko", tokoSchema);
