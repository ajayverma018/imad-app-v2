var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artical= {
    title: "artical one",
    heading: "hi frns",
    date: "14 feb",
    data:"this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text this is text ."
};

var htmlTemplate = '
<html>
<title>${title}</title>
<body>
<a href="/">Home</a>
<hr>
<h1>${heading}</h1>
<h6>${date}</h6>
${data}
</body>
</html>
';

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'test.html'));
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
