var db = require("../models");

module.exports = function(app) {
  // Get all examples

  // Artists API calls
  // app.get("/api/artists", function(req, res) {
  //   db.Artist.findAll({}).then(function(results) {
  //     console.log(results)
  //     res.json(results);
  //   });
  // });

  app.get("/", function(req, res) {
    db.Artist.findAll({}).then(function(data) {
      var hbsObject = {
        band: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/newArtist", function(req, res) {
    db.Artist.create({
      Artist: "Black Sabbath",
      Genre: "rock",
      Website: "www.blacksabbath.com",
      Logo: "url.jpeg"
    }).then(function(results) {
      res.json(results)
    });
  });


  app.post("/api/updateArtist", function(req, res) {
    db.Show.update(
      {
        Logo: "myPic.jpeg"
      },
      {
        where: {
          id: 2
        }
      }
    ).then(function(results) {
      res.json(results);
    })
  });

  app.post("/api/deleteArtist", function(req, res) {
    db.Artist.destroy({
      where: {
        id: 3
      }
    }).then(function(results) {
      res.redirect("/api/events")
    });
  });


// Events API calls
app.get("/api/events", function(req, res) {
  db.Show.findAll({}).then(function(results) {
    res.json(results)
  });
});

app.post("/api/newEvent", function(req, res) {
  db.Show.create({
    Venue: "Star Bar",
    Date: "12/27/2019",
    Price: "15",
    Facebook: "www.facebook.com/event",
    // ArtistId: "artistsId"
  }).then(function(results) {
    res.json(results)
  });
});

app.post("/api/updateEvent", function(req, res) {
  db.Show.update(
    {
      Venue: "stubbs"
    },
    {
      where: {
        id: 2
      }
    }
  ).then(function(results) {
    res.json(results);
  })
});

app.post("/api/deleteEvent", function(req, res) {
  db.Show.destroy({
    where: {
      id: 2
    }
  }).then(function(results) {
    res.redirect("/api/events")
  });
});




};


