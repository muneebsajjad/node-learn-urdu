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
            session_id: {type: Sequelize.STRING,allowNull: false},
            device_id: {type: Sequelize.STRING,allowNull: false},
            sound_played: {type: Sequelize.STRING,allowNull: false},
            sound_selected: {type: Sequelize.STRING,allowNull: false},
            device_timestamp: {type: Sequelize.DATE,allowNull: false},
            status: {type: Sequelize.INTEGER,allowNull: false},
            score: {type: Sequelize.INTEGER,allowNull: false},
            lives: {type: Sequelize.INTEGER,allowNull: false},
        });

    },

    down: function(queryInterface, Sequelize) {

        // Add reverting commands here.
        // Return a promise to correctly handle asynchronicity.

        // Example:
        return queryInterface.dropTable('game_logs');

    }
};
