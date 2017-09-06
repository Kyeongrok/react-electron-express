const express = require('express');
const app = module.exports = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('trust proxy', true);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(require('cookie-parser')());
app.use(cors());


const port = 1987;
const ipaddr = '127.0.0.1';

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.listen(port, ipaddr, () => {
  console.log(`Express server listening on port ${server.address().port} at ${server.address().address}`);
});

app.get('/', cors(corsOptions), (req, res) => {
  console.log('GET /');
  res.send('<h1>foo lala</h1>');
});
