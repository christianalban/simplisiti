const o=t=>t?t.value:"",i=t=>o(t).toLowerCase().trim().replaceAll(" ",""),d=t=>t.map(e=>({data:e})),l=t=>t.match(/(^[a-z_-]*)(\/[a-z_-]+$)/)||[],g=t=>{var e;return((e=l(t)[2])==null?void 0:e.replace(/\//,""))||t},h=(t,e)=>{const r={};return t.reduce((a,s)=>{const n=s.data,u=l(n[e]),c=u&&u[1]?u[1]:"default";return a[c]||(a[c]=[]),a[c].push(n),a},r)},m=(t,e,r)=>{let a=t;const s=Object.keys(e||{}).length;return a+=`?withData=${e!=null&&e.withData?"true":"false"}`,a+=`${s>=1?"&":"?"}withSettings=${e!=null&&e.withSettings?"true":"false"}`,r&&(a+=`${s?"&":"?"}${Object.keys(r).map(n=>`${n}=${r[n]}`).join("&")}`),a},$=()=>window.innerWidth<768;export{m as a,o as b,g as c,h as d,d as g,$ as i,i as v};