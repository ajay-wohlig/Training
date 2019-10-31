var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Student = require("./api/models/studentModels"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/Studentdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/studentRoutes");
routes(app);

app.listen(port);

console.log("Student List started on:" + port);
