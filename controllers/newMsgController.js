const db = require("../db/queries");
async function newMsgPost(req, res) {
  await db.addData(req.body.name, req.body.message, new Date());
  res.redirect("/");
  res.end();
}

function newMsgFormGet(req, res) {
  res.render("form");
  res.end();
}

module.exports = { newMsgPost, newMsgFormGet };
