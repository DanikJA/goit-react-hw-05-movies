"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[101],{101:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,o,i,c,s,d,l=r(861),u=r(439),f=r(757),p=r.n(f),h=r(168),x=r(867),m=r(162),g=x.ZP.div(t||(t=(0,h.Z)(["\n  font-family: 'Arial', sans-serif;\n  padding: 20px;\n"]))),Z=x.ZP.h1(a||(a=(0,h.Z)(["\n  text-align: center;\n  font-size: 2rem;\n  color: #333;\n"]))),v=x.ZP.ul(o||(o=(0,h.Z)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),b=x.ZP.li(i||(i=(0,h.Z)(["\n  background-color: #f4f4f4;\n  padding: 10px;\n  margin: 10px 0;\n  border-radius: 5px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease, transform 0.3s ease;\n\n  &:hover {\n    background-color: #e0e0e0;\n    transform: scale(1.01);\n  }\n"]))),k=(0,x.ZP)(m.rU)(c||(c=(0,h.Z)(["\n  text-decoration: none;\n  color: #007bff;\n  font-size: 1.2rem;\n\n  &:hover {\n    color: #0056b3;\n  }\n"]))),j=x.ZP.div(s||(s=(0,h.Z)(["\n  color: red;\n  font-size: 1.5rem;\n  text-align: center;\n"]))),w=x.ZP.div(d||(d=(0,h.Z)(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),y=r(791),P=r(16),_=r(184),z=function(){var n=(0,y.useState)([]),e=(0,u.Z)(n,2),r=e[0],t=e[1],a=(0,y.useState)(!1),o=(0,u.Z)(a,2),i=o[0],c=o[1];return(0,y.useEffect)((function(){var n=function(){var n=(0,l.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P.Z.get("".concat("https://api.themoviedb.org/3","/trending/movie/day"),{params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7"}});case 3:e=n.sent,t(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),c(!0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),i?(0,_.jsx)(j,{children:"Error loading movies!"}):0===r.length?(0,_.jsx)(w,{children:"Loading..."}):(0,_.jsxs)(g,{children:[(0,_.jsx)(Z,{children:"Trending today"}),(0,_.jsx)(v,{children:r.map((function(n){return(0,_.jsx)(b,{children:(0,_.jsx)(k,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}}}]);
//# sourceMappingURL=101.351b214e.chunk.js.map