const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/register', { useMongoClient: true, promiseLibrary: require('bluebird') })
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

require('./routes')(app)

// const Register = require('./models/register')
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

app.listen(process.env.PORT || 8081)
