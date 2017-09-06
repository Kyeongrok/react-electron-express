const express = require('express');

const router = express.Router();
const client = require('cheerio-httpcli');

const digitecParser = require('../../parser/DigitecParser');

router.get('/', (req, res, next) => {
  console.log('GET /');

  const string = client.fetchSync('https://www.digitec.ch/de/s1/producttype/tv-4?tagIds=538&take=10');
  const productContent = string.$('.product-content');
  const result = { status: 'ok', list: [] };
  for (let i = 0; i < productContent.length; i += 1) {
    result.list.push(digitecParser.getProductInfo(productContent[i]));
  }

  res.send(result);
});


module.exports = router;
