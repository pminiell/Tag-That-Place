"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[930],{373:function(e,n,t){t.d(n,{Z:function(){return c}});t(791);var s=t(184),c=function(e){return(0,s.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},542:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var s=t(165),c=t(861),a=t(885),r=t(791),i=t(523),l=t(184),u=function(e){return(0,l.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:(0,l.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},o=t(373),d=function(e){return(0,l.jsx)("li",{className:"user-item",children:(0,l.jsx)(o.Z,{className:"user-item__content",children:(0,l.jsxs)(i.rU,{to:"/".concat(e.id,"/places"),children:[(0,l.jsx)("div",{className:"user-item__image",children:(0,l.jsx)(u,{image:"".concat("https://long-teal-cockatoo-hat.cyclic.app/","/").concat(e.image),alt:e.name})}),(0,l.jsxs)("div",{className:"user-item__info",children:[(0,l.jsx)("h2",{children:e.name}),(0,l.jsxs)("h3",{children:[e.placeCount," ",1===e.placeCount?"Place":"Places"]})]})]})})})},h=function(e){return 0===e.items.length?(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(o.Z,{children:(0,l.jsx)("h2",{children:"No users found"})})}):(0,l.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return(0,l.jsx)(d,{id:e.id,image:e.image,name:e.name,placeCount:e.places.length},e.id)}))})},m=t(434),f=t(895),x=t(508),p=function(){var e=(0,x.x)(),n=e.isLoading,t=e.error,i=e.sendRequest,u=e.clearError,o=(0,r.useState)(),d=(0,a.Z)(o,2),p=d[0],j=d[1];return(0,r.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat("https://long-teal-cockatoo-hat.cyclic.app/","/api/users/"));case 3:n=e.sent,j(n.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[i]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.Z,{error:t,onClear:u}),n&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(f.Z,{})}),!n&&p&&(0,l.jsx)(h,{items:p})]})}}}]);
//# sourceMappingURL=930.456e7915.chunk.js.map