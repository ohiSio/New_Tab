(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0f124558"],{"0418b":function(t,e,n){"use strict";var a=n("3228"),r={props:["historySwitch","navSwitch","myname"],data:function(){return{data:[]}},methods:{onChangeHis:function(){this.$parent.switchHistory()},onChangeNav:function(){this.$parent.switchNav()},logout:function(){a.e.UserLogout({noQs:!1}),location.reload()}}},i=(n("6475"),n("5d22")),s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"weather",attrs:{id:"he-plugin-simple"}}),n("div",{staticClass:"headerbtns",staticStyle:{"text-align":"right"}},[t._m(0),t._m(1),t._m(2),n("el-dropdown",{attrs:{"hide-on-click":!1}},[n("span",{staticStyle:{color:"inherit"}},[t._v(" è‡ªå®šä¹‰"),n("i",{staticClass:"fa fa-cog"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("i",{staticClass:"fa fa-user-circle-o"}),n("a",{staticClass:"headerbtn",attrs:{href:"/me",target:"_blank"}},[t._v("æ‰“å¼€åŽå°")])]),n("el-dropdown-item",[n("span",{staticClass:"headerbtn",on:{click:function(e){return t.onChangeHis()}}},[n("i",{staticClass:"fa fa-reply-all"}),t._v(" è¶³è¿¹å¼€å…³")])]),n("el-dropdown-item",[n("span",{staticClass:"headerbtn",on:{click:function(e){return t.onChangeNav()}}},[n("i",{staticClass:"fa fa-anchor"}),t._v(" ä¹¦ç­¾å¼€å…³")])]),n("el-dropdown-item",[n("span",{staticClass:"headerbtn",on:{click:function(e){return t.logout()}}},[n("i",{staticClass:"fa fa-power-off"}),t._v(" é€€å‡ºç™»å½•")])])],1)],1)],1),n("div",{staticClass:"paomadeng"},[n("el-carousel",{attrs:{"indicator-position":"none",arrow:"always",direction:"vertical",height:"25px"}},t._l(t.data,(function(e){return n("el-carousel-item",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"headerbtn",attrs:{href:"/hgs",target:"_blank"}},[this._v("èŠ±æžœå±± "),e("i",{staticClass:"fa fa-sort-alpha-asc"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"headerbtn",attrs:{href:"/sldt",target:"_blank"}},[this._v("æ°´å¸˜æ´žå¤© "),e("i",{staticClass:"fa fa-external-link"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"headerbtn",attrs:{href:"/u/rand",target:"_blank"}},[this._v("æœˆå…‰å®ç›’ "),e("i",{staticClass:"fa fa-random"})])}],!1,null,"87b1959c",null);e.a=s.exports},1149:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n("e04f"),r=n.n(a),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a={expires:1};Object.assign(a,n),r.a.set("h5store-".concat(t),e,a)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return r.a.get("h5store-".concat(t))}},"253c":function(t,e,n){},3228:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return p})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"d",(function(){return m}));n("4d20");var a=n("d211"),r=n("82ae"),i=n.n(r),s=n("1149"),o=n("a14a"),u=n("87f7");var l=i.a.create({baseURL:"https://xydh.fun",timeout:18e4,withCredentials:!0});l.interceptors.request.use((function(t){var e=Object(s.a)("token")||"",n={};return"get"===t.method||t.data.noQs?(t.params=Object(a.a)(Object(a.a)({},t.params),{_t:(new Date).getTime()}),""!=e&&(t.params.token=e)):(t.data=Object(a.a)({},t.data),""!=e&&(t.data.token=e)),Object(o.isPlainObject)(t.params)&&(t.params=Object(a.a)(Object(a.a)({},n),t.params)),Object(o.isPlainObject)(t.data)&&(t.data=Object(a.a)(Object(a.a)({},n),t.data),t.data.noQs),"delete"===t.method&&(t.headers["Content-type"]="application/json"),t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t.data}),(function(t){var e;return e=t.msg,u.a.error(e,3),Promise.reject(t)}));var c=l,d={getLinks:function(t){return c({url:"/api/v1/links/"+t})},getLinksbyID:function(t){return c({url:"/api/v1/linksbyid/"+t})},getTempLinks:function(){return c({url:"/api/v1/templinks"})},getLinksbyFolderID:function(t){return c({url:"/api/v1/linksbyfolderid/"+t})},createLink:function(t){return c({url:"/api/v1/link",method:"post",data:t})},updateLink:function(t){return c({url:"/api/v1/link",method:"put",data:t})},sortLink:function(t){return c({url:"/api/v1/links",method:"put",data:t})},deleteLink:function(t){return c({url:"/api/v1/link",method:"delete",data:t})}},p={getMyFolders:function(){return c({url:"/api/v1/myfolders"})},createFolder:function(t){return c({url:"/api/v1/folder",method:"post",data:t})},updateFolder:function(t){return c({url:"/api/v1/folder",method:"put",data:t})},deleteFolder:function(t){return c({url:"/api/v1/folder",method:"delete",data:t})}},f={getSite:function(t){return c({url:"/api/v1/site/"+t})},getSitebyID:function(t){return c({url:"/api/v1/sitebyid/"+t})},updateSite:function(t){return c({url:"/api/v1/site",method:"put",data:t})},getAll:function(t){return c({url:"/api/v1/all/"+t})},getAllsiteandlinks:function(t){return c({url:"/api/v1/allsiteandlinks/"+t})},getLinksbyfolderid:function(t,e){return c({url:"/api/v1/linksbyfolderid/"+t+"?password="+e})}},h={UserRegister:function(t){return c({url:"/api/v1/user/register",method:"post",data:t})},UserLogin:function(t){return c({url:"/api/v1/user/login",method:"post",data:t})},UserUpdate:function(t){return c({url:"/api/v1/user/update",method:"put",data:t})},UserLogout:function(t){return c({url:"/api/v1/user/logout",method:"delete",data:t})},UserMe:function(){return c({url:"/api/v1/user/me"})},UserID:function(t){return c({url:"/api/v1/getuserid/"+t})},UserVip:function(t){return c({url:"/api/v1/user/vip",method:"post",data:t})},UserRename:function(t){return c({url:"/api/v1/user/rename",method:"post",data:t})},JsToken:function(){return c({url:"/api/v1/user/jstoken"})},UserRandom:function(){return c({url:"/api/v1/getrandomuser"})},UserRank:function(t){return c({url:"/api/v1/userrank/"+t})},UserReset:function(t){return c({url:"/api/v1/user/reset",method:"post",data:t})}},m={getLinks:function(){return c({url:"/api/v1/sldlinks"})},createLink:function(t){return c({url:"/api/v1/sldlink",method:"post",data:t})},updateLink:function(t){return c({url:"/api/v1/sldlink",method:"put",data:t})},deleteLink:function(t){return c({url:"/api/v1/sldlink",method:"delete",data:t})}}},6475:function(t,e,n){"use strict";n("253c")},"6cd5":function(t,e,n){"use strict";n("d93d")},"8e91":function(t,e,n){"use strict";n.r(e);var a=n("0418b"),r=n("3228"),i=n("f197"),s=n.n(i),o={components:{Header:a.a,Aplayer:s.a},data:function(){return{topUname:[],topSite:[],topSearch:"",audio:[{title:"èŠ±æžœå±±",artist:"çƒå“¥",url:"https://cdn.jsdelivr.net/gh/ixsim/upload/xyj.mp3"},{title:"å¤œçš„ç¬¬ä¸ƒç« ",artist:"æ°ä¼¦",url:"https://cdn.jsdelivr.net/gh/ixsim/upload/yddqz.m4a",pic:"http://img.mp.itc.cn/upload/20160717/89429f4074754a20996ec74d6bcf0304_th.jpg"}]}},methods:{getUserRank:function(t){var e=this;r.e.UserRank(t).then((function(t){e.topUname=t.data.top_uname,e.topSite=t.data.top_site;for(var n=0,a=e.topSite.length;n<a;n++)e.topSite[n].uName=e.topUname[n]}))}},beforeMount:function(){document.title="èŠ±æžœå±± | ç‚«çŒ¿å¯¼èˆª",this.getUserRank("d")}},u=(n("6cd5"),n("5d22")),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hgs"},[n("Header"),n("h2",[t._v("èŠ±æžœå±± | ç‚«çŒ¿å¯¼èˆª")]),n("el-button-group",[n("el-button",{on:{click:function(e){return t.getUserRank("d")}}},[t._v("æ—¥æ¦œ")]),n("el-button",{on:{click:function(e){return t.getUserRank("m")}}},[t._v("æœˆæ¦œ")]),n("el-button",{on:{click:function(e){return t.getUserRank("t")}}},[t._v("æ€»æ¦œ")])],1),n("div",{staticClass:"amusic"},[n("aplayer",{attrs:{music:t.audio[0],list:t.audio,narrow:!1,float:"",theme:"#fff"}})],1),n("div",[n("el-table",{staticClass:"top100table",attrs:{"highlight-current-row":"",stripe:"",data:t.topSite.filter((function(e){return!t.topSearch||e.name.includes(t.topSearch)||e.uName.includes(t.topSearch)}))}},[n("el-table-column",{attrs:{label:"æŽ’å",fixed:"",align:"center",type:"index"}}),n("el-table-column",{attrs:{label:"åç§°",align:"center",width:"150",prop:"name"}}),n("el-table-column",{attrs:{label:"ç”¨æˆ·",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{attrs:{target:"_blank",href:"/"+e.row.uName}},[t._v(t._s(e.row.uName))])]}}])}),n("el-table-column",{attrs:{align:"left","min-width":"200"},scopedSlots:t._u([{key:"header",fn:function(e){return[n("el-input",{attrs:{placeholder:"è¾“å…¥å§“åæœç´¢æ˜¯å¦åœ¨æ¦œ"},model:{value:t.topSearch,callback:function(e){t.topSearch=e},expression:"topSearch"}}),t._v(" "+t._s(e.info)+" ")]}},{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.info)+" ")]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},d93d:function(t,e,n){}}]);
