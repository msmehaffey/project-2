// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index")
    // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });
  // cms route loads cms.html
  app.get("/events", function(req, res) {
    res.render("events");
  });

  app.get("/createEvent", function(req, res) {
    res.render("createEvent");
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../signup.html"));
  })

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};
