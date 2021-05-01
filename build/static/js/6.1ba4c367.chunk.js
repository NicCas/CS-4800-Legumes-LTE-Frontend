/*! For license information please see 6.1ba4c367.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var a=r(35),i=r(36),c=r(41),s=r(38),n=r(37),d=r(0),o=r.n(d),l=r(58),u=(r(95),r(53),r(40)),j=r.n(u),b=r(1);var h=function(e){Object(s.a)(r,e);var t=Object(n.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).state={items:[],store:{}},i.componentDidMount=i.componentDidMount.bind(Object(c.a)(i)),i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;j()("https://chickpeaapi.glitch.me/stores/detail",{method:"post",data:{store_id:e.props.match.params.store_id}}).then((function(t){console.log(t);var r=t.data.store,a=t.data.items;e.setState({items:a,store:r})}))}},{key:"addToCart",value:function(e,t){j()("https://chickpeaapi.glitch.me/cart/add",{withCredentials:!0,method:"post",data:{Item_ID:e,Quantity:t}}).then((function(e){console.log(e.data),alert("Added to cart!")}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{id:"store-page",children:[Object(b.jsxs)("div",{class:"store-grid-container",children:[Object(b.jsxs)("div",{id:"top-items",children:[Object(b.jsxs)("div",{id:"store-info",class:"store-grid-item",children:[Object(b.jsx)("div",{id:"backsplash-div"}),Object(b.jsx)("h2",{children:this.state.store.Store_Name}),Object(b.jsxs)("div",{class:"info-block",id:"info-title",children:[Object(b.jsx)("div",{id:"rating-wrapper",children:Object(b.jsxs)("div",{class:"rating",children:[Object(b.jsx)("input",{type:"radio",name:"rating",value:"5",id:"5",disabled:"true"}),Object(b.jsx)("label",{for:"5",children:"\u2606"}),Object(b.jsx)("input",{type:"radio",name:"rating",value:"4",id:"4",checked:"",disabled:"true"}),Object(b.jsx)("label",{for:"4",children:"\u2606"}),Object(b.jsx)("input",{type:"radio",name:"rating",value:"3",id:"3",checked:"checked",disabled:"true"}),Object(b.jsx)("label",{for:"3",children:"\u2606"}),Object(b.jsx)("input",{type:"radio",name:"rating",value:"2",id:"2",checked:"",disabled:"true"}),Object(b.jsx)("label",{for:"2",children:"\u2606"}),Object(b.jsx)("input",{type:"radio",name:"rating",value:"1",id:"1",checked:"",disabled:"true"}),Object(b.jsx)("label",{for:"1",children:"\u2606"})]})}),Object(b.jsx)("div",{id:"store-info-text",children:Object(b.jsxs)("p",{children:[this.state.store.Address_Street,Object(b.jsx)("br",{}),this.state.store.Address_City,Object(b.jsx)("br",{}),this.state.store.Address_State,Object(b.jsx)("br",{}),this.state.store.Address_Zipcode,Object(b.jsx)("br",{}),this.state.store.Phone_Number]})})]})]}),Object(b.jsxs)("div",{class:"info-block store-grid-item",id:"categories",children:[Object(b.jsx)("h3",{children:"Categories"}),Object(b.jsx)("div",{id:"categories-grid",children:Object.keys(this.state.items).map((function(e){return Object(b.jsx)("a",{class:"cat",href:"#".concat(e),children:Object(b.jsx)("p",{children:e})})}))})]})]}),Object(b.jsx)("div",{id:"items-list",children:Object.keys(this.state.items).map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{class:"anchor",id:"".concat(t)}),Object(b.jsx)("div",{class:"items-grid-cont",children:Object(b.jsxs)("div",{class:"inner-grid-cont",children:[Object(b.jsx)("h3",{children:t}),e.state.items[t].map((function(t){return Object(b.jsx)("div",{class:"items-grid-item",children:Object(b.jsxs)(l.a,{style:{width:"10rem"},children:[Object(b.jsx)(l.a.Img,{variant:"top",id:"item-icon",src:t.Image_URL,width:"100px",height:"100px",alt:"Placeholder Item Picture"}),Object(b.jsxs)(l.a.Body,{children:[Object(b.jsx)(l.a.Title,{children:t.Item_Name}),Object(b.jsxs)(l.a.Text,{children:["$",t.Price]}),Object(b.jsx)("button",{class:"btn",onClick:function(){return e.addToCart(t.Item_ID,1)},children:"Add to Cart"})]}),Object(b.jsx)(l.a.Footer,{children:Object(b.jsxs)("small",{className:"text-muted",children:["Stock: ",t.Stock]})})]})})}))]})})]})}))})]}),Object(b.jsx)("div",{id:"extra-space-store"})]})}}]),r}(o.a.Component)},31:function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return a}))},32:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a)){if(a.length){var s=i.apply(null,a);s&&e.push(s)}}else if("object"===c)if(a.toString===Object.prototype.toString)for(var n in a)r.call(a,n)&&a[n]&&e.push(n);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},33:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,"a",(function(){return a}))},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(31);var a=r(0),i=r.n(a),c=i.a.createContext({});c.Consumer,c.Provider;function s(e,t){var r=Object(a.useContext)(c);return e||r[t]||t}},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var a=r(31),i=r(33),c=r(32),s=r.n(c),n=/-(.)/g;var d=r(0),o=r.n(d),l=r(34),u=function(e){return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function j(e,t){var r=void 0===t?{}:t,c=r.displayName,n=void 0===c?u(e):c,d=r.Component,j=r.defaultProps,b=o.a.forwardRef((function(t,r){var c=t.className,n=t.bsPrefix,u=t.as,j=void 0===u?d||"div":u,b=Object(i.a)(t,["className","bsPrefix","as"]),h=Object(l.a)(n,e);return o.a.createElement(j,Object(a.a)({ref:r,className:s()(c,h)},b))}));return b.defaultProps=j,b.displayName=n,b}},53:function(e,t,r){"use strict";t.a=r.p+"static/media/item_placeholder.5f6dc925.png"},58:function(e,t,r){"use strict";var a=r(31),i=r(33),c=r(32),s=r.n(c),n=r(0),d=r.n(n),o=r(34),l=r(44),u=function(e){return d.a.forwardRef((function(t,r){return d.a.createElement("div",Object(a.a)({},t,{ref:r,className:s()(t.className,e)}))}))},j=d.a.createContext(null);j.displayName="CardContext";var b=j,h=d.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,n=e.variant,l=e.as,u=void 0===l?"img":l,j=Object(i.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(r,"card-img");return d.a.createElement(u,Object(a.a)({ref:t,className:s()(n?b+"-"+n:b,c)},j))}));h.displayName="CardImg",h.defaultProps={variant:null};var f=h,p=u("h5"),m=u("h6"),O=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:p}),x=Object(l.a)("card-subtitle",{Component:m}),g=Object(l.a)("card-link",{Component:"a"}),y=Object(l.a)("card-text",{Component:"p"}),k=Object(l.a)("card-header"),C=Object(l.a)("card-footer"),N=Object(l.a)("card-img-overlay"),P=d.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,l=e.bg,u=e.text,j=e.border,h=e.body,f=e.children,p=e.as,m=void 0===p?"div":p,v=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(o.a)(r,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return d.a.createElement(b.Provider,{value:g},d.a.createElement(m,Object(a.a)({ref:t},v,{className:s()(c,x,l&&"bg-"+l,u&&"text-"+u,j&&"border-"+j)}),h?d.a.createElement(O,null,f):f))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=f,P.Title=v,P.Subtitle=x,P.Body=O,P.Link=g,P.Text=y,P.Header=k,P.Footer=C,P.ImgOverlay=N;t.a=P},95:function(e,t,r){}}]);
//# sourceMappingURL=6.1ba4c367.chunk.js.map