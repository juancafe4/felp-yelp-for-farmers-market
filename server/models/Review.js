const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  rating: {type: Number, max: 5, min: 1},
  text: {type: String, required: true},
  date: {type: Date, default: Date.now}
})
const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
