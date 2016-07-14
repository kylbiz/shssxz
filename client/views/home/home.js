Template.home.onRendered(function () {
	$(document).ready(function($) {
				var slider = $('.my-slider').unslider({
					keys: {
						prev: 37,
						next: 39,
						stop: 27 //  Example: pause when the Esc key is hit
					},
					arrows: {
						//  Unslider default behaviour
						prev: '<a class="unslider-arrow prevh"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i></a>',
						next: '<a class="unslider-arrow nexth"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i></a>',
					},
				});
				// slider.on();
	});
});

Template.home.helpers({
	
});