const mongoose = require('mongoose');

const StandReview = new mongoose.Schema({
  name: {type: String, required: true},
  hours: {type: String, required: true},
  description: {type: String},
  image: {type: String},
  owners: {type: String}
})
const Stand = mongoose.model('Stand', StandReview);

module.exports = Stand;
