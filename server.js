var mosca = require('mosca');
var express = require('express');
var app = express();
//var mongoose = require('mongoose');
var mongo = require('mongodb')
var mongc = mongo.MongoClient
var url = 'mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/test?retryWrites=true&w=majority';

/*var ed = mongoose.connect("mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/test?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    //cluster0-shard-00-00-cn6hz.mongodb.net:27017
    useCreateIndex: true
   }).then(() => {
     console.log('connected to DB!');
   }).catch(err => {
     console.log('ERROR: ', err.message);
   });*/
   //mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/test?retryWrites=true&w=majority
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/mqtt?retryWrites=true&w=majority',
  //url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore,
  http:{
    port: 3000,
}
};


var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
};




app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
   });


//DO NOT FORGET, TO RUN I NEED TO CONNENT THE LINE 109 AND 110 FROM node_modules/jsonschema/lib/validator.js


























/******    
 * 
 * var mosca = require('mosca');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

/*var ed = mongoose.connect("mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/test?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    //cluster0-shard-00-00-cn6hz.mongodb.net:27017
    useCreateIndex: true
   }).then(() => {
     console.log('connected to DB!');
   }).catch(err => {
     console.log('ERROR: ', err.message);
   });/
var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: ed,
  //url: 'mongodb+srv://hossii:estaduro@cluster0-ulsyt.mongodb.net/test?retryWrites=true&w=majority',
  //url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: 1883,
  backend: ascoltatore,
  http:{
    port: 3000,
}
};


var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
};




app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
   });

 * 
 * ******* * */