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
  if (req.body.password === req.body.password_confirmation) {
    User.create({name: req.body.name,
                 email: req.body.email,
                 password: req.body.password});
    User.findOne({'email': req.body.email }, function(err, user){
      req.session.user = user;
      console.log(req.session.user);
      req.session.save();
            console.log(req.session.user);
  res.render('listings');
});
  } else {
    res.render('signup');
  }
});

module.exports = router;
