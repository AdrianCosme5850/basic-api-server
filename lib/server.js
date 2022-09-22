'use strict';

const express = require('express');
const app = express();
const foodRouter = require('./routes/food.js')
const clothesRouter = require('./routes/clothes');

let hello = (request, response) => {
    response.send('Hello');
}

app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);
app.get('/', hello)



module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('listening')
        })
    },
    app,
}