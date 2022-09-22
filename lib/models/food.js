'use strict';

const foodSchema = (sequelize, DataTypes) => sequelize.define(
    'Food',
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
);

module.exports = foodSchema