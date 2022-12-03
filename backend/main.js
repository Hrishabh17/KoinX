// Imports
const express = require('express');
const cors = require('cors');
const db = require('./database.js')
const ethereumUtil = require('./utils/fetchEtereumPrice')

const transactionRouter = require('./routes/normalTransactionRoute')
const getBalanceRouter = require('./routes/getBalanceRoute')

const app = express()

// Port
const PORT = process.env.PORT || 1337;

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Task 1 Fetch the list of "Normal" Transactions for a user
app.use('/normaltransaction', transactionRouter)

// Task 2 Fetch the price of the Ethereum and insert into Database at an interval of 10 minutes
// Kept in the utils folder

// Task 3 Get the current balance and the current Ethereum Price
app.use('/getbalance', getBalanceRouter)

// Listening atthe available port or Port 1337
app.listen(PORT)