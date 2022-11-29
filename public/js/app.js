// Import Navbar
$(function(){
    $("#navbar").load("../../module/navbar.html"); 
    $("#footer").load("../../module/footer.html"); 
});

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
                nav:true,
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

    // Password Visibility
    $("body").on('click', '.toggle-password', function() {
        $(this).toggleClass("bi-eye bi-eye-slash");
        var input = $("#password");
        console.log(input)
        input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
    });
    $("body").on('click', '.toggle-confpassword', function() {
        $(this).toggleClass("bi-eye bi-eye-slash");
        var input = $("#confpassword");
        console.log(input)
        input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
    });
});