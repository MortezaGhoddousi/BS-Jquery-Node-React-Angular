// module.exports.counter = function(arr){
//     return `There are ${arr.length} elements in this array`;
// }

// module.exports.adder = function(a, b){
//     return `The sum of the 2 numbers is ${a + b}`;
// }

// module.exports.Pi = 3.142;



// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.Pi = Pi;

var counter = function(arr){
    return `There are ${arr.length} elements in this array`;
}

var adder = function(a, b){
    return `The sum of the 2 numbers is ${a + b}`;
}

var Pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    Pi: Pi
}

