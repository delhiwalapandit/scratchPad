var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frontPage');

});

router.post('/', function(req, res, next) {
  res.render('frontPage');

});


module.exports = router;
