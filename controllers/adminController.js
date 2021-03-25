const Toko = require("../models/Toko");
const Categori = require("../models/Categori");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },
  viewToko: async (req, res) => {
    const toko = await Toko.find();
    res.render("admin/toko/view_toko", { toko });
  },
  addToko: async (req, res) => {
    const { nama, owner, alamat } = req.body;
    await Toko.create({ nama, owner, alamat });
    res.redirect("/toko");
  },
  editToko: async (req, res) => {
    const { id, nama, owner, alamat } = req.body;
    const toko = await Toko.findById(id);
    toko.nama = nama;
    toko.owner = owner;
    toko.alamat = alamat;
    await toko.save();
    res.redirect("/toko");
  },
  deleteToko: async (req, res) => {
    const { id } = req.params;
    const toko = await Toko.findById(id);
    await toko.remove();
    res.redirect("/toko");
  },

  viewCategori: async (req, res) => {
    const categori = await Categori.find();
    res.render("admin/categori/view_categori", { categori });
  },
  addCategori: async (req, res) => {
    const { jenis } = req.body;
    // console.log(jenis);
    await Categori.create({ jenis: jenis });
    res.redirect("/categori");
  },
  editCategory: async (req, res) => {
    const { id, jenis } = req.body;
    const categori = await Categori.findById(id);
    categori.jenis = jenis;
    await categori.save();
    res.redirect("/categori");
  },
  deleteCategori: async (req, res) => {
    const { id } = req.params;
    const categori = await Categori.findById(id);
    await categori.remove();
    res.redirect("/categori");
  },

  viewProduk: (req, res) => {
    res.render("admin/produk/view_produk");
  },
};
