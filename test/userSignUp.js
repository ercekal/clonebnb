process.env.NODE_ENV = 'test';

var app = require('../app');
var Browser = require('zombie');
var http = require('http');

describe('signup', function() {
  before(function() {
    server = http.createServer(app).listen(3000);
    browser = new Browser({site: 'http://localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users/signup', done);
  });

it('should register the user and forward to links page', function(done) {
    browser.fill('name', 'ercekkk');
    browser.fill('email', 'er@ce.com');
    browser.fill('password', '123');
    browser.fill('password_confirmation', '123');
    browser.pressButton('Sign up').then(function() {
      browser.assert.success();
      browser.assert.text('h1', 'Welcome erce');
      done();
    });
  });
});
