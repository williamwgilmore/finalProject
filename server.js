var express = require("express");
var bodyParser = require("body-parser");
// var React = require("react");
// var ReactDOM = require("react-dom");

//Create express app to host our server.
var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Default directory at /public
app.use(express.static("./public"));

//Home page -- move to seperate routes file
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//Listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});