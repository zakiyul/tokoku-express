const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { upload } = require("../middleware/multer");

router.get("/", adminController.viewDashboard);

router.get("/toko", adminController.viewToko);
router.post("/toko", adminController.addToko);
router.put("/toko", adminController.editToko);
router.delete("/toko/:id", adminController.deleteToko);

router.get("/categori", adminController.viewCategori);
router.post("/categori", adminController.addCategori);
router.put("/categori", adminController.editCategory);
router.delete("/categori/:id", adminController.deleteCategori);

router.get("/produk", adminController.viewProduk);
router.post("/produk", upload, adminController.addProduk);

module.exports = router;
