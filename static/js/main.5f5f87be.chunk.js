(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{118:function(e,a,t){e.exports=t(265)},123:function(e,a,t){},124:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},125:function(e,a,t){},261:function(e,a,t){},265:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(12),i=t.n(r),c=(t(123),t(124),t(125),t(33)),o=t(37),d={cases:[],CaseswithTimeSeries:[]},s=t(108),m=Object(c.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"StateWiseData":return Object(o.a)(Object(o.a)({},e),{},{cases:a.payload});case"CaseTimeSeries":return Object(o.a)(Object(o.a)({},e),{},{CaseswithTimeSeries:a.payload});default:return e}}),Object(c.a)(s.a)),u=t(21),E=function(){return function(e){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(a){e({type:"StateWiseData",payload:a.statewise}),e(function(e){return{type:"CaseTimeSeries",payload:e}}(a.cases_time_series))}))}},h=t(35),y=t(6),p=["Aqua","Aquamarine","Yellow","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","YellowGreen","AliceBlue","AntiqueWhite","Azure"],b=t(267),g=t(112),k=(t(45),t(11));t(107);var C=Object(u.b)((function(e){return{cases:e.cases,CaseswithTimeSeries:e.CaseswithTimeSeries}}),(function(e){return{fetchdata:e(E())}}))((function(e){return n.a.createElement("div",null,n.a.createElement(b.a,null,n.a.createElement(g.a,{md:12},n.a.createElement(k.BootstrapTable,{striped:!0,hover:!0,data:e.CaseswithTimeSeries,options:{paginationPosition:"both"},pagination:!0},n.a.createElement(k.TableHeaderColumn,{isKey:!0,dataField:"date",dataSort:!0},"Date"),n.a.createElement(k.TableHeaderColumn,{dataField:"dailyconfirmed",filter:{type:"NumberFilter",delay:1e3,numberComparators:["=",">","<="]}}," ","Confirmed"),n.a.createElement(k.TableHeaderColumn,{dataField:"dailydeceased"},"Deceased"),n.a.createElement(k.TableHeaderColumn,{dataField:"dailyrecovered"},"Recovered"),n.a.createElement(k.TableHeaderColumn,{dataField:"totalconfirmed"},"Total Confirmed"),n.a.createElement(k.TableHeaderColumn,{dataField:"totaldeceased"},"Total Deceased"),n.a.createElement(k.TableHeaderColumn,{dataField:"totalrecovered"},"Total Recovered")))))})),v=t(24),f=t(270),S=t(271),T=t(269),w=t(117),D=t(268);t(261);var B=function(){return n.a.createElement(f.a,{bg:"dark",variant:"dark",fixed:"top"},">",n.a.createElement(f.a.Brand,null,"COVID-19"),n.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(S.a,{className:"mr-auto justify-content-end"},n.a.createElement(S.a.Link,null,n.a.createElement(v.b,{to:"/"},"Home")),n.a.createElement(S.a.Link,null,n.a.createElement(v.b,{to:"/CoronaCases"},"Daily-Stats")),n.a.createElement(S.a.Link,null,n.a.createElement(v.b,{to:"/StateWiseCases"},"State Cases"))),n.a.createElement(T.a,{inline:!0},n.a.createElement(w.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(D.a,{variant:"outline-success"},"Search"))))},G=t(8);var L=Object(u.b)((function(e){return{cases:e.cases}}),(function(e){return{getStateData:e(E())}}))((function(e){var a={labels:y.a.pluck(e.cases,"state"),datasets:[{label:["Active Cases"],backgroundColor:"green",data:y.a.pluck(e.cases,"active")},{label:["Confirmed Cases"],backgroundColor:"orange",data:y.a.pluck(e.cases,"confirmed")},{label:"Deaths",backgroundColor:"black",data:y.a.pluck(e.cases,"deaths")},{label:"Recovered",backgroundColor:"yellow",data:y.a.pluck(e.cases,"recovered")}]},t={labels:y.a.pluck(e.cases,"state"),datasets:[{label:["Active Cases"],backgroundColor:y.a.first(p,e.cases.length),data:y.a.pluck(e.cases,"active")},{label:["Confirmed Cases"],backgroundColor:y.a.first(p,e.cases.length),data:y.a.pluck(e.cases,"confirmed")},{label:"Deaths",backgroundColor:y.a.first(p,e.cases.length),data:y.a.pluck(e.cases,"deaths")},{label:"Recovered",backgroundColor:y.a.first(p,e.cases.length),data:y.a.pluck(e.cases,"recovered")}]},l={maintainAspectRatio:!1};return n.a.createElement("div",null,n.a.createElement(b.a,null,n.a.createElement(g.a,{md:4}," ",n.a.createElement(h.c,{data:a,height:500,width:700,options:l})),n.a.createElement(g.a,{md:4}," ",n.a.createElement(h.b,{data:t,height:500,width:700,options:l})),n.a.createElement(g.a,{md:4}," ",n.a.createElement(h.a,{data:a,height:500,width:700,options:l}))),n.a.createElement(b.a,null,n.a.createElement(g.a,{md:12},n.a.createElement(k.BootstrapTable,{data:e.cases,keyField:"state"},n.a.createElement(k.TableHeaderColumn,{dataField:"state"},"State"),n.a.createElement(k.TableHeaderColumn,{dataField:"active"},"Active"),n.a.createElement(k.TableHeaderColumn,{dataField:"confirmed"},"Confirmed"),n.a.createElement(k.TableHeaderColumn,{dataField:"deaths"},"Deaths"),n.a.createElement(k.TableHeaderColumn,{dataField:"recovered"},"Recovered"),n.a.createElement(k.TableHeaderColumn,{dataField:"deltaconfirmed"},"Delta confirmed"),n.a.createElement(k.TableHeaderColumn,{dataField:"deltadeaths"},"Delta Deaths"),n.a.createElement(k.TableHeaderColumn,{dataField:"deltarecovered"},"Delta Recovered"))," ")))})),H=t(25),R=t.n(H),F=t(272);var O=Object(u.b)((function(e){return{CaseswithTimeSeries:e.CaseswithTimeSeries}}),(function(e){return{getStateData:e(E())}}))((function(e){var a=y.a.last(e.CaseswithTimeSeries);console.log(a);var t=y.a.isEmpty(a)?0:parseInt(a.dailyconfirmed),l=y.a.isEmpty(a)?0:parseInt(a.dailydeceased),r=y.a.isEmpty(a)?0:parseInt(a.dailyrecovered),i=y.a.isEmpty(a)?0:parseInt(a.totalconfirmed),c=y.a.isEmpty(a)?0:parseInt(a.totaldeceased),o=y.a.isEmpty(a)?0:parseInt(a.totalrecovered);return n.a.createElement("div",{className:"container"},n.a.createElement(b.a,null,n.a.createElement(g.a,null,n.a.createElement("h2",null,"All cases on ",!y.a.isEmpty(a)&&a.date))),n.a.createElement(b.a,{style:{marginTop:"16px"}},n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"warning",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Confirmed")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:t,duration:5,delay:1}))))),n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"danger",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Deceased")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:l,duration:5,delay:1}))))),n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"success",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Recovery")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:r,duration:5,delay:1})))))),n.a.createElement(b.a,{style:{marginTop:"16px"}},n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"warning",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Total Confirmed")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:i,duration:5,delay:1}))))),n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"danger",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Total Deceased")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:c,duration:5,delay:1}))))),n.a.createElement(g.a,{md:4},n.a.createElement(F.a,{bg:"success",key:"0",text:"white",style:{width:"18rem"}},n.a.createElement(F.a.Header,null,n.a.createElement("b",null,"Total Recovered")),n.a.createElement(F.a.Body,null,n.a.createElement(F.a.Title,null,n.a.createElement(R.a,{start:0,end:o,duration:5,delay:1})))))))}));var M=function(){return n.a.createElement("div",{style:{paddingTop:"80px"}},n.a.createElement(G.c,null,n.a.createElement(G.a,{exact:!0,path:"/",component:O}),n.a.createElement(G.a,{exact:!0,path:"/CoronaCases",component:C}),n.a.createElement(G.a,{path:"/StateWiseCases",component:L})))};var P=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{store:m},n.a.createElement(B,null),n.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(v.a,null,n.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.5f5f87be.chunk.js.map