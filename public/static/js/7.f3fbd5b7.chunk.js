(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{46:function(e,a,t){"use strict";t(0),t(50);var n=t(1);a.a=function(e){return Object(n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},50:function(e,a,t){},65:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(42),s=t(44),r=t(48),c=t(10),i=t(0),l=t(56),o=t(55),u=t(57),p=t(49),d=t(45),j=t(46),b=t(47),O=t(14),m=(t(65),t(12)),v=t(1);a.default=function(){var e=Object(i.useContext)(m.a),a=Object(i.useState)(!0),t=Object(c.a)(a,2),x=t[0],h=t[1],f=Object(p.a)(),w=f.isLoading,k=f.error,y=f.sendRequest,I=f.clearError,N=Object(u.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),g=Object(c.a)(N,3),P=g[0],S=g[1],T=g[2],V=function(){var a=Object(s.a)(Object(n.a)().mark((function a(t){var s,r,c;return Object(n.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.preventDefault(),!x){a.next=13;break}return a.prev=2,a.next=5,y("".concat("https://long-teal-cockatoo-hat.cyclic.app/","/api/users/login"),"POST",JSON.stringify({email:P.inputs.email.value,password:P.inputs.password.value}),{"Content-Type":"application/json"});case 5:s=a.sent,e.login(s.userId,s.token),a.next=11;break;case 9:a.prev=9,a.t0=a.catch(2);case 11:a.next=26;break;case 13:return a.prev=13,(r=new FormData).append("email",P.inputs.email.value),r.append("name",P.inputs.name.value),r.append("password",P.inputs.password.value),a.next=20,y("".concat("https://long-teal-cockatoo-hat.cyclic.app/","/api/users/signup"),"POST",r);case 20:c=a.sent,e.login(c.userId,c.token),a.next=26;break;case 24:a.prev=24,a.t1=a.catch(13);case 26:case"end":return a.stop()}}),a,null,[[2,9],[13,24]])})));return function(e){return a.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,{error:k,onClear:I}),Object(v.jsxs)(j.a,{className:"authentication",children:[w&&Object(v.jsx)(O.a,{asOverlay:!0}),Object(v.jsx)("h2",{children:"LOGIN REQUIRED"}),Object(v.jsx)("hr",{}),Object(v.jsxs)("form",{className:"auth-form",onSubmit:V,children:[!x&&Object(v.jsx)(l.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[Object(o.c)()],errorText:"Please enter a name",onInput:S}),Object(v.jsx)(l.a,{id:"email",element:"input",type:"email",label:"Email",validators:[Object(o.a)()],errorText:"Please enter a valid email.",onInput:S}),!x,Object(v.jsx)(l.a,{id:"password",element:"input",type:"password",label:"Password",validators:[Object(o.b)(6)],errorText:"Pease enter a password (6 characters)",onInput:S}),Object(v.jsx)(d.a,{type:"submit",disabled:!P.isValid,children:x?"LOGIN":"SIGNUP"})]}),Object(v.jsxs)(d.a,{inverse:!0,onClick:function(){x?T(Object(r.a)(Object(r.a)({},P.inputs),{},{name:{value:"",isValid:!1}}),!1):T(Object(r.a)(Object(r.a)({},P.inputs),{},{name:void 0}),P.inputs.email.isValid&&P.inputs.password.isValid),h((function(e){return!e}))},children:["SWITCH TO ",x?"SIGNUP":"LOGIN"]})]})]})}}}]);
//# sourceMappingURL=7.f3fbd5b7.chunk.js.map