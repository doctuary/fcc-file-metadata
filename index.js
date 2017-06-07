var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'pug');

app.get('/', function(req, res) {    
    res.render('index', {title: 'Hey', message: 'Hello there!'});
});

app.post('/upload', upload.single('selectedFile'), function (req, res, next) {
  res.json({fileSize: req.file.size});
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});