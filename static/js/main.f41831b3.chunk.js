(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(179)},107:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(107),a(22)),l=a.n(i),s=(a(109),a(98)),u=(a(50),a(15)),m=(a(51),a(10)),d=(a(112),a(99)),E=a(39),p=a(29),f=(a(114),a(67)),w=a(40),v=a.n(w),O=new w.HttpProvider(window.PROVIDER_URL),g=new v.a(O),S=w.IconBuilder.CallBuilder,b=w.IconBuilder.CallTransactionBuilder,h={iconService:g,callBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.from,a=e.methodName,n=e.to,r=e.params,c=void 0===r?{}:r;return(new S).from(t).to(n).method(a).params(c).build()},sendTxBuild:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.from,a=e.to,n=e.methodName,r=e.params,c=void 0===r?{}:r,o=e.networkId,i=void 0===o?window.NID:o,l=e.stepLimit,s=void 0===l?"0x493e0":l,u=e.value,m=void 0===u?"0x0":u;return{jsonrpc:"2.0",method:"icx_sendTransaction",params:(new b).nid(i).from(t).to(a).stepLimit(s).value(m).timestamp("0x".concat((1e3*(new Date).getTime()).toString(16))).method(n).params(c).version("0x3").build(),id:1}}},N={getAddress:function(){return new Promise(function(e){window.addEventListener("ICONEX_RELAY_RESPONSE",function t(a){var n=a.detail,r=n.type,c=n.payload;"RESPONSE_ADDRESS"===r&&e(c),window.removeEventListener("ICONEX_RELAY_RESPONSE",t)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_ADDRESS"}}))})},sendTransaction:function(e){return new Promise(function(t){window.addEventListener("ICONEX_RELAY_RESPONSE",function e(a){var n=a.detail,r=n.type,c=n.payload;"RESPONSE_JSON-RPC"===r&&t(c.result),window.removeEventListener("ICONEX_RELAY_RESPONSE",e)}),window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST",{detail:{type:"REQUEST_JSON-RPC",payload:e}}))})}},_={MODE:{LOG_OUT:"LOG_OUT",LOG_IN:"LOG_IN"}},y=(a(180),a(26)),C=a(88),R=a.n(C),x=a(89),I=a.n(x),k=a(90),L=a.n(k),T=a(91),j=a.n(T),A=y.a.Meta;var D=function(e){var t=Object(n.useState)(0),a=Object(p.a)(t,2),c=(a[0],a[1],Object(n.useState)(e.myAddress)),o=Object(p.a)(c,1)[0],i=Object(n.useState)(0),s=Object(p.a)(i,2),d=s[0],f=s[1];function w(){return v.apply(this,arguments)}function v(){return(v=Object(E.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.iconService.call(h.callBuild({from:o,methodName:"get_cnt_click",params:{},to:window.CONTRACT_ADDRESS})).execute();case 2:t=e.sent,f(Number(t));case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(){return g.apply(this,arguments)}function g(){return(g=Object(E.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.sendTxBuild,a=t({from:o,to:window.CONTRACT_ADDRESS,methodName:"click"}),e.next=4,N.sendTransaction(a);case 4:n=e.sent,console.log(n),n&&w();case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){w()},[]),Object(n.useEffect)(function(){console.log(o),w()}),r.a.createElement("div",null,r.a.createElement(u.a,{gutter:50},r.a.createElement(m.a,{span:12},r.a.createElement(y.a,{title:"click \ub204\uc801\ud69f\uc218"},d)),r.a.createElement(m.a,{span:12},r.a.createElement(y.a,{title:"\uc774\ubc88\ub2ec reward (\ub2e8\uc704:ICX)"},(.1*d).toFixed(1)))),r.a.createElement(u.a,{gutter:30,className:"ad-wrap"},r.a.createElement(m.a,{span:6},r.a.createElement(y.a,{hoverable:!0,onClick:function(){return O()},cover:r.a.createElement("div",{className:"ad-image",style:{backgroundImage:"url(".concat(R.a,")")}})},r.a.createElement(A,{title:"Europe Street beat",description:"www.instagram.com"}))),r.a.createElement(m.a,{span:6},r.a.createElement(y.a,{hoverable:!0,onClick:function(){return O()},cover:r.a.createElement("div",{className:"ad-image",style:{backgroundImage:"url(".concat(I.a,")")}})},r.a.createElement(A,{title:"Europe Street beat",description:"www.instagram.com"}))),r.a.createElement(m.a,{span:6},r.a.createElement(y.a,{hoverable:!0,onClick:function(){return O()},cover:r.a.createElement("div",{className:"ad-image",style:{backgroundImage:"url(".concat(L.a,")")}})},r.a.createElement(A,{title:"Europe Street beat",description:"www.instagram.com"}))),r.a.createElement(m.a,{span:6},r.a.createElement(y.a,{hoverable:!0,onClick:function(){return O()},cover:r.a.createElement("div",{className:"ad-image",style:{backgroundImage:"url(".concat(j.a,")")}})},r.a.createElement(A,{title:"Europe Street beat",description:"www.instagram.com"})))))},B=(a(178),f.a.Content);var P=function(){var e=Object(n.useState)(_.MODE.LOG_OUT),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(p.a)(o,2),w=i[0],v=i[1];function O(){return(O=Object(E.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h.iconService,h.callBuild,e.next=3,N.getAddress();case 3:t=e.sent,v(t),c(_.MODE.LOG_IN),s.a.success("Hello, ".concat(t,"."));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement(f.a,null,r.a.createElement(B,null,r.a.createElement(u.a,{type:"flex",justify:"center",align:"middle",className:"page-wrap ".concat((_.MODE.LOG_OUT,"cow-bg")," ")},r.a.createElement(m.a,null,a===_.MODE.LOG_IN?r.a.createElement(D,{myAddress:w}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{color:"#ffffff",fontSize:40,marginBottom:2,fontFamily:"cursive"}},"Cash Cow"),r.a.createElement("h2",{style:{color:"#ffffff",fontSize:20,fontFamily:"cursive"}}," Click & Get Coin"),r.a.createElement(d.a,{size:"large",onClick:function(){return O.apply(this,arguments)},style:{fontFamily:"initial"}},"ICONex \uc5f0\ub3d9\ud558\uae30"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,a){e.exports=a.p+"static/media/ad1.754e2fbc.png"},89:function(e,t,a){e.exports=a.p+"static/media/ad2.f336928b.png"},90:function(e,t,a){e.exports=a.p+"static/media/ad3.fac9b7bd.png"},91:function(e,t,a){e.exports=a.p+"static/media/ad4.5e6d4ff0.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.f41831b3.chunk.js.map