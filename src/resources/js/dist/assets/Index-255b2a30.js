import{c as N,a as E,g as I,d as V}from"./ResourceService-8e747c27.js";import{v as L}from"./helpers-66e66eca.js";import{d as y,o as _,c as M,h as s,t as w,n as O,u as C,e as c,k as U,w as R,s as b,a as d,C as T,D as z,g as P,r as D,F as q,i as A,j as G}from"./index-bc76539c.js";import{_ as B}from"./Modal.vue_vue_type_script_setup_true_lang-6a95c102.js";import{_ as H}from"./Dialog.vue_vue_type_script_setup_true_lang-28cbc353.js";import{R as J}from"./ResourcePreview-a544fe54.js";const K={class:"flex flex-col gap-4"},Q={class:"flex flex-col gap-2 w-full"},W={class:"label"},X=["value","placeholder"],Y={class:"flex flex-col gap-2 w-full"},Z={class:"label"},ee=["required","placeholder"],j=y({__name:"Form",props:{name:{type:String,required:!0},file:{type:[Object,null],default:null},fileRequired:{type:Boolean,default:!1}},emits:["update:name","update:file"],setup(p,{emit:f}){const o=f,a=e=>{var t;e&&o("update:file",((t=e.files)==null?void 0:t[0])??null)};return(e,t)=>(_(),M("div",K,[s("div",Q,[s("label",W,w(e.$t("resources.labels.resourceName")),1),s("input",{type:"text",value:p.name,required:"",onInput:t[0]||(t[0]=l=>e.$emit("update:name",O(L)(l.target))),class:"input",placeholder:e.$t("resources.placeholders.resourceName")},null,40,X)]),s("div",Y,[s("label",Z,w(e.$t("resources.labels.resourceFile")),1),s("input",{type:"file",required:p.fileRequired,onChange:t[1]||(t[1]=l=>a(l.target)),class:"input",placeholder:e.$t("resources.placeholders.resourceFile"),accept:"image/jpeg,image/svg+xml,image/png,image/webp,video/mp4,application/pdf,image/gif,application/vnd.rar,application/x-7z-compressed,font/woff,font/woff2,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,font/ttf,image/vnd.microsoft.icon"},null,40,ee)])]))}}),te=y({__name:"Create",props:{showModal:{type:Boolean,required:!0}},emits:["created","update:showModal"],setup(p,{emit:f}){const{t:o}=C(),a=c(""),e=c(void 0),t=f,l=()=>{N({name:a.value,file:e.value}).then(()=>{b({title:o("toasts.success"),message:o("resources.toasts.created"),type:"success"}),t("created"),a.value=""}).catch(()=>{b({title:o("toasts.error"),message:o("resources.toasts.errorCreated"),type:"error"})})};return(h,r)=>(_(),U(B,{title:h.$t("resources.titles.createResource"),showModal:p.showModal,onClose:r[2]||(r[2]=m=>h.$emit("update:showModal",!1)),onConfirm:l},{default:R(()=>[d(j,{name:a.value,"onUpdate:name":r[0]||(r[0]=m=>a.value=m),file:e.value,"onUpdate:file":r[1]||(r[1]=m=>e.value=m),fileRequired:!0},null,8,["name","file"])]),_:1},8,["title","showModal"]))}}),se=y({__name:"Edit",props:{selectedResource:{type:Object,required:!0},showModal:{type:Boolean,required:!0}},emits:["updated","update:selectedResource","update:showModal"],setup(p,{emit:f}){const{t:o}=C(),a=p,e=c(""),t=c(void 0),l=f,h=()=>{r.value&&E({id:r.value.id,name:e.value,file:t.value}).then(()=>{b({title:o("toasts.success"),message:o("resources.toasts.created"),type:"success"}),l("updated"),e.value=""}).catch(()=>{b({title:o("toasts.error"),message:o("resources.toasts.errorCreated"),type:"error"})})},{selectedResource:r}=T(a),m=()=>{l("update:selectedResource",null),l("update:showModal",!1)};return z(r,i=>{e.value=(i==null?void 0:i.name)||""}),(i,g)=>(_(),U(B,{title:i.$t("resources.titles.updateResource"),showModal:p.showModal,onClose:m,onConfirm:h},{default:R(()=>[d(j,{name:e.value,"onUpdate:name":g[0]||(g[0]=$=>e.value=$),file:t.value,"onUpdate:file":g[1]||(g[1]=$=>t.value=$)},null,8,["name","file"])]),_:1},8,["title","showModal"]))}}),oe={class:"flex flex-col gap-4 h-full overflow-y-auto py-2"},le={class:"title"},ae={class:"flex gap-2"},re={class:"grid grid-cols-2 md:grid-cols-5 gap-4"},ne={class:"flex"},ue={type:"button",class:"rounded border border-blue-200 w-full flex flex-col items-center justify-between overflow-hidden"},ie={class:"flex w-full justify-between bg-blue-100 p-2 text-xl md:text-base text-blue-900"},de={class:"font-semibold"},ce={class:"flex gap-2"},pe=["onClick"],fe=["onClick"],be=y({__name:"Index",setup(p){const f=c([]),o=c(!1),a=c(!1),e=c(!1),t=c(null),{t:l}=C(),h=()=>{o.value=!0},r=()=>{a.value=!0},m=u=>{t.value=u,e.value=!0},i=()=>{I().then(u=>{f.value=u.data.data})},g=u=>{t.value=u,r()},$=()=>{!t.value||!t.value.id||V(t.value.id).then(()=>{b({title:l("toasts.success"),message:l("resources.toasts.deleted"),type:"success"}),i()}).catch(()=>{b({title:l("toasts.error"),message:l("resources.toasts.errorDeleted"),type:"error"})})};return P(()=>{i()}),(u,v)=>{var k;const F=D("router-link"),x=D("fa-icon");return _(),M(q,null,[s("div",oe,[s("h1",le,w(u.$t("resources.titles.resourcesList")),1),s("div",ae,[d(F,{class:"button default",to:{name:"dashboard"}},{default:R(()=>[G(w(u.$t("buttons.back")),1)]),_:1}),s("button",{type:"button",class:"button primary",onClick:h},w(u.$t("resources.buttons.create")),1)]),s("ul",re,[(_(!0),M(q,null,A(f.value,n=>(_(),M("li",ne,[s("div",ue,[d(J,{url:n.url},null,8,["url"]),s("div",ie,[s("span",de,w(n.name),1),s("div",ce,[s("button",{onClick:S=>g(n)},[d(x,{icon:"edit"})],8,pe),s("button",{onClick:S=>m(n)},[d(x,{icon:"trash"})],8,fe)])])])]))),256))])]),d(te,{showModal:o.value,"onUpdate:showModal":v[0]||(v[0]=n=>o.value=n),onCreated:i},null,8,["showModal"]),d(se,{showModal:a.value,"onUpdate:showModal":v[1]||(v[1]=n=>a.value=n),selectedResource:t.value,"onUpdate:selectedResource":v[2]||(v[2]=n=>t.value=n),onUpdated:i},null,8,["showModal","selectedResource"]),d(H,{showDialog:e.value,"onUpdate:showDialog":v[3]||(v[3]=n=>e.value=n),title:u.$t("resources.dialogs.delete.title"),message:u.$t("resources.dialogs.delete.message",{name:((k=t.value)==null?void 0:k.name)||""}),onConfirm:$},null,8,["showDialog","title","message"])],64)}}});export{be as default};