jQuery(document).ready(function(){

	if(jQuery(location).attr('href').indexOf('comercial') != -1 ) {
		jQuery('#options li a').removeClass('selected');
		jQuery('#options li:nth-of-type(3) a').addClass('selected');
	}

	if(jQuery(location).attr('href').indexOf('residencial') != -1 ) {
		jQuery('#options li a').removeClass('selected');
		jQuery('#options li:nth-of-type(4) a').addClass('selected');
	}

	jQuery('.about, .portfolio').hover(function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '300px'
		}, 200);
	}, function() {
		jQuery(this).find('.movable-content').stop().animate({
			left: '0px'
		}, 200);
	});

	jQuery('.tippy').hover(function() {
		jQuery(this).find('.hover-title').stop().fadeTo("fast",1);
	}, function() {
		jQuery(this).find('.hover-title').stop().fadeTo("fast",0);
		jQuery(this).find('.hover-title').delay(500).stop().css({
			'display': 'none'
		}, 0);
	});


});
