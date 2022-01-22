(function($){
	// Code Start

	$('.menu-icon i').on( 'click',function(){
		$('.bot-menu').slideToggle();

	} );


	$(window).resize(function(){
		var screenSize=$(window).width();
		if(screenSize>768){
			$('.bot-menu').removeAttr('style');
		}
	});

})(jQuery);