const melectronics_url = 'http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/';

const item_url = 'http://www.melectronics.ch/p/de/LG_49SJ810V_123_cm_4K_Fernseher/770337600000/?listIndex=%d&service=false'
const request = require('request');
const cheerio = require('cheerio');

const request_options = {
  method: 'GET',
  uri: melectronics_url,
  headers: { 'User-Agent': 'Mozilla/5.0' },
};

request(request_options, (error, response, html) => {
  if (error) { throw error; }
  // console.log(html);

  // load website 
  var $ = cheerio.load(html);

  // find total number of item
  $('.total').first().each(function (index, elem) {
    // console.log($(this).text())
    var item_number = Number($(this).text())

    
  })


});
