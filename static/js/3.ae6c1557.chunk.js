(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{414:function(e,t,n){"use strict";t.decode=t.parse=n(415),t.encode=t.stringify=n(416)},415:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,s){t=t||"&",n=n||"=";var c={};if("string"!==typeof e||0===e.length)return c;var o=/\+/g;e=e.split(t);var i=1e3;s&&"number"===typeof s.maxKeys&&(i=s.maxKeys);var u=e.length;i>0&&u>i&&(u=i);for(var l=0;l<u;++l){var d,f,j,b,p=e[l].replace(o,"%20"),h=p.indexOf(n);h>=0?(d=p.substr(0,h),f=p.substr(h+1)):(d=p,f=""),j=decodeURIComponent(d),b=decodeURIComponent(f),r(c,j)?a(c[j])?c[j].push(b):c[j]=[c[j],b]:c[j]=b}return c};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},416:function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,o){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"===typeof e?s(c(e),(function(c){var o=encodeURIComponent(r(c))+n;return a(e[c])?s(e[c],(function(e){return o+encodeURIComponent(r(e))})).join(t):o+encodeURIComponent(r(e[c]))})).join(t):o?encodeURIComponent(r(o))+n+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var c=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},417:function(e,t,n){e.exports={wrapper:"Users_wrapper__336Pr",noFound:"Users_noFound__2SD0Z",container:"Users_container__KuSjL",user:"Users_user__2wjtl",buttonLoadMore:"Users_buttonLoadMore__3YmnI",hiddenButtonLoadMore:"Users_hiddenButtonLoadMore__2eFrf",wrapUsers:"Users_wrapUsers__15e9V"}},418:function(e,t,n){e.exports={wrapAvatarNameAndStatus:"User_wrapAvatarNameAndStatus__1PN-f",avatar:"User_avatar__2q_UN",nameAndStatus:"User_nameAndStatus__2HwTQ",name:"User_name__3tC7F",status:"User_status___ZS8T",button:"User_button__3Culd"}},419:function(e,t,n){"use strict";var r=n(58),a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),c=(0,r(n(60)).default)(s.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},420:function(e,t,n){"use strict";var r=n(58),a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),c=(0,r(n(60)).default)(s.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},421:function(e,t,n){var r=n(61),a=n(422),s=n(423),c=Math.max,o=Math.min;e.exports=function(e,t,n){var i,u,l,d,f,j,b=0,p=!1,h=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=i,r=u;return i=u=void 0,b=t,d=e.apply(r,n)}function O(e){return b=e,f=setTimeout(_,t),p?m(e):d}function x(e){var n=e-j;return void 0===j||n>=t||n<0||h&&e-b>=l}function _(){var e=a();if(x(e))return g(e);f=setTimeout(_,function(e){var n=t-(e-j);return h?o(n,l-(e-b)):n}(e))}function g(e){return f=void 0,v&&i?m(e):(i=u=void 0,d)}function y(){var e=a(),n=x(e);if(i=arguments,u=this,j=e,n){if(void 0===f)return O(j);if(h)return clearTimeout(f),f=setTimeout(_,t),m(j)}return void 0===f&&(f=setTimeout(_,t)),d}return t=s(t)||0,r(n)&&(p=!!n.leading,l=(h="maxWait"in n)?c(s(n.maxWait)||0,t):l,v="trailing"in n?!!n.trailing:v),y.cancel=function(){void 0!==f&&clearTimeout(f),b=0,i=j=u=f=void 0},y.flush=function(){return void 0===f?d:g(a())},y}},422:function(e,t,n){var r=n(47);e.exports=function(){return r.Date.now()}},423:function(e,t,n){var r=n(424),a=n(61),s=n(101),c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=o.test(e);return n||i.test(e)?u(e.slice(2),n?2:8):c.test(e)?NaN:+e}},424:function(e,t,n){var r=n(425),a=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(a,""):e}},425:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},426:function(e,t,n){e.exports={container:"Search_container__mpGpd",wrap:"Search_wrap__PlhvQ",searchIcon:"Search_searchIcon__143Du",searchCount:"Search_searchCount__13Y0z",search:"Search_search__tKkwl"}},427:function(e,t,n){"use strict";var r=n(58),a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),c=(0,r(n(60)).default)(s.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=c},428:function(e,t,n){"use strict";var r=n(58),a=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),c=(0,r(n(60)).default)(s.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=c},429:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(9),c=function(e){return e.usersPage.users},o=function(e){return e.usersPage.pageSize},i=function(e){return e.usersPage.totalUsersCount},u=function(e){return e.usersPage.isFetching},l=function(e){return e.usersPage.followingInProgress},d=n(147),f=n(79),j=n(27),b=n(56),p=n(18),h=n(414),v=n(26),m=n.n(v),O=n(398),x=n(428),_=n.n(x),g=n(417),y=n.n(g),w=n(44),U=n(394),N=n(419),S=n.n(N),C=n(420),I=n.n(C),P=n(110),M=n(418),A=n.n(M),E=n(1),k=function(e){var t=e.id,n=e.photo,r=e.name,a=e.theme,s=e.status,c=e.followed,o=e.unfollow,i=e.follow,u=e.followingInProgress,l=e.authorizedUserID,d={justifyContent:"flex-end",alignItems:"flex-start",flexBasis:"200px"};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(w.b,{to:"/profile/".concat(t),style:{textDecoration:"none",display:"block"},children:Object(E.jsxs)("div",{className:A.a.wrapAvatarNameAndStatus,children:[Object(E.jsx)("div",{children:Object(E.jsx)("div",{className:A.a.avatar,children:Object(E.jsx)("img",{src:null!==n?n:P.a,alt:"avatar"})})}),Object(E.jsxs)("div",{className:A.a.nameAndStatus,children:[(null===r||void 0===r?void 0:r.length)>19?Object(E.jsx)("div",{"data-tooltip":r,children:Object(E.jsx)("div",{className:A.a.name,children:r})}):Object(E.jsx)("div",{className:A.a.name,children:r}),(null===s||void 0===s?void 0:s.length)>19?Object(E.jsx)("div",{"data-tooltip":s,children:Object(E.jsx)("div",{className:A.a.status,children:s})}):Object(E.jsx)("div",{className:A.a.status,children:s})]})]})}),c?Object(E.jsx)("div",{className:A.a.button,children:Object(E.jsx)(U.a,{onClick:function(){return o(t)},disabled:u.some((function(e){return e===t})),style:d,startIcon:Object(E.jsx)(S.a,{}),children:"Unfollow"})}):t===l?Object(E.jsx)(E.Fragment,{}):Object(E.jsx)("div",{className:A.a.button,children:Object(E.jsx)(U.a,{onClick:function(){return i(t)},disabled:u.some((function(e){return e===t})),color:"theme1"===a?"primary":"secondary",style:d,startIcon:Object(E.jsx)(I.a,{}),children:"Follow"})})]})},F=n(367),L=n(427),T=n.n(L),z=n(421),R=n.n(z),D=n(400),$=Object(D.a)((function(e){return{stylesSearch:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),width:"100%","&:focus":{backgroundColor:"#5e5e5e4d",borderRadius:"5px"}}}})),B=n(426),K=n.n(B),H=a.a.memo((function(e){var t=e.pathname,n=e.termOfUrl,r=e.searchUsers,a=e.totalUsersCount,s=$();return Object(E.jsxs)("div",{className:K.a.container,children:[Object(E.jsxs)("div",{className:K.a.wrap,children:[Object(E.jsx)("div",{className:K.a.searchIcon,children:Object(E.jsx)(T.a,{})}),"/users"===t&&Object(E.jsx)(F.a,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},classes:{input:s.stylesSearch},value:n,onChange:function(e){return r(e.target.value)}}),"/friends"===t&&Object(E.jsx)(F.a,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},classes:{input:s.stylesSearch},onInput:R()((function(e){return r(e.target.value)}),1500)})]}),Object(E.jsxs)("div",{className:K.a.searchCount,children:["Total:"," ",a.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ")]})]})})),J=n(24),Q=n(34),V=n(182),W=a.a.memo((function(e){var t=e.location.pathname,n=Object(s.d)(l),a=Object(s.d)(Q.a),d=Object(s.d)(J.b),f=Object(s.d)(o),v=Object(s.d)(c),x=Object(s.d)(u),g=Object(s.d)(i),w=Object(p.g)(),U=Object(s.c)(),N=Math.ceil(g/f),S=Object(r.useState)(!0),C=Object(b.a)(S,2),I=C[0],P=C[1],M=Object(r.useState)(1),A=Object(b.a)(M,2),F=A[0],L=A[1],T=Object(r.useState)(""),z=Object(b.a)(T,2),R=z[0],D=z[1],$=function(e){L(1),"/friends"===t&&U(Object(V.d)(1,e,!0)),"/users"===t&&(D(e),U(Object(V.d)(1,e))),N===F&&P(!1),N>F&&P(!0)};Object(r.useEffect)((function(){P(g>f)}),[N,g,f]),Object(r.useEffect)((function(){var e=h.parse(w.location.search.substr(1));e.term&&"/users"===t&&D(e.term)}),[w.location.search,t]),Object(r.useEffect)((function(){"/users"===t&&w.replace({pathname:"/users",search:R?"?term=".concat(R):""})}),[R,w,t]),Object(r.useEffect)((function(){U(V.a.clearUsers()),P(!0),L(1),"/friends"===t&&(U(Object(V.d)(1,"",!0)),D(""))}),[t,U]),Object(r.useEffect)((function(){"/users"===t&&U(Object(V.d)(1,R))}),[R,t,U]);return Object(E.jsxs)("div",{className:y.a.wrapper,children:["/friends"===t&&Object(E.jsx)(H,{searchUsers:$,totalUsersCount:g,pathname:t}),"/users"===t&&Object(E.jsx)(H,{searchUsers:$,totalUsersCount:g,termOfUrl:R,pathname:t}),0===g&&!x&&Object(E.jsx)("div",{className:y.a.noFound,children:"Nothing found"}),Object(E.jsxs)("div",{className:y.a.container,children:[Object(E.jsx)("div",{className:y.a.wrapUsers,children:v.map((function(e){return Object(E.jsx)("div",{className:y.a.user,children:Object(E.jsx)(k,{id:e.id,photo:e.photos.small,name:e.name,status:e.status,theme:d,followed:e.followed,unfollow:function(e){return U(Object(V.e)(e))},follow:function(e){return U(Object(V.c)(e))},followingInProgress:n,authorizedUserID:a})},e.id)}))}),Object(E.jsx)("div",{className:m()(y.a.buttonLoadMore,Object(j.a)({},y.a.hiddenButtonLoadMore,!I)),children:Object(E.jsx)(O.a,{"aria-label":"load more users",onClick:function(){N>F&&(L(++F),"/friends"===t&&U(Object(V.d)(F,R,!0)),"/users"===t&&U(Object(V.d)(F,R))),N===F&&P(!1)},children:Object(E.jsx)(_.a,{})})})]})]})})),Y=Object(p.h)(W);t.default=Object(d.a)((function(){var e=Object(s.d)(u);return Object(E.jsxs)(E.Fragment,{children:[e?Object(E.jsx)(f.a,{}):null,Object(E.jsx)(Y,{})]})}))}}]);
//# sourceMappingURL=3.ae6c1557.chunk.js.map