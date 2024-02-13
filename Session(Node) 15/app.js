console.log('hello From Node.JS');

// setTimeout(function(){
//     console.log('This line of code run after 2 seconds');
// }, 2000);


// time = 0;

// var timer = setInterval(function(){
//     time += 2;
//     if (time > 6){
//         clearInterval(timer);
//     }
//     console.log(`This line of code run after ${time} seconds`);
// }, 2000);


const log = console.log;

function sayHello (){
    log('Hello');
}

sayHello()


function asyncFunction(work){
    return new Promise(function(resolve, reject){
        if (work === ''){
            reject (Error('There is no work'));
        }

        setTimeout(function(){
            resolve(work);
        }, 2000);
    })
}

asyncFunction('Work1').then(function(result){
    log(result)
    return asyncFunction('Work2').then(function(result){
        log(result);
    }, function(e){
        log(e);
    })
}, function(e){
    log(e);
})

log('end');