(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[13],{119:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return y}));var n=i(45);var a=i(36),r=i(37),s=i(43),l=i(39),h=i(38),p=i(0),o=i.n(p),u=(i(99),i(40)),_=i.n(u),c=i(1),g=Object(p.lazy)((function(){return Promise.all([i.e(1),i.e(18)]).then(i.bind(null,111))})),S=Object(p.lazy)((function(){return Promise.all([i.e(1),i.e(19)]).then(i.bind(null,112))})),d=Object(p.lazy)((function(){return i.e(20).then(i.bind(null,113))}));_.a.defaults.withCredentials=!0;var y=function(t){Object(l.a)(i,t);var e=Object(h.a)(i);function i(t){var n;return Object(a.a)(this,i),(n=e.call(this,t)).handleSubmit=function(t){t.preventDefault();var e=n.state;e.Shipping_Street,e.Shipping_City,e.Shipping_State,e.Shipping_ZIP,e.Handler,e.Delivery_Instructions,e.Card_Name,e.Card_Number,e.CVV,e.Exp_Date,e.Billing_Street,e.Billing_City,e.Billing_State,e.Billing_ZIP},n.state={step:1,Shipping_Street:"",Shipping_City:"",Shipping_State:"",Shipping_ZIP:"",Handler:{},Delivery_Instructions:"",Card_Number:"",Card_Name:"",CVV:"",Exp_Date:"",Billing_Street:"",Billing_City:"",Billing_State:"",Billing_ZIP:""},n.componentDidMount=n.componentDidMount.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n._next=n._next.bind(Object(s.a)(n)),n._prev=n._prev.bind(Object(s.a)(n)),n}return Object(r.a)(i,[{key:"_next",value:function(){var t=this.state.step;t=t>=2?3:t+1,this.setState({step:t})}},{key:"_prev",value:function(){var t=this.state.step;t=t<=1?1:t-1,this.setState({step:t})}},{key:"previousButton",get:function(){return 1!==this.state.step?Object(c.jsx)("button",{className:"btn",type:"button",onClick:this._prev,children:"Previous"}):null}},{key:"nextButton",get:function(){return this.state.step<3?Object(c.jsx)("button",{className:"btn float-right",type:"button",onClick:this._next,children:"Next"}):null}},{key:"handleChange",value:function(t){var e=t.target,i=e.name,n=e.value;this.setState(function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}({},i,n))}},{key:"componentDidMount",value:function(){var t=this;_.a.get("https://chickpeaapi.glitch.me/user/account-details").then((function(e){if(0!==e.data.payments.length){var i,a=e.data,r={},s={},l={},h=Object(n.a)(a.addresses);try{for(h.s();!(i=h.n()).done;){var p=i.value;p.Is_Billing&&(s.Street=p.Street,s.City=p.City,s.State=p.State,s.ZIP=p.Zip_Code),p.Is_Shipping&&(r.Street=p.Street,r.City=p.City,r.State=p.State,r.ZIP=p.Zip_Code)}}catch(o){h.e(o)}finally{h.f()}l.Card_Name=a.payments[0].Card_Name,l.Card_Number=a.payments[0].Card_Num,l.CVV=a.payments[0].CVV,l.Exp_Date=a.payments[0].Exp_Date,t.setState({Shipping_Street:r.Street,Shipping_City:r.City,Shipping_State:r.State,Shipping_ZIP:r.ZIP,Card_Number:l.Card_Number.toString(),Card_Name:l.Card_Name,CVV:l.CVV,Exp_Date:l.Exp_Date,Billing_Street:s.Street,Billing_City:s.City,Billing_State:s.State,Billing_ZIP:s.ZIP})}}))}},{key:"placeOrder",value:function(){_()("https://chickpeaapi.glitch.me/checkout",{method:"post",data:{Shipping_Street:this.state.Shipping_Street,Shipping_City:this.state.Shipping_City,Shipping_State:this.state.Shipping_State,Shipping_ZIP:this.state.Shipping_ZIP,Delivery_Instructions:this.state.Delivery_Instructions,Billing_Street:this.state.Billing_Street,Billing_City:this.state.Billing_City,Billing_State:this.state.Billing_State,Billing_ZIP:this.state.Billing_ZIP,Handler_ID:JSON.parse(this.state.Handler).Handler_ID}}).then((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{id:"checkout-page",children:[Object(c.jsx)("h1",{children:"Checkout"}),Object(c.jsx)("p",{children:"If you have ordered with us before, Chickpea will prefill these fields with your personal information."}),Object(c.jsx)(g,{step:this.state.step,handleChange:this.handleChange,Shipping_Street:this.state.Shipping_Street,Shipping_City:this.state.Shipping_City,Shipping_State:this.state.Shipping_State,Shipping_ZIP:this.state.Shipping_ZIP,Delivery_Instructions:this.state.Delivery_Instructions,Handler:this.state.Handler}),Object(c.jsx)(S,{step:this.state.step,handleChange:this.handleChange,Card_Name:this.state.Card_Name,Card_Number:this.state.Card_Number,CVV:this.state.CVV,Exp_Date:this.state.Exp_Date,Billing_Street:this.state.Billing_Street,Billing_City:this.state.Billing_City,Billing_State:this.state.Billing_State,Billing_ZIP:this.state.Billing_ZIP}),Object(c.jsx)(d,{step:this.state.step,Shipping_Street:this.state.Shipping_Street,Shipping_City:this.state.Shipping_City,Shipping_State:this.state.Shipping_State,Shipping_ZIP:this.state.Shipping_ZIP,Handler:this.state.Handler,Delivery_Instructions:this.state.Delivery_Instructions,Card_Name:this.state.Card_Name,Card_Number:this.state.Card_Number,CVV:this.state.CVV,Exp_Date:this.state.Exp_Date,Billing_Street:this.state.Billing_Street,Billing_City:this.state.Billing_City,Billing_State:this.state.Billing_State,Billing_ZIP:this.state.Billing_ZIP}),this.previousButton,this.nextButton,3==this.state.step&&Object(c.jsx)("div",{children:Object(c.jsx)("button",{class:"btn float-right",type:"submit",onClick:function(){return t.placeOrder()},children:"Place Order"})})]})}}]),i}(o.a.Component)},45:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"===typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,l=!0,h=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return l=t.done,t},e:function(t){h=!0,s=t},f:function(){try{l||null==i.return||i.return()}finally{if(h)throw s}}}}i.d(e,"a",(function(){return a}))},99:function(t,e,i){}}]);
//# sourceMappingURL=13.08af1d5b.chunk.js.map