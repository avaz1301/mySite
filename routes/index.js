var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', onHome:true });
});

router.get('/about', function(req,res){
    res.render('About', {onAbout:true });
});

router.get('/portfolio', function(req,res){
    res.render('Portfolio', {onPort:true });
});

router.get('/contact', function(req,res){
    res.render('Contact', {contact:true });
});

module.exports = router;
