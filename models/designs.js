'use strict';
module.exports = (sequelize, DataTypes) => {
  const Designs = sequelize.define('Designs', {
    design: DataTypes.STRING,
    designURL: DataTypes.STRING,
  }, {});
  Designs.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Designs.belongsTo(models.Artist, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Designs;
};