// Constructor website javascript

var app = {};

// Jumbotron selector
app.jumbotron = function(){
	$('.jumbotron-buttons').on('click', function(e) {
		e.preventDefault();
		// var data = $(this).data('jumbo');
		// $('.jumbotron').removeClass('active');
		// $(data).addClass('active');
		// $('.jumbotron-buttons').removeClass('active');
		// $(this).addClass('active');

		var data = $(this).data('jumbo');
		$('.jumbotron').removeClass('active');
		$('.jumbotron[data-index='+data+']').addClass('active');
		$('.jumbotron-buttons').removeClass('active');
		$(this).addClass('active');

	});



	$('.control-left').on('click', function(e){
		e.preventDefault();
		var data = $('.jumbotron.active').data('index');
		var dataMin = data-1;
		$('.jumbotron').removeClass('active');
		$('.jumbotron-buttons').removeClass('active');
		if (dataMin >0) {
			$('.jumbotron[data-index='+(dataMin)+']').addClass('active');
			$('.jumbotron-buttons[data-jumbo='+(dataMin)+']').addClass('active');
		}
		else {
			dataMin = $('.jumbotron').length;
			$('.jumbotron[data-index='+(dataMin)+']').addClass('active');
			$('.jumbotron-buttons[data-jumbo='+(dataMin)+']').addClass('active');
		}
	})

	$('.control-right').on('click', function(e){
		e.preventDefault();
		var data = $('.jumbotron.active').data('index');
		var dataMin = data+1;
		$('.jumbotron').removeClass('active');
		$('.jumbotron-buttons').removeClass('active');
		if (dataMin <= $('.jumbotron').length) {
			$('.jumbotron[data-index='+(dataMin)+']').addClass('active');
			$('.jumbotron-buttons[data-jumbo='+(dataMin)+']').addClass('active');
		}
		else {
			dataMin = 1;
			$('.jumbotron[data-index='+(dataMin)+']').addClass('active');
			$('.jumbotron-buttons[data-jumbo='+(dataMin)+']').addClass('active');
		}
	})
}


app.init = function (){
	app.jumbotron();
};

$(function(){
	app.init();
});