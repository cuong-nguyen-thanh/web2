'use strict';

var express = require('express');
var User = require('../user/user.model');

// Passport Configuration
require('./local/passport')(User);

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
