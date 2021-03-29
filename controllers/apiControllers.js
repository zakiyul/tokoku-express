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
  apiCreateCategori: async (req, res) => {
    const { jenis } = req.body;
    try {
      await Categori.create({ jenis });
      res.status(201).json({ message: "berhasil!", jenis });
    } catch (error) {
      alert(error);
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
      const produk = await Produk.findById(req.params.id)
        .populate({ path: "categoriId", select: "id jenis" })
        .populate({ path: "tokoId", select: "id nama" });
      res.json(produk);
    } catch (error) {
      console.log(error.message);
    }
  },
  apiPostProduk: async (req, res) => {
    const { nama, harga, categoriId, tokoId } = req.body;
    if (!req.file) return res.status(404).json({ message: "image not found!" });
    try {
      const newProduk = {
        nama,
        harga,
        categoriId,
        tokoId,
        gambar: `images/${req.file.filename}`,
      };
      const produk = await Produk.create(newProduk);
      res.status(201).json(newProduk);
    } catch (error) {
      res.json(error);
    }

    // const produk = await Produk.create(newProduk);
  },
};
