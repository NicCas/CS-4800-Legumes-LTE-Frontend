(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{80:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return u}));var i=s(33),c=s(34),a=s(41),n=s(37),r=s(36),l=s(0),j=s.n(l),d=(s(80),s(35)),o=s.n(d),b=s.p+"static/media/backsplash_placeholder.e76c3ed4.png",h=(s.p,s(1)),p=Object(l.lazy)((function(){return s.e(2).then(s.bind(null,89))})),O=Object(l.lazy)((function(){return s.e(1).then(s.bind(null,88))})),u=function(e){Object(n.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={items:{},store:{}},c.componentDidMount=c.componentDidMount.bind(Object(a.a)(c)),c}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this;o()("https://chickpeaapi.glitch.me/stores/detail",{method:"post",data:{store_id:e.props.match.params.store_id}}).then((function(t){var s=t.data.store,i=t.data.items;e.setState({items:i,store:s})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"store-page",children:[Object(h.jsx)(p,{}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:b,id:"backsplash"})}),Object(h.jsx)("div",{class:"container-fluid",children:Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("nav",{class:"col-sm-3 col-4",id:"myScrollspy",children:Object(h.jsxs)("ul",{class:"nav nav-pills flex-column",id:"test-pills",children:[Object(h.jsx)("h1",{}),Object(h.jsx)("h1",{}),Object(h.jsx)("h2",{children:this.state.store.Store_Name}),Object(h.jsxs)("div",{class:"rating",children:[Object(h.jsx)("input",{type:"radio",name:"rating",value:"5",id:"5"}),Object(h.jsx)("label",{for:"5",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"4",id:"4"}),Object(h.jsx)("label",{for:"4",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"3",id:"3"}),Object(h.jsx)("label",{for:"3",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"2",id:"2"}),Object(h.jsx)("label",{for:"2",children:"\u2606"}),Object(h.jsx)("input",{type:"radio",name:"rating",value:"1",id:"1"}),Object(h.jsx)("label",{for:"1",children:"\u2606"})]}),Object(h.jsxs)("p",{children:[this.state.store.Address_Street,Object(h.jsx)("br",{}),this.state.store.Address_City,Object(h.jsx)("br",{}),this.state.store.Address_State,Object(h.jsx)("br",{}),this.state.store.Address_Zipcode,Object(h.jsx)("br",{}),this.state.store.Phone_Number]}),Object(h.jsx)("h3",{children:"Categories"}),Object(h.jsx)("li",{class:"nav-item pill",children:Object(h.jsx)("a",{class:"nav-link active",href:"#pantry",children:"Pantry"})}),Object(h.jsx)("li",{class:"nav-item pill",children:Object(h.jsx)("a",{class:"nav-link",href:"#dairyEggs",children:"Dairy & Eggs"})}),Object(h.jsx)("li",{class:"nav-item pill",children:Object(h.jsx)("a",{class:"nav-link",href:"#meatSeafood",children:"Meat & Seafood"})}),Object(h.jsx)("li",{class:"nav-item pill",children:Object(h.jsx)("a",{class:"nav-link",href:"#produce",children:"Produce"})})]})}),Object(h.jsx)("div",{id:"extra-space"})]})}),Object(h.jsx)(O,{})]})}}]),s}(j.a.Component)}}]);
//# sourceMappingURL=12.03776473.chunk.js.map