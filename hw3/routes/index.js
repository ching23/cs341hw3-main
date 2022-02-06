// @author Caitlin Ching 
// CS341-B Dr. Cenek 
// Last modified: 02/04/2022 

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
