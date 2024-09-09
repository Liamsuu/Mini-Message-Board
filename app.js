const express = require("express");
const app = express();
const homeRouter = require("./routes/Index");
const newMessageRouter = require("./routes/NewMessage");
const path = require("node:path");

// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// setting up URL routers
app.use("/", homeRouter);
app.use("/new", newMessageRouter);

// setting up server port listener
app.listen(3000, () => console.log("Server listening on port 3000!"));
