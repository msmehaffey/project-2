'use strict';

module.exports = (sequelize, DataTypes) => {
  const Show = sequelize.define('Show', {

    Venue: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    bandName: {
      type: DataTypes.STRING,
      allowNull: false,
  },

    Date: {
        type: DataTypes.STRING
    },

    Time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    Facebook: {
      type: DataTypes.STRING,
    },
  });

  Show.associate = function(models) {
    Show.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Show;
};