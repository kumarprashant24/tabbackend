const transactionalRecords = require('../controllers/transactionalRecords')
const authenticateUser = require('../middleware/authenticateUser')
const express = require('express')

const router = express.Router()

router.get('/:accountId/transactional-records', authenticateUser, transactionalRecords)

module.exports = router
