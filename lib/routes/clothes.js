'use strict';

const express = require('express');
const { Clothes } = require('../models');
const router = express.Router();

let createClothes = async (request,response) => {
    let clothesData = request.body;
    let recordClothes = await Clothes.create(clothesData);
    response.json(recordClothes);
}
let readClothes = async ( request, response) => { 
    response.json(await Clothes.findAll());
 }
let readSpecificClothes = async(request, response) => {
    let foundClothes = await Clothes.findOne({where:{id: request.params.id}})
    response.json(foundFood);
}
let updateClothes = async(request, response) => {
    await Clothes.update({ text: request.body.text}, {where: {id:request.query.id}})
    let updatedClothes = await Clothes.findOne({where:{id: request.query.id}});
    response.json(updatedClothes)
}
let deleteClothes = async(request, response) => {
    await Clothes.destroy({ where:{ id:request.query.id}});
    response.send('Clothes destroyed')
}

router.get('/clothes:id', readSpecificClothes)
router.get('/clothes', readClothes)
router.put('/clothes', updateClothes)
router.post('/clothes', createClothes)
router.delete('/clothes', deleteClothes)

module.exports = router;