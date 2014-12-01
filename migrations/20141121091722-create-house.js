"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("houses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      words: {
        type: DataTypes.STRING
      },
      founded: {
        type: DataTypes.STRING
      },
      founder: {
        type: DataTypes.STRING
      },
      seat: {
        type: DataTypes.STRING
      },
      coatOfArms: {
        type: DataTypes.STRING
      },
      region: {
        type: DataTypes.STRING
      },
      lord: {
        type: DataTypes.STRING
      },
      overlord: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("houses").done(done);
  }
};
