import{_ as M}from"./CodeEditor.vue_vue_type_script_setup_true_lang-6daa46ea.js";import{u as O}from"./ResourceService-7a7482f8.js";import{_ as E,a as z,g as P,u as T,b as H,p as W}from"./LocalStorageService-7aa18304.js";import{e as Q,v as G,u as J}from"./helpers-0bfa8f57.js";import{b as K,d as j,x as L,e as g,f as X,r as B,o as r,c as x,h as l,a as u,A as R,k as V,l as h,u as Y,g as Z,w as $,F as ee,t as U,n as te,j as ae,_ as se}from"./index-9625683f.js";import{_ as oe}from"./Modal.vue_vue_type_script_setup_true_lang-0eccd18a.js";import{_ as ne,T as le}from"./Tabs-0dbe3d23.js";import{D as ie}from"./vuedraggable.umd-b4dea081.js";import{_ as ue}from"./ComponentPreview.vue_vue_type_script_setup_true_lang-626aaf35.js";const F=e=>e?["datasource","resource",null].includes(e):!1,de=async(e,c)=>{const n=Q(`component/${e}/variable/${c.name}/${c.type}/settings`,{withSettings:!0},{default:c.default});return await K.get(n)},re={class:"form-group h-10"},ce={class:"variable-grip-lines button primary flex cursor-move !px-1 items-center justify-center"},me=["value","placeholder"],pe={class:"flex flex-col text-xs w-14"},fe=["disabled"],ve=["disabled"],ge=j({__name:"VariableConfigItem",props:{type:{type:String,required:!0},name:{type:String,required:!0},default:{type:[String,Number,Object,null,void 0],required:!0},settings:{type:Array,default:[]},showRemove:{type:Boolean,default:!0}},emits:["update:type","update:name","update:default","removeVariable","displaySettings"],setup(e,{emit:c}){const n=e,w=L(),m=g(n.name),b=c,v=X(()=>F(n.type)),S=()=>{b("removeVariable")},k=()=>{n.type==="resource"&&b("displaySettings",n.settings),n.type==="datasource"&&de(w.params.component,{type:n.type,name:n.name,default:n.default}).then(t=>{b("displaySettings",t.data.data)})},_=t=>m.value=G(t.target);return(t,i)=>{const p=B("fa-icon");return r(),x("div",re,[l("div",ce,[u(p,{icon:"grip-lines",class:"text-gray-500"})]),u(E,{class:"w-20",modelValue:e.type,"onUpdate:modelValue":i[0]||(i[0]=d=>t.$emit("update:type",d))},null,8,["modelValue"]),l("input",{type:"text",class:"input w-32",value:m.value,onInput:i[1]||(i[1]=d=>_(d)),onBlur:i[2]||(i[2]=d=>t.$emit("update:name",m.value)),placeholder:t.$t("components.placeholders.name")},null,40,me),u(z,{class:"flex-1",modelValue:e.default,"onUpdate:modelValue":i[3]||(i[3]=d=>t.$emit("update:default",d)),name:e.name,type:e.type},null,8,["modelValue","name","type"]),l("div",pe,[l("button",{type:"button",class:R(["variable-button flex-1 rounded-tr",{"bg-blue-200 text-blue-900":v.value,"bg-blue-100 text-blue-300 cursor-not-allowed":!v.value}]),onClick:k,disabled:!v.value},[u(p,{icon:"gear"})],10,fe),l("button",{type:"button",class:R(["variable-button flex-1 bg-red-200 text-red-900 rounded-br ",{"hover:bg-red-300 cursor-pointer":e.showRemove,"cursor-not-allowed":!e.showRemove}]),onClick:S,disabled:!e.showRemove},[u(p,{icon:"minus"})],10,ve)])])}}}),be=j({__name:"VariableSettings",props:{variable:{type:[Object,null],required:!0},settings:{type:Object,required:!0}},emits:["update:settings"],setup(e,{emit:c}){return(n,w)=>{var m;return((m=e.variable)==null?void 0:m.type)==="datasource"?(r(),V(ne,{key:0,expanded:!0,settingMenu:e.settings},null,8,["settingMenu"])):h("",!0)}}}),ye={class:"flex flex-col gap-4 h-full flex-1 overflow-hidden"},xe={class:"flex flex-col-reverse md:flex-row gap-4 w-full overflow-hidden flex-1 h-full pb-2"},he={class:"flex-1 flex flex-col overflow-hidden"},we={class:"title mb-4"},_e={class:"flex gap-2"},$e={key:0,class:"title"},Ve={key:0,class:"overflow-y-auto flex flex-col flex-1 bg-gray-100 rounded-lg"},Se={key:1,class:"w-full mt-auto"},ke=j({__name:"Form",props:{code:{type:String,default:"<div>Hello World</div>"},variables:{type:Array,default:()=>[{type:"text",name:"",default:""}]},component:{type:[Object,void 0]}},emits:["update:code","update:variables","update:name"],setup(e,{emit:c}){const{loadResources:n}=O(),{loadSources:w}=T(),{loadActions:m}=H(),{loadPages:b}=J(),{t:v}=Y(),S=[{id:"graphical",title:v("components.titles.graphical"),item:null},{id:"code",title:v("components.titles.code"),item:null}],k=g(null),_=e,t=g(P("variables-expanded",window.innerWidth>768)),i=g(!1),p=g([]),d=g(null),q=c,N=()=>{q("update:variables",[..._.variables,{type:"text",name:"",default:""}])},A=s=>{q("update:variables",_.variables.filter((o,y)=>y!==s))},D=(s,o)=>{F(s.type)&&(d.value=s,s.type==="resource"?p.value=s.applied_settings||[]:p.value=o||s.settings||[],s.settings=o,i.value=!0)},I=()=>{t.value=!t.value,W("variables-expanded",t.value)};return Z(()=>{n(),w(),m(),b()}),(s,o)=>{const y=B("fa-icon");return r(),x(ee,null,[u(le,{class:"h-full",tabs:S,orientation:"vertical"},{graphical:$(()=>{var a;return[(a=e.component)!=null&&a.id?(r(),V(ue,{key:0,class:"w-full h-full",component:e.component,html:k.value,allowEdit:!0,onUpdate:o[0]||(o[0]=C=>s.$emit("update:code",C))},null,8,["component","html"])):h("",!0)]}),code:$(()=>[l("div",ye,[l("div",xe,[l("div",he,[l("h2",we,U(s.$t("components.titles.code")),1),u(M,{code:e.code,"onUpdate:code":o[1]||(o[1]=a=>s.$emit("update:code",a)),language:"html"},null,8,["code"])]),l("div",{class:R(["flex flex-col gap-2",{"md:w-4/12":t.value,"w-auto":!t.value}])},[l("div",_e,[l("button",{class:"button primary w-8 !p-0 aspect-square text-xs",type:"button",onClick:I},[t.value?(r(),V(y,{key:0,icon:"minimize"})):(r(),V(y,{key:1,icon:"maximize"}))]),t.value?(r(),x("h2",$e,U(s.$t("components.titles.variables")),1)):h("",!0)]),t.value?(r(),x("div",Ve,[u(te(ie),{class:"flex flex-col flex-1 gap-2 p-2",list:e.variables,group:"variables","item-key":"name",handle:".variable-grip-lines"},{item:$(({element:a,index:C})=>[u(ge,{type:a.type,"onUpdate:type":f=>a.type=f,name:a.name,"onUpdate:name":f=>a.name=f,default:a.default,"onUpdate:default":f=>a.default=f,settings:a.settings,showRemove:e.variables.length>1,onRemoveVariable:f=>A(C),onDisplaySettings:f=>D(a,f)},null,8,["type","onUpdate:type","name","onUpdate:name","default","onUpdate:default","settings","showRemove","onRemoveVariable","onDisplaySettings"])]),_:1},8,["list"])])):h("",!0),t.value?(r(),x("div",Se,[l("button",{type:"button",class:"variable-button bg-teal-200 hover:bg-teal-300 text-teal-900 w-full rounded",onClick:N},[u(y,{icon:"plus"}),ae(" "+U(s.$t("components.buttons.addVariable")),1)])])):h("",!0)],2)])])]),_:1}),u(oe,{title:s.$t("titles.settings"),showModal:i.value,"onUpdate:showModal":o[3]||(o[3]=a=>i.value=a),onClose:o[4]||(o[4]=a=>d.value=null)},{default:$(()=>[u(be,{variable:d.value,settings:p.value,"onUpdate:settings":o[2]||(o[2]=a=>p.value=a)},null,8,["variable","settings"])]),_:1},8,["title","showModal"])],64)}}});const De=se(ke,[["__scopeId","data-v-67e70891"]]);export{De as C};