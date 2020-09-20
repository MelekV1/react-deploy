(this.webpackJsonpdeploy=this.webpackJsonpdeploy||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(99),a(24)),l=a.n(s),i=a(35),u=a(16),m=(a(101),a(237)),f=a(238),d=a(239),v=a(231),h=a(235),p=a(87),E=a(236);a(102);var b=function(e){var t=e.title,a=e.cases,n=e.total,c=e.Danger,o=e.active,s=Object(p.a)(e,["title","cases","total","Danger","active"]);return r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(o&&"infoBox--selected")},r.a.createElement(h.a,null,r.a.createElement(E.a,{className:"title",color:"textPrimary"},t),r.a.createElement("h2",{className:"cases ".concat(!c&&"infoBox__cases--green")},"Today ",a),r.a.createElement(E.a,{className:"total",color:"textPrimary"},"Total ",n," ")))},y=a(84),g=a(14),j=a.n(g),O={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return j()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return j()(e).format("0a")}}}]}},w=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var r in e.cases){if(t){var c={x:r,y:e[a][r]-t};n.push(c)}t=e[a][r]}return n};var x=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=w(e,t);s(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(y.Line,{data:{datasets:[{backgroundColor:"rgba(131,0,0,0.5)",borderColor:"#830000",data:o}]},options:O}))};a(202);var N=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,j()(a).format("0.0a"))))})))},k=a(86),C=a(240),D=a(241),S={cases:{hex:"#ff0000",multiplier:800},recovered:{hex:"#3eee2e",multiplier:1200},deaths:{hex:"#333333",multiplier:2e3}},I=function(e){var t=Object(k.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},R=function(e){return e?"+".concat(j()(e).format("0.0a")):"+0"},T=a(242),_=a(243);a(203);var B=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(T.a,{center:n,zoom:c},r.a.createElement(_.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:S[t].hex,fillColor:S[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*S[t].multiplier},r.a.createElement(D.a,null,r.a.createElement("div",{className:"popContainer"},r.a.createElement("div",{className:"flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"Name"},r.a.createElement("b",null,e.country)),r.a.createElement("div",{className:"Confirmed"},"Cases: ",j()(e.cases).format("0,0")),r.a.createElement("div",{className:"Recovered"},"Recovered: ",j()(e.recovered).format("0,0")),r.a.createElement("div",{className:"Deaths"},"Deaths: ",j()(e.deaths).format("0,0")))))}))}(t,a)))},M=(a(204),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),p=s[0],E=s[1],y=Object(n.useState)([]),g=Object(u.a)(y,2),O=g[0],w=g[1],k=Object(n.useState)([]),C=Object(u.a)(k,2),D=C[0],S=C[1],T=Object(n.useState)([]),_=Object(u.a)(T,2),M=_[0],z=_[1],L=Object(n.useState)("cases"),W=Object(u.a)(L,2),A=W[0],J=W[1],P=Object(n.useState)({lat:34.80746,lng:-40.4796}),Y=Object(u.a)(P,2),q=Y[0],F=Y[1],V=Object(n.useState)(3),$=Object(u.a)(V,2),G=$[0],H=$[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){E(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=I(e);w(t),S(e),z(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){c(a),E(e),F([e.countryInfo.lat,e.countryInfo.long]),H(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"Left"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement("img",{src:"bande.png",alt:"",width:"20%"}),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",value:a,onChange:K},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),O.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(b,{active:"cases"===A,Danger:!0,onClick:function(e){return J("cases")},title:"Coronavirus Cases",cases:R(p.todayCases),total:j()(p.cases).format("0.0a")}),r.a.createElement(b,{active:"recovered"===A,onClick:function(e){return J("recovered")},title:"Recovered",cases:R(p.todayRecovered),total:j()(p.recovered).format("0.0a")}),r.a.createElement(b,{active:"deaths"===A,Danger:!0,onClick:function(e){return J("deaths")},title:"Deaths",cases:R(p.todayDeaths),total:j()(p.deaths).format("0.0a")})),r.a.createElement("div",{className:"Right"},r.a.createElement(B,{countries:D,casesType:A,center:q,zoom:G}))),r.a.createElement(v.a,{className:"Right"},r.a.createElement(h.a,null,r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(N,{countries:M}),r.a.createElement("h3",null,"Worldwide new ",A),r.a.createElement(x,{casesType:A}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.10f0b7c0.chunk.js.map