var express = require('express');
var router = express.Router();


router.get('/addResource', function(req, res, next) {
  res.render('frontPage');

});

module.exports = router;