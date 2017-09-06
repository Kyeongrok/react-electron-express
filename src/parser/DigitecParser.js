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

module.exports.getProductInfo = getProductInfo;