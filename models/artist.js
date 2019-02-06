'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    artist: DataTypes.STRING,
    Facebook: DataTypes.STRING,
    Twitter: DataTypes.STRING,
    LinkedIn: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {

    Artist.hasMany(models.Designs, {
      onDelete: "cascade"
    });
    
  };
  return Artist;
};