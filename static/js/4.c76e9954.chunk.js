(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{290:function(e,s,t){e.exports={messages:"Dialogs_messages__1nJuk",items:"Dialogs_items__ynFSW",title:"Dialogs_title__16_vM",dialogs:"Dialogs_dialogs__1YIzW",message:"Dialogs_message__D3bS7"}},295:function(e,s,t){"use strict";t.r(s);var a=t(125),n=t(5),i=t(26),c=t(35),r=t(28),o=t(27),u=t(0),j=t.n(u),m=t(9),b=t(11),l=t(1),d=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(r.a)(a,s);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(n.a)({},this.props)):Object(l.jsx)(m.a,{to:"/login"})}}]),a}(j.a.Component);return Object(b.b)(d)(s)},O=t(290),p=t.n(O),h=t(23),f=function(e){var s="/dialogs/"+e.id;return Object(l.jsx)(h.b,{className:p.a.active,to:s,children:e.name})},x=function(e){return Object(l.jsx)("p",{className:p.a.message,children:e.text})},_=t(126),v=t(127),y=t(66),D=t(38),S=Object(D.a)(30),M=Object(y.a)("textarea"),N=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return Object(l.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(l.jsx)(_.a,{name:"newMessageBody",validate:[S],placeholder:"\u0412\u0432\u0435\u0434\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",component:M}),Object(l.jsx)("button",{children:"Send"})]})})),k=function(e){var s=e.messagesPage.dialogs.map((function(e){return Object(l.jsx)(f,{name:e.name,id:e.id},e.id)})),t=e.messagesPage.messages.map((function(e){return Object(l.jsx)(x,{text:e.message},e.key)}));return Object(l.jsxs)("div",{className:p.a.messages,children:[Object(l.jsxs)("div",{className:p.a.items,children:[Object(l.jsx)("span",{className:p.a.title,children:"DIALOGS"}),s]}),Object(l.jsxs)("div",{className:p.a.dialogs,children:[t,Object(l.jsx)(N,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})},A=t(10);s.default=Object(A.d)(Object(b.b)((function(e){return{messagesPage:e.messagesPage}}),{sendMessage:a.b}),g)(k)}}]);
//# sourceMappingURL=4.c76e9954.chunk.js.map