/*! For license information please see 4.9b33edb3.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{42:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(43);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,c=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new _(n||[]);return c(a,"_invoke",{value:w(t,r,i)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var d={};function p(){}function b(){}function j(){}var v={};l(v,i,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(N([])));y&&y!==e&&r.call(y,i)&&(v=y);var O=j.prototype=p.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(c,a,i,s){var u=h(t[c],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==Object(n.a)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,s)}))}s(u.arg)}var a;c(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function w(t,e,r){var n="suspendedStart";return function(o,c){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw c;return C()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=E(a,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var c=o.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return b.prototype=j,c(O,"constructor",{value:j,configurable:!0}),c(j,"constructor",{value:b,configurable:!0}),b.displayName=l(j,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},g(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new x(f(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(O),l(O,u,"Generator"),l(O,i,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return n("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return n(c.catchLoc,!0);if(this.prev<c.finallyLoc)return n(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return n(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return n(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}},43:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},44:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,s,"next",t)}function s(t){n(a,o,c,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},45:function(t,e,r){"use strict";r(0);var n=r(9),o=(r(54),r(1));e.a=function(t){return t.href?Object(o.jsx)("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href,children:t.children}):t.to?Object(o.jsx)(n.b,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),children:t.children}):Object(o.jsx)("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled,children:t.children})}},46:function(t,e,r){"use strict";r(0),r(50);var n=r(1);e.a=function(t){return Object(n.jsx)("div",{className:"card ".concat(t.className),style:t.style,children:t.children})}},47:function(t,e,r){"use strict";r(0);var n=r(51),o=r(45),c=r(1);e.a=function(t){return Object(c.jsx)(n.a,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:Object(c.jsx)(o.a,{onClick:t.onClear,children:"Okay"}),children:Object(c.jsx)("p",{children:t.error})})}},48:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(52);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(42),o=r(44),c=r(10),a=r(0),i=function(){var t=Object(a.useState)(!1),e=Object(c.a)(t,2),r=e[0],i=e[1],s=Object(a.useState)(),u=Object(c.a)(s,2),l=u[0],f=u[1],h=Object(a.useRef)([]),d=Object(a.useCallback)(function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var r,o,c,a,s,u,l=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",o=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{},i(!0),a=new AbortController,h.current.push(a),t.prev=6,t.next=9,fetch(e,{method:r,body:o,headers:c,signal:a.signal});case 9:return s=t.sent,t.next=12,s.json();case 12:if(u=t.sent,h.current=h.current.filter((function(t){return t!==a})),s.ok){t.next=16;break}throw new Error(u.message);case 16:return i(!1),t.abrupt("return",u);case 20:throw t.prev=20,t.t0=t.catch(6),f(t.t0.message),i(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){h.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,error:l,sendRequest:d,clearError:function(){f(null)}}}},50:function(t,e,r){},51:function(t,e,r){"use strict";var n=r(48),o=r(0),c=r.n(o),a=r(7),i=r.n(a),s=r(15),u=r(41),l=(r(53),r(1)),f=function(t){var e=Object(l.jsx)("div",{className:"modal ".concat(t.className),style:t.style,children:Object(l.jsxs)("header",{className:"modal__header ".concat(t.headerClass),children:[Object(l.jsx)("h2",{children:t.header}),Object(l.jsxs)("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()},children:[Object(l.jsx)("div",{className:"modal__content ".concat(t.contentClass),children:t.children}),Object(l.jsx)("footer",{className:"modal__footer ".concat(t.footerClass),children:t.footer})]})]})});return i.a.createPortal(e,document.getElementById("modal-hook"))};e.a=function(t){return Object(l.jsxs)(c.a.Fragment,{children:[t.show&&Object(l.jsx)(s.a,{onClick:t.onClick}),Object(l.jsx)(u.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,className:"modal",children:Object(l.jsx)(f,Object(n.a)({},t))})]})}},52:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(43);function o(t){var e=function(t,e){if("object"!==Object(n.a)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==Object(n.a)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===Object(n.a)(e)?e:String(e)}function c(t,e,r){return(e=o(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},53:function(t,e,r){},54:function(t,e,r){},62:function(t,e,r){},63:function(t,e,r){},64:function(t,e,r){},69:function(t,e,r){"use strict";r.r(e);var n=r(42),o=r(44),c=r(10),a=r(0),i=r.n(a),s=r(2),u=r(47),l=r(14),f=(r(62),r(46)),h=(r(63),r(45)),d=r(51),p=(r(64),r(1)),b=function(t){var e=Object(a.useRef)(),r=t.center,n=t.zoom;return Object(a.useEffect)((function(){var t=new window.google.maps.Map(e.current,{center:r,zoom:n});new window.google.maps.Marker({position:r,map:t})}),[r,n]),Object(p.jsx)("div",{ref:e,className:"map ".concat(t.className),style:t.style})},j=r(12),v=r(49),m=function(t){var e=Object(v.a)(),r=e.isLoading,s=e.error,m=e.sendRequest,y=e.clearError,O=Object(a.useContext)(j.a),g=Object(a.useState)(!1),x=Object(c.a)(g,2),w=x[0],E=x[1],k=Object(a.useState)(!1),L=Object(c.a)(k,2),_=L[0],N=L[1],C=function(){E(!1)},P=function(){N(!1)},S=function(){var e=Object(o.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!1),console.log(t.id),e.prev=2,e.next=5,m("".concat("https://long-teal-cockatoo-hat.cyclic.app/","/api/places/").concat(t.id),"DELETE",null,{Authorization:"Bearer "+O.token});case 5:t.onDelete(t.id),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(u.a,{error:s,onClear:y}),Object(p.jsx)(d.a,{show:w,onCancel:C,header:t.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(p.jsx)(h.a,{onClick:C,children:"X"}),children:Object(p.jsx)("div",{className:"map-container",children:Object(p.jsx)(b,{center:t.coordinates,zoom:16})})}),Object(p.jsx)(d.a,{show:_,onCancel:P,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(h.a,{inverse:!0,onClick:P,children:"Cancel"}),Object(p.jsx)(h.a,{danger:!0,onClick:S,children:"Delete"})]}),children:Object(p.jsx)("p",{children:"Proceeding will permanently delete place ! This can't be undone !"})}),Object(p.jsx)("li",{className:"place-item",children:Object(p.jsxs)(f.a,{className:"place-item__content",children:[r&&Object(p.jsx)(l.a,{asOverlay:!0}),Object(p.jsxs)("div",{className:"place-item__info",children:[Object(p.jsx)("h2",{children:t.title}),Object(p.jsx)("h3",{children:t.address}),Object(p.jsx)("p",{children:t.description})]}),Object(p.jsxs)("div",{className:"place-item__actions",children:[Object(p.jsx)(h.a,{inverse:!0,onClick:function(){E(!0)},children:"VIEW ON MAP"}),O.userId===t.creatorId&&Object(p.jsx)(h.a,{to:"/places/".concat(t.id),children:"EDIT"}),O.userId===t.creatorId&&Object(p.jsx)(h.a,{danger:!0,onClick:function(){N(!0)},children:"DELETE"})]})]})})]})},y=function(t){return 0===t.items.length?Object(p.jsx)("div",{className:"place-list center",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)("h2",{children:"No places found. Maybe create one?"}),Object(p.jsx)(h.a,{to:"/places/new",children:"Share Places"})]})}):Object(p.jsx)("ul",{className:"place-list",children:t.items.map((function(e){return Object(p.jsx)(m,{id:e.id,title:e.title,description:e.description,address:e.address,creatorId:e.creator,coordinates:e.location,onDelete:t.onDeletePlace},e.id)}))})};e.default=function(){var t=Object(a.useState)(),e=Object(c.a)(t,2),r=e[0],i=e[1],f=Object(v.a)(),h=f.isLoading,d=f.error,b=f.sendRequest,j=f.clearError,m=Object(s.h)().userId;Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var e;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b("".concat("https://long-teal-cockatoo-hat.cyclic.app/","/api/places/users/").concat(m));case 3:e=t.sent,i(e.places),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[b,m]);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{error:d,onClear:j}),h&&Object(p.jsx)("div",{className:"center",children:Object(p.jsx)(l.a,{})}),!h&&r&&Object(p.jsx)(y,{items:r,onDeletePlace:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})}}}]);
//# sourceMappingURL=4.9b33edb3.chunk.js.map