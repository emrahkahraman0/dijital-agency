//JS

//Menu
$(function(){
    $('.menu').slicknav();
});

//Progress-Bar
(function($){
    new WOW().init();
})(jQuery);

//Counter-Box
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//Project-Tab
$(".project-tab").pTab({
    pTab: '.tab-list',
    pTabElem: 'li',
    pContent: '.tab-content'
});

//Owl-Clients
$('.owl-clients').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    merge:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1200:{
            items:1
        }
    }
})