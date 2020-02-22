// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
var app = express();

var PORT = process.env.PORT || 3006;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});