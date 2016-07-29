Template.home.onRendered(function() {
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

        $('.news .content-title span').click(function(e) {
            var target = e.target;
            var val = $(target).attr('val');
            // console.log('val',val);
            if (val == null) {
                return;
            }
            var that = this;
            $(this).addClass('span-news').siblings().removeClass('span-news');
            $('.news .left-content div').each(function(event) {
                var data = $(this).attr('data-news');
                if (data == val) {
                    $(this).removeClass('hide').siblings().addClass('hide');
                }
            });
        });

        $('.transfer .content-title span').click(function(e) {
            var target = e.target;
            var val = $(target).attr('val');
            Session.set('trans', val);
            if (val == null) {
                return;
            }
            var that = this;
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
});

Template.home.helpers({
    _trans: function() {
        return Session.get('trans') || 'selfdrive';
    },
    news: function() {
        return [{
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/new1',
            title: 'APEC商务签证服务',
            text: 'APEC商务旅行卡持卡人凭有效护照和旅行卡在五年内无需办理入境签证',
            time: '2015-11-12'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/new2',
            title: '[园区福利团] 120万+公园家，抱团买房啦！',
            text: '房价一直妥妥的飞涨，朋友，你有没有觉得很忧伤？每天奋力打拼，你是不是也想有一个温暖的家？',
            time: '2015-10-29'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/new3',
            title: '莘莘公司三八妇女节活动',
            text: '阳春三月，我们迎来了第103周年的三八国际劳动妇女节',
            time: '2013-03-13'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/new4',
            title: '莘莘学子创业园”改造专题研究会举行',
            text: '5月6日，“莘莘学子创业园”领导小组第二次(扩大)会议召开，对园区改造、功能提升再次进行专题研究。',
            time: '2011-05-11'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/new5',
            title: '松江车墩镇4亿元打好国家级开发区“科技牌”',
            text: '今后5年内，车墩镇将投入4亿元用于莘莘学子创业园整体改造',
            time: '2011-04-25'
        }, ]
    },
    notice: function() {
        return [{
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/notice1',
            title: '企业公示信息抽查中常见问题汇总',
            text: '企业通讯地址如何填报?股东信息如何填报?认缴出资时间如何认定?',
            time: '2016-01-20'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/notice2',
            title: '2015年企业年报公示通告',
            text: '根据《企业信息公示暂行条例》规定：凡于2015年12月31日之前领取营业执照的各类企业，应当在2016',
            time: '2016-01-20'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/notice3',
            title: '2015年度企业财务会计决算工作通知',
            text: '根据《中华人民共和国会计法》和《企业财务会计报告条例》及上海市财政局《关于印发',
            time: '2016-01-20'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/notice4',
            title: '金税三期上海个人所得税代扣代缴系统上线告知单',
            text: '本市将于2016年2月1日起正式上线金税三期个人税收管理系统中的个人所得税代扣代缴功能，届时将启',
            time: '2016-01-05'
        }, {
            url: '/image/home/transfer/trans.jpg',
            newsurl: '/media/parknews/notice5',
            title: '关于配合做好“税务数据质量管理”工作随访的通知',
            text: '为提高纳税人报送数据的准确性和真实性，2015年4月起，松江区经委和松江区税务局通过政府购买服务的方式',
            time: '2015-12-04'
        }, ]
    },
    imgContent: function() {
        return [{
                url: '/image/home/cowin/dehao1.jpg',
                text: '上海德皓有限公司',
            }, {
                url: '/image/home/cowin/baichuan1.jpg',
                text: '上海百川连接器有限公司',
            }, {
                url: '/image/home/cowin/ruisile1.jpg',
                text: '上海瑞斯乐复合材料有限公司',
            }, {
                url: '/image/home/cowin/chuangyuan1.jpg',
                text: '上海创远信息有限公司',
            },

        ]
    },
    serviceimg: function() {
        return [{
            url: '/image/home/service/overview.jpg',
            imgtext: '园区概况'
        }, {
            url: '/image/home/service/env.jpg',
            imgtext: '投资环境'
        }, {
            url: '/image/home/service/service.jpg',
            imgtext: '投资服务'
        }, {
            url: '/image/home/service/step.jpg',
            imgtext: '办理流程'
        }, ]
    }
});
