const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./admin/categori/view_categori");
});

module.exports = router;
