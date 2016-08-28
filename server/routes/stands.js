const express = require('express');
const router = express.Router();

const Stand = require('../models/Stand');

router.route('/')
  .get((req, res) => {
    Stand.find({}, (Stand, err) => {
      res.status(err ? 400 : 200). send(err || stands)
    })
  })
  .post((req, res) => {
    Stand.create(req.body, (err, newStand) => {
      res.status(err ? 400 : 200).send(err || newStand);
    });
  })
router.route('/:id')
  .get((req, res) => {
    Stand.findById(req.params.id, (err, stand) => {
      res.status(err ? 400 : 200).send(err || stand);
      });
  })
  .delete((req, res) => {
    Stand.findByIdAndRemove(req.params.id, err => {
      res.status(err ? 400 : 200).send(err);
    })
  })

module.exports = router;
