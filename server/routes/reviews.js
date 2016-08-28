const express = require('express');
const router = express.Router();

const Review = require('../models/Review');

router.route('/')
  .get((req, res) => {
    Review.find({}, (Review, err) => {
      res.status(err ? 400 : 200). send(err || markets)
    }).populate('Review Stand')
  })
  .post((req, res) => {
    Review.create(req.body, (err, newReview) => {
      res.status(err ? 400 : 200).send(err || newReview);
    });
  })
router.route('/:id')
  .get((req, res) => {
    Review.findById(req.params.id, (err, review) => {
      res.status(err ? 400 : 200).send(err || review);
      });
  })
  .delete((req, res) => {
    Review.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })

module.exports = router;
