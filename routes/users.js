var router = require('express').Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  res.send('index');
});
module.exports = router;
