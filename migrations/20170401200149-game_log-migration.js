'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:*/
        return queryInterface.createTable('game_logs', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            device_id: {type: Sequelize.INTEGER,allowNull: false},
            sound_played: {type: Sequelize.STRING,allowNull: false},
            sound_selected: {type: Sequelize.STRING,allowNull: false},
            device_timestamp: {type: Sequelize.STRING,allowNull: false},
            status: {type: Sequelize.BOOLEAN,allowNull: false},
            score: {type: Sequelize.STRING,allowNull: false},
            lives: {type: Sequelize.STRING,allowNull: false},
        });

    },

    down: function(queryInterface, Sequelize) {

        // Add reverting commands here.
        // Return a promise to correctly handle asynchronicity.

        // Example:
        return queryInterface.dropTable('game_logs');

    }
};
