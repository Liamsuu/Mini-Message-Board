const { Router } = require("express");
const home = require("./IndexRouter");
const {
  newMsgPost,
  newMsgFormGet,
} = require("../controllers/newMsgController");

// initialise new message page router
const router = Router();

// new message page router middleware
router.get("/", newMsgFormGet);

router.post("/", newMsgPost);

module.exports = router;
