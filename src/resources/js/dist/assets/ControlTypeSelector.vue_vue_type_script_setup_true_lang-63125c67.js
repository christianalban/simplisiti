import{e as M,b as P,d as U,o as l,c as r,h as t,t as h,f as B,r as G,a as C,v as F,w as H,y as Y,j as z,z as Z,G as ee,F as S,i as E,g as te,D as I,k as T,l as q,M as oe,n as x,C as le}from"./index-fa07b5a0.js";import{_ as J}from"./Modal.vue_vue_type_script_setup_true_lang-cda63354.js";import{u as ae}from"./ResourceService-63ff442d.js";import{R as O}from"./ResourcePreview-4992d2f9.js";import{v as se}from"./helpers-73a2380c.js";const K=M([]),ne=async()=>await P.get("source"),ue=async()=>{const u=await ne();K.value=u.data.data},re=()=>({sources:K,loadSources:ue}),Q=M([]),ce=async()=>await P.get("action"),de=async()=>{const u=await ce();Q.value=u.data.data},ie=()=>({actions:Q,loadActions:de}),me=["value"],pe={value:"text"},fe={value:"textarea"},ve={value:"resource"},he={value:"datatable"},ye={value:"datasource"},$e={value:"action"},Ve=U({__name:"VariableTypeSelector",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(u){const _=s=>s.target.value;return(s,d)=>(l(),r("select",{class:"input",value:u.modelValue,onChange:d[0]||(d[0]=m=>s.$emit("update:modelValue",_(m)))},[t("option",pe,h(s.$t("components.types.text")),1),t("option",fe,h(s.$t("components.types.textarea")),1),t("option",ve,h(s.$t("components.types.resource")),1),t("option",he,h(s.$t("components.types.datatable")),1),t("option",ye,h(s.$t("components.types.datasource")),1),t("option",$e,h(s.$t("components.types.action")),1)],40,me))}}),_e={class:"button secondary flex gap-2 w-full flex-col justify-center !p-1 relative items-center"},ge={class:"w-full flex items-center justify-center max-h-full"},be={class:"h-full w-full flex"},we=["onClick"],Ce={class:"flex flex-col md:flex-row gap-2 justify-between mb-4"},ke=["placeholder"],Se={class:"grid grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto max-h-[70vh]"},Re={class:"button primary flex flex-col gap-2 justify-center items-center"},xe=["onClick"],Me={class:"text-sm italic"},je=U({__name:"ResourcePicker",props:{modelValue:{required:!0}},emits:["update:modelValue"],setup(u,{emit:_}){const s=u,d=M(!1),m=M(""),p=M(!1),{resources:c,loadResources:n,resourceFromId:R}=ae(),g=B(()=>c.value.filter($=>{var k;return(k=$.name)==null?void 0:k.toLowerCase().includes(m.value.toLowerCase())})),b=B(()=>{if(!(s.modelValue===void 0||s.modelValue===null))return R(+s.modelValue)}),f=_,v=()=>{d.value=!0},y=$=>{f("update:modelValue",$),d.value=!1},L=()=>{p.value=!0,n().finally(()=>{p.value=!1})};return($,k)=>{var D;const N=G("fa-icon");return l(),r(S,null,[t("div",_e,[t("div",ge,[t("div",be,[C(O,{url:(D=b.value)==null?void 0:D.url},null,8,["url"])])]),t("button",{type:"button",onClick:F(v,["stop"]),class:"absolute bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg text-white text-xs p-1 bg-opacity-75"},h(b.value?$.$t("components.buttons.changeResource"):$.$t("components.buttons.selectResource")),9,we)]),C(J,{title:$.$t("components.titles.selectResource"),showModal:d.value,"onUpdate:showModal":k[1]||(k[1]=V=>d.value=V),showCancel:!1,confirmLabel:$.$t("buttons.close")},{default:H(()=>[t("div",Ce,[t("button",{type:"button",onClick:L,class:"button secondary"},[C(N,{icon:"sync",class:Y({"animate-spin":p.value})},null,8,["class"]),z(" "+h($.$t("resources.buttons.refresh")),1)]),Z(t("input",{type:"search","onUpdate:modelValue":k[0]||(k[0]=V=>m.value=V),class:"input",placeholder:$.$t("placeholders.search")},null,8,ke),[[ee,m.value]])]),t("div",Se,[(l(!0),r(S,null,E(g.value,V=>(l(),r("div",Re,[C(O,{url:V.url},null,8,["url"]),t("p",{onClick:F(e=>y(V.id),["stop"]),class:"hover:underline cursor-pointer"},[z(h(V.name)+" ",1),t("span",Me,"("+h($.$t("resources.buttons.use"))+")",1)],8,xe)]))),256))])]),_:1},8,["title","showModal","confirmLabel"])],64)}}}),qe={class:"overflow-y-auto h-[70vh]"},De={class:"w-full relative"},Ee={class:"sticky top-0 z-10"},Ue={class:"flex"},Te={class:"w-full form-group"},Le=["value","onInput","placeholder","readonly"],Ne=["onClick"],Be={class:"sticky top-0 z-10"},Ie={class:"flex justify-center"},Ae={class:"flex"},Fe={class:"flex flex-col gap-1"},ze=["onClick"],Oe=U({__name:"DataTable",props:{modelValue:{required:!0},name:{type:String,required:!1},editStructure:{type:Boolean,default:!0}},emits:["update:model-value"],setup(u,{emit:_}){const s=u,d=[],m=({type:e,name:o}={type:"text",name:""})=>{let a="";return e==="datatable"&&(a={columns:[p()],rows:[[m()]]}),{name:o,type:e,value:"",default:a}},p=(e="text")=>({name:"",type:e}),c=M([p()]),n=M([[m()]]),R=M(!1),g=_,b=()=>{R.value=!0},f=()=>{g("update:model-value",{columns:c.value,rows:n.value}),R.value=!1},v=(e,o,a)=>{o.type=a,n.value.forEach(i=>{i[e].type=o.type})},y=(e,o,a)=>{o.name=se(a),n.value.forEach(i=>{i[e].name=o.name})},L=()=>{c.value.push(p()),n.value.forEach(e=>{e.push(m())})},$=()=>{const e=[];c.value.forEach(({type:o,name:a})=>{e.push(m({type:o,name:a}))}),n.value.push(e),V()},k=e=>{c.value.splice(e,1),n.value.forEach(o=>{o.splice(e,1)})},N=e=>{n.value.splice(e,1)},D=()=>{n.value[0].forEach((e,o)=>{var a;e.type==="datatable"&&typeof e.default=="object"&&(d[o]=((a=e.default)==null?void 0:a.columns)||[p()])})},V=()=>{n.value.forEach(e=>{e.forEach((o,a)=>{var i;o.type==="datatable"&&o.default&&typeof o.default=="object"&&(o.default.columns=d[a]),o.name=((i=c.value[a])==null?void 0:i.name)||""})})};return te(()=>{if(s.modelValue&&typeof s.modelValue=="object"){const e=s.modelValue;c.value=e.columns,n.value=e.rows,n.value.length&&(D(),V())}}),I(()=>s.modelValue,e=>{if(e&&typeof e=="object"){const o=s.modelValue;c.value=o.columns,n.value=o.rows,n.value.length&&(D(),V())}}),I(c,e=>{n.value.forEach(o=>{for(let a=0;a<e.length;a++)e[a]||o.splice(a,1);e.forEach((a,i)=>{(!o[i]||o[i].type!==a.type)&&(o[i]=m({type:a.type,name:a.name}))})}),oe(()=>{D(),V()})},{deep:!0}),(e,o)=>{const a=G("fa-icon");return l(),r(S,null,[t("button",{onClick:b,type:"button",class:"button secondary flex items-center justify-center gap-2 w-full"},[t("span",null,h(e.$t("components.buttons.fillData")),1)]),C(J,{title:e.$t("components.titles.fillData"),showModal:R.value,"onUpdate:showModal":o[0]||(o[0]=i=>R.value=i),showCancel:!1,confirmLabel:e.$t("buttons.close"),resetOnClose:!1,onConfirm:f},{default:H(()=>[t("div",qe,[t("table",De,[t("thead",null,[t("tr",null,[(l(!0),r(S,null,E(c.value,(i,j)=>(l(),r("th",Ee,[t("div",Ue,[t("div",Te,[t("input",{class:"input w-full",type:"text",value:i.name,onInput:w=>y(j,i,w.target),placeholder:e.$t("components.placeholders.dataName"),readonly:!u.editStructure},null,40,Le),u.editStructure?(l(),T(Ve,{key:0,class:"w-5",modelValue:i.type,"onUpdate:modelValue":w=>v(j,i,w)},null,8,["modelValue","onUpdate:modelValue"])):q("",!0),c.value.length>1&&u.editStructure?(l(),r("button",{key:1,type:"button",class:"button danger",onClick:w=>k(j)},[C(a,{icon:"minus"})],8,Ne)):q("",!0)])])]))),256)),t("th",Be,[t("div",Ie,[c.value.length>=1&&u.editStructure?(l(),r("button",{key:0,type:"button",class:"button primary",onClick:L},[C(a,{icon:"plus"})])):q("",!0)])])])]),t("tbody",null,[(l(!0),r(S,null,E(n.value,(i,j)=>(l(),r("tr",{key:`${j}:${u.name}`},[(l(!0),r(S,null,E(i,(w,W)=>{var A;return l(),r("td",{key:`${u.name}:${(A=c.value[W])==null?void 0:A.name}:${w.name}`},[t("div",Ae,[C(et,{modelValue:w.default,"onUpdate:modelValue":X=>w.default=X,"edit-structure":u.editStructure,name:w.name,type:w.type},null,8,["modelValue","onUpdate:modelValue","edit-structure","name","type"])])])}),128)),t("td",null,[t("div",Fe,[n.value.length>1?(l(),r("button",{key:0,type:"button",class:"button danger",onClick:w=>N(j)},[C(a,{icon:"minus"})],8,ze)):q("",!0),j==n.value.length-1?(l(),r("button",{key:1,type:"button",class:"button secondary",onClick:$},[C(a,{icon:"plus"})])):q("",!0)])])]))),128))])])])]),_:1},8,["title","showModal","confirmLabel"])],64)}}}),Pe=["value"],Ge={value:""},He=["value"],Je=U({__name:"DataSource",props:{modelValue:{required:!0},name:{type:String,required:!1}},emits:["update:model-value"],setup(u,{emit:_}){const{sources:s}=re(),d=_,m=p=>{const c=p.target;d("update:model-value",c.value)};return(p,c)=>(l(),r("select",{class:"input w-full",onChange:m,value:u.modelValue},[t("option",Ge,h(p.$t("placeholders.select")),1),(l(!0),r(S,null,E(x(s),n=>(l(),r("option",{value:n.name},h(n.name),9,He))),256))],40,Pe))}}),Ke=["value"],Qe={value:""},We=["value"],Xe=U({__name:"Action",props:{modelValue:{required:!0},name:{type:String,required:!1}},emits:["update:model-value"],setup(u,{emit:_}){const{actions:s}=ie(),d=_,m=p=>{const c=p.target;d("update:model-value",c.value)};return(p,c)=>(l(),r("select",{class:"input w-full",onChange:m,value:u.modelValue},[t("option",Qe,h(p.$t("placeholders.select")),1),(l(!0),r(S,null,E(x(s),n=>(l(),r("option",{value:n.name},h(n.name),9,We))),256))],40,Ke))}}),Ye=["value","placeholder"],Ze=["placeholder"],et=U({__name:"ControlTypeSelector",props:{type:{type:String,required:!0},modelValue:{required:!0},name:{type:String,required:!0},defaultValue:{type:[String,Number,Object,null,void 0]},class:{type:String},editStructure:{type:Boolean,default:!0}},emits:["update:model-value"],setup(u,{emit:_}){const s=u,d=_,m=f=>{d("update:model-value",f.target.value)},p=f=>{d("update:model-value",f)},c=f=>{d("update:model-value",f)},n=f=>{d("update:model-value",f)},R=f=>{d("update:model-value",f)},{type:g}=le(s),b=B(()=>s.modelValue||s.defaultValue);return I(g,f=>{d("update:model-value",f==="datatable"?{columns:[{name:"",type:"text"}],rows:[[{}]]}:"")}),(f,v)=>(l(),r(S,null,[x(g)==="text"?(l(),r("input",{key:0,type:"text",class:"input w-full",value:b.value,onInput:v[0]||(v[0]=y=>m(y)),placeholder:f.$t("components.placeholders.defaultValue")},null,40,Ye)):q("",!0),x(g)==="textarea"?(l(),r("textarea",{key:1,class:"input w-full",onInput:v[1]||(v[1]=y=>m(y)),placeholder:f.$t("components.placeholders.defaultValue")},h(b.value),41,Ze)):x(g)==="resource"?(l(),T(je,{key:2,modelValue:b.value,"onUpdate:modelValue":v[2]||(v[2]=y=>p(y))},null,8,["modelValue"])):x(g)==="datatable"?(l(),T(Oe,{key:3,editStructure:u.editStructure,name:u.name,modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=y=>c(y))},null,8,["editStructure","name","modelValue"])):x(g)==="datasource"?(l(),T(Je,{key:4,name:u.name,modelValue:b.value,"onUpdate:modelValue":v[4]||(v[4]=y=>n(y))},null,8,["name","modelValue"])):x(g)==="action"?(l(),T(Xe,{key:5,name:u.name,modelValue:b.value,"onUpdate:modelValue":v[5]||(v[5]=y=>R(y))},null,8,["name","modelValue"])):q("",!0)],64))}});export{Ve as _,et as a,ie as b,re as u};