(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),i=a(4),d=a(5),s=a(7),r=a(6),b=a(1),l=a.n(b),o=a(0),u=function(e){var t=e.tabs,a=e.selectedTabId,n=e.onTabSelected;return Object(o.jsx)("form",{children:t.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.title},e.id+22),Object(o.jsx)("input",{type:"radio",name:e.title,id:e.id,value:e.id,checked:a===e.id,onChange:n},e.id)]})}))})},j=(a(13),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),h=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:j[0],selectedTabId:j[0].id},e.onTabSelected=function(t){var a=t.target.id,n=j.find((function(e){return e.id===a}))||null;e.setState({selectedTab:n,selectedTabId:a})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:this.state.selectedTab?"".concat(this.state.selectedTab.title," is selected"):""}),Object(o.jsx)(u,{tabs:j,selectedTabId:this.state.selectedTabId,onTabSelected:this.onTabSelected})]})}}]),a}(l.a.Component),T=h;c.a.render(Object(o.jsx)(T,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5be86edc.chunk.js.map