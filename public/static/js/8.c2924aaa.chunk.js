(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{43:function(e,t,c){"use strict";var n=c(1);c(0),c(49);t.a=function(e){return Object(n.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},49:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(47),a=c.n(s),r=c(48),i=c(11),l=c(0),u=(c(61),c(9)),j=(c(62),c(63),function(e){return Object(n.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(n.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})}),o=c(43),h=function(e){return Object(n.jsx)("li",{className:"user-item",children:Object(n.jsx)(o.a,{className:"user-item__content",children:Object(n.jsxs)(u.b,{to:"/".concat(e.id,"/places"),children:[Object(n.jsx)("div",{className:"user-item__image",children:Object(n.jsx)(j,{image:"".concat("https://tag-that-place.herokuapp.com","/").concat(e.image),alt:e.name})}),Object(n.jsxs)("div",{className:"user-item__info",children:[Object(n.jsx)("h2",{children:e.name}),Object(n.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})},d=function(e){return 0===e.items.length?Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(o.a,{children:Object(n.jsx)("h2",{children:"No users found"})})}):Object(n.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(n.jsx)(h,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)}))})},m=c(50),b=c(16),p=c(51);t.default=function(){var e=Object(p.a)(),t=e.isLoading,c=e.error,s=e.sendRequest,u=e.clearError,j=Object(l.useState)(),o=Object(i.a)(j,2),h=o[0],O=o[1];return Object(l.useEffect)((function(){(function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("".concat("https://tag-that-place.herokuapp.com","/api/users/"));case 3:t=e.sent,O(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.a,{error:c,onClear:u}),t&&Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(b.a,{})}),!t&&h&&Object(n.jsx)(d,{items:h})]})}}}]);
//# sourceMappingURL=8.c2924aaa.chunk.js.map