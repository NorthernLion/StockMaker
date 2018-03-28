
const mongoose = require('mongoose')

const User = mongoose.model('User', {
  username: String,
  name: String,
  passwordHash: String,
  email: String, 
  stocks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }]
})

User.format = function (user) {
  return {
    id: user._id,
    name: user.name,
    username: user.username,
    passwordHash: user.passwordHash,
    email: user.email,
    stocks: user.stocks
  }
}

module.exports = User