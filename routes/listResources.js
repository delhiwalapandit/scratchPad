var router = require('express').Router();
var db = require('../config/db_connection');
/* GET users listing. */
router.get('/', function(req, res, next) {
 // console.log('-------------'+JSON.stringify(req.body));
  console.log(res);

    // res.render('index');
 db.get('mhdb').find({}, function (err, org) {
     console.log(org);
    res.render('index', {org: org});
  });
});


module.exports = router;
