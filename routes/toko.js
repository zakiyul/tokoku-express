var express = require("express");
var router = express.Router();

/* GET about page. */
router.get("/", function (req, res, next) {
  res.render("./admin/toko/view_toko.ejs");
});

module.exports = router;
