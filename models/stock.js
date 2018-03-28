
const mongoose = require('mongoose')

const Stock = mongoose.model('Stock', {
  price: Number,
  date: Date,
  corporation: { type: mongoose.Schema.Types.ObjectId, ref: 'Corporation' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }  
})

Stock.format = function (stock) {
  return {
    id: stock._id,
    price: stock.price,
    date: stock.date,
    corporation: stock.corporation,
    user: stock.user
  }
}

module.exports = Stock