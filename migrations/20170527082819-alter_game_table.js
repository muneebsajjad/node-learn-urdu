'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'game_logs',
      'options_presented',
      {
        type: Sequelize.STRING,
        allowNull: true
      })

      queryInterface.addColumn(
        'game_logs',
        'cycle_count',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn({
        tableName: 'game_logs',
        schema: 'public'
      }, 'options_presented');

      queryInterface.removeColumn({
          tableName: 'game_logs',
          schema: 'public'
        }, 'cycle_count');
  }
};
