var router = require('express').Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('index');
});

router.post('/users', function(req, res, next) {
  res.send('index');
});
module.exports = router;
