Template.overview.onRendered(function(){

})

Template.overview.helpers({
	_overview: function () {
		// ...
		return Session.get('overview')||'profile';
	}
});