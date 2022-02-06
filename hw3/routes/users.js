// @author Caitlin Ching 
// CS341-B Dr. Cenek 
// Last modified: 02/04/2022

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
