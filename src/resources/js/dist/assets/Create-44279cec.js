import{d as v,e as o,q as c,u as f,o as E,c as M,a as l,v as P,s as u}from"./index-94e22fa3.js";import{c as T}from"./PageService-0f64e7b0.js";import{P as U,a as b}from"./Form-0c01ad6a.js";import"./helpers-d1a74e74.js";import"./vuedraggable.umd-21ac606d.js";import"./ComponentService-f1858edc.js";import"./Group.vue_vue_type_script_setup_true_lang-38d0f1ed.js";import"./Accordion.vue_vue_type_script_setup_true_lang-6d346033.js";import"./ComponentFloatingPreview-b563aead.js";import"./ResourceService-1b1c8a25.js";import"./LocalStorageService-a50134d2.js";import"./Modal.vue_vue_type_script_setup_true_lang-d2248abd.js";import"./ResourcePreview-43c3ece6.js";import"./Dialog.vue_vue_type_script_setup_true_lang-9b6c1811.js";const C=["onSubmit"],A=v({__name:"Create",setup(k){const s=o(""),r=o(""),n=o(""),i=o([]),m=c(),{t:a}=f(),p=o("adding-component"),d=()=>{T({name:s.value,url:r.value,sections:i.value,title:n.value}).then(()=>{m.push({name:"pages.index"}),u({title:a("toasts.success"),message:a("pages.toasts.created"),type:"success"})}).catch(()=>{u({title:a("toasts.error"),message:a("pages.toasts.errorCreated"),type:"error"})})};return(g,e)=>(E(),M("form",{onSubmit:P(d,["prevent"])},[l(U,{title:g.$t("pages.titles.createPage"),name:s.value,"onUpdate:name":e[0]||(e[0]=t=>s.value=t),url:r.value,"onUpdate:url":e[1]||(e[1]=t=>r.value=t),pageTitle:n.value,"onUpdate:pageTitle":e[2]||(e[2]=t=>n.value=t),pageEditionMode:p.value},null,8,["title","name","url","pageTitle","pageEditionMode"]),l(b,{sections:i.value,"onUpdate:sections":e[3]||(e[3]=t=>i.value=t),pageEditionMode:p.value,"onUpdate:pageEditionMode":e[4]||(e[4]=t=>p.value=t)},null,8,["sections","pageEditionMode"])],40,C))}});export{A as default};