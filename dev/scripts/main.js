$(document).ready(function(){

    $('.home-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 2000
    });

    // function voltarAoTopo() {
    //     $(document).on('scroll', function() {
    //         var y = $(this).scrollTop();
    //         if (y > 500) {
    //             $('a.btn-back').fadeIn();
    //         } else {
    //             $('a.btn-back').fadeOut();
    //         }
    //     });

    //     $('a.btn-back').click(function(){
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 1000);
    //         return false
    //     });
    // }
    //voltarAoTopo();

});