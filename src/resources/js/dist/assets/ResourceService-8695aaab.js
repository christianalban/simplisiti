import{e as o,b as t}from"./index-5f5f7cb7.js";const d=async e=>{if(!e.file)throw new Error("File is required");const a=new FormData;return a.append("file",e.file),a.append("name",e.name||""),await t.post("resource",a)},f=async e=>{if(!e.file)throw new Error("Files are required");const a=new FormData;return e.file.forEach(s=>{a.append("file[]",s)}),await t.post("resource/batch",a)},n=async()=>await t.get("resource"),p=async e=>{const a=new FormData;return a.append("name",e.name||""),a.append("_method","PUT"),e.file&&a.append("file",e.file),await t.post(`resource/${e.id}`,a)},l=async e=>await t.delete(`resource/${e}`),r=o([]),c=async()=>{const e=await n();r.value=e.data.data},i=e=>r.value.find(a=>a.id===e),m=()=>({resources:r,loadResources:c,resourceFromId:i});export{f as a,p as b,d as c,l as d,n as g,m as u};