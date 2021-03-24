const router = require("express").Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.viewDashboard);
router.get("/toko", adminController.viewToko);
router.get("/categori", adminController.viewCategori);
router.get("/produk", adminController.viewProduk);

module.exports = router;