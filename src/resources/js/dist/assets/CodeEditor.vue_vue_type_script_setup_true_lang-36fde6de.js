import{d as u,b as c,f as r,y as i,z as f,A as p,o as m,c as g}from"./index-36ec2987.js";const v=u({__name:"CodeEditor",props:{code:{type:String,default:""},language:{type:String,default:"html"}},emits:["update:code"],setup(l,{emit:n}){const t=l,s=n,a=c(null);let e=null;r(()=>{a.value&&(e=i.create(a.value,{value:t.code,language:t.language,minimap:{enabled:!1}}),e.onDidChangeModelContent(()=>{s("update:code",e.getValue())}))});const{code:d}=f(t);return p(d,o=>{o!==e.getValue()&&e.setValue(o)}),(o,_)=>(m(),g("div",{class:"w-full h-full",ref_key:"editor",ref:a},null,512))}});export{v as _};