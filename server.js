const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const routes = require("./api_routes/apiRoutes");

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3002;
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/reactGoogleBooks";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
var connection = mongoose.connection;

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  console.log("hits path")
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
