var noteData = require("../db/db.json");
var fs = require("fs");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    noteData.push(newNote);
    res.json(noteData);
    return noteData;
  });

  app.delete('/api/notes/:id', function (req, res) {
    console.log(noteData.length);
    var loc = 0;

    for(var i = 0; i < noteData.length; i++)
    {
      if(noteData[i].id == req.params.id)
      {console.log(noteData[i]);
        loc = i;
        console.log(loc);
      }
    }

    noteData.splice(loc, 1)
    fs.writeFileAsync("../db/db.json", JSON.stringify(noteData));

  });
};