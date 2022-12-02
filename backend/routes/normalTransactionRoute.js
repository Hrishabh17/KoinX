// Imports
const express = require('express')
const router = express.Router()

const { insertController } = require('../controllers/normalTransactionController')

// Routing at get request
router.get('/', insertController)

module.exports = router