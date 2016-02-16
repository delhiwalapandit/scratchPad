var router = require('express').Router();
var db = require('../config/db_connection');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
//   // res.sendFile('/home/jamie/infoSplash/mhealth/views/hp.html');

// // res.render();


// });


router.get('/', function(req, res, next) {
  res.render('frontPage');

});
// router.get('/', function(req, res, next) {

//     // res.render('index');
//  db.get('mhdb').find({}, function (err, org) {
//  	console.log(org);
//     res.render('index', {org: org});
//   });
// });

// router.post('/', function(req, res, next){

// 	res.render('addResouce');
// })

// router.get('/', function(req, res, next){

// 	res.render('addResource');
// })

module.exports = router;
