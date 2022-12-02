// Imports
const mongoose = require('mongoose')

// Creating the schema for storing the normal transactions of an address
const transactionSchema = new mongoose.Schema({
    address:String,
    transactions:Array
},{
    collection:'normalTransactions'
})

module.exports = mongoose.model('normalTransactions', transactionSchema)
