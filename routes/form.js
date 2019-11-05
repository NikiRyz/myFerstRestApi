var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express111' ,link: 'localhost:3000/fetch' });
});

module.exports = router;
