/*! For license information please see 6.3e84ebeb.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{30:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},32:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=a.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var c in r)t.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},33:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},36:function(e,n,t){e.exports=t(39)()},39:function(e,n,t){"use strict";var r=t(40);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},40:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},41:function(e,n,t){"use strict";n.a=t.p+"static/media/logo.091b7e29.png"},65:function(e,n,t){},98:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),i=t(30),c=t(33),s=t(36),p=t.n(s),u=t(32),l=t.n(u);function f(e,n){return void 0===e&&(e=""),void 0===n&&(n=r),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}var d="object"===typeof window&&window.Element||function(){};p.a.oneOfType([p.a.string,p.a.func,function(e,n,t){if(!(e[n]instanceof d))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},p.a.shape({current:p.a.any})]);var b=p.a.oneOfType([p.a.func,p.a.string,p.a.shape({$$typeof:p.a.symbol,render:p.a.func}),p.a.arrayOf(p.a.oneOfType([p.a.func,p.a.string,p.a.shape({$$typeof:p.a.symbol,render:p.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;var g={light:p.a.bool,dark:p.a.bool,full:p.a.bool,fixed:p.a.string,sticky:p.a.string,color:p.a.string,role:p.a.string,tag:b,className:p.a.string,cssModule:p.a.object,expand:p.a.oneOfType([p.a.bool,p.a.string])},y=function(e){var n,t=e.expand,r=e.className,a=e.cssModule,s=e.light,p=e.dark,u=e.fixed,d=e.sticky,b=e.color,g=e.tag,y=Object(c.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),h=f(l()(r,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(t),((n={"navbar-light":s,"navbar-dark":p})["bg-"+b]=b,n["fixed-"+u]=u,n["sticky-"+d]=d,n)),a);return o.a.createElement(g,Object(i.a)({},y,{className:h}))};y.propTypes=g,y.defaultProps={tag:"nav",expand:!1};var h=y,v={tag:b,className:p.a.string,cssModule:p.a.object},j=function(e){var n=e.className,t=e.cssModule,r=e.tag,a=Object(c.a)(e,["className","cssModule","tag"]),s=f(l()(n,"navbar-brand"),t);return o.a.createElement(r,Object(i.a)({},a,{className:s}))};j.propTypes=v,j.defaultProps={tag:"a"};var O=j,m=(t(65),t(41)),x=t(1);n.default=function(){return Object(x.jsx)("div",{id:"footer-page",children:Object(x.jsx)("div",{children:Object(x.jsxs)(h,{style:{backgroundColor:"#f8eac9",color:"#554ca9",textAlign:"center",justifyContent:"center"},children:[Object(x.jsx)(O,{children:Object(x.jsx)("div",{id:"logo-wrapper",children:Object(x.jsx)("img",{src:m.a,id:"logo-img-footer"})})}),Object(x.jsxs)("div",{class:"footer-content",children:["Thank you for shopping with ",Object(x.jsx)("b",{children:"Chickpea"}),"!"]})]})})})}}}]);
//# sourceMappingURL=6.3e84ebeb.chunk.js.map