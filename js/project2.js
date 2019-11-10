$(document).ready(function(){
    $(".new-one").owlCarousel({
        items: 1,
        autoplay: (true,300),
        loop : true,

        // boolean: false,



    });
    $(".new-two").owlCarousel({
        items: 1,
        autoplay: (true,200),
        // boolean: false,
        loop : true,
        


    });

  });
  $(window).scroll(function() {    // this will work when your window scrolled.
    var height = $(window).scrollTop();  //getting the scrolling height of window
    if(height  > 100) {
        $("header").css({"position": "fixed"});
    } else{
        $("header").css({"position": "relative","width":"1300px", "x-index":"10",
    
        });
    }
});