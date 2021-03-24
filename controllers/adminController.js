const Categori = require("../models/Categori");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard");
  },
  viewToko: (req, res) => {
    res.render("admin/toko/view_toko");
  },

  viewCategori: (req, res) => {
    res.render("admin/categori/view_categori");
  },
  addCategori: async (req, res) => {
    const { jenis } = req.body;
    // console.log(jenis);
    await Categori.create({ jenis: jenis });
    res.redirect("/categori");
  },

  viewProduk: (req, res) => {
    res.render("admin/produk/view_produk");
  },
};
