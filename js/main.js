/**
*
* -----------------------------------------------------------------------------
*
* Ghorte - Responsive Landing HTML5 Template
* Author : thecodude
* Author URI : http://thecodude.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {

    "use strict";

    var win = $(window);

    // scrollTop init
    var totop = $('#toTop');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
	// counter
	$('.counter').counterUp({
    delay: 10,
    time: 2000
});

    // totop scroller
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });


    // Booking From
    function floatLabel(inputType){
        $(inputType).each(function(){
            var $this = $(this);
            $this.focus(function(){
                $this.next().addClass("active");
            });
            
            $this.blur(function(){
                if($this.val() === '' || $this.val() === 'blank'){
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel(".floatLabel");

    // Magnific Pop up js (Home Video)
    

    if ($('.banner-slider').length) {
        // Banner Slider
        $('.banner-slider').owlCarousel({
            loop:true,
            items:1,
            margin:30,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:true
        })

    }

    if ($('.testi-slider').length) {
        // Testimonial Slider
        $('.testi-slider').owlCarousel({
            loop:true,
            items:1,
            margin:20,
            autoplay:true,
            slideSpeed : 300,
            nav:false,
            dots:true
        })
    }

    if ($('.portfolio-slider').length) {
        // Destination Slider
        $('.portfolio-slider').owlCarousel({
            loop:true,
            items:1,
            margin:20,
            autoplay:false,
            slideSpeed : 300,
            nav:true,
            dots:false,
            navContainer: '.portfolio-slider',
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:2,
                    nav:true
                },
                992:{
                    items:3,
                    nav:true,
                    loop:true
                },
                1200:{
                    items:4,
                    nav:true,
                    loop:true
                }
            }
        })
    }

    if ($(".related_post_slide").length) {
        $(".related_post_slide").owlCarousel({
            items: 2,
            loop: true,
            dots: false,
            autoplay: true,
            singleItem: true,
            smartSpeed: 500
        });
    }
	
})(jQuery);
