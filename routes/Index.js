const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
  res.end();
});

module.exports = router;
