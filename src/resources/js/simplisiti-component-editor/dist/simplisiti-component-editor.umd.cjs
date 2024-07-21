(function(o,tt){typeof exports=="object"&&typeof module<"u"?module.exports=tt(require("vue")):typeof define=="function"&&define.amd?define(["vue"],tt):(o=typeof globalThis<"u"?globalThis:o||self,o.SimplisitiComponentEditor=tt(o.Vue))})(this,function(o){"use strict";const tt={div:"Contenedor",a:"Enlace"},un={div:"container",a:"ancord"},dn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>oo)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>Co)}},mn={container:["layout","spacing"],ancord:["spacing"]},pn=t=>{const e=un[t];return mn[e].map(a=>({tab:a,...dn[a]}))},gn={class:"sp-wizard-popup__tabs-container"},hn={class:"sp-wizard-popup__tabs"},yn={class:"sp-wizard-popup__tab"},bn=["title","onClick"],_n={class:"sp-wizard-popup__content"},vn={class:"sp-wizard-popup__content-header"},xn=o.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=o.shallowReactive([]),a=o.shallowRef(void 0),r=o.ref(void 0),i=o.computed(()=>pn(e.tagName.toLowerCase())),l=async()=>{for(const u of i.value)n.push({component:o.defineAsyncComponent(u.component),icon:u.icon,title:u.title,tab:u.tab})},s=u=>{a.value=u.component,r.value=u.tab},c=()=>{n.length>0&&s(n[0])},f=u=>r.value===u.tab;return o.onMounted(async()=>{await l(),c()}),(u,h)=>{const g=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock(o.Fragment,null,[o.createElementVNode("div",gn,[o.createElementVNode("div",hn,[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(o.unref(n),b=>(o.openBlock(),o.createElementBlock("div",yn,[o.createElementVNode("button",{class:o.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":f(b)}]),title:b.title,onClick:S=>s(b)},[o.createVNode(g,{icon:b.icon},null,8,["icon"])],10,bn)]))),256))])]),o.createElementVNode("div",_n,[o.createElementVNode("div",vn,[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(a.value)))])])],64)}}}),et=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},En=et(xn,[["__scopeId","data-v-9a1914a8"]]),kn={class:"sp-configuration-popup__header"},An={class:"sp-configuration-popup__body"},Nn=et(o.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,a=o.ref(null),r=o.ref(!1),i=e,l=f=>{setTimeout(()=>{if(!f)return;const u=f.getBoundingClientRect(),h=u.top,g=u.bottom,b=u.left+u.width+10;if(a.value){a.value.style.top=`${h}px`,a.value.style.left=`${b}px`;const S=document.body.offsetWidth;b+a.value.offsetWidth>S&&(a.value.style.top=`${h+10}px`,a.value.style.left=`${b-a.value.offsetWidth-20}px`);const O=document.body.offsetHeight;h+a.value.offsetHeight>O&&(a.value.style.top="auto",a.value.style.bottom=`${g-a.value.offsetHeight+20}px`)}},50)},s=o.computed(()=>{var u;const f=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return f&&tt[f]||"Element"}),c=f=>{r.value=!0,setTimeout(()=>{i("close",f)},300)};return l(n),(f,u)=>{const h=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:a,onClick:o.withModifiers(g=>{},["stop"])},[o.createElementVNode("div",kn,[o.createElementVNode("h4",null,o.toDisplayString(s.value),1),o.createVNode(h,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=g=>c(g))})]),o.createElementVNode("div",An,[t.element?(o.openBlock(),o.createBlock(En,{key:0,element:t.element},null,8,["element"])):o.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-317d171c"]]),wn=o.defineComponent({__name:"App",setup(t){const e=o.ref(!1),n=o.ref(null),a=i=>{i.forEach(l=>{l.addEventListener("click",s=>{e.value||(e.value=!0,n.value=l,l.classList.add("sp-element__active")),s.preventDefault(),s.stopPropagation()}),l.addEventListener("mouseover",s=>{e.value||l.classList.add("sp-element__active"),s.preventDefault(),s.stopPropagation()}),l.addEventListener("mouseout",s=>{e.value||l.classList.remove("sp-element__active"),s.preventDefault(),s.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return o.onMounted(()=>{const i=document.querySelectorAll("div"),l=document.querySelectorAll("a");a(i),a(l)}),(i,l)=>{var s;return e.value?(o.openBlock(),o.createBlock(Nn,{key:0,element:n.value,type:(s=n.value)==null?void 0:s.tagName,onClose:o.withModifiers(r,["stop"])},null,8,["element","type"])):o.createCommentVNode("",!0)}}}),ae=()=>{};let At={},re={},oe=null,ie={mark:ae,measure:ae};try{typeof window<"u"&&(At=window),typeof document<"u"&&(re=document),typeof MutationObserver<"u"&&(oe=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}const{userAgent:se=""}=At.navigator||{},V=At,y=re,le=oe,ut=ie;V.document;const z=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",ce=~se.indexOf("MSIE")||~se.indexOf("Trident/");var _="classic",fe="duotone",A="sharp",N="sharp-duotone",Sn=[_,fe,A,N],On={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Cn=["kit"],Pn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,In=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ln={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},zn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Mn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Fn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},de={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Dn=["solid","regular","light","thin","duotone","brands"],me=[1,2,3,4,5,6,7,8,9,10],jn=me.concat([11,12,13,14,15,16,17,18,19,20]),nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Bn=[...Object.keys(Mn),...Dn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(me.map(t=>"".concat(t,"x"))).concat(jn.map(t=>"w-".concat(t))),Rn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",Nt=16,ge="fa",he="svg-inline--fa",W="data-fa-i2svg",wt="data-fa-pseudo-element",Un="data-fa-pseudo-element-pending",St="data-prefix",Ot="data-icon",ye="fontawesome-i2svg",Yn="async",Hn=["HTML","HEAD","STYLE","SCRIPT"],be=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),_e=[_,A,N];function at(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_]}})}const ve={...de};ve[_]={...de[_],...ue.kit,...ue["kit-duotone"]};const U=at(ve),Ct={...Vn};Ct[_]={...Ct[_],...pe.kit,...pe["kit-duotone"]};const rt=at(Ct),Pt={...Fn};Pt[_]={...Pt[_],...Wn.kit};const Y=at(Pt),It={...zn};It[_]={...It[_],...$n.kit};const Gn=at(It),Xn=Pn,xe="fa-layers-text",qn=In,Kn={...On};at(Kn);const Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tt=nt,q=new Set;Object.keys(rt[_]).map(q.add.bind(q)),Object.keys(rt[A]).map(q.add.bind(q)),Object.keys(rt[N]).map(q.add.bind(q));const Zn=[...Cn,...Bn],ot=V.FontAwesomeConfig||{};function Jn(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ta(Jn(n));r!=null&&(ot[a]=r)});const Ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:ge,replacementClass:he,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);const K={...Ee,...ot};K.autoReplaceSvg||(K.observeMutations=!1);const d={};Object.keys(Ee).forEach(t=>{Object.defineProperty(d,t,{enumerable:!0,set:function(e){K[t]=e,it.forEach(n=>n(d))},get:function(){return K[t]}})}),Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,it.forEach(e=>e(d))},get:function(){return K.cssPrefix}}),V.FontAwesomeConfig=d;const it=[];function ea(t){return it.push(t),()=>{it.splice(it.indexOf(t),1)}}const D=Nt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!t||!z)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],l=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(l)>-1&&(a=i)}return y.head.insertBefore(e,a),t}const aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){let t=12,e="";for(;t-- >0;)e+=aa[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ke(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ke(t[n]),'" '),"").trim()}function dt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function oa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),l="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(l," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function ia(t){let{transform:e,width:n=Nt,height:a=Nt,startCentered:r=!1}=t,i="";return r&&ce?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var sa=`:root, :host {
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
}`;function Ae(){const t=ge,e=he,n=d.cssPrefix,a=d.replacementClass;let r=sa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),l=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(l,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let Ne=!1;function Mt(){d.autoAddCss&&!Ne&&(na(Ae()),Ne=!0)}var la={mixout(){return{dom:{css:Ae,insertCss:Mt}}},hooks(){return{beforeDOMElementCreation(){Mt()},beforeI2svg(){Mt()}}}};const F=V||{};F[M]||(F[M]={}),F[M].styles||(F[M].styles={}),F[M].hooks||(F[M].hooks={}),F[M].shims||(F[M].shims=[]);var T=F[M];const we=[],Se=function(){y.removeEventListener("DOMContentLoaded",Se),mt=1,we.map(t=>t())};let mt=!1;z&&(mt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),mt||y.addEventListener("DOMContentLoaded",Se));function ca(t){z&&(mt?setTimeout(t,0):we.push(t))}function lt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?ke(t):"<".concat(e," ").concat(ra(n),">").concat(a.map(lt).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ft=function(e,n,a,r){var i=Object.keys(e),l=i.length,s=n,c,f,u;for(a===void 0?(c=1,u=e[i[0]]):(c=0,u=a);c<l;c++)f=i[c],u=s(u,e[f],f,e);return u};function fa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){const e=fa(t);return e.length===1?e[0].toString(16):null}function ua(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ce(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Ce(e);typeof T.hooks.addPack=="function"&&!a?T.hooks.addPack(t,Ce(e)):T.styles[t]={...T.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:H,shims:da}=T,ma={[_]:Object.values(Y[_]),[A]:Object.values(Y[A]),[N]:Object.values(Y[N])};let jt=null,Pe={},Ie={},Te={},Le={},ze={};const pa={[_]:Object.keys(U[_]),[A]:Object.keys(U[A]),[N]:Object.keys(U[N])};function ga(t){return~Zn.indexOf(t)}function ha(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}const Me=()=>{const t=a=>Ft(H,(r,i,l)=>(r[l]=Ft(i,a,{}),r),{});Pe=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=i}),a)),Ie=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=i}),a)),ze=t((a,r,i)=>{const l=r[2];return a[i]=i,l.forEach(s=>{a[s]=i}),a});const e="far"in H||d.autoFetchSvg,n=Ft(da,(a,r)=>{const i=r[0];let l=r[1];const s=r[2];return l==="far"&&!e&&(l="fas"),typeof i=="string"&&(a.names[i]={prefix:l,iconName:s}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:l,iconName:s}),a},{names:{},unicodes:{}});Te=n.names,Le=n.unicodes,jt=pt(d.styleDefault,{family:d.familyDefault})};ea(t=>{jt=pt(t.styleDefault,{family:d.familyDefault})}),Me();function Bt(t,e){return(Pe[t]||{})[e]}function ya(t,e){return(Ie[t]||{})[e]}function j(t,e){return(ze[t]||{})[e]}function Fe(t){return Te[t]||{prefix:null,iconName:null}}function ba(t){const e=Le[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return jt}const Rt=()=>({prefix:null,iconName:null,rest:[]});function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_}=e,a=U[n][t],r=rt[n][t]||rt[n][a],i=t in T.styles?t:null;return r||i||null}const _a={[_]:Object.keys(Y[_]),[A]:Object.keys(Y[A]),[N]:Object.keys(Y[N])};function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[_]:"".concat(d.cssPrefix,"-").concat(_),[A]:"".concat(d.cssPrefix,"-").concat(A),[N]:"".concat(d.cssPrefix,"-").concat(N)};let r=null,i=_;const l=Sn.filter(c=>c!==fe);l.forEach(c=>{(t.includes(a[c])||t.some(f=>_a[c].includes(f)))&&(i=c)});const s=t.reduce((c,f)=>{const u=ha(d.cssPrefix,f);if(H[f]?(f=ma[i].includes(f)?Gn[i][f]:f,r=f,c.prefix=f):pa[i].indexOf(f)>-1?(r=f,c.prefix=pt(f,{family:i})):u?c.iconName=u:f!==d.replacementClass&&!l.some(h=>f===a[h])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const h=r==="fa"?Fe(c.iconName):{},g=j(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!H.far&&H.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},Rt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&i===A&&(H.fass||d.autoFetchSvg)&&(s.prefix="fass",s.iconName=j(s.prefix,s.iconName)||s.iconName),!s.prefix&&i===N&&(H.fasds||d.autoFetchSvg)&&(s.prefix="fasds",s.iconName=j(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=B()||"fas"),s}class va{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Dt(i,r[i]);const l=Y[_][i];l&&Dt(l,r[i]),Me()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:l,icon:s}=a[r],c=s[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=s)}),e[i][l]=s}),e}}let Ve=[],Z={};const J={},xa=Object.keys(J);function Ea(t,e){let{mixoutsTo:n}=e;return Ve=t,Z={},Object.keys(J).forEach(a=>{xa.indexOf(a)===-1&&delete J[a]}),Ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(l=>{n[i]||(n[i]={}),n[i][l]=r[i][l]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(l=>{Z[l]||(Z[l]=[]),Z[l].push(i[l])})}a.provides&&a.provides(J)}),n}function $t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Z[t]||[]).forEach(l=>{e=l.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Z[t]||[]).forEach(i=>{i.apply(null,n)})}function R(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||B();if(e)return e=j(n,e)||e,Oe(De.definitions,n,e)||Oe(T.styles,n,e)}const De=new va,w={noAuto:()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,G("noAuto")},config:d,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(G("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ca(()=>{ka({autoReplaceSvgRoot:e}),G("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(Xn))){const e=gt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||B(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=B();return{prefix:e,iconName:j(e,t)||t}}}},library:De,findIconDefinition:Wt,toHtml:lt},ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&w.dom.i2svg({node:e})};function ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>lt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!z)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Aa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:l}=t;if(zt(l)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=dt({...i,"transform-origin":"".concat(f.x+l.x/16,"em ").concat(f.y+l.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Na(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const l=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:l},children:a}]}]}function Ut(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:l,title:s,maskId:c,titleId:f,extra:u,watchable:h=!1}=t,{width:g,height:b}=n.found?n:e,S=a==="fak",O=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(C=>u.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(u.classes).join(" ");let k={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(b)}};const m=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/b*16*.0625,"em")}:{};h&&(k.attributes[W]=""),s&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(f||st())},children:[s]}),delete k.attributes.title);const p={...k,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:l,styles:{...m,...u.styles}},{children:v,attributes:x}=n.found&&e.found?R("generateAbstractMask",p)||{children:[],attributes:{}}:R("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=x,l?Na(p):Aa(p)}function je(t){const{content:e,width:n,height:a,transform:r,title:i,extra:l,watchable:s=!1}=t,c={...l.attributes,...i?{title:i}:{},class:l.classes.join(" ")};s&&(c[W]="");const f={...l.styles};zt(r)&&(f.transform=ia({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=dt(f);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function wa(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=dt(a.styles);i.length>0&&(r.style=i);const l=[];return l.push({tag:"span",attributes:r,children:[e]}),n&&l.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),l}const{styles:Yt}=T;function Ht(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Tt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Sa={found:!1,width:512,height:512};function Oa(t,e){!be&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&d.styleDefault!==null&&(e=B()),new Promise((a,r)=>{if(n==="fa"){const i=Fe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const i=Yt[e][t];return a(Ht(i))}Oa(t,e),a({...Sa,icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}})})}const Be=()=>{},Xt=d.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:Be,measure:Be},ct='FA "6.6.0"',Ca=t=>(Xt.mark("".concat(ct," ").concat(t," begins")),()=>Re(t)),Re=t=>{Xt.mark("".concat(ct," ").concat(t," ends")),Xt.measure("".concat(ct," ").concat(t),"".concat(ct," ").concat(t," begins"),"".concat(ct," ").concat(t," ends"))};var qt={begin:Ca,end:Re};const yt=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function Pa(t){const e=t.getAttribute?t.getAttribute(St):null,n=t.getAttribute?t.getAttribute(Ot):null;return e&&n}function Ia(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ta(){return d.autoReplaceSvg===!0?bt.replace:bt[d.autoReplaceSvg]||bt.replace}function La(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function za(t){return y.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?La:za}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(We(i,{ceFn:n}))}),a}function Ma(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const bt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(W)===null&&d.keepOriginalSource){let n=y.createComment(Ma(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Lt(e).indexOf(d.replacementClass))return bt.replace(t);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((l,s)=>(s===d.replacementClass||s.match(a)?l.toSvg.push(s):l.toNode.push(s),l),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>lt(i)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function Ue(t){t()}function Ye(t,e){const n=typeof e=="function"?e:yt;if(t.length===0)n();else{let a=Ue;d.mutateApproach===Yn&&(a=V.requestAnimationFrame||Ue),a(()=>{const r=Ta(),i=qt.begin("mutate");t.map(r),i(),n()})}}let Kt=!1;function He(){Kt=!0}function Qt(){Kt=!1}let _t=null;function Ge(t){if(!le||!d.observeMutations)return;const{treeCallback:e=yt,nodeCallback:n=yt,pseudoElementsCallback:a=yt,observeMutationsRoot:r=y}=t;_t=new le(i=>{if(Kt)return;const l=B();Q(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!$e(s.addedNodes[0])&&(d.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&d.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&$e(s.target)&&~Qn.indexOf(s.attributeName))if(s.attributeName==="class"&&Pa(s.target)){const{prefix:c,iconName:f}=gt(Lt(s.target));s.target.setAttribute(St,c||l),f&&s.target.setAttribute(Ot,f)}else Ia(s.target)&&n(s.target)})}),z&&_t.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fa(){_t&&_t.disconnect()}function Va(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),l=i[0],s=i.slice(1);return l&&s.length>0&&(a[l]=s.join(":").trim()),a},{})),n}function Da(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=gt(Lt(t));return r.prefix||(r.prefix=B()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,t.innerText)||Bt(r.prefix,Vt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ja(t){const e=Q(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||st()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ba(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Da(t),i=ja(t),l=$t("parseNodeAttributes",{},t);let s=e.styleParser?Va(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:i},...l}}const{styles:Ra}=T;function qe(t){const e=d.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(xe)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}let L=new Set;_e.map(t=>{L.add("fa-".concat(t))}),Object.keys(U[_]).map(L.add.bind(L)),Object.keys(U[A]).map(L.add.bind(L)),Object.keys(U[N]).map(L.add.bind(L)),L=[...L];function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(ye,"-").concat(u)),r=u=>n.remove("".concat(ye,"-").concat(u)),i=d.autoFetchSvg?L:_e.map(u=>"fa-".concat(u)).concat(Object.keys(Ra));i.includes("fa")||i.push("fa");const l=[".".concat(xe,":not([").concat(W,"])")].concat(i.map(u=>".".concat(u,":not([").concat(W,"])"))).join(", ");if(l.length===0)return Promise.resolve();let s=[];try{s=Q(t.querySelectorAll(l))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=qt.begin("onTree"),f=s.reduce((u,h)=>{try{const g=qe(h);g&&u.push(g)}catch(g){be||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,h)=>{Promise.all(f).then(g=>{Ye(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(g=>{c(),h(g)})})}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qe(t).then(n=>{n&&Ye([n],e)})}function Wa(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Wt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Wt(r||{})),t(a,{...n,mask:r})}}const Ua=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:i=null,title:l=null,titleId:s=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:b}=t;return ht({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),d.autoA11y&&(l?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(s||st()):(f["aria-hidden"]="true",f.focusable="false")),Ut({icons:{main:Ht(b),mask:r?Ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:{...I,...n},symbol:a,title:l,maskId:i,titleId:s,extra:{attributes:f,styles:u,classes:c}})))};var Ya={mixout(){return{icon:Wa(Ua)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ke,t.nodeCallback=$a,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Ke(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:l,transform:s,symbol:c,mask:f,maskId:u,extra:h}=n;return new Promise((g,b)=>{Promise.all([Gt(a,l),f.iconName?Gt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[O,k]=S;g([e,Ut({icons:{main:O,mask:k},prefix:l,iconName:a,transform:s,symbol:c,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:l}=e;const s=dt(l);s.length>0&&(a.style=s);let c;return zt(i)&&(c=R("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ha={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ht({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ga={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ht({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),wa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},Xa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:i={},styles:l={}}=e;return ht({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),je({content:t,transform:{...I,...n},title:a,extra:{attributes:i,styles:l,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let l=null,s=null;if(ce){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();l=f.width/c,s=f.height/c}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,je({content:e.innerHTML,width:l,height:s,transform:r,title:a,extra:i,watchable:!0})])}}};const qa=new RegExp('"',"ug"),Qe=[1105920,1112319],Ze={FontAwesome:{normal:"fas",400:"fas"},...Ln,...Tn,...Rn},Zt=Object.keys(Ze).reduce((t,e)=>(t[e.toLowerCase()]=Ze[e],t),{}),Ka=Object.keys(Zt).reduce((t,e)=>{const n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qa(t){const e=t.replace(qa,""),n=ua(e,0),a=n>=Qe[0]&&n<=Qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function Za(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Zt[n]||{})[r]||Ka[n]}function Je(t,e){const n="".concat(Un).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const l=Q(t.children).filter(g=>g.getAttribute(wt)===e)[0],s=V.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(qn),u=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(l&&!f)return t.removeChild(l),a();if(f&&h!=="none"&&h!==""){const g=s.getPropertyValue("content");let b=Za(c,u);const{value:S,isSecondary:O}=Qa(g),k=f[0].startsWith("FontAwesome");let m=Bt(b,S),p=m;if(k){const v=ba(S);v.iconName&&v.prefix&&(m=v.iconName,b=v.prefix)}if(m&&!O&&(!l||l.getAttribute(St)!==b||l.getAttribute(Ot)!==p)){t.setAttribute(n,p),l&&t.removeChild(l);const v=Ba(),{extra:x}=v;x.attributes[wt]=e,Gt(m,b).then(C=>{const kt=Ut({...v,icons:{main:C,mask:Rt()},prefix:b,iconName:p,extra:x,watchable:!0}),X=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=kt.map(Po=>lt(Po)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([Je(t,"::before"),Je(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~Hn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tn(t){if(z)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(tr).map(Ja),r=qt.begin("searchPseudoElements");He(),Promise.all(a).then(()=>{r(),Qt(),e()}).catch(()=>{r(),Qt(),n()})})}var er={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=tn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;d.searchPseudoElements&&tn(n)}}};let en=!1;var nr={mixout(){return{dom:{unwatch(){He(),en=!0}}}},hooks(){return{bootstrap(){Ge($t("mutationObserverCallbacks",{}))},noAuto(){Fa()},watch(t){const{observeMutationsRoot:e}=t;en?Qt():Ge($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const nn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let l=r.slice(1).join("-");if(i&&l==="h")return n.flipX=!0,n;if(i&&l==="v")return n.flipY=!0,n;if(l=parseFloat(l),isNaN(l))return n;switch(i){case"grow":n.size=n.size+l;break;case"shrink":n.size=n.size-l;break;case"left":n.x=n.x-l;break;case"right":n.x=n.x+l;break;case"up":n.y=n.y-l;break;case"down":n.y=n.y+l;break;case"rotate":n.rotate=n.rotate+l;break}return n},e)};var ar={mixout(){return{parse:{transform:t=>nn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=nn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const l={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},g={outer:l,inner:u,path:h};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Jt={x:0,y:0,width:"100%",height:"100%"};function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var or={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?gt(n.split(" ").map(r=>r.trim())):Rt();return a.prefix||(a.prefix=B()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:l,transform:s}=e;const{width:c,icon:f}=r,{width:u,icon:h}=i,g=oa({transform:s,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:{...Jt,fill:"white"}},S=f.children?{children:f.children.map(an)}:{},O={tag:"g",attributes:{...g.inner},children:[an({tag:f.tag,attributes:{...f.attributes,...g.path},...S})]},k={tag:"g",attributes:{...g.outer},children:[O]},m="mask-".concat(l||st()),p="clip-".concat(l||st()),v={tag:"mask",attributes:{...Jt,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,k]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:rr(h)},v]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(m,")"),...Jt}}),{children:n,attributes:a}}}},ir={provides(t){let e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},l={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||l.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(l),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},sr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},lr=[la,Ya,Ha,Ga,Xa,er,nr,ar,or,ir,sr];Ea(lr,{mixoutsTo:w}),w.noAuto;const rn=w.config,cr=w.library;w.dom;const vt=w.parse;w.findIconDefinition,w.toHtml;const fr=w.icon;w.layer;const ur=w.text;w.counter;const dr={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},mr={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},pr={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},gr={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},hr={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},yr={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},br={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},_r={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},vr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function on(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?on(Object(n),!0).forEach(function(a){E(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):on(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Er(t){var e=xr(t,"string");return typeof e=="symbol"?e:e+""}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function E(t,e,n){return e=Er(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Ar(t,e){if(t==null)return{};var n=kr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function te(t){return Nr(t)||wr(t)||Sr(t)||Or()}function Nr(t){if(Array.isArray(t))return ee(t)}function wr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sr(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={exports:{}};(function(t){(function(e){var n=function(m,p,v){if(!f(p)||h(p)||g(p)||b(p)||c(p))return p;var x,C=0,kt=0;if(u(p))for(x=[],kt=p.length;C<kt;C++)x.push(n(m,p[C],v));else{x={};for(var X in p)Object.prototype.hasOwnProperty.call(p,X)&&(x[m(X,v)]=n(m,p[X],v))}return x},a=function(m,p){p=p||{};var v=p.separator||"_",x=p.split||/(?=[A-Z])/;return m.split(x).join(v)},r=function(m){return S(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(p,v){return v?v.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},i=function(m){var p=r(m);return p.substr(0,1).toUpperCase()+p.substr(1)},l=function(m,p){return a(m,p).toLowerCase()},s=Object.prototype.toString,c=function(m){return typeof m=="function"},f=function(m){return m===Object(m)},u=function(m){return s.call(m)=="[object Array]"},h=function(m){return s.call(m)=="[object Date]"},g=function(m){return s.call(m)=="[object RegExp]"},b=function(m){return s.call(m)=="[object Boolean]"},S=function(m){return m=m-0,m===m},O=function(m,p){var v=p&&"process"in p?p.process:p;return typeof v!="function"?m:function(x,C){return v(x,m,C)}},k={camelize:r,decamelize:l,pascalize:i,depascalize:l,camelizeKeys:function(m,p){return n(O(r,p),m)},decamelizeKeys:function(m,p){return n(O(l,p),m,p)},pascalizeKeys:function(m,p){return n(O(i,p),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=k:e.humps=k})(Cr)})(sn);var Pr=sn.exports,Ir=["class","style"];function Tr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Pr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Lr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return ne(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.class=Lr(u);break;case"style":c.style=Tr(u);break;default:c.attrs[f]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,l=i===void 0?{}:i,s=Ar(n,Ir);return o.h(t.tag,P(P(P({},e),{},{class:r.class,style:P(P({},r.style),l)},r.attrs),s),a)}var ln=!1;try{ln=process.env.NODE_ENV==="production"}catch{}function zr(){if(!ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ft(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?E({},t,e):{}}function Mr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},E(E(E(E(E(E(E(E(E(E(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),E(E(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function cn(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vt.icon)return vt.icon(t);if(t===null)return null;if(xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Fr=o.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=o.computed(function(){return cn(e.icon)}),i=o.computed(function(){return ft("classes",Mr(e))}),l=o.computed(function(){return ft("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),s=o.computed(function(){return ft("mask",cn(e.mask))}),c=o.computed(function(){return fr(r.value,P(P(P(P({},i.value),l.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});o.watch(c,function(u){if(!u)return zr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var f=o.computed(function(){return c.value?ne(c.value.abstract[0],{},a):null});return function(){return f.value}}});o.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=rn.familyPrefix,i=o.computed(function(){return["".concat(r,"-layers")].concat(te(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return o.h("div",{class:i.value},a.default?a.default():[])}}}),o.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=rn.familyPrefix,i=o.computed(function(){return ft("classes",[].concat(te(e.counter?["".concat(r,"-layers-counter")]:[]),te(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),l=o.computed(function(){return ft("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),s=o.computed(function(){var f=ur(e.value.toString(),P(P({},l.value),i.value)),u=f.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=o.computed(function(){return ne(s.value,{},a)});return function(){return c.value}}}),cr.add(vr,yr,mr,dr,gr,pr,_r,br,hr);const Vr={install:t=>{t.component("simplisiti-component-editor",wn),t.component("fa-icon",Fr)}},Dr=12,jr=12,Et=t=>(o.pushScopeId("data-v-40dcea15"),t=t(),o.popScopeId(),t),Br={class:"sp-layout__container"},Rr={class:"sp-layout__header"},$r={class:"sp-layout__body"},Wr={class:"sp-layout__body"},Ur={key:0,class:"sp-layout__grid-container"},Yr={class:"sp-layout__grid-item sp-layout__columns-container"},Hr={name:"",id:""},Gr=Et(()=>o.createElementVNode("option",{value:""},null,-1)),Xr=["value"],qr={class:"sp-layout__grid-item sp-layout__rows-container"},Kr={name:"",id:""},Qr=Et(()=>o.createElementVNode("option",{value:""},null,-1)),Zr=["value"],Jr={class:"sp-layout__horizontal-alignment-container"},to=Et(()=>o.createElementVNode("label",null,"Horizontal",-1)),eo={class:"sp-layout__buttons-container"},no={class:"sp-layout__vertical-alignment-container"},ao=Et(()=>o.createElementVNode("label",null,"Vertical",-1)),ro={class:"sp-layout__buttons-container"},oo=Object.freeze(Object.defineProperty({__proto__:null,default:et(o.defineComponent({__name:"Layout",setup(t){const e=o.ref(null),n=i=>{const l=i==="rows"?Dr:jr,s=[];for(let c=0;c<l;c++)s.push(c+1);return s},a=o.computed(()=>n("columns")),r=o.computed(()=>n("rows"));return(i,l)=>{const s=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock("div",Br,[o.createElementVNode("div",Rr,[o.createElementVNode("label",null,[o.withDirectives(o.createElementVNode("input",{type:"radio",name:"display",value:"sp-layout-display-flex","onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c)},null,512),[[o.vModelRadio,e.value]]),o.createVNode(s,{icon:"arrows-left-right"}),o.createTextVNode(" Flexible ")]),o.createElementVNode("label",null,[o.withDirectives(o.createElementVNode("input",{type:"radio",name:"display",value:"sp-layout-display-grid","onUpdate:modelValue":l[1]||(l[1]=c=>e.value=c)},null,512),[[o.vModelRadio,e.value]]),o.createVNode(s,{icon:"table-cells"}),o.createTextVNode(" Tabla ")])]),o.createElementVNode("div",$r,[o.createElementVNode("div",Wr,[e.value==="sp-layout-display-grid"?(o.openBlock(),o.createElementBlock("div",Ur,[o.createElementVNode("div",Yr,[o.createElementVNode("label",null,[o.createVNode(s,{icon:"grip"}),o.createTextVNode(" Columas ")]),o.createElementVNode("select",Hr,[Gr,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(a.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c,value:`sp-layout-columns-${c}`},o.toDisplayString(c),9,Xr))),128))])]),o.createElementVNode("div",qr,[o.createElementVNode("label",null,[o.createVNode(s,{icon:"grip-vertical"}),o.createTextVNode(" Filas ")]),o.createElementVNode("select",Kr,[Qr,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(r.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c,value:`sp-layout-rows-${c}`},o.toDisplayString(c),9,Zr))),128))])])])):o.createCommentVNode("",!0),o.createElementVNode("div",Jr,[to,o.createElementVNode("div",eo,[o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-up-to-line"})]),o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-left-right-to-line"})]),o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-up-to-line"})])])]),o.createElementVNode("div",no,[ao,o.createElementVNode("div",ro,[o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-up-to-line"})]),o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-left-right-to-line"})]),o.createElementVNode("button",null,[o.createVNode(s,{icon:"arrows-up-to-line"})])])])])])])}}}),[["__scopeId","data-v-40dcea15"]])},Symbol.toStringTag,{value:"Module"})),io=["0","1","2","3","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],$=t=>(o.pushScopeId("data-v-17ec4c84"),t=t(),o.popScopeId(),t),so={class:"sp-spacing__container"},lo={class:"sp-spacing__select-container"},co={class:"sp-spacing__select-item"},fo=$(()=>o.createElementVNode("label",null,"Arriba",-1)),uo=$(()=>o.createElementVNode("option",{value:""},null,-1)),mo=["value"],po={class:"sp-spacing__select-item"},go=$(()=>o.createElementVNode("label",null,"Abajo",-1)),ho=$(()=>o.createElementVNode("option",{value:""},null,-1)),yo=["value"],bo={class:"sp-spacing__select-item"},_o=$(()=>o.createElementVNode("label",null,"Izquierda",-1)),vo=$(()=>o.createElementVNode("option",{value:""},null,-1)),xo=["value"],Eo={class:"sp-spacing__select-item"},ko=$(()=>o.createElementVNode("label",null,"Derecha",-1)),Ao=$(()=>o.createElementVNode("option",{value:""},null,-1)),No=["value"],fn=et(o.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0}},setup(t){const{type:e}=t,n=s=>io.map(c=>({value:`sp-spacing__${e}-${s}__${c}`,label:c})),a=o.computed(()=>n("top")),r=o.computed(()=>n("bottom")),i=o.computed(()=>n("left")),l=o.computed(()=>n("right"));return(s,c)=>(o.openBlock(),o.createElementBlock("div",so,[o.createElementVNode("div",null,[o.createElementVNode("h2",null,o.toDisplayString(t.title),1)]),o.createElementVNode("div",lo,[o.createElementVNode("div",co,[fo,o.createElementVNode("select",null,[uo,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(a.value,f=>(o.openBlock(),o.createElementBlock("option",{key:f.value,value:f.value},o.toDisplayString(f.label),9,mo))),128))])]),o.createElementVNode("div",po,[go,o.createElementVNode("select",null,[ho,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(r.value,f=>(o.openBlock(),o.createElementBlock("option",{key:f.value,value:f.value},o.toDisplayString(f.label),9,yo))),128))])]),o.createElementVNode("div",bo,[_o,o.createElementVNode("select",null,[vo,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(i.value,f=>(o.openBlock(),o.createElementBlock("option",{key:f.value,value:f.value},o.toDisplayString(f.label),9,xo))),128))])]),o.createElementVNode("div",Eo,[ko,o.createElementVNode("select",null,[Ao,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(l.value,f=>(o.openBlock(),o.createElementBlock("option",{key:f.value,value:f.value},o.toDisplayString(f.label),9,No))),128))])])])]))}}),[["__scopeId","data-v-17ec4c84"]]),wo=t=>(o.pushScopeId("data-v-bd74e2b4"),t=t(),o.popScopeId(),t),So={class:"sp-spacing__container"},Oo=wo(()=>o.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),Co=Object.freeze(Object.defineProperty({__proto__:null,default:et(o.defineComponent({__name:"Spacing",setup(t){return(e,n)=>(o.openBlock(),o.createElementBlock("div",So,[o.createVNode(fn,{title:"Margen",type:"margin"}),Oo,o.createVNode(fn,{title:"Padding",type:"padding"})]))}}),[["__scopeId","data-v-bd74e2b4"]])},Symbol.toStringTag,{value:"Module"}));return Vr});
