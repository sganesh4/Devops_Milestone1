var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello world', function(done) {
  	console.log("hello done");
    request(app).get('/').expect('hello world', done);
  });
});
//for commit