// $(function(){
//     var att = $('#points-of-sale ul li img[alt="web design"]').attr('class');
//     setTimeout(function(){
//         if (att=='image1'){
//             $('#points-of-sale ul li img[alt="web design"]').attr('class', 'image2');
//         }
//     }, 8000);

//     console.log(att);
// });

$(function(){
    $('.wrapper button').on('click', function(){
        var theme = $('body').attr('class');
        if (theme == 'light'){
            $('body').attr('class', 'dark');
        }
        else {
            $('body').attr('class', 'light');
        }
    });

    // console.log($('#contact ul#contact-methods:'));
    // $('#contact ul#contact-methods li:even').css({border: '2px solid red'});
    // $('#contact ul#contact-methods li:odd').css({border: '2px solid blue'});
    // $('#contact ul#contact-methods li:lt(2)').css({border: '2px solid green'});
    // $('#contact ul#contact-methods li:gt(1)').css({border: '2px solid yellow'});

    $('#contact-methods').css({border: '2px solid blue'}).next().css({border: '2px solid red'}).prev().prev().css({border: '2px solid yellow'});
});