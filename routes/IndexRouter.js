const { Router } = require("express");
const db = require("../db/queries");

// initialise router for index/homepage
const router = Router();

// index router request middleware
router.get("/", async (req, res) => {
  // grab all messages from database
  let messages = await db.getAllMessages();
  res.render("index", { messages: messages });
});

module.exports = { router };
