(function(a,nt){typeof exports=="object"&&typeof module<"u"?module.exports=nt(require("vue")):typeof define=="function"&&define.amd?define(["vue"],nt):(a=typeof globalThis<"u"?globalThis:a||self,a.SimplisitiComponentEditor=nt(a.Vue))})(this,function(a){"use strict";const nt={div:"Contenedor",a:"Enlace"},dn={div:"container",a:"ancord"},mn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>Er)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>Wr)}},pn={container:["layout","spacing"],ancord:["spacing"]},gn=t=>{const e=dn[t];return pn[e].map(o=>({tab:o,...mn[o]}))},hn={class:"sp-wizard-popup__tabs-container"},yn={class:"sp-wizard-popup__tabs"},bn={class:"sp-wizard-popup__tab"},_n=["title","onClick"],vn={class:"sp-wizard-popup__content"},xn={class:"sp-wizard-popup__content-header"},En=a.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=a.ref([]);n.value=Array.from(e.classList).filter(p=>p.startsWith("sp-style"));const o=a.shallowReactive([]),r=a.shallowRef(void 0),i=a.ref(void 0),s=a.computed(()=>gn(e.tagName.toLowerCase())),l=async()=>{for(const p of s.value)o.push({component:a.defineAsyncComponent(p.component),icon:p.icon,title:p.title,tab:p.tab})},f=p=>{r.value=p.component,i.value=p.tab},c=()=>{o.length>0&&f(o[0])},u=p=>i.value===p.tab,b=p=>{e.classList.forEach(x=>{setTimeout(()=>{x.startsWith("sp-style")&&e.classList.remove(x)},100)}),p.forEach(x=>{setTimeout(()=>{e.classList.add(x)},100)}),window.parent.document.dispatchEvent(new CustomEvent("elementChange",{detail:{simplisitiId:e.dataset.simplisitiid,spClassList:p}}))};return a.onMounted(async()=>{await l(),c()}),(p,x)=>{const A=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock(a.Fragment,null,[a.createElementVNode("div",hn,[a.createElementVNode("div",yn,[(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(a.unref(o),k=>(a.openBlock(),a.createElementBlock("div",bn,[a.createElementVNode("button",{class:a.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":u(k)}]),title:k.title,onClick:w=>f(k)},[a.createVNode(A,{icon:k.icon},null,8,["icon"])],10,_n)]))),256))])]),a.createElementVNode("div",vn,[a.createElementVNode("div",xn,[(a.openBlock(),a.createBlock(a.resolveDynamicComponent(r.value),{onUpdate:b,"sp-class-list":n.value},null,40,["sp-class-list"]))])])],64)}}}),at=(t,e)=>{const n=t.__vccOpts||t;for(const[o,r]of e)n[o]=r;return n},Nn=at(En,[["__scopeId","data-v-7b7a2678"]]),kn={class:"sp-configuration-popup__header"},wn={class:"sp-configuration-popup__body"},An=at(a.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,o=a.ref(null),r=a.ref(!1),i=e,s=c=>{setTimeout(()=>{if(!c)return;const u=c.getBoundingClientRect(),b=u.top,p=u.bottom,x=u.left+u.width+10;if(o.value){o.value.style.top=`${b}px`,o.value.style.left=`${x}px`;const A=document.body.offsetWidth;x+o.value.offsetWidth>A&&(o.value.style.top=`${b+10}px`,o.value.style.left=`${x-o.value.offsetWidth-20}px`);const k=document.body.offsetHeight;b+o.value.offsetHeight>k&&(o.value.style.top="auto",o.value.style.bottom=`${p-o.value.offsetHeight+20}px`)}},50)},l=a.computed(()=>{var u;const c=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return c&&nt[c]||"Element"}),f=c=>{r.value=!0,setTimeout(()=>{i("close",c)},300)};return s(n),(c,u)=>{const b=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock("div",{class:a.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:o,onClick:a.withModifiers(p=>{},["stop"])},[a.createElementVNode("div",kn,[a.createElementVNode("h4",null,a.toDisplayString(l.value),1),a.createVNode(b,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=p=>f(p))})]),a.createElementVNode("div",wn,[t.element?(a.openBlock(),a.createBlock(Nn,{key:0,element:t.element},null,8,["element"])):a.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-317d171c"]]),Sn=a.defineComponent({__name:"App",setup(t){const e=a.ref(!1),n=a.ref(null),o=i=>{i.forEach(s=>{s.addEventListener("click",l=>{e.value||(e.value=!0,n.value=s,s.classList.add("sp-element__active")),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseover",l=>{e.value||s.classList.add("sp-element__active"),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseout",l=>{e.value||s.classList.remove("sp-element__active"),l.preventDefault(),l.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return a.onMounted(()=>{const i=document.querySelectorAll("div"),s=document.querySelectorAll("a");o(i),o(s)}),(i,s)=>{var l;return e.value?(a.openBlock(),a.createBlock(An,{key:0,element:n.value,type:(l=n.value)==null?void 0:l.tagName,onClose:a.withModifiers(r,["stop"])},null,8,["element","type"])):a.createCommentVNode("",!0)}}}),ae=()=>{};let kt={},oe={},re=null,ie={mark:ae,measure:ae};try{typeof window<"u"&&(kt=window),typeof document<"u"&&(oe=document),typeof MutationObserver<"u"&&(re=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}const{userAgent:se=""}=kt.navigator||{},D=kt,E=oe,le=re,mt=ie;D.document;const T=!!E.documentElement&&!!E.head&&typeof E.addEventListener=="function"&&typeof E.createElement=="function",ce=~se.indexOf("MSIE")||~se.indexOf("Trident/");var N="classic",fe="duotone",C="sharp",O="sharp-duotone",Cn=[N,fe,C,O],On={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Pn=["kit"],Ln=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Mn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},In={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Tn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Vn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Fn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Dn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},de={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Bn=["solid","regular","light","thin","duotone","brands"],me=[1,2,3,4,5,6,7,8,9,10],jn=me.concat([11,12,13,14,15,16,17,18,19,20]),ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=[...Object.keys(Vn),...Bn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY].concat(me.map(t=>"".concat(t,"x"))).concat(jn.map(t=>"w-".concat(t))),$n={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Un={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const V="___FONT_AWESOME___",wt=16,ge="fa",he="svg-inline--fa",Y="data-fa-i2svg",At="data-fa-pseudo-element",Yn="data-fa-pseudo-element-pending",St="data-prefix",Ct="data-icon",ye="fontawesome-i2svg",Hn="async",Gn=["HTML","HEAD","STYLE","SCRIPT"],be=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),_e=[N,C,O];function rt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[N]}})}const ve={...de};ve[N]={...de[N],...ue.kit,...ue["kit-duotone"]};const H=rt(ve),Ot={...Dn};Ot[N]={...Ot[N],...pe.kit,...pe["kit-duotone"]};const it=rt(Ot),Pt={...Fn};Pt[N]={...Pt[N],...Wn.kit};const G=rt(Pt),Lt={...Tn};Lt[N]={...Lt[N],...Un.kit};const Xn=rt(Lt),qn=Ln,xe="fa-layers-text",Kn=zn,Qn={...On};rt(Qn);const Zn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zt=ot,Q=new Set;Object.keys(it[N]).map(Q.add.bind(Q)),Object.keys(it[C]).map(Q.add.bind(Q)),Object.keys(it[O]).map(Q.add.bind(Q));const Jn=[...Pn,...Rn],st=D.FontAwesomeConfig||{};function ta(t){var e=E.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}E&&typeof E.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,o]=e;const r=ea(ta(n));r!=null&&(st[o]=r)});const Ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:ge,replacementClass:he,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const Z={...Ee,...st};Z.autoReplaceSvg||(Z.observeMutations=!1);const m={};Object.keys(Ee).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){Z[t]=e,lt.forEach(n=>n(m))},get:function(){return Z[t]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,lt.forEach(e=>e(m))},get:function(){return Z.cssPrefix}}),D.FontAwesomeConfig=m;const lt=[];function na(t){return lt.push(t),()=>{lt.splice(lt.indexOf(t),1)}}const B=wt,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(t){if(!t||!T)return;const e=E.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=E.head.childNodes;let o=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(o=i)}return E.head.insertBefore(e,o),t}const oa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){let t=12,e="";for(;t-- >0;)e+=oa[Math.random()*62|0];return e}function J(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mt(t){return t.classList?J(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ne(t[n]),'" '),"").trim()}function pt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function It(t){return t.size!==z.size||t.x!==z.x||t.y!==z.y||t.rotate!==z.rotate||t.flipX||t.flipY}function ia(t){let{transform:e,containerWidth:n,iconWidth:o}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},c={transform:"translate(".concat(o/2*-1," -256)")};return{outer:r,inner:f,path:c}}function sa(t){let{transform:e,width:n=wt,height:o=wt,startCentered:r=!1}=t,i="";return r&&ce?i+="translate(".concat(e.x/B-n/2,"em, ").concat(e.y/B-o/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/B,"em), calc(-50% + ").concat(e.y/B,"em)) "):i+="translate(".concat(e.x/B,"em, ").concat(e.y/B,"em) "),i+="scale(".concat(e.size/B*(e.flipX?-1:1),", ").concat(e.size/B*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var la=`:root, :host {
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
}`;function ke(){const t=ge,e=he,n=m.cssPrefix,o=m.replacementClass;let r=la;if(n!==t||o!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(o))}return r}let we=!1;function Tt(){m.autoAddCss&&!we&&(aa(ke()),we=!0)}var ca={mixout(){return{dom:{css:ke,insertCss:Tt}}},hooks(){return{beforeDOMElementCreation(){Tt()},beforeI2svg(){Tt()}}}};const F=D||{};F[V]||(F[V]={}),F[V].styles||(F[V].styles={}),F[V].hooks||(F[V].hooks={}),F[V].shims||(F[V].shims=[]);var M=F[V];const Ae=[],Se=function(){E.removeEventListener("DOMContentLoaded",Se),gt=1,Ae.map(t=>t())};let gt=!1;T&&(gt=(E.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(E.readyState),gt||E.addEventListener("DOMContentLoaded",Se));function fa(t){T&&(gt?setTimeout(t,0):Ae.push(t))}function ft(t){const{tag:e,attributes:n={},children:o=[]}=t;return typeof t=="string"?Ne(t):"<".concat(e," ").concat(ra(n),">").concat(o.map(ft).join(""),"</").concat(e,">")}function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Vt=function(e,n,o,r){var i=Object.keys(e),s=i.length,l=n,f,c,u;for(o===void 0?(f=1,u=e[i[0]]):(f=0,u=o);f<s;f++)c=i[f],u=l(u,e[c],c,e);return u};function ua(t){const e=[];let n=0;const o=t.length;for(;n<o;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<o){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=ua(t);return e.length===1?e[0].toString(16):null}function da(t,e){const n=t.length;let o=t.charCodeAt(e),r;return o>=55296&&o<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(o-55296)*1024+r-56320+65536:o}function Oe(t){return Object.keys(t).reduce((e,n)=>{const o=t[n];return!!o.icon?e[o.iconName]=o.icon:e[n]=o,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:o=!1}=n,r=Oe(e);typeof M.hooks.addPack=="function"&&!o?M.hooks.addPack(t,Oe(e)):M.styles[t]={...M.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:X,shims:ma}=M,pa={[N]:Object.values(G[N]),[C]:Object.values(G[C]),[O]:Object.values(G[O])};let Bt=null,Pe={},Le={},ze={},Me={},Ie={};const ga={[N]:Object.keys(H[N]),[C]:Object.keys(H[C]),[O]:Object.keys(H[O])};function ha(t){return~Jn.indexOf(t)}function ya(t,e){const n=e.split("-"),o=n[0],r=n.slice(1).join("-");return o===t&&r!==""&&!ha(r)?r:null}const Te=()=>{const t=o=>Vt(X,(r,i,s)=>(r[s]=Vt(i,o,{}),r),{});Pe=t((o,r,i)=>(r[3]&&(o[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{o[l.toString(16)]=i}),o)),Le=t((o,r,i)=>(o[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{o[l]=i}),o)),Ie=t((o,r,i)=>{const s=r[2];return o[i]=i,s.forEach(l=>{o[l]=i}),o});const e="far"in X||m.autoFetchSvg,n=Vt(ma,(o,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(o.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(o.unicodes[i.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});ze=n.names,Me=n.unicodes,Bt=ht(m.styleDefault,{family:m.familyDefault})};na(t=>{Bt=ht(t.styleDefault,{family:m.familyDefault})}),Te();function jt(t,e){return(Pe[t]||{})[e]}function ba(t,e){return(Le[t]||{})[e]}function j(t,e){return(Ie[t]||{})[e]}function Ve(t){return ze[t]||{prefix:null,iconName:null}}function _a(t){const e=Me[t],n=jt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Bt}const Rt=()=>({prefix:null,iconName:null,rest:[]});function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=N}=e,o=H[n][t],r=it[n][t]||it[n][o],i=t in M.styles?t:null;return r||i||null}const va={[N]:Object.keys(G[N]),[C]:Object.keys(G[C]),[O]:Object.keys(G[O])};function yt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,o={[N]:"".concat(m.cssPrefix,"-").concat(N),[C]:"".concat(m.cssPrefix,"-").concat(C),[O]:"".concat(m.cssPrefix,"-").concat(O)};let r=null,i=N;const s=Cn.filter(f=>f!==fe);s.forEach(f=>{(t.includes(o[f])||t.some(c=>va[f].includes(c)))&&(i=f)});const l=t.reduce((f,c)=>{const u=ya(m.cssPrefix,c);if(X[c]?(c=pa[i].includes(c)?Xn[i][c]:c,r=c,f.prefix=c):ga[i].indexOf(c)>-1?(r=c,f.prefix=ht(c,{family:i})):u?f.iconName=u:c!==m.replacementClass&&!s.some(b=>c===o[b])&&f.rest.push(c),!n&&f.prefix&&f.iconName){const b=r==="fa"?Ve(f.iconName):{},p=j(f.prefix,f.iconName);b.prefix&&(r=null),f.iconName=b.iconName||p||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!X.far&&X.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},Rt());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===C&&(X.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=j(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===O&&(X.fasds||m.autoFetchSvg)&&(l.prefix="fasds",l.iconName=j(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=R()||"fas"),l}class xa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Dt(i,r[i]);const s=G[N][i];s&&Dt(s,r[i]),Te()})}reset(){this.definitions={}}_pullDefinitions(e,n){const o=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(o).map(r=>{const{prefix:i,iconName:s,icon:l}=o[r],f=l[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][s]=l}),e}}let Fe=[],tt={};const et={},Ea=Object.keys(et);function Na(t,e){let{mixoutsTo:n}=e;return Fe=t,tt={},Object.keys(et).forEach(o=>{Ea.indexOf(o)===-1&&delete et[o]}),Fe.forEach(o=>{const r=o.mixout?o.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),o.hooks){const i=o.hooks();Object.keys(i).forEach(s=>{tt[s]||(tt[s]=[]),tt[s].push(i[s])})}o.provides&&o.provides(et)}),n}function $t(t,e){for(var n=arguments.length,o=new Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];return(tt[t]||[]).forEach(s=>{e=s.apply(null,[e,...o])}),e}function q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];(tt[t]||[]).forEach(i=>{i.apply(null,n)})}function $(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=j(n,e)||e,Ce(De.definitions,n,e)||Ce(M.styles,n,e)}const De=new xa,P={noAuto:()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,q("noAuto")},config:m,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(q("beforeI2svg",t),$("pseudoElements2svg",t),$("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,fa(()=>{ka({autoReplaceSvgRoot:e}),q("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ht(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(qn))){const e=yt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:j(e,t)||t}}}},library:De,findIconDefinition:Ut,toHtml:ft},ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=E}=t;(Object.keys(M.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&P.dom.i2svg({node:e})};function bt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ft(n))}}),Object.defineProperty(t,"node",{get:function(){if(!T)return;const n=E.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wa(t){let{children:e,main:n,mask:o,attributes:r,styles:i,transform:s}=t;if(It(s)&&n.found&&!o.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};r.style=pt({...i,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Aa(t){let{prefix:e,iconName:n,children:o,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:o}]}]}function Wt(t){const{icons:{main:e,mask:n},prefix:o,iconName:r,transform:i,symbol:s,title:l,maskId:f,titleId:c,extra:u,watchable:b=!1}=t,{width:p,height:x}=n.found?n:e,A=o==="fak",k=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(v=>u.classes.indexOf(v)===-1).filter(v=>v!==""||!!v).concat(u.classes).join(" ");let w={children:[],attributes:{...u.attributes,"data-prefix":o,"data-icon":r,class:k,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(x)}};const g=A&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/x*16*.0625,"em")}:{};b&&(w.attributes[Y]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||ct())},children:[l]}),delete w.attributes.title);const d={...w,prefix:o,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:{...g,...u.styles}},{children:_,attributes:h}=n.found&&e.found?$("generateAbstractMask",d)||{children:[],attributes:{}}:$("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=_,d.attributes=h,s?Aa(d):wa(d)}function Be(t){const{content:e,width:n,height:o,transform:r,title:i,extra:s,watchable:l=!1}=t,f={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};l&&(f[Y]="");const c={...s.styles};It(r)&&(c.transform=sa({transform:r,startCentered:!0,width:n,height:o}),c["-webkit-transform"]=c.transform);const u=pt(c);u.length>0&&(f.style=u);const b=[];return b.push({tag:"span",attributes:f,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Sa(t){const{content:e,title:n,extra:o}=t,r={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")},i=pt(o.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Yt}=M;function Ht(t){const e=t[0],n=t[1],[o]=t.slice(4);let r=null;return Array.isArray(o)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(zt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(zt.PRIMARY),fill:"currentColor",d:o[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:r}}const Ca={found:!1,width:512,height:512};function Oa(t,e){!be&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=R()),new Promise((o,r)=>{if(n==="fa"){const i=Ve(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const i=Yt[e][t];return o(Ht(i))}Oa(t,e),o({...Ca,icon:m.showMissingIcons&&t?$("missingIconAbstract")||{}:{}})})}const je=()=>{},Xt=m.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:je,measure:je},ut='FA "6.6.0"',Pa=t=>(Xt.mark("".concat(ut," ").concat(t," begins")),()=>Re(t)),Re=t=>{Xt.mark("".concat(ut," ").concat(t," ends")),Xt.measure("".concat(ut," ").concat(t),"".concat(ut," ").concat(t," begins"),"".concat(ut," ").concat(t," ends"))};var qt={begin:Pa,end:Re};const _t=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function La(t){const e=t.getAttribute?t.getAttribute(St):null,n=t.getAttribute?t.getAttribute(Ct):null;return e&&n}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ma(){return m.autoReplaceSvg===!0?vt.replace:vt[m.autoReplaceSvg]||vt.replace}function Ia(t){return E.createElementNS("http://www.w3.org/2000/svg",t)}function Ta(t){return E.createElement(t)}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ia:Ta}=e;if(typeof t=="string")return E.createTextNode(t);const o=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){o.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){o.appendChild(Ue(i,{ceFn:n}))}),o}function Va(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const vt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ue(n),e)}),e.getAttribute(Y)===null&&m.keepOriginalSource){let n=E.createComment(Va(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Mt(e).indexOf(m.replacementClass))return vt.replace(t);const o=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===m.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ft(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=r}};function We(t){t()}function Ye(t,e){const n=typeof e=="function"?e:_t;if(t.length===0)n();else{let o=We;m.mutateApproach===Hn&&(o=D.requestAnimationFrame||We),o(()=>{const r=Ma(),i=qt.begin("mutate");t.map(r),i(),n()})}}let Kt=!1;function He(){Kt=!0}function Qt(){Kt=!1}let xt=null;function Ge(t){if(!le||!m.observeMutations)return;const{treeCallback:e=_t,nodeCallback:n=_t,pseudoElementsCallback:o=_t,observeMutationsRoot:r=E}=t;xt=new le(i=>{if(Kt)return;const s=R();J(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!$e(l.addedNodes[0])&&(m.searchPseudoElements&&o(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&m.searchPseudoElements&&o(l.target.parentNode),l.type==="attributes"&&$e(l.target)&&~Zn.indexOf(l.attributeName))if(l.attributeName==="class"&&La(l.target)){const{prefix:f,iconName:c}=yt(Mt(l.target));l.target.setAttribute(St,f||s),c&&l.target.setAttribute(Ct,c)}else za(l.target)&&n(l.target)})}),T&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fa(){xt&&xt.disconnect()}function Da(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((o,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(o[s]=l.join(":").trim()),o},{})),n}function Ba(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),o=t.innerText!==void 0?t.innerText.trim():"";let r=yt(Mt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&o.length>0&&(r.iconName=ba(r.prefix,t.innerText)||jt(r.prefix,Ft(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ja(t){const e=J(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),o=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(o||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ra(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:o,rest:r}=Ba(t),i=ja(t),s=$t("parseNodeAttributes",{},t);let l=e.styleParser?Da(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:o,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...s}}const{styles:$a}=M;function qe(t){const e=m.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(xe)?$("generateLayersText",t,e):$("generateSvgReplacementMutation",t,e)}let I=new Set;_e.map(t=>{I.add("fa-".concat(t))}),Object.keys(H[N]).map(I.add.bind(I)),Object.keys(H[C]).map(I.add.bind(I)),Object.keys(H[O]).map(I.add.bind(I)),I=[...I];function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();const n=E.documentElement.classList,o=u=>n.add("".concat(ye,"-").concat(u)),r=u=>n.remove("".concat(ye,"-").concat(u)),i=m.autoFetchSvg?I:_e.map(u=>"fa-".concat(u)).concat(Object.keys($a));i.includes("fa")||i.push("fa");const s=[".".concat(xe,":not([").concat(Y,"])")].concat(i.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=J(t.querySelectorAll(s))}catch{}if(l.length>0)o("pending"),r("complete");else return Promise.resolve();const f=qt.begin("onTree"),c=l.reduce((u,b)=>{try{const p=qe(b);p&&u.push(p)}catch(p){be||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,b)=>{Promise.all(c).then(p=>{Ye(p,()=>{o("active"),o("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(p=>{f(),b(p)})})}function Ua(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qe(t).then(n=>{n&&Ye([n],e)})}function Wa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=(e||{}).icon?e:Ut(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(o,{...n,mask:r})}}const Ya=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,symbol:o=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:b,iconName:p,icon:x}=t;return bt({type:"icon",...t},()=>(q("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?c["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||ct()):(c["aria-hidden"]="true",c.focusable="false")),Wt({icons:{main:Ht(x),mask:r?Ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:p,transform:{...z,...n},symbol:o,title:s,maskId:i,titleId:l,extra:{attributes:c,styles:u,classes:f}})))};var Ha={mixout(){return{icon:Wa(Ya)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ke,t.nodeCallback=Ua,t}}},provides(t){t.i2svg=function(e){const{node:n=E,callback:o=()=>{}}=e;return Ke(n,o)},t.generateSvgReplacementMutation=function(e,n){const{iconName:o,title:r,titleId:i,prefix:s,transform:l,symbol:f,mask:c,maskId:u,extra:b}=n;return new Promise((p,x)=>{Promise.all([Gt(o,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[k,w]=A;p([e,Wt({icons:{main:k,mask:w},prefix:s,iconName:o,transform:l,symbol:f,maskId:u,title:r,titleId:i,extra:b,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:o,main:r,transform:i,styles:s}=e;const l=pt(s);l.length>0&&(o.style=l);let f;return It(i)&&(f=$("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:o}}}},Ga={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bt({type:"layer"},()=>{q("beforeDOMElementCreation",{assembler:t,params:e});let o=[];return t(r=>{Array.isArray(r)?r.map(i=>{o=o.concat(i.abstract)}):o=o.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:o}]})}}}},Xa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:o=[],attributes:r={},styles:i={}}=e;return bt({type:"counter",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),Sa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...o]}})))}}}},qa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=z,title:o=null,classes:r=[],attributes:i={},styles:s={}}=e;return bt({type:"text",content:t},()=>(q("beforeDOMElementCreation",{content:t,params:e}),Be({content:t,transform:{...z,...n},title:o,extra:{attributes:i,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:o,transform:r,extra:i}=n;let s=null,l=null;if(ce){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,l=c.height/f}return m.autoA11y&&!o&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Be({content:e.innerHTML,width:s,height:l,transform:r,title:o,extra:i,watchable:!0})])}}};const Ka=new RegExp('"',"ug"),Qe=[1105920,1112319],Ze={FontAwesome:{normal:"fas",400:"fas"},...In,...Mn,...$n},Zt=Object.keys(Ze).reduce((t,e)=>(t[e.toLowerCase()]=Ze[e],t),{}),Qa=Object.keys(Zt).reduce((t,e)=>{const n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Za(t){const e=t.replace(Ka,""),n=da(e,0),o=n>=Qe[0]&&n<=Qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:o||r}}function Ja(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),o=parseInt(e),r=isNaN(o)?"normal":o;return(Zt[n]||{})[r]||Qa[n]}function Je(t,e){const n="".concat(Yn).concat(e.replace(":","-"));return new Promise((o,r)=>{if(t.getAttribute(n)!==null)return o();const s=J(t.children).filter(p=>p.getAttribute(At)===e)[0],l=D.getComputedStyle(t,e),f=l.getPropertyValue("font-family"),c=f.match(Kn),u=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),o();if(c&&b!=="none"&&b!==""){const p=l.getPropertyValue("content");let x=Ja(f,u);const{value:A,isSecondary:k}=Za(p),w=c[0].startsWith("FontAwesome");let g=jt(x,A),d=g;if(w){const _=_a(A);_.iconName&&_.prefix&&(g=_.iconName,x=_.prefix)}if(g&&!k&&(!s||s.getAttribute(St)!==x||s.getAttribute(Ct)!==d)){t.setAttribute(n,d),s&&t.removeChild(s);const _=Ra(),{extra:h}=_;h.attributes[At]=e,Gt(g,x).then(v=>{const y=Wt({..._,icons:{main:v,mask:Rt()},prefix:x,iconName:d,extra:h,watchable:!0}),K=E.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=y.map(Yr=>ft(Yr)).join(`
`),t.removeAttribute(n),o()}).catch(r)}else o()}else o()})}function to(t){return Promise.all([Je(t,"::before"),Je(t,"::after")])}function eo(t){return t.parentNode!==document.head&&!~Gn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tn(t){if(T)return new Promise((e,n)=>{const o=J(t.querySelectorAll("*")).filter(eo).map(to),r=qt.begin("searchPseudoElements");He(),Promise.all(o).then(()=>{r(),Qt(),e()}).catch(()=>{r(),Qt(),n()})})}var no={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=tn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=E}=e;m.searchPseudoElements&&tn(n)}}};let en=!1;var ao={mixout(){return{dom:{unwatch(){He(),en=!0}}}},hooks(){return{bootstrap(){Ge($t("mutationObserverCallbacks",{}))},noAuto(){Fa()},watch(t){const{observeMutationsRoot:e}=t;en?Qt():Ge($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const nn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,o)=>{const r=o.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var oo={mixout(){return{parse:{transform:t=>nn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=nn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:o,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),f="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),c="rotate(".concat(o.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},b={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:u,path:b};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const Jt={x:0,y:0,width:"100%",height:"100%"};function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ro(t){return t.tag==="g"?t.children:[t]}var io={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),o=n?yt(n.split(" ").map(r=>r.trim())):Rt();return o.prefix||(o.prefix=R()),t.mask=o,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:o,main:r,mask:i,maskId:s,transform:l}=e;const{width:f,icon:c}=r,{width:u,icon:b}=i,p=ia({transform:l,containerWidth:u,iconWidth:f}),x={tag:"rect",attributes:{...Jt,fill:"white"}},A=c.children?{children:c.children.map(an)}:{},k={tag:"g",attributes:{...p.inner},children:[an({tag:c.tag,attributes:{...c.attributes,...p.path},...A})]},w={tag:"g",attributes:{...p.outer},children:[k]},g="mask-".concat(s||ct()),d="clip-".concat(s||ct()),_={tag:"mask",attributes:{...Jt,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[x,w]},h={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:ro(b)},_]};return n.push(h,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(g,")"),...Jt}}),{children:n,attributes:o}}}},so={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],o={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...o,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...o,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...o,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...o,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},lo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return t.symbol=o,t}}}},co=[ca,Ha,Ga,Xa,qa,no,ao,oo,io,so,lo];Na(co,{mixoutsTo:P}),P.noAuto;const on=P.config,fo=P.library;P.dom;const Et=P.parse;P.findIconDefinition,P.toHtml;const uo=P.icon;P.layer;const mo=P.text;P.counter;const po={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},go={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},ho={prefix:"fas",iconName:"arrow-down-wide-short",icon:[576,512,["sort-amount-asc","sort-amount-down"],"f160","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]},yo={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},bo={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},_o={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},vo={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},xo={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},Eo={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},No={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},ko={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function rn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,o)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rn(Object(n),!0).forEach(function(o){S(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rn(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function wo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ao(t){var e=wo(t,"string");return typeof e=="symbol"?e:e+""}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Nt(t)}function S(t,e,n){return e=Ao(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function So(t,e){if(t==null)return{};var n={};for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;n[o]=t[o]}return n}function Co(t,e){if(t==null)return{};var n=So(t,e),o,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)o=i[r],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}function te(t){return Oo(t)||Po(t)||Lo(t)||zo()}function Oo(t){if(Array.isArray(t))return ee(t)}function Po(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Lo(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function zo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={exports:{}};(function(t){(function(e){var n=function(g,d,_){if(!c(d)||b(d)||p(d)||x(d)||f(d))return d;var h,v=0,y=0;if(u(d))for(h=[],y=d.length;v<y;v++)h.push(n(g,d[v],_));else{h={};for(var K in d)Object.prototype.hasOwnProperty.call(d,K)&&(h[g(K,_)]=n(g,d[K],_))}return h},o=function(g,d){d=d||{};var _=d.separator||"_",h=d.split||/(?=[A-Z])/;return g.split(h).join(_)},r=function(g){return A(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(d,_){return _?_.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var d=r(g);return d.substr(0,1).toUpperCase()+d.substr(1)},s=function(g,d){return o(g,d).toLowerCase()},l=Object.prototype.toString,f=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return l.call(g)=="[object Array]"},b=function(g){return l.call(g)=="[object Date]"},p=function(g){return l.call(g)=="[object RegExp]"},x=function(g){return l.call(g)=="[object Boolean]"},A=function(g){return g=g-0,g===g},k=function(g,d){var _=d&&"process"in d?d.process:d;return typeof _!="function"?g:function(h,v){return _(h,g,v)}},w={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(g,d){return n(k(r,d),g)},decamelizeKeys:function(g,d){return n(k(s,d),g,d)},pascalizeKeys:function(g,d){return n(k(i,d),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(Mo)})(sn);var Io=sn.exports,To=["class","style"];function Vo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var o=n.indexOf(":"),r=Io.camelize(n.slice(0,o)),i=n.slice(o+1).trim();return e[r]=i,e},{})}function Fo(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var o=(t.children||[]).map(function(f){return ne(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var u=t.attributes[c];switch(c){case"class":f.class=Fo(u);break;case"style":f.style=Vo(u);break;default:f.attrs[c]=u}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,l=Co(n,To);return a.h(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),s)},r.attrs),l),o)}var ln=!1;try{ln=process.env.NODE_ENV==="production"}catch{}function Do(){if(!ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?S({},t,e):{}}function Bo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},S(S(S(S(S(S(S(S(S(S(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),S(S(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(o){return n[o]?o:null}).filter(function(o){return o})}function cn(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Et.icon)return Et.icon(t);if(t===null)return null;if(Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var jo=a.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var o=n.attrs,r=a.computed(function(){return cn(e.icon)}),i=a.computed(function(){return dt("classes",Bo(e))}),s=a.computed(function(){return dt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform)}),l=a.computed(function(){return dt("mask",cn(e.mask))}),f=a.computed(function(){return uo(r.value,L(L(L(L({},i.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});a.watch(f,function(u){if(!u)return Do("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var c=a.computed(function(){return f.value?ne(f.value.abstract[0],{},o):null});return function(){return c.value}}});a.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var o=n.slots,r=on.familyPrefix,i=a.computed(function(){return["".concat(r,"-layers")].concat(te(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return a.h("div",{class:i.value},o.default?o.default():[])}}}),a.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var o=n.attrs,r=on.familyPrefix,i=a.computed(function(){return dt("classes",[].concat(te(e.counter?["".concat(r,"-layers-counter")]:[]),te(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),s=a.computed(function(){return dt("transform",typeof e.transform=="string"?Et.transform(e.transform):e.transform)}),l=a.computed(function(){var c=mo(e.value.toString(),L(L({},s.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),f=a.computed(function(){return ne(l.value,{},o)});return function(){return f.value}}}),fo.add(ko,xo,yo,po,_o,bo,No,Eo,vo,go,ho);const Ro={install:t=>{t.component("simplisiti-component-editor",Sn),t.component("fa-icon",jo)}},$o=12,Uo=12,fn=["0","0.5","1","1.5","2","2.5","3","3.5","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],Wo=t=>fn.map(e=>({value:t(e).replace(".","_"),label:e})),U=t=>(a.pushScopeId("data-v-6d595c23"),t=t(),a.popScopeId(),t),Yo={class:"sp-layout__container"},Ho={class:"sp-layout__header"},Go={class:"sp-layout__body"},Xo={class:"sp-layout__body"},qo={key:0,class:"sp-layout__flex-container"},Ko={class:"sp-layout__grid-item sp-layout__flex-direction-container"},Qo=[U(()=>a.createElementVNode("option",{value:""},null,-1)),U(()=>a.createElementVNode("option",{value:"sp-style__layout-flex-direction__row"},"Fila",-1)),U(()=>a.createElementVNode("option",{value:"sp-style__layout-flex-direction__column"},"Columna",-1))],Zo={class:"sp-layout__gap-spacing-container"},Jo={class:"sp-layout__grid-item sp-layout__gap-container"},tr=U(()=>a.createElementVNode("option",{value:""},null,-1)),er=["value"],nr={key:1,class:"sp-layout__grid-container"},ar={class:"sp-layout__grid-item sp-layout__columns-container"},or=U(()=>a.createElementVNode("option",{value:""},null,-1)),rr=["value"],ir={class:"sp-layout__grid-item sp-layout__rows-container"},sr=U(()=>a.createElementVNode("option",{value:""},null,-1)),lr=["value"],cr={class:"sp-layout__horizontal-alignment-container"},fr=U(()=>a.createElementVNode("label",null,"Horizontal",-1)),ur={class:"sp-layout__buttons-container"},dr={class:"sp-layout__button__aligment"},mr={class:"sp-layout__button__aligment"},pr={class:"sp-layout__button__aligment"},gr={key:0,class:"sp-layout__button__aligment"},hr={class:"sp-layout__vertical-alignment-container"},yr=U(()=>a.createElementVNode("label",null,"Vertical",-1)),br={class:"sp-layout__buttons-container"},_r={class:"sp-layout__button__aligment"},vr={class:"sp-layout__button__aligment"},xr={class:"sp-layout__button__aligment"},Er=Object.freeze(Object.defineProperty({__proto__:null,default:at(a.defineComponent({__name:"Layout",props:{spClassList:{type:Array,default:[]}},emits:["update"],setup(t,{emit:e}){const n=t,o=a.ref(null),r=a.ref(null),i=a.ref(null),s=a.ref(null),l=a.ref(null),f=a.ref(null),c=a.ref(null),u=_=>n.spClassList.find(h=>h.startsWith(_)),b=()=>Wo(_=>`sp-style__layout-gap__${_}`),p=a.computed(()=>b()),x=()=>{o.value=u("sp-style__layout-display__"),r.value=u("sp-style__layout-justify-content__"),i.value=u("sp-style__layout-align-items__"),s.value=u("sp-style__layout-flex-direction__"),l.value=u("sp-style__layout-grid-template__columns-"),f.value=u("sp-style__layout-grid-template__rows-"),c.value=u("sp-style__layout-gap__")},A=e,k=_=>{const h=_==="rows"?$o:Uo,v=[];for(let y=0;y<h;y++)v.push(y+1);return v},w=a.computed(()=>k("columns")),g=a.computed(()=>k("rows")),d=()=>{const _=[o.value,r.value,i.value,s.value,l.value,f.value,c.value].filter(h=>h);A("update",_)};return a.onMounted(()=>{x()}),(_,h)=>{const v=a.resolveComponent("fa-icon");return a.openBlock(),a.createElementBlock("div",Yo,[a.createElementVNode("div",Ho,[a.createElementVNode("label",null,[a.withDirectives(a.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__flex","onUpdate:modelValue":h[0]||(h[0]=y=>o.value=y),onChange:d},null,544),[[a.vModelRadio,o.value]]),a.createVNode(v,{icon:"arrows-left-right"}),a.createTextVNode(" Flexible ")]),a.createElementVNode("label",null,[a.withDirectives(a.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__grid","onUpdate:modelValue":h[1]||(h[1]=y=>o.value=y),onChange:d},null,544),[[a.vModelRadio,o.value]]),a.createVNode(v,{icon:"table-cells"}),a.createTextVNode(" Tabla ")])]),a.createElementVNode("div",Go,[a.createElementVNode("div",Xo,[o.value==="sp-style__layout-display__flex"?(a.openBlock(),a.createElementBlock("div",qo,[a.createElementVNode("div",Ko,[a.createElementVNode("label",null,[a.createVNode(v,{icon:"arrow-down-wide-short"}),a.createTextVNode(" Dirección ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":h[2]||(h[2]=y=>s.value=y),onChange:d},Qo,544),[[a.vModelSelect,s.value]])])])):a.createCommentVNode("",!0),a.createElementVNode("div",Zo,[a.createElementVNode("div",Jo,[a.createElementVNode("label",null,[a.createVNode(v,{icon:"arrow-down-wide-short"}),a.createTextVNode(" Espaciado ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":h[3]||(h[3]=y=>c.value=y),onChange:d},[tr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(p.value,y=>(a.openBlock(),a.createElementBlock("option",{key:y.value,value:y.value},a.toDisplayString(y.label),9,er))),128))],544),[[a.vModelSelect,c.value]])])]),o.value==="sp-style__layout-display__grid"?(a.openBlock(),a.createElementBlock("div",nr,[a.createElementVNode("div",ar,[a.createElementVNode("label",null,[a.createVNode(v,{icon:"grip"}),a.createTextVNode(" Columas ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":h[4]||(h[4]=y=>l.value=y),onChange:d},[or,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(w.value,y=>(a.openBlock(),a.createElementBlock("option",{key:y,value:`sp-style__layout-grid-template__columns-${y}`},a.toDisplayString(y),9,rr))),128))],544),[[a.vModelSelect,l.value]])]),a.createElementVNode("div",ir,[a.createElementVNode("label",null,[a.createVNode(v,{icon:"grip-vertical"}),a.createTextVNode(" Filas ")]),a.withDirectives(a.createElementVNode("select",{"onUpdate:modelValue":h[5]||(h[5]=y=>f.value=y),onChange:d},[sr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(g.value,y=>(a.openBlock(),a.createElementBlock("option",{key:y,value:`sp-style__layout-grid-template__rows-${y}`},a.toDisplayString(y),9,lr))),128))],544),[[a.vModelSelect,f.value]])])])):a.createCommentVNode("",!0),a.createElementVNode("div",cr,[fr,a.createElementVNode("div",ur,[a.createElementVNode("label",dr,[a.createVNode(v,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__start","onUpdate:modelValue":h[6]||(h[6]=y=>r.value=y),onChange:d},null,544),[[a.vModelRadio,r.value]])]),a.createElementVNode("label",mr,[a.createVNode(v,{icon:"arrows-left-right-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__center","onUpdate:modelValue":h[7]||(h[7]=y=>r.value=y),onChange:d},null,544),[[a.vModelRadio,r.value]])]),a.createElementVNode("label",pr,[a.createVNode(v,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__end","onUpdate:modelValue":h[8]||(h[8]=y=>r.value=y),onChange:d},null,544),[[a.vModelRadio,r.value]])]),o.value==="sp-style__layout-display__flex"?(a.openBlock(),a.createElementBlock("label",gr,[a.createVNode(v,{icon:"bars"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__between","onUpdate:modelValue":h[9]||(h[9]=y=>r.value=y),onChange:d},null,544),[[a.vModelRadio,r.value]])])):a.createCommentVNode("",!0)])]),a.createElementVNode("div",hr,[yr,a.createElementVNode("div",br,[a.createElementVNode("label",_r,[a.createVNode(v,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__start","onUpdate:modelValue":h[10]||(h[10]=y=>i.value=y),onChange:d},null,544),[[a.vModelRadio,i.value]])]),a.createElementVNode("label",vr,[a.createVNode(v,{icon:"arrows-left-right-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__center","onUpdate:modelValue":h[11]||(h[11]=y=>i.value=y),onChange:d},null,544),[[a.vModelRadio,i.value]])]),a.createElementVNode("label",xr,[a.createVNode(v,{icon:"arrows-up-to-line"}),a.withDirectives(a.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__end","onUpdate:modelValue":h[12]||(h[12]=y=>i.value=y),onChange:d},null,544),[[a.vModelRadio,i.value]])])])])])])])}}}),[["__scopeId","data-v-6d595c23"]])},Symbol.toStringTag,{value:"Module"})),W=t=>(a.pushScopeId("data-v-17ec4c84"),t=t(),a.popScopeId(),t),Nr={class:"sp-spacing__container"},kr={class:"sp-spacing__select-container"},wr={class:"sp-spacing__select-item"},Ar=W(()=>a.createElementVNode("label",null,"Arriba",-1)),Sr=W(()=>a.createElementVNode("option",{value:""},null,-1)),Cr=["value"],Or={class:"sp-spacing__select-item"},Pr=W(()=>a.createElementVNode("label",null,"Abajo",-1)),Lr=W(()=>a.createElementVNode("option",{value:""},null,-1)),zr=["value"],Mr={class:"sp-spacing__select-item"},Ir=W(()=>a.createElementVNode("label",null,"Izquierda",-1)),Tr=W(()=>a.createElementVNode("option",{value:""},null,-1)),Vr=["value"],Fr={class:"sp-spacing__select-item"},Dr=W(()=>a.createElementVNode("label",null,"Derecha",-1)),Br=W(()=>a.createElementVNode("option",{value:""},null,-1)),jr=["value"],un=at(a.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0}},setup(t){const{type:e}=t,n=l=>fn.map(f=>({value:`sp-spacing__${e}-${l}__${f}`,label:f})),o=a.computed(()=>n("top")),r=a.computed(()=>n("bottom")),i=a.computed(()=>n("left")),s=a.computed(()=>n("right"));return(l,f)=>(a.openBlock(),a.createElementBlock("div",Nr,[a.createElementVNode("div",null,[a.createElementVNode("h2",null,a.toDisplayString(t.title),1)]),a.createElementVNode("div",kr,[a.createElementVNode("div",wr,[Ar,a.createElementVNode("select",null,[Sr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(o.value,c=>(a.openBlock(),a.createElementBlock("option",{key:c.value,value:c.value},a.toDisplayString(c.label),9,Cr))),128))])]),a.createElementVNode("div",Or,[Pr,a.createElementVNode("select",null,[Lr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(r.value,c=>(a.openBlock(),a.createElementBlock("option",{key:c.value,value:c.value},a.toDisplayString(c.label),9,zr))),128))])]),a.createElementVNode("div",Mr,[Ir,a.createElementVNode("select",null,[Tr,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(i.value,c=>(a.openBlock(),a.createElementBlock("option",{key:c.value,value:c.value},a.toDisplayString(c.label),9,Vr))),128))])]),a.createElementVNode("div",Fr,[Dr,a.createElementVNode("select",null,[Br,(a.openBlock(!0),a.createElementBlock(a.Fragment,null,a.renderList(s.value,c=>(a.openBlock(),a.createElementBlock("option",{key:c.value,value:c.value},a.toDisplayString(c.label),9,jr))),128))])])])]))}}),[["__scopeId","data-v-17ec4c84"]]),Rr=t=>(a.pushScopeId("data-v-bd74e2b4"),t=t(),a.popScopeId(),t),$r={class:"sp-spacing__container"},Ur=Rr(()=>a.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),Wr=Object.freeze(Object.defineProperty({__proto__:null,default:at(a.defineComponent({__name:"Spacing",setup(t){return(e,n)=>(a.openBlock(),a.createElementBlock("div",$r,[a.createVNode(un,{title:"Margen",type:"margin"}),Ur,a.createVNode(un,{title:"Padding",type:"padding"})]))}}),[["__scopeId","data-v-bd74e2b4"]])},Symbol.toStringTag,{value:"Module"}));return Ro});
