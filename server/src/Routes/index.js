'use strict'
const express = require('express')
const router = express.Router()

const regRouter = require('./register/index')
console.log('rout')
router.use('/register', regRouter)

module.exports = router
