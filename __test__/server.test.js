'use strict'; 


const {Food, Clothes, db} = require('../lib/models/index.js');

beforeAll(async () => {
    await db.sync()
});

describe('Testing data models', () => {
    test('Should create a food', async () => {
        let message = await Food.create({
            text:'Banana',
        })
        expect(message.id).toBeTruthy();
        expect(message.text).toEqual('Banana');
    });
    test('Should create a clothes', async () => {
        let message = await Clothes.create({
            text:'Shirt',
        })
        expect(message.id).toBeTruthy();
        expect(message.text).toEqual('Shirt');
    })
    test('Should read all Food', async () => {
        let message = await Food.findAll();
        expect(message.text).toBeTruthy
    })
    test('Should read a specific Food', async () => {
        let message = await Food.findOne({ where: {id:1}});
        expect(message.text).toEqual('Banana')
    })
    test('Should update a specific food', async () => {
        await Food.update({ text: "Banana"}, {where: {id:1}})
        let message = await Food.findOne({ where: {id:1}});
        expect(message.text).toEqual('Banana')
    })
    test('Should delete a specific food', async () => {
        await Food.destroy({ where:{ id:1}});
        let message = await Food.findOne({ where: {id:1}});
        expect(message).not.toBeTruthy();
    })
});

