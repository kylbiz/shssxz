// 首页
FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "home"});
  }
});
//概况
var overview = FlowRouter.group({
  prefix: "/overview",
  name: 'overviewGroup'
});

  overview.route('/', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "profile"});
    }
  });
  //总体规划
  overview.route('/total', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "total"});
    }
  });
  //发展历程
  overview.route('/develop', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "develop"});
    }
  });
  //部门职能
  overview.route('/functions', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "functions"});
    }
  });
  //交通路线
  overview.route('/roate', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "roate"});
    }
  });
  //联系我们
  overview.route('/contactus', {
    name: 'overview',
    action: function() {
      BlazeLayout.render("mainLayout", {content: "overview",overview: "contactus"});
    }
  });

//意见反馈
var feedback = FlowRouter.group({
  prefix: "/feedback",
  name: 'feedbackGroup'
});
feedback.route('/', {
  name: 'feedback',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "feedback"});
  }
});

//公司注册
var coregister = FlowRouter.group({
  prefix: "/coregister",
  name: 'coregisterGroup'
});

coregister.route('/', {
  name: 'coregister',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "coregister",coregister: "register"});
  }
});

coregister.route('/information', {
  name: 'coregister',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "coregister",coregister: "information"});
  }
});
coregister.route('/special', {
  name: 'coregister',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "coregister",coregister: "specialService"});
  }
});

//经营范围
coregister.route('/range', {
  name: 'coregister',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "coregister",coregister: "range"});
  }
});

//企业之家
var cohome = FlowRouter.group({
  prefix: "/cohome",
  name: 'cohome'
});

cohome.route('/', {
  name: 'cohome',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "cohome"});
  }
});

//企业服务
var coservice = FlowRouter.group({
  prefix: "/coservice",
  name: 'coservice'
});

coservice.route('/', {
  name: 'coservice',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "coservice"});
  }
});

//扶持政策
var support = FlowRouter.group({
  prefix: "/support",
  name: 'support'
});

support.route('/', {
  name: 'support',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "support"});
  }
});

support.route('/download', {
  name: 'support',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "support", support: "download"});
  }
});

support.route('/search', {
  name: 'support',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "support", support: "search"});
  }
});



//媒体中心
var media = FlowRouter.group({
  prefix: "/media",
  name: 'media'
});

media.route('/parknews', {
  name: 'media',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "media",media: "parknews"});
  }
});

media.route('/parknotice', {
  name: 'media',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "media",media: "parknotice"});
  }
});