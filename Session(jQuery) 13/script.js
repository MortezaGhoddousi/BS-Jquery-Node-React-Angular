$(function(){
    // var parent = $('#points-of-sale').parent();
    // console.log(parent);
    // var children = $('#points-of-sale').children();
    // console.log(children);
    // var div = $('body').find('#points-of-sale');
    // console.log(div);

    // var p = $('.banner-overlay .wrapper p').closest('section');
    // console.log(p);

    // $('#clients blockquote').append('<h1>Hello Append</h1>').prepend('<h1>Hello Prepend</h1>').before('<h1>Hello Before</h1>').after('<h1>Hello After</h1>');
    // $('#clients').html('<h1> Hello HTML </h1>');
    // $('#clients h2').text('Hello Text');

    // $('#contact-methods li').wrapAll('<div class="wrapper">');

    // console.log($('.button'));
    // console.log(document.getElementsByClassName('button'));
    // console.log(document.querySelector('.button'));

    var wrapper = true;

    $('.button').css({cursor: 'pointer'}).click(function(e){
        if (wrapper){
            $('header #logo').unwrap();
            wrapper = false;
            e.target.innerHTML = 'Unwrap';
        }
        else {
            $('header').children().wrapAll('<div class="wrapper">');
            wrapper = true;
            e.target.innerHTML = 'Wrap';
        }
    });

    // console.log(button);

    // button[0].addEventListener('click', function(event){
    //     if (wrapper){
    //         $('header #logo').unwrap();
    //         wrapper = false;
    //         event.target.innerHTML = 'Unwrap';
    //     }
    //     else {
    //         $('header').children().wrapAll('<div class="wrapper">');
    //         wrapper = true;
    //         event.target.innerHTML = 'Wrap';
    //     }
    // });

    // button.click(function(e){
    //     if (wrapper){
    //         $('header #logo').unwrap();
    //         wrapper = false;
    //         e.target.innerHTML = 'Unwrap';
    //     }
    //     else {
    //         $('header').children().wrapAll('<div class="wrapper">');
    //         wrapper = true;
    //         e.target.innerHTML = 'Wrap';
    //     }
    // });

    // $('header button').empty();
    $('header button').remove();

    $('header .wrapper').removeAttr('class');
    $('header div').attr('class', 'wrapper');

    $ ('nav ul li').eq(1)
})