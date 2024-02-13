var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log(req.url);

    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    }

    else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    }

    else if (req.url === '/api/students'){
        var AmirHossein = {
            fname: 'Amirhossein',
            lname: 'Seddiq Taghizadeh',
            age: 17,
            job: 'Student'
        }

        var AmirAli = {
            fname: 'AmirAli',
            lname: 'Shakouri',
            age: 17,
            job: 'Student'
        }

        var Younes = {
            fname: 'Younes',
            lname: 'Bavafaa',
            age: 25,
            job: 'Student'
        }

        var Sajjad = {
            fname: 'Sajjad',
            lname: 'Talebi',
            age: 19,
            job: 'Student'
        }

        var Nima = {
            fname: 'Nima',
            lname: 'Mollazadeh',
            age: 15,
            job: 'Student'
        }

        var Masoumeh = {
            fname: 'Masoumeh',
            lname: 'Khodarami',
            age: 29,
            job: 'Developer'
        }

        var students = [Younes, AmirHossein, AmirAli, Sajjad, Nima, Masoumeh];

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(students));
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myReadStream.pipe(res);
    }


    // res.writeHead(200, {'Content-Type': 'application/json'});
    // var Obj = {
    //     fname: 'Morteza',
    //     lname: 'Ghoddousi',
    //     age: 29,
    //     job: 'Developer'
    // };
    // 
    // res.end(JSON.stringify(Obj));


});

server.listen(3000, '127.0.0.1');
console.log('Server Started');

