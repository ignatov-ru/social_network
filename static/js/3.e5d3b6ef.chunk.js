(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[3],{409:function(e,a,s){e.exports={container:"Dialogs_container__KlA9W",items:"Dialogs_items__ynFSW",dialogs:"Dialogs_dialogs__1YIzW",message:"Dialogs_message__D3bS7",wrapSendAndButton:"Dialogs_wrapSendAndButton__23pJv"}},410:function(e,a,s){"use strict";var t=s(48),n=s(49);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(s(0)),o=(0,t(s(50)).default)(i.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");a.default=o},412:function(e,a,s){"use strict";s.r(a);var t=s(21),n=s(13),i=s(161),o=s(108),r=(s(0),s(184)),c=s(185),d=s(32),l=s(409),m=s.n(l),u=s(1),g=function(e){var a="/dialogs/"+e.id;return Object(u.jsx)(d.b,{className:m.a.active,to:a,style:{color:"white"},children:e.name})},j=function(e){return Object(u.jsx)("div",{className:m.a.message,style:{overflowWrap:"break-word",width:"400px",marginBottom:20},children:e.text})},b=s(40),p=s(204),x=s(410),f=s.n(x),h=Object(c.a)({form:"dialogAddMessageForm"})((function(e){var a=e.handleSubmit;return Object(u.jsx)("form",{onSubmit:a,children:Object(u.jsxs)("div",{className:m.a.wrapSendAndButton,children:[Object(u.jsx)(r.a,{component:b.a,name:"newMessageText",placeholder:"Enter your message...",multiline:!0,fullWidth:!0,variant:"outlined",inputProps:{maxLength:1e3}}),Object(u.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",style:{color:"white",marginLeft:"10px"},endIcon:Object(u.jsx)(f.a,{}),children:"Send"})]})})})),v=function(e){var a=e.dialogs.map((function(e){return Object(u.jsx)(g,{name:e.name,id:e.id},e.id)})),s=e.messages.map((function(e){return Object(u.jsx)(j,{text:e.message},e.id)}));return Object(u.jsx)("div",{className:m.a.containerMain,children:Object(u.jsxs)("div",{className:m.a.container,children:[Object(u.jsx)("div",{className:m.a.items,children:a}),Object(u.jsxs)("div",{className:m.a.dialogs,children:[s,Object(u.jsx)(h,{onSubmit:function(a){e.sendMessage(a.newMessageText)}})]})]})})};a.default=Object(n.d)(Object(t.b)((function(e){return{dialogs:e.messagesPage.dialogs,messages:e.messagesPage.messages}}),{sendMessage:i.a.sendMessage}),o.a)(v)}}]);
//# sourceMappingURL=3.e5d3b6ef.chunk.js.map