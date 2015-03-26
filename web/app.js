var express = require('express');
var app = express();
var secrets = require('./secrets');

var trackwords = 'BSidesROC BSIDESROC bsidesroc bsidesROC'

app.get('/', function(request, response) {
  response.send('OK');
});

get_stream(trackwords)

function get_stream(trackwords) {
  var Stream = require('user-stream');
  var stream = new Stream({
    consumer_key: secrets.consumer_key,
    consumer_secret: secrets.consumer_secret,
    access_token_key: secrets.access_token_key,
    access_token_secret: secrets.access_token_secret
  });
  var params = {
    follow: trackwords
  }

  //create stream
  stream.stream(params);

  //listen stream data
  stream.on('data', function(json) {
   console.log(json);
  });
}
module.exports = app;
