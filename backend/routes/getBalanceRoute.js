// Imports
const express = require('express')
const router = express.Router()

const { fetchController } = require('../controllers/getBalanceController')

// Routing at get request
router.get('/', fetchController)

module.exports = router