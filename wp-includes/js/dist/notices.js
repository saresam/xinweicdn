this.wp=this.wp||{};this.wp.notices=function(n){function t(r){if(i[r])return i[r].exports;var u=i[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var i={};return t.m=n,t.c=i,t.d=function(n,i,r){t.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:r})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,i){var r,u;if((i&1&&(n=t(n)),i&8)||i&4&&typeof n=="object"&&n&&n.__esModule)return n;if(r=Object.create(null),t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),i&2&&typeof n!="string")for(u in n)t.d(r,u,function(t){return n[t]}.bind(null,u));return r},t.n=function(n){var i=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(i,"a",i),i},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=455)}({18:function(n,t,i){"use strict";function e(n){if(Array.isArray(n))return Object(r.a)(n)}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function s(n){return e(n)||Object(u.a)(n)||Object(f.a)(n)||o()}var r,u,f;i.d(t,"a",function(){return s});r=i(26);u=i(35);f=i(29)},2:function(n){(function(){n.exports=this.lodash})()},26:function(n,t,i){"use strict";function r(n,t){(t==null||t>n.length)&&(t=n.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=n[i];return r}i.d(t,"a",function(){return r})},29:function(n,t,i){"use strict";function u(n,t){if(n){if(typeof n=="string")return Object(r.a)(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);return(i==="Object"&&n.constructor&&(i=n.constructor.name),i==="Map"||i==="Set")?Array.from(n):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Object(r.a)(n,t):void 0}}i.d(t,"a",function(){return u});var r=i(26)},35:function(n,t,i){"use strict";function r(n){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(n))return Array.from(n)}i.d(t,"a",function(){return r})},4:function(n){(function(){n.exports=this.wp.data})()},455:function(n,t,i){"use strict";function h(n,t){var r=Object.keys(n),i;return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(n),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)),r}function v(n){for(var i,t=1;t<arguments.length;t++)i=arguments[t]!=null?arguments[t]:{},t%2?h(Object(i),!0).forEach(function(t){Object(s.a)(n,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))});return n}function u(){var l=arguments.length>0&&arguments[0]!==undefined?arguments[0]:k,t=arguments.length>1?arguments[1]:undefined,n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},i=n.speak,a=i===void 0?!0:i,r=n.isDismissible,v=r===void 0?!0:r,u=n.context,f=u===void 0?o:u,s=n.id,y=s===void 0?Object(e.uniqueId)(f):s,h=n.actions,p=h===void 0?[]:h,c=n.type,w=c===void 0?"default":c,b=n.__unstableHTML;return t=String(t),{type:"CREATE_NOTICE",context:f,notice:{id:y,status:l,content:t,spokenMessage:a?t:null,__unstableHTML:b,isDismissible:v,actions:p,type:w}}}function d(n,t){return u("success",n,t)}function g(n,t){return u("info",n,t)}function nt(n,t){return u("error",n,t)}function tt(n,t){return u("warning",n,t)}function it(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:o;return{type:"REMOVE_NOTICE",id:n,context:t}}function rt(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:o;return n[t]||c}var r,f,c,ut;i.r(t);r={};i.r(r);i.d(r,"createNotice",function(){return u});i.d(r,"createSuccessNotice",function(){return d});i.d(r,"createInfoNotice",function(){return g});i.d(r,"createErrorNotice",function(){return nt});i.d(r,"createWarningNotice",function(){return tt});i.d(r,"removeNotice",function(){return it});f={};i.r(f);i.d(f,"getNotices",function(){return rt});var l=i(4),a=i(18),e=i(2),s=i(5);var y=function(n){return function(t){return function(){var i=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},f=arguments.length>1?arguments[1]:undefined,r=f[n],u;return r===undefined?i:(u=t(i[r],f),u===i[r])?i:v({},i,Object(s.a)({},r,u))}}},p=y,w=p("context")(function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[],n=arguments.length>1?arguments[1]:undefined;switch(n.type){case"CREATE_NOTICE":return[].concat(Object(a.a)(Object(e.reject)(t,{id:n.notice.id})),[n.notice]);case"REMOVE_NOTICE":return Object(e.reject)(t,{id:n.id})}return t}),b=w,o="global",k="info";c=[];ut=Object(l.registerStore)("core/notices",{reducer:b,actions:r,selectors:f})},5:function(n,t,i){"use strict";function r(n,t,i){return t in n?Object.defineProperty(n,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[t]=i,n}i.d(t,"a",function(){return r})}})