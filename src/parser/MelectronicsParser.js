var melectronics_url = "http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/";

var request = require("request")
var cheerio = require("cheerio")

var request_options = {
    method: "GET",
    uri: melectronics_url,
    headers: { "User-Agent": "Mozilla/5.0" }
};

request(request_options, function (error, response, html) {
    if (error) { throw error };
    console.log(html);
});