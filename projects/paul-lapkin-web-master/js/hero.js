//JS

//Menü
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $(".overlay").toggleClass("open");
    $(".overlay a").toggleClass("open");
  $(".overlay p").toggleClass("open");
   });
});

//Owl-Clients
$('.owl-clients').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});