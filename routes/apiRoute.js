const noteData = require("../db/db.json");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//Retrieve notes that were posted
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    return res.json(noteData);
  });

  //Posts saved notes
  app.post("/api/notes", function(req, res) {
    var newNote = req.body;

    noteData.push(newNote);
    res.json(noteData);
  });

  //Deletes selected saved note that has an id
  app.delete('/api/notes/:id', function (req, res) {
    var loc = 0;

    for(var i = 0; i < noteData.length; i++){
      if(noteData[i].id == req.params.id)
      {console.log(noteData[i]);
        loc = i;
      }
    }
      noteData.splice(loc, 1);
      writeFileAsync("../Develop/db/db.json", JSON.stringify(noteData))
      .catch(function(err) {
        console.log(err);
      });
      res.json(noteData);
  });
};