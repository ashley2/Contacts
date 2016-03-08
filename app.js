'use strict'

const PORT = 3333

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var Contacts = require('./contacts')

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
})

app.get('/contacts',function(req, res){
  Contacts.read(function (err, contacts){
    if(err){
      return res.status(400).send(err);
    }
    res.send(contacts);
  })
})


app.post('contacts',function(req, res){
  Contacts.read(function (err, contacts){
    if(err){
      return res.status(400).send(err);
    }
    var newContacts = req.body;
    contacts.push(newContacts);

    Contacts.write(contacts, function(err){
      if(err){
      return res.status(400).send(err);
    }
      res.send();
    });
  });
});



var server = http.createServer(app);
server.listen(PORT, function(){
  console.log(`Server Listening on port ${PORT}`);
})