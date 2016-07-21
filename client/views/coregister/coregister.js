Template.coregister.onRendered(function () {
	$('.coregister-infor .infor-con').click(function (event) {
		var target = event.currentTarget;
		var val = $(target).attr('val');
		FlowRouter.go('/coregister/'+val);
		// window.location.href = 'http://demo.kyl.biz:8809/coregister/'+val;
	})
	$('.infor-con').each(function () {
			var that = this;
			$(this).hover(function () {
				var img = $(that).find('img').attr('src');
				var png = '.png';
				var img1 = img.toString().replace(png, '');
				// console.log(img1);
				$(that).find('img').attr('src',img1 + '1.png');
			}, function () {
				var img = $(that).find('img').attr('src');
				var png = '1.png';
				var img1 = img.toString().replace(png, '');
				$(that).find('img').attr('src',img1 + '.png');
			});
		});
	$('.switch-title div').click(function (e) {
		var target = e.target;
		var val = $(target).attr('val');
		$(target).addClass('textactive').siblings().removeClass('textactive');
		Session.set('range', val);
	});

});

Template.register.onRendered(function () {
	$('.coregister-infor .infor-box').each(function (e) {
		var target = e.target;
		var val = $(target).index();
		// console.log(val);
	});
});

Template.specialService.onRendered(function () {
	$('.little-change span').click(function (e) {
		var target = e.target;
		var val = $(target).attr('val');
		console.log('val',val);
		if(val == null){
			return;
		}
		Session.set('special', val);
		$(this).addClass('span-news').siblings().removeClass('span-news');
	});
});
Template.specialService.helpers({
	_special: function () {
		 // body...  
		 return Session.get('special') || 'matingservice';
	}
});

Template.range.helpers({
	_range: function () {
		 // body...  
		 return Session.get('range') || 'Tradetype';
	}
});