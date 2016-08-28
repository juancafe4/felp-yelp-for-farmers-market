const mongoose = require('mongoose');

const StandReview = new Schema({
  name: {type: String, required: true}
  hours: {type: String, required: true},
  products: [{type: String}],
  description: {type: String},
  owners: [{type: String}]
})
const Stand = mongoose.model('Stand', StandReview);

module.exports = Stand;
