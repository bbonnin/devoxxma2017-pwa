
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/stats/os/mobile', function (req, res) {
    // Source: http://gs.statcounter.com/os-market-share/mobile/worldwide
    var data = [
        { 'year': 2014, 'and': 55.70, 'ios': 24.73, 'win': 2.32, 'others': 17.25 },
        { 'year': 2015, 'and': 66.77, 'ios': 18.14, 'win': 2.22, 'others': 12.87 },
        { 'year': 2016, 'and': 69.68, 'ios': 19.38, 'win': 1.63, 'others': 9.31 },
        { 'year': 2017, 'and': 73.52, 'ios': 19.37, 'win': 0.77, 'others': 6.34 }
    ]

    res.send(data);
});

app.listen(3000, function () {
  console.log('API server listening on port 3000!')
});

