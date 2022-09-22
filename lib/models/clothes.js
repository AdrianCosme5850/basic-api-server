'use strict';

const clothesSchema = (sequelize, DataTypes) => sequelize.define(
    'Clothes',
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = clothesSchema