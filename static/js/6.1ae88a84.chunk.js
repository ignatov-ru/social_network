(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[6],{417:function(e,t,a){"use strict";var s=a(22),n=a(0);t.a=function(){var e=Object(n.useState)(window.innerWidth),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[a,r]),a}},433:function(e,t,a){e.exports={chat:"Chat_chat__18S3w",membersAndMessages:"Chat_membersAndMessages__1RTR_",form:"Chat_form__3kFu7"}},435:function(e,t,a){e.exports={container:"ChatMembers_container__2TP-1",visuallyHidden:"ChatMembers_visuallyHidden__3fPWw",elementInteractive:"ChatMembers_elementInteractive__1ZGlM",inputHiddenBeforeFolding:"ChatMembers_inputHiddenBeforeFolding__2RSKX",titleWrap:"ChatMembers_titleWrap__2aqvJ",title:"ChatMembers_title__2F3c9",titleArrow:"ChatMembers_titleArrow__Vct_Z",members:"ChatMembers_members__1ERHp",member:"ChatMembers_member__2ia4a",wrapName:"ChatMembers_wrapName__13EX8",buttonShowAllWrap:"ChatMembers_buttonShowAllWrap__3Y0yM",buttonShowAll:"ChatMembers_buttonShowAll__3vJDS",notShowMembers:"ChatMembers_notShowMembers__2AwPt",titleWrapDeployed:"ChatMembers_titleWrapDeployed__1_4of"}},436:function(e,t,a){e.exports={buttonSortWrap:"ChatButtonSort_buttonSortWrap__2hZ4X",buttonSortNotShowMembers:"ChatButtonSort_buttonSortNotShowMembers__3z0o1",buttonSort:"ChatButtonSort_buttonSort___FePg"}},440:function(e,t,a){e.exports={container:"ChatMessages_container__3dBvO",visuallyHidden:"ChatMessages_visuallyHidden__2iYQw",elementInteractive:"ChatMessages_elementInteractive__24IBt"}},441:function(e,t,a){e.exports={messageContainer:"ChatMessage_messageContainer__3ipmI",myMessageContainer:"ChatMessage_myMessageContainer__D-mRN",message:"ChatMessage_message__1yqt-",nameAndMessage:"ChatMessage_nameAndMessage__1h2CE",avatar_size_medium:"ChatMessage_avatar_size_medium__15DRH",avatar_size_small:"ChatMessage_avatar_size_small__3py49"}},461:function(e,t,a){"use strict";a.r(t);var s=a(22),n=a(0),r=a(9),i=a(402),c=a(442),o=a.n(c),l=a(410),m=a(433),b=a.n(m),u=a(34),d=a(16),h=a(21),j=a.n(h),_=a(434),O=a.n(_),p=a(439),v=a(435),x=a.n(v),f=a(417),g=a(438),S=a.n(g),C=a(437),M=a.n(C),w=a(406),N=a(436),y=a.n(N),A=a(1),I=function(e){var t=e.theme,a=e.isReverseSort,s=e.setIsReverseSort,n=e.isShowAll,r=e.isShowMembers;return Object(A.jsx)("div",{className:j()(y.a.buttonSortWrap,Object(d.a)({},y.a.buttonSort,r),Object(d.a)({},y.a.buttonSortNotShowMembers,!r)),children:Object(A.jsx)(w.a,{onClick:function(){return s(!a)},disabled:!n,startIcon:a?Object(A.jsx)(M.a,{}):Object(A.jsx)(S.a,{}),style:{fontSize:"10px",marginBottom:"5px",padding:"3px 10px 3px 7px"},color:"theme1"===t?"primary":"secondary",children:"sort by name"})})},W=a(79),z=a(156),H=function(e){return e.chat.messages},R=function(e){return e.chat.messages.filter((function(e,t,a){return a.findIndex((function(t){return t.userId===e.userId}))===t?e:null}))},k=function(e){return e.chat.statusWS},B=function(e){var t=e.theme,a=Object(r.d)(R),i=Object(n.useState)(!1),c=Object(s.a)(i,2),o=c[0],l=c[1],m=Object(n.useState)(!1),b=Object(s.a)(m,2),h=b[0],_=b[1],v=Object(n.useState)(!1),g=Object(s.a)(v,2),S=g[0],C=g[1],M=Object(f.a)(),w=function(){M<=760&&C(!S)},N=o?a.length:2;return Object(A.jsxs)("section",{hidden:!a.length,className:x.a.container,children:[Object(A.jsx)("h1",{className:x.a.visuallyHidden,children:"Chat members"}),Object(A.jsxs)("div",{"aria-hidden":"true",onChange:w,children:[Object(A.jsx)("input",{className:j()(x.a.visuallyHidden,x.a.inputHiddenBeforeFolding)}),Object(A.jsxs)("div",{"aria-hidden":"true",className:j()(x.a.titleWrap,x.a.elementInteractive,Object(d.a)({},x.a.titleWrapDeployed,S)),onClick:w,children:[Object(A.jsx)("h1",{className:x.a.title,children:"Members"}),Object(A.jsx)(O.a,{className:x.a.titleArrow,path:p.a,title:"ArrowShowMembers",size:"18px"})]})]}),Object(A.jsx)(I,{theme:t,isShowAll:o,isShowMembers:S,isReverseSort:h,setIsReverseSort:_}),Object(A.jsxs)("div",{className:j()(Object(d.a)({},x.a.members,S),Object(d.a)({},x.a.notShowMembers,!S)),children:[a&&Object(u.a)(a).slice(0,N).sort((function(e,t){return h?t.userName.localeCompare(e.userName):e.userName.localeCompare(t.userName)})).map((function(e){return Object(A.jsxs)("div",{className:x.a.member,children:[Object(A.jsx)(W.a,{photo:e.photo,size:"small",id:e.userId}),Object(A.jsx)("div",{className:x.a.wrapName,children:Object(A.jsx)(z.a,{id:e.userId,name:e.userName,size:"small"})})]},e.userId)})),a.length>2&&!o?Object(A.jsx)("div",{className:x.a.buttonShowAllWrap,children:Object(A.jsxs)("button",{type:"button",className:x.a.buttonShowAll,onClick:function(){return l(!0)},children:["show all ",a.length," ..."]})}):""]})]})},E=a(440),F=a.n(E),D=a(441),P=a.n(D),T=a(37),J=function(e){var t=e.message,a=t.userId,s=t.photo,n=t.userName,i=t.message,c=Object(r.d)(T.a);return Object(A.jsxs)("article",{className:j()(P.a.messageContainer,Object(d.a)({},P.a.myMessageContainer,c===a)),children:[Object(A.jsx)("div",{className:P.a.avatar_size_medium,children:Object(A.jsx)(W.a,{photo:s,size:"medium",id:a})}),Object(A.jsx)("div",{hidden:!0,className:P.a.avatar_size_small,children:Object(A.jsx)(W.a,{photo:s,size:"small",id:a})}),Object(A.jsxs)("div",{className:P.a.nameAndMessage,children:[Object(A.jsx)(z.a,{id:a,name:n,size:"normal"}),Object(A.jsx)("div",{className:P.a.message,children:i})]})]})},L=Object(n.memo)(J),X=a(159),Z=function(){var e=Object(r.d)(H),t=Object(n.useRef)(null),a=Object(n.useState)(!0),i=Object(s.a)(a,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){var e;c&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e,c]),Object(A.jsxs)("section",{className:F.a.container,onScroll:function(e){var t=e.currentTarget,a=t.scrollHeight-t.scrollTop-t.clientHeight;Math.abs(a)<1?c||o(!0):c&&o(!1)},children:[Object(A.jsx)("h1",{className:F.a.visuallyHidden,children:"Chat messages"}),e.length?e.filter((function(e){return e.message.trim().length>0})).map((function(e){return Object(A.jsx)(L,{message:e},e.id)})):Object(A.jsx)(X.a,{elements:"messages",writeSomething:!0}),Object(A.jsx)("div",{ref:t})]})},q=Object(n.memo)(Z),V=a(27),Y=a(194),G=function(e){var t=e.theme,a=e.status,c=Object(r.c)(),m=Object(n.useState)(""),u=Object(s.a)(m,2),d=u[0],h=u[1];return Object(A.jsx)("div",{className:b.a.wrapForm,children:Object(A.jsxs)("div",{className:b.a.form,children:[Object(A.jsx)(l.a,{name:"newMessageText",placeholder:"Enter your message...",fullWidth:!0,variant:"outlined",inputProps:{maxLength:100},color:"theme1"===t?"primary":"secondary",onChange:function(e){return h(e.currentTarget.value)},value:d}),Object(A.jsx)(i.a,{title:"Send message",color:"theme1"===t?"primary":"secondary",style:{margin:"5px"},onClick:function(){d.trim()&&(c(Object(Y.b)(d)),h(""))},disabled:"pending"===a,children:Object(A.jsx)(o.a,{})})]})})};t.default=function(){var e=Object(r.d)(k),t=Object(r.d)(V.b),a=Object(r.c)();return Object(n.useEffect)((function(){return a(Object(Y.c)()),function(){a(Object(Y.d)())}}),[a]),Object(A.jsxs)("main",{className:b.a.chat,children:["error"===e&&Object(A.jsx)("div",{children:"Some error occured. Please, refresh the page..."}),Object(A.jsxs)("div",{className:b.a.membersAndMessages,children:[Object(A.jsx)(q,{}),Object(A.jsx)(B,{theme:t})]}),Object(A.jsx)(G,{theme:t,status:e})]})}}}]);
//# sourceMappingURL=6.1ae88a84.chunk.js.map