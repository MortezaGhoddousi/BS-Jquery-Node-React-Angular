// const log = console.log;

// log(__dirname);
// log(__filename);

// function sayHi(){
//     log('hi');
// }

// sayHi();

// var sayBye = function(){
//     log('Bye');
// }

// sayBye();

// var sayGoodMorning = () => {
//     log('GoodMorning');
// }

// sayGoodMorning();

// var callFunction = function(func){
//     func();
// }

// callFunction(sayGoodMorning);


var stuff = require('./stuff');

var arr = ['Younes', 'Morteza', 'AmirHosseyn', 'AmirAli', 'Sajjad', 'Nima', 'Masoumeh'];

console.log(stuff.counter(arr));
console.log(stuff.adder(3, 5));
console.log(stuff.Pi);

var events = require('events');

var myEmitter = new events.EventEmitter();

$('div').on('click', function(e){
    console.log(e)
})

myEmitter.on('click', function(msg){
    console.log(msg);
});

myEmitter.emit('click', 'Callback Function is invoked');

