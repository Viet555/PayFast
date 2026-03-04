'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Account extends Model {
        static associate(models) {

            Account.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'user'
            });

            Account.hasMany(models.Transaction, {
                foreignKey: 'accountId',
                as: 'transactions'
            });

        }
    }

    Account.init({

        userId: DataTypes.INTEGER,
        accountNumber: DataTypes.STRING,
        balance: DataTypes.DECIMAL(18, 2),
        currency: DataTypes.STRING,
        status: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Account',
    });

    return Account;
};