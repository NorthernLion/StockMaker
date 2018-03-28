
const mongoose = require('mongoose')

const Corporation = mongoose.model('Corporation', {
  symbol: String,
  name: String,
  stocks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stock' }]
})

Corporation.format = function (corporation) {
  return {
    id: corporation._id,
    name: corporation.name,
    symbol: corporation.symbol,
    stocks: corporation.stocks
  }
}

module.exports = Corporation