'use strict';
module.exports = function(sequelize, DataTypes) {
  var letter_logs = sequelize.define('letter_logs', {
    device_id: DataTypes.STRING,
    sound_played: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return letter_logs;
};