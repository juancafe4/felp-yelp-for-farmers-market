const express = require('express');
const router = express.Router();

router.use('/markets', require('./markets'));
module.exports = router;
