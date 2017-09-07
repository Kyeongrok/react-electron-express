const melectronicsUrl = 'http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/';

const request = require('request');
const cheerio = require('cheerio');

const requestOptions = {
  method: 'GET',
  uri: melectronicsUrl,
  headers: { 'User-Agent': 'Mozilla/5.0' },
};

request(requestOptions, (error, response, html) => {
  if (error) { throw error; }
  // console.log(html);

  // load website 
  var $ = cheerio.load(html);

  // find total number of item
  $('.total').first().each(function (index, elem) {
    console.log($(this).text())
  })

});
