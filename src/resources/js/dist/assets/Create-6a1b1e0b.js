import{d as b,u as f,m as _,b as m,r as C,o as h,c as y,g as i,a as u,w,t as l,n as g,i as k,s as p}from"./index-ce9e0ef5.js";import{_ as x}from"./Form.vue_vue_type_script_setup_true_lang-561029b0.js";import{c as $}from"./ComponentService-0040659d.js";import"./CodeEditor.vue_vue_type_script_setup_true_lang-442560f6.js";import"./ControlTypeSelector.vue_vue_type_script_setup_true_lang-d246de00.js";import"./Modal.vue_vue_type_script_setup_true_lang-86180c86.js";import"./ResourceService-2eabafdb.js";import"./ResourcePreview-6a382c18.js";import"./helpers-598837fa.js";const B=["onSubmit"],N={class:"flex gap-4 mb-4 w-full"},S={class:"title"},U={type:"submit",class:"button primary ml-auto"},A=b({__name:"Create",setup(V){const{t:s}=f(),c=_(),a=m("<div>Create your new component</div>"),n=m([{type:"text",name:"",default:""}]),r=m(""),d=()=>{$({html:a.value,variables:n.value.filter(t=>t.name!==""),name:r.value}).then(()=>{c.push({name:"components.index"}),p({title:s("toasts.success"),message:s("components.toasts.created"),type:"success"})}).catch(()=>{p({title:s("toasts.error"),message:s("components.toasts.errorCreated"),type:"error"})})};return(t,e)=>{const v=C("router-link");return h(),y("form",{onSubmit:g(d,["prevent"])},[i("div",N,[u(v,{class:"button default",to:{name:"components.index"}},{default:w(()=>[k(l(t.$t("buttons.back")),1)]),_:1},8,["to"]),i("h1",S,l(t.$t("components.titles.createComponent")),1),i("button",U,l(t.$t("buttons.save")),1)]),u(x,{code:a.value,"onUpdate:code":e[0]||(e[0]=o=>a.value=o),variables:n.value,"onUpdate:variables":e[1]||(e[1]=o=>n.value=o),name:r.value,"onUpdate:name":e[2]||(e[2]=o=>r.value=o)},null,8,["code","variables","name"])],40,B)}}});export{A as default};