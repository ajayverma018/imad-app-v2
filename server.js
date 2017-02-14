var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artical= {
    tit: "artical one",
    heading: "hi frns",
    date: "14 feb",
    ct:"<p>this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text .</p>"
};

function create (data){
tit= data.tit;
heading= data.heading;
date= data.date;
ct= data.ct;

var Temp=` <html>
            <head>
            <title>${tit}</title>
            </head>
            <body>
            <a href="/">Home</a>
            <hr>
            <h1>${heading}</h1>
            <h6>${date}</h6>
            ${ct}
            </body>
            </html>`;
            return Temp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'test.html'));
});

app.get('/artical', function (req, res) {
  res.send(create(artical));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
