const Toko = require("../models/Toko");
const Categori = require("../models/Categori");
const Produk = require("../models/Produk");

module.exports = {
  apiToko: async (req, res) => {
    try {
      const toko = await Toko.find();
      res.json(toko);
    } catch (error) {
      console.log(error.message);
    }
  },
  apiDetailToko: async (req, res) => {
    try {
      const toko = await Toko.findById(req.params.id);
      res.json(toko);
    } catch (error) {
      console.log(error.message);
    }
  },

  apiCategori: async (req, res) => {
    try {
      const categori = await Categori.find();
      res.json(categori);
    } catch (error) {
      console.log(error.message);
    }
  },
  apiDetailCategori: async (req, res) => {
    try {
      const categori = await Categori.findById(req.params.id);
      res.json(categori);
    } catch (error) {
      console.log(error.message);
    }
  },

  apiProduk: async (req, res) => {
    try {
      const produk = await Produk.find()
        .populate({ path: "categoriId", select: "id jenis" })
        .populate({ path: "tokoId", select: "id nama" });
      res.json(produk);
    } catch (error) {
      console.log(error.message);
    }
  },
  apiDetailProduk: async (req, res) => {
    try {
      const produk = await Produk.findById(req.params.id);
      res.json(produk);
    } catch (error) {
      console.log(error.message);
    }
  },
};
