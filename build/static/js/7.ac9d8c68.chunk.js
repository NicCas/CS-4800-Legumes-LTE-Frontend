/*! For license information please see 7.ac9d8c68.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{107:function(e,t,r){"use strict";r.r(t);var c=r(0),s=r.n(c),i=r(31),a=r(33),n=r(32),d=r.n(n),l=r(34),o=r(52),j=function(e){return s.a.forwardRef((function(t,r){return s.a.createElement("div",Object(i.a)({},t,{ref:r,className:d()(t.className,e)}))}))},b=s.a.createContext(null);b.displayName="CardContext";var u=b,O=s.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,n=e.variant,o=e.as,j=void 0===o?"img":o,b=Object(a.a)(e,["bsPrefix","className","variant","as"]),u=Object(l.a)(r,"card-img");return s.a.createElement(j,Object(i.a)({ref:t,className:d()(n?u+"-"+n:u,c)},b))}));O.displayName="CardImg",O.defaultProps={variant:null};var x=O,h=j("h5"),f=j("h6"),p=Object(o.a)("card-body"),m=Object(o.a)("card-title",{Component:h}),v=Object(o.a)("card-subtitle",{Component:f}),g=Object(o.a)("card-link",{Component:"a"}),y=Object(o.a)("card-text",{Component:"p"}),C=Object(o.a)("card-header"),N=Object(o.a)("card-footer"),P=Object(o.a)("card-img-overlay"),k=s.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,o=e.bg,j=e.text,b=e.border,O=e.body,x=e.children,h=e.as,f=void 0===h?"div":h,m=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(l.a)(r,"card"),g=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return s.a.createElement(u.Provider,{value:g},s.a.createElement(f,Object(i.a)({ref:t},m,{className:d()(n,v,o&&"bg-"+o,j&&"text-"+j,b&&"border-"+b)}),O?s.a.createElement(p,null,x):x))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=x,k.Title=m,k.Subtitle=v,k.Body=p,k.Link=g,k.Text=y,k.Header=C,k.Footer=N,k.ImgOverlay=P;var w=k,S=(r(90),r.p+"static/media/backsplash_placeholder.e76c3ed4.png"),_=r.p+"static/media/item_placeholder.5f6dc925.png",I=r(1);function A(){return Object(I.jsxs)(w,{style:{width:"10rem"},children:[Object(I.jsx)(w.Img,{variant:"top",id:"item-icon",src:_,alt:"Placeholder Item Picture"}),Object(I.jsxs)(w.Body,{children:[Object(I.jsx)(w.Title,{children:"Item Name"}),Object(I.jsx)(w.Text,{children:"$ Price"}),Object(I.jsx)("button",{class:"btn",children:"Buy"})]}),Object(I.jsx)(w.Footer,{children:Object(I.jsx)("small",{className:"text-muted",children:"Stock #"})})]})}t.default=function(){return Object(I.jsxs)("div",{id:"store-page",children:[Object(I.jsx)("div",{id:"store-header",class:"store-wrapper",children:Object(I.jsx)("h3",{class:"store-title",children:"Shop Local!"})}),Object(I.jsxs)("div",{class:"store-grid-container",children:[Object(I.jsx)("div",{id:"left-column",children:Object(I.jsxs)("div",{id:"store-info",class:"store-grid-item",children:[Object(I.jsx)("img",{src:S,id:"backsplash"}),Object(I.jsxs)("div",{class:"info-block",id:"info-title",children:[Object(I.jsx)("h2",{children:"state.store.Store_Name"}),Object(I.jsxs)("div",{class:"rating",children:[Object(I.jsx)("input",{type:"radio",name:"rating",value:"5",id:"5",disabled:"true"}),Object(I.jsx)("label",{for:"5",children:"\u2606"}),Object(I.jsx)("input",{type:"radio",name:"rating",value:"4",id:"4",checked:"",disabled:"true"}),Object(I.jsx)("label",{for:"4",children:"\u2606"}),Object(I.jsx)("input",{type:"radio",name:"rating",value:"3",id:"3",checked:"checked",disabled:"true"}),Object(I.jsx)("label",{for:"3",children:"\u2606"}),Object(I.jsx)("input",{type:"radio",name:"rating",value:"2",id:"2",checked:"",disabled:"true"}),Object(I.jsx)("label",{for:"2",children:"\u2606"}),Object(I.jsx)("input",{type:"radio",name:"rating",value:"1",id:"1",checked:"",disabled:"true"}),Object(I.jsx)("label",{for:"1",children:"\u2606"})]}),Object(I.jsx)("div",{id:"store-info-text",children:Object(I.jsxs)("p",{children:["state.store.Address_Street",Object(I.jsx)("br",{}),"state.store.Address_City",Object(I.jsx)("br",{}),"state.store.Address_State",Object(I.jsx)("br",{}),"state.store.Address_Zipcode",Object(I.jsx)("br",{}),"state.store.Phone_Number"]})})]}),Object(I.jsxs)("div",{class:"info-block",children:[Object(I.jsx)("h3",{children:"Item Categories"}),Object(I.jsx)("p",{children:"Category"}),Object(I.jsx)("p",{children:"Category"}),Object(I.jsx)("p",{children:"Category"}),Object(I.jsx)("p",{children:"Category"}),Object(I.jsx)("p",{children:"Category"})]})]})}),Object(I.jsxs)("div",{id:"items-list",children:[Object(I.jsxs)("div",{class:"items-grid-cont",children:[Object(I.jsx)("h3",{children:"Category"}),Object(I.jsxs)("div",{class:"inner-grid-cont",children:[Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})}),Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})}),Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})})]})]}),Object(I.jsxs)("div",{class:"items-grid-cont",children:[Object(I.jsx)("h3",{children:"Category"}),Object(I.jsxs)("div",{class:"inner-grid-cont",children:[Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})}),Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})}),Object(I.jsx)("div",{class:"items-grid-item",children:Object(I.jsx)(A,{})})]})]})]})]}),Object(I.jsx)("div",{id:"extra-space-store"})]})}},31:function(e,t,r){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return c}))},32:function(e,t,r){var c;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var i=typeof c;if("string"===i||"number"===i)e.push(c);else if(Array.isArray(c)){if(c.length){var a=s.apply(null,c);a&&e.push(a)}}else if("object"===i)if(c.toString===Object.prototype.toString)for(var n in c)r.call(c,n)&&c[n]&&e.push(n);else e.push(c.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(c=function(){return s}.apply(t,[]))||(e.exports=c)}()},33:function(e,t,r){"use strict";function c(e,t){if(null==e)return{};var r,c,s={},i=Object.keys(e);for(c=0;c<i.length;c++)r=i[c],t.indexOf(r)>=0||(s[r]=e[r]);return s}r.d(t,"a",(function(){return c}))},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(31);var c=r(0),s=r.n(c),i=s.a.createContext({});i.Consumer,i.Provider;function a(e,t){var r=Object(c.useContext)(i);return e||r[t]||t}},52:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var c=r(31),s=r(33),i=r(32),a=r.n(i),n=/-(.)/g;var d=r(0),l=r.n(d),o=r(34),j=function(e){return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e,t){var r=void 0===t?{}:t,i=r.displayName,n=void 0===i?j(e):i,d=r.Component,b=r.defaultProps,u=l.a.forwardRef((function(t,r){var i=t.className,n=t.bsPrefix,j=t.as,b=void 0===j?d||"div":j,u=Object(s.a)(t,["className","bsPrefix","as"]),O=Object(o.a)(n,e);return l.a.createElement(b,Object(c.a)({ref:r,className:a()(i,O)},u))}));return u.defaultProps=b,u.displayName=n,u}},90:function(e,t,r){}}]);
//# sourceMappingURL=7.ac9d8c68.chunk.js.map