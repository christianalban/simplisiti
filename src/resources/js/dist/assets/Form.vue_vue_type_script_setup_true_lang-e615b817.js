import{_ as a}from"./CodeEditor.vue_vue_type_script_setup_true_lang-f1221071.js";import{d as c,o as n,c as d,h as l,t as r,a as i}from"./index-c5c10336.js";const p={class:"flex flex-col gap-4 overflow-hidden py-2 h-full"},m={class:"title mb-4"},_=c({__name:"Form",props:{code:{type:String,default:`.custom-style {
    color: red;
}`}},emits:["update:code"],setup(t){return(e,o)=>(n(),d("div",p,[l("h2",m,r(e.$t("components.titles.code")),1),i(a,{code:t.code,"onUpdate:code":o[0]||(o[0]=s=>e.$emit("update:code",s)),language:"css"},null,8,["code"])]))}});export{_};
