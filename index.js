var express = require('express');
var app = express();
var puerto = 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.post('/tickets', function (req, res) {
  res.sendFile(__dirname + '/ticket.html')
});

app.listen(puerto, function () {
  console.log('Port on ' + puerto);
});
