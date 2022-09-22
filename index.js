'use strict';

const { db } = require('./lib/models');
const {start}= require('./lib/server')
let PORT = process.env.PORT || 3001;

db.sync()
.then(() => {
    start(PORT)
})
.catch(error => {
    console.error(error)
})
