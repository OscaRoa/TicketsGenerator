var express = require('express');
var parser = require('body-parser');
var app = express();
var puerto = 3000;
app.use(express.static('static'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/tickets', function (req, res) {
  var nombre = req.body;
  console.log(nombre);
});

app.listen(puerto, function () {
  console.log('Port on ' + puerto);
});
