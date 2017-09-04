const client = require('cheerio-httpcli');

const printHttpResponse = url => client.fetch(url, {}, (err, $) => {
  if (err) { console.log('error:', err); return; }

  const list = $('.addProductTo');

  for (let i = 0; i < list.length; i++) {

  }

  const string = list[1].attribs.onclick;


  console.log(string);
  // const json = JSON.parse(string.replace('dataLayer.push(', '').replace(');', ''));
   const match = string.match(/data/m);
  // console.log(match.length);
});
const url = 'https://www.digitec.ch/de/s1/producttype/tv-4?tagIds=538&take=10';
printHttpResponse(url);

