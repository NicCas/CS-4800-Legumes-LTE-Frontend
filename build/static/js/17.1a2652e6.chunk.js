(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[17],{101:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return h}));var n=c(34),s=c(35),i=c(37),r=c(36),o=c(0),a=c.n(o),l=c(38),d=c.n(l),j=(c(89),c(50),c(13)),u=c(1),h=function(e){Object(i.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={stores:[]},e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://chickpeaapi.glitch.me/stores").then((function(t){var c=t.data;e.setState({stores:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"store-home",children:[Object(u.jsxs)("div",{id:"header",children:[Object(u.jsx)("h1",{children:"Stores"}),"Meet the owners and learn more about our wonderful selection of local stores!"]}),Object(u.jsx)("div",{class:"list-group",children:this.state.stores.map((function(e){return Object(u.jsx)(j.b,{to:"/storepage/"+e.Store_ID,children:Object(u.jsxs)("button",{type:"submit",class:"list-group-item list-group-item-action",name:"store_name",children:[Object(u.jsxs)("div",{class:"row",children:[Object(u.jsx)("div",{class:"column left",children:Object(u.jsxs)("t",{children:[e.Store_Name,Object(u.jsx)("br",{}),Object(u.jsx)("b",{children:"Rating: "})," ",e.Rating]})}),Object(u.jsx)("div",{class:"column middle",children:Object(u.jsx)("img",{id:"owner-icon",src:e.Owner_Picture,alt:"Placeholder Owner Picture"})}),Object(u.jsx)("div",{class:"column right",children:Object(u.jsx)("t",{children:e.Description})})]}),Object(u.jsx)("input",{type:"hidden",name:"store_id"})]})})}))}),Object(u.jsx)("div",{id:"extra-space-store-home"})]})}}]),c}(a.a.Component)},50:function(e,t,c){"use strict";t.a=c.p+"static/media/owner_placeholder.bdf1907b.png"},89:function(e,t,c){}}]);
//# sourceMappingURL=17.1a2652e6.chunk.js.map