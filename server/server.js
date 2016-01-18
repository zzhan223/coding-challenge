var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/invoice', function(req, res){
  console.log('req: ', req.body);
  //save invoice data
  res.send('got request');
});

app.listen(process.env.port || 3000);
