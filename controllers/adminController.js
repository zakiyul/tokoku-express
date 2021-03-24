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
  viewProduk: (req, res) => {
    res.render("admin/produk/view_produk");
  },
};
