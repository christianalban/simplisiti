import{d as v,e as o,q as d,u as g,o as f,c as P,a as l,v as T,s as p}from"./index-53847a5f.js";import{c as U}from"./PageService-d0a72512.js";import{P as b,a as C}from"./Form-385dd8a0.js";import"./helpers-d7cd10d6.js";import"./vuedraggable.umd-51241ac4.js";import"./ComponentService-e247c513.js";import"./ComponentFloatingPreview-782cec27.js";import"./Accordion.vue_vue_type_script_setup_true_lang-1c4596a5.js";import"./ComponentPreview.vue_vue_type_script_setup_true_lang-55d3db3a.js";import"./ResourceService-7d3a1bfa.js";import"./LocalStorageService-68aa5176.js";import"./Modal.vue_vue_type_script_setup_true_lang-cad7392d.js";import"./ResourcePreview-f6320a26.js";import"./Dialog.vue_vue_type_script_setup_true_lang-8eb793dd.js";const k=["onSubmit"],j=v({__name:"Create",setup(w){const a=o(""),r=o(""),n=o(""),i=o([]),m=d(),{t:s}=g(),u=()=>{U({name:a.value,url:r.value,sections:i.value,title:n.value}).then(()=>{m.push({name:"pages.index"}),p({title:s("toasts.success"),message:s("pages.toasts.created"),type:"success"})}).catch(()=>{p({title:s("toasts.error"),message:s("pages.toasts.errorCreated"),type:"error"})})};return(c,e)=>(f(),P("form",{onSubmit:T(u,["prevent"])},[l(b,{title:c.$t("pages.titles.createPage"),name:a.value,"onUpdate:name":e[0]||(e[0]=t=>a.value=t),url:r.value,"onUpdate:url":e[1]||(e[1]=t=>r.value=t),pageTitle:n.value,"onUpdate:pageTitle":e[2]||(e[2]=t=>n.value=t)},null,8,["title","name","url","pageTitle"]),l(C,{sections:i.value,"onUpdate:sections":e[3]||(e[3]=t=>i.value=t)},null,8,["sections"])],40,k))}});export{j as default};