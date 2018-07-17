const AuthenticationController = require('../../controllers/AuthenticationController')
// const express = require('express')
// const router = express.Router()

// router.post('/register', AuthenticationController.register)
module.exports = (app) => {
  app.post('/register', AuthenticationController.register)
}
