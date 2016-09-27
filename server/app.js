var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var port = process.env.PORT || 8888;

// spin up a server
app.listen(port, function(){
  console.log('server is running on port: ', port);
})

app.get('/', function(req,res){
  console.log('base url is hit!!');
  res.sendFile(path.resolve('public/index.html'));
});
