(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		jQuery('.affi-alart-inner span').click(function(){
			jQuery('.affi-alart-wrapper').css({'display' : 'none'})
			
		});


		
		$(".js-video-button").modalVideo({
			youtube:{
				controls:0,
				nocookie: true
			}
		});
		

		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);