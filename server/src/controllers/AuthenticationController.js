// const bodyParser = require('body-parser')
// const cors = require('cors')
// const morgan = require('morgan')

const Register = require('../models/register')
module.exports = {
  async register (req, res) {
    try {
      const user = req.body
      const newUser = new Register(user)
      console.log('saved')
      const saved = await newUser.save()
      return res.json(saved)
    } catch (err) {
      res.status(400).send({
        error: 'already in use'
      })
    }
  },
  async login (req, res) {
    try {
      console.log('hai')
      const {email, password} = req.body
      const user = await Register.findOne({
        email: email
      })
      console.log(user)
      if (!user) {
        return res.status(403).send({
          error: 'login info incorrect'
        })
      }

      const isPasswordvalid = password === user.password
      if (!isPasswordvalid) {
        return res.status(403).send({
          error: 'login info incorrect'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(403).send({
        error: 'invalid login details'
      })
    }
  }
}
// const express = require('express')
// const express = require('express')
// const app = express()

// const Register = require('../models/register')
// app.post('/register', (req, res) => {
//   var email = req.body.email
//   var password = req.body.password
//   var newUser = new Register({
//     email: email,
//     password: password
//   })
//   newUser.save(function (error) {
//     if (error) {
//       console.log(error)
//     }
//     res.send({
//       success: true,
//       message: 'registered'
//     })
//   })
// })
