webpackJsonp([4],{Ld7R:function(t,i){},PzpY:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("mvHQ"),n=s.n(e),o=s("Dd8w"),a=s.n(o),c=s("Au9i"),r=s("mtWM"),l=s.n(r),u=s("S6w3"),f=s("iPXC"),v=s("NYxO"),p={data:function(){return{title:"账户信息",photo:null,userinfo:{id:"",createTime:"",logo:"",nickName:"",phone:"",password:"",sex:""}}},created:function(){this.Getuserinfo()},computed:a()({},Object(v.c)(["getlocalStorage"])),methods:{Getuserinfo:function(){var t=this,i=this.$store.state.cart.userinfo;this.id=JSON.parse(i).id;var s=Object(f.a)();Object(u.c)({id:this.id},s).then(function(i){var s=i.data[0];t.userinfo.id=s.id,t.userinfo.createTime=s.createTime,t.userinfo.logo=s.logo,t.userinfo.nickName=s.nickName,t.userinfo.phone=s.phone,t.userinfo.sex=s.sex,t.userinfo.password=s.password}).catch(function(i){t.$router.push({name:"login"})})},editName:function(){var t=this;c.MessageBox.prompt("用户名",{closeOnClickModal:!1,inputValue:this.userinfo.nickName}).then(function(i){var s=i.value;i.action;if(!s)return Object(c.Toast)({message:"用户名不能为空！",position:"top",duration:2e3}),!1;t.userinfo.nickName=s},function(){})},iphoneModify:function(){var t=this;c.MessageBox.prompt("手机号码",{closeOnClickModal:!1,inputValue:this.userinfo.phone,inputValidator:function(t){return/^[1][3,4,5,7,8][0-9]{9}$/.test(t)}}).then(function(i){var s=i.value;i.action;if(!s)return Object(c.Toast)({message:"手机号码不能为空！",position:"top",duration:2e3}),!1;t.userinfo.phone=s},function(){})},Preservation:function(){var t=this;Object(u.d)({user_id:this.userinfo.id,logo:this.userinfo.logo,nickName:this.userinfo.nickName,sex:this.userinfo.sex}).then(function(i){Object(c.Toast)({message:i.msg,position:"top",duration:2e3});var s=JSON.parse(t.getlocalStorage);s.logo=t.userinfo.logo,t.$store.commit("setlocalStorage",n()(s))}).catch(function(t){console.log(t)})},ExitAccount:function(){Object(f.b)(),this.$store.commit("removelocalStorage"),this.$router.push("/login")},onfile:function(t){var i=this,s=t.target.files||t.dataTransfer.files;if(s.length){var e=s[0].name,n=e.substring(e.lastIndexOf(".")+1,e.length);if("png"==n||"jpg"==n||"jepg"==n)if(s[0].size>2097152)Object(c.Toast)({message:"上传头像图片大小不能超过 2MB!",position:"top",duration:2e3});else{var o=new FormData;""!=s&&o.append("file",s[0],s.name);l.a.post("http://39.106.7.241:3000/upload",o,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var s=t.data.url;i.userinfo.logo=s,Object(c.Toast)({message:"上传成功",position:"top",duration:2e3})}).catch(function(t){console.log(t)})}else Object(c.Toast)({message:"上传头像图片只支持PNG,JPG,JEPG 格式!!",position:"top",duration:2e3})}}}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("nav-return",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"main-info"},[e("div",{staticClass:"info-img clearfix"},[t._m(0),t._v(" "),e("div",{staticClass:"img-replace"},[e("input",{staticClass:"file",attrs:{type:"file",name:"photo",id:"photo"},on:{change:t.onfile}}),t._v(" "),null==t.userinfo.logo?e("img",{attrs:{src:s("7Otq"),alt:""}}):e("img",{attrs:{src:"http://39.106.7.241:3000"+t.userinfo.logo,alt:""}}),t._v(" "),e("i",{staticClass:"iconfont icon-you"})])]),t._v(" "),e("div",{staticClass:"info-list"},[e("div",{staticClass:"info-title"},[t._v("用户名")]),t._v(" "),e("div",{staticClass:"account-info",on:{click:t.editName}},[void 0!=t.userinfo.nickName?e("span",[t._v(t._s(t.userinfo.nickName))]):e("span",[t._v(t._s(t.userinfo.phone))]),t._v(" "),e("i",{staticClass:"iconfont icon-you"})])]),t._v(" "),e("div",{staticClass:"info-list"},[e("div",{staticClass:"info-title"},[t._v("手机")]),t._v(" "),e("div",{staticClass:"account-info",on:{click:t.iphoneModify}},[e("span",[t._v(t._s(t.userinfo.phone))]),t._v(" "),e("i",{staticClass:"iconfont icon-you"})])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"info-list",staticStyle:{color:"#06c1ae"},on:{click:function(i){t.Preservation()}}},[e("span",{staticClass:"signout"},[t._v("保存修改")])]),t._v(" "),e("div",{staticClass:"info-list",on:{click:function(i){t.ExitAccount()}}},[e("span",{staticClass:"signout"},[t._v("退出登录")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"img-text"},[i("span",[this._v("头像")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"info-list"},[i("div",{staticClass:"info-title"},[this._v("登录密码")]),this._v(" "),i("div",{staticClass:"account-info"},[i("span",[this._v("修改")]),this._v(" "),i("i",{staticClass:"iconfont icon-you"})])])}]};var h=s("VU/8")(p,d,!1,function(t){s("Ld7R")},"data-v-34179c32",null);i.default=h.exports},mvHQ:function(t,i,s){t.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(t,i,s){var e=s("FeBl"),n=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}});