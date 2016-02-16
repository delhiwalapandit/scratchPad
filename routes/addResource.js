var express = require('express');
var router = express.Router();
var db = require('../config/db_connection');


router.get('/', function(req, res, next) {
  res.render('addResource');

});

router.post('/', function(req, res, next) {
console.log(req);
   db.get('mhdb').insert(req.body)
  res.render('frontPage');
});

module.exports = router;