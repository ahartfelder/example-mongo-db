const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: String,
  age: Number
})

const User = mongoose.model('users', UserSchema)

module.exports = User
