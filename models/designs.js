'use strict';
module.exports = (sequelize, DataTypes) => {
  const Designs = sequelize.define('Designs', {
    design: DataTypes.STRING,
    designURL: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {});
  Designs.associate = function(models) {
    // associations can be defined here
  };
  return Designs;
};