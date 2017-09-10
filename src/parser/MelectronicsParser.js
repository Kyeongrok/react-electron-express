const base_url = 'http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/';

// e.g. http://www.melectronics.ch//c/de/TV_%26_Audio/Fernseher/?fromIndex=15
const pagination_url = 'http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/?fromIndex='

const request = require('request');
const cheerio = require('cheerio');

var base_request_options = {
  method: 'GET',
  uri: base_url,
  headers: { 'User-Agent': 'Mozilla/5.0' },
};

var _total_item;

console.log("start")
request(base_request_options, function(error, response, html) {
  if (error) { throw error; }
  // console.log(html);

  // load website 
  var $ = cheerio.load(html);

  // find total number of item
  $('.total').first().each(function (index, elem) {
    // console.log($(this).text())
    _total_item = Number($(this).text())
  })
  console.log("request end")
});
console.log("end")

var pagination_request_options = {
  method: 'GET',
  uri: pagination_url,
  headers: { 'User-Agent': 'Mozilla/5.0' },
};

var fs = require('fs');

function parser(index) {
  request_options = pagination_request_options;
  request_options["uri"] = pagination_url + index
  console.log(request_options)
  request(request_options, function(error, response, html) {
    if (error) { throw error; }
    // console.log(html);

    // load website
    var $ = cheerio.load(html);

    // for test
    fs.writeFileSync('html' + index, html , 'utf8');
  })
};

setTimeout(function() {
  //console.log(_total_item);

  for (var i=0; i < _total_item/15; i++) {
    parser(i*15);
    //console.log(i*15);
  }
}, 10000); 
  