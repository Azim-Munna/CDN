(function($) {
    "use strict"
// popup area  17-3-18
var click_cl=$('.click_popup_btn');
$(click_cl).on('click',function(){
    $('.popup_content_area').css('display','block');
    $('html, body').css({
    overflow: 'hidden',
    height: '100%'
});
})
$('.ic_bt_cr').on('click',function(){
     $('.popup_content_area').css('display','none');
     $('html, body').css({
    overflow: 'auto',
    height: 'auto'
});
});  

// end popup 17-3-19
})(jQuery);