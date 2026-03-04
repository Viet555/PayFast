'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Accounts', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onDelete: 'CASCADE'
            },

            accountNumber: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            balance: {
                type: Sequelize.DECIMAL(18, 2),
                allowNull: false,
                defaultValue: 0
            },

            currency: {
                type: Sequelize.STRING,
                defaultValue: 'VND'
            },

            status: {
                type: Sequelize.ENUM('ACTIVE', 'BLOCKED', 'CLOSED'),
                defaultValue: 'ACTIVE'
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }

        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('Accounts');
    }
};