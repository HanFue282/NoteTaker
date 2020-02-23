var noteData = require("../db/db");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    noteData.push(newNote);
    res.json(noteData);
  });

  app.delete("/api/notes/:id", function(req, res) {
    res.json({ ok: true });
  });
};