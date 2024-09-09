const { Router } = require("express");

// initialise new message page router
const router = Router();

// new message page router middleware
router.get("/", (req, res) => {
  res.render("newMessage");
  res.end();
});

module.exports = router;
