import{g as w}from"./ComponentService-33601891.js";import{g as B}from"./PageService-31dcdd43.js";import{d as D,u as N,b as n,e as S,f as V,r as _,c as l,g as t,t as r,F as p,h,o as a,a as $,w as F,i as v,j as f,k as x,_ as I}from"./index-63881d29.js";import{g as L}from"./StyleService-1205e6bd.js";import{g as j}from"./ScriptService-18bd886d.js";import{g as E}from"./ResourceService-a05096a0.js";const M={class:"grid place-items-center h-full"},P={class:"dashboard w-full bg-white"},R={class:"grid grid-cols-2 rounded-lg gap-4"},T={class:"title"},q={class:"border border-gray-200 rounded-lg"},z={class:"title"},A={class:""},G={class:"tool-status"},H=D({__name:"Dashboard",setup(J){const{t:o}=N(),c=n(0),i=n(0),u=n(0),d=n(0),g=n(0),y=[{name:"components.index",title:"titles.components"},{name:"pages.index",title:"titles.pages"},{name:"styles.index",title:"titles.styles"},{name:"scripts.index",title:"titles.scripts"},{name:"resources.index",title:"titles.resources"},{name:"settings.index",title:"titles.settings"},{name:"plugins.index",title:"titles.plugins"}],k=S(()=>[{counter:c.value,message:o("status.components",c.value)},{counter:i.value,message:o("status.pages",i.value)},{counter:u.value,message:o("status.styles",u.value)},{counter:d.value,message:o("status.scripts",d.value)},{counter:g.value,message:o("status.resources",g.value)}]);return V(()=>{w().then(e=>{c.value=e.data.data.length}),B().then(e=>{i.value=e.data.data.length}),L().then(e=>{u.value=e.data.data.length}),j().then(e=>{d.value=e.data.data.length}),E().then(e=>{g.value=e.data.data.length})}),(e,K)=>{const C=_("router-link"),m=_("fa-icon");return a(),l("div",M,[t("div",P,[t("div",R,[t("div",null,[t("h2",T,r(e.$t("titles.dashboard")),1),t("ul",q,[(a(),l(p,null,h(y,({name:s,title:b})=>t("li",{key:s},[$(C,{class:"tool-link",to:{name:s}},{default:F(()=>[v(r(e.$t(b)),1)]),_:2},1032,["to"])])),64))])]),t("div",null,[t("h2",z,r(e.$t("titles.status")),1),t("ul",A,[(a(!0),l(p,null,h(k.value,s=>(a(),l("li",G,[s.counter?x("",!0):(a(),f(m,{key:0,class:"text-yellow-500",icon:"triangle-exclamation"})),s.counter?(a(),f(m,{key:1,class:"text-green-500",icon:"check"})):x("",!0),v(" "+r(s.message),1)]))),256))])])])])])}}});const Z=I(H,[["__scopeId","data-v-60ad88a0"]]);export{Z as default};