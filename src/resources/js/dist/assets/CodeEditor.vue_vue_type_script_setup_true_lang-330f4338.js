import{d as r,r as u,o as c,bF as i,v as f,x as p,b as g,g as m}from"./index-7e1cc400.js";const v=r({__name:"CodeEditor",props:{code:{type:String,default:""},language:{type:String,default:"html"}},emits:["update:code"],setup(l,{emit:n}){const t=l,s=n,a=u(null);let e=null;c(()=>{a.value&&(e=i.create(a.value,{value:t.code,language:t.language,minimap:{enabled:!1}}),e.onDidChangeModelContent(()=>{s("update:code",e.getValue())}))});const{code:d}=f(t);return p(d,o=>{o!==e.getValue()&&e.setValue(o)}),(o,_)=>(m(),g("div",{class:"w-full h-full",ref_key:"editor",ref:a},null,512))}});export{v as _};