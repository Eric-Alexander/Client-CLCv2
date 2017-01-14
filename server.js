// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// optional require body-parser (to receive post data from clients)

var path = require('path');
// Setting Static Folder Directory
app.use(express.static(path.join(__dirname, './public')));
// Setting View Engine set to html
app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// Routes
// Root Request
app.get('/', function(req, res) {

    res.render('index');
});
app.get('/home', function(req, res) {

    res.redirect('index.html');
})
app.get('/academics', function(req, res) {

    res.redirect('academics.html');
})
app.get('/business', function(req, res) {

    res.redirect('business.html');
})
app.get('/life', function(req, res) {

    res.redirect('life.html');
})
app.get('/approach', function(req, res) {

    res.redirect('approach.html');
})

// Setting Server to Listen on Port: 8000
app.listen(4000, function() {
    console.log("listening on port 4000");
});
