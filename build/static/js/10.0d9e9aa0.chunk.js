(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{83:function(t,e,n){},90:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var c=0,a=function(){};return{s:a,n:function(){return c>=t.length?{done:!0}:{done:!1,value:t[c++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}n.r(e),n.d(e,"default",(function(){return j}));var a=n(33),i=n(34),o=n(37),l=n(36),s=n(0),u=n.n(s),d=(n(83),n(35)),h=n.n(d),b=n(1);h.a.defaults.withCredentials=!0;var j=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={handbasket:[],total:0},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://chickpeaapi.glitch.me/cart").then((function(e){var n,r=e.data,a=0,i=c(r);try{for(i.s();!(n=i.n()).done;){var o=n.value;a+=parseFloat(o.Price.$numberDecimal)}}catch(l){i.e(l)}finally{i.f()}t.setState({handbasket:r,total:a})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"handbasket-page",children:Object(b.jsxs)("div",{id:"handbasket-container",children:[Object(b.jsx)("h1",{children:"Your Handbasket"}),Object(b.jsxs)("table",{id:"handbasket-table",children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{id:"product-column",children:"Product"}),Object(b.jsx)("th",{id:"store-column",children:"Store"}),Object(b.jsx)("th",{id:"price-column",children:"Price"}),Object(b.jsx)("th",{id:"quantity-column",children:"Quantity"}),Object(b.jsx)("th",{id:"subtotal-column",children:"Subtotal"})]}),this.state.handbasket.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[Object(b.jsx)("span",{class:"product-image",children:Object(b.jsx)("img",{src:t.Image_URL,width:"150px",height:"150px"})}),Object(b.jsx)("span",{class:"product-name",children:t.Item_Name})]}),Object(b.jsx)("td",{children:t.Store_Name}),Object(b.jsxs)("td",{children:["$",t.Price.$numberDecimal]}),Object(b.jsx)("td",{children:"1"}),Object(b.jsxs)("td",{children:["$",t.Price.$numberDecimal]})]})})),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{colSpan:4}),Object(b.jsx)("td",{children:Object(b.jsxs)("b",{children:["Total: $",this.state.total]})})]})]})]})})}}]),n}(u.a.Component)}}]);
//# sourceMappingURL=10.0d9e9aa0.chunk.js.map