var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('frontPage');

});

router.post('/dashboard', function(req, res, next) {
  res.render('frontPage');

});


module.exports = router;