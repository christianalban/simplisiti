(function(a,nt){typeof exports=="object"&&typeof module<"u"?module.exports=nt(require("vue")):typeof define=="function"&&define.amd?define(["vue"],nt):(a=typeof globalThis<"u"?globalThis:a||self,a.SimplisitiComponentEditor=nt(a.Vue))})(this,function(a){"use strict";const nt={div:"Contenedor",a:"Enlace"},mn={div:"container",a:"ancord"},pn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>wr)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>Yr)}},gn={container:["layout","spacing"],ancord:["spacing"]},hn=t=>{const e=mn[t];return gn[e].map(o=>({tab:o,...pn[o]}))},ae=(t,e)=>e.find(n=>n.startsWith(t)),yn={class:"sp-wizard-popup__tabs-container"},bn={class:"sp-wizard-popup__tabs"},_n={class:"sp-wizard-popup__tab"},vn=["title","onClick"],xn={class:"sp-wizard-popup__content"},En={class:"sp-wizard-popup__content-header"},wn=a.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=a.ref([]);n.value=Array.from(e.classList).filter(d=>d.startsWith("sp-style"));const o=a.shallowReactive([]),r=a.shallowRef(void 0),i=a.ref(void 0),s=a.computed(()=>hn(e.tagName.toLowerCase())),l=async()=>{for(const d of s.value)o.push({component:a.defineAsyncComponent(d.component),icon:d.icon,title:d.title,tab:d.tab})},f=d=>{r.value=d.component,i.value=d.tab},c=()=>{o.length>0&&f(o[0])},u=d=>i.value===d.tab,_=d=>{e.classList.forEach(h=>{setTimeout(()=>{h.startsWith("sp-style")&&e.classList.remove(h)},100)}),d.forEach(h=>{setTimeout(()=>{e.classList.add(h)},100)}),window.parent.document.dispatchEvent(new CustomEvent("elementChange",{detail:{simplisitiId:e.dataset.simplisitiid,spClassList:d}}))};return a.onMounted(async()=>{await l(),c()}),(d,h)=>{const A=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock(a.Fragment,null,[a.createElementVNode("div",yn,[a.createElementVNode("div",bn,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(o),N=>(a.openBlock(),a.createElementBlock("div",_n,[a.createElementVNode("button",{class:a.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":u(N)}]),title:N.title,onClick:k=>f(N)},[a.createVNode(A,{icon:N.icon},null,8,["icon"])],10,vn)]))),256))])]),a.createElementVNode("div",xn,[a.createElementVNode("div",En,[(a.openBlock(),a.createBlock(a.resolveDynamicComponent(r.value),{onUpdate:_,"sp-class-list":n.value},null,40,["sp-class-list"]))])])],64)}}}),at=(t,e)=>{const n=t.__vccOpts||t;for(const[o,r]of e)n[o]=r;return n},Nn=at(wn,[["__scopeId","data-v-7b7a2678"]]),kn={class:"sp-configuration-popup__header"},An={class:"sp-configuration-popup__body"},Cn=at(a.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,o=a.ref(null),r=a.ref(!1),i=e,s=c=>{setTimeout(()=>{if(!c)return;const u=c.getBoundingClientRect(),_=u.top,d=u.bottom,h=u.left+u.width+10;if(o.value){o.value.style.top=`${_}px`,o.value.style.left=`${h}px`;const A=document.body.offsetWidth;h+o.value.offsetWidth>A&&(o.value.style.top=`${_+10}px`,o.value.style.left=`${h-o.value.offsetWidth-20}px`);const N=document.body.offsetHeight;_+o.value.offsetHeight>N&&(o.value.style.top="auto",o.value.style.bottom=`${d-o.value.offsetHeight+20}px`,o.value.offsetTop<0&&(o.value.style.bottom="20px")),o.value.offsetTop<0&&(o.value.style.top="20px")}},50)},l=a.computed(()=>{var u;const c=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return c&&nt[c]||"Element"}),f=c=>{r.value=!0,setTimeout(()=>{i("close",c)},300)};return s(n),(c,u)=>{const _=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock("div",{class:a.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:o,onClick:a.withModifiers(d=>{},["stop"])},[a.createElementVNode("div",kn,[a.createElementVNode("h4",null,a.toDisplayString(l.value),1),a.createVNode(_,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=d=>f(d))})]),a.createElementVNode("div",An,[t.element?(a.openBlock(),a.createBlock(Nn,{key:0,element:t.element},null,8,["element"])):a.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-f88fd076"]]),Sn=a.defineComponent({__name:"App",setup(t){const e=a.ref(!1),n=a.ref(null),o=i=>{i.forEach(s=>{s.addEventListener("click",l=>{e.value||(e.value=!0,n.value=s,s.classList.add("sp-element__active")),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseover",l=>{e.value||s.classList.add("sp-element__active"),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseout",l=>{e.value||s.classList.remove("sp-element__active"),l.preventDefault(),l.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return a.onMounted(()=>{const i=document.querySelectorAll("div"),s=document.querySelectorAll("a");o(i),o(s)}),(i,s)=>{var l;return e.value?(a.openBlock(),a.createBlock(Cn,{key:0,element:n.value,type:(l=n.value)==null?void 0:l.tagName,onClose:a.withModifiers(r,["stop"])},null,8,["element","type"])):a.createCommentVNode("",!0)}}}),oe=()=>{};let Nt={},re={},ie=null,se={mark:oe,measure:oe};try{typeof window<"u"&&(Nt=window),typeof document<"u"&&(re=document),typeof MutationObserver<"u"&&(ie=MutationObserver),typeof performance<"u"&&(se=performance)}catch{}const{userAgent:le=""}=Nt.navigator||{},D=Nt,E=re,ce=ie,mt=se;D.document;const I=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",fe=~le.indexOf("MSIE")||~le.indexOf("Trident/");var w="classic",ue="duotone",S="sharp",O="sharp-duotone",On=[w,ue,S,O],Pn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},de={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ln=["kit"],Mn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},In={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Vn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Fn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Dn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Bn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},me={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},jn=["solid","regular","light","thin","duotone","brands"],pe=[1,2,3,4,5,6,7,8,9,10],Rn=pe.concat([11,12,13,14,15,16,17,18,19,20]),ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$n=[...Object.keys(Fn),...jn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(pe.map(t=>"".concat(t,"x"))).concat(Rn.map(t=>"w-".concat(t))),Un={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Yn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ge={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const V="___FONT_AWESOME___",kt=16,he="fa",ye="svg-inline--fa",Y="data-fa-i2svg",At="data-fa-pseudo-element",Hn="data-fa-pseudo-element-pending",Ct="data-prefix",St="data-icon",be="fontawesome-i2svg",Gn="async",Xn=["HTML","HEAD","STYLE","SCRIPT"],_e=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),ve=[w,S,O];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[w]}})}const xe={...me};xe[w]={...me[w],...de.kit,...de["kit-duotone"]};const H=rt(xe),Ot={...Bn};Ot[w]={...Ot[w],...ge.kit,...ge["kit-duotone"]};const it=rt(Ot),Pt={...Dn};Pt[w]={...Pt[w],...Yn.kit};const G=rt(Pt),Lt={...Vn};Lt[w]={...Lt[w],...Wn.kit};const qn=rt(Lt),Kn=Mn,Ee="fa-layers-text",Qn=zn,Zn={...Pn};rt(Zn);const Jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mt=ot,Q=new Set;Object.keys(it[w]).map(Q.add.bind(Q)),Object.keys(it[S]).map(Q.add.bind(Q)),Object.keys(it[O]).map(Q.add.bind(Q));const ta=[...Ln,...$n],st=D.FontAwesomeConfig||{};function ea(t){var e=E.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function na(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,o]=e;const r=na(ea(n));r!=null&&(st[o]=r)});const we={styleDefault:"solid",familyDefault:"classic",cssPrefix:he,replacementClass:ye,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const Z={...we,...st};Z.autoReplaceSvg||(Z.observeMutations=!1);const p={};Object.keys(we).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){Z[t]=e,lt.forEach(n=>n(p))},get:function(){return Z[t]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,lt.forEach(e=>e(p))},get:function(){return Z.cssPrefix}}),D.FontAwesomeConfig=p;const lt=[];function aa(t){return lt.push(t),()=>{lt.splice(lt.indexOf(t),1)}}const B=kt,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oa(t){if(!t||!I)return;const e=E.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=E.head.childNodes;let o=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(o=i)}return E.head.insertBefore(e,o),t}const ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){let t=12,e="";for(;t-- >0;)e+=ra[Math.random()*62|0];return e}function J(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ne(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Tt(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function sa(t){let{transform:e,containerWidth:n,iconWidth:o}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},c={transform:"translate(".concat(o/2*-1," -256)")};return{outer:r,inner:f,path:c}}function la(t){let{transform:e,width:n=kt,height:o=kt,startCentered:r=!1}=t,i="";return r&&fe?i+="translate(".concat(e.x/B-n/2,"em, ").concat(e.y/B-o/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):i+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),i+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var ca=`:root, :host {
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
}`;function ke(){const t=he,e=ye,n=p.cssPrefix,o=p.replacementClass;let r=ca;if(n!==t||o!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(o))}return r}let Ae=!1;function It(){p.autoAddCss&&!Ae&&(oa(ke()),Ae=!0)}var fa={mixout(){return{dom:{css:ke,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}};const F=D||{};F[V]||(F[V]={}),F[V].styles||(F[V].styles={}),F[V].hooks||(F[V].hooks={}),F[V].shims||(F[V].shims=[]);var z=F[V];const Ce=[],Se=function(){E.removeEventListener("DOMContentLoaded",Se),gt=1,Ce.map(t=>t())};let gt=!1;I&&(gt=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),gt||E.addEventListener("DOMContentLoaded",Se));function ua(t){I&&(gt?setTimeout(t,0):Ce.push(t))}function ft(t){const{tag:e,attributes:n={},children:o=[]}=t;return typeof t=="string"?Ne(t):"<".concat(e," ").concat(ia(n),">").concat(o.map(ft).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vt=function(e,n,o,r){var i=Object.keys(e),s=i.length,l=n,f,c,u;for(o===void 0?(f=1,u=e[i[0]]):(f=0,u=o);f<s;f++)c=i[f],u=l(u,e[c],c,e);return u};function da(t){const e=[];let n=0;const o=t.length;for(;n<o;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<o){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=da(t);return e.length===1?e[0].toString(16):null}function ma(t,e){const n=t.length;let o=t.charCodeAt(e),r;return o>=55296&&o<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(o-55296)*1024+r-56320+65536:o}function Pe(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return!!o.icon?e[o.iconName]=o.icon:e[n]=o,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=n,r=Pe(e);typeof z.hooks.addPack=="function"&&!o?z.hooks.addPack(t,Pe(e)):z.styles[t]={...z.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:X,shims:pa}=z,ga={[w]:Object.values(G[w]),[S]:Object.values(G[S]),[O]:Object.values(G[O])};let Bt=null,Le={},Me={},ze={},Te={},Ie={};const ha={[w]:Object.keys(H[w]),[S]:Object.keys(H[S]),[O]:Object.keys(H[O])};function ya(t){return~ta.indexOf(t)}function ba(t,e){const n=e.split("-"),o=n[0],r=n.slice(1).join("-");return o===t&&r!==""&&!ya(r)?r:null}const Ve=()=>{const t=o=>Vt(X,(r,i,s)=>(r[s]=Vt(i,o,{}),r),{});Le=t((o,r,i)=>(r[3]&&(o[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{o[l.toString(16)]=i}),o)),Me=t((o,r,i)=>(o[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{o[l]=i}),o)),Ie=t((o,r,i)=>{const s=r[2];return o[i]=i,s.forEach(l=>{o[l]=i}),o});const e="far"in X||p.autoFetchSvg,n=Vt(pa,(o,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(o.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(o.unicodes[i.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});ze=n.names,Te=n.unicodes,Bt=ht(p.styleDefault,{family:p.familyDefault})};aa(t=>{Bt=ht(t.styleDefault,{family:p.familyDefault})}),Ve();function jt(t,e){return(Le[t]||{})[e]}function _a(t,e){return(Me[t]||{})[e]}function j(t,e){return(Ie[t]||{})[e]}function Fe(t){return ze[t]||{prefix:null,iconName:null}}function va(t){const e=Te[t],n=jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Bt}const Rt=()=>({prefix:null,iconName:null,rest:[]});function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=e,o=H[n][t],r=it[n][t]||it[n][o],i=t in z.styles?t:null;return r||i||null}const xa={[w]:Object.keys(G[w]),[S]:Object.keys(G[S]),[O]:Object.keys(G[O])};function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,o={[w]:"".concat(p.cssPrefix,"-").concat(w),[S]:"".concat(p.cssPrefix,"-").concat(S),[O]:"".concat(p.cssPrefix,"-").concat(O)};let r=null,i=w;const s=On.filter(f=>f!==ue);s.forEach(f=>{(t.includes(o[f])||t.some(c=>xa[f].includes(c)))&&(i=f)});const l=t.reduce((f,c)=>{const u=ba(p.cssPrefix,c);if(X[c]?(c=ga[i].includes(c)?qn[i][c]:c,r=c,f.prefix=c):ha[i].indexOf(c)>-1?(r=c,f.prefix=ht(c,{family:i})):u?f.iconName=u:c!==p.replacementClass&&!s.some(_=>c===o[_])&&f.rest.push(c),!n&&f.prefix&&f.iconName){const _=r==="fa"?Fe(f.iconName):{},d=j(f.prefix,f.iconName);_.prefix&&(r=null),f.iconName=_.iconName||d||f.iconName,f.prefix=_.prefix||f.prefix,f.prefix==="far"&&!X.far&&X.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},Rt());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===S&&(X.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=j(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===O&&(X.fasds||p.autoFetchSvg)&&(l.prefix="fasds",l.iconName=j(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=R()||"fas"),l}class Ea{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Dt(i,r[i]);const s=G[w][i];s&&Dt(s,r[i]),Ve()})}reset(){this.definitions={}}_pullDefinitions(e,n){const o=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(o).map(r=>{const{prefix:i,iconName:s,icon:l}=o[r],f=l[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][s]=l}),e}}let De=[],tt={};const et={},wa=Object.keys(et);function Na(t,e){let{mixoutsTo:n}=e;return De=t,tt={},Object.keys(et).forEach(o=>{wa.indexOf(o)===-1&&delete et[o]}),De.forEach(o=>{const r=o.mixout?o.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),o.hooks){const i=o.hooks();Object.keys(i).forEach(s=>{tt[s]||(tt[s]=[]),tt[s].push(i[s])})}o.provides&&o.provides(et)}),n}function $t(t,e){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return(tt[t]||[]).forEach(s=>{e=s.apply(null,[e,...o])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];(tt[t]||[]).forEach(i=>{i.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=j(n,e)||e,Oe(Be.definitions,n,e)||Oe(z.styles,n,e)}const Be=new Ea,P={noAuto:()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,q("noAuto")},config:p,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(q("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ua(()=>{ka({autoReplaceSvgRoot:e}),q("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ht(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Kn))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:j(e,t)||t}}}},library:Be,findIconDefinition:Ut,toHtml:ft},ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=E}=t;(Object.keys(z.styles).length>0||p.autoFetchSvg)&&I&&p.autoReplaceSvg&&P.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ft(n))}}),Object.defineProperty(t,"node",{get:function(){if(!I)return;const n=E.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Aa(t){let{children:e,main:n,mask:o,attributes:r,styles:i,transform:s}=t;if(Tt(s)&&n.found&&!o.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};r.style=pt({...i,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Ca(t){let{prefix:e,iconName:n,children:o,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:o}]}]}function Wt(t){const{icons:{main:e,mask:n},prefix:o,iconName:r,transform:i,symbol:s,title:l,maskId:f,titleId:c,extra:u,watchable:_=!1}=t,{width:d,height:h}=n.found?n:e,A=o==="fak",N=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(x=>u.classes.indexOf(x)===-1).filter(x=>x!==""||!!x).concat(u.classes).join(" ");let k={children:[],attributes:{...u.attributes,"data-prefix":o,"data-icon":r,class:N,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(h)}};const g=A&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/h*16*.0625,"em")}:{};_&&(k.attributes[Y]=""),l&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||ct())},children:[l]}),delete k.attributes.title);const m={...k,prefix:o,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:{...g,...u.styles}},{children:v,attributes:y}=n.found&&e.found?$("generateAbstractMask",m)||{children:[],attributes:{}}:$("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=v,m.attributes=y,s?Ca(m):Aa(m)}function je(t){const{content:e,width:n,height:o,transform:r,title:i,extra:s,watchable:l=!1}=t,f={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};l&&(f[Y]="");const c={...s.styles};Tt(r)&&(c.transform=la({transform:r,startCentered:!0,width:n,height:o}),c["-webkit-transform"]=c.transform);const u=pt(c);u.length>0&&(f.style=u);const _=[];return _.push({tag:"span",attributes:f,children:[e]}),i&&_.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),_}function Sa(t){const{content:e,title:n,extra:o}=t,r={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")},i=pt(o.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Yt}=z;function Ht(t){const e=t[0],n=t[1],[o]=t.slice(4);let r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Mt.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:r}}const Oa={found:!1,width:512,height:512};function Pa(t,e){!_e&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=R()),new Promise((o,r)=>{if(n==="fa"){const i=Fe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const i=Yt[e][t];return o(Ht(i))}Pa(t,e),o({...Oa,icon:p.showMissingIcons&&t?$("missingIconAbstract")||{}:{}})})}const Re=()=>{},Xt=p.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:Re,measure:Re},ut='FA "6.6.0"',La=t=>(Xt.mark("".concat(ut," ").concat(t," begins")),()=>$e(t)),$e=t=>{Xt.mark("".concat(ut," ").concat(t," ends")),Xt.measure("".concat(ut," ").concat(t),"".concat(ut," ").concat(t," begins"),"".concat(ut," ").concat(t," ends"))};var qt={begin:La,end:$e};const _t=()=>{};function Ue(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function Ma(t){const e=t.getAttribute?t.getAttribute(Ct):null,n=t.getAttribute?t.getAttribute(St):null;return e&&n}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Ta(){return p.autoReplaceSvg===!0?vt.replace:vt[p.autoReplaceSvg]||vt.replace}function Ia(t){return E.createElementNS("http://www.w3.org/2000/svg",t)}function Va(t){return E.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ia:Va}=e;if(typeof t=="string")return E.createTextNode(t);const o=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){o.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){o.appendChild(We(i,{ceFn:n}))}),o}function Fa(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const vt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(Y)===null&&p.keepOriginalSource){let n=E.createComment(Fa(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~zt(e).indexOf(p.replacementClass))return vt.replace(t);const o=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===p.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ft(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=r}};function Ye(t){t()}function He(t,e){const n=typeof e=="function"?e:_t;if(t.length===0)n();else{let o=Ye;p.mutateApproach===Gn&&(o=D.requestAnimationFrame||Ye),o(()=>{const r=Ta(),i=qt.begin("mutate");t.map(r),i(),n()})}}let Kt=!1;function Ge(){Kt=!0}function Qt(){Kt=!1}let xt=null;function Xe(t){if(!ce||!p.observeMutations)return;const{treeCallback:e=_t,nodeCallback:n=_t,pseudoElementsCallback:o=_t,observeMutationsRoot:r=E}=t;xt=new ce(i=>{if(Kt)return;const s=R();J(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ue(l.addedNodes[0])&&(p.searchPseudoElements&&o(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&p.searchPseudoElements&&o(l.target.parentNode),l.type==="attributes"&&Ue(l.target)&&~Jn.indexOf(l.attributeName))if(l.attributeName==="class"&&Ma(l.target)){const{prefix:f,iconName:c}=yt(zt(l.target));l.target.setAttribute(Ct,f||s),c&&l.target.setAttribute(St,c)}else za(l.target)&&n(l.target)})}),I&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Da(){xt&&xt.disconnect()}function Ba(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((o,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(o[s]=l.join(":").trim()),o},{})),n}function ja(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"";let r=yt(zt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&o.length>0&&(r.iconName=_a(r.prefix,t.innerText)||jt(r.prefix,Ft(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ra(t){const e=J(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),o=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(o||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:o,rest:r}=ja(t),i=Ra(t),s=$t("parseNodeAttributes",{},t);let l=e.styleParser?Ba(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...s}}const{styles:Ua}=z;function Ke(t){const e=p.autoReplaceSvg==="nest"?qe(t,{styleParser:!1}):qe(t);return~e.extra.classes.indexOf(Ee)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}let T=new Set;ve.map(t=>{T.add("fa-".concat(t))}),Object.keys(H[w]).map(T.add.bind(T)),Object.keys(H[S]).map(T.add.bind(T)),Object.keys(H[O]).map(T.add.bind(T)),T=[...T];function Qe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();const n=E.documentElement.classList,o=u=>n.add("".concat(be,"-").concat(u)),r=u=>n.remove("".concat(be,"-").concat(u)),i=p.autoFetchSvg?T:ve.map(u=>"fa-".concat(u)).concat(Object.keys(Ua));i.includes("fa")||i.push("fa");const s=[".".concat(Ee,":not([").concat(Y,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=J(t.querySelectorAll(s))}catch{}if(l.length>0)o("pending"),r("complete");else return Promise.resolve();const f=qt.begin("onTree"),c=l.reduce((u,_)=>{try{const d=Ke(_);d&&u.push(d)}catch(d){_e||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,_)=>{Promise.all(c).then(d=>{He(d,()=>{o("active"),o("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(d=>{f(),_(d)})})}function Wa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ke(t).then(n=>{n&&He([n],e)})}function Ya(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(e||{}).icon?e:Ut(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(o,{...n,mask:r})}}const Ha=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,symbol:o=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:_,iconName:d,icon:h}=t;return bt({type:"icon",...t},()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(s?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(l||ct()):(c["aria-hidden"]="true",c.focusable="false")),Wt({icons:{main:Ht(h),mask:r?Ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:d,transform:{...M,...n},symbol:o,title:s,maskId:i,titleId:l,extra:{attributes:c,styles:u,classes:f}})))};var Ga={mixout(){return{icon:Ya(Ha)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Qe,t.nodeCallback=Wa,t}}},provides(t){t.i2svg=function(e){const{node:n=E,callback:o=()=>{}}=e;return Qe(n,o)},t.generateSvgReplacementMutation=function(e,n){const{iconName:o,title:r,titleId:i,prefix:s,transform:l,symbol:f,mask:c,maskId:u,extra:_}=n;return new Promise((d,h)=>{Promise.all([Gt(o,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[N,k]=A;d([e,Wt({icons:{main:N,mask:k},prefix:s,iconName:o,transform:l,symbol:f,maskId:u,title:r,titleId:i,extra:_,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:o,main:r,transform:i,styles:s}=e;const l=pt(s);l.length>0&&(o.style=l);let f;return Tt(i)&&(f=$("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:o}}}},Xa={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let o=[];return t(r=>{Array.isArray(r)?r.map(i=>{o=o.concat(i.abstract)}):o=o.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:o}]})}}}},qa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:o=[],attributes:r={},styles:i={}}=e;return bt({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),Sa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...o]}})))}}}},Ka={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,title:o=null,classes:r=[],attributes:i={},styles:s={}}=e;return bt({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),je({content:t,transform:{...M,...n},title:o,extra:{attributes:i,styles:s,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:o,transform:r,extra:i}=n;let s=null,l=null;if(fe){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,l=c.height/f}return p.autoA11y&&!o&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,je({content:e.innerHTML,width:s,height:l,transform:r,title:o,extra:i,watchable:!0})])}}};const Qa=new RegExp('"',"ug"),Ze=[1105920,1112319],Je={FontAwesome:{normal:"fas",400:"fas"},...In,...Tn,...Un},Zt=Object.keys(Je).reduce((t,e)=>(t[e.toLowerCase()]=Je[e],t),{}),Za=Object.keys(Zt).reduce((t,e)=>{const n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ja(t){const e=t.replace(Qa,""),n=ma(e,0),o=n>=Ze[0]&&n<=Ze[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:o||r}}function to(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(e),r=isNaN(o)?"normal":o;return(Zt[n]||{})[r]||Za[n]}function tn(t,e){const n="".concat(Hn).concat(e.replace(":","-"));return new Promise((o,r)=>{if(t.getAttribute(n)!==null)return o();const s=J(t.children).filter(d=>d.getAttribute(At)===e)[0],l=D.getComputedStyle(t,e),f=l.getPropertyValue("font-family"),c=f.match(Qn),u=l.getPropertyValue("font-weight"),_=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),o();if(c&&_!=="none"&&_!==""){const d=l.getPropertyValue("content");let h=to(f,u);const{value:A,isSecondary:N}=Ja(d),k=c[0].startsWith("FontAwesome");let g=jt(h,A),m=g;if(k){const v=va(A);v.iconName&&v.prefix&&(g=v.iconName,h=v.prefix)}if(g&&!N&&(!s||s.getAttribute(Ct)!==h||s.getAttribute(St)!==m)){t.setAttribute(n,m),s&&t.removeChild(s);const v=$a(),{extra:y}=v;y.attributes[At]=e,Gt(g,h).then(x=>{const b=Wt({...v,icons:{main:x,mask:Rt()},prefix:h,iconName:m,extra:y,watchable:!0}),K=E.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=b.map(Hr=>ft(Hr)).join(`
`),t.removeAttribute(n),o()}).catch(r)}else o()}else o()})}function eo(t){return Promise.all([tn(t,"::before"),tn(t,"::after")])}function no(t){return t.parentNode!==document.head&&!~Xn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function en(t){if(I)return new Promise((e,n)=>{const o=J(t.querySelectorAll("*")).filter(no).map(eo),r=qt.begin("searchPseudoElements");Ge(),Promise.all(o).then(()=>{r(),Qt(),e()}).catch(()=>{r(),Qt(),n()})})}var ao={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=en,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=E}=e;p.searchPseudoElements&&en(n)}}};let nn=!1;var oo={mixout(){return{dom:{unwatch(){Ge(),nn=!0}}}},hooks(){return{bootstrap(){Xe($t("mutationObserverCallbacks",{}))},noAuto(){Da()},watch(t){const{observeMutationsRoot:e}=t;nn?Qt():Xe($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const an=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,o)=>{const r=o.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var ro={mixout(){return{parse:{transform:t=>an(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=an(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:o,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),f="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},_={transform:"translate(".concat(i/2*-1," -256)")},d={outer:s,inner:u,path:_};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Jt={x:0,y:0,width:"100%",height:"100%"};function on(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function io(t){return t.tag==="g"?t.children:[t]}var so={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),o=n?yt(n.split(" ").map(r=>r.trim())):Rt();return o.prefix||(o.prefix=R()),t.mask=o,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:o,main:r,mask:i,maskId:s,transform:l}=e;const{width:f,icon:c}=r,{width:u,icon:_}=i,d=sa({transform:l,containerWidth:u,iconWidth:f}),h={tag:"rect",attributes:{...Jt,fill:"white"}},A=c.children?{children:c.children.map(on)}:{},N={tag:"g",attributes:{...d.inner},children:[on({tag:c.tag,attributes:{...c.attributes,...d.path},...A})]},k={tag:"g",attributes:{...d.outer},children:[N]},g="mask-".concat(s||ct()),m="clip-".concat(s||ct()),v={tag:"mask",attributes:{...Jt,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[h,k]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:io(_)},v]};return n.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(g,")"),...Jt}}),{children:n,attributes:o}}}},lo={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...o,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...o,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...o,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...o,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},co={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return t.symbol=o,t}}}},fo=[fa,Ga,Xa,qa,Ka,ao,oo,ro,so,lo,co];Na(fo,{mixoutsTo:P}),P.noAuto;const rn=P.config,uo=P.library;P.dom;const Et=P.parse;P.findIconDefinition,P.toHtml;const mo=P.icon;P.layer;const po=P.text;P.counter;const go={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},ho={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},yo={prefix:"fas",iconName:"arrow-down-wide-short",icon:[576,512,["sort-amount-asc","sort-amount-down"],"f160","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]},bo={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},_o={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},vo={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},xo={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},Eo={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},wo={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},No={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},ko={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function sn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sn(Object(n),!0).forEach(function(o){C(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Ao(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Co(t){var e=Ao(t,"string");return typeof e=="symbol"?e:e+""}function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function C(t,e,n){return e=Co(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function So(t,e){if(t==null)return{};var n={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;n[o]=t[o]}return n}function Oo(t,e){if(t==null)return{};var n=So(t,e),o,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}function te(t){return Po(t)||Lo(t)||Mo(t)||zo()}function Po(t){if(Array.isArray(t))return ee(t)}function Lo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mo(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ln={exports:{}};(function(t){(function(e){var n=function(g,m,v){if(!c(m)||_(m)||d(m)||h(m)||f(m))return m;var y,x=0,b=0;if(u(m))for(y=[],b=m.length;x<b;x++)y.push(n(g,m[x],v));else{y={};for(var K in m)Object.prototype.hasOwnProperty.call(m,K)&&(y[g(K,v)]=n(g,m[K],v))}return y},o=function(g,m){m=m||{};var v=m.separator||"_",y=m.split||/(?=[A-Z])/;return g.split(y).join(v)},r=function(g){return A(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(m,v){return v?v.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var m=r(g);return m.substr(0,1).toUpperCase()+m.substr(1)},s=function(g,m){return o(g,m).toLowerCase()},l=Object.prototype.toString,f=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return l.call(g)=="[object Array]"},_=function(g){return l.call(g)=="[object Date]"},d=function(g){return l.call(g)=="[object RegExp]"},h=function(g){return l.call(g)=="[object Boolean]"},A=function(g){return g=g-0,g===g},N=function(g,m){var v=m&&"process"in m?m.process:m;return typeof v!="function"?g:function(y,x){return v(y,g,x)}},k={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(g,m){return n(N(r,m),g)},decamelizeKeys:function(g,m){return n(N(s,m),g,m)},pascalizeKeys:function(g,m){return n(N(i,m),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(To)})(ln);var Io=ln.exports,Vo=["class","style"];function Fo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var o=n.indexOf(":"),r=Io.camelize(n.slice(0,o)),i=n.slice(o+1).trim();return e[r]=i,e},{})}function Do(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(f){return ne(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var u=t.attributes[c];switch(c){case"class":f.class=Do(u);break;case"style":f.style=Fo(u);break;default:f.attrs[c]=u}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,l=Oo(n,Vo);return a.h(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),s)},r.attrs),l),o)}var cn=!1;try{cn=process.env.NODE_ENV==="production"}catch{}function Bo(){if(!cn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?C({},t,e):{}}function jo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},C(C(C(C(C(C(C(C(C(C(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),C(C(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(o){return n[o]?o:null}).filter(function(o){return o})}function fn(t){if(t&&wt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Et.icon)return Et.icon(t);if(t===null)return null;if(wt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ro=a.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var o=n.attrs,r=a.computed(function(){return fn(e.icon)}),i=a.computed(function(){return dt("classes",jo(e))}),s=a.computed(function(){return dt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform)}),l=a.computed(function(){return dt("mask",fn(e.mask))}),f=a.computed(function(){return mo(r.value,L(L(L(L({},i.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});a.watch(f,function(u){if(!u)return Bo("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var c=a.computed(function(){return f.value?ne(f.value.abstract[0],{},o):null});return function(){return c.value}}});a.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var o=n.slots,r=rn.familyPrefix,i=a.computed(function(){return["".concat(r,"-layers")].concat(te(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return a.h("div",{class:i.value},o.default?o.default():[])}}}),a.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var o=n.attrs,r=rn.familyPrefix,i=a.computed(function(){return dt("classes",[].concat(te(e.counter?["".concat(r,"-layers-counter")]:[]),te(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),s=a.computed(function(){return dt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform)}),l=a.computed(function(){var c=po(e.value.toString(),L(L({},s.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),f=a.computed(function(){return ne(l.value,{},o)});return function(){return f.value}}}),uo.add(ko,Eo,bo,go,vo,_o,No,wo,xo,ho,yo);const $o={install:t=>{t.component("simplisiti-component-editor",Sn),t.component("fa-icon",Ro)}},Uo=12,Wo=12,un=["0","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],Yo=t=>un.map(e=>({value:t(e).replace(".","_"),label:e})),U=t=>(a.pushScopeId("data-v-326eca6a"),t=t(),a.popScopeId(),t),Ho={class:"sp-layout__container"},Go={class:"sp-layout__header"},Xo={class:"sp-layout__body"},qo={class:"sp-layout__body"},Ko={key:0,class:"sp-layout__flex-container"},Qo={class:"sp-layout__grid-item sp-layout__flex-direction-container"},Zo=[U(()=>a.createElementVNode("option",{value:""},null,-1)),U(()=>a.createElementVNode("option",{value:"sp-style__layout-flex-direction__row"},"Fila",-1)),U(()=>a.createElementVNode("option",{value:"sp-style__layout-flex-direction__column"},"Columna",-1))],Jo={class:"sp-layout__gap-spacing-container"},tr={class:"sp-layout__grid-item sp-layout__gap-container"},er=U(()=>a.createElementVNode("option",{value:""},null,-1)),nr=["value"],ar={key:1,class:"sp-layout__grid-container"},or={class:"sp-layout__grid-item sp-layout__columns-container"},rr=U(()=>a.createElementVNode("option",{value:""},null,-1)),ir=["value"],sr={class:"sp-layout__grid-item sp-layout__rows-container"},lr=U(()=>a.createElementVNode("option",{value:""},null,-1)),cr=["value"],fr={class:"sp-layout__horizontal-alignment-container"},ur=U(()=>a.createElementVNode("label",null,"Horizontal",-1)),dr={class:"sp-layout__buttons-container"},mr={class:"sp-layout__button__aligment"},pr={class:"sp-layout__button__aligment"},gr={class:"sp-layout__button__aligment"},hr={key:0,class:"sp-layout__button__aligment"},yr={class:"sp-layout__vertical-alignment-container"},br=U(()=>a.createElementVNode("label",null,"Vertical",-1)),_r={class:"sp-layout__buttons-container"},vr={class:"sp-layout__button__aligment"},xr={class:"sp-layout__button__aligment"},Er={class:"sp-layout__button__aligment"},wr=Object.freeze(Object.defineProperty({__proto__:null,default:at(a.defineComponent({__name:"Layout",props:{spClassList:{type:Array,default:[]}},emits:["update"],setup(t,{emit:e}){const n=t,o=a.ref(null),r=a.ref(null),i=a.ref(null),s=a.ref(null),l=a.ref(null),f=a.ref(null),c=a.ref(null),u=v=>ae(v,n.spClassList),_=()=>Yo(v=>`sp-style__layout-gap__${v}`),d=a.computed(()=>_()),h=()=>{o.value=u("sp-style__layout-display__"),r.value=u("sp-style__layout-justify-content__"),i.value=u("sp-style__layout-align-items__"),s.value=u("sp-style__layout-flex-direction__"),l.value=u("sp-style__layout-grid-template__columns-"),f.value=u("sp-style__layout-grid-template__rows-"),c.value=u("sp-style__layout-gap__")},A=e,N=v=>{const y=v==="rows"?Uo:Wo,x=[];for(let b=0;b<y;b++)x.push(b+1);return x},k=a.computed(()=>N("columns")),g=a.computed(()=>N("rows")),m=()=>{const v=[o.value,r.value,i.value,s.value,l.value,f.value,c.value].filter(y=>y);A("update",v)};return a.onMounted(()=>{h()}),(v,y)=>{const x=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock("div",Ho,[a.createElementVNode("div",Go,[a.createElementVNode("label",null,[a.withDirectives(a.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__flex","onUpdate:modelValue":y[0]||(y[0]=b=>o.value=b),onChange:m},null,544),[[a.vModelRadio,o.value]]),a.createVNode(x,{icon:"arrows-left-right"}),a.createTextVNode(" Flexible ")]),a.createElementVNode("label",null,[a.withDirectives(a.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__grid","onUpdate:modelValue":y[1]||(y[1]=b=>o.value=b),onChange:m},null,544),[[a.vModelRadio,o.value]]),a.createVNode(x,{icon:"table-cells"}),a.createTextVNode(" Tabla ")])]),a.createElementVNode("div",Xo,[a.createElementVNode("div",qo,[o.value==="sp-style__layout-display__flex"?(a.openBlock(),a.createElementBlock("div",Ko,[a.createElementVNode("div",Qo,[a.createElementVNode("label",null,[a.createVNode(x,{icon:"arrow-down-wide-short"}),a.createTextVNode(" Dirección ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":y[2]||(y[2]=b=>s.value=b),onChange:m},Zo,544),[[a.vModelSelect,s.value]])])])):a.createCommentVNode("",!0),a.createElementVNode("div",Jo,[a.createElementVNode("div",tr,[a.createElementVNode("label",null,[a.createVNode(x,{icon:"arrow-down-wide-short"}),a.createTextVNode(" Espaciado ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":y[3]||(y[3]=b=>c.value=b),onChange:m},[er,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(d.value,b=>(a.openBlock(),a.createElementBlock("option",{key:b.value,value:b.value},a.toDisplayString(b.label),9,nr))),128))],544),[[a.vModelSelect,c.value]])])]),o.value==="sp-style__layout-display__grid"?(a.openBlock(),a.createElementBlock("div",ar,[a.createElementVNode("div",or,[a.createElementVNode("label",null,[a.createVNode(x,{icon:"grip"}),a.createTextVNode(" Columas ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":y[4]||(y[4]=b=>l.value=b),onChange:m},[rr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(k.value,b=>(a.openBlock(),a.createElementBlock("option",{key:b,value:`sp-style__layout-grid-template__columns-${b}`},a.toDisplayString(b),9,ir))),128))],544),[[a.vModelSelect,l.value]])]),a.createElementVNode("div",sr,[a.createElementVNode("label",null,[a.createVNode(x,{icon:"grip-vertical"}),a.createTextVNode(" Filas ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":y[5]||(y[5]=b=>f.value=b),onChange:m},[lr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(g.value,b=>(a.openBlock(),a.createElementBlock("option",{key:b,value:`sp-style__layout-grid-template__rows-${b}`},a.toDisplayString(b),9,cr))),128))],544),[[a.vModelSelect,f.value]])])])):a.createCommentVNode("",!0),a.createElementVNode("div",fr,[ur,a.createElementVNode("div",dr,[a.createElementVNode("label",mr,[a.createVNode(x,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__start","onUpdate:modelValue":y[6]||(y[6]=b=>r.value=b),onChange:m},null,544),[[a.vModelRadio,r.value]])]),a.createElementVNode("label",pr,[a.createVNode(x,{icon:"arrows-left-right-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__center","onUpdate:modelValue":y[7]||(y[7]=b=>r.value=b),onChange:m},null,544),[[a.vModelRadio,r.value]])]),a.createElementVNode("label",gr,[a.createVNode(x,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__end","onUpdate:modelValue":y[8]||(y[8]=b=>r.value=b),onChange:m},null,544),[[a.vModelRadio,r.value]])]),o.value==="sp-style__layout-display__flex"?(a.openBlock(),a.createElementBlock("label",hr,[a.createVNode(x,{icon:"bars"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__between","onUpdate:modelValue":y[9]||(y[9]=b=>r.value=b),onChange:m},null,544),[[a.vModelRadio,r.value]])])):a.createCommentVNode("",!0)])]),a.createElementVNode("div",yr,[br,a.createElementVNode("div",_r,[a.createElementVNode("label",vr,[a.createVNode(x,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__start","onUpdate:modelValue":y[10]||(y[10]=b=>i.value=b),onChange:m},null,544),[[a.vModelRadio,i.value]])]),a.createElementVNode("label",xr,[a.createVNode(x,{icon:"arrows-left-right-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__center","onUpdate:modelValue":y[11]||(y[11]=b=>i.value=b),onChange:m},null,544),[[a.vModelRadio,i.value]])]),a.createElementVNode("label",Er,[a.createVNode(x,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__end","onUpdate:modelValue":y[12]||(y[12]=b=>i.value=b),onChange:m},null,544),[[a.vModelRadio,i.value]])])])])])])])}}}),[["__scopeId","data-v-326eca6a"]])},Symbol.toStringTag,{value:"Module"})),W=t=>(a.pushScopeId("data-v-33128c28"),t=t(),a.popScopeId(),t),Nr={class:"sp-spacing__container"},kr={class:"sp-spacing__select-container"},Ar={class:"sp-spacing__select-item"},Cr=W(()=>a.createElementVNode("label",null,"Arriba",-1)),Sr=W(()=>a.createElementVNode("option",{value:""},null,-1)),Or=["value"],Pr={class:"sp-spacing__select-item"},Lr=W(()=>a.createElementVNode("label",null,"Abajo",-1)),Mr=W(()=>a.createElementVNode("option",{value:""},null,-1)),zr=["value"],Tr={class:"sp-spacing__select-item"},Ir=W(()=>a.createElementVNode("label",null,"Izquierda",-1)),Vr=W(()=>a.createElementVNode("option",{value:""},null,-1)),Fr=["value"],Dr={class:"sp-spacing__select-item"},Br=W(()=>a.createElementVNode("label",null,"Derecha",-1)),jr=W(()=>a.createElementVNode("option",{value:""},null,-1)),Rr=["value"],dn=at(a.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0},spacingConfig:{type:Object,default:()=>({top:"",bottom:"",left:"",right:""})}},emits:["update:spacingConfig"],setup(t,{emit:e}){const{type:n,spacingConfig:o}=t,r=e,i=_=>un.map(d=>({value:`sp-style__${n}-${_}__${d}`,label:d})),s=a.computed(()=>i("top")),l=a.computed(()=>i("bottom")),f=a.computed(()=>i("left")),c=a.computed(()=>i("right")),u=()=>{r("update:spacingConfig",o)};return(_,d)=>(a.openBlock(),a.createElementBlock("div",Nr,[a.createElementVNode("div",null,[a.createElementVNode("h2",null,a.toDisplayString(t.title),1)]),a.createElementVNode("div",kr,[a.createElementVNode("div",Ar,[Cr,a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":d[0]||(d[0]=h=>t.spacingConfig.top=h),onChange:u},[Sr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(s.value,h=>(a.openBlock(),a.createElementBlock("option",{key:h.value,value:h.value},a.toDisplayString(h.label),9,Or))),128))],544),[[a.vModelSelect,t.spacingConfig.top]])]),a.createElementVNode("div",Pr,[Lr,a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":d[1]||(d[1]=h=>t.spacingConfig.bottom=h),onChange:u},[Mr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(l.value,h=>(a.openBlock(),a.createElementBlock("option",{key:h.value,value:h.value},a.toDisplayString(h.label),9,zr))),128))],544),[[a.vModelSelect,t.spacingConfig.bottom]])]),a.createElementVNode("div",Tr,[Ir,a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":d[2]||(d[2]=h=>t.spacingConfig.left=h),onChange:u},[Vr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(f.value,h=>(a.openBlock(),a.createElementBlock("option",{key:h.value,value:h.value},a.toDisplayString(h.label),9,Fr))),128))],544),[[a.vModelSelect,t.spacingConfig.left]])]),a.createElementVNode("div",Dr,[Br,a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":d[3]||(d[3]=h=>t.spacingConfig.right=h),onChange:u},[jr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(c.value,h=>(a.openBlock(),a.createElementBlock("option",{key:h.value,value:h.value},a.toDisplayString(h.label),9,Rr))),128))],544),[[a.vModelSelect,t.spacingConfig.right]])])])]))}}),[["__scopeId","data-v-33128c28"]]),$r=t=>(a.pushScopeId("data-v-1ea4f148"),t=t(),a.popScopeId(),t),Ur={class:"sp-spacing__container"},Wr=$r(()=>a.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),Yr=Object.freeze(Object.defineProperty({__proto__:null,default:at(a.defineComponent({__name:"Spacing",props:{spClassList:{type:Array,default:[]}},emits:["update"],setup(t,{emit:e}){const n=t,o=e,r=a.ref({top:void 0,bottom:void 0,left:void 0,right:void 0}),i=a.ref({top:void 0,bottom:void 0,left:void 0,right:void 0}),s=c=>ae(c,n.spClassList),l=()=>{r.value.top=s("sp-style__spacing-margin-top__"),r.value.bottom=s("sp-style__spacing-margin-bottom__"),r.value.left=s("sp-style__spacing-margin-left__"),r.value.right=s("sp-style__spacing-margin-right__"),i.value.top=s("sp-style__spacing-padding-top__"),i.value.bottom=s("sp-style__spacing-padding-bottom__"),i.value.left=s("sp-style__spacing-padding-left__"),i.value.right=s("sp-style__spacing-padding-right__")},f=()=>{console.log(r);const c=[r.value.top,r.value.bottom,r.value.left,r.value.right,i.value.top,i.value.bottom,i.value.left,i.value.right].filter(u=>u);o("update",c)};return a.onMounted(()=>{l()}),(c,u)=>(a.openBlock(),a.createElementBlock("div",Ur,[a.createVNode(dn,{title:"Margen",type:"margin",spacingConfig:r.value,"onUpdate:spacingConfig":[u[0]||(u[0]=_=>r.value=_),f]},null,8,["spacingConfig"]),Wr,a.createVNode(dn,{title:"Padding",type:"padding",spacingConfig:i.value,"onUpdate:spacingConfig":[u[1]||(u[1]=_=>i.value=_),f]},null,8,["spacingConfig"])]))}}),[["__scopeId","data-v-1ea4f148"]])},Symbol.toStringTag,{value:"Module"}));return $o});
