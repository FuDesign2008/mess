var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('user: ' + req.params.username);
  console.log(req.params);
  res.send('Time: is' + (new Date()).toString());
});

module.exports = router;
