(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ef8e268"],{"0473":function(t,e,s){},"9cc9":function(t,e,s){"use strict";var a=s("0473"),n=s.n(a);n.a},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Main"},[s("div",{staticClass:"content-main main-content width-normal"},[s("div",{staticClass:"loginbox"},[s("div",{staticClass:"login-title"},[t._v("魔法少女伊莉雅同人站 - 管理员登录入口")]),s("el-input",{staticClass:"txt-input",attrs:{placeholder:"Email 邮箱","prefix-icon":"el-icon-user"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("el-input",{staticClass:"txt-input",attrs:{placeholder:"Password 密码","prefix-icon":"el-icon-key","show-password":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("div",{staticStyle:{"text-align":"center","margin-top":"110px"}},[s("el-button",{attrs:{type:"primary",round:"",align:"center"},nativeOn:{click:function(e){return t.loginstart(e)}}},[t._v("立即登录")])],1)],1)])])},n=[],i={name:"login",created:function(){},data:function(){return{email:"",password:"",RegisterUrl:""}},methods:{seedauth:function(){var t=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return""==this.email||t.test(this.email)?""!=this.password||(this.$message({message:"密码不能为空",type:"error"}),!1):(this.$message({message:"邮箱格式不正确",type:"error"}),!1)},loginstart:function(){var t=this;if(0==this.seedauth())return console.log("终止");this.$message({message:"正在登录中",type:"success"}),console.log(this.email),console.log(this.password),this.$http.authAdminLogin(this.email,this.password).then((function(e){200==e.code&&(t.$authUser.setUserToken(e.data.token,e.data.username,e.data.head),t.$router.push({name:"Home"}))})).catch((function(t){console.log("error",t)}))}}},o=i,r=(s("d6db"),s("9cc9"),s("2877")),c=Object(r["a"])(o,a,n,!1,null,"08a062f8",null);e["default"]=c.exports},d6db:function(t,e,s){"use strict";var a=s("e67a"),n=s.n(a);n.a},e67a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-6ef8e268.bee2a36c.js.map