$(function(){
    // var wrapper = true;
    // $('.button').click(function(e){
        // console.log(e.target);
        // if (wrapper){
        //     $('header .wrapper').removeClass('wrapper');
        //     wrapper = !wrapper;
        //     e.target.innerHTML = 'Unwrap';
        // }
        // else {
        //     $('header div').addClass('wrapper');
        //     wrapper = !wrapper;
        //     e.target.innerHTML = 'Wrap';
        // }
        // $('header div').toggleClass('wrapper')
    // });

    // $('.banner-overlay .wrapper a').click(function(e){
    //     e.preventDefault();
    //     $(this).animate({
    //         width: '400px',
    //         height: '100px',
    //         background: '#eee'
    //     }, 1000, 'linear');
    // });
    $('header button').remove();
    // $('.banner-overlay').click(function(e){
    //     e.preventDefault();
    //     // $(this).animate({opacity: "0.5"});
    //     // $(this).fadeOut(2000).fadeIn(1000);
    //     // $(this).fadeOut().fadeIn()
    //     // .fadeOut().fadeIn()
    //     // .fadeOut().fadeIn()
    //     // $(this).fadeTo(2000, 0.2).fadeTo(5000, 0.9);
    //     // $(this).hide(2000).show(1000);
    //     $('.banner-overlay .wrapper a').toggle(1000);
    // })

    $('.slide-up').click(function(){
        // $('#lead-banner').slideUp(1000);
        $('#lead-banner').slideToggle(1000, function(){
            alert('Animation Done');
        });
    })

    // $('.slide-down').click(function(){
    //     $('#lead-banner').slideDown(1000);
    // })
})