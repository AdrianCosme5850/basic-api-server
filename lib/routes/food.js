'use strict';

const express = require('express');
const { Food } = require('../models');
const router = express.Router();

let createFood = async (request,response) => {
    let foodData = request.body;
    let recordFood = await Food.create(foodData);
    response.json(recordFood);
}
let readFood = async ( request, response) => { 
    response.json(await Food.findAll());
 }
let readSpecificFood = async(request, response) => {
    let foundFood = await Food.findOne({where:{id: request.params.id}})
    response.json(foundFood);
}
let updateFood = async(request, response) => {
    await Food.update({ text: request.body.text}, {where: {id:request.query.id}})
    let updatedFood = await Food.findOne({where:{id: request.query.id}});
    response.json(updatedFood)
}
let deleteFood = async(request, response) => {
    await Food.destroy({ where:{ id:request.query.id}});
    response.send('Food destroyed')
}

router.get('/food:id', readSpecificFood)
router.get('/food', readFood)
router.put('/food', updateFood)
router.post('/food', createFood)
router.delete('/food', deleteFood)

module.exports = router;