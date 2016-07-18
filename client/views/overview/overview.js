Template.overview.onRendered(function(){
	$(document).ready(function() {
		$('.overview-header ul li a').click(function(event) {
			/* Act on the event */
			$('.overview-header ul li a').removeClass('click');
			$(this).addClass('click');
		});	
	});
})

Template.overview.helpers({

});