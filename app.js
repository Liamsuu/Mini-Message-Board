require("dotenv").config();
const express = require("express");
const app = express();
const homeRouter = require("./routes/IndexRouter");
const newMessageRouter = require("./routes/NewMessageRouter");
const path = require("node:path");

// setting up ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// setting up URL routers
app.use("/", homeRouter.router);
app.use("/new", newMessageRouter);

// setting up server port listener
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log(`Server listening on port ${port}!`)
);
