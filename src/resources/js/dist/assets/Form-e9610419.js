import{_ as I}from"./CodeEditor.vue_vue_type_script_setup_true_lang-b8fa1574.js";import{a as M,v as U}from"./helpers-73a2380c.js";import{u as z}from"./ResourceService-ebe1c147.js";import{_ as A,a as D,u as E,b as O}from"./ControlTypeSelector.vue_vue_type_script_setup_true_lang-c7a151dc.js";import{b as j,d as N,x as H,e as $,f as W,r as B,o as i,c as f,a as r,h as t,y as C,g as L,t as w,n as Q,k,l as S,F as R,i as T,j as G,w as J,_ as K}from"./index-d150ea61.js";import{_ as P}from"./Modal.vue_vue_type_script_setup_true_lang-a7a11a68.js";import{_ as X}from"./Form.vue_vue_type_script_setup_true_lang-df8075e1.js";const F=e=>e?["datasource",null].includes(e):!1,Y=async(e,p)=>{const u=M(`component/${e}/variable/${p.name}/${p.type}/settings`,{withSettings:!0},{default:p.default});return await j.get(u)},Z={class:"form-group h-14"},ee=["value","placeholder"],te={class:"flex flex-col text-xs w-14"},ae=["disabled"],oe=["disabled"],se=N({__name:"VariableConfigItem",props:{type:{type:String,required:!0},name:{type:String,required:!0},default:{type:[String,Number,Object,null,void 0],required:!0},showRemove:{type:Boolean,default:!0}},emits:["update:type","update:name","update:default","removeVariable","displaySettings"],setup(e,{emit:p}){const u=e,V=H(),b=$(u.name),v=p,s=W(()=>F(u.type)),y=()=>{v("removeVariable")},h=()=>{Y(V.params.component,{type:u.type,name:u.name,default:u.default}).then(n=>{v("displaySettings",n.data.data)})},x=n=>b.value=U(n.target);return(n,l)=>{const _=B("fa-icon");return i(),f("div",Z,[r(A,{class:"w-20",modelValue:e.type,"onUpdate:modelValue":l[0]||(l[0]=m=>n.$emit("update:type",m))},null,8,["modelValue"]),t("input",{type:"text",class:"input w-32",value:b.value,onInput:l[1]||(l[1]=m=>x(m)),onBlur:l[2]||(l[2]=m=>n.$emit("update:name",b.value)),placeholder:n.$t("components.placeholders.name")},null,40,ee),r(D,{class:"flex-1",modelValue:e.default,"onUpdate:modelValue":l[3]||(l[3]=m=>n.$emit("update:default",m)),name:e.name,type:e.type},null,8,["modelValue","name","type"]),t("div",te,[t("button",{type:"button",class:C(["variable-button flex-1 rounded-tr",{"bg-blue-200 text-blue-900":s.value,"bg-blue-100 text-blue-300 cursor-not-allowed":!s.value}]),onClick:h,disabled:!s.value},[r(_,{icon:"gear"})],10,ae),t("button",{type:"button",class:C(["variable-button flex-1 bg-red-200 text-red-900 rounded-br ",{"hover:bg-red-300 cursor-pointer":e.showRemove,"cursor-not-allowed":!e.showRemove}]),onClick:y,disabled:!e.showRemove},[r(_,{icon:"minus"})],10,oe)])])}}}),ne={class:"flex flex-col gap-4 flex-1 overflow-hidden"},le={class:"flex flex-col gap-2 md:w-1/3"},de={class:"label"},ue=["value","placeholder"],ie={class:"flex flex-col-reverse md:flex-row gap-4 w-full flex-1 overflow-hidden py-2"},re={class:"flex-1 flex flex-col overflow-hidden"},me={class:"title mb-4"},ce={class:"flex gap-2"},pe={key:0,class:"title"},fe={key:0,class:"flex flex-col flex-1 gap-2 bg-gray-100 p-2 rounded-lg overflow-y-auto max-h-[50vh]"},ve={key:1,class:"w-full mt-auto"},be=N({__name:"Form",props:{code:{type:String,default:"<div>Hello World</div>"},variables:{type:Array,default:()=>[{type:"text",name:"",default:""}]},name:{type:String,default:""}},emits:["update:code","update:variables","update:name"],setup(e,{emit:p}){const{loadResources:u}=z(),{loadSources:V}=E(),{loadActions:b}=O(),v=e,s=$(window.innerWidth>768),y=$(!1),h=$([]),x=p,n=()=>{x("update:variables",[...v.variables,{type:"text",name:"",default:""}])},l=o=>{x("update:variables",v.variables.filter((d,g)=>g!==o))},_=(o,d)=>{F(o.type)&&(h.value=d||[],o.settings=d,y.value=!0)},m=()=>{s.value=!s.value};return L(()=>{u(),V(),b()}),(o,d)=>{const g=B("fa-icon");return i(),f(R,null,[t("div",ne,[t("div",le,[t("label",de,w(o.$t("components.labels.componentName")),1),t("input",{type:"text",value:e.name,required:"",onInput:d[0]||(d[0]=a=>o.$emit("update:name",Q(U)(a.target))),class:"input",placeholder:o.$t("components.placeholders.componentName")},null,40,ue)]),t("div",ie,[t("div",re,[t("h2",me,w(o.$t("components.titles.code")),1),r(I,{code:v.code,"onUpdate:code":d[1]||(d[1]=a=>o.$emit("update:code",a)),language:"html"},null,8,["code"])]),t("div",{class:C(["flex flex-col gap-2",{"md:w-4/12":s.value,"w-auto":!s.value}])},[t("div",ce,[t("button",{class:"button primary w-8 !p-0 aspect-square text-xs",type:"button",onClick:m},[s.value?(i(),k(g,{key:0,icon:"minimize"})):(i(),k(g,{key:1,icon:"maximize"}))]),s.value?(i(),f("h2",pe,w(o.$t("components.titles.variables")),1)):S("",!0)]),s.value?(i(),f("div",fe,[(i(!0),f(R,null,T(e.variables,(a,q)=>(i(),f("div",{key:a.name},[r(se,{type:a.type,"onUpdate:type":c=>a.type=c,name:a.name,"onUpdate:name":c=>a.name=c,default:a.default,"onUpdate:default":c=>a.default=c,showRemove:e.variables.length>1,onRemoveVariable:c=>l(q),onDisplaySettings:c=>_(a,c)},null,8,["type","onUpdate:type","name","onUpdate:name","default","onUpdate:default","showRemove","onRemoveVariable","onDisplaySettings"])]))),128))])):S("",!0),s.value?(i(),f("div",ve,[t("button",{type:"button",class:"variable-button bg-teal-200 hover:bg-teal-300 text-teal-900 w-full rounded",onClick:n},[r(g,{icon:"plus"}),G(" "+w(o.$t("components.buttons.addVariable")),1)])])):S("",!0)],2)])]),r(P,{title:o.$t("titles.settings"),showModal:y.value,"onUpdate:showModal":d[2]||(d[2]=a=>y.value=a),resetOnClose:!1},{default:J(()=>[r(X,{settingMenu:h.value},null,8,["settingMenu"])]),_:1},8,["title","showModal"])],64)}}});const Ve=K(be,[["__scopeId","data-v-105b9517"]]);export{Ve as C};