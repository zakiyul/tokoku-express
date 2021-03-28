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
  apiCategori: async (req, res) => {
    try {
      const categori = await Categori.find();
      res.json(categori);
    } catch (error) {
      console.log(error.message);
    }
  },
  apiProduk: async (req, res) => {
    try {
      const produk = await Produk.find();
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
