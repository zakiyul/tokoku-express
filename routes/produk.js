const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./admin/produk/view_produk");
});

module.exports = router;
