"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{253:function(n,e,r){r.r(e),r.d(e,{default:function(){return z}});var t,a,i,o,c,s,l,p=r(861),u=r(439),d=r(757),f=r.n(d),h=r(162),m=r(16),x=r(791),v=r(168),g=r(867),Z=g.ZP.div(t||(t=(0,v.Z)(["\n  padding: 20px;\n  font-family: 'Arial', sans-serif;\n  background-color: #f9f9f9;\n"]))),b=g.ZP.ul(a||(a=(0,v.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),w=g.ZP.li(i||(i=(0,v.Z)(["\n  background-color: white;\n  border-radius: 8px;\n  padding: 15px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    transform: scale(1.03);\n  }\n"]))),k=g.ZP.p(o||(o=(0,v.Z)(["\n  font-weight: bold;\n  font-size: 1.1rem;\n  color: #333;\n"]))),j=g.ZP.p(c||(c=(0,v.Z)(["\n  font-size: 1rem;\n  color: #555;\n  margin-top: 10px;\n"]))),P=g.ZP.div(s||(s=(0,v.Z)(["\n  color: red;\n  font-size: 1.2rem;\n  text-align: center;\n  margin-top: 20px;\n"]))),_=g.ZP.div(l||(l=(0,v.Z)(["\n  text-align: center;\n  font-size: 1.5rem;\n  color: #888;\n  margin-top: 20px;\n"]))),y=r(184),z=function(){var n=(0,h.UO)().movieId,e=(0,x.useState)([]),r=(0,u.Z)(e,2),t=r[0],a=r[1],i=(0,x.useState)(null),o=(0,u.Z)(i,2),c=o[0],s=o[1];return(0,x.useEffect)((function(){var e=function(){var e=(0,p.Z)(f().mark((function e(){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/reviews"),{params:{api_key:"a4e0e6c94492c515df52f4a6ebcc54c7"}});case 3:r=e.sent,a(r.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s("Problems with fetching reviews");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),c?(0,y.jsx)(P,{children:c}):0===t.length?(0,y.jsx)(_,{children:"No reviews available"}):(0,y.jsxs)(Z,{children:[(0,y.jsx)("h2",{children:"Reviews"}),(0,y.jsx)(b,{children:t.map((function(n){return(0,y.jsxs)(w,{children:[(0,y.jsx)(k,{children:n.author}),(0,y.jsx)(j,{children:n.content})]},n.id)}))})]})}}}]);
//# sourceMappingURL=253.d453dc3d.chunk.js.map