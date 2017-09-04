const fs = require('fs');

const data = fs.readFileSync('../../test_data/digitec/2017-09-04.txt');
console.log(data.toString());
