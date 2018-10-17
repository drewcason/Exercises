$(document).ready(function(){
   //Part One
   
    $('[target]').css('color','blue');

    $('[type=text]').css('backgroundColor','pink');

    $('[type=checkbox]').css('backgroundColor','yellow');

    $('[href^="https"]').css('cursor','default');

    $('[href$=".edu"]').css('cursor','default');

    $('[href*="mart"]').css('cursor','default');


    //Part Two

    $('#btnShow').click(function() {
        $('.display-basic').show();
    });

    $('#btnHide').click(function() {
        $('.display-basic').hide();
    });

    $('#btnToggle').click(function() {
        $('.display-basic').toggle();
    });


    //Part Four

    $('#btnFadeIn').click(function() {
        $('.display-fade').fadeIn();
    });

    $('#btnFadeOut').click(function() {
        $('.display-fade').fadeOut();
    });

    $('#btnFadeToggle').click(function() {
        $('.display-fade').fadeToggle();
    });


    //Part Five

    $('#btnSlideDown').click(function() {
        $('.display-slide').slideDown();
    });

    $('#btnSlideUp').click(function() {
        $('.display-slide').slideUp();
    });

    $('#btnSlideToggle').click(function() {
        $('.display-slide').slideToggle();
    });
});

