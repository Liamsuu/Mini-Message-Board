const { Router } = require("express");
const home = require("./Index");

// initialise new message page router
const router = Router();

// new message page router middleware
router.get("/", (req, res) => {
  res.render("form");
  res.end();
});

router.post("/", (req, res) => {
  // do something with values below
  home.messages.push({
    user: req.body.name,
    text: req.body.message,
    added: new Date(),
  });
  res.redirect("/");
  res.end();
});

module.exports = router;
