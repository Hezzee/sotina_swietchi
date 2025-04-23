$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.close_header_burger, .bg_menu, .header_burger, .header_h1').toggleClass('active');
        $('body,html').toggleClass('poshelnahuiscroll');
    })
    $('.close_header_burger').click(function() {
        $('close_header_burger, .bg_menu, .header_burger, .header_h1').removeClass('active');
        $('body,html').removeClass('poshelnahuiscroll');
    });
    $('#filter_btn').click(function() {
        $('#filter_list,.main_shop,.products').toggleClass('hidden');

        if ($('#filter_list').hasClass('hidden')) {
            $('#filter_btn').text('Показать фильтры');
        } else {
            $('#filter_btn').text('Закрыть фильтры');
        }
    });
});













