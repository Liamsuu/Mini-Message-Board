const { Router } = require("express");

// initialise router for index/homepage
const router = Router();

// creating dummy message content
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// index router request middleware
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

module.exports = { router, messages };
