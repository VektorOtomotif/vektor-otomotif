$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:16,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1400:{
            items:4
        }
    }
  });
  $(".owl-carousel").on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
});