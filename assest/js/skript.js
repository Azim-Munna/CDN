(function($) {
    "use strict"

    $(".tab_slid_content").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 20,
        autoplaySpeed: 4000,
        nav: true,
        dots: true,
        smartSpeed: 1000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    $(".owl-loaded ").addClass("owl-carousel");
    // bottom logo
    $('#menu-footer_menu').prepend('<div class="footer_logo"><img src="" alt="" />logo</div>');
    var m_win = $(window).width();
         if(m_win<=767){
            alert('ok');
         }
})(jQuery);
/*
jQuery(document).ready(function($) {

    var menuTrigger = "<span class='caret caret-up'></span>";

    var hasSubmenu = $('ul li').has('ul').addClass('hasSubmenu').find('>a').prepend(menuTrigger);

    $('.caret').on('click', function() {

        $(this).toggleClass('caret-down').closest('li').siblings().find('.caret').removeClass('caret-down');

        $(this).closest('li').find('>ul').stop(true, true).slideToggle();


    });
    
});
*/