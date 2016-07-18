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

		$('.news .content-title span').click(function (e) {
			var target = e.target;
			var val = $(target).attr('val');
			// console.log('val',val);
			if(val == null){
				return;
			}
			var that = this;
			$(this).addClass('span-news').siblings().removeClass('span-news');
			$('.news .left-content div').each(function(event) {
				var data = $(this).attr('data-news');
				if(data ==val){
					$(this).removeClass('hide').siblings().addClass('hide');
				}
			});
		});
	});
});

Template.home.helpers({
	news:function(){
		return [
			{
				text:'APEC商务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEC商务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEC商务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEC商务签证服务',
				time:'2011-01-12'
			}
		]
	},
	notice:function(){
		return [
			{
				text:'AP公告商务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEeeeeC商务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEC商eee务签证服务',
				time:'2011-01-12'
			},
			{
				text:'APEC商务eee签证服务',
				time:'2011-01-12'
			}
		]
	},
	imgContent:function(){
		return [
			{
				url:'/image/home/cowin/dehao.jpg',
				text:'上海德皓有限公司',
			},
			{
				url:'/image/home/cowin/meilinge.jpg',
				text:'上海美林阁餐饮经营管理有限公司',
			},
			{
				url:'/image/home/cowin/diyang.jpg',
				text:'上海迪洋服饰有限公司',
			},
			{
				url:'/image/home/cowin/chuangyuan.jpg',
				text:'上海创远信息有限公司',
			},

		]
	},
	serviceimg:function(){
		return [
			{
				url:'/image/home/service/overview.jpg',
				imgtext:'园区概况'
			},
			{
				url:'/image/home/service/env.jpg',
				imgtext:'投资环境'
			},
			{
				url:'/image/home/service/service.jpg',
				imgtext:'投资服务'
			},
			{
				url:'/image/home/service/step.jpg',
				imgtext:'办理流程'
			},
		]
	}
});