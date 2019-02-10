var db = require("../models");

module.exports = function(app) {
  // Get all examples
app.get("/", function(req, res) {
  db.Artists.findAll({}).then(function(result) {
    res.json(result)
  })
})
}
