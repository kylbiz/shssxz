Template.cohome.onRendered(function () {
	$(document).ready(function($) {	
		$('.cohome-title div').click(function (e) {
			var target = e.target;
			var val = $(target).attr('val');
			console.log('val',val);
			Session.set('show', val);
		});
	});
});

Template.cohome.helpers({
	_show: function () {
		 // body...  
		 return Session.get('show') || 'homeTrade';
	}
});