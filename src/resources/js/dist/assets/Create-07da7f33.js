import{d as f,u as h,q as _,e as n,r as b,o as x,c as w,h as e,t as a,a as p,w as g,n as y,y as k,C as $,v as C,j as N,s as d}from"./index-94e22fa3.js";import{_ as S}from"./Form.vue_vue_type_script_setup_true_lang-89d31ec8.js";import{c as B}from"./ScriptService-d4a7bebf.js";import{v as I}from"./helpers-d1a74e74.js";import"./CodeEditor.vue_vue_type_script_setup_true_lang-3e235156.js";const V=["onSubmit"],A={class:"flex justify-between items-end"},j={class:"flex flex-col gap-4 mb-4 w-full"},q={class:"title"},D={class:"flex gap-2"},M={type:"submit",class:"button primary"},T={class:"flex gap-4"},U={class:"flex flex-col gap-2"},E={class:"label"},H=["value","placeholder"],R={class:"flex flex-col gap-2"},W={class:"label whitespace-nowrap"},z=["placeholder"],P=f({__name:"Create",setup(F){const{t:l}=h(),u=_(),c=n('alert("Hello World")'),r=n(""),i=n(!0),m=()=>{B({name:r.value,scripts:c.value,is_active:!!i.value}).then(()=>{u.push({name:"scripts.index"}),d({title:l("toasts.success"),message:l("scripts.toasts.created"),type:"success"})}).catch(()=>{d({title:l("toasts.error"),message:l("scripts.toasts.errorCreated"),type:"error"})})};return(s,t)=>{const v=b("router-link");return x(),w("form",{onSubmit:C(m,["prevent"]),class:"overflow-hidden h-full flex flex-col"},[e("div",A,[e("div",j,[e("h1",q,a(s.$t("scripts.titles.createScript")),1),e("div",D,[p(v,{class:"button default",to:{name:"scripts.index"}},{default:g(()=>[N(a(s.$t("buttons.back")),1)]),_:1},8,["to"]),e("button",M,a(s.$t("buttons.save")),1)])]),e("div",T,[e("div",U,[e("label",E,a(s.$t("scripts.labels.scriptName")),1),e("input",{type:"text",value:r.value,required:"",onInput:t[0]||(t[0]=o=>r.value=y(I)(o.target)),class:"input",placeholder:s.$t("scripts.placeholders.scriptName")},null,40,H)]),e("div",R,[e("label",W,a(s.$t("scripts.labels.scriptIsActive")),1),e("div",null,[k(e("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=o=>i.value=o),class:"checkbox",placeholder:s.$t("scripts.placeholders.scriptIsActive")},null,8,z),[[$,i.value]])])])])]),p(S,{code:c.value,"onUpdate:code":t[2]||(t[2]=o=>c.value=o)},null,8,["code"])],40,V)}}});export{P as default};