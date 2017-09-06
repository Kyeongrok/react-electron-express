const express = require('express');
const app = module.exports = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const digitec = require('./routes/digitec');


app.set('trust proxy', true);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(require('cookie-parser')());

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use('/digitec', digitec);

const port = 1987;
const ipaddr = '127.0.0.1';


server.listen(port, ipaddr, () => {
  console.log(`Express server listening on port ${server.address().port} at ${server.address().address}`);
});

app.get('/', cors(corsOptions), (req, res) => {
  console.log('GET /');
  res.send('<h1>foo lalaa</h1>');
});


