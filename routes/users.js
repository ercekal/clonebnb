var express = require('express');
var router = express.Router();
var path = require("path");
var mongoose = require('mongoose');
var User = mongoose.model('User');


/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'User signup'});
});

router.post('/new', function(req, res, next) {
  User.create({name: req.query.name,
               email: req.query.email,
               password: req.query.password});
  res.send('/links');
});

module.exports = router;
