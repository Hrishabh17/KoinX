// Imports
const express = require('express');
const cors = require('cors');
const db = require('./database.js')

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

// Listening at Port 4000 or the available port
app.listen(PORT || process.env.PORT)





