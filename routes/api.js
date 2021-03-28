const router = require("express").Router();
const apiContoller = require("../controllers/apiControllers");

router.get("/toko", apiContoller.apiToko);
router.get("/categori", apiContoller.apiCategori);
router.get("/produk", apiContoller.apiProduk);
router.get("/produk/:id", apiContoller.apiDetailProduk);

module.exports = router;
