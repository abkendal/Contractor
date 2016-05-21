// Constructor website javascript

var app = {};

// Jumbotron selector
app.jumbotron = function(){

	// Item buttons
	$('.jumbotron-buttons').on('click', function(e) {
		e.preventDefault();
		var data = $(this).data('jumbo');
		$('.jumbotron').removeClass('active');
		$('.jumbotron[data-index='+data+']').addClass('active');
		$('.jumbotron-buttons').removeClass('active');
		$(this).addClass('active');

	});


	// Slider controls
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
	var moveRight = function () {
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
	}

	$('.control-right').on('click', function(e){
		e.preventDefault();
		moveRight();
	})

	setInterval(function(){ 
		moveRight();
	}, 4000);
}


app.init = function (){
	app.jumbotron();
};

$(function(){
	app.init();
});