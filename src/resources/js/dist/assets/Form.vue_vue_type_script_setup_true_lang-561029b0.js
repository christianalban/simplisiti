import{_ as V}from"./CodeEditor.vue_vue_type_script_setup_true_lang-442560f6.js";import{u as $,_ as w,a as k}from"./ControlTypeSelector.vue_vue_type_script_setup_true_lang-d246de00.js";import{v as f}from"./helpers-598837fa.js";import{u as x}from"./ResourceService-2eabafdb.js";import{d as C,f as S,r as U,o as l,c as n,g as t,t as m,l as _,a as d,F as N,h as B}from"./index-ce9e0ef5.js";const F={class:"flex flex-col gap-4"},I={class:"flex flex-col gap-2 w-1/3"},R={class:"label"},q=["value","placeholder"],A={class:"flex gap-4 h-screen py-2"},D={class:"w-8/12"},E={class:"title mb-4"},H={class:"w-4/12"},L={class:"title mb-4"},M={class:"flex flex-col gap-2 bg-gray-100 p-2 rounded-lg"},W={class:"form-group h-14"},j=["value","onInput","placeholder"],z=["onClick"],Q=C({__name:"Form",props:{code:{type:String,default:"<div>Hello World</div>"},variables:{type:Array,default:()=>[{type:"text",name:"",default:""}]},name:{type:String,default:""}},emits:["update:code","update:variables","update:name"],setup(c,{emit:h}){const{loadResources:y}=x(),{loadSources:v}=$(),i=c,p=h,g=()=>{p("update:variables",[...i.variables,{type:"text",name:"",default:""}])},b=o=>{p("update:variables",i.variables.filter((s,u)=>u!==o))};return S(()=>{y(),v()}),(o,s)=>{const u=U("fa-icon");return l(),n("div",F,[t("div",I,[t("label",R,m(o.$t("components.labels.componentName")),1),t("input",{type:"text",value:c.name,required:"",onInput:s[0]||(s[0]=e=>o.$emit("update:name",_(f)(e.target))),class:"input",placeholder:o.$t("components.placeholders.componentName")},null,40,q)]),t("div",A,[t("div",D,[t("h2",E,m(o.$t("components.titles.code")),1),d(V,{code:i.code,"onUpdate:code":s[1]||(s[1]=e=>o.$emit("update:code",e)),language:"html"},null,8,["code"])]),t("div",H,[t("h2",L,m(o.$t("components.titles.variables")),1),t("div",M,[(l(!0),n(N,null,B(c.variables,(e,r)=>(l(),n("div",W,[d(w,{class:"w-20",modelValue:e.type,"onUpdate:modelValue":a=>e.type=a},null,8,["modelValue","onUpdate:modelValue"]),t("input",{type:"text",class:"input w-40",value:e.name,onInput:a=>e.name=_(f)(a.target),placeholder:o.$t("components.placeholders.name")},null,40,j),d(k,{class:"w-full",modelValue:e.default,"onUpdate:modelValue":a=>e.default=a,name:e.name,type:e.type},null,8,["modelValue","onUpdate:modelValue","name","type"]),r===c.variables.length-1?(l(),n("button",{key:0,type:"button",class:"button primary max-w-min",onClick:g},[d(u,{icon:"plus"})])):(l(),n("button",{key:1,type:"button",class:"button primary max-w-min",onClick:a=>b(r)},[d(u,{icon:"minus"})],8,z))]))),256))])])])])}}});export{Q as _};