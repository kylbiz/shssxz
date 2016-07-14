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
    BlazeLayout.render("mainLayout", {content: "overview"});
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
    BlazeLayout.render("mainLayout", {content: "coregister"});
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

//媒体中心
var media = FlowRouter.group({
  prefix: "/media",
  name: 'media'
});

media.route('/', {
  name: 'media',
  action: function() {
    BlazeLayout.render("mainLayout", {content: "media"});
  }
});