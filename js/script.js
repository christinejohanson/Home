(function($) { "use strict";

    // Smooth scroll to top function
    function scrollToTop() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    }
	//About page   
    $(".about-text").on('click', function () {
        $("body").addClass("about-on");
        scrollToTop();
    });
    $(".about-close").on('click', function () {
        $("body").removeClass("about-on");
    });


	//Contact page
    $(".contact-text").on('click', function () {
        $("body").addClass("contact-on");
        scrollToTop();
    });
    $(".contact-close").on('click', function () {
        $("body").removeClass("contact-on");
    });


	//Collage portfolio page
    $(".collage").on('click', function () {
        $("body").addClass("collage-on");
        scrollToTop();
    });
    $(".collage-close").on('click', function () {
        $("body").removeClass("collage-on");
    });
    
    //Portrait portfolio page
    $(".portrait").on('click', function () {
        $("body").addClass("portrait-on");
        scrollToTop();
    });
    $(".portrait-close").on('click', function () {
        $("body").removeClass("portrait-on");
    });
    
    //Manmade portfolio page
    $(".manmade").on('click', function () {
        $("body").addClass("manmade-on");
        scrollToTop();
    });
    $(".manmade-close").on('click', function () {
        $("body").removeClass("manmade-on");
    });
    
    //Wedding portfolio page
    $(".wedding").on('click', function () {
        $("body").addClass("wedding-on");
        scrollToTop();
    });
    $(".wedding-close").on('click', function () {
        $("body").removeClass("wedding-on");
    });
    
    //Work portfolio page
    $(".work").on('click', function () {
        $("body").addClass("work-on");
        scrollToTop();
    });
    $(".work-close").on('click', function () {
        $("body").removeClass("work-on");
    });

	//Nature portfolio page
    $(".nature").on('click', function () {
        $("body").addClass("nature-on");
        scrollToTop();
    });
    $(".nature-close").on('click', function () {
        $("body").removeClass("nature-on");
    });
    
})(jQuery);


