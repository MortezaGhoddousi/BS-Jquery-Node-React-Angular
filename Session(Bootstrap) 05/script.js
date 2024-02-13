// var li = document.querySelectorAll('li');

// li.forEach(function(e){
//     e.addEventListener('click', function(){
//         var lis = document.querySelectorAll('li');
//         lis.forEach(function(el){
//             el.classList.remove('active');
//         })
//         e.classList.add('active');
//     })
// })


$('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
})