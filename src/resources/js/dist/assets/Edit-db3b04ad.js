import{d as w,u as h,x as P,q as U,e as l,g as T,o as b,c as y,h as $,a as g,v as B,F as C,s as u}from"./index-94e22fa3.js";import{P as F,a as k}from"./Form-0c01ad6a.js";import{_ as E}from"./Dialog.vue_vue_type_script_setup_true_lang-9b6c1811.js";import{a as I,d as M,b as N}from"./PageService-0f64e7b0.js";import"./helpers-d1a74e74.js";import"./vuedraggable.umd-21ac606d.js";import"./ComponentService-f1858edc.js";import"./Group.vue_vue_type_script_setup_true_lang-38d0f1ed.js";import"./Accordion.vue_vue_type_script_setup_true_lang-6d346033.js";import"./ComponentFloatingPreview-b563aead.js";import"./ResourceService-1b1c8a25.js";import"./LocalStorageService-a50134d2.js";import"./Modal.vue_vue_type_script_setup_true_lang-d2248abd.js";import"./ResourcePreview-43c3ece6.js";const R=["onSubmit"],X=w({__name:"Edit",setup(S){const{t:s}=h(),d=P(),c=U(),a=l(""),r=l(""),n=l(""),p=l(!1),i=l([]),m=+d.params.page,v=()=>{N({id:m,name:a.value,url:r.value,title:n.value,sections:i.value}).then(()=>{u({title:s("toasts.success"),message:s("pages.toasts.updated"),type:"success"})}).catch(()=>{u({title:s("toasts.error"),message:s("pages.toasts.errorUpdated"),type:"error"})})},f=()=>{p.value=!0},D=()=>{M(m).then(()=>{c.push({name:"pages.index"}),u({title:s("toasts.success"),message:s("pages.toasts.deleted"),type:"success"})}).catch(()=>{u({title:s("toasts.error"),message:s("pages.toasts.errorDeleted"),type:"error"})})};return T(()=>{I(m,{withData:!0}).then(o=>{const e=o.data.data;a.value=e.name,r.value=e.url,n.value=e.title,i.value=e.sections})}),(o,e)=>(b(),y(C,null,[$("form",{onSubmit:B(v,["prevent"])},[g(F,{title:o.$t("pages.titles.editPage"),showDelete:!0,onDelete:f,name:a.value,"onUpdate:name":e[0]||(e[0]=t=>a.value=t),url:r.value,"onUpdate:url":e[1]||(e[1]=t=>r.value=t),pageTitle:n.value,"onUpdate:pageTitle":e[2]||(e[2]=t=>n.value=t)},null,8,["title","name","url","pageTitle"]),g(k,{sections:i.value,"onUpdate:sections":e[3]||(e[3]=t=>i.value=t)},null,8,["sections"])],40,R),g(E,{showDialog:p.value,"onUpdate:showDialog":e[4]||(e[4]=t=>p.value=t),title:o.$t("pages.dialogs.delete.title"),message:o.$t("pages.dialogs.delete.message",{name:a.value}),onConfirm:D},null,8,["showDialog","title","message"])],64))}});export{X as default};