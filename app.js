var express = require("express");
var cookieParser = require("cookie-parser");
var cors = require("cors");

var indexRouter = require("./routes/index");

var app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", indexRouter);

module.exports = app;
