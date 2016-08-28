const mongoose = require('mongoose');

const MartketSchema = new mongoose.Schema({
  market_id: {type: String, required: true},
  link: {type: String, required: true},
  name: {type: String, required: true},
  address: {type: String, required: true},
  products: [{type: String, required: true}],
  schedules: [{type: String, required: true}],
  reviews: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Review'} ],
  stands: [{type: mongoose.Schema.Types.ObjectId, ref: 'Stand'}]
})
const Market = mongoose.model('Market', MartketSchema);

module.exports = Market;
