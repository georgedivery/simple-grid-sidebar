;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		//===========================================
		// test
		//===========================================
		
		console.log(1)

		$('.main-aside-btn-expand').on('click', function (e) {
			$(this).toggleClass('active')	
			$('.main-inner').toggleClass('active')
		})

		$('.btn-settings').on('click', function (e) {
			$(this).toggleClass('active')	
			$('.sidebar').toggleClass('active')
			$('.nav').toggleClass('active')
			$('.main').toggleClass('active')
		})

	}); //jQuery end
})(jQuery, window, document); 

 