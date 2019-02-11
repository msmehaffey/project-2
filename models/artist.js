'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {

    Artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    Genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Website: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Logo: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  });

  Artist.associate = function(models) {

    Artist.hasMany(models.Show, {
      onDelete: "cascade"
    });
    
  };
  return Artist;
};