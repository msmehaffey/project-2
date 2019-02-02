module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("artist", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    artist: {
      type: Sequelize.STRING
    },
    artistFacebook: {
      type: Sequelize.STRING,
    },
    artistTwitter: {
      type: Sequelize.STRING
    },
    artistLinkedIn: {
      type: Sequelize.STRING
    },
    artistEmail: {
      type: Sequelize.STRING,
    }
  }, {
    timestamps: true
  });







  var Customer = sequelize.define("customer", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    custName: {
      type: Sequelize.STRING
    },
    custEmail: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    artistLinkedIn: {
      type: Sequelize.STRING
    },
    artistEmail: {
      type: Sequelize.STRING,
    }
  }, {
    timestamps: true
  });





  var Merch = sequelize.define("merch", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    merch: {
      type: Sequelize.STRING
    },
    size: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING
    },
    artist: {
      type: Sequelize.STRING
    },
    designURL: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
  });




  var ArtistDesigns = sequelize.define("artistDesigns", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    designs: {
      type: Sequelize.STRING
    },
    designsURL: {
      type: Sequelize.STRING,
    },
    artist: {
      type: Sequelize.STRING
    },
  });
};
