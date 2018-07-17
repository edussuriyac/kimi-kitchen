const Joi = require('joi')
module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().min(6).max(50).optional()
    }

    const {error, saved} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          console.log(saved)
          res.status(400).send({
            error: 'valid email'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'wrong password'
          })
          break
        default:
          res.status(400).send({
            error: 'not valid'
          })
          break
      }
    } else {
      console.log('no error')
      next()
    }
  }
}
