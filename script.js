$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.close_header_burger, .bg_menu, .header_burger').toggleClass('active');
        $('body,html').toggleClass('poshelnahuiscroll');
    })
    $('.close_header_burger').click(function() {
        $('close_header_burger, .bg_menu, .header_burger').removeClass('active');
        $('body,html').removeClass('poshelnahuiscroll');
    });

});