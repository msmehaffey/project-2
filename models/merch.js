'use strict';
module.exports = (sequelize, DataTypes) => {
  const Merch = sequelize.define('Merch', {
    merch: DataTypes.STRING,
    size: DataTypes.STRING,
    artist: DataTypes.STRING,
    color: DataTypes.STRING,
    designURL: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Merch.associate = function(models) {
    // associations can be defined here
    Merch.belongsTo(models.Designs, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Merch;
};