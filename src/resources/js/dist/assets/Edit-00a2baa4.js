import{d as w,u as C,p as y,m as D,b as m,f as $,r as k,o as U,c as B,g as n,a as c,w as N,t as i,n as S,F as V,s as u,i as x}from"./index-ce9e0ef5.js";import{_ as E}from"./Form.vue_vue_type_script_setup_true_lang-561029b0.js";import{_ as F}from"./Dialog.vue_vue_type_script_setup_true_lang-5cf9bbe0.js";import{a as I,d as M,u as R}from"./ComponentService-0040659d.js";import"./CodeEditor.vue_vue_type_script_setup_true_lang-442560f6.js";import"./ControlTypeSelector.vue_vue_type_script_setup_true_lang-d246de00.js";import"./Modal.vue_vue_type_script_setup_true_lang-86180c86.js";import"./ResourceService-2eabafdb.js";import"./ResourcePreview-6a382c18.js";import"./helpers-598837fa.js";const T=["onSubmit"],j={class:"flex gap-4 mb-4 w-full"},q={class:"title"},z={type:"submit",class:"button primary"},Y=w({__name:"Edit",setup(A){const{t:o}=C(),v=y(),b=D(),l=m(""),a=m(""),p=m(!1),r=m([]),d=+v.params.component,f=()=>{R({id:d,html:l.value,variables:r.value.filter(t=>t.name!==""),name:a.value}).then(()=>{u({title:o("toasts.success"),message:o("components.toasts.updated"),type:"success"})}).catch(()=>{u({title:o("toasts.error"),message:o("components.toasts.errorUpdated"),type:"error"})})},g=()=>{p.value=!0},h=()=>{M(d).then(()=>{b.push({name:"components.index"}),u({title:o("toasts.success"),message:o("components.toasts.deleted"),type:"success"})}).catch(()=>{u({title:o("toasts.error"),message:o("components.toasts.errorDeleted"),type:"error"})})};return $(()=>{I(d).then(t=>{const e=t.data.data;l.value=e.html,a.value=e.name,r.value=e.variables.length?e.variables:[{type:"text",name:"",default:""}]})}),(t,e)=>{const _=k("router-link");return U(),B(V,null,[n("form",{onSubmit:S(f,["prevent"])},[n("div",j,[c(_,{class:"button default",to:{name:"components.index"}},{default:N(()=>[x(i(t.$t("buttons.back")),1)]),_:1},8,["to"]),n("h1",q,i(t.$t("components.titles.editComponent")),1),n("button",{onClick:g,type:"button",class:"button danger ml-auto"},i(t.$t("buttons.delete")),1),n("button",z,i(t.$t("buttons.save")),1)]),c(E,{code:l.value,"onUpdate:code":e[0]||(e[0]=s=>l.value=s),name:a.value,"onUpdate:name":e[1]||(e[1]=s=>a.value=s),variables:r.value,"onUpdate:variables":e[2]||(e[2]=s=>r.value=s)},null,8,["code","name","variables"])],40,T),c(F,{showDialog:p.value,"onUpdate:showDialog":e[3]||(e[3]=s=>p.value=s),title:t.$t("components.dialogs.delete.title"),message:t.$t("components.dialogs.delete.message",{name:a.value}),onConfirm:h},null,8,["showDialog","title","message"])],64)}}});export{Y as default};