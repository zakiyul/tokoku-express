const router = require("express").Router();
const apiContoller = require("../controllers/apiControllers");

router.get("/toko", apiContoller.apiToko);
router.get("/toko/:id", apiContoller.apiDetailToko);
router.get("/categori", apiContoller.apiCategori);
router.get("/categori/:id", apiContoller.apiDetailCategori);
router.get("/produk", apiContoller.apiProduk);
router.get("/produk/:id", apiContoller.apiDetailProduk);

module.exports = router;
