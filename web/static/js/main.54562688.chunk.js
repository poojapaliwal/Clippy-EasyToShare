(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(1),n=a.n(c),i=a(52),o=a.n(i),r=(a(65),a(66),a(21)),l=a(2),d=a(32),j=a.n(d),h=a(53),u=a(11),b=a(23),m=a(22),g=function(){var e=Object(c.useState)({email:"",pin:0,status:!1}),t=Object(b.a)(e,2),a=t[0],n=t[1],i=function(){var e=Object(h.a)(j.a.mark((function e(t){var s,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(a),""===a.email||0===a.pin){e.next=13;break}return e.next=5,fetch(m.REGISTERSERVER,{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,console.log(c),n((function(e){return Object(u.a)(Object(u.a)({},e),{},{status:!0})})),e.next=14;break;case 13:alert("Enter Something Correct");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return!1===a.status?Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:i,children:[Object(s.jsx)("input",{type:"text",placeholder:"Enter Email ID",onChange:function(e){n((function(t){return Object(u.a)(Object(u.a)({},t),{},{email:e.target.value})}))}}),Object(s.jsx)("input",{type:"number",placeholder:"Enter Pin",onChange:function(e){n((function(t){return Object(u.a)(Object(u.a)({},t),{},{pin:e.target.value})}))},defaultValue:0}),Object(s.jsx)("button",{children:"submit"})]})}):(localStorage.setItem("islogged","true"),Object(s.jsx)(l.a,{to:{pathname:"/home",state:Object(u.a)(Object(u.a)({},a),{},{from:"login"})}}))},p=a(55),O=a(56),f=a(59),x=a(58),v=function(e){return Object(s.jsxs)("div",{className:"eachItem",children:[Object(s.jsx)("div",{className:"eachProfilePic",children:Object(s.jsx)("img",{src:e.data.profilePic,alt:e.data.profilePic,width:"64px"})}),Object(s.jsxs)("div",{className:"eachMessageContent",children:[Object(s.jsx)("div",{className:"eachMessageSenderName",children:e.data.name}),Object(s.jsx)("div",{className:"eachMessageText",children:e.data.lastMessage}),Object(s.jsx)("div",{className:"eachMessageTime",children:e.data.time})]})]})},N=n.a.createContext("user   "),S=(a(72),function(e){var t=Object(c.useContext)(N);console.log(t);var a=new Array,n=Object(c.useState)([{name:"PV",time:"08:55AM",lastMessage:"Hey What's happening!",profilePic:"https://avatars0.githubusercontent.com/u/48829314?s=460&u=f9ad5d29c13133b919427f27a5d6055bff5a0247&v=4"},{name:"SVNIT EE Chats",time:"Yesterday",lastMessage:"Meet me koi Join hua ?",profilePic:"https://upload.wikimedia.org/wikipedia/en/1/1b/NIT_Surat_Logo.svg"},{name:"Shlok Patel",time:"Yesterday",lastMessage:"Oii Project ka kya karega ?",profilePic:"https://avatars3.githubusercontent.com/u/51414879?s=460&u=3ea393bada1aa57c595bd47922875b8f148bc97f&v=4"},{name:"Shlok Patel",time:"Yesterday",lastMessage:"Oii Project ka kya karega ?",profilePic:"https://avatars3.githubusercontent.com/u/51414879?s=460&u=3ea393bada1aa57c595bd47922875b8f148bc97f&v=4"}]),i=Object(b.a)(n,2),o=i[0];i[1];return t.name.data.forEach((function(e,t){console.log(e),a.push({name:e.name,time:e.lastLoginTime,lastMessage:"849",profilePic:o[t%o.length].profilePic})})),console.log(a),Object(s.jsx)("div",{style:{borderTop:"0.5px solid #dedede"},children:a.map((function(e,t){return Object(s.jsx)(v,{data:e},t)}))})}),k=(a(73),function(e){var t=e.socket;console.log(t);return Object(s.jsxs)("div",{className:"chatWindowContainer",children:[Object(s.jsxs)("div",{className:"chatContents",children:[Object(s.jsx)("div",{className:"chatContentEachMessage",children:"Hello"}),Object(s.jsx)("div",{className:"chatContentEachMessage",children:"Hello2"})]}),Object(s.jsxs)("form",{className:"chatSendContainer",onSubmit:function(e){e.preventDefault(),console.log(e.target.messageValue.value);var a=String(e.target.messageValue.value);""!==a&&(t.emit("sentFromClientMessage",{text:a}),e.target.messageValue.value="",t.on("sentFromServerMessage",(function(e){console.log(e)})))},children:[Object(s.jsx)("div",{className:"chatEmojiSelectionButton",children:"\ud83d\ude0a"}),Object(s.jsx)("div",{className:"chatInputField",children:Object(s.jsx)("input",{type:"text",id:"messageValue",placeholder:"Start Typing ..."})}),Object(s.jsx)("div",{className:"chatMicrophoneButton",children:Object(s.jsx)("button",{children:"Send"})})]})]})}),C=(a(74),function(e){return Object(s.jsxs)("div",{className:"chatHeaderContainer",children:[Object(s.jsx)("div",{className:"chatHeaderProfilePic",children:Object(s.jsx)("img",{src:"https://avatars0.githubusercontent.com/u/48829314?s=460&u=f9ad5d29c13133b919427f27a5d6055bff5a0247&v=4",width:"64px"})}),Object(s.jsx)("div",{className:"chatHeaderProfileName",children:"PV"}),Object(s.jsx)("div",{className:"chatHeaderProfileStatus",children:"Online"}),Object(s.jsx)("div",{className:"chatHeaderProfileActions",children:"options"})]})}),E=(a(75),a(76),function(e){return Object(s.jsxs)("div",{className:"profileContainer",children:[Object(s.jsx)("div",{className:"profileImageContainer",children:Object(s.jsx)("img",{src:"https://avatars2.githubusercontent.com/u/62550592?s=460&u=576c5bc8bcca66c5443b501f1e218bf2204d62f7&v=4"})}),Object(s.jsx)("div",{className:"profileName",children:" pushpendrahpx "}),Object(s.jsxs)("div",{className:"rightSection",children:[Object(s.jsx)("div",{className:"button1",children:"op1"}),Object(s.jsx)("div",{className:"button2",children:"logout"})]})]})}),P=a(57),y=a.n(P),M=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(p.a)(this,a),(s=t.call(this,e)).gotFunction=function(e){console.log(e),s.setState({data:e},(function(){console.log(s.state)}))},s.state={data:[]},console.log(e),console.log(N),s}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.socket=y()(m.SOCKET_SERVER),console.log(this.socket),this.socket.emit("setSocketIDToEmail",this.props.TriedLoggedData),this.socket.emit("getAllUsers",""),this.socket.on("sentToClientMessage",(function(e){console.log(e)})),this.socket.on("allUsersTillDate",this.gotFunction)}},{key:"render",value:function(){return localStorage.getItem("islogged")&&"true"===localStorage.getItem("islogged")&&"email"in this.props.TriedLoggedData?Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(N.Provider,{value:{name:this.state},children:Object(s.jsxs)("div",{className:"artificial",children:[Object(s.jsx)("div",{className:"titleapp",children:"Clippy Chatter"}),Object(s.jsxs)("div",{className:"appContainer",children:[Object(s.jsx)("div",{className:"profile",children:Object(s.jsx)(E,{})}),Object(s.jsx)("div",{className:"header",children:Object(s.jsx)(C,{})}),Object(s.jsx)("div",{className:"availablechats",children:Object(s.jsx)(S,{})}),Object(s.jsx)("div",{className:"chatwindow",children:Object(s.jsx)(k,{socket:this.socket})})]})]})})}):Object(s.jsx)(l.a,{to:"/"})}}]),a}(c.Component);var T=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(r.a,{children:Object(s.jsxs)(l.d,{children:[Object(s.jsx)(l.b,{path:"/",exact:!0,component:g}),Object(s.jsx)(l.b,{path:"/home",render:function(e){return Object(s.jsx)(M,{TriedLoggedData:e.location.state?e.location.state:{}})}})]})})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),w()},22:function(e,t){e.exports={SOCKET_SERVER:"https://shareable.tech/",REGISTERSERVER:"https://shareable.tech/api/register"}},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.54562688.chunk.js.map