/*! For license information please see 7.e61386e9.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[7],{119:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return y}));var i=s(35),r=s(36),n=s(38),c=s(37),a=s(0),l=s.n(a),d=s(40),o=s.n(d),h=(s(98),s(52)),j=s(31),u=s(33),b=s(32),p=s.n(b),O=s(34);function x(e,t,s){var i=(e-t)/(s-t)*100;return Math.round(1e3*i)/1e3}function f(e,t){var s,i=e.min,r=e.now,n=e.max,c=e.label,a=e.srOnly,d=e.striped,o=e.animated,h=e.className,b=e.style,O=e.variant,f=e.bsPrefix,m=Object(u.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return l.a.createElement("div",Object(j.a)({ref:t},m,{role:"progressbar",className:p()(h,f+"-bar",(s={},s["bg-"+O]=O,s[f+"-bar-animated"]=o,s[f+"-bar-striped"]=o||d,s)),style:Object(j.a)({width:x(r,i,n)+"%"},b),"aria-valuenow":r,"aria-valuemin":i,"aria-valuemax":n}),a?l.a.createElement("span",{className:"sr-only"},c):c)}var m=l.a.forwardRef((function(e,t){var s=e.isChild,i=Object(u.a)(e,["isChild"]);if(i.bsPrefix=Object(O.a)(i.bsPrefix,"progress"),s)return f(i,t);var r=i.min,n=i.now,c=i.max,d=i.label,o=i.srOnly,h=i.striped,b=i.animated,x=i.bsPrefix,m=i.variant,v=i.className,g=i.children,y=Object(u.a)(i,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return l.a.createElement("div",Object(j.a)({ref:t},y,{className:p()(v,x)}),g?function(e,t){var s=0;return l.a.Children.map(e,(function(e){return l.a.isValidElement(e)?t(e,s++):e}))}(g,(function(e){return Object(a.cloneElement)(e,{isChild:!0})})):f({min:r,now:n,max:c,label:d,srOnly:o,striped:h,animated:b,bsPrefix:x,variant:m},t))}));m.displayName="ProgressBar",m.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var v=m,g=s(1);o.a.defaults.withCredentials=!0;var y=function(e){Object(n.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(i.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={customer:{},addresses:[],billings:[],shippings:[],deliveries:[],delivs:[],transporting:[],transits:[],deliv_items:[],favs:[],handlers:[],handler:{},items:[],store:[]},e}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;o.a.get("https://chickpeaapi.glitch.me/user/account-details",{withCredentials:!0}).then((function(t){var s=t.data,i=(t.data.favorites.Favorite_Items,[]),r=[],n=[],c=[],a=[];console.log(s),e.setState({customer:s.customer_info});for(var l=0;l<s.addresses.length;l++)1==s.addresses[l].Is_Billing&&i.push(s.addresses[l]),1==s.addresses[l].Is_Shipping&&r.push(s.addresses[l]);e.setState({billings:i[0]}),e.setState({shippings:r[0]});for(l=0;l<s.deliveries.length;l++)1==s.deliveries[l].Delivered?n.push(s.deliveries[l]):a.push(s.deliveries[l]);a.sort((function(e,t){return t.Date>e.Date?1:-1})),e.setState({delivs:n,transporting:a[0]});for(l=0;l<s.favorites.length;l++)c.push(s.favorites[l]);e.setState({favs:c})})).catch((function(e){console.log(e)}))}},{key:"handleLogout",value:function(){console.log("I am logging out"),o.a.get("https://chickpeaapi.glitch.me/login/logout",{withCredentials:!0})}},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{id:"account-page",children:[Object(g.jsxs)("div",{id:"account-header",class:"account-wrapper",children:[Object(g.jsxs)("div",{id:"name-image",children:[Object(g.jsx)("img",{src:h.a,class:"account-image"}),Object(g.jsxs)("h3",{class:"account-title",children:["Hello, ",this.state.customer.Username]})]}),Object(g.jsx)("div",{id:"logout-button",children:Object(g.jsx)("a",{href:"/home",children:Object(g.jsx)("button",{href:"/home",class:"purple-button btn",onClick:function(){return e.handleLogout()},children:"Logout"})})})]}),Object(g.jsxs)("div",{class:"account-grid-container",children:[Object(g.jsxs)("div",{id:"left-column",children:[Object(g.jsxs)("div",{id:"profile-info",class:"account-grid-item",children:[Object(g.jsx)("h3",{children:"Account Information"}),Object(g.jsxs)("div",{class:"info-block",id:"info-title",children:[Object(g.jsx)("p",{children:"Username: "}),Object(g.jsx)("p",{children:"Email "}),Object(g.jsx)("p",{children:"Billing Address "}),Object(g.jsx)("p",{children:"Shipping Address "})]}),Object(g.jsxs)("div",{class:"info-block",children:[Object(g.jsxs)("p",{children:[" ",this.state.customer.Username," "]}),Object(g.jsxs)("p",{children:[" ",this.state.customer.Email," "]}),Object(g.jsxs)("p",{children:[this.state.billings.Street,", ",this.state.billings.City,", ",this.state.billings.State,", ",this.state.billings.Zip_Code," "]}),Object(g.jsxs)("p",{children:[this.state.shippings.Street,", ",this.state.shippings.City,", ",this.state.shippings.State,", ",this.state.shippings.Zip_Code]})]})]}),Object(g.jsxs)("div",{id:"favorites",class:"account-grid-item",children:[Object(g.jsx)("h3",{children:"Favorites"}),Object(g.jsxs)("table",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{class:"item-column",children:"Item"}),Object(g.jsx)("th",{class:"store-column",children:"Store"}),Object(g.jsx)("th",{class:"price-column",children:"Price"})]}),Object(g.jsxs)("tr",{children:[Object(g.jsxs)("td",{children:[" ",this.state.favs[0].Item_ID," "]}),Object(g.jsx)("td",{children:"Store"}),Object(g.jsx)("td",{children:"Price"})]})]})]})]}),Object(g.jsxs)("div",{id:"recent-order",class:"account-grid-item",children:[Object(g.jsx)("h3",{children:"Current Order"}),Object(g.jsxs)("div",{id:"order-info",children:[Object(g.jsxs)("p",{children:["Order Number: #",this.state.transporting.Delivery_ID]}),Object(g.jsx)(v,{animated:!0,variant:"warning",now:20}),Object(g.jsx)("p",{children:"Order Staus: Status"}),Object(g.jsxs)("p",{children:["Order Time: ",this.state.transporting.Date]}),Object(g.jsxs)("p",{children:["Handler: ",this.state.handler.Handler_Name," "]}),Object(g.jsxs)("p",{children:["Delivery Address: ",this.state.shippings.Street,", ",this.state.shippings.City,", ",this.state.shippings.State,", ",this.state.shippings.Zip_Code]})]}),Object(g.jsxs)("table",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{class:"product-column",children:"Product"}),Object(g.jsx)("th",{class:"store-column",children:"Store"}),Object(g.jsx)("th",{class:"price-column",children:"Price"}),Object(g.jsx)("th",{class:"quantity-column",children:"Quantity"}),Object(g.jsx)("th",{class:"subtotal-column",children:"Subtotal"})]}),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:"Product"}),Object(g.jsx)("td",{children:"Store"}),Object(g.jsx)("td",{children:"Price"}),Object(g.jsx)("td",{children:"Quantity"}),Object(g.jsx)("td",{children:"Subtotal"})]})]}),Object(g.jsxs)("div",{id:"price-info",children:[Object(g.jsxs)("p",{children:["Tax: $",(.0825*this.state.transporting.Total_Cost).toFixed(2)," "]}),Object(g.jsx)("p",{children:"Delivery Fee: $2.00 "}),Object(g.jsx)("p",{children:"Tip: $2.50 "}),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:["Total Price: $",(this.state.transporting.Total_Cost+.0825*this.state.transporting.Total_Cost+4.5).toFixed(2)," "]})]})]})]}),Object(g.jsxs)("div",{id:"order-history",class:"account-grid-item",children:[Object(g.jsx)("h3",{children:"Order History"}),Object(g.jsxs)("table",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Order Number"}),Object(g.jsx)("th",{children:"Date"}),Object(g.jsx)("th",{children:"Total Cost"}),Object(g.jsx)("th",{children:"Delivery Address"}),Object(g.jsx)("th",{children:"Items"})]}),this.state.delivs.map((function(t){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.Delivery_ID}),Object(g.jsxs)("td",{children:[" ",e.state.delivs.Date," "]}),Object(g.jsx)("td",{children:e.state.delivs.Total_Cost}),Object(g.jsxs)("td",{children:[e.state.shippings.Street,",",e.state.shippings.City,",",e.state.shippings.State,",",e.state.shippings.Zip_Code]}),Object(g.jsx)("td",{children:"this.state.deliv_items"})]})}))]})]}),Object(g.jsx)("div",{id:"extra-space-account"})]})}}]),s}(l.a.Component)},31:function(e,t,s){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}s.d(t,"a",(function(){return i}))},32:function(e,t,s){var i;!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var n=typeof i;if("string"===n||"number"===n)e.push(i);else if(Array.isArray(i)){if(i.length){var c=r.apply(null,i);c&&e.push(c)}}else if("object"===n)if(i.toString===Object.prototype.toString)for(var a in i)s.call(i,a)&&i[a]&&e.push(a);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},33:function(e,t,s){"use strict";function i(e,t){if(null==e)return{};var s,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)s=n[i],t.indexOf(s)>=0||(r[s]=e[s]);return r}s.d(t,"a",(function(){return i}))},34:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));s(31);var i=s(0),r=s.n(i),n=r.a.createContext({});n.Consumer,n.Provider;function c(e,t){var s=Object(i.useContext)(n);return e||s[t]||t}},52:function(e,t,s){"use strict";t.a=s.p+"static/media/owner_placeholder.bdf1907b.png"},98:function(e,t,s){}}]);
//# sourceMappingURL=7.e61386e9.chunk.js.map