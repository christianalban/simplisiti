import{d as g,r as o,l as b,u as _,a as h,b as k,e as u,h as p,w,t as m,m as y,g as C,i as x,s as c}from"./index-7e1cc400.js";import{P}from"./Form-f61be82b.js";import{c as U}from"./PageService-49e7a097.js";import"./helpers-6321440c.js";import"./vuedraggable.umd-33ffc4e5.js";import"./ComponentService-b22ad1fb.js";import"./ControlTypeSelector.vue_vue_type_script_setup_true_lang-7d8793e5.js";import"./Modal.vue_vue_type_script_setup_true_lang-86779c32.js";import"./ResourceService-0b7fece6.js";const B=["onSubmit"],N={class:"flex gap-4 mb-4 w-full"},S={class:"title"},V={type:"submit",class:"button primary ml-auto"},z=g({__name:"Create",setup($){const a=o(""),n=o(""),r=o(""),l=o([]),d=b(),{t:s}=_(),v=()=>{U({name:a.value,url:n.value,sections:l.value,title:r.value}).then(()=>{d.push({name:"pages.index"}),c({title:s("toasts.success"),message:s("pages.toasts.created"),type:"success"})}).catch(()=>{c({title:s("toasts.error"),message:s("pages.toasts.errorCreated"),type:"error"})})};return(i,t)=>{const f=h("router-link");return C(),k("form",{onSubmit:y(v,["prevent"])},[u("div",N,[p(f,{class:"button default",to:{name:"pages.index"}},{default:w(()=>[x(m(i.$t("buttons.back")),1)]),_:1},8,["to"]),u("h1",S,m(i.$t("pages.titles.createPage")),1),u("button",V,m(i.$t("buttons.save")),1)]),p(P,{name:a.value,"onUpdate:name":t[0]||(t[0]=e=>a.value=e),url:n.value,"onUpdate:url":t[1]||(t[1]=e=>n.value=e),sections:l.value,"onUpdate:sections":t[2]||(t[2]=e=>l.value=e),title:r.value,"onUpdate:title":t[3]||(t[3]=e=>r.value=e)},null,8,["name","url","sections","title"])],40,B)}}});export{z as default};