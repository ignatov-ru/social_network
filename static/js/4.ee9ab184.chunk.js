(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[4],{455:function(e,t,n){"use strict";var a=n(11),r=n(1);t.a=function(){var e=Object(r.useState)(window.innerWidth),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){return c(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n,c]),n}},456:function(e,t,n){e.exports={user:"User_user__2wfAk",wrapAvatarNameAndStatus:"User_wrapAvatarNameAndStatus__3ZFGx",wrapAvatar:"User_wrapAvatar__3xjij",nameAndStatus:"User_nameAndStatus__1MJOp",wrapName:"User_wrapName__14Fu7",status:"User_status__bn8rk"}},457:function(e,t,n){},458:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(459),s=n.n(c),i=n(37),u=n(465),o=n.n(u),l=n(464),j=n.n(l),d=n(173),b=n(0),f=function(e){var t=e.pathname,n=e.termOfUrl,c=e.searchUsers,u=e.totalUsersCount,l=e.isFetching,f={p:"1, 1, 1, 0",pl:"calc(1em + 32px)",width:"100%"},m=Object(r.useState)(!0),O=Object(a.a)(m,2),h=O[0],v=O[1],p=Object(r.useCallback)((function(e){c(e.target.value),v(!1)}),[c]),x=Object(r.useMemo)((function(){return s()(p,600)}),[p]);return Object(r.useEffect)((function(){return function(){x.cancel()}})),Object(b.jsxs)("div",{className:j.a.container,children:[Object(b.jsxs)("div",{className:j.a.searchWrap,children:[Object(b.jsx)("div",{className:j.a.searchIcon,children:Object(b.jsx)(o.a,{})}),"/users"===t&&Object(b.jsx)(i.c,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},sx:f,value:n,onChange:p}),"/friends"===t&&Object(b.jsx)(i.c,{placeholder:"Search by name...",inputProps:{"aria-label":"search"},sx:f,onInput:x})]}),Object(b.jsxs)("div",{className:j.a.searchCount,children:["Total: ",u.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1 ")]}),h&&!l&&Object(b.jsx)(d.a.SearchUsers,{pathname:t})]})};t.a=Object(r.memo)(f)},459:function(e,t,n){var a=n(69),r=n(460),c=n(461),s=Math.max,i=Math.min;e.exports=function(e,t,n){var u,o,l,j,d,b,f=0,m=!1,O=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=u,a=o;return u=o=void 0,f=t,j=e.apply(a,n)}function p(e){return f=e,d=setTimeout(_,t),m?v(e):j}function x(e){var n=e-b;return void 0===b||n>=t||n<0||O&&e-f>=l}function _(){var e=r();if(x(e))return w(e);d=setTimeout(_,function(e){var n=t-(e-b);return O?i(n,l-(e-f)):n}(e))}function w(e){return d=void 0,h&&u?v(e):(u=o=void 0,j)}function g(){var e=r(),n=x(e);if(u=arguments,o=this,b=e,n){if(void 0===d)return p(b);if(O)return clearTimeout(d),d=setTimeout(_,t),v(b)}return void 0===d&&(d=setTimeout(_,t)),j}return t=c(t)||0,a(n)&&(m=!!n.leading,l=(O="maxWait"in n)?s(c(n.maxWait)||0,t):l,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==d&&clearTimeout(d),f=0,u=b=o=d=void 0},g.flush=function(){return void 0===d?j:w(r())},g}},460:function(e,t,n){var a=n(57);e.exports=function(){return a.Date.now()}},461:function(e,t,n){var a=n(462),r=n(69),c=n(114),s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,o=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=i.test(e);return n||u.test(e)?o(e.slice(2),n?2:8):s.test(e)?NaN:+e}},462:function(e,t,n){var a=n(463),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},463:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},464:function(e,t,n){e.exports={container:"Search_container__1sCS3",searchWrap:"Search_searchWrap__1VAEz",searchIcon:"Search_searchIcon__3oISE",searchCount:"Search_searchCount__31o5E",search:"Search_search__ntywA"}},465:function(e,t,n){"use strict";var a=n(55);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(56)),c=n(0),s=(0,r.default)((0,c.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.default=s},467:function(e,t,n){"use strict";var a=n(1);t.a=function(e){var t=e.elementTrigger,n=e.isCanLoad,r=e.isFetching,c=e.callback,s=Object(a.useRef)();Object(a.useEffect)((function(){if(!r){s.current&&s.current.disconnect();s.current=new IntersectionObserver((function(e){e[0].isIntersecting&&n&&c()})),s.current.observe(t.current)}}),[r,c,n,t])}},468:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(456),s=n.n(c),i=n(172),u=n(87),o=(n(457),n(0)),l=function(e){var t=e.element,n=e.children;return Object(o.jsx)("div",{"data-tooltip":t,children:n})},j=Object(r.memo)(l),d=n(176),b=n(455),f=function(e){var t=e.user,n=t.id,c=t.photos,i=t.name,l=t.status,j=t.followed,f=Object(r.useState)(19),O=Object(a.a)(f,2),h=O[0],v=O[1],p=Object(b.a)();return Object(r.useEffect)((function(){p<=735&&v(10)}),[p]),Object(o.jsxs)("article",{className:s.a.user,children:[Object(o.jsxs)("div",{className:s.a.wrapAvatarNameAndStatus,children:[Object(o.jsx)("div",{className:s.a.wrapAvatar,children:Object(o.jsx)(u.a,{photo:c.large,size:"large",id:n})}),Object(o.jsxs)("div",{className:s.a.nameAndStatus,children:[Object(o.jsx)(m.Name,{id:n,name:i,symbolCount:h}),Object(o.jsx)(m.Status,{status:l,symbolCount:h})]})]}),Object(o.jsx)(d.a,{id:n,followed:j})]})},m={Name:Object(r.memo)((function(e){var t=e.id,n=e.name,a=e.symbolCount;return Object(o.jsx)(o.Fragment,{children:(null===n||void 0===n?void 0:n.length)>a?Object(o.jsx)(j,{element:n,children:Object(o.jsx)("div",{className:s.a.wrapName,children:Object(o.jsx)(i.a,{id:t,name:n})})}):Object(o.jsx)("div",{className:s.a.wrapName,children:Object(o.jsx)(i.a,{id:t,name:n})})})})),Status:Object(r.memo)((function(e){var t=e.status,n=e.symbolCount;return Object(o.jsx)(o.Fragment,{children:(null===t||void 0===t?void 0:t.length)>n?Object(o.jsx)(j,{element:t,children:Object(o.jsx)("div",{className:s.a.status,children:Object(o.jsx)("i",{children:t})})}):Object(o.jsx)("div",{className:s.a.status,children:Object(o.jsx)("i",{children:t})})})}))};t.a=Object(r.memo)(f)},496:function(e,t,n){e.exports={visuallyHidden:"Friends_visuallyHidden__1qf9q",elementInteractive:"Friends_elementInteractive__1w7uh",container:"Friends_container__1Jny-",wrapUsers:"Friends_wrapUsers__2EwMx",buttonLoadMore:"Friends_buttonLoadMore__gF1g1",hiddenButtonLoadMore:"Friends_hiddenButtonLoadMore__8Aspr",users:"Friends_users__247s-",lastElement:"Friends_lastElement__lvTuN"}},499:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),s=n(29),i=n(496),u=n.n(i),o=n(468),l=n(458),j=n(173),d=n(116),b=n(115),f=n(467),m=n(10),O=n(174),h=n(79),v=n(0),p=function(){var e=Object(m.b)(O.c),t=Object(m.b)(O.e),n=Object(m.b)(O.b),i=Object(m.b)(O.d),p=Object(m.a)(),x=Object(s.h)().pathname,_=Object(a.useState)(1),w=Object(c.a)(_,2),g=w[0],N=w[1],S=Object(a.useState)(""),y=Object(c.a)(S,2),F=y[0],A=y[1],C=Object(a.useState)(!0),E=Object(c.a)(C,2),U=E[0],M=E[1],k=Math.ceil(i/e),T=Object(a.useCallback)((function(e){N(1),A(e),p(Object(h.e)({page:1,term:e,friend:!0}))}),[p]);Object(a.useEffect)((function(){p(Object(h.a)()),N(1),p(Object(h.e)({page:1,term:"",friend:!0})),$(!0)}),[x,p]);var I=r.a.useRef(null),L=Object(a.useState)(!1),W=Object(c.a)(L,2),z=W[0],$=W[1];return Object(f.a)({elementTrigger:I,isCanLoad:k>g,isFetching:n,callback:function(){M(!1),$(!0),N(++g),p(Object(h.e)({page:g,term:F,friend:!0}))}}),Object(a.useEffect)((function(){$(!1)}),[t.length]),Object(v.jsxs)("main",{className:u.a.container,children:[Object(v.jsx)("h1",{className:u.a.visuallyHidden,children:"Friends"}),U&&!n&&k>1&&Object(v.jsx)(j.a.PaginationUsers,{pathname:x}),Object(v.jsx)(l.a,{termOfUrl:"",pathname:x,isFetching:n,searchUsers:T,totalUsersCount:i}),0===i&&!n&&Object(v.jsx)(b.a,{elements:"users"}),Object(v.jsxs)("div",{className:u.a.wrapUsers,children:[Object(v.jsx)("div",{className:u.a.users,children:t.map((function(e){return Object(v.jsx)(o.a,{user:{id:e.id,name:e.name,status:e.status,followed:e.followed,photos:e.photos}},e.id)}))}),z&&Object(v.jsx)(d.a,{display:"block"}),!n&&Object(v.jsx)("div",{ref:I,className:u.a.lastElement})]})]})},x=Object(a.memo)(p),_=n(175);t.default=Object(_.a)((function(){var e=Object(m.b)(O.b);return Object(v.jsxs)(v.Fragment,{children:[e?Object(v.jsx)(d.a,{}):null,Object(v.jsx)(x,{})]})}))}}]);
//# sourceMappingURL=4.ee9ab184.chunk.js.map