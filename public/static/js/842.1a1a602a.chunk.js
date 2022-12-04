"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[842],{99:function(e,t,n){n.r(t);var r=n(165),a=n(861),i=n(885),l=n(791),u=n(880),s=n(810),o=n(999),c=n(434),d=n(895),p=n(615),f=n(508),v=n(94),h=n(500),m=(n(55),n(108)),x=n(184);t.default=function(){var e=(0,l.useContext)(m.V),t=(0,f.x)(),n=t.isLoading,y=t.error,g=t.sendRequest,Z=t.clearError,j=(0,v.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}}),T=(0,i.Z)(j,2),V=T[0],b=T[1],I=(0,u.k6)(),C=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,(a=new FormData).append("title",V.inputs.title.value),a.append("description",V.inputs.description.value),a.append("address",V.inputs.address.value),a.append("image",V.inputs.image.value),t.next=9,g("".concat("https://tag-that-place.herokuapp.com","/api/places"),"POST",a,{Authorization:"Bearer "+e.token});case 9:I.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{error:y,onClear:Z}),(0,x.jsxs)("form",{className:"place-form",onSubmit:C,children:[n&&(0,x.jsx)(d.Z,{asOverlay:!0}),(0,x.jsx)(s.Z,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,h.hg)()],errorText:"Please enter a valid title",onInput:b}),(0,x.jsx)(s.Z,{id:"description",element:"textarea",label:"Description",validators:[(0,h.CP)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:b}),(0,x.jsx)(s.Z,{id:"address",element:"input",label:"Address",validators:[(0,h.hg)()],errorText:"Please enter a valid address.",onInput:b}),(0,x.jsx)(p.Z,{id:"image",onInput:b,errorText:"Please provide an image"}),(0,x.jsx)(o.Z,{type:"submit",disabled:!V.isValid,children:"ADD PLACE"})]})]})}},810:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),a=n(413),i=n(791),l=n(500),u=n(184),s=function(e,t){switch(t.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:t.val,isValid:(0,l.Gu)(t.val,t.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},o=function(e){var t=(0,i.useReducer)(s,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=(0,r.Z)(t,2),a=n[0],l=n[1],o=e.id,c=e.onInput,d=a.value,p=a.isValid;(0,i.useEffect)((function(){c(o,d,p)}),[o,d,p,c]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},h="input"===e.element?(0,u.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:a.value}):(0,u.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:a.value});return(0,u.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,u.jsx)("label",{htmlFor:e.id,children:e.label}),h,!a.isValid&&a.isTouched&&(0,u.jsx)("p",{children:e.errorText})]})}},615:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(885),a=n(791),i=n(999),l=n(184),u=function(e){var t=(0,a.useState)(),n=(0,r.Z)(t,2),u=n[0],s=n[1],o=(0,a.useState)(),c=(0,r.Z)(o,2),d=c[0],p=c[1],f=(0,a.useState)(),v=(0,r.Z)(f,2),h=v[0],m=v[1],x=(0,a.useRef)();(0,a.useEffect)((function(){if(u){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(u)}}),[u]);return(0,l.jsxs)("div",{className:"form-control",children:[(0,l.jsx)("input",{id:e.id,ref:x,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,r=h;t.target.files&&1===t.target.files.length?(n=t.target.files[0],s(n),m(!0),r=!0,console.log(r)):(m(!1),r=!1),e.onInput(e.id,n,r)}}),(0,l.jsxs)("div",{className:"image-upload ".concat(e.center," $$ center"),children:[(0,l.jsxs)("div",{className:"image-upload__preview",children:[d&&(0,l.jsx)("img",{src:d,alt:"Preview"}),!d&&(0,l.jsx)("p",{children:"Please pick an image."})]}),(0,l.jsx)(i.Z,{type:"button",onClick:function(){x.current.click()},children:"PICK IMAGE"})]}),!h&&(0,l.jsx)("p",{children:e.errorText})]})}},94:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(885),a=n(167),i=n(413),l=n(791),u=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var r in e.inputs)e.inputs[r]&&(n=r===t.inputId?n&&t.isValid:n&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},s=function(e,t){var n=(0,l.useReducer)(u,{inputs:e,isValid:t}),a=(0,r.Z)(n,2),i=a[0],s=a[1];return[i,(0,l.useCallback)((function(e,t,n){s({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),(0,l.useCallback)((function(e,t){s({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},500:function(e,t,n){n.d(t,{Ox:function(){return c},CP:function(){return o},hg:function(){return s},Gu:function(){return d}});var r=n(192);var a="REQUIRE",i="MINLENGTH",l="MAXLENGTH",u="EMAIL",s=function(){return{type:a}},o=function(e){return{type:i,val:e}},c=function(){return{type:u}},d=function(e,t){var n,s=!0,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,r.Z)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,l=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw l}}}}(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.type===a&&(s=s&&e.trim().length>0),c.type===i&&(s=s&&e.trim().length>=c.val),c.type===l&&(s=s&&e.trim().length<=c.val),"MIN"===c.type&&(s=s&&+e>=c.val),"MAX"===c.type&&(s=s&&+e<=c.val),c.type===u&&(s=s&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){o.e(d)}finally{o.f()}return s}},55:function(){}}]);
//# sourceMappingURL=842.1a1a602a.chunk.js.map