import{d as b,c as v,g as t,D as I,o as g,i as S,t as p,x as k,b as $,u as L,e as A,r as M,a as h,w,m as x,j as C,E as N,k as E,q as V,C as B,F as R,h as T,f as j,s as P}from"./index-63881d29.js";import{_ as z}from"./Modal.vue_vue_type_script_setup_true_lang-f7ab460b.js";const D=["open"],q={class:"w-full"},F=b({__name:"Accordion",props:{title:String,open:Boolean},setup(l){return(u,n)=>(g(),v("details",{open:l.open},[t("summary",q,[I(u.$slots,"title",{},()=>[S(p(l.title),1)])]),I(u.$slots,"default")],8,D))}}),G=async()=>await k.get("plugin/repositories"),H=async()=>await k.get("plugin/packages"),O=async l=>await k.put("plugin/repositories",{repositories:l}),W=async()=>await k.post("plugin/repositories/sync"),J=async l=>await k.post("plugin/packages/install",{name:l}),K=async l=>await k.post("plugin/packages/uninstall",{name:l}),Q={class:"px-4 py-2 flex bg-blue-200 rounded-lg"},X={class:"inline w-full"},Y=["onClick"],Z=["onClick"],ss={class:"ml-2 font-bold"},ts={class:"flex w-full"},ns=["textContent"],es=b({__name:"Sync",props:{consoleLogs:{type:Array,required:!0}},emits:["synced","addLog","clearLogs"],setup(l,{emit:u}){const n=$(!1),e=$("no-synced"),{t:o}=L(),i=$(null),m=u,r=A(()=>{switch(e.value){case"no-synced":return o("plugins.statusSync.sync");case"synced":return o("plugins.statusSync.success");case"syncing":return o("plugins.statusSync.syncing");case"error":return o("plugins.statusSync.error")}}),d=s=>{m("addLog",s)},y=()=>{if(i.value){const s=i.value;s.scrollTop=s.scrollHeight+100}},_=()=>{n.value=!0,e.value="syncing",d(r.value),y(),W().then(s=>{s.data.data.forEach(f=>{d(f)}),e.value="synced",m("synced")}).catch(()=>{e.value="error"}).finally(()=>{n.value=!1,d(r.value),y()})},a=()=>{m("clearLogs")};return(s,f)=>{const c=M("fa-icon");return g(),v("div",Q,[h(F,{class:"w-full"},{title:w(()=>[t("div",X,[t("button",{onClick:x(_,["prevent"]),class:"button secondary small"},[n.value?(g(),C(c,{key:0,class:"animate-spin",icon:"arrows-rotate"})):(g(),C(c,{key:1,icon:"arrow-rotate-right"}))],8,Y),t("button",{onClick:x(a,["prevent"]),class:"ml-2 button default small"},[h(c,{icon:"trash"})],8,Z),t("span",ss,p(r.value),1)])]),default:w(()=>{var U;return[t("div",ts,[t("code",{ref_key:"codeLogs",ref:i,class:"overflow-x-auto w-full h-60 bg-blue-100 mt-2 px-4 py-2 rounded-lg text-xs whitespace-pre-line",textContent:p((U=l.consoleLogs)==null?void 0:U.join(`
`))},null,8,ns)])]}),_:1})])}}}),ls={key:0,class:"flex w-full justify-between items-center hover:bg-gray-100 rounded-lg transition p-4"},os={class:"flex items-end gap-2"},as={class:"title"},is={class:"text-gray-500"},us={class:"text-gray-500 text-sm"},rs={class:"text-gray-500"},cs=["textContent"],ds=b({__name:"PluginItem",props:{plugin:Object},emits:["installing","installed","uninstalling","uninstalled","error"],setup(l,{emit:u}){var a;const{t:n}=L(),e=l,o=u,i=$(((a=e.plugin)==null?void 0:a.status)||"unknown"),m=s=>{o("installing",s),i.value="installing",J(s.name).then(()=>{i.value="enabled",o("installed",s)}).catch(()=>{i.value="not-installed",o("error",s)})},r=s=>{o("uninstalling",s),i.value="uninstalling",K(s.name).then(()=>{i.value="not-installed",o("uninstalled",s)}).catch(()=>{i.value="enabled",o("error",s)})},d=s=>{switch(i.value){case"not-installed":m(s);break;case"enabled":r(s);break}},y={"not-installed":n("plugins.buttons.install"),installing:n("plugins.buttons.installing"),enabled:n("plugins.buttons.uninstall"),uninstalling:n("plugins.buttons.uninstalling"),unknown:n("plugins.buttons.unknown")},_={"not-installed":"primary",enabled:"danger",unknown:"default"};return(s,f)=>l.plugin?(g(),v("div",ls,[t("div",null,[t("div",os,[t("h2",as,p(l.plugin.name),1),S(),t("span",is,p(l.plugin.version),1)]),t("span",us,p(l.plugin.author),1),t("p",rs,p(l.plugin.description),1)]),t("button",{onClick:f[0]||(f[0]=c=>d(l.plugin)),class:N(["w-28 button",_[i.value||"uknown"]]),textContent:p(y[i.value||"uknown"])},null,10,cs)])):E("",!0)}}),gs={class:"flex flex-col overflow-x-auto h-screen"},ps={class:"w-full"},ms=["placeholder"],vs={class:"flex flex-col py-4"},fs={key:0,class:"my-4"},ys={key:1,class:"flex"},hs={class:"text-center text-gray-500"},$s=b({__name:"Wizzard",props:{plugins:Array},emits:["installing","installed","uninstalling","uninstalled","error"],setup(l){const u=$("");return(n,e)=>{var o;return g(),v("div",gs,[t("div",ps,[V(t("input",{type:"search",class:"input","onUpdate:modelValue":e[0]||(e[0]=i=>u.value=i),placeholder:n.$t("plugins.placeholders.searchPlugin")},null,8,ms),[[B,u.value]])]),t("div",vs,[(o=l.plugins)!=null&&o.length?(g(!0),v(R,{key:0},T(l.plugins,(i,m)=>(g(),v("div",{key:i.name},[h(ds,{plugin:i,onInstalling:e[1]||(e[1]=r=>n.$emit("installing",r)),onInstalled:e[2]||(e[2]=r=>n.$emit("installed",r)),onUninstalling:e[3]||(e[3]=r=>n.$emit("uninstalling",r)),onUninstalled:e[4]||(e[4]=r=>n.$emit("uninstalled",r)),onError:e[5]||(e[5]=r=>n.$emit("error",r))},null,8,["plugin"]),m!==l.plugins.length-1?(g(),v("hr",fs)):E("",!0)]))),128)):(g(),v("div",ys,[t("p",hs,p(n.$t("plugins.labels.noPlugins")),1)]))])])}}}),_s={class:"w-96 flex flex-col gap-2"},bs={class:"w-full flex flex-col gap-2"},ks={class:"form-group"},ws=["onUpdate:modelValue"],xs=["onClick"],Ls=["onClick"],Cs=b({__name:"Repositories",props:{title:String,showModal:Boolean},emits:["close"],setup(l,{emit:u}){const n=$([]),{t:e}=L(),o=u,i=()=>{n.value.push({url:""})},m=d=>{n.value.splice(d,1)},r=()=>{O(n.value).then(()=>{o("close"),P({title:e("toasts.success"),message:e("plugins.toasts.repositoriesUpdated"),type:"success"})}).catch(()=>{P({title:e("toasts.error"),message:e("plugins.toasts.errorRepositoriesUpdated"),type:"error"})})};return j(()=>{G().then(d=>{n.value=d.data.data})}),(d,y)=>{const _=M("fa-icon");return g(),C(z,{title:d.$t("plugins.titles.repositories"),showModal:l.showModal,confirmLabel:d.$t("buttons.save"),onClose:y[0]||(y[0]=a=>d.$emit("close")),onConfirm:r},{default:w(()=>[t("div",_s,[t("ul",bs,[(g(!0),v(R,null,T(n.value,(a,s)=>(g(),v("li",ks,[V(t("input",{type:"text",class:"input w-full","onUpdate:modelValue":f=>a.url=f},null,8,ws),[[B,a.url]]),t("button",{class:"button danger",onClick:x(f=>m(s),["prevent"])},[h(_,{icon:"trash"})],8,xs)]))),256))]),t("div",null,[t("button",{class:"button primary flex gap-2 items-center",onClick:x(i,["prevent"])},[h(_,{icon:"plus"}),t("span",null,p(d.$t("plugins.buttons.addRepository")),1)],8,Ls)])])]),_:1},8,["title","showModal","confirmLabel"])}}}),Ps={class:"flex flex-col gap-4 h-screen py-2 overflow-hidden"},Ss={class:"title"},Ms={class:"flex gap-2"},Rs={class:"grid grid-cols-1 gap-4"},Es=b({__name:"Index",setup(l){const{t:u}=L(),n=$(!1),e=$([]),o=$([]),i=()=>{H().then(a=>{e.value=a.data.data}).catch(()=>{P({title:u("toasts.error"),message:u("plugins.toasts.errorGetPackages"),type:"error"})})};j(()=>{i()});const m=({name:a})=>{o.value.push(u("plugins.labels.installingPackage",{name:a}))},r=({name:a})=>{o.value.push(u("plugins.labels.installedPackage",{name:a}))},d=({name:a})=>{o.value.push(u("plugins.labels.uninstallingPackage",{name:a}))},y=({name:a})=>{o.value.push(u("plugins.labels.uninstalledPackage",{name:a}))},_=({name:a})=>{o.value.push(u("plugins.labels.errorInstallingPackage",{name:a}))};return(a,s)=>{const f=M("router-link");return g(),v(R,null,[t("div",Ps,[t("h1",Ss,p(a.$t("plugins.titles.index")),1),t("div",Ms,[h(f,{class:"button default",to:{name:"dashboard"}},{default:w(()=>[S(p(a.$t("buttons.back")),1)]),_:1}),t("button",{class:"button primary ml-auto",onClick:s[0]||(s[0]=c=>n.value=!0)},p(a.$t("plugins.buttons.repositories")),1)]),t("div",Rs,[h(es,{consoleLogs:o.value,onSynced:i,onAddLog:s[1]||(s[1]=c=>o.value.push(c)),onClearLogs:s[2]||(s[2]=c=>o.value=[])},null,8,["consoleLogs"]),h($s,{plugins:e.value,onInstalling:s[3]||(s[3]=c=>m(c)),onInstalled:s[4]||(s[4]=c=>r(c)),onUninstalling:s[5]||(s[5]=c=>d(c)),onUninstalled:s[6]||(s[6]=c=>y(c)),onError:s[7]||(s[7]=c=>_(c))},null,8,["plugins"])])]),h(Cs,{showModal:n.value,onClose:s[8]||(s[8]=c=>n.value=!1)},null,8,["showModal"])],64)}}});export{Es as default};