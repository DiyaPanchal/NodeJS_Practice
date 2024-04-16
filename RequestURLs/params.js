// req.params Property Demo Example

// Importing the express
var express = require("express");

// Initializing the express and port number
var app = express();

// Initializing the router from express
var router = express.Router();
var PORT = 3000;

// Defining an Endpoint
app.get("/api/:name", function (req, res) {
  console.log(req.params["name"]);
  res.send(req.params["name"]);
});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
