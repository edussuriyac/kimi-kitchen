var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RegisterSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100
  }
})

var Register = mongoose.model('Register', RegisterSchema)
module.exports = Register
