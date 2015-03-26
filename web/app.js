var express = require('express');
var app = express();
var secrets = require('./secrets.js');

var trackwords = 'BSidesROC, bsidesroc, BSIDESROC, bsidesROC'

app.get('/', function(request, response) {
  response.send('OK');
});

get_stream(trackwords);

function get_stream(trackwords) {
  var Twitter = require('twitter');
  var client = new Twitter ({
    consumer_key: secrets.consumer_key,
    consumer_secret: secrets.consumer_secret,
    access_token_key: secrets.access_token_key,
    access_token_secret: secrets.access_token_secret
  });

  //create stream
  client.stream('statuses/filter', {track: trackwords}, function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });

    stream.on('error', function(error) {
      console.log(error);
    });
  });
}

module.exports = app;
