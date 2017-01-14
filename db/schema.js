const mongoose = require('mongoose')

// Users
const usersSchema = new mongoose.Schema({
  // required for authentication
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }
})

module.exports = {
  User: mongoose.model('User', usersSchema)
}
