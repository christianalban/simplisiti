import{d as u,r as h,o as f,c as g,h as t,t as a,a as c,w as i,j as n}from"./index-c5c10336.js";const _={class:"flex justify-between"},p={class:"flex flex-col gap-2"},x={class:"title"},S={class:"flex gap-2"},b={class:"flex flex-col gap-2"},k={for:"filter",class:"title"},v=["value","placeholder"],T=u({__name:"Header",props:{title:String,backName:String,backTitle:String,createName:String,createTitle:String,searchPlaceholder:String,searchTitle:String,modelValue:String},emits:["update:modelValue"],setup(e,{emit:r}){const d=r,m=l=>{const s=l.target;d("update:modelValue",s.value)};return(l,s)=>{const o=h("router-link");return f(),g("div",_,[t("div",p,[t("h1",x,a(e.title),1),t("div",S,[c(o,{class:"button default",to:{name:e.backName}},{default:i(()=>[n(a(e.backTitle),1)]),_:1},8,["to"]),c(o,{class:"button primary",to:{name:e.createName}},{default:i(()=>[n(a(e.createTitle),1)]),_:1},8,["to"])])]),t("div",b,[t("label",k,a(e.searchTitle),1),t("input",{value:e.modelValue,onInput:m,type:"search",id:"filter",class:"input",placeholder:l.$t("placeholders.search")},null,40,v)])])}}});export{T as _};