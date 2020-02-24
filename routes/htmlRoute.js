var path = require("path");

//Routes
module.exports = function(app) {
  //Routes to notes.html webpage
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  //Routes to index.html webpage(HOME)
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};