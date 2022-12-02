// Imports
const mongoose = require('mongoose')

// Creating the schema for storing the normal transactions of an address
const priceSchema = new mongoose.Schema({
    price:Number,
    time:Date
},{
    collection:'ethereumPrices'
})

module.exports = mongoose.model('ethereumPrices', priceSchema)