var events = require('events');
var util = require('util');
var fs = require('fs');


// var myEmitter = new events.EventEmitter();

// myEmitter.on('click', function(msg){
//     console.log(msg);
// });


// console.log('Hello');

// myEmitter.emit('click', 'The event happens');

var Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var Younes = new Person('Younes');
var AmirHossein = new Person('AmirHossein');
var AmirAli = new Person('AmirAli');
var Sajjad = new Person('Sajjad');
var Masoumeh = new Person('Masoumeh');
var Nima = new Person('Nima');

var Web01 = [Younes, AmirHossein, AmirAli, Sajjad, Masoumeh, Nima];

Web01.forEach(function(e){
    e.on('speak', function(msg){
        console.log(`${e.name} said: ${msg}`);
    });
});

// Younes.emit('speak', "I'm white");
// AmirHossein.emit('speak', "hey dudes");


// var ReadFileTxt = fs.readFileSync('./names.txt', 'utf8');
// console.log(ReadFileTxt);

// console.log('hello');

// fs.writeFileSync('./NewNames.txt', ReadFileTxt);


fs.readFile('names.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('newNames.txt', data, function(err, data){
        console.log('End');
    });
});

console.log('hello');










