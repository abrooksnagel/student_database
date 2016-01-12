var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

var Assignment = require('../models/assignments');

var express = require('express');
var index = require('./routes/index');

var app = express();

app.use('/', index);
app.use(express.static('public'));
app.use(bodyParser.json());

MongoDB.on('error', function(err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function() {
    console.log('mongodb connection open!');
});

Assignment.create({
    number: 1,
    name: "Brooks",
    score: 80,
    date: "2016-01-12",
    pass: true
});

//get will fetch data from db
//put will add data to db






var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log("Listening on port", port);
});