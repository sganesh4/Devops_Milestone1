var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World App</h1>');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
//as
