$(function(){  
    $('header button').remove();
    $('.slide-up').click(function(){
        $('#lead-banner').slideToggle(1000, function(){
            alert('Animation Done');
        });
    });

    var allQuotes = $('blockquote');
    console.log(allQuotes);
    var counter = 0;
    
    setInterval(function(){
        $(allQuotes[counter]).fadeOut(200, function(){
            if (counter >= 3){
                counter = 0;
            }
            else{
                counter++;
            }
            $(allQuotes[counter]).fadeIn(200);
        });
    }, 3000);

    var item = $('#points-of-sale li');
    item.click(function(){
        $(this).find('p').slideToggle(500);
    });
})