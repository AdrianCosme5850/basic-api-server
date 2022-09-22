'use strict';

const { DataTypes, Sequelize} =require('sequelize');
const foodSchema = require('./food');
const clothesSchema = require('./clothes')
const DATABASE_URL = process.env.DATABASE_URL || "sqlite::memory:";


let herokuOptions = {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }

  let sequelize = new Sequelize(DATABASE_URL, process.env === 'production' ? herokuOptions : {})

  let FoodModel = foodSchema(sequelize, DataTypes);
  let ClothesModel = clothesSchema(sequelize, DataTypes);

  module.exports = {
    Food: FoodModel,
    Clothes: ClothesModel,
    db: sequelize,
  };