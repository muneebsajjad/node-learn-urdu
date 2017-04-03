'use strict';
module.exports = function(sequelize, DataTypes) {
  var game_logs = sequelize.define('game_logs', {
      device_id: DataTypes.STRING,
      sound_played: DataTypes.STRING,
      sound_selected: DataTypes.STRING,
      device_timestamp: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      score: DataTypes.STRING,
      lives: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return game_logs;
};