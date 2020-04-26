//JS

//Lazy-Load
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload"
});

//Menu
$(function(){
    $('.menu').slicknav();
});

//Scroll-Down
function scrollWin(x, y) {
    window.scrollBy(x, y);
};

//Projects-Counter
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

//Projects-tab
$(".projects-tab").pTab({
    pTab: '.tab-list',
    pTabElem: 'li',
    pContent: '.tab-content'
});

//Clients-Owl
$('.clients-owl').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:true,
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
        1200:{
            items:1
        }
    }
});

//Form-Validation
$(document).ready(function() {
    $('#submit').click(function() {
        isim=$('#isim').val();
        email=$('#email').val();
        tel=$('#tel').val();
        messaage=$('#message').val();
        uyari="";
        //İsim
        if(isim=="") {
            uyari+="İsim Alanı boş olamaz";
        }
        else if(isim.length<3) {
            uyari+="İsim Alanı 3 Karakterden az olamaz";
        }
        //Email
        if(email=="") {
            uyari+="Email Alanı boş olamaz";
        }
        else if(email.length<3) {
            uyari+="Email Alanı 7 Karakterden az olamaz";
        }
        //Tel
        if(tel.length!=11) {
            uyari+="Telefon numaranız 11 haneli olmalıdır.";
        }

        $('.uyari').text(uyari);

    });
});