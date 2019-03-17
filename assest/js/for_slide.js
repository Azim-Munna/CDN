(function($) {
    "use strict"
// magnificPopup
    $('.video_icon_btn').magnificPopup({
        type: 'iframe'

    });
    // owl
    $(".client_review_slider_area").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        margin: 20,
       autoplaySpeed: 2500,
       autoplayTimeout:5000 ,
        nav: true,
        dots: true,
//         smartSpeed: 4000,
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
