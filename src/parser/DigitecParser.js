const client = require('cheerio-httpcli');

const getProductInfo = (productContent) => {
  const productInfo = {};
  productInfo.currency = productContent.children[1].children[1].children[0].data;
  productInfo.price = productContent.children[1].children[2].data;
  productInfo.name = productContent.children[3].children[2].data;

  if (productContent.children[1].children.length === 4) {
    productInfo.appendix = productContent.children[1].children[3].children[0].data;
  }
  return productInfo;
};

const printHttpResponse = url => client.fetch(url, {}, (err, $) => {
  if (err) { console.log('error:', err); return; }

  const productContent = $('.product-content');


  for (let i = 0; i < productContent.length; i++) {
    console.log(getProductInfo(productContent[i]));
  }
});
const url = 'https://www.digitec.ch/de/s1/producttype/tv-4?tagIds=538&take=10';
printHttpResponse(url);

