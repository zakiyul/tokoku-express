const Categori = require("../models/Categori");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },
  viewToko: (req, res) => {
    res.render("admin/toko/view_toko");
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
