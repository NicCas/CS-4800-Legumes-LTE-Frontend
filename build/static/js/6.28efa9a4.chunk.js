/*! For license information please see 6.28efa9a4.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var s=r(36),c=r(37),a=r(43),i=r(39),n=r(38),d=r(0),o=r.n(d),l=r(57),j=(r(94),r(53)),b=r(40),u=r.n(b),h=r(1);function O(){return Object(h.jsxs)(l.a,{style:{width:"10rem"},children:[Object(h.jsx)(l.a.Img,{variant:"top",id:"item-icon",src:j.a,alt:"Placeholder Item Picture"}),Object(h.jsxs)(l.a.Body,{children:[Object(h.jsx)(l.a.Title,{children:"Item Name"}),Object(h.jsx)(l.a.Text,{children:"$ Price"}),Object(h.jsx)("button",{class:"btn",children:"Buy"})]}),Object(h.jsx)(l.a.Footer,{children:Object(h.jsx)("small",{className:"text-muted",children:"Stock #"})})]})}var x=function(e){Object(i.a)(r,e);var t=Object(n.a)(r);function r(e){var c;return Object(s.a)(this,r),(c=t.call(this,e)).state={items:[],store:{}},c.componentDidMount=c.componentDidMount.bind(Object(a.a)(c)),c}return Object(c.a)(r,[{key:"componentDidMount",value:function(){var e=this;u()("https://chickpeaapi.glitch.me/stores/detail",{method:"post",data:{store_id:e.props.match.params.store_id}}).then((function(t){console.log(t);var r=t.data.store,s=t.data.items;e.setState({items:s,store:r})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"store-page",children:[Object(h.jsxs)("div",{class:"store-grid-container",children:[Object(h.jsxs)("div",{id:"top-items",children:[Object(h.jsxs)("div",{id:"store-info",class:"store-grid-item",children:[Object(h.jsx)("div",{id:"backsplash-div"}),Object(h.jsx)("h2",{children:this.state.store.Store_Name}),Object(h.jsxs)("div",{class:"info-block",id:"info-title",children:[Object(h.jsx)("div",{id:"rating-wrapper",children:Object(h.jsxs)("div",{class:"rating",children:[Object(h.jsx)("input",{type:"radio",name:"rating",value:"5",id:"5",disabled:"true"}),Object(h.jsx)("label",{for:"5",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"4",id:"4",checked:"",disabled:"true"}),Object(h.jsx)("label",{for:"4",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"3",id:"3",checked:"checked",disabled:"true"}),Object(h.jsx)("label",{for:"3",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"2",id:"2",checked:"",disabled:"true"}),Object(h.jsx)("label",{for:"2",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"1",id:"1",checked:"",disabled:"true"}),Object(h.jsx)("label",{for:"1",children:"\u2606"})]})}),Object(h.jsx)("div",{id:"store-info-text",children:Object(h.jsxs)("p",{children:[this.state.store.Address_Street,Object(h.jsx)("br",{}),this.state.store.Address_City,Object(h.jsx)("br",{}),this.state.store.Address_State,Object(h.jsx)("br",{}),this.state.store.Address_Zipcode,Object(h.jsx)("br",{}),this.state.store.Phone_Number]})})]})]}),Object(h.jsxs)("div",{class:"info-block store-grid-item",id:"categories",children:[Object(h.jsx)("h3",{children:"Categories"}),Object(h.jsxs)("div",{id:"categories-grid",children:[Object(h.jsx)("a",{class:"cat",href:"#cat1",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#cat2",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"}),Object(h.jsx)("a",{class:"cat",href:"#",children:"Category"})]})]})]}),Object(h.jsxs)("div",{id:"items-list",children:[Object(h.jsx)("a",{class:"anchor",id:"cat1"})," ",Object(h.jsxs)("div",{class:"items-grid-cont",children:[Object.keys(this.state.items).map((function(e){return Object(h.jsx)("p",{children:e})})),Object(h.jsx)("h3",{children:"Category"}),Object(h.jsxs)("div",{class:"inner-grid-cont",children:[Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})})]})]}),Object(h.jsx)("a",{class:"anchor",id:"cat2"}),Object(h.jsxs)("div",{class:"items-grid-cont",id:"cat2",children:[Object(h.jsx)("h3",{children:"Category"}),Object(h.jsxs)("div",{class:"inner-grid-cont",children:[Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})}),Object(h.jsx)("div",{class:"items-grid-item",children:Object(h.jsx)(O,{})})]})]})]})]}),Object(h.jsx)("div",{id:"extra-space-store"})]})}}]),r}(o.a.Component)},31:function(e,t,r){"use strict";function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return s}))},32:function(e,t,r){var s;!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var i=c.apply(null,s);i&&e.push(i)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var n in s)r.call(s,n)&&s[n]&&e.push(n);else e.push(s.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(s=function(){return c}.apply(t,[]))||(e.exports=s)}()},33:function(e,t,r){"use strict";function s(e,t){if(null==e)return{};var r,s,c={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return s}))},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(31);var s=r(0),c=r.n(s),a=c.a.createContext({});a.Consumer,a.Provider;function i(e,t){var r=Object(s.useContext)(a);return e||r[t]||t}},44:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var s=r(31),c=r(33),a=r(32),i=r.n(a),n=/-(.)/g;var d=r(0),o=r.n(d),l=r(34),j=function(e){return e[0].toUpperCase()+(t=e,t.replace(n,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function b(e,t){var r=void 0===t?{}:t,a=r.displayName,n=void 0===a?j(e):a,d=r.Component,b=r.defaultProps,u=o.a.forwardRef((function(t,r){var a=t.className,n=t.bsPrefix,j=t.as,b=void 0===j?d||"div":j,u=Object(c.a)(t,["className","bsPrefix","as"]),h=Object(l.a)(n,e);return o.a.createElement(b,Object(s.a)({ref:r,className:i()(a,h)},u))}));return u.defaultProps=b,u.displayName=n,u}},53:function(e,t,r){"use strict";t.a=r.p+"static/media/item_placeholder.5f6dc925.png"},57:function(e,t,r){"use strict";var s=r(31),c=r(33),a=r(32),i=r.n(a),n=r(0),d=r.n(n),o=r(34),l=r(44),j=function(e){return d.a.forwardRef((function(t,r){return d.a.createElement("div",Object(s.a)({},t,{ref:r,className:i()(t.className,e)}))}))},b=d.a.createContext(null);b.displayName="CardContext";var u=b,h=d.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,n=e.variant,l=e.as,j=void 0===l?"img":l,b=Object(c.a)(e,["bsPrefix","className","variant","as"]),u=Object(o.a)(r,"card-img");return d.a.createElement(j,Object(s.a)({ref:t,className:i()(n?u+"-"+n:u,a)},b))}));h.displayName="CardImg",h.defaultProps={variant:null};var O=h,x=j("h5"),f=j("h6"),m=Object(l.a)("card-body"),v=Object(l.a)("card-title",{Component:x}),p=Object(l.a)("card-subtitle",{Component:f}),g=Object(l.a)("card-link",{Component:"a"}),y=Object(l.a)("card-text",{Component:"p"}),C=Object(l.a)("card-header"),N=Object(l.a)("card-footer"),P=Object(l.a)("card-img-overlay"),k=d.a.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,l=e.bg,j=e.text,b=e.border,h=e.body,O=e.children,x=e.as,f=void 0===x?"div":x,v=Object(c.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(o.a)(r,"card"),g=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return d.a.createElement(u.Provider,{value:g},d.a.createElement(f,Object(s.a)({ref:t},v,{className:i()(a,p,l&&"bg-"+l,j&&"text-"+j,b&&"border-"+b)}),h?d.a.createElement(m,null,O):O))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=O,k.Title=v,k.Subtitle=p,k.Body=m,k.Link=g,k.Text=y,k.Header=C,k.Footer=N,k.ImgOverlay=P;t.a=k},94:function(e,t,r){}}]);
//# sourceMappingURL=6.28efa9a4.chunk.js.map