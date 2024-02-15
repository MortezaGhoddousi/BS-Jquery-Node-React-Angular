var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    console.log(req.url);
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
    console.log(req.url);
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
    console.log(req.url);
    var data = {age: 19, job: 'Developer', hobbies:['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name , data:data});
});

app.listen(3000);