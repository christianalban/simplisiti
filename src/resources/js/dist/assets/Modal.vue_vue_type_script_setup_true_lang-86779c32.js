import{d as g,r as m,v,x as C,b as c,e as s,t as u,a_ as w,k as h,g as d}from"./index-7e1cc400.js";const k={class:"font-bold"},B={class:"flex justify-end gap-4"},M=["type"],S={key:1,type:"submit",class:"button primary ml-auto",value:"default",formmethod:"dialog"},$=g({__name:"Modal",props:{title:{type:String,required:!0},showModal:{type:Boolean,required:!0},showCancel:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},resetOnClose:{type:Boolean,default:!0},cancelLabel:String,confirmLabel:String},emits:["update:showModal","close","confirm","cancel"],setup(o,{emit:p}){const n=o,i=m(null),a=p,l=m(null),{showModal:y}=v(n),b=()=>{var e,t;a("update:showModal",!1),a("close"),((e=l.value)==null?void 0:e.returnValue)==="default"?a("confirm"):a("cancel"),n.resetOnClose&&((t=i.value)==null||t.reset())};return C(y,e=>{var t,r;e?(t=l.value)==null||t.showModal():(r=l.value)==null||r.close()}),(e,t)=>(d(),c("dialog",{ref_key:"modal",ref:l,class:"p-4 rounded-lg",onClose:b},[s("form",{class:"flex flex-col gap-4",ref_key:"form",ref:i},[s("span",k,u(n.title),1),s("div",null,[w(e.$slots,"default")]),s("div",B,[o.showCancel?(d(),c("button",{key:0,type:o.resetOnClose?"reset":"button",value:"cancel",class:"button danger",formmethod:"dialog",onClick:t[0]||(t[0]=r=>{var f;return(f=l.value)==null?void 0:f.close("cancel")})},u(o.cancelLabel||e.$t("buttons.cancel")),9,M)):h("",!0),o.showConfirm?(d(),c("button",S,u(o.confirmLabel||e.$t("buttons.confirm")),1)):h("",!0)])],512)],544))}});export{$ as _};