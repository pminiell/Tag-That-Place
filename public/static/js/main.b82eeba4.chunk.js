(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],[,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(0),a=Object(c.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,function(e,t,n){"use strict";n(0),n(38);var c=n(1);t.a=function(e){return Object(c.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(c.jsx)("div",{className:"lds-dual-ring"})})}},function(e,t,n){"use strict";n(0);var c=n(7),a=n.n(c),s=(n(37),n(1));t.a=function(e){return a.a.createPortal(Object(s.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(0),s=n.n(a),i=n(7),l=n.n(i),r=(n(26),n(2)),j=n(9),o=n(10),u=(n(27),n(28),n(1)),b=function(e){return Object(u.jsx)("header",{className:"main-header",children:e.children})},d=(n(30),n(12)),O=function(e){var t=Object(a.useContext)(d.a);return Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.c,{to:"/",exact:!0,children:"ALL USERS"})}),t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)(j.c,{to:"/".concat(t.userId,"/places"),children:"MY PLACES"})}),t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)(j.c,{to:"/places/new",children:"ADD PLACE"})}),!t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)(j.c,{to:"/auth",children:"AUTHENTICATE"})}),t.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:t.logout,children:"LOGOUT"})})]})},x=(n(36),n(41)),h=function(e){var t=Object(u.jsx)(x.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(u.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return l.a.createPortal(t,document.getElementById("drawer-hook"))},f=n(15),g=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],s=n[1],i=function(){s(!1)};return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(f.a,{onClick:i}),Object(u.jsx)(h,{show:c,onClick:i,children:Object(u.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(u.jsx)(O,{})})}),Object(u.jsxs)(b,{children:[Object(u.jsxs)("button",{className:"main-navigation__menu-btn",onClick:function(){s(!0)},children:[Object(u.jsx)("span",{}),Object(u.jsx)("span",{}),Object(u.jsx)("span",{})]}),Object(u.jsx)("h1",{className:"main-navigation__title",children:Object(u.jsx)(j.b,{to:"/",children:"Tag-That-Place"})}),Object(u.jsx)("nav",{className:"main-navigation__header-nav",children:Object(u.jsx)(O,{})})]})]})},m=n(14),v=s.a.lazy((function(){return n.e(5).then(n.bind(null,70))})),p=s.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,66))})),k=s.a.lazy((function(){return n.e(4).then(n.bind(null,69))})),I=s.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,67))})),w=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,68))}));var C=function(){var e,t=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(),l=Object(o.a)(i,2),r=l[0],j=l[1],u=Object(a.useState)(!1),b=Object(o.a)(u,2),d=b[0],O=b[1],x=Object(a.useCallback)((function(e,t,n){s(t),O(e);var c=n||new Date((new Date).getTime()+36e5);j(c),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:c.toISOString()}))}),[]),h=Object(a.useCallback)((function(){s(null),j(null),O(null),localStorage.removeItem("userData")}),[]);return Object(a.useEffect)((function(){if(n&&r){var e=r.getTime()-(new Date).getTime();c=setTimeout(h,e)}else clearTimeout(c)}),[n,h,r]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&x(e.userId,e.token,new Date(e.expiration))}),[x]),{token:n,login:x,logout:h,userId:d}}(),n=t.token,s=t.login,i=t.logout,l=t.userId;return e=n?Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{path:"/",exact:!0,children:Object(u.jsx)(v,{})}),Object(u.jsx)(r.b,{path:"/:userId/places",exact:!0,children:Object(u.jsx)(k,{})}),Object(u.jsx)(r.b,{path:"/places/new",exact:!0,children:Object(u.jsx)(p,{})}),Object(u.jsx)(r.b,{path:"/places/:placeId",children:Object(u.jsx)(I,{})}),Object(u.jsx)(r.a,{to:"/"})]}):Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{path:"/",exact:!0,children:Object(u.jsx)(v,{})}),Object(u.jsx)(r.b,{path:"/:userId/places",exact:!0,children:Object(u.jsx)(k,{})}),Object(u.jsx)(r.b,{path:"/auth",children:Object(u.jsx)(w,{})}),Object(u.jsx)(r.a,{to:"/auth"})]}),Object(u.jsx)(d.a.Provider,{value:{isLoggedIn:!!n,token:n,login:s,logout:i,userId:l},children:Object(u.jsxs)(j.a,{children:[Object(u.jsx)(g,{}),Object(u.jsx)("main",{children:Object(u.jsx)(a.Suspense,{fallback:Object(u.jsx)("div",{className:"center",children:Object(u.jsx)(m.a,{})}),children:e})})]})})};l.a.render(Object(u.jsx)(C,{}),document.getElementById("root"))}],[[39,2,3]]]);
//# sourceMappingURL=main.b82eeba4.chunk.js.map