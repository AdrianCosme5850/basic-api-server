'use strict';

const express = require('express');
const app = express();
const foodRouter = require('./routes/food.js')
const clothesRouter = require('./routes/clothes')

app.use(express.json());
app.use(foodRouter);
app.use(clothesRouter);

module.exports = {
    start: (port) => {
        app.listen(port, () => {
            console.log('listening')
        })
    },
    app,
}