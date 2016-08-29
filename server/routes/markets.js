const express = require('express');
const router = express.Router();
const axios = require('axios');
const moment = require('moment');

const Market = require('../models/Market');
const Review = require('../models/Review');
const Stand = require('../models/Stand');
let getSchedules = function(Schedule) {
  let months, hours, modSchedule;
  Schedule = Schedule.split(/<br>/);
  let schedRowsArr = [];
  Schedule.forEach(row => {
    if (row !== ' ') {
      if (row.split(' ')[1] === 'to') {
        months = row.replace('to ', '').split(' ').slice(0, 2);
        hours = row.replace('to ', '').split(' ').slice(2).join(' ').replace(';', '');

        if (!isNaN(row.charAt(0))) {
          months[0] = moment(months[0], 'MM/DD/YYY').format('MMMM');
          months[1] = moment(months[1], 'MM/DD/YYY').format('MMMM');
          schedRowsArr.push(`${months[0]} - ${months[1]} ${hours}`);
        } else
        schedRowsArr.push(`${months[0]} - ${months[1]} ${hours}`);

      }
    }
  });

  return schedRowsArr = schedRowsArr.filter((row, i, arr) => {
    return (row !== arr[i+1])
  });
}

router.route('/').get((req, res) => {
  Market.find({}, (markets, err) => {
    res.status(err ? 400 : 200). send(err || markets)
  }).populate('reviews').populate('stands')
});
router.route('/zipcode/:zipcode').get((req, res) => {
  let url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${req.params.zipcode}`
  axios.get(url)
  .then(r => r.data)
  .then(data => {
    res.send(data['results']);

  })
  .catch(error => {
    res.status(404).send('Not Found');
  })
});

//
// market_id: {type: String, required: true},
// link: {type: String, required: true},
// name: {type: String, required: true},
//address
// products: [{type: String, required: true}],
// schedule: {type: String, required: true},
// reviews: [ {type: Schema.Types.ObjectId, ref: 'Review'} ]
// stands: [{type: Schema.Types.ObjectId, ref: 'Stand'}]
router.route('/id/:id').post((req, res) => {
  let url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${req.params.id}`
  axios.get(url)
  .then(r => r.data)
  .then(data => {
    //res.send(data['marketdetails']);
    let market = data['marketdetails'];
    products = [];
    if(market.Products)
    products = market.Products.split(';');
    Market.findOne({market_id: req.params.id}, (err, mkt) => {
      if (!mkt) {
        console.log('req.body.name', req.body.name)
        let obj = {
          market_id: req.params.id,
          link: market.GoogleLink,
          name: req.body.name,
          address: market.Address,
          products: products,
          schedules: getSchedules(market.Schedule)
        }

        Market.create(obj, (err, newMarket) => {
          res.status(err ? 400 : 200).send(err || newMarket);
        });
      } else {
        res.status(err ? 400 : 200).send(err || mkt);
      }
    });
  })
  .catch(error => {
    res.status(404).send('Not Found');
  })
})

router.route('/:id')
.get((req, res) => {
  Market.findById(req.params.id, (err, market) => {
    res.status(err ? 400 : 200).send(err || market);
  });
})
.delete((req, res) => {
  Market.findByIdAndRemove(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  })
})

/* Market and Reviw*/
router.put('/:id/addReview/:reviewId', (req, res) => {
  Market.findById(req.params.id, (err, market) => {
    if(err || !market) {
      return res.status(400).send(err || 'Market not found.');
    }
    let reviewId = req.params.reviewId;
    Review.findById(reviewId, (err , review) => {
      if(err || !review) {
        return res.status(400).send(err || 'Review not found.');
      }
      market.reviews.push(reviewId);
      market.save((err, savedMarket) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(savedMarket)
      });
    });
  });
})

router.put('/:id/deleteReview/:reviewId', (req, res) => {
  Market.findById(req.params.id, (err, market) => {
    if(err || !market) {
      return res.status(400).send(err || 'Market not found.');
    }
    let reviewId = req.params.reviewId;
      market.reviews = market.reviews.filter(rev => {
        return rev != reviewId;
      });

      market.save((err, savedMarket) => {
        if (err) return res.status(400).send(err);
        Review.findByIdAndRemove(reviewId, err => {
          res.status(err ? 400 : 200).send(err || savedMarket);
        })
      });
  });
})


/* Market and Stand*/
router.put('/:id/addStand/:standId', (req, res) => {
  Market.findById(req.params.id, (err, market) => {
    if(err || !market) {
      return res.status(400).send(err || 'Market not found.');
    }
    let standId = req.params.standId;
    Stand.findById(standId, (err , stand) => {
      if(err || !stand) {
        return res.status(400).send(err || 'Stand not found.');
      }
      market.stands.push(standId);
      market.save((err, savedMarket) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(savedMarket)
      });
    });
  });
})

router.put('/:id/deleteStand/:standId', (req, res) => {
  Market.findById(req.params.id, (err, market) => {
    if(err || !market) {
      return res.status(400).send(err || 'Market not found.');
    }
    let standId = req.params.standId;
      market.stands = market.stands.filter(st => {
        return st != standId;
      });
      console.log('MARKET.REVIEWS', market.stands);
      market.save((err, savedMarket) => {
        if (err) return res.status(400).send(err);
        Stand.findByIdAndRemove(standId, err => {
          res.status(err ? 400 : 200).send(err || savedMarket);
        })
      });
  });
})
module.exports = router;
