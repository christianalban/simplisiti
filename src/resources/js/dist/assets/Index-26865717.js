import{d as _,o as b,c as C,h as t,t as w,n as X,l as F,u as k,e as m,k as j,w as D,s as g,a as f,D as Y,E as Z,f as ee,g as te,r as B,y as S,z as se,F as U,i as oe,j as q,B as le}from"./index-53847a5f.js";import{c as ae,a as ne,b as re,g as ue,d as ie,e as de}from"./ResourceService-7d3a1bfa.js";import{v as ce,c as pe}from"./helpers-d7cd10d6.js";import{_ as E}from"./Modal.vue_vue_type_script_setup_true_lang-cad7392d.js";import{_ as V}from"./Dialog.vue_vue_type_script_setup_true_lang-8eb793dd.js";import{R as me}from"./ResourcePreview-f6320a26.js";const fe={class:"flex flex-col gap-4"},ve={class:"flex flex-col gap-2 w-full"},he={class:"label"},ge=["required","multiple","placeholder"],we={key:0,class:"flex flex-col gap-2 w-full"},be={class:"label"},ye=["value","placeholder"],N=_({__name:"Form",props:{name:{type:String,required:!0},file:{type:[Array,Object,null],default:null},fileRequired:{type:Boolean,default:!1},uploadType:{type:String,default:"single"}},emits:["update:name","update:file"],setup(c,{emit:y}){const p=c,v=y,r=s=>{var l;if(!s)return;const u=p.uploadType==="single"?(l=s.files)==null?void 0:l[0]:[...s.files??[]];v("update:file",u)};return(s,u)=>(b(),C("div",fe,[t("div",ve,[t("label",he,w(s.$t(`resources.labels.${c.uploadType==="single"?"resourceFile":"resourceFiles"}`)),1),t("input",{type:"file",required:c.fileRequired,onChange:u[0]||(u[0]=l=>r(l.target)),class:"input",multiple:c.uploadType==="batch",placeholder:s.$t("resources.placeholders.resourceFile"),accept:"image/jpeg,image/svg+xml,image/png,image/webp,video/mp4,application/pdf,image/gif,application/zip,application/x-7z-compressed,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"},null,40,ge)]),c.uploadType==="single"?(b(),C("div",we,[t("label",be,w(s.$t("resources.labels.resourceName")),1),t("input",{type:"text",value:c.name,onInput:u[1]||(u[1]=l=>s.$emit("update:name",X(ce)(l.target))),class:"input",placeholder:s.$t("resources.placeholders.resourceName")},null,40,ye)])):F("",!0)]))}}),$e=_({__name:"Create",props:{showModal:{type:Boolean,required:!0},uploadType:{type:String,default:"single"}},emits:["created","update:showModal"],setup(c,{emit:y}){const{t:p}=k(),v=c,r=m(""),s=m(void 0),u=y,l=()=>{(v.uploadType==="single"?a:$)().then(()=>{g({title:p("toasts.success"),message:p("resources.toasts.created"),type:"success"}),u("created"),r.value=""}).catch(()=>{g({title:p("toasts.error"),message:p("resources.toasts.errorCreated"),type:"error"})})},a=()=>ae({name:r.value,file:s.value}),$=()=>ne({file:s.value});return(i,d)=>(b(),j(E,{title:i.$t("resources.titles.createResource"),showModal:c.showModal,onClose:d[2]||(d[2]=h=>i.$emit("update:showModal",!1)),onConfirm:l},{default:D(()=>[f(N,{name:r.value,"onUpdate:name":d[0]||(d[0]=h=>r.value=h),file:s.value,"onUpdate:file":d[1]||(d[1]=h=>s.value=h),fileRequired:!0,uploadType:c.uploadType},null,8,["name","file","uploadType"])]),_:1},8,["title","showModal"]))}}),Ce=_({__name:"Edit",props:{selectedResource:{type:[Object,null],required:!0},showModal:{type:Boolean,required:!0}},emits:["updated","update:selectedResource","update:showModal"],setup(c,{emit:y}){const{t:p}=k(),v=c,r=m(""),s=m(void 0),u=y,l=()=>{a.value&&re({id:a.value.id,name:r.value,file:s.value}).then(()=>{g({title:p("toasts.success"),message:p("resources.toasts.created"),type:"success"}),u("updated"),r.value=""}).catch(()=>{g({title:p("toasts.error"),message:p("resources.toasts.errorCreated"),type:"error"})})},{selectedResource:a}=Y(v),$=()=>{u("update:selectedResource",null),u("update:showModal",!1)};return Z(a,i=>{r.value=(i==null?void 0:i.name)||""}),(i,d)=>(b(),j(E,{title:i.$t("resources.titles.updateResource"),showModal:c.showModal,onClose:$,onConfirm:l},{default:D(()=>[f(N,{name:r.value,"onUpdate:name":d[0]||(d[0]=h=>r.value=h),file:s.value,"onUpdate:file":d[1]||(d[1]=h=>s.value=h)},null,8,["name","file"])]),_:1},8,["title","showModal"]))}}),Me={class:"flex flex-col gap-4 h-full py-2"},xe={class:"flex justify-between"},_e={class:"flex flex-col gap-2"},Re={class:"title"},ke={class:"flex gap-2"},De={class:"flex flex-col gap-2"},Te={for:"filter",class:"title"},Be=["placeholder"],Se={class:"grid grid-cols-2 lg:grid-cols-5 gap-4 overflow-y-auto"},Ue={class:"flex"},qe={type:"button",class:"rounded border-2 transition-colors border-blue-200 hover:border-blue-500 w-full flex flex-col items-center justify-between overflow-hidden aspect-square"},Ve={class:"w-full flex-1 overflow-hidden"},Fe={class:"flex gap-2 w-full h-10 justify-between bg-blue-100 p-2 text-xl md:text-base text-blue-900"},je={class:"font-semibold flex gap-2 flex-1 text-ellipsis overflow-hidden"},Ee=["value"],Ne=["onClick"],Ie=["onClick"],ze=["onClick"],Je=_({__name:"Index",emits:["update:modelValue"],setup(c,{emit:y}){const p=m([]),v=m(!1),r=m(!1),s=m(!1),u=m(!1),l=m(null),{t:a}=k(),$=m("single"),i=m([]),d=m(""),h=ee(()=>p.value.filter(e=>e.name?pe(e.name,d.value):!0)),I=y,z=()=>{$.value="single",v.value=!0},A=()=>{$.value="batch",v.value=!0},L=()=>{r.value=!0},O=e=>{l.value=e,s.value=!0},P=()=>{u.value=!0},M=()=>{ue().then(e=>{p.value=e.data.data})},G=e=>{l.value=e,L()},H=()=>{!l.value||!l.value.id||ie(l.value.id).then(()=>{g({title:a("toasts.success"),message:a("resources.toasts.deleted"),type:"success"}),M()}).catch(()=>{g({title:a("toasts.error"),message:a("resources.toasts.errorDeleted"),type:"error"})})},J=e=>{e.url&&navigator.clipboard.writeText(e.url).then(()=>{g({title:a("toasts.success"),message:a("resources.toasts.urlCopied"),type:"success"})}).catch(()=>{g({title:a("toasts.error"),message:a("resources.toasts.urlErrorCopied"),type:"error"})})},K=()=>{i.value.length!==0&&de(i.value).then(()=>{g({title:a("toasts.success"),message:a("resources.toasts.deleted"),type:"success"}),M(),i.value=[]}).catch(()=>{g({title:a("toasts.error"),message:a("resources.toasts.errorDeleted"),type:"error"})})},Q=e=>{const n=e.target;I("update:modelValue",n.value)};return te(()=>{M()}),(e,n)=>{var T;const W=B("router-link"),R=B("fa-icon");return b(),C(U,null,[t("div",Me,[t("div",xe,[t("div",_e,[t("h1",Re,w(e.$t("resources.titles.resourcesList")),1),t("div",ke,[f(W,{class:"button default",to:{name:"dashboard"}},{default:D(()=>[q(w(e.$t("buttons.back")),1)]),_:1}),t("button",{type:"button",class:"button primary",onClick:z},w(e.$t("resources.buttons.create")),1),t("button",{type:"button",class:"button primary",onClick:A},w(e.$t("resources.buttons.createBatch")),1),i.value.length?(b(),C("button",{key:0,type:"button",onClick:P,class:"button danger"},w(e.$t("buttons.delete")),1)):F("",!0)])]),t("div",De,[t("label",Te,w(e.$t("placeholders.search")),1),S(t("input",{"onUpdate:modelValue":n[0]||(n[0]=o=>d.value=o),onInput:n[1]||(n[1]=o=>e.$emit("update:modelValue",Q)),type:"search",id:"filter",class:"input",placeholder:e.$t("placeholders.search")},null,40,Be),[[se,d.value]])])]),t("ul",Se,[(b(!0),C(U,null,oe(h.value,o=>(b(),C("li",Ue,[t("div",qe,[t("div",Ve,[f(me,{url:o.url},null,8,["url"])]),t("div",Fe,[t("label",je,[S(t("input",{type:"checkbox",class:"form-checkbox",value:o==null?void 0:o.id,"onUpdate:modelValue":n[2]||(n[2]=x=>i.value=x)},null,8,Ee),[[le,i.value]]),q(" "+w(o.name),1)]),t("button",{onClick:x=>J(o)},[f(R,{icon:"link"})],8,Ne),t("button",{onClick:x=>G(o)},[f(R,{icon:"edit"})],8,Ie),t("button",{onClick:x=>O(o)},[f(R,{icon:"trash"})],8,ze)])])]))),256))])]),f($e,{showModal:v.value,"onUpdate:showModal":n[3]||(n[3]=o=>v.value=o),onCreated:M,uploadType:$.value},null,8,["showModal","uploadType"]),f(Ce,{showModal:r.value,"onUpdate:showModal":n[4]||(n[4]=o=>r.value=o),selectedResource:l.value,"onUpdate:selectedResource":n[5]||(n[5]=o=>l.value=o),onUpdated:M},null,8,["showModal","selectedResource"]),f(V,{showDialog:s.value,"onUpdate:showDialog":n[6]||(n[6]=o=>s.value=o),title:e.$t("resources.dialogs.delete.title"),message:e.$t("resources.dialogs.delete.message",{name:((T=l.value)==null?void 0:T.name)||""}),onConfirm:H},null,8,["showDialog","title","message"]),f(V,{showDialog:u.value,"onUpdate:showDialog":n[7]||(n[7]=o=>u.value=o),title:e.$t("resources.dialogs.delete.title"),message:e.$t("resources.dialogs.delete.batchMessage"),onConfirm:K},null,8,["showDialog","title","message"])],64)}}});export{Je as default};