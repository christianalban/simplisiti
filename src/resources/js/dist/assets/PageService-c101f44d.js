import{b as e,M as r}from"./index-ecb2e29d.js";import{a as n}from"./helpers-66e66eca.js";const c=async a=>await e.post("page",a),p=async()=>await e.get("page"),i=async(a,t)=>{const s=n(`page/${a}`,t);return await e.get(s)},u=async a=>await e.put(`page/${a.id}`,a),d=async a=>await e.delete(`page/${a}`),w=a=>`${r}/page/${a}/preview`;export{i as a,w as b,c,d,p as g,u};