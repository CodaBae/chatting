(window.webpackJsonpchat=window.webpackJsonpchat||[]).push([[0],{104:function(e,a){},107:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},151:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),s=t(54),o=t.n(s),m=t(61),l=t(5),i=t(55),u=t.n(i),A=t(56),E=t.n(A),f=t(16),g=t.n(f),p=(t(107),t(57)),d=t.n(p),N=(t(143),t(30)),h=t.n(N),b=function(e){var a=e.message,t=a.text,n=a.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},h.a.emojify(t)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},h.a.emojify(t))),r.a.createElement("p",{className:"sentText pl-10 "},n))},j=(t(144),function(e){var a=e.messages,t=e.name;return r.a.createElement(d.a,{className:"messages"},a.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(b,{message:e,name:t}))}))}),v=t(58),O=t.n(v),C=(t(145),function(e){var a=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:g.a,alt:"online icon"}),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:O.a,alt:"close icon"}))))}),I=(t(146),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),S=(t(147),"https://project-chat-application.herokuapp.com/"),x=function(e){var a=e.location,t=Object(c.useState)(""),s=Object(l.a)(t,2),o=s[0],i=s[1],A=Object(c.useState)(""),f=Object(l.a)(A,2),g=f[0],p=f[1],d=Object(c.useState)(""),N=Object(l.a)(d,2),h=(N[0],N[1]),b=Object(c.useState)(""),v=Object(l.a)(b,2),O=v[0],x=v[1],w=Object(c.useState)([]),y=Object(l.a)(w,2),B=y[0],k=y[1];Object(c.useEffect)(function(){var e=u.a.parse(a.search),t=e.name,c=e.room;n=E()(S),p(c),i(t),n.emit("join",{name:t,room:c},function(e){e&&alert(e)})},[S,a.search]),Object(c.useEffect)(function(){n.on("message",function(e){k(function(a){return[].concat(Object(m.a)(a),[e])})}),n.on("roomData",function(e){var a=e.users;h(a)})},[]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(C,{room:g}),r.a.createElement(j,{messages:B,name:o}),r.a.createElement(I,{message:O,setMessage:x,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,function(){return x("")})}})))},w=t(17);t(148);function y(e){var a=Object(c.useState)(""),t=Object(l.a)(a,2),n=t[0],s=t[1],o=Object(c.useState)(e.match.params.id),m=Object(l.a)(o,2),i=m[0];m[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Your Name"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return s(e.target.value)}})),r.a.createElement(w.b,{onClick:function(e){return n&&i?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(i)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Chat Now"))))}var B=t(6),k=function(){return r.a.createElement(w.a,null,r.a.createElement(B.a,{path:"/",exact:!0,component:y}),r.a.createElement(B.a,{path:"/chat",component:x}))};o.a.render(r.a.createElement(k,null),document.getElementById("root"))},16:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},58:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,a,t){e.exports=t(151)}},[[62,1,2]]]);
//# sourceMappingURL=main.22f15d44.chunk.js.map