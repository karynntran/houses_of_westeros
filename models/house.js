"use strict";
module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define("house", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    words: DataTypes.STRING,
    founded: DataTypes.INTEGER,
    founder: DataTypes.STRING,
    seat: DataTypes.STRING,
    coatOfArms: DataTypes.STRING,
    region: DataTypes.STRING,
    lord: DataTypes.STRING,
    overlord: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return House;
};