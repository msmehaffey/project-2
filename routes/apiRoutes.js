var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({}).then(function(results) {
      res.json(results);
    });
  });

//   app.get("/merch", function(req, res) {
//     db.Example.findAll({}).then(function(merch) {
//       res.json(merch);
//     });
//   });

  // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

  // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
