(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{415:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=function(e){return e.usersPage.users},a=function(e){return e.usersPage.pageSize},c=function(e){return e.usersPage.totalUsersCount},s=function(e){return e.usersPage.isFetching},o=function(e){return e.usersPage.followingInProgress}},416:function(e,t,n){e.exports={user:"User_user__2-MFR",wrapAvatarNameAndStatus:"User_wrapAvatarNameAndStatus__1DasO",wrapAvatar:"User_wrapAvatar__390Wy",nameAndStatus:"User_nameAndStatus__2nXq4",status:"User_status__1Fkst",button:"User_button__3q-3g"}},417:function(e,t,n){},418:function(e,t,n){"use strict";var r=n(59),a=n(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),s=(0,r(n(61)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=s},419:function(e,t,n){"use strict";var r=n(59),a=n(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),s=(0,r(n(61)).default)(c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=s},420:function(e,t,n){var r=n(62),a=n(421),c=n(422),s=Math.max,o=Math.min;e.exports=function(e,t,n){var i,u,l,d,f,j,p=0,v=!1,b=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=u;return i=u=void 0,p=t,d=e.apply(r,n)}function O(e){return p=e,f=setTimeout(_,t),v?m(e):d}function x(e){var n=e-j;return void 0===j||n>=t||n<0||b&&e-p>=l}function _(){var e=a();if(x(e))return g(e);f=setTimeout(_,function(e){var n=t-(e-j);return b?o(n,l-(e-p)):n}(e))}function g(e){return f=void 0,h&&i?m(e):(i=u=void 0,d)}function y(){var e=a(),n=x(e);if(i=arguments,u=this,j=e,n){if(void 0===f)return O(j);if(b)return clearTimeout(f),f=setTimeout(_,t),m(j)}return void 0===f&&(f=setTimeout(_,t)),d}return t=c(t)||0,r(n)&&(v=!!n.leading,l=(b="maxWait"in n)?s(c(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==f&&clearTimeout(f),p=0,i=j=u=f=void 0},y.flush=function(){return void 0===f?d:g(a())},y}},421:function(e,t,n){var r=n(49);e.exports=function(){return r.Date.now()}},422:function(e,t,n){var r=n(423),a=n(62),c=n(103),s=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=o.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):s.test(e)?NaN:+e}},423:function(e,t,n){var r=n(424),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},424:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},425:function(e,t,n){e.exports={container:"Search_container__2QWKN",wrap:"Search_wrap__30375",searchIcon:"Search_searchIcon__nrD5M",searchCount:"Search_searchCount__3NOnv",search:"Search_search__2Jvrt"}},426:function(e,t,n){"use strict";var r=n(59),a=n(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),s=(0,r(n(61)).default)(c.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=s},427:function(e,t,n){"use strict";n(0);var r=n(9),a=n(405),c=n(418),s=n.n(c),o=n(419),i=n.n(o),u=n(416),l=n.n(u),d=n(78),f=(n(417),n(1)),j=function(e){var t=e.element,n=e.children;return Object(f.jsx)("div",{"data-tooltip":t,children:n})},p=n(154),v=n(415),b=n(37);t.a=function(e){var t=e.user,n=t.id,c=t.photos,o=t.name,u=t.status,h=t.followed,m=e.theme,O=e.unfollow,x=e.follow,_={justifyContent:"flex-end",alignItems:"flex-start",flexBasis:"200px"},g=Object(r.d)(v.a),y=Object(r.d)(b.a);return Object(f.jsxs)("div",{className:l.a.user,children:[Object(f.jsxs)("div",{className:l.a.wrapAvatarNameAndStatus,children:[Object(f.jsx)("div",{className:l.a.wrapAvatar,children:Object(f.jsx)(d.a,{photo:c.large,size:"large",id:n})}),Object(f.jsxs)("div",{className:l.a.nameAndStatus,children:[(null===o||void 0===o?void 0:o.length)>19?Object(f.jsx)(j,{element:o,children:Object(f.jsx)(p.a,{id:n,name:o})}):Object(f.jsx)(p.a,{id:n,name:o}),(null===u||void 0===u?void 0:u.length)>19?Object(f.jsx)(j,{element:u,children:Object(f.jsx)("div",{className:l.a.status,children:u})}):Object(f.jsx)("div",{className:l.a.status,children:u})]})]}),h?Object(f.jsx)("div",{className:l.a.button,children:Object(f.jsx)(a.a,{onClick:function(){return O(n)},disabled:g.some((function(e){return e===n})),style:_,startIcon:Object(f.jsx)(s.a,{}),children:"Unfollow"})}):n===y?Object(f.jsx)(f.Fragment,{}):Object(f.jsx)("div",{className:l.a.button,children:Object(f.jsx)(a.a,{onClick:function(){return x(n)},disabled:g.some((function(e){return e===n})),color:"theme1"===m?"primary":"secondary",style:_,startIcon:Object(f.jsx)(i.a,{}),children:"Follow"})})]})}},428:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(420),s=n.n(c),o=n(413),i=n(426),u=n.n(i),l=n(406),d=Object(l.a)((function(e){return{search:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%","&:focus":{borderRadius:"5px",backgroundColor:"#5e5e5e4d"}}}})),f=n(425),j=n.n(f),p=n(1),v=a.a.memo((function(e){var t=e.pathname,n=e.termOfUrl,r=void 0===n?"":n,a=e.searchUsers,c=e.totalUsersCount,i=d(),l=function(e){return a(e.target.value)};return Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsxs)("div",{className:j.a.wrap,children:[Object(p.jsx)("div",{className:j.a.searchIcon,children:Object(p.jsx)(u.a,{})}),"/users"===t&&Object(p.jsx)(o.a,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},classes:{input:i.search},value:r,onChange:l}),"/friends"===t&&Object(p.jsx)(o.a,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},classes:{input:i.search},onInput:s()(l,600)})]}),Object(p.jsxs)("div",{className:j.a.searchCount,children:["Total: ",c.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ")]})]})}));t.a=v},439:function(e,t,n){e.exports={wrapper:"Users_wrapper__xvcgd",container:"Users_container__58Ml6",buttonLoadMore:"Users_buttonLoadMore__3c7gF",hiddenButtonLoadMore:"Users_hiddenButtonLoadMore__3-1-j",wrapUsers:"Users_wrapUsers__1T8G6"}},440:function(e,t,n){"use strict";t.decode=t.parse=n(441),t.encode=t.stringify=n(442)},441:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,c){t=t||"&",n=n||"=";var s={};if("string"!==typeof e||0===e.length)return s;var o=/\+/g;e=e.split(t);var i=1e3;c&&"number"===typeof c.maxKeys&&(i=c.maxKeys);var u=e.length;i>0&&u>i&&(u=i);for(var l=0;l<u;++l){var d,f,j,p,v=e[l].replace(o,"%20"),b=v.indexOf(n);b>=0?(d=v.substr(0,b),f=v.substr(b+1)):(d=v,f=""),j=decodeURIComponent(d),p=decodeURIComponent(f),r(s,j)?a(s[j])?s[j].push(p):s[j]=[s[j],p]:s[j]=p}return s};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},442:function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,o){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?c(s(e),(function(s){var o=encodeURIComponent(r(s))+n;return a(e[s])?c(e[s],(function(e){return o+encodeURIComponent(r(e))})).join(t):o+encodeURIComponent(r(e[s]))})).join(t):o?encodeURIComponent(r(o))+n+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function c(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},443:function(e,t,n){"use strict";var r=n(59),a=n(60);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=a(n(0)),s=(0,r(n(61)).default)(c.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=s},446:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(9),s=n(415),o=n(157),i=n(104),u=n(16),l=n(27),d=n(22),f=n(21),j=n.n(f),p=n(401),v=n(443),b=n.n(v),h=n(439),m=n.n(h),O=n(427),x=n(428),_=n(156),g=n(440),y=function(e,t,n){var a=Object(d.g)();Object(r.useEffect)((function(){var e=g.parse(a.location.search.substr(1));e.term&&t(e.term)}),[a.location.search,n,t]),Object(r.useEffect)((function(){a.replace({pathname:"/users",search:e?"?term=".concat(e):""})}),[e,a,n])},w=n(26),U=n(158),N=n(1),S=a.a.memo((function(e){var t=e.location.pathname,n=Object(c.d)(w.b),a=Object(c.d)(s.c),o=Object(c.d)(s.e),i=Object(c.d)(s.b),d=Object(c.d)(s.d),f=Object(c.c)(),v=Math.ceil(d/a),h=Object(r.useState)(!0),g=Object(l.a)(h,2),S=g[0],C=g[1],M=Object(r.useState)(1),A=Object(l.a)(M,2),I=A[0],P=A[1],E=Object(r.useState)(""),k=Object(l.a)(E,2),L=k[0],R=k[1];Object(r.useEffect)((function(){C(d>a)}),[v,d,a]),y(L,R,t),Object(r.useEffect)((function(){f(Object(U.d)(1,L))}),[L,t,f]);return Object(N.jsxs)("div",{className:m.a.wrapper,children:[Object(N.jsx)(x.a,{searchUsers:function(e){P(1),R(e),f(Object(U.d)(1,e)),v===I&&C(!1),v>I&&C(!0)},totalUsersCount:d,termOfUrl:L,pathname:t}),0===d&&!i&&Object(N.jsx)(_.a,{elements:"users"}),Object(N.jsxs)("div",{className:m.a.container,children:[Object(N.jsx)("div",{className:m.a.wrapUsers,children:o.map((function(e){return Object(N.jsx)(O.a,{user:{id:e.id,name:e.name,status:e.status,followed:e.followed,photos:e.photos},theme:n,follow:function(e){return f(Object(U.c)(e))},unfollow:function(e){return f(Object(U.e)(e))}},e.id)}))}),Object(N.jsx)("div",{className:j()(m.a.buttonLoadMore,Object(u.a)({},m.a.hiddenButtonLoadMore,!S)),children:Object(N.jsx)(p.a,{title:"Load more users",onClick:function(){v>I&&(P(++I),f(Object(U.d)(I,L))),v===I&&C(!1)},children:Object(N.jsx)(b.a,{})})})]})]})})),C=Object(d.h)(S);t.default=Object(o.a)((function(){var e=Object(c.d)(s.b);return Object(N.jsxs)(N.Fragment,{children:[e?Object(N.jsx)(i.a,{}):null,Object(N.jsx)(C,{})]})}))}}]);
//# sourceMappingURL=3.5ca2af87.chunk.js.map