$(document).ready(function(){
    $('.content-about').slideUp(800);
    $('.content-about').slideDown();(1000);

//cai lz nay cua cai nao v
    $(".slider-start").owlCarousel(
        {
            items:1,
            margin:10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 6000,
            nav: true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            // navSpeed: 6000,
            // items 3 : hien 3 hinh
        }
    );
    $(".slider-end").owlCarousel(
        {
            items:4,
            margin:10,
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 6000,
            nav: true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            // navSpeed: 6000,
            // items 3 : hien 3 hinh
        }
    );
    
  
    
  });