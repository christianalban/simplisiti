import{x as $,d as _,b,u as L,e as j,r as M,o as g,c as f,a as h,w,g as t,n as x,j as C,t as p,i as U,D as N,k as I,q as V,C as E,F as S,h as B,f as T,s as P}from"./index-f5429b37.js";import{_ as z}from"./Accordion.vue_vue_type_script_setup_true_lang-cd6c0e5a.js";import{_ as A}from"./Modal.vue_vue_type_script_setup_true_lang-865ffb59.js";const D=async()=>await $.get("plugin/repositories"),q=async()=>await $.get("plugin/packages"),F=async i=>await $.put("plugin/repositories",{repositories:i}),G=async()=>await $.post("plugin/repositories/sync"),H=async i=>await $.post("plugin/packages/install",{name:i}),O=async i=>await $.post("plugin/packages/uninstall",{name:i}),W={class:"px-4 py-2 flex bg-blue-200 rounded-lg"},J={class:"inline w-full"},K=["onClick"],Q=["onClick"],X={class:"ml-2 font-bold"},Y={class:"flex w-full"},Z=["textContent"],ss=_({__name:"Sync",props:{consoleLogs:{type:Array,required:!0}},emits:["synced","addLog","clearLogs"],setup(i,{emit:c}){const n=b(!1),e=b("no-synced"),{t:l}=L(),a=b(null),m=c,u=j(()=>{switch(e.value){case"no-synced":return l("plugins.statusSync.sync");case"synced":return l("plugins.statusSync.success");case"syncing":return l("plugins.statusSync.syncing");case"error":return l("plugins.statusSync.error")}}),d=s=>{m("addLog",s)},y=()=>{if(a.value){const s=a.value;s.scrollTop=s.scrollHeight+100}},k=()=>{n.value=!0,e.value="syncing",d(u.value),y(),G().then(s=>{s.data.data.forEach(v=>{d(v)}),e.value="synced",m("synced")}).catch(()=>{e.value="error"}).finally(()=>{n.value=!1,d(u.value),y()})},o=()=>{m("clearLogs")};return(s,v)=>{const r=M("fa-icon");return g(),f("div",W,[h(z,{class:"w-full"},{title:w(()=>[t("div",J,[t("button",{onClick:x(k,["prevent"]),class:"button secondary small"},[n.value?(g(),C(r,{key:0,class:"animate-spin",icon:"arrows-rotate"})):(g(),C(r,{key:1,icon:"arrow-rotate-right"}))],8,K),t("button",{onClick:x(o,["prevent"]),class:"ml-2 button default small"},[h(r,{icon:"trash"})],8,Q),t("span",X,p(u.value),1)])]),default:w(()=>{var R;return[t("div",Y,[t("code",{ref_key:"codeLogs",ref:a,class:"overflow-x-auto w-full h-60 bg-blue-100 mt-2 px-4 py-2 rounded-lg text-xs whitespace-pre-line",textContent:p((R=i.consoleLogs)==null?void 0:R.join(`
`))},null,8,Z)])]}),_:1})])}}}),ts={key:0,class:"flex w-full justify-between items-center hover:bg-gray-100 rounded-lg transition p-4"},ns={class:"flex items-end gap-2"},es={class:"title"},ls={class:"text-gray-500"},os={class:"text-gray-500 text-sm"},as={class:"text-gray-500"},is=["textContent"],us=_({__name:"PluginItem",props:{plugin:Object},emits:["installing","installed","uninstalling","uninstalled","error"],setup(i,{emit:c}){var o;const{t:n}=L(),e=i,l=c,a=b(((o=e.plugin)==null?void 0:o.status)||"unknown"),m=s=>{l("installing",s),a.value="installing",H(s.name).then(()=>{a.value="enabled",l("installed",s)}).catch(()=>{a.value="not-installed",l("error",s)})},u=s=>{l("uninstalling",s),a.value="uninstalling",O(s.name).then(()=>{a.value="not-installed",l("uninstalled",s)}).catch(()=>{a.value="enabled",l("error",s)})},d=s=>{switch(a.value){case"not-installed":m(s);break;case"enabled":u(s);break}},y={"not-installed":n("plugins.buttons.install"),installing:n("plugins.buttons.installing"),enabled:n("plugins.buttons.uninstall"),uninstalling:n("plugins.buttons.uninstalling"),unknown:n("plugins.buttons.unknown")},k={"not-installed":"primary",enabled:"danger",unknown:"default"};return(s,v)=>i.plugin?(g(),f("div",ts,[t("div",null,[t("div",ns,[t("h2",es,p(i.plugin.name),1),U(),t("span",ls,p(i.plugin.version),1)]),t("span",os,p(i.plugin.author),1),t("p",as,p(i.plugin.description),1)]),t("button",{onClick:v[0]||(v[0]=r=>d(i.plugin)),class:N(["w-28 button",k[a.value||"uknown"]]),textContent:p(y[a.value||"uknown"])},null,10,is)])):I("",!0)}}),rs={class:"flex flex-col overflow-x-auto h-screen"},cs={class:"w-full"},ds=["placeholder"],gs={class:"flex flex-col py-4"},ps={key:0,class:"my-4"},ms={key:1,class:"flex"},vs={class:"text-center text-gray-500"},fs=_({__name:"Wizzard",props:{plugins:Array},emits:["installing","installed","uninstalling","uninstalled","error"],setup(i){const c=b("");return(n,e)=>{var l;return g(),f("div",rs,[t("div",cs,[V(t("input",{type:"search",class:"input","onUpdate:modelValue":e[0]||(e[0]=a=>c.value=a),placeholder:n.$t("plugins.placeholders.searchPlugin")},null,8,ds),[[E,c.value]])]),t("div",gs,[(l=i.plugins)!=null&&l.length?(g(!0),f(S,{key:0},B(i.plugins,(a,m)=>(g(),f("div",{key:a.name},[h(us,{plugin:a,onInstalling:e[1]||(e[1]=u=>n.$emit("installing",u)),onInstalled:e[2]||(e[2]=u=>n.$emit("installed",u)),onUninstalling:e[3]||(e[3]=u=>n.$emit("uninstalling",u)),onUninstalled:e[4]||(e[4]=u=>n.$emit("uninstalled",u)),onError:e[5]||(e[5]=u=>n.$emit("error",u))},null,8,["plugin"]),m!==i.plugins.length-1?(g(),f("hr",ps)):I("",!0)]))),128)):(g(),f("div",ms,[t("p",vs,p(n.$t("plugins.labels.noPlugins")),1)]))])])}}}),ys={class:"w-96 flex flex-col gap-2"},hs={class:"w-full flex flex-col gap-2"},bs={class:"form-group"},ks=["onUpdate:modelValue"],$s=["onClick"],_s=["onClick"],ws=_({__name:"Repositories",props:{title:String,showModal:Boolean},emits:["close"],setup(i,{emit:c}){const n=b([]),{t:e}=L(),l=c,a=()=>{n.value.push({url:""})},m=d=>{n.value.splice(d,1)},u=()=>{F(n.value).then(()=>{l("close"),P({title:e("toasts.success"),message:e("plugins.toasts.repositoriesUpdated"),type:"success"})}).catch(()=>{P({title:e("toasts.error"),message:e("plugins.toasts.errorRepositoriesUpdated"),type:"error"})})};return T(()=>{D().then(d=>{n.value=d.data.data})}),(d,y)=>{const k=M("fa-icon");return g(),C(A,{title:d.$t("plugins.titles.repositories"),showModal:i.showModal,confirmLabel:d.$t("buttons.save"),onClose:y[0]||(y[0]=o=>d.$emit("close")),onConfirm:u},{default:w(()=>[t("div",ys,[t("ul",hs,[(g(!0),f(S,null,B(n.value,(o,s)=>(g(),f("li",bs,[V(t("input",{type:"text",class:"input w-full","onUpdate:modelValue":v=>o.url=v},null,8,ks),[[E,o.url]]),t("button",{class:"button danger",onClick:x(v=>m(s),["prevent"])},[h(k,{icon:"trash"})],8,$s)]))),256))]),t("div",null,[t("button",{class:"button primary flex gap-2 items-center",onClick:x(a,["prevent"])},[h(k,{icon:"plus"}),t("span",null,p(d.$t("plugins.buttons.addRepository")),1)],8,_s)])])]),_:1},8,["title","showModal","confirmLabel"])}}}),xs={class:"flex flex-col gap-4 h-screen py-2 overflow-hidden"},Ls={class:"title"},Cs={class:"flex gap-2"},Ps={class:"grid grid-cols-1 gap-4"},Us=_({__name:"Index",setup(i){const{t:c}=L(),n=b(!1),e=b([]),l=b([]),a=()=>{q().then(o=>{e.value=o.data.data}).catch(()=>{P({title:c("toasts.error"),message:c("plugins.toasts.errorGetPackages"),type:"error"})})};T(()=>{a()});const m=({name:o})=>{l.value.push(c("plugins.labels.installingPackage",{name:o}))},u=({name:o})=>{l.value.push(c("plugins.labels.installedPackage",{name:o}))},d=({name:o})=>{l.value.push(c("plugins.labels.uninstallingPackage",{name:o}))},y=({name:o})=>{l.value.push(c("plugins.labels.uninstalledPackage",{name:o}))},k=({name:o})=>{l.value.push(c("plugins.labels.errorInstallingPackage",{name:o}))};return(o,s)=>{const v=M("router-link");return g(),f(S,null,[t("div",xs,[t("h1",Ls,p(o.$t("plugins.titles.index")),1),t("div",Cs,[h(v,{class:"button default",to:{name:"dashboard"}},{default:w(()=>[U(p(o.$t("buttons.back")),1)]),_:1}),t("button",{class:"button primary ml-auto",onClick:s[0]||(s[0]=r=>n.value=!0)},p(o.$t("plugins.buttons.repositories")),1)]),t("div",Ps,[h(ss,{consoleLogs:l.value,onSynced:a,onAddLog:s[1]||(s[1]=r=>l.value.push(r)),onClearLogs:s[2]||(s[2]=r=>l.value=[])},null,8,["consoleLogs"]),h(fs,{plugins:e.value,onInstalling:s[3]||(s[3]=r=>m(r)),onInstalled:s[4]||(s[4]=r=>u(r)),onUninstalling:s[5]||(s[5]=r=>d(r)),onUninstalled:s[6]||(s[6]=r=>y(r)),onError:s[7]||(s[7]=r=>k(r))},null,8,["plugins"])])]),h(ws,{showModal:n.value,onClose:s[8]||(s[8]=r=>n.value=!1)},null,8,["showModal"])],64)}}});export{Us as default};