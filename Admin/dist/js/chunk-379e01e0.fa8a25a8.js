(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-379e01e0"],{"0042":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("el-dialog",{attrs:{title:"绑定番剧",visible:t.open_bindBangumiPupon,width:"30%","before-close":t.handleClose},on:{"update:visible":function(o){t.open_bindBangumiPupon=o}}},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.bindbangumiid,callback:function(o){t.bindbangumiid=o},expression:"bindbangumiid"}},[e("template",{slot:"prepend"},[t._v("番剧ID")])],2),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.open_bindBangumiPupon=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.send_bindBangumi()}}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"提示",visible:t.window_addurl,width:"50%"},on:{"update:visible":function(o){t.window_addurl=o}}},[e("el-input",{staticClass:"funcbuttonrow",attrs:{placeholder:"请输入内容"},model:{value:t.AddDowUrl_SourceName,callback:function(o){t.AddDowUrl_SourceName=o},expression:"AddDowUrl_SourceName"}},[e("template",{slot:"prepend"},[t._v("下载来源(百度云 XXX)")])],2),e("el-input",{staticClass:"funcbuttonrow",attrs:{placeholder:"请输入内容"},model:{value:t.AddDowUrl_name,callback:function(o){t.AddDowUrl_name=o},expression:"AddDowUrl_name"}},[e("template",{slot:"prepend"},[t._v("资源名(320K Mp4)")])],2),e("el-input",{staticClass:"funcbuttonrow",attrs:{placeholder:"请输入内容"},model:{value:t.AddDowUrl_dowinfo,callback:function(o){t.AddDowUrl_dowinfo=o},expression:"AddDowUrl_dowinfo"}},[e("template",{slot:"prepend"},[t._v("下载信息")])],2),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(o){t.window_addurl=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(o){return t.AddDow_Send()}}},[t._v("确 定")])],1)],1),e("div",{staticClass:"content"},[e("div",{staticStyle:{display:"flow-root"}},[e("div",{staticClass:"left"},[e("el-row",{staticClass:"common rwoh"},[e("el-upload",{staticClass:"upload-demo",attrs:{"show-file-list":!1,drag:"",action:"","http-request":t.upLoad,multiple:""}},[t.loadcover?e("img",{staticStyle:{width:"100%"},attrs:{src:t.loadcover}}):t._e(),e("i",{staticClass:"el-icon-upload"}),e("div",{staticClass:"el-upload__text"},[t._v(" 将文件拖到此处，或 "),e("em",[t._v("点击上传")])])])],1)],1),e("div",{staticClass:"right"},[e("el-row",{staticClass:"common rwoh"},[t._v(" 资源分区 "),e("el-radio-group",{model:{value:t.classification,callback:function(o){t.classification=o},expression:"classification"}},[e("el-radio-button",{attrs:{label:1}},[t._v("番剧")]),e("el-radio-button",{attrs:{label:2}},[t._v("OST")]),e("el-radio-button",{attrs:{label:3}},[t._v("MMD")]),e("el-radio-button",{attrs:{label:4}},[t._v("Live2D")])],1),t._v(" - 系统唯一ID: "+t._s(t.identification)+" ")],1),e("el-row",{staticClass:"common rwoh"},[e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(o){t.name=o},expression:"name"}},[e("template",{slot:"prepend"},[t._v("资源名")])],2)],1),e("el-row",{staticClass:"common rwoh"},[e("el-input",{attrs:{type:"textarea",rows:5,placeholder:"资源介绍"},model:{value:t.introduce,callback:function(o){t.introduce=o},expression:"introduce"}})],1)],1)]),e("div",{staticClass:"line"}),e("el-row",{staticClass:"common rwoh"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.DowList}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"50"}}),e("el-table-column",{attrs:{prop:"dowsource_name",label:"下载来源名",width:"130"}}),e("el-table-column",{attrs:{prop:"name",label:"资源备注名",width:"200"}}),e("el-table-column",{attrs:{prop:"dowinfo",label:"下载信息"}}),e("el-table-column",{attrs:{prop:"feedback",label:"反馈次数",width:"100"}}),e("el-table-column",{attrs:{label:"更多",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("el-button",{on:{click:function(e){return t.Del_DowUrl(o.row.id)}}},[t._v("删除")])]}}])})],1)],1)],1),e("div",{staticClass:"rnav"},[e("el-row",{staticClass:"funcbuttonrow"},[1===t.status?e("div",[t._v("资源状态: 正常")]):t._e(),2===t.status?e("div",[t._v("资源状态: 已下架")]):t._e()]),e("el-row",{staticClass:"funcbuttonrow"},[!0===t.show_index?e("div",[t._v("首页展示: 是")]):t._e(),!1===t.show_index?e("div",[t._v("首页展示: 否")]):t._e()]),e("el-row",{staticClass:"funcbuttonrow"},[e("el-button",{on:{click:function(o){return t.save()}}},[t._v("保存修改")])],1),e("el-row",{staticClass:"funcbuttonrow"},[2===t.status?e("el-button",{on:{click:function(o){return t.change({id:t.id,changeto:1})}}},[t._v("上架")]):t._e(),1===t.status?e("el-button",{on:{click:function(o){return t.change({id:t.id,changeto:1})}}},[t._v("下架")]):t._e()],1),e("el-row",{staticClass:"funcbuttonrow"},[!0===t.show_index?e("el-button",{on:{click:function(o){return t.change({id:t.id,changeto:2})}}},[t._v("取消首页展示")]):t._e(),!1===t.show_index?e("el-button",{on:{click:function(o){return t.change({id:t.id,changeto:2})}}},[t._v("首页展示")]):t._e()],1),e("el-row",{staticClass:"funcbuttonrow"},[e("el-button",{on:{click:function(o){return t.Open_AddDow()}}},[t._v("添加下载地址信息")])],1),e("el-row",{staticClass:"funcbuttonrow"},[e("el-button",{on:{click:function(o){return t.open_bindBangumi()}}},[t._v("添加绑定的番剧")])],1),e("el-row",{staticClass:"funcbuttonrow"},[e("el-button",{on:{click:function(o){return t.change({id:t.id,changeto:5})}}},[t._v("取消番剧绑定")])],1),e("el-row",{staticClass:"funcbuttonrow"},[t._v(" 关联番剧信息:ID - "+t._s(t.nowbangumiid)+" ")]),e("el-row",{staticClass:"funcbuttonrow"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.nowbangumicover}})]),e("el-row",{staticClass:"funcbuttonrow"},[t._v(" "+t._s(t.nowbanguminame)+" ")])],1)],1)},i=[],a=(e("b0c0"),{name:"edit",data:function(){return{id:"",name:"",introduce:"",classification:"",cover:"",loadcover:"",status:"",show_index:"",identification:"",DowList:[],window_addurl:!1,AddDowUrl_SourceName:"",AddDowUrl_name:"",AddDowUrl_dowinfo:"",open_bindBangumiPupon:!1,bindbangumiid:"",nowbangumiid:"",nowbanguminame:"",nowbangumicover:""}},methods:{open_bindBangumi:function(){this.open_bindBangumiPupon=!0},send_bindBangumi:function(){var t=this;this.$http.AlbumBindBangumi({id:this.id,bangumiid:this.bindbangumiid}).then((function(o){200==o.code&&(t.$message({message:o.msg,type:"success"}),t.open_bindBangumiPupon=!1,t.bindbangumiid="",t.getUrlList(t.$route.query.id))})).catch((function(t){console.log("error",t)}))},Del_DowUrl:function(t){var o=this;this.$http.AlbumDowurlDel({id:t}).then((function(t){200==t.code&&(o.$message({message:t.msg,type:"success"}),o.getUrlList(o.$route.query.id))})).catch((function(t){console.log("error",t)}))},Open_AddDow:function(){this.window_addurl=!0},AddDow_Send:function(){var t=this;this.$http.AlbumDowurlAddOrEdit({album_id:this.id,dowsource_name:this.AddDowUrl_SourceName,name:this.AddDowUrl_name,dowinfo:this.AddDowUrl_dowinfo}).then((function(o){200==o.code&&(t.$message({message:o.msg,type:"success"}),t.getUrlList(t.$route.query.id),t.window_addurl=!1,t.AddDowUrl_SourceName="",t.AddDowUrl_name="",t.AddDowUrl_dowinfo="")})).catch((function(t){console.log("error",t)}))},save:function(){var t=this,o={id:this.id,name:this.name,introduce:this.introduce,classification:this.classification,cover:this.cover};this.$http.AlbumAddOrEdit(o).then((function(o){200==o.code&&t.$message({message:o.msg,type:"success"}),t.query(t.$route.query.id)})).catch((function(t){console.log("error",t)}))},upLoad:function(t){var o=this,e=new FormData;e.append("file",t.file),e.append("uploadKey","albumcover"),console.log(t),this.$http.upload(e).then((function(t){console.log(t),console.log("上传成功"),200===t.code&&(o.cover=t.data.filename,o.loadcover=t.data.lodpath)}))},query:function(t){var o=this;this.$http.AlbumInfo({id:t}).then((function(t){if(200==t.code){var e=t.data.result;o.id=e.id,o.identification=e.identification,o.classification=e.classification,o.loadcover=e.cover,o.cover=e.file,o.introduce=e.introduce,o.name=e.name,o.show_index=e.show_index,o.status=e.status;var n=t.data.relation_bangumi;o.nowbangumiid=n.id,o.nowbanguminame=n.name,o.nowbangumicover=n.cover}})).catch((function(t){console.log("error",t)}))},getUrlList:function(t){var o=this;this.$http.AlbumDowurlList({id:t}).then((function(t){200==t.code&&(o.DowList=t.data)})).catch((function(t){console.log("error",t)}))},change:function(t){var o=this;this.$http.AlbumChange(t).then((function(t){200==t.code&&(o.$Message({message:t.msg,duration:5e3}),o.query(o.$route.query.id))})).catch((function(t){console.log("error",t)}))}},created:function(){this.query(this.$route.query.id),this.getUrlList(this.$route.query.id)}}),l=a,s=(e("6dab"),e("5394"),e("2877")),c=Object(s["a"])(l,n,i,!1,null,"598e3d5d",null);o["default"]=c.exports},5394:function(t,o,e){"use strict";var n=e("f1ee"),i=e.n(n);i.a},"6dab":function(t,o,e){"use strict";var n=e("e798"),i=e.n(n);i.a},e798:function(t,o,e){},f1ee:function(t,o,e){}}]);
//# sourceMappingURL=chunk-379e01e0.fa8a25a8.js.map