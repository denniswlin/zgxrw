define(function(require, exports) {


    var s = require('./b').init();
    
	exports.init = function(){
		return s;
	};
  

});


// 获取AccessToken的时会返回该授权用户的uid，
// 这个值不会变 你可以在数据库里面加一个column 叫serviceUID，
// 如果有的找到它并登录。如果数据库中没有相应的值 就引导用户绑定添加新用户
// 如果有注册过则使用会员ID和密码进行绑定。

var memberInfo = {
	userID:'',
	password:'',
	realName:'',
	nickName:'',
	userDesc:'',
	userSex:'',
	userQq:'',
	userMsn:'',
	// 第三方绑定时为非激活用户，只能使用第三方用户名和密码登陆，
	// 激活时设置一个密码，以后就能直接使用此登陆
	activate:'',
	Roles:''
};
var userBind = {
	// 服务商
	userID:'',
	serviceName:'',
	serviceUID: ''
} 


//http://www.cnblogs.com/cw_volcano/archive/2011/01/29/1947538.html
//http://www.cnblogs.com/xj962091/articles/2494062.html