// create a web server using node.js
// run using node comments.js
// using express.js
// https://expressjs.com/
// https://www.npmjs.com/package/express
// https://www.npmjs.com/package/body-parser

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/getComments', function (req, res) {
   var comments = [
      { "name":"John", "comment":"I like this article"},
      { "name":"Mary", "comment":"I like this article too"}
   ];
   res.end( JSON.stringify(comments));
})

app.post('/postComment', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   var comment = {
      name:req.body.name,
      comment:req.body.comment
   };
   console.log(comment);
   res.end( JSON.stringify(comment));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Web server listening at http://%s:%s", host, port)
})