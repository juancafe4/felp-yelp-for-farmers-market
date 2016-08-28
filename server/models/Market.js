const mongoose = require('mongoose');

const MartketSchema = new Schema({
  market_id: {type: String, required: true},
  link: {type: String, required: true},
  name: {type: String, required: true},
  products: [{type: String, required: true}],
  schedule: {type: String, required: true},
  reviews: [ {type: Schema.Types.ObjectId, ref: 'Review'} ]
  stands: [{type: Schema.Types.ObjectId, ref: 'Stand'}]
})
const Market = mongoose.model('Market', MartketSchema);

module.exports = Market;
