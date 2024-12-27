(function(n,ot){typeof exports=="object"&&typeof module<"u"?module.exports=ot(require("vue")):typeof define=="function"&&define.amd?define(["vue"],ot):(n=typeof globalThis<"u"?globalThis:n||self,n.SimplisitiComponentEditor=ot(n.Vue))})(this,function(n){"use strict";const ot={div:"Contenedor",a:"Enlace",p:"Párrafo",h1:"Cabecera 1",img:"Imagen"},Tn={div:"container",a:"ancord",p:"paragraph",h1:"header1",img:"image"},xe={div:"square",a:"link",p:"paragraph",h1:"heading",img:"image"},Vn=["div","a","p","h1","img"],Fn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>Sr)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>Xr)},font:{title:"Fuente",icon:"font",component:()=>Promise.resolve().then(()=>si)},content:{title:"Contenido",icon:"paragraph",component:()=>Promise.resolve().then(()=>di)},url:{title:"URL",icon:"link",component:()=>Promise.resolve().then(()=>yi)},src:{title:"SRC",icon:"link",component:()=>Promise.resolve().then(()=>ki)}},Bn={container:["layout","spacing"],ancord:["spacing","font","content","url"],paragraph:["spacing","font","content"],header1:["spacing","font","content"],image:["spacing","src"]},Dn=["color"];class mt{create(){const e=this.createElement();return Ft(e),e}}class $n extends mt{createElement(){const e=document.createElement("a");return e.innerHTML="Enlace",e}}class jn extends mt{createElement(){const e=document.createElement("div");return e.classList.add("sp-style__layout-display__flex","sp-style__layout-flex-direction__column","sp-style__spacing-padding-top__1","sp-style__spacing-padding-bottom__1","sp-style__spacing-padding-left__1","sp-style__spacing-padding-right__1"),e.innerHTML="-empty-",e}}class Rn extends mt{createElement(){const e=document.createElement("p");return e.innerHTML="Parrafo",e}}class Un extends mt{createElement(){const e=document.createElement("h1");return e.innerHTML="Cabecera 1",e}}class Hn extends mt{createElement(){const e=document.createElement("img");return e.src="https://via.placeholder.com/150",e}}const Wn=t=>{if(t==="div")return new jn;if(t==="a")return new $n;if(t==="p")return new Rn;if(t==="h1")return new Un;if(t==="img")return new Hn;throw new Error("Invalid type")},pt=(t,e)=>{window.parent.document.dispatchEvent(new CustomEvent(t,{detail:e}))},ve=t=>{pt("elementRemoved",{simplisitiId:t})},Ce=(t,e)=>{pt("contentChange",{simplisitiId:t,content:e})},Yn=(t,e)=>{pt("classChange",{simplisitiId:t,spClassList:e})},Gn=(t,e)=>{pt("styleChange",{simplisitiId:t,spStyleList:e})},Xn=(t,e)=>{pt("attributeChange",{simplisitiId:t,attribute:e})};let $=null;const W=n.ref(!1),st=n.ref(!1),rt=n.ref(null),Y=n.ref(null),qn=(t,e)=>{st.value||(st.value=!0,rt.value=e,e.classList.add("sp-element__active")),t.preventDefault(),t.stopPropagation()},Ee=(t,e)=>{st.value||(Zn(),e.classList.add("sp-element__active")),t.preventDefault(),t.stopPropagation()},Kn=(t,e)=>{st.value||e.classList.remove("sp-element__active"),t.preventDefault(),t.stopPropagation()},Qn=(t,e)=>{var o,s;const a=e;Y.value!==null&&($==null||$.replaceWith(Y.value)),a.innerHTML.startsWith("-empty-")&&(a.innerHTML=a.innerHTML.replace("-empty-","")),(o=Y.value)!=null&&o.dataset.simplisitiid&&ve((s=Y.value)==null?void 0:s.dataset.simplisitiid),setTimeout(()=>{a.classList.remove("sp-element__active"),(a.dataset.simplisitiid||a.id==="simplisiti-component-preview")&&Ce(a.dataset.simplisitiid,a.innerHTML.replace(/sp-element__active/,"")),Vt(),t.preventDefault(),t.stopPropagation()},10)},Vt=()=>{W.value=!1,Y.value=null},Zn=()=>{document.querySelectorAll(".sp-element__active").forEach(e=>{e.classList.remove("sp-element__active")})},Jn=(t,e)=>{$===null&&($=document.createElement("div"),$.id="sp-element__placeholder",$.classList.add("sp-element__placeholder"));const a=Array.from(e.childNodes).filter(s=>s.nodeName!="#text"),o=aa(t,e);a[o]!==void 0?e.insertBefore($,a[o]):e.appendChild($)},ta=(t,e)=>{if(Ee(t,e),W.value&&e.nodeName!=="DIV"){t.preventDefault(),t.stopPropagation();return}W.value&&Y.value!==null&&Jn(t,e)},ea=(t,e)=>{W.value||(W.value=!0,Y.value=e,t.preventDefault(),t.stopPropagation())},na=t=>{W.value=!0;const e=Wn(t);Y.value=e.create()},aa=(t,e)=>{const a=t.clientX,o=t.clientY,s=e.childNodes.values(),r=Array.from(s).filter(i=>i.nodeName!="#text");for(let i=0;i<r.length;i++){const l=r[i].getBoundingClientRect(),c=l.left+l.width/2,f=l.top+l.height/2,u=e.classList;if(a<c&&u.contains("sp-style__layout-flex-direction__row")||o<f&&u.contains("sp-style__layout-flex-direction__column"))return i}return r.length},Ft=t=>{t.addEventListener("click",a=>qn(a,t)),t.addEventListener("mouseover",a=>Ee(a,t)),t.addEventListener("mouseout",a=>Kn(a,t));const e=t;e.tagName==="DIV"&&(e.addEventListener("dragover",a=>ta(a,t)),e.addEventListener("drop",a=>Qn(a,t))),e.setAttribute("draggable","true"),t.addEventListener("drag",a=>ea(a,t))},oa=t=>{const e=Tn[t];return Bn[e].map(o=>({tab:o,...Fn[o]}))},Bt=(t,e)=>e.find(a=>a.startsWith(t)),Dt=t=>{var e=t.toString(16);return e.length==1?"0"+e:e},sa=t=>{if(t==="")return"";if(t.match(/#[0-9A-Fa-f]{6}/))return t;const e=t.match(/\d+/g),a=parseInt(e[0]),o=parseInt(e[1]),s=parseInt(e[2]);return"#"+Dt(a)+Dt(o)+Dt(s)},ra=t=>{document.querySelectorAll(t).forEach(o=>Ft(o));const a=document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');a&&Ft(a)},ia=()=>{Vn.forEach(t=>{ra(`[data-simplisitiid="simplisiti-component-preview"] ${t}`)})},la={class:"sp-wizard-popup__tabs-container"},ca={class:"sp-wizard-popup__tabs"},fa={class:"sp-wizard-popup__tab"},ua=["title","onClick"],da={class:"sp-wizard-popup__content"},ma={class:"sp-wizard-popup__content-header"},pa=n.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},emits:["tabChange"],setup(t,{emit:e}){const{element:a}=t,o=n.ref([]),s=n.ref({}),r=n.shallowReactive([]),i=n.ref(void 0),l=e,c=()=>{for(const x of oa(a.tagName.toLowerCase()))r.push({component:n.defineAsyncComponent(x.component),icon:x.icon,title:x.title,tab:x.tab,spClassList:o.value,spStyleList:s.value,spContent:{content:"",type:"text"},spAttribute:{content:"",type:"src"}})},f=x=>{i.value=x,l("tabChange",x.tab)},u=()=>{r.length>0&&f(r[0])},_=x=>{var C;return((C=i.value)==null?void 0:C.tab)===x.tab},h=x=>new Promise(C=>{setTimeout(()=>{a.classList.remove(x),C()},10)}),g=x=>new Promise(C=>{setTimeout(()=>{a.classList.add(x),C()},10)}),S=()=>new Promise(x=>{a.classList.forEach(async C=>{C.startsWith("sp-style")&&await h(C)}),x()}),k=x=>new Promise(C=>{x.forEach(async I=>{await g(I)}),C()}),L=x=>new Promise(C=>{for(const I in x)a.style.setProperty(I,x[I]);C()}),m=x=>new Promise(C=>{a.innerHTML=x.content,C()}),d=x=>new Promise(C=>{a.setAttribute(x.type,x.content),C()}),v=(x,C)=>{C!=null&&C.spClassList&&(C.spClassList=x);const I=r.flatMap(A=>A.spClassList);o.value=I,S().then(()=>{k(I).then(()=>{a.dataset.simplisitiid&&Yn(a.dataset.simplisitiid,I)})})},y=x=>{var I;(I=i.value)!=null&&I.spStyleList&&(i.value.spStyleList=x);const C=r.reduce((A,Tt)=>({...A,...Tt.spStyleList,...x}),{});s.value=C,L(C).then(()=>{a.dataset.simplisitiid&&Gn(a.dataset.simplisitiid,C)})},E=x=>{var C;(C=i.value)!=null&&C.spContent&&(i.value.spContent=x),m(x).then(()=>{a.dataset.simplisitiid&&x.type==="text"&&Ce(a.dataset.simplisitiid,x.content)})},b=x=>{var C;(C=i.value)!=null&&C.spAttribute&&(i.value.spAttribute=x),d(x).then(()=>{a.dataset.simplisitiid&&Xn(a.dataset.simplisitiid,x)})},H=()=>{o.value=Array.from(a.classList).filter(x=>x.startsWith("sp-style"))},be=()=>{for(let x in a.style)Dn.includes(x)&&a.style[x]!==""&&(s.value[x]=a.style[x])};return n.onMounted(()=>{H(),be(),c(),u()}),(x,C)=>{const I=n.resolveComponent("fa-icon");return n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createElementVNode("div",la,[n.createElementVNode("div",ca,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(r),A=>(n.openBlock(),n.createElementBlock("div",fa,[n.createElementVNode("button",{class:n.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":_(A)}]),title:A.title,onClick:Tt=>f(A)},[n.createVNode(I,{icon:A.icon},null,8,["icon"])],10,ua)]))),256))])]),n.createElementVNode("div",da,[n.createElementVNode("div",ma,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(r),A=>(n.openBlock(),n.createElementBlock("div",null,[n.withDirectives(n.createElementVNode("div",null,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(A==null?void 0:A.component),{"sp-class-list":A==null?void 0:A.spClassList,"onUpdate:spClassList":Tt=>v(Tt,A),"sp-style-list":A==null?void 0:A.spStyleList,"onUpdate:spStyleList":y,element:t.element,"onUpdate:spContent":E,"onUpdate:spAttribute":b},null,40,["sp-class-list","onUpdate:spClassList","sp-style-list","element"]))],512),[[n.vShow,_(A)]])]))),256))])])],64)}}}),T=(t,e)=>{const a=t.__vccOpts||t;for(const[o,s]of e)a[o]=s;return a},ga=T(pa,[["__scopeId","data-v-0f7f4822"]]),ha={class:"sp-configuration-popup__header"},_a={class:"sp-configuration-popup__body"},ya=T(n.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:a}=t,o=n.ref(null),s=n.ref(!1),r=e,i=_=>{setTimeout(()=>{if(!_||!o.value)return;const h=_.getBoundingClientRect(),g=document.body.offsetWidth,S=document.body.offsetHeight,k=250,L=10;let m=h.top,d=h.left+h.width+L;d+k>g&&(d=h.right-k,m=h.top-o.value.offsetHeight-L,m<L&&(m=L)),m+o.value.offsetHeight>S&&(m=S-o.value.offsetHeight-L),o.value.style.top=`${m}px`,o.value.style.left=`${d}px`},50)},l=n.computed(()=>{var h;const _=(h=a==null?void 0:a.tagName)==null?void 0:h.toLowerCase();return _&&ot[_]||"Element"}),c=_=>{setTimeout(()=>{r("close",_),s.value=!0},300)},f=_=>{a&&(a.remove(),a.dataset.simplisitiid&&ve(a.dataset.simplisitiid),r("close",_)),s.value=!0},u=()=>{i(a)};return i(a),n.onMounted(()=>{document.addEventListener("scroll",()=>{i(a)})}),(_,h)=>{const g=n.resolveComponent("fa-icon");return n.openBlock(),n.createElementBlock("div",{class:n.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":s.value}]),ref_key:"popup",ref:o,onClick:n.withModifiers(S=>{},["stop"])},[n.createElementVNode("div",ha,[n.createElementVNode("h4",null,n.toDisplayString(l.value),1),n.createElementVNode("button",{class:"sp-configuration-popup__button",onClick:f},[n.createVNode(g,{icon:"trash"})]),n.createElementVNode("button",{class:"sp-configuration-popup__button",onClick:c},[n.createVNode(g,{icon:"times"})])]),n.createElementVNode("div",_a,[t.element?(n.openBlock(),n.createBlock(ga,{key:0,element:t.element,onTabChange:u},null,8,["element"])):n.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-9896d74d"]]),ke=[{icon:"cube",component:n.defineAsyncComponent(()=>Promise.resolve().then(()=>Ai))}],ba={class:"sp-element__floating-container"},xa={class:"sp-element__component-container"},va={class:"sp-element__side-buttons"},Ca=["onClick"],Ea=T(n.defineComponent({__name:"ElementFloatingPanel",setup(t){const e=n.ref(!1),a=n.ref(ke[0]),o=()=>{e.value=!e.value},s=r=>{a.value=r,e.value=!0};return(r,i)=>{const l=n.resolveComponent("fa-icon"),c=n.resolveDirective("key");return n.openBlock(),n.createElementBlock("div",ba,[n.createElementVNode("div",{class:n.normalizeClass(["sp-element__floating-panel",{"sp-element__floating-panel__closed":n.unref(W)||!e.value}])},[n.createElementVNode("div",xa,[(n.openBlock(),n.createBlock(n.resolveDynamicComponent(a.value.component)))])],2),n.createElementVNode("div",va,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(ke),f=>n.withDirectives((n.openBlock(),n.createElementBlock("button",{class:"sp-element__close-button",onClick:u=>s(f)},[n.createVNode(l,{icon:f.icon},null,8,["icon"])],8,Ca)),[[c,f.icon]])),256)),e.value?(n.openBlock(),n.createElementBlock("button",{key:0,class:"sp-element__close-button",onClick:o},[n.createVNode(l,{icon:"times"})])):n.createCommentVNode("",!0)])])}}}),[["__scopeId","data-v-e6c667dc"]]),ka=n.defineComponent({__name:"App",setup(t){n.watch(W,a=>{const o=document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');a?o==null||o.classList.add("sp-element__add-element-mode"):o==null||o.classList.remove("sp-element__add-element-mode")});const e=()=>{rt.value&&rt.value.classList.remove("sp-element__active"),rt.value=null,st.value=!1};return n.onMounted(()=>{document.body.innerHTML,ia()}),(a,o)=>{var s;return n.openBlock(),n.createElementBlock(n.Fragment,null,[n.unref(st)?(n.openBlock(),n.createBlock(ya,{key:0,element:n.unref(rt),type:(s=n.unref(rt))==null?void 0:s.tagName,onClose:n.withModifiers(e,["stop"])},null,8,["element","type"])):n.createCommentVNode("",!0),n.createVNode(Ea)],64)}}}),Ne=()=>{};let $t={},Se={},we=null,Le={mark:Ne,measure:Ne};try{typeof window<"u"&&($t=window),typeof document<"u"&&(Se=document),typeof MutationObserver<"u"&&(we=MutationObserver),typeof performance<"u"&&(Le=performance)}catch{}const{userAgent:Ae=""}=$t.navigator||{},G=$t,N=Se,Oe=we,kt=Le;G.document;const j=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Me=~Ae.indexOf("MSIE")||~Ae.indexOf("Trident/");var w="classic",Pe="duotone",M="sharp",P="sharp-duotone",Na=[w,Pe,M,P],Sa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ze={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wa=["kit"],La=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Oa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ma={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},za={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Ia={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Ta={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ie={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Va=["solid","regular","light","thin","duotone","brands"],Te=[1,2,3,4,5,6,7,8,9,10],Fa=Te.concat([11,12,13,14,15,16,17,18,19,20]),gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ba=[...Object.keys(za),...Va,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY].concat(Te.map(t=>"".concat(t,"x"))).concat(Fa.map(t=>"w-".concat(t))),Da={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$a={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ja={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ve={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const R="___FONT_AWESOME___",jt=16,Fe="fa",Be="svg-inline--fa",J="data-fa-i2svg",Rt="data-fa-pseudo-element",Ra="data-fa-pseudo-element-pending",Ut="data-prefix",Ht="data-icon",De="fontawesome-i2svg",Ua="async",Ha=["HTML","HEAD","STYLE","SCRIPT"],$e=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),je=[w,M,P];function ht(t){return new Proxy(t,{get(e,a){return a in e?e[a]:e[w]}})}const Re={...Ie};Re[w]={...Ie[w],...ze.kit,...ze["kit-duotone"]};const tt=ht(Re),Wt={...Ta};Wt[w]={...Wt[w],...Ve.kit,...Ve["kit-duotone"]};const _t=ht(Wt),Yt={...Ia};Yt[w]={...Yt[w],...ja.kit};const et=ht(Yt),Gt={...Pa};Gt[w]={...Gt[w],...$a.kit};const Wa=ht(Gt),Ya=La,Ue="fa-layers-text",Ga=Aa,Xa={...Sa};ht(Xa);const qa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt=gt,it=new Set;Object.keys(_t[w]).map(it.add.bind(it)),Object.keys(_t[M]).map(it.add.bind(it)),Object.keys(_t[P]).map(it.add.bind(it));const Ka=[...wa,...Ba],yt=G.FontAwesomeConfig||{};function Qa(t){var e=N.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Za(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[a,o]=e;const s=Za(Qa(a));s!=null&&(yt[o]=s)});const He={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fe,replacementClass:Be,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yt.familyPrefix&&(yt.cssPrefix=yt.familyPrefix);const lt={...He,...yt};lt.autoReplaceSvg||(lt.observeMutations=!1);const p={};Object.keys(He).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){lt[t]=e,bt.forEach(a=>a(p))},get:function(){return lt[t]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){lt.cssPrefix=t,bt.forEach(e=>e(p))},get:function(){return lt.cssPrefix}}),G.FontAwesomeConfig=p;const bt=[];function Ja(t){return bt.push(t),()=>{bt.splice(bt.indexOf(t),1)}}const X=jt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function to(t){if(!t||!j)return;const e=N.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const a=N.head.childNodes;let o=null;for(let s=a.length-1;s>-1;s--){const r=a[s],i=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(o=r)}return N.head.insertBefore(e,o),t}const eo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xt(){let t=12,e="";for(;t-- >0;)e+=eo[Math.random()*62|0];return e}function ct(t){const e=[];for(let a=(t||[]).length>>>0;a--;)e[a]=t[a];return e}function qt(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function We(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function no(t){return Object.keys(t||{}).reduce((e,a)=>e+"".concat(a,'="').concat(We(t[a]),'" '),"").trim()}function Nt(t){return Object.keys(t||{}).reduce((e,a)=>e+"".concat(a,": ").concat(t[a].trim(),";"),"")}function Kt(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function ao(t){let{transform:e,containerWidth:a,iconWidth:o}=t;const s={transform:"translate(".concat(a/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(r," ").concat(i," ").concat(l)},f={transform:"translate(".concat(o/2*-1," -256)")};return{outer:s,inner:c,path:f}}function oo(t){let{transform:e,width:a=jt,height:o=jt,startCentered:s=!1}=t,r="";return s&&Me?r+="translate(".concat(e.x/X-a/2,"em, ").concat(e.y/X-o/2,"em) "):s?r+="translate(calc(-50% + ".concat(e.x/X,"em), calc(-50% + ").concat(e.y/X,"em)) "):r+="translate(".concat(e.x/X,"em, ").concat(e.y/X,"em) "),r+="scale(".concat(e.size/X*(e.flipX?-1:1),", ").concat(e.size/X*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var so=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ye(){const t=Fe,e=Be,a=p.cssPrefix,o=p.replacementClass;let s=so;if(a!==t||o!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");s=s.replace(r,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(l,".".concat(o))}return s}let Ge=!1;function Qt(){p.autoAddCss&&!Ge&&(to(Ye()),Ge=!0)}var ro={mixout(){return{dom:{css:Ye,insertCss:Qt}}},hooks(){return{beforeDOMElementCreation(){Qt()},beforeI2svg(){Qt()}}}};const U=G||{};U[R]||(U[R]={}),U[R].styles||(U[R].styles={}),U[R].hooks||(U[R].hooks={}),U[R].shims||(U[R].shims=[]);var B=U[R];const Xe=[],qe=function(){N.removeEventListener("DOMContentLoaded",qe),St=1,Xe.map(t=>t())};let St=!1;j&&(St=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),St||N.addEventListener("DOMContentLoaded",qe));function io(t){j&&(St?setTimeout(t,0):Xe.push(t))}function vt(t){const{tag:e,attributes:a={},children:o=[]}=t;return typeof t=="string"?We(t):"<".concat(e," ").concat(no(a),">").concat(o.map(vt).join(""),"</").concat(e,">")}function Ke(t,e,a){if(t&&t[e]&&t[e][a])return{prefix:e,iconName:a,icon:t[e][a]}}var Zt=function(e,a,o,s){var r=Object.keys(e),i=r.length,l=a,c,f,u;for(o===void 0?(c=1,u=e[r[0]]):(c=0,u=o);c<i;c++)f=r[c],u=l(u,e[f],f,e);return u};function lo(t){const e=[];let a=0;const o=t.length;for(;a<o;){const s=t.charCodeAt(a++);if(s>=55296&&s<=56319&&a<o){const r=t.charCodeAt(a++);(r&64512)==56320?e.push(((s&1023)<<10)+(r&1023)+65536):(e.push(s),a--)}else e.push(s)}return e}function Jt(t){const e=lo(t);return e.length===1?e[0].toString(16):null}function co(t,e){const a=t.length;let o=t.charCodeAt(e),s;return o>=55296&&o<=56319&&a>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(o-55296)*1024+s-56320+65536:o}function Qe(t){return Object.keys(t).reduce((e,a)=>{const o=t[a];return!!o.icon?e[o.iconName]=o.icon:e[a]=o,e},{})}function te(t,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=a,s=Qe(e);typeof B.hooks.addPack=="function"&&!o?B.hooks.addPack(t,Qe(e)):B.styles[t]={...B.styles[t]||{},...s},t==="fas"&&te("fa",e)}const{styles:nt,shims:fo}=B,uo={[w]:Object.values(et[w]),[M]:Object.values(et[M]),[P]:Object.values(et[P])};let ee=null,Ze={},Je={},tn={},en={},nn={};const mo={[w]:Object.keys(tt[w]),[M]:Object.keys(tt[M]),[P]:Object.keys(tt[P])};function po(t){return~Ka.indexOf(t)}function go(t,e){const a=e.split("-"),o=a[0],s=a.slice(1).join("-");return o===t&&s!==""&&!po(s)?s:null}const an=()=>{const t=o=>Zt(nt,(s,r,i)=>(s[i]=Zt(r,o,{}),s),{});Ze=t((o,s,r)=>(s[3]&&(o[s[3]]=r),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{o[l.toString(16)]=r}),o)),Je=t((o,s,r)=>(o[r]=r,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{o[l]=r}),o)),nn=t((o,s,r)=>{const i=s[2];return o[r]=r,i.forEach(l=>{o[l]=r}),o});const e="far"in nt||p.autoFetchSvg,a=Zt(fo,(o,s)=>{const r=s[0];let i=s[1];const l=s[2];return i==="far"&&!e&&(i="fas"),typeof r=="string"&&(o.names[r]={prefix:i,iconName:l}),typeof r=="number"&&(o.unicodes[r.toString(16)]={prefix:i,iconName:l}),o},{names:{},unicodes:{}});tn=a.names,en=a.unicodes,ee=wt(p.styleDefault,{family:p.familyDefault})};Ja(t=>{ee=wt(t.styleDefault,{family:p.familyDefault})}),an();function ne(t,e){return(Ze[t]||{})[e]}function ho(t,e){return(Je[t]||{})[e]}function q(t,e){return(nn[t]||{})[e]}function on(t){return tn[t]||{prefix:null,iconName:null}}function _o(t){const e=en[t],a=ne("fas",t);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function K(){return ee}const ae=()=>({prefix:null,iconName:null,rest:[]});function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:a=w}=e,o=tt[a][t],s=_t[a][t]||_t[a][o],r=t in B.styles?t:null;return s||r||null}const yo={[w]:Object.keys(et[w]),[M]:Object.keys(et[M]),[P]:Object.keys(et[P])};function Lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:a=!1}=e,o={[w]:"".concat(p.cssPrefix,"-").concat(w),[M]:"".concat(p.cssPrefix,"-").concat(M),[P]:"".concat(p.cssPrefix,"-").concat(P)};let s=null,r=w;const i=Na.filter(c=>c!==Pe);i.forEach(c=>{(t.includes(o[c])||t.some(f=>yo[c].includes(f)))&&(r=c)});const l=t.reduce((c,f)=>{const u=go(p.cssPrefix,f);if(nt[f]?(f=uo[r].includes(f)?Wa[r][f]:f,s=f,c.prefix=f):mo[r].indexOf(f)>-1?(s=f,c.prefix=wt(f,{family:r})):u?c.iconName=u:f!==p.replacementClass&&!i.some(_=>f===o[_])&&c.rest.push(f),!a&&c.prefix&&c.iconName){const _=s==="fa"?on(c.iconName):{},h=q(c.prefix,c.iconName);_.prefix&&(s=null),c.iconName=_.iconName||h||c.iconName,c.prefix=_.prefix||c.prefix,c.prefix==="far"&&!nt.far&&nt.fas&&!p.autoFetchSvg&&(c.prefix="fas")}return c},ae());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&r===M&&(nt.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=q(l.prefix,l.iconName)||l.iconName),!l.prefix&&r===P&&(nt.fasds||p.autoFetchSvg)&&(l.prefix="fasds",l.iconName=q(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=K()||"fas"),l}class bo{constructor(){this.definitions={}}add(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];const s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(r=>{this.definitions[r]={...this.definitions[r]||{},...s[r]},te(r,s[r]);const i=et[w][r];i&&te(i,s[r]),an()})}reset(){this.definitions={}}_pullDefinitions(e,a){const o=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(o).map(s=>{const{prefix:r,iconName:i,icon:l}=o[s],c=l[2];e[r]||(e[r]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[r][f]=l)}),e[r][i]=l}),e}}let sn=[],ft={};const ut={},xo=Object.keys(ut);function vo(t,e){let{mixoutsTo:a}=e;return sn=t,ft={},Object.keys(ut).forEach(o=>{xo.indexOf(o)===-1&&delete ut[o]}),sn.forEach(o=>{const s=o.mixout?o.mixout():{};if(Object.keys(s).forEach(r=>{typeof s[r]=="function"&&(a[r]=s[r]),typeof s[r]=="object"&&Object.keys(s[r]).forEach(i=>{a[r]||(a[r]={}),a[r][i]=s[r][i]})}),o.hooks){const r=o.hooks();Object.keys(r).forEach(i=>{ft[i]||(ft[i]=[]),ft[i].push(r[i])})}o.provides&&o.provides(ut)}),a}function oe(t,e){for(var a=arguments.length,o=new Array(a>2?a-2:0),s=2;s<a;s++)o[s-2]=arguments[s];return(ft[t]||[]).forEach(i=>{e=i.apply(null,[e,...o])}),e}function at(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),o=1;o<e;o++)a[o-1]=arguments[o];(ft[t]||[]).forEach(r=>{r.apply(null,a)})}function Q(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ut[t]?ut[t].apply(null,e):void 0}function se(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const a=t.prefix||K();if(e)return e=q(a,e)||e,Ke(rn.definitions,a,e)||Ke(B.styles,a,e)}const rn=new bo,z={noAuto:()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,at("noAuto")},config:p,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(at("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,io(()=>{Co({autoReplaceSvgRoot:e}),at("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:q(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=wt(t[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Ya))){const e=Lt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||K(),iconName:q(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=K();return{prefix:e,iconName:q(e,t)||t}}}},library:rn,findIconDefinition:se,toHtml:vt},Co=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=N}=t;(Object.keys(B.styles).length>0||p.autoFetchSvg)&&j&&p.autoReplaceSvg&&z.dom.i2svg({node:e})};function At(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(a=>vt(a))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const a=N.createElement("div");return a.innerHTML=t.html,a.children}}),t}function Eo(t){let{children:e,main:a,mask:o,attributes:s,styles:r,transform:i}=t;if(Kt(i)&&a.found&&!o.found){const{width:l,height:c}=a,f={x:l/c/2,y:.5};s.style=Nt({...r,"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")})}return[{tag:"svg",attributes:s,children:e}]}function ko(t){let{prefix:e,iconName:a,children:o,attributes:s,symbol:r}=t;const i=r===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(a):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:i},children:o}]}]}function re(t){const{icons:{main:e,mask:a},prefix:o,iconName:s,transform:r,symbol:i,title:l,maskId:c,titleId:f,extra:u,watchable:_=!1}=t,{width:h,height:g}=a.found?a:e,S=o==="fak",k=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(E=>u.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(u.classes).join(" ");let L={children:[],attributes:{...u.attributes,"data-prefix":o,"data-icon":s,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)}};const m=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};_&&(L.attributes[J]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(f||xt())},children:[l]}),delete L.attributes.title);const d={...L,prefix:o,iconName:s,main:e,mask:a,maskId:c,transform:r,symbol:i,styles:{...m,...u.styles}},{children:v,attributes:y}=a.found&&e.found?Q("generateAbstractMask",d)||{children:[],attributes:{}}:Q("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=v,d.attributes=y,i?ko(d):Eo(d)}function ln(t){const{content:e,width:a,height:o,transform:s,title:r,extra:i,watchable:l=!1}=t,c={...i.attributes,...r?{title:r}:{},class:i.classes.join(" ")};l&&(c[J]="");const f={...i.styles};Kt(s)&&(f.transform=oo({transform:s,startCentered:!0,width:a,height:o}),f["-webkit-transform"]=f.transform);const u=Nt(f);u.length>0&&(c.style=u);const _=[];return _.push({tag:"span",attributes:c,children:[e]}),r&&_.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),_}function No(t){const{content:e,title:a,extra:o}=t,s={...o.attributes,...a?{title:a}:{},class:o.classes.join(" ")},r=Nt(o.styles);r.length>0&&(s.style=r);const i=[];return i.push({tag:"span",attributes:s,children:[e]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}const{styles:ie}=B;function le(t){const e=t[0],a=t[1],[o]=t.slice(4);let s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:a,icon:s}}const So={found:!1,width:512,height:512};function wo(t,e){!$e&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ce(t,e){let a=e;return e==="fa"&&p.styleDefault!==null&&(e=K()),new Promise((o,s)=>{if(a==="fa"){const r=on(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&ie[e]&&ie[e][t]){const r=ie[e][t];return o(le(r))}wo(t,e),o({...So,icon:p.showMissingIcons&&t?Q("missingIconAbstract")||{}:{}})})}const cn=()=>{},fe=p.measurePerformance&&kt&&kt.mark&&kt.measure?kt:{mark:cn,measure:cn},Ct='FA "6.6.0"',Lo=t=>(fe.mark("".concat(Ct," ").concat(t," begins")),()=>fn(t)),fn=t=>{fe.mark("".concat(Ct," ").concat(t," ends")),fe.measure("".concat(Ct," ").concat(t),"".concat(Ct," ").concat(t," begins"),"".concat(Ct," ").concat(t," ends"))};var ue={begin:Lo,end:fn};const Ot=()=>{};function un(t){return typeof(t.getAttribute?t.getAttribute(J):null)=="string"}function Ao(t){const e=t.getAttribute?t.getAttribute(Ut):null,a=t.getAttribute?t.getAttribute(Ht):null;return e&&a}function Oo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Mo(){return p.autoReplaceSvg===!0?Mt.replace:Mt[p.autoReplaceSvg]||Mt.replace}function Po(t){return N.createElementNS("http://www.w3.org/2000/svg",t)}function zo(t){return N.createElement(t)}function dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:a=t.tag==="svg"?Po:zo}=e;if(typeof t=="string")return N.createTextNode(t);const o=a(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){o.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){o.appendChild(dn(r,{ceFn:a}))}),o}function Io(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Mt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(a=>{e.parentNode.insertBefore(dn(a),e)}),e.getAttribute(J)===null&&p.keepOriginalSource){let a=N.createComment(Io(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(t){const e=t[0],a=t[1];if(~qt(e).indexOf(p.replacementClass))return Mt.replace(t);const o=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){const r=a[0].attributes.class.split(" ").reduce((i,l)=>(l===p.replacementClass||l.match(o)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});a[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const s=a.map(r=>vt(r)).join(`
`);e.setAttribute(J,""),e.innerHTML=s}};function mn(t){t()}function pn(t,e){const a=typeof e=="function"?e:Ot;if(t.length===0)a();else{let o=mn;p.mutateApproach===Ua&&(o=G.requestAnimationFrame||mn),o(()=>{const s=Mo(),r=ue.begin("mutate");t.map(s),r(),a()})}}let de=!1;function gn(){de=!0}function me(){de=!1}let Pt=null;function hn(t){if(!Oe||!p.observeMutations)return;const{treeCallback:e=Ot,nodeCallback:a=Ot,pseudoElementsCallback:o=Ot,observeMutationsRoot:s=N}=t;Pt=new Oe(r=>{if(de)return;const i=K();ct(r).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!un(l.addedNodes[0])&&(p.searchPseudoElements&&o(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&p.searchPseudoElements&&o(l.target.parentNode),l.type==="attributes"&&un(l.target)&&~qa.indexOf(l.attributeName))if(l.attributeName==="class"&&Ao(l.target)){const{prefix:c,iconName:f}=Lt(qt(l.target));l.target.setAttribute(Ut,c||i),f&&l.target.setAttribute(Ht,f)}else Oo(l.target)&&a(l.target)})}),j&&Pt.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function To(){Pt&&Pt.disconnect()}function Vo(t){const e=t.getAttribute("style");let a=[];return e&&(a=e.split(";").reduce((o,s)=>{const r=s.split(":"),i=r[0],l=r.slice(1);return i&&l.length>0&&(o[i]=l.join(":").trim()),o},{})),a}function Fo(t){const e=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"";let s=Lt(qt(t));return s.prefix||(s.prefix=K()),e&&a&&(s.prefix=e,s.iconName=a),s.iconName&&s.prefix||(s.prefix&&o.length>0&&(s.iconName=ho(s.prefix,t.innerText)||ne(s.prefix,Jt(t.innerText))),!s.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function Bo(t){const e=ct(t.attributes).reduce((s,r)=>(s.name!=="class"&&s.name!=="style"&&(s[r.name]=r.value),s),{}),a=t.getAttribute("title"),o=t.getAttribute("data-fa-title-id");return p.autoA11y&&(a?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(o||xt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Do(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _n(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:a,prefix:o,rest:s}=Fo(t),r=Bo(t),i=oe("parseNodeAttributes",{},t);let l=e.styleParser?Vo(t):[];return{iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:r},...i}}const{styles:$o}=B;function yn(t){const e=p.autoReplaceSvg==="nest"?_n(t,{styleParser:!1}):_n(t);return~e.extra.classes.indexOf(Ue)?Q("generateLayersText",t,e):Q("generateSvgReplacementMutation",t,e)}let D=new Set;je.map(t=>{D.add("fa-".concat(t))}),Object.keys(tt[w]).map(D.add.bind(D)),Object.keys(tt[M]).map(D.add.bind(D)),Object.keys(tt[P]).map(D.add.bind(D)),D=[...D];function bn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const a=N.documentElement.classList,o=u=>a.add("".concat(De,"-").concat(u)),s=u=>a.remove("".concat(De,"-").concat(u)),r=p.autoFetchSvg?D:je.map(u=>"fa-".concat(u)).concat(Object.keys($o));r.includes("fa")||r.push("fa");const i=[".".concat(Ue,":not([").concat(J,"])")].concat(r.map(u=>".".concat(u,":not([").concat(J,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=ct(t.querySelectorAll(i))}catch{}if(l.length>0)o("pending"),s("complete");else return Promise.resolve();const c=ue.begin("onTree"),f=l.reduce((u,_)=>{try{const h=yn(_);h&&u.push(h)}catch(h){$e||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,_)=>{Promise.all(f).then(h=>{pn(h,()=>{o("active"),o("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(h=>{c(),_(h)})})}function jo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yn(t).then(a=>{a&&pn([a],e)})}function Ro(t){return function(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(e||{}).icon?e:se(e||{});let{mask:s}=a;return s&&(s=(s||{}).icon?s:se(s||{})),t(o,{...a,mask:s})}}const Uo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=F,symbol:o=!1,mask:s=null,maskId:r=null,title:i=null,titleId:l=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:_,iconName:h,icon:g}=t;return At({type:"icon",...t},()=>(at("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(i?f["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(l||xt()):(f["aria-hidden"]="true",f.focusable="false")),re({icons:{main:le(g),mask:s?le(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:h,transform:{...F,...a},symbol:o,title:i,maskId:r,titleId:l,extra:{attributes:f,styles:u,classes:c}})))};var Ho={mixout(){return{icon:Ro(Uo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=bn,t.nodeCallback=jo,t}}},provides(t){t.i2svg=function(e){const{node:a=N,callback:o=()=>{}}=e;return bn(a,o)},t.generateSvgReplacementMutation=function(e,a){const{iconName:o,title:s,titleId:r,prefix:i,transform:l,symbol:c,mask:f,maskId:u,extra:_}=a;return new Promise((h,g)=>{Promise.all([ce(o,i),f.iconName?ce(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[k,L]=S;h([e,re({icons:{main:k,mask:L},prefix:i,iconName:o,transform:l,symbol:c,maskId:u,title:s,titleId:r,extra:_,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:a,attributes:o,main:s,transform:r,styles:i}=e;const l=Nt(i);l.length>0&&(o.style=l);let c;return Kt(r)&&(c=Q("generateAbstractTransformGrouping",{main:s,transform:r,containerWidth:s.width,iconWidth:s.width})),a.push(c||s.icon),{children:a,attributes:o}}}},Wo={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:a=[]}=e;return At({type:"layer"},()=>{at("beforeDOMElementCreation",{assembler:t,params:e});let o=[];return t(s=>{Array.isArray(s)?s.map(r=>{o=o.concat(r.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...a].join(" ")},children:o}]})}}}},Yo={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:a=null,classes:o=[],attributes:s={},styles:r={}}=e;return At({type:"counter",content:t},()=>(at("beforeDOMElementCreation",{content:t,params:e}),No({content:t.toString(),title:a,extra:{attributes:s,styles:r,classes:["".concat(p.cssPrefix,"-layers-counter"),...o]}})))}}}},Go={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:a=F,title:o=null,classes:s=[],attributes:r={},styles:i={}}=e;return At({type:"text",content:t},()=>(at("beforeDOMElementCreation",{content:t,params:e}),ln({content:t,transform:{...F,...a},title:o,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...s]}})))}}},provides(t){t.generateLayersText=function(e,a){const{title:o,transform:s,extra:r}=a;let i=null,l=null;if(Me){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/c,l=f.height/c}return p.autoA11y&&!o&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,ln({content:e.innerHTML,width:i,height:l,transform:s,title:o,extra:r,watchable:!0})])}}};const Xo=new RegExp('"',"ug"),xn=[1105920,1112319],vn={FontAwesome:{normal:"fas",400:"fas"},...Ma,...Oa,...Da},pe=Object.keys(vn).reduce((t,e)=>(t[e.toLowerCase()]=vn[e],t),{}),qo=Object.keys(pe).reduce((t,e)=>{const a=pe[e];return t[e]=a[900]||[...Object.entries(a)][0][1],t},{});function Ko(t){const e=t.replace(Xo,""),a=co(e,0),o=a>=xn[0]&&a<=xn[1],s=e.length===2?e[0]===e[1]:!1;return{value:Jt(s?e[0]:e),isSecondary:o||s}}function Qo(t,e){const a=t.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(e),s=isNaN(o)?"normal":o;return(pe[a]||{})[s]||qo[a]}function Cn(t,e){const a="".concat(Ra).concat(e.replace(":","-"));return new Promise((o,s)=>{if(t.getAttribute(a)!==null)return o();const i=ct(t.children).filter(h=>h.getAttribute(Rt)===e)[0],l=G.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),f=c.match(Ga),u=l.getPropertyValue("font-weight"),_=l.getPropertyValue("content");if(i&&!f)return t.removeChild(i),o();if(f&&_!=="none"&&_!==""){const h=l.getPropertyValue("content");let g=Qo(c,u);const{value:S,isSecondary:k}=Ko(h),L=f[0].startsWith("FontAwesome");let m=ne(g,S),d=m;if(L){const v=_o(S);v.iconName&&v.prefix&&(m=v.iconName,g=v.prefix)}if(m&&!k&&(!i||i.getAttribute(Ut)!==g||i.getAttribute(Ht)!==d)){t.setAttribute(a,d),i&&t.removeChild(i);const v=Do(),{extra:y}=v;y.attributes[Rt]=e,ce(m,g).then(E=>{const b=re({...v,icons:{main:E,mask:ae()},prefix:g,iconName:d,extra:y,watchable:!0}),H=N.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=b.map(be=>vt(be)).join(`
`),t.removeAttribute(a),o()}).catch(s)}else o()}else o()})}function Zo(t){return Promise.all([Cn(t,"::before"),Cn(t,"::after")])}function Jo(t){return t.parentNode!==document.head&&!~Ha.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function En(t){if(j)return new Promise((e,a)=>{const o=ct(t.querySelectorAll("*")).filter(Jo).map(Zo),s=ue.begin("searchPseudoElements");gn(),Promise.all(o).then(()=>{s(),me(),e()}).catch(()=>{s(),me(),a()})})}var ts={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=En,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:a=N}=e;p.searchPseudoElements&&En(a)}}};let kn=!1;var es={mixout(){return{dom:{unwatch(){gn(),kn=!0}}}},hooks(){return{bootstrap(){hn(oe("mutationObserverCallbacks",{}))},noAuto(){To()},watch(t){const{observeMutationsRoot:e}=t;kn?me():hn(oe("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Nn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((a,o)=>{const s=o.toLowerCase().split("-"),r=s[0];let i=s.slice(1).join("-");if(r&&i==="h")return a.flipX=!0,a;if(r&&i==="v")return a.flipY=!0,a;if(i=parseFloat(i),isNaN(i))return a;switch(r){case"grow":a.size=a.size+i;break;case"shrink":a.size=a.size-i;break;case"left":a.x=a.x-i;break;case"right":a.x=a.x+i;break;case"up":a.y=a.y-i;break;case"down":a.y=a.y+i;break;case"rotate":a.rotate=a.rotate+i;break}return a},e)};var ns={mixout(){return{parse:{transform:t=>Nn(t)}}},hooks(){return{parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-transform");return a&&(t.transform=Nn(a)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:a,transform:o,containerWidth:s,iconWidth:r}=e;const i={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),f="rotate(".concat(o.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},_={transform:"translate(".concat(r/2*-1," -256)")},h={outer:i,inner:u,path:_};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:a.icon.tag,children:a.icon.children,attributes:{...a.icon.attributes,...h.path}}]}]}}}};const ge={x:0,y:0,width:"100%",height:"100%"};function Sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function as(t){return t.tag==="g"?t.children:[t]}var os={hooks(){return{parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-mask"),o=a?Lt(a.split(" ").map(s=>s.trim())):ae();return o.prefix||(o.prefix=K()),t.mask=o,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:a,attributes:o,main:s,mask:r,maskId:i,transform:l}=e;const{width:c,icon:f}=s,{width:u,icon:_}=r,h=ao({transform:l,containerWidth:u,iconWidth:c}),g={tag:"rect",attributes:{...ge,fill:"white"}},S=f.children?{children:f.children.map(Sn)}:{},k={tag:"g",attributes:{...h.inner},children:[Sn({tag:f.tag,attributes:{...f.attributes,...h.path},...S})]},L={tag:"g",attributes:{...h.outer},children:[k]},m="mask-".concat(i||xt()),d="clip-".concat(i||xt()),v={tag:"mask",attributes:{...ge,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,L]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:as(_)},v]};return a.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(m,")"),...ge}}),{children:a,attributes:o}}}},ss={provides(t){let e=!1;G.matchMedia&&(e=G.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const a=[],o={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:{...o,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const r={...s,attributeName:"opacity"},i={tag:"circle",attributes:{...o,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),a.push(i),a.push({tag:"path",attributes:{...o,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||a.push({tag:"path",attributes:{...o,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},rs={hooks(){return{parseNodeAttributes(t,e){const a=e.getAttribute("data-fa-symbol"),o=a===null?!1:a===""?!0:a;return t.symbol=o,t}}}},is=[ro,Ho,Wo,Yo,Go,ts,es,ns,os,ss,rs];vo(is,{mixoutsTo:z}),z.noAuto;const wn=z.config,ls=z.library;z.dom;const zt=z.parse;z.findIconDefinition,z.toHtml;const cs=z.icon;z.layer;const fs=z.text;z.counter;const us={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},ds={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ms={prefix:"fas",iconName:"heading",icon:[448,512,["header"],"f1dc","M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]},ps={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},gs={prefix:"fas",iconName:"arrow-down-wide-short",icon:[576,512,["sort-amount-asc","sort-amount-down"],"f160","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]},hs={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},_s={prefix:"fas",iconName:"square",icon:[448,512,[9632,9723,9724,61590],"f0c8","M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]},ys={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},bs={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]},xs={prefix:"fas",iconName:"comment-dots",icon:[512,512,[128172,62075,"commenting"],"f4ad","M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},vs={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},Cs={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},Es={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},ks={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},Ns={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},Ss={prefix:"fas",iconName:"paragraph",icon:[448,512,[182],"f1dd","M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]},ws={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},Ls={prefix:"fas",iconName:"font",icon:[448,512,[],"f031","M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]},As={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},Os={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},Ms={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ps={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};function Ln(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function V(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ln(Object(a),!0).forEach(function(o){O(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ln(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function zs(t,e){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var o=a.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Is(t){var e=zs(t,"string");return typeof e=="symbol"?e:e+""}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function O(t,e,a){return e=Is(e),e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ts(t,e){if(t==null)return{};var a={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;a[o]=t[o]}return a}function Vs(t,e){if(t==null)return{};var a=Ts(t,e),o,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)o=r[s],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}function he(t){return Fs(t)||Bs(t)||Ds(t)||$s()}function Fs(t){if(Array.isArray(t))return _e(t)}function Bs(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ds(t,e){if(t){if(typeof t=="string")return _e(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _e(t,e)}}function _e(t,e){(e==null||e>t.length)&&(e=t.length);for(var a=0,o=new Array(e);a<e;a++)o[a]=t[a];return o}function $s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},An={exports:{}};(function(t){(function(e){var a=function(m,d,v){if(!f(d)||_(d)||h(d)||g(d)||c(d))return d;var y,E=0,b=0;if(u(d))for(y=[],b=d.length;E<b;E++)y.push(a(m,d[E],v));else{y={};for(var H in d)Object.prototype.hasOwnProperty.call(d,H)&&(y[m(H,v)]=a(m,d[H],v))}return y},o=function(m,d){d=d||{};var v=d.separator||"_",y=d.split||/(?=[A-Z])/;return m.split(y).join(v)},s=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(d,v){return v?v.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},r=function(m){var d=s(m);return d.substr(0,1).toUpperCase()+d.substr(1)},i=function(m,d){return o(m,d).toLowerCase()},l=Object.prototype.toString,c=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},u=function(m){return l.call(m)=="[object Array]"},_=function(m){return l.call(m)=="[object Date]"},h=function(m){return l.call(m)=="[object RegExp]"},g=function(m){return l.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},k=function(m,d){var v=d&&"process"in d?d.process:d;return typeof v!="function"?m:function(y,E){return v(y,m,E)}},L={camelize:s,decamelize:i,pascalize:r,depascalize:i,camelizeKeys:function(m,d){return a(k(s,d),m)},decamelizeKeys:function(m,d){return a(k(i,d),m,d)},pascalizeKeys:function(m,d){return a(k(r,d),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=L:e.humps=L})(js)})(An);var Rs=An.exports,Us=["class","style"];function Hs(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,a){var o=a.indexOf(":"),s=Rs.camelize(a.slice(0,o)),r=a.slice(o+1).trim();return e[s]=r,e},{})}function Ws(t){return t.split(/\s+/).reduce(function(e,a){return e[a]=!0,e},{})}function ye(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(c){return ye(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.class=Ws(u);break;case"style":c.style=Hs(u);break;default:c.attrs[f]=u}return c},{attrs:{},class:{},style:{}});a.class;var r=a.style,i=r===void 0?{}:r,l=Vs(a,Us);return n.h(t.tag,V(V(V({},e),{},{class:s.class,style:V(V({},s.style),i)},s.attrs),l),o)}var On=!1;try{On=process.env.NODE_ENV==="production"}catch{}function Ys(){if(!On&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Et(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?O({},t,e):{}}function Gs(t){var e,a=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},O(O(O(O(O(O(O(O(O(O(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),O(O(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(a).map(function(o){return a[o]?o:null}).filter(function(o){return o})}function Mn(t){if(t&&It(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(zt.icon)return zt.icon(t);if(t===null)return null;if(It(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Xs=n.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,a){var o=a.attrs,s=n.computed(function(){return Mn(e.icon)}),r=n.computed(function(){return Et("classes",Gs(e))}),i=n.computed(function(){return Et("transform",typeof e.transform=="string"?zt.transform(e.transform):e.transform)}),l=n.computed(function(){return Et("mask",Mn(e.mask))}),c=n.computed(function(){return cs(s.value,V(V(V(V({},r.value),i.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});n.watch(c,function(u){if(!u)return Ys("Could not find one or more icon(s)",s.value,l.value)},{immediate:!0});var f=n.computed(function(){return c.value?ye(c.value.abstract[0],{},o):null});return function(){return f.value}}});n.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,a){var o=a.slots,s=wn.familyPrefix,r=n.computed(function(){return["".concat(s,"-layers")].concat(he(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return n.h("div",{class:r.value},o.default?o.default():[])}}}),n.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,a){var o=a.attrs,s=wn.familyPrefix,r=n.computed(function(){return Et("classes",[].concat(he(e.counter?["".concat(s,"-layers-counter")]:[]),he(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),i=n.computed(function(){return Et("transform",typeof e.transform=="string"?zt.transform(e.transform):e.transform)}),l=n.computed(function(){var f=fs(e.value.toString(),V(V({},i.value),r.value)),u=f.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=n.computed(function(){return ye(l.value,{},o)});return function(){return c.value}}}),ls.add(Ms,Ns,hs,us,Cs,ys,Os,As,ks,ds,gs,_s,ws,vs,Ls,Ss,bs,ms,ps,xs,Ps,Es);const qs={install:t=>{t.component("simplisiti-component-editor",ka),t.component("fa-icon",Xs)}},Ks=12,Qs=12,Zs=["0","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],Pn=t=>Zs.map(e=>({value:t(e).replace(".","_"),label:e})),dt=t=>(n.pushScopeId("data-v-9584ef15"),t=t(),n.popScopeId(),t),Js={class:"sp-layout__container"},tr={class:"sp-layout__header"},er={class:"sp-layout__body"},nr={class:"sp-layout__body"},ar={key:0,class:"sp-layout__flex-container"},or={class:"sp-layout__grid-item sp-layout__flex-direction-container"},sr=[dt(()=>n.createElementVNode("option",{value:""},null,-1)),dt(()=>n.createElementVNode("option",{value:"sp-style__layout-flex-direction__row"},"Fila",-1)),dt(()=>n.createElementVNode("option",{value:"sp-style__layout-flex-direction__column"},"Columna",-1))],rr={class:"sp-layout__gap-spacing-container"},ir={class:"sp-layout__grid-item sp-layout__gap-container"},lr=dt(()=>n.createElementVNode("option",{value:""},null,-1)),cr=["value"],fr={key:1,class:"sp-layout__grid-container"},ur={class:"sp-layout__grid-item sp-layout__columns-container"},dr=dt(()=>n.createElementVNode("option",{value:""},null,-1)),mr=["value"],pr={class:"sp-layout__grid-item sp-layout__rows-container"},gr=dt(()=>n.createElementVNode("option",{value:""},null,-1)),hr=["value"],_r={class:"sp-layout__buttons-container"},yr={class:"sp-layout__button__aligment"},br={class:"sp-layout__button__aligment"},xr={class:"sp-layout__button__aligment"},vr={key:0,class:"sp-layout__button__aligment"},Cr={class:"sp-layout__buttons-container"},Er={class:"sp-layout__button__aligment"},kr={class:"sp-layout__button__aligment"},Nr={class:"sp-layout__button__aligment"},Sr=Object.freeze(Object.defineProperty({__proto__:null,default:T(n.defineComponent({__name:"Layout",props:{spClassList:{type:Array,default:[]}},emits:["update:spClassList"],setup(t,{emit:e}){const a=t,o=n.ref(null),s=n.ref(null),r=n.ref(null),i=n.ref(null),l=n.ref(null),c=n.ref(null),f=n.ref(null),u=v=>Bt(v,a.spClassList),_=()=>Pn(v=>`sp-style__layout-gap__${v}`),h=n.computed(()=>_()),g=()=>{o.value=u("sp-style__layout-display__"),s.value=u("sp-style__layout-justify-content__"),r.value=u("sp-style__layout-align-items__"),i.value=u("sp-style__layout-flex-direction__"),l.value=u("sp-style__layout-grid-template__columns-"),c.value=u("sp-style__layout-grid-template__rows-"),f.value=u("sp-style__layout-gap__")},S=e,k=v=>{const y=v==="rows"?Ks:Qs,E=[];for(let b=0;b<y;b++)E.push(b+1);return E},L=n.computed(()=>k("columns")),m=n.computed(()=>k("rows")),d=()=>{const v=[o.value,s.value,r.value,i.value,l.value,c.value,f.value].filter(y=>y);S("update:spClassList",v)};return n.onMounted(()=>{g(),d()}),(v,y)=>{const E=n.resolveComponent("fa-icon");return n.openBlock(),n.createElementBlock("div",Js,[n.createElementVNode("div",tr,[n.createElementVNode("label",null,[n.withDirectives(n.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__flex","onUpdate:modelValue":y[0]||(y[0]=b=>o.value=b),onChange:d},null,544),[[n.vModelRadio,o.value]]),n.createVNode(E,{icon:"arrows-left-right"}),n.createTextVNode(" Flexible ")]),n.createElementVNode("label",null,[n.withDirectives(n.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__grid","onUpdate:modelValue":y[1]||(y[1]=b=>o.value=b),onChange:d},null,544),[[n.vModelRadio,o.value]]),n.createVNode(E,{icon:"table-cells"}),n.createTextVNode(" Tabla ")])]),n.createElementVNode("div",er,[n.createElementVNode("div",nr,[o.value==="sp-style__layout-display__flex"?(n.openBlock(),n.createElementBlock("div",ar,[n.createElementVNode("div",or,[n.createElementVNode("label",null,[n.createVNode(E,{icon:"arrow-down-wide-short"}),n.createTextVNode(" Dirección ")]),n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":y[2]||(y[2]=b=>i.value=b),onChange:d},sr,544),[[n.vModelSelect,i.value]])])])):n.createCommentVNode("",!0),n.createElementVNode("div",rr,[n.createElementVNode("div",ir,[n.createElementVNode("label",null,[n.createVNode(E,{icon:"arrow-down-wide-short"}),n.createTextVNode(" Espaciado ")]),n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":y[3]||(y[3]=b=>f.value=b),onChange:d},[lr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(h.value,b=>(n.openBlock(),n.createElementBlock("option",{key:b.value,value:b.value},n.toDisplayString(b.label),9,cr))),128))],544),[[n.vModelSelect,f.value]])])]),o.value==="sp-style__layout-display__grid"?(n.openBlock(),n.createElementBlock("div",fr,[n.createElementVNode("div",ur,[n.createElementVNode("label",null,[n.createVNode(E,{icon:"grip"}),n.createTextVNode(" Columas ")]),n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":y[4]||(y[4]=b=>l.value=b),onChange:d},[dr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(L.value,b=>(n.openBlock(),n.createElementBlock("option",{key:`sp-style__layout-grid-template__columns-${b}`,value:`sp-style__layout-grid-template__columns-${b}`},n.toDisplayString(b),9,mr))),128))],544),[[n.vModelSelect,l.value]])]),n.createElementVNode("div",pr,[n.createElementVNode("label",null,[n.createVNode(E,{icon:"grip-vertical"}),n.createTextVNode(" Filas ")]),n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":y[5]||(y[5]=b=>c.value=b),onChange:d},[gr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(m.value,b=>(n.openBlock(),n.createElementBlock("option",{key:`sp-style__layout-grid-template__rows-${b}`,value:`sp-style__layout-grid-template__rows-${b}`},n.toDisplayString(b),9,hr))),128))],544),[[n.vModelSelect,c.value]])])])):n.createCommentVNode("",!0),n.createElementVNode("div",{class:n.normalizeClass(`sp-layout__horizontal-alignment-container ${i.value}`)},[n.createElementVNode("label",null,n.toDisplayString(i.value==="sp-style__layout-flex-direction__column"?"Vertical":"Horizontal"),1),n.createElementVNode("div",_r,[n.createElementVNode("label",yr,[n.createVNode(E,{icon:"arrows-up-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__start","onUpdate:modelValue":y[6]||(y[6]=b=>s.value=b),onChange:d},null,544),[[n.vModelRadio,s.value]])]),n.createElementVNode("label",br,[n.createVNode(E,{icon:"arrows-left-right-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__center","onUpdate:modelValue":y[7]||(y[7]=b=>s.value=b),onChange:d},null,544),[[n.vModelRadio,s.value]])]),n.createElementVNode("label",xr,[n.createVNode(E,{icon:"arrows-up-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__end","onUpdate:modelValue":y[8]||(y[8]=b=>s.value=b),onChange:d},null,544),[[n.vModelRadio,s.value]])]),o.value==="sp-style__layout-display__flex"?(n.openBlock(),n.createElementBlock("label",vr,[n.createVNode(E,{icon:"bars"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__between","onUpdate:modelValue":y[9]||(y[9]=b=>s.value=b),onChange:d},null,544),[[n.vModelRadio,s.value]])])):n.createCommentVNode("",!0)])],2),n.createElementVNode("div",{class:n.normalizeClass(`sp-layout__vertical-alignment-container ${i.value}`)},[n.createElementVNode("label",null,n.toDisplayString(i.value==="sp-style__layout-flex-direction__column"?"Horizontal":"Vertical"),1),n.createElementVNode("div",Cr,[n.createElementVNode("label",Er,[n.createVNode(E,{icon:"arrows-up-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__start","onUpdate:modelValue":y[10]||(y[10]=b=>r.value=b),onChange:d},null,544),[[n.vModelRadio,r.value]])]),n.createElementVNode("label",kr,[n.createVNode(E,{icon:"arrows-left-right-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__center","onUpdate:modelValue":y[11]||(y[11]=b=>r.value=b),onChange:d},null,544),[[n.vModelRadio,r.value]])]),n.createElementVNode("label",Nr,[n.createVNode(E,{icon:"arrows-up-to-line"}),n.withDirectives(n.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__end","onUpdate:modelValue":y[12]||(y[12]=b=>r.value=b),onChange:d},null,544),[[n.vModelRadio,r.value]])])])],2)])])])}}}),[["__scopeId","data-v-9584ef15"]])},Symbol.toStringTag,{value:"Module"})),Z=t=>(n.pushScopeId("data-v-96c95280"),t=t(),n.popScopeId(),t),wr={class:"sp-spacing__container"},Lr={class:"sp-spacing__select-container"},Ar={class:"sp-spacing__select-item"},Or=Z(()=>n.createElementVNode("label",null,"Arriba",-1)),Mr=Z(()=>n.createElementVNode("option",{value:""},null,-1)),Pr=["value"],zr={class:"sp-spacing__select-item"},Ir=Z(()=>n.createElementVNode("label",null,"Abajo",-1)),Tr=Z(()=>n.createElementVNode("option",{value:""},null,-1)),Vr=["value"],Fr={class:"sp-spacing__select-item"},Br=Z(()=>n.createElementVNode("label",null,"Izquierda",-1)),Dr=Z(()=>n.createElementVNode("option",{value:""},null,-1)),$r=["value"],jr={class:"sp-spacing__select-item"},Rr=Z(()=>n.createElementVNode("label",null,"Derecha",-1)),Ur=Z(()=>n.createElementVNode("option",{value:""},null,-1)),Hr=["value"],zn=T(n.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0},spacingConfig:{type:Object,default:()=>({top:"",bottom:"",left:"",right:""})}},emits:["update:spacingConfig"],setup(t,{emit:e}){const{type:a,spacingConfig:o}=t,s=e,r=_=>Pn(h=>`sp-style__spacing-${a}-${_}__${h}`),i=n.computed(()=>r("top")),l=n.computed(()=>r("bottom")),c=n.computed(()=>r("left")),f=n.computed(()=>r("right")),u=()=>{s("update:spacingConfig",o)};return(_,h)=>(n.openBlock(),n.createElementBlock("div",wr,[n.createElementVNode("div",null,[n.createElementVNode("h2",null,n.toDisplayString(t.title),1)]),n.createElementVNode("div",Lr,[n.createElementVNode("div",Ar,[Or,n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":h[0]||(h[0]=g=>t.spacingConfig.top=g),onChange:u},[Mr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(i.value,g=>(n.openBlock(),n.createElementBlock("option",{key:g.value,value:g.value},n.toDisplayString(g.label),9,Pr))),128))],544),[[n.vModelSelect,t.spacingConfig.top]])]),n.createElementVNode("div",zr,[Ir,n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":h[1]||(h[1]=g=>t.spacingConfig.bottom=g),onChange:u},[Tr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(l.value,g=>(n.openBlock(),n.createElementBlock("option",{key:g.value,value:g.value},n.toDisplayString(g.label),9,Vr))),128))],544),[[n.vModelSelect,t.spacingConfig.bottom]])]),n.createElementVNode("div",Fr,[Br,n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":h[2]||(h[2]=g=>t.spacingConfig.left=g),onChange:u},[Dr,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(c.value,g=>(n.openBlock(),n.createElementBlock("option",{key:g.value,value:g.value},n.toDisplayString(g.label),9,$r))),128))],544),[[n.vModelSelect,t.spacingConfig.left]])]),n.createElementVNode("div",jr,[Rr,n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":h[3]||(h[3]=g=>t.spacingConfig.right=g),onChange:u},[Ur,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(f.value,g=>(n.openBlock(),n.createElementBlock("option",{key:g.value,value:g.value},n.toDisplayString(g.label),9,Hr))),128))],544),[[n.vModelSelect,t.spacingConfig.right]])])])]))}}),[["__scopeId","data-v-96c95280"]]),Wr=t=>(n.pushScopeId("data-v-0e6a2272"),t=t(),n.popScopeId(),t),Yr={class:"sp-spacing__container"},Gr=Wr(()=>n.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),Xr=Object.freeze(Object.defineProperty({__proto__:null,default:T(n.defineComponent({__name:"Spacing",props:{spClassList:{type:Array,default:[]}},emits:["update:spClassList"],setup(t,{emit:e}){const a=t,o=e,s=n.ref({top:void 0,bottom:void 0,left:void 0,right:void 0}),r=n.ref({top:void 0,bottom:void 0,left:void 0,right:void 0}),i=f=>Bt(f,a.spClassList),l=()=>{s.value.top=i("sp-style__spacing-margin-top__"),s.value.bottom=i("sp-style__spacing-margin-bottom__"),s.value.left=i("sp-style__spacing-margin-left__"),s.value.right=i("sp-style__spacing-margin-right__"),r.value.top=i("sp-style__spacing-padding-top__"),r.value.bottom=i("sp-style__spacing-padding-bottom__"),r.value.left=i("sp-style__spacing-padding-left__"),r.value.right=i("sp-style__spacing-padding-right__")},c=()=>{const f=[s.value.top,s.value.bottom,s.value.left,s.value.right,r.value.top,r.value.bottom,r.value.left,r.value.right].filter(u=>u);o("update:spClassList",f)};return n.onMounted(()=>{l(),c()}),(f,u)=>(n.openBlock(),n.createElementBlock("div",Yr,[n.createVNode(zn,{title:"Margen",type:"margin",spacingConfig:s.value,"onUpdate:spacingConfig":[u[0]||(u[0]=_=>s.value=_),c]},null,8,["spacingConfig"]),Gr,n.createVNode(zn,{title:"Padding",type:"padding",spacingConfig:r.value,"onUpdate:spacingConfig":[u[1]||(u[1]=_=>r.value=_),c]},null,8,["spacingConfig"])]))}}),[["__scopeId","data-v-0e6a2272"]])},Symbol.toStringTag,{value:"Module"})),qr=["12","14","16","18","20","24","30","36","48","60","72","96","128"],Kr=t=>qr.map(e=>({value:t(e).replace(".","_"),label:e})),In=t=>(n.pushScopeId("data-v-bb4d8513"),t=t(),n.popScopeId(),t),Qr={class:"sp-font__container"},Zr={class:"sp-font__select-container"},Jr={class:"sp-font__select-item"},ti=In(()=>n.createElementVNode("label",null,"Tamaño",-1)),ei=In(()=>n.createElementVNode("option",{value:""},null,-1)),ni=["value"],ai={class:"sp-font__select-container"},oi={class:"sp-font__select-item"},si=Object.freeze(Object.defineProperty({__proto__:null,default:T(n.defineComponent({__name:"Font",props:{spClassList:{type:Array,default:[]},spStyleList:{type:Object,default:[]}},emits:["update:spClassList","update:spStyleList"],setup(t,{emit:e}){const a=t,o=n.ref(null),s=n.ref({color:"#000000"}),r=g=>Bt(g,a.spClassList),i=()=>Kr(g=>`sp-style__font-size__${g}`),l=n.computed(()=>i()),c=()=>{o.value=r("sp-style__font-size__")},f=()=>{for(const g in a.spStyleList)g==="color"&&(s.value.color=sa(a.spStyleList[g]))},u=e,_=()=>{const g=[o.value].filter(S=>S);u("update:spClassList",g)},h=()=>{const g={color:s.value.color};u("update:spStyleList",g)};return n.onMounted(()=>{c(),f(),_()}),(g,S)=>(n.openBlock(),n.createElementBlock("div",Qr,[n.createElementVNode("div",Zr,[n.createElementVNode("div",Jr,[ti,n.withDirectives(n.createElementVNode("select",{"onUpdate:modelValue":S[0]||(S[0]=k=>o.value=k),onChange:_},[ei,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(l.value,k=>(n.openBlock(),n.createElementBlock("option",{key:k.value,value:k.value},n.toDisplayString(k.label),9,ni))),128))],544),[[n.vModelSelect,o.value]])])]),n.createElementVNode("div",ai,[n.createElementVNode("div",oi,[n.createElementVNode("label",null,"Color "+n.toDisplayString(s.value.color),1),n.withDirectives(n.createElementVNode("input",{class:"sp-font__select-color",type:"color","onUpdate:modelValue":S[1]||(S[1]=k=>s.value.color=k),onChange:h},null,544),[[n.vModelText,s.value.color]])])])]))}}),[["__scopeId","data-v-bb4d8513"]])},Symbol.toStringTag,{value:"Module"})),ri=t=>(n.pushScopeId("data-v-26c4d301"),t=t(),n.popScopeId(),t),ii={class:"sp-font__select-item"},li=ri(()=>n.createElementVNode("label",null,"Texto",-1)),ci=["value"],fi=T(n.defineComponent({__name:"TextContent",props:{content:{type:[String,null],required:!0}},emits:["update:content","change"],setup(t,{emit:e}){const a=e,o=s=>{const r=s.target;a("update:content",r.value),a("change")};return(s,r)=>(n.openBlock(),n.createElementBlock("div",ii,[li,n.createElementVNode("textarea",{class:"sp-font__select-text",value:t.content,onInput:r[0]||(r[0]=i=>o(i))},null,40,ci)]))}}),[["__scopeId","data-v-26c4d301"]]),ui={a:"text",p:"text",h1:"text"},di=Object.freeze(Object.defineProperty({__proto__:null,default:n.defineComponent({__name:"Content",props:{element:{type:[HTMLElement,null],required:!0}},emits:["update:spContent","update:spClassList"],setup(t,{emit:e}){const a=t,o=n.ref(null),s=n.computed(()=>a.element?ui[a.element.tagName.toLowerCase()]:null),r=()=>{var f;s.value==="text"&&(o.value=(f=a.element)==null?void 0:f.innerHTML)},i=e,l=()=>{i("update:spClassList",[])},c=()=>{l(),i("update:spContent",{content:o.value,type:s.value})};return n.onMounted(()=>{r(),c(),l()}),(f,u)=>(n.openBlock(),n.createElementBlock("div",null,[s.value==="text"?(n.openBlock(),n.createBlock(fi,{key:0,content:o.value,"onUpdate:content":u[0]||(u[0]=_=>o.value=_),onChange:c},null,8,["content"])):n.createCommentVNode("",!0)]))}})},Symbol.toStringTag,{value:"Module"})),mi=t=>(n.pushScopeId("data-v-63c32d24"),t=t(),n.popScopeId(),t),pi={class:"sp-font__select-item"},gi=mi(()=>n.createElementVNode("label",null,"Url",-1)),hi=["value"],_i=T(n.defineComponent({__name:"TextContent",props:{content:{type:[String,null],required:!0}},emits:["update:content","change"],setup(t,{emit:e}){const a=e,o=s=>{const r=s.target;a("update:content",r.value),a("change")};return(s,r)=>(n.openBlock(),n.createElementBlock("div",pi,[gi,n.createElementVNode("textarea",{class:"sp-font__select-text",value:t.content,onInput:r[0]||(r[0]=i=>o(i))},null,40,hi)]))}}),[["__scopeId","data-v-63c32d24"]]),yi=Object.freeze(Object.defineProperty({__proto__:null,default:n.defineComponent({__name:"Url",props:{element:{type:[HTMLElement,null],required:!0}},emits:["update:spAttribute","update:spClassList"],setup(t,{emit:e}){const a=t,o=n.ref(null),s=()=>{var c;o.value=((c=a.element)==null?void 0:c.getAttribute("href"))||""},r=e,i=()=>{r("update:spClassList",[])},l=()=>{i(),r("update:spAttribute",{content:o.value,type:"href"})};return n.onMounted(()=>{s(),l(),i()}),(c,f)=>(n.openBlock(),n.createElementBlock("div",null,[n.createVNode(_i,{content:o.value,"onUpdate:content":f[0]||(f[0]=u=>o.value=u),onChange:l},null,8,["content"])]))}})},Symbol.toStringTag,{value:"Module"})),bi=t=>(n.pushScopeId("data-v-fbcf1321"),t=t(),n.popScopeId(),t),xi={class:"sp-font__select-item"},vi=bi(()=>n.createElementVNode("label",null,"Src",-1)),Ci=["value"],Ei=T(n.defineComponent({__name:"TextContent",props:{content:{type:[String,null],required:!0}},emits:["update:content","change"],setup(t,{emit:e}){const a=e,o=s=>{const r=s.target;a("update:content",r.value),a("change")};return(s,r)=>(n.openBlock(),n.createElementBlock("div",xi,[vi,n.createElementVNode("textarea",{class:"sp-font__select-text",value:t.content,onInput:r[0]||(r[0]=i=>o(i))},null,40,Ci)]))}}),[["__scopeId","data-v-fbcf1321"]]),ki=Object.freeze(Object.defineProperty({__proto__:null,default:n.defineComponent({__name:"Src",props:{element:{type:[HTMLElement,null],required:!0}},emits:["update:spAttribute","update:spClassList"],setup(t,{emit:e}){const a=t,o=n.ref(null),s=()=>{var c;o.value=((c=a.element)==null?void 0:c.getAttribute("src"))||""},r=e,i=()=>{r("update:spClassList",[])},l=()=>{i(),r("update:spAttribute",{content:o.value,type:"src"})};return n.onMounted(()=>{s(),l(),i()}),(c,f)=>(n.openBlock(),n.createElementBlock("div",null,[n.createVNode(Ei,{content:o.value,"onUpdate:content":f[0]||(f[0]=u=>o.value=u),onChange:l},null,8,["content"])]))}})},Symbol.toStringTag,{value:"Module"})),Ni=t=>(n.pushScopeId("data-v-c7b69432"),t=t(),n.popScopeId(),t),Si={class:"sp-element__element-content"},wi=Ni(()=>n.createElementVNode("div",null,[n.createElementVNode("h2",{class:"sp-element__title"},"Elementos")],-1)),Li=["title","onDragstart"],Ai=Object.freeze(Object.defineProperty({__proto__:null,default:T(n.defineComponent({__name:"ElementsPanel",setup(t){const e=Object.keys(xe).map(a=>({icon:xe[a],title:ot[a],element:a}));return(a,o)=>{const s=n.resolveComponent("fa-icon");return n.openBlock(),n.createElementBlock("div",Si,[wi,(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(n.unref(e),({icon:r,title:i,element:l})=>(n.openBlock(),n.createElementBlock("div",{class:"sp-element__icons-container",title:i,onDragstart:c=>n.unref(na)(l),onDragend:o[0]||(o[0]=(...c)=>n.unref(Vt)&&n.unref(Vt)(...c)),draggable:"true"},[n.createVNode(s,{icon:r,class:"sp-element__icon"},null,8,["icon"]),n.createElementVNode("span",null,n.toDisplayString(i),1)],40,Li))),256))])}}}),[["__scopeId","data-v-c7b69432"]])},Symbol.toStringTag,{value:"Module"}));return qs});
