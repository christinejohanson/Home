(function($) { "use strict";


	//About page
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});


	//Contact page
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});


	//Collage portfolio page
	$(".collage").on('click', function () {
		$("body").addClass("collage-on");
	});
	$(".collage-close").on('click', function () {
		$("body").removeClass("collage-on");
    });
    
    //Portrait portfolio page
	$(".portrait").on('click', function () {
		$("body").addClass("portrait-on");
	});
	$(".portrait-close").on('click', function () {
		$("body").removeClass("portrait-on");
    });
    
    //Manmade portfolio page
	$(".manmade").on('click', function () {
		$("body").addClass("manmade-on");
	});
	$(".manmade-close").on('click', function () {
		$("body").removeClass("manmade-on");
    });
    
    //Wedding portfolio page
	$(".wedding").on('click', function () {
		$("body").addClass("wedding-on");
	});
	$(".wedding-close").on('click', function () {
		$("body").removeClass("wedding-on");
    });
    
    //Work portfolio page
	$(".work").on('click', function () {
		$("body").addClass("work-on");
	});
	$(".work-close").on('click', function () {
		$("body").removeClass("work-on");
	});


	//Travel portfolio page

	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});


	//Wildlife portfolio page

	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});


	//Nature portfolio page

	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
    });
    
})(jQuery);


