var fs = require('fs');

const log = console.log;

// var myWriteStream = fs.createWriteStream(__dirname + '/newtext.txt');

// log(myReadStream);

// myReadStream.on('data', function(chunk){
//     // log(chunk);
//     myWriteStream.write(chunk);
// });

// myReadStream.pipe(myWriteStream);

var http = require('http');

var server = http.createServer(function(req, res){
    log('request was made:' + req.url);
    log('request was made:' + req.ip);
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // var myReadStream = fs.createReadStream(__dirname + '/text.txt', 'utf8');
    // myReadStream.pipe(res);

    // res.end('Hey Guys. Younes is white!!');

    res.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
})

server.listen(3000, '127.0.0.1');

log('Now listening to port 3000');







