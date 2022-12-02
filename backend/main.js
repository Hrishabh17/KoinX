// Imports
const express = require('express');
const cors = require('cors');
const db = require('./database.js')
const ethereumUtil = require('./utils/fetchEtereumPrice')

const transactionRouter = require('./routes/normalTransactionRoute')

const app = express()

// Port
const PORT = 4000;

// MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Task 1 Fetch the list of "Normal" Transactions for a user
app.use('/normaltransaction', transactionRouter)

// Task 2 Fetch the price of the Ethereum and insert into Database at an interval of 10 minutes
// Kept in the utils folder

// Listening at Port 4000 or the available port
app.listen(PORT || process.env.PORT)