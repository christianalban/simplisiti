import{g as p,u as m}from"./StyleService-b6914ba8.js";import{_ as u}from"./DraggableList.vue_vue_type_script_setup_true_lang-694017d2.js";import{d as _,r as f,o as y,a as h,b as g,e as n,t as o,h as r,w as c,g as b,i as d}from"./index-7e1cc400.js";import"./vuedraggable.umd-33ffc4e5.js";const v={class:"flex flex-col gap-4 h-screen py-2"},k={class:"title"},x={class:"flex gap-2"},V=_({__name:"Index",setup($){const l=f([]),i=t=>{const s=t.map(({id:e},a)=>({id:e,order:a+1}));m(s)};return y(()=>{p().then(t=>{l.value=t.data.data.map(({id:s,name:e,is_active:a})=>({id:s,name:e,url:{name:"styles.edit",params:{style:s}},is_active:a}))})}),(t,s)=>{const e=h("router-link");return b(),g("div",v,[n("h1",k,o(t.$t("styles.titles.stylesList")),1),n("div",x,[r(e,{class:"button default",to:{name:"dashboard"}},{default:c(()=>[d(o(t.$t("buttons.back")),1)]),_:1}),r(e,{class:"button primary",to:{name:"styles.create"}},{default:c(()=>[d(o(t.$t("styles.buttons.create")),1)]),_:1},8,["to"])]),r(u,{class:"w-1/5 grid gap-4",list:l.value,"onUpdate:list":i},null,8,["list"])])}}});export{V as default};