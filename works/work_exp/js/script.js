$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock'); //  блокировка прокрутки сайта при открытом меню
    });
});
$(function(){
    $('.header__list a').each(function(){
        let location = window.location.href;
        let link = this.href;
        if(location == link) {
            $(this).addClass('active');
        }
    });
});
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});