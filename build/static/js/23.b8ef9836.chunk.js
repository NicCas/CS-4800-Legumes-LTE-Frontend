(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[23],{56:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return b}));var a=c(45),n=c(35),i=c(36),r=c(38),s=c(37),l=c(0),o=c.n(l),d=c(39),h=c.n(d),u=c(1);h.a.defaults.withCredentials=!0;var b=function(t){Object(r.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(n.a)(this,c);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={handbasket:[],total:0,remove:null},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://chickpeaapi.glitch.me/cart").then((function(e){var c=e.data;console.log(c);var n,i=0,r=Object(a.a)(c);try{for(r.s();!(n=r.n()).done;){var s=n.value;i+=(s.Price.$numberDecimal?s.Price.$numberDecimal:s.Price)*s.Quantity}}catch(l){r.e(l)}finally{r.f()}t.setState({handbasket:c,total:i})})).catch((function(t){console.log(t)}))}},{key:"removeItem",value:function(t){var e=this;h()("https://chickpeaapi.glitch.me/cart/remove",{method:"post",data:{Item_ID:t}}).then((function(c){console.log(c.data);var n,i,r=[],s=Object(a.a)(e.state.handbasket);try{for(s.s();!(i=s.n()).done;){var l=i.value;l.Item_ID!==t?r.push(l):n=l}}catch(d){s.e(d)}finally{s.f()}var o=e.state.total-n.Price.$numberDecimal*n.Quantity;e.setState({handbasket:r,total:o})}))}},{key:"render",value:function(){var t=this;return Object(u.jsxs)("div",{class:"handbasket-contents",children:[Object(u.jsxs)("table",{id:"handbasket-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{id:"product-column",children:"Product"}),Object(u.jsx)("th",{id:"store-column",children:"Store"}),Object(u.jsx)("th",{id:"price-column",children:"Price"}),Object(u.jsx)("th",{id:"quantity-column",children:"Quantity"}),Object(u.jsx)("th",{id:"subtotal-column",children:"Subtotal"}),Object(u.jsx)("th",{id:"remove"})]})}),this.state.handbasket.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsxs)("td",{children:[Object(u.jsx)("div",{class:"product-image",children:Object(u.jsx)("img",{src:e.Image_URL,width:"150px",height:"150px"})}),Object(u.jsx)("div",{class:"product-name",children:e.Item_Name})]}),Object(u.jsx)("td",{children:e.Store_Name}),Object(u.jsxs)("td",{children:["$",e.Price.$numberDecimal?e.Price.$numberDecimal:e.Price]}),Object(u.jsx)("td",{children:e.Quantity}),Object(u.jsxs)("td",{children:["$",(e.Price.$numberDecimal?e.Price.$numberDecimal:e.Price)*e.Quantity]}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn",onClick:function(){return t.removeItem(e.Item_ID)},children:"Remove from Handbasket"})})]})}))]}),Object(u.jsx)("div",{id:"total",children:Object(u.jsxs)("b",{children:["Total: $",this.state.total.toFixed(2)]})})]})}}]),c}(o.a.Component)}}]);
//# sourceMappingURL=23.b8ef9836.chunk.js.map