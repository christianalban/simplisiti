import{e as S,b as r,bG as f}from"./index-9625683f.js";const P=S([]),L=async e=>await r.post("page",e),v=async()=>await r.get("page"),R=async(e,t)=>{const n=U(`page/${e}`,t);return await r.get(n)},x=async e=>await r.put(`page/${e.id}`,e),j=async e=>await r.delete(`page/${e}`),F=async e=>await r.post(`page/${e}/clone`),y=e=>`/page/${e}/preview`,N=e=>`${f}/page/editor/${e}/engine/`,m=e=>`/page/plugin/${e}/preview`,O=async(e,t)=>await r.post(`page/component/preview?component=${e}`,{content:t}),C=async()=>{const e=await v();P.value=e.data.data},k=()=>({pages:P,loadPages:C}),h=e=>e?e.value:"",z=e=>{let t="";return typeof e=="string"?t=e:t=h(e),t.toLowerCase().trim().replaceAll(" ","")},B=e=>e.map(t=>({data:t})),$=e=>e.match(/(^[0-9a-z_-]*)(\/[0-9a-z_-]+$)/)||[],b=e=>{var t;return((t=$(e)[2])==null?void 0:t.replace(/\//,""))||e},D=e=>b(e),K=(e,t)=>e.toLowerCase().includes(t.toLowerCase()),_=(e,t)=>{const n={};return e.reduce((a,o)=>{const w=o.data,g=$(w[t]),d=g&&g[1]?g[1]:"default";return a[d]||(a[d]=[]),a[d].push(w),a},n)},A=(e,t,n)=>e.filter(s=>s.data[n].toLowerCase().includes(t.toLowerCase())),U=(e,t,n)=>{let s=e;const a=Object.keys(t||{}).length;return s+=`?withData=${t!=null&&t.withData?"true":"false"}`,s+=`${a>=1?"&":"?"}withSettings=${t!=null&&t.withSettings?"true":"false"}`,n&&(s+=`${a?"&":"?"}${Object.keys(n).map(o=>`${o}=${n[o]}`).join("&")}`),s},G=()=>window.innerWidth<768;let c,l;const I=async()=>{if(c&&l){const a=p(c),o=p(l);return[a,o]}c=document.createElement("style"),l=document.createElement("script");const e=y("style"),t=await r.get(e),n=y("script"),s=await r.get(n);return c.textContent=t.data,l.textContent=s.data,[c,l]},p=e=>e.cloneNode(!0);let i,u;const M=async()=>{if(i&&u){const a=p(i),o=p(u);return[a,o]}i=document.createElement("style"),u=document.createElement("script");const e=m("style"),t=await r.get(e),n=m("script"),s=await r.get(n);return i.textContent=t.data,u.textContent=s.data,[i,u]},Q=()=>{u=null,i=null,c=null,l=null};export{B as a,I as b,Q as c,b as d,U as e,F as f,v as g,K as h,L as i,R as j,j as k,M as l,x as m,G as n,h as o,D as p,A as q,_ as r,O as s,N as t,k as u,z as v};