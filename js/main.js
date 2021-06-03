//JS

//Lazy-Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});

//Menu
$(function () {
    $('.hamburger').on('click', function () {
        $('.toggle').toggleClass('open');
        $('.menu').toggleClass('open');
    });
});

//Menu-Active
jQuery(function($) {
    var path = window.location.href;
    $('ul li a').each(function() {
        if (this.href === path) {
            $(this).addClass('active');
        }
    });
});

//Menu-Scroll
$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed')
    }
});

//Home-Slider-Owl
$('.home-slider-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1400:{
            items:1
        },
    }
});

//Home-Services-Owl
$('.home-services-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        },
    }
});

//Home-Projects-Owl
$('.home-projects-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }, 
        1000:{
            items:3
        },
        1400:{
            items:3
        },
        1800:{
            items:3
        }
    }
});

//About-Counter
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

//About-Brands-Owl
$('.about-brands-owl').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots:true,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1400:{
            items:4
        },
        1800:{
            items:4
        }
    }
})