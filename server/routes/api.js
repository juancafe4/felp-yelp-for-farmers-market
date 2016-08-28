const express = require('express');
const router = express.Router();

router.use('/markets', require('./markets'));
router.use('/reviews', require('./reviews'));
module.exports = router;
