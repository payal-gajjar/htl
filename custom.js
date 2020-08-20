 jQuery(function($) {
	  $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        autoPlay:false,
        transitionStyle:"backSlide"        
    });
	        $("#logo-slider").owlCarousel({
        items:2,
        margin:0,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        autoPlay:false,
        // transitionStyle:"backSlide"
        
    });
	        
});




