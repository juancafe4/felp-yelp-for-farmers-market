const express = require('express');
const router = express.Router();
const axios = require('axios');


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

router.route('/id/:id').get((req, res) => {
  let url = `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${req.params.id}`
    axios.get(url)
    .then(r => r.data)
    .then(data => {
      res.send(data['marketdetails']);
    })
    .catch(error => {
      res.status(404).send('Not Found');
    })
})
module.exports = router;
