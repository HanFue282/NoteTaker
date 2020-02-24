var express = require("express");

// Express use for localhost number
var app = express();

//porcess.env.PORT used for Heroku
var PORT = process.env.PORT || 3006;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes of application
app.use(express.static("public"));
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});