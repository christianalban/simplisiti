(function(o,et){typeof exports=="object"&&typeof module<"u"?module.exports=et(require("vue")):typeof define=="function"&&define.amd?define(["vue"],et):(o=typeof globalThis<"u"?globalThis:o||self,o.SimplisitiComponentEditor=et(o.Vue))})(this,function(o){"use strict";const et={div:"Contenedor",a:"Enlace"},un={div:"container",a:"ancord"},dn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>hr)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>jr)}},mn={container:["layout","spacing"],ancord:["spacing"]},pn=t=>{const e=un[t];return mn[e].map(a=>({tab:a,...dn[a]}))},gn={class:"sp-wizard-popup__tabs-container"},hn={class:"sp-wizard-popup__tabs"},yn={class:"sp-wizard-popup__tab"},bn=["title","onClick"],_n={class:"sp-wizard-popup__content"},vn={class:"sp-wizard-popup__content-header"},xn=o.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=o.ref([]);n.value=Array.from(e.classList).filter(h=>h.startsWith("sp-style"));const a=o.shallowReactive([]),r=o.shallowRef(void 0),i=o.ref(void 0),s=o.computed(()=>pn(e.tagName.toLowerCase())),l=async()=>{for(const h of s.value)a.push({component:o.defineAsyncComponent(h.component),icon:h.icon,title:h.title,tab:h.tab})},f=h=>{r.value=h.component,i.value=h.tab},c=()=>{a.length>0&&f(a[0])},d=h=>i.value===h.tab,y=h=>{e.classList.forEach(_=>{setTimeout(()=>{_.startsWith("sp-style")&&e.classList.remove(_)},100)}),h.forEach(_=>{setTimeout(()=>{e.classList.add(_)},100)}),window.parent.document.dispatchEvent(new CustomEvent("elementChange",{detail:{simplisitiId:e.dataset.simplisitiid,spClassList:h}}))};return o.onMounted(async()=>{await l(),c()}),(h,_)=>{const N=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock(o.Fragment,null,[o.createElementVNode("div",gn,[o.createElementVNode("div",hn,[(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(o.unref(a),b=>(o.openBlock(),o.createElementBlock("div",yn,[o.createElementVNode("button",{class:o.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":d(b)}]),title:b.title,onClick:E=>f(b)},[o.createVNode(N,{icon:b.icon},null,8,["icon"])],10,bn)]))),256))])]),o.createElementVNode("div",_n,[o.createElementVNode("div",vn,[(o.openBlock(),o.createBlock(o.resolveDynamicComponent(r.value),{onUpdate:y,"sp-class-list":n.value},null,40,["sp-class-list"]))])])],64)}}}),nt=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},En=nt(xn,[["__scopeId","data-v-7b7a2678"]]),Nn={class:"sp-configuration-popup__header"},wn={class:"sp-configuration-popup__body"},kn=nt(o.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,a=o.ref(null),r=o.ref(!1),i=e,s=c=>{setTimeout(()=>{if(!c)return;const d=c.getBoundingClientRect(),y=d.top,h=d.bottom,_=d.left+d.width+10;if(a.value){a.value.style.top=`${y}px`,a.value.style.left=`${_}px`;const N=document.body.offsetWidth;_+a.value.offsetWidth>N&&(a.value.style.top=`${y+10}px`,a.value.style.left=`${_-a.value.offsetWidth-20}px`);const b=document.body.offsetHeight;y+a.value.offsetHeight>b&&(a.value.style.top="auto",a.value.style.bottom=`${h-a.value.offsetHeight+20}px`)}},50)},l=o.computed(()=>{var d;const c=(d=n==null?void 0:n.tagName)==null?void 0:d.toLowerCase();return c&&et[c]||"Element"}),f=c=>{r.value=!0,setTimeout(()=>{i("close",c)},300)};return s(n),(c,d)=>{const y=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock("div",{class:o.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:a,onClick:o.withModifiers(h=>{},["stop"])},[o.createElementVNode("div",Nn,[o.createElementVNode("h4",null,o.toDisplayString(l.value),1),o.createVNode(y,{class:"sp-configuration-popup__close",icon:"times",onClick:d[0]||(d[0]=h=>f(h))})]),o.createElementVNode("div",wn,[t.element?(o.openBlock(),o.createBlock(En,{key:0,element:t.element},null,8,["element"])):o.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-317d171c"]]),An=o.defineComponent({__name:"App",setup(t){const e=o.ref(!1),n=o.ref(null),a=i=>{i.forEach(s=>{s.addEventListener("click",l=>{e.value||(e.value=!0,n.value=s,s.classList.add("sp-element__active")),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseover",l=>{e.value||s.classList.add("sp-element__active"),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseout",l=>{e.value||s.classList.remove("sp-element__active"),l.preventDefault(),l.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return o.onMounted(()=>{const i=document.querySelectorAll("div"),s=document.querySelectorAll("a");a(i),a(s)}),(i,s)=>{var l;return e.value?(o.openBlock(),o.createBlock(kn,{key:0,element:n.value,type:(l=n.value)==null?void 0:l.tagName,onClose:o.withModifiers(r,["stop"])},null,8,["element","type"])):o.createCommentVNode("",!0)}}}),ae=()=>{};let wt={},oe={},re=null,ie={mark:ae,measure:ae};try{typeof window<"u"&&(wt=window),typeof document<"u"&&(oe=document),typeof MutationObserver<"u"&&(re=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}const{userAgent:se=""}=wt.navigator||{},V=wt,v=oe,le=re,dt=ie;V.document;const I=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",ce=~se.indexOf("MSIE")||~se.indexOf("Trident/");var x="classic",fe="duotone",A="sharp",S="sharp-duotone",Sn=[x,fe,A,S],Cn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},On=["kit"],Pn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ln=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,zn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Mn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},In={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Tn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Fn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},de={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Dn=["solid","regular","light","thin","duotone","brands"],me=[1,2,3,4,5,6,7,8,9,10],jn=me.concat([11,12,13,14,15,16,17,18,19,20]),at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=[...Object.keys(Tn),...Dn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY].concat(me.map(t=>"".concat(t,"x"))).concat(jn.map(t=>"w-".concat(t))),Bn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Un={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const T="___FONT_AWESOME___",kt=16,ge="fa",he="svg-inline--fa",U="data-fa-i2svg",At="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",St="data-prefix",Ct="data-icon",ye="fontawesome-i2svg",Yn="async",Hn=["HTML","HEAD","STYLE","SCRIPT"],be=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),_e=[x,A,S];function ot(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[x]}})}const ve={...de};ve[x]={...de[x],...ue.kit,...ue["kit-duotone"]};const W=ot(ve),Ot={...Vn};Ot[x]={...Ot[x],...pe.kit,...pe["kit-duotone"]};const rt=ot(Ot),Pt={...Fn};Pt[x]={...Pt[x],...Un.kit};const Y=ot(Pt),Lt={...In};Lt[x]={...Lt[x],...$n.kit};const Gn=ot(Lt),Xn=Pn,xe="fa-layers-text",qn=Ln,Kn={...Cn};ot(Kn);const Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zt=at,K=new Set;Object.keys(rt[x]).map(K.add.bind(K)),Object.keys(rt[A]).map(K.add.bind(K)),Object.keys(rt[S]).map(K.add.bind(K));const Zn=[...On,...Rn],it=V.FontAwesomeConfig||{};function Jn(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ta(Jn(n));r!=null&&(it[a]=r)});const Ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:ge,replacementClass:he,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);const Q={...Ee,...it};Q.autoReplaceSvg||(Q.observeMutations=!1);const p={};Object.keys(Ee).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){Q[t]=e,st.forEach(n=>n(p))},get:function(){return Q[t]}})}),Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){Q.cssPrefix=t,st.forEach(e=>e(p))},get:function(){return Q.cssPrefix}}),V.FontAwesomeConfig=p;const st=[];function ea(t){return st.push(t),()=>{st.splice(st.indexOf(t),1)}}const D=kt,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!t||!I)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return v.head.insertBefore(e,a),t}const aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=aa[Math.random()*62|0];return e}function Z(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mt(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ne(t[n]),'" '),"").trim()}function mt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function It(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function ra(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function ia(t){let{transform:e,width:n=kt,height:a=kt,startCentered:r=!1}=t,i="";return r&&ce?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var sa=`:root, :host {
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
}`;function we(){const t=ge,e=he,n=p.cssPrefix,a=p.replacementClass;let r=sa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ke=!1;function Tt(){p.autoAddCss&&!ke&&(na(we()),ke=!0)}var la={mixout(){return{dom:{css:we,insertCss:Tt}}},hooks(){return{beforeDOMElementCreation(){Tt()},beforeI2svg(){Tt()}}}};const F=V||{};F[T]||(F[T]={}),F[T].styles||(F[T].styles={}),F[T].hooks||(F[T].hooks={}),F[T].shims||(F[T].shims=[]);var z=F[T];const Ae=[],Se=function(){v.removeEventListener("DOMContentLoaded",Se),pt=1,Ae.map(t=>t())};let pt=!1;I&&(pt=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),pt||v.addEventListener("DOMContentLoaded",Se));function ca(t){I&&(pt?setTimeout(t,0):Ae.push(t))}function ct(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ne(t):"<".concat(e," ").concat(oa(n),">").concat(a.map(ct).join(""),"</").concat(e,">")}function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ft=function(e,n,a,r){var i=Object.keys(e),s=i.length,l=n,f,c,d;for(a===void 0?(f=1,d=e[i[0]]):(f=0,d=a);f<s;f++)c=i[f],d=l(d,e[c],c,e);return d};function fa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){const e=fa(t);return e.length===1?e[0].toString(16):null}function ua(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Oe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Oe(e);typeof z.hooks.addPack=="function"&&!a?z.hooks.addPack(t,Oe(e)):z.styles[t]={...z.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:H,shims:da}=z,ma={[x]:Object.values(Y[x]),[A]:Object.values(Y[A]),[S]:Object.values(Y[S])};let jt=null,Pe={},Le={},ze={},Me={},Ie={};const pa={[x]:Object.keys(W[x]),[A]:Object.keys(W[A]),[S]:Object.keys(W[S])};function ga(t){return~Zn.indexOf(t)}function ha(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}const Te=()=>{const t=a=>Ft(H,(r,i,s)=>(r[s]=Ft(i,a,{}),r),{});Pe=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),Le=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),Ie=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(l=>{a[l]=i}),a});const e="far"in H||p.autoFetchSvg,n=Ft(da,(a,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ze=n.names,Me=n.unicodes,jt=gt(p.styleDefault,{family:p.familyDefault})};ea(t=>{jt=gt(t.styleDefault,{family:p.familyDefault})}),Te();function Rt(t,e){return(Pe[t]||{})[e]}function ya(t,e){return(Le[t]||{})[e]}function j(t,e){return(Ie[t]||{})[e]}function Fe(t){return ze[t]||{prefix:null,iconName:null}}function ba(t){const e=Me[t],n=Rt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return jt}const Bt=()=>({prefix:null,iconName:null,rest:[]});function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=x}=e,a=W[n][t],r=rt[n][t]||rt[n][a],i=t in z.styles?t:null;return r||i||null}const _a={[x]:Object.keys(Y[x]),[A]:Object.keys(Y[A]),[S]:Object.keys(Y[S])};function ht(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[x]:"".concat(p.cssPrefix,"-").concat(x),[A]:"".concat(p.cssPrefix,"-").concat(A),[S]:"".concat(p.cssPrefix,"-").concat(S)};let r=null,i=x;const s=Sn.filter(f=>f!==fe);s.forEach(f=>{(t.includes(a[f])||t.some(c=>_a[f].includes(c)))&&(i=f)});const l=t.reduce((f,c)=>{const d=ha(p.cssPrefix,c);if(H[c]?(c=ma[i].includes(c)?Gn[i][c]:c,r=c,f.prefix=c):pa[i].indexOf(c)>-1?(r=c,f.prefix=gt(c,{family:i})):d?f.iconName=d:c!==p.replacementClass&&!s.some(y=>c===a[y])&&f.rest.push(c),!n&&f.prefix&&f.iconName){const y=r==="fa"?Fe(f.iconName):{},h=j(f.prefix,f.iconName);y.prefix&&(r=null),f.iconName=y.iconName||h||f.iconName,f.prefix=y.prefix||f.prefix,f.prefix==="far"&&!H.far&&H.fas&&!p.autoFetchSvg&&(f.prefix="fas")}return f},Bt());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===A&&(H.fass||p.autoFetchSvg)&&(l.prefix="fass",l.iconName=j(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===S&&(H.fasds||p.autoFetchSvg)&&(l.prefix="fasds",l.iconName=j(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=R()||"fas"),l}class va{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Dt(i,r[i]);const s=Y[x][i];s&&Dt(s,r[i]),Te()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:l}=a[r],f=l[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][s]=l}),e}}let Ve=[],J={};const tt={},xa=Object.keys(tt);function Ea(t,e){let{mixoutsTo:n}=e;return Ve=t,J={},Object.keys(tt).forEach(a=>{xa.indexOf(a)===-1&&delete tt[a]}),Ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{J[s]||(J[s]=[]),J[s].push(i[s])})}a.provides&&a.provides(tt)}),n}function $t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(J[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(J[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return tt[t]?tt[t].apply(null,e):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=j(n,e)||e,Ce(De.definitions,n,e)||Ce(z.styles,n,e)}const De=new va,C={noAuto:()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,G("noAuto")},config:p,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(G("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,ca(()=>{Na({autoReplaceSvgRoot:e}),G("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gt(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Xn))){const e=ht(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:j(e,t)||t}}}},library:De,findIconDefinition:Ut,toHtml:ct},Na=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys(z.styles).length>0||p.autoFetchSvg)&&I&&p.autoReplaceSvg&&C.dom.i2svg({node:e})};function yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ct(n))}}),Object.defineProperty(t,"node",{get:function(){if(!I)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wa(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(It(s)&&n.found&&!a.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};r.style=mt({...i,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function ka(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:s},children:a}]}]}function Wt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:l,maskId:f,titleId:c,extra:d,watchable:y=!1}=t,{width:h,height:_}=n.found?n:e,N=a==="fak",b=[p.replacementClass,r?"".concat(p.cssPrefix,"-").concat(r):""].filter(O=>d.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(d.classes).join(" ");let E={children:[],attributes:{...d.attributes,"data-prefix":a,"data-icon":r,class:b,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(_)}};const u=N&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/_*16*.0625,"em")}:{};y&&(E.attributes[U]=""),l&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(c||lt())},children:[l]}),delete E.attributes.title);const m={...E,prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:{...u,...d.styles}},{children:g,attributes:w}=n.found&&e.found?B("generateAbstractMask",m)||{children:[],attributes:{}}:B("generateAbstractIcon",m)||{children:[],attributes:{}};return m.children=g,m.attributes=w,s?ka(m):wa(m)}function je(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:l=!1}=t,f={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};l&&(f[U]="");const c={...s.styles};It(r)&&(c.transform=ia({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const d=mt(c);d.length>0&&(f.style=d);const y=[];return y.push({tag:"span",attributes:f,children:[e]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Aa(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=mt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Yt}=z;function Ht(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(zt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(zt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Sa={found:!1,width:512,height:512};function Ca(t,e){!be&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=Fe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const i=Yt[e][t];return a(Ht(i))}Ca(t,e),a({...Sa,icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const Re=()=>{},Xt=p.measurePerformance&&dt&&dt.mark&&dt.measure?dt:{mark:Re,measure:Re},ft='FA "6.6.0"',Oa=t=>(Xt.mark("".concat(ft," ").concat(t," begins")),()=>Be(t)),Be=t=>{Xt.mark("".concat(ft," ").concat(t," ends")),Xt.measure("".concat(ft," ").concat(t),"".concat(ft," ").concat(t," begins"),"".concat(ft," ").concat(t," ends"))};var qt={begin:Oa,end:Be};const bt=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Pa(t){const e=t.getAttribute?t.getAttribute(St):null,n=t.getAttribute?t.getAttribute(Ct):null;return e&&n}function La(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function za(){return p.autoReplaceSvg===!0?_t.replace:_t[p.autoReplaceSvg]||_t.replace}function Ma(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function Ia(t){return v.createElement(t)}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ma:Ia}=e;if(typeof t=="string")return v.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Ue(i,{ceFn:n}))}),a}function Ta(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const _t={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ue(n),e)}),e.getAttribute(U)===null&&p.keepOriginalSource){let n=v.createComment(Ta(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Mt(e).indexOf(p.replacementClass))return _t.replace(t);const a=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===p.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ct(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function We(t){t()}function Ye(t,e){const n=typeof e=="function"?e:bt;if(t.length===0)n();else{let a=We;p.mutateApproach===Yn&&(a=V.requestAnimationFrame||We),a(()=>{const r=za(),i=qt.begin("mutate");t.map(r),i(),n()})}}let Kt=!1;function He(){Kt=!0}function Qt(){Kt=!1}let vt=null;function Ge(t){if(!le||!p.observeMutations)return;const{treeCallback:e=bt,nodeCallback:n=bt,pseudoElementsCallback:a=bt,observeMutationsRoot:r=v}=t;vt=new le(i=>{if(Kt)return;const s=R();Z(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!$e(l.addedNodes[0])&&(p.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&p.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&$e(l.target)&&~Qn.indexOf(l.attributeName))if(l.attributeName==="class"&&Pa(l.target)){const{prefix:f,iconName:c}=ht(Mt(l.target));l.target.setAttribute(St,f||s),c&&l.target.setAttribute(Ct,c)}else La(l.target)&&n(l.target)})}),I&&vt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fa(){vt&&vt.disconnect()}function Va(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Da(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ht(Mt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ya(r.prefix,t.innerText)||Rt(r.prefix,Vt(t.innerText))),!r.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ja(t){const e=Z(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ra(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Da(t),i=ja(t),s=$t("parseNodeAttributes",{},t);let l=e.styleParser?Va(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...s}}const{styles:Ba}=z;function qe(t){const e=p.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(xe)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let M=new Set;_e.map(t=>{M.add("fa-".concat(t))}),Object.keys(W[x]).map(M.add.bind(M)),Object.keys(W[A]).map(M.add.bind(M)),Object.keys(W[S]).map(M.add.bind(M)),M=[...M];function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();const n=v.documentElement.classList,a=d=>n.add("".concat(ye,"-").concat(d)),r=d=>n.remove("".concat(ye,"-").concat(d)),i=p.autoFetchSvg?M:_e.map(d=>"fa-".concat(d)).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");const s=[".".concat(xe,":not([").concat(U,"])")].concat(i.map(d=>".".concat(d,":not([").concat(U,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Z(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const f=qt.begin("onTree"),c=l.reduce((d,y)=>{try{const h=qe(y);h&&d.push(h)}catch(h){be||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,y)=>{Promise.all(c).then(h=>{Ye(h,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),d()})}).catch(h=>{f(),y(h)})})}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qe(t).then(n=>{n&&Ye([n],e)})}function Ua(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ut(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(a,{...n,mask:r})}}const Wa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:f=[],attributes:c={},styles:d={}}=e;if(!t)return;const{prefix:y,iconName:h,icon:_}=t;return yt({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(s?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(l||lt()):(c["aria-hidden"]="true",c.focusable="false")),Wt({icons:{main:Ht(_),mask:r?Ht(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:h,transform:{...L,...n},symbol:a,title:s,maskId:i,titleId:l,extra:{attributes:c,styles:d,classes:f}})))};var Ya={mixout(){return{icon:Ua(Wa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ke,t.nodeCallback=$a,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:a=()=>{}}=e;return Ke(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:l,symbol:f,mask:c,maskId:d,extra:y}=n;return new Promise((h,_)=>{Promise.all([Gt(a,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[b,E]=N;h([e,Wt({icons:{main:b,mask:E},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:r,titleId:i,extra:y,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const l=mt(s);l.length>0&&(a.style=l);let f;return It(i)&&(f=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Ha={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yt({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ga={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return yt({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),Aa({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(p.cssPrefix,"-layers-counter"),...a]}})))}}}},Xa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return yt({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),je({content:t,transform:{...L,...n},title:a,extra:{attributes:i,styles:s,classes:["".concat(p.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,l=null;if(ce){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,l=c.height/f}return p.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,je({content:e.innerHTML,width:s,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const qa=new RegExp('"',"ug"),Qe=[1105920,1112319],Ze={FontAwesome:{normal:"fas",400:"fas"},...Mn,...zn,...Bn},Zt=Object.keys(Ze).reduce((t,e)=>(t[e.toLowerCase()]=Ze[e],t),{}),Ka=Object.keys(Zt).reduce((t,e)=>{const n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qa(t){const e=t.replace(qa,""),n=ua(e,0),a=n>=Qe[0]&&n<=Qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function Za(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Zt[n]||{})[r]||Ka[n]}function Je(t,e){const n="".concat(Wn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=Z(t.children).filter(h=>h.getAttribute(At)===e)[0],l=V.getComputedStyle(t,e),f=l.getPropertyValue("font-family"),c=f.match(qn),d=l.getPropertyValue("font-weight"),y=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&y!=="none"&&y!==""){const h=l.getPropertyValue("content");let _=Za(f,d);const{value:N,isSecondary:b}=Qa(h),E=c[0].startsWith("FontAwesome");let u=Rt(_,N),m=u;if(E){const g=ba(N);g.iconName&&g.prefix&&(u=g.iconName,_=g.prefix)}if(u&&!b&&(!s||s.getAttribute(St)!==_||s.getAttribute(Ct)!==m)){t.setAttribute(n,m),s&&t.removeChild(s);const g=Ra(),{extra:w}=g;w.attributes[At]=e,Gt(u,_).then(O=>{const Nt=Wt({...g,icons:{main:O,mask:Bt()},prefix:_,iconName:m,extra:w,watchable:!0}),q=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(q,t.firstChild):t.appendChild(q),q.outerHTML=Nt.map(Rr=>ct(Rr)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([Je(t,"::before"),Je(t,"::after")])}function to(t){return t.parentNode!==document.head&&!~Hn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(At)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tn(t){if(I)return new Promise((e,n)=>{const a=Z(t.querySelectorAll("*")).filter(to).map(Ja),r=qt.begin("searchPseudoElements");He(),Promise.all(a).then(()=>{r(),Qt(),e()}).catch(()=>{r(),Qt(),n()})})}var eo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=tn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;p.searchPseudoElements&&tn(n)}}};let en=!1;var no={mixout(){return{dom:{unwatch(){He(),en=!0}}}},hooks(){return{bootstrap(){Ge($t("mutationObserverCallbacks",{}))},noAuto(){Fa()},watch(t){const{observeMutationsRoot:e}=t;en?Qt():Ge($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const nn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var ao={mixout(){return{parse:{transform:t=>nn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=nn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},y={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:d,path:y};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Jt={x:0,y:0,width:"100%",height:"100%"};function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oo(t){return t.tag==="g"?t.children:[t]}var ro={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ht(n.split(" ").map(r=>r.trim())):Bt();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:l}=e;const{width:f,icon:c}=r,{width:d,icon:y}=i,h=ra({transform:l,containerWidth:d,iconWidth:f}),_={tag:"rect",attributes:{...Jt,fill:"white"}},N=c.children?{children:c.children.map(an)}:{},b={tag:"g",attributes:{...h.inner},children:[an({tag:c.tag,attributes:{...c.attributes,...h.path},...N})]},E={tag:"g",attributes:{...h.outer},children:[b]},u="mask-".concat(s||lt()),m="clip-".concat(s||lt()),g={tag:"mask",attributes:{...Jt,id:u,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,E]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:oo(y)},g]};return n.push(w,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(u,")"),...Jt}}),{children:n,attributes:a}}}},io={provides(t){let e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},so={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},lo=[la,Ya,Ha,Ga,Xa,eo,no,ao,ro,io,so];Ea(lo,{mixoutsTo:C}),C.noAuto;const on=C.config,co=C.library;C.dom;const xt=C.parse;C.findIconDefinition,C.toHtml;const fo=C.icon;C.layer;const uo=C.text;C.counter;const mo={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},po={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},go={prefix:"fas",iconName:"arrow-down-wide-short",icon:[576,512,["sort-amount-asc","sort-amount-down"],"f160","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]},ho={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},yo={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},bo={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},_o={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},vo={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},xo={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},Eo={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},No={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function rn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rn(Object(n),!0).forEach(function(a){k(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function wo(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ko(t){var e=wo(t,"string");return typeof e=="symbol"?e:e+""}function Et(t){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(t)}function k(t,e,n){return e=ko(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ao(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function So(t,e){if(t==null)return{};var n=Ao(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function te(t){return Co(t)||Oo(t)||Po(t)||Lo()}function Co(t){if(Array.isArray(t))return ee(t)}function Oo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Po(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Lo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={exports:{}};(function(t){(function(e){var n=function(u,m,g){if(!c(m)||y(m)||h(m)||_(m)||f(m))return m;var w,O=0,Nt=0;if(d(m))for(w=[],Nt=m.length;O<Nt;O++)w.push(n(u,m[O],g));else{w={};for(var q in m)Object.prototype.hasOwnProperty.call(m,q)&&(w[u(q,g)]=n(u,m[q],g))}return w},a=function(u,m){m=m||{};var g=m.separator||"_",w=m.split||/(?=[A-Z])/;return u.split(w).join(g)},r=function(u){return N(u)?u:(u=u.replace(/[\-_\s]+(.)?/g,function(m,g){return g?g.toUpperCase():""}),u.substr(0,1).toLowerCase()+u.substr(1))},i=function(u){var m=r(u);return m.substr(0,1).toUpperCase()+m.substr(1)},s=function(u,m){return a(u,m).toLowerCase()},l=Object.prototype.toString,f=function(u){return typeof u=="function"},c=function(u){return u===Object(u)},d=function(u){return l.call(u)=="[object Array]"},y=function(u){return l.call(u)=="[object Date]"},h=function(u){return l.call(u)=="[object RegExp]"},_=function(u){return l.call(u)=="[object Boolean]"},N=function(u){return u=u-0,u===u},b=function(u,m){var g=m&&"process"in m?m.process:m;return typeof g!="function"?u:function(w,O){return g(w,u,O)}},E={camelize:r,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(u,m){return n(b(r,m),u)},decamelizeKeys:function(u,m){return n(b(s,m),u,m)},pascalizeKeys:function(u,m){return n(b(i,m),u)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=E:e.humps=E})(zo)})(sn);var Mo=sn.exports,Io=["class","style"];function To(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Mo.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Fo(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return ne(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,c){var d=t.attributes[c];switch(c){case"class":f.class=Fo(d);break;case"style":f.style=To(d);break;default:f.attrs[c]=d}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,l=So(n,Io);return o.h(t.tag,P(P(P({},e),{},{class:r.class,style:P(P({},r.style),s)},r.attrs),l),a)}var ln=!1;try{ln=process.env.NODE_ENV==="production"}catch{}function Vo(){if(!ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?k({},t,e):{}}function Do(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},k(k(k(k(k(k(k(k(k(k(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),k(k(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function cn(t){if(t&&Et(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xt.icon)return xt.icon(t);if(t===null)return null;if(Et(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var jo=o.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=o.computed(function(){return cn(e.icon)}),i=o.computed(function(){return ut("classes",Do(e))}),s=o.computed(function(){return ut("transform",typeof e.transform=="string"?xt.transform(e.transform):e.transform)}),l=o.computed(function(){return ut("mask",cn(e.mask))}),f=o.computed(function(){return fo(r.value,P(P(P(P({},i.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});o.watch(f,function(d){if(!d)return Vo("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var c=o.computed(function(){return f.value?ne(f.value.abstract[0],{},a):null});return function(){return c.value}}});o.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=on.familyPrefix,i=o.computed(function(){return["".concat(r,"-layers")].concat(te(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return o.h("div",{class:i.value},a.default?a.default():[])}}}),o.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=on.familyPrefix,i=o.computed(function(){return ut("classes",[].concat(te(e.counter?["".concat(r,"-layers-counter")]:[]),te(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),s=o.computed(function(){return ut("transform",typeof e.transform=="string"?xt.transform(e.transform):e.transform)}),l=o.computed(function(){var c=uo(e.value.toString(),P(P({},s.value),i.value)),d=c.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),f=o.computed(function(){return ne(l.value,{},a)});return function(){return f.value}}}),co.add(No,vo,ho,mo,bo,yo,Eo,xo,_o,po,go);const Ro={install:t=>{t.component("simplisiti-component-editor",An),t.component("fa-icon",jo)}},Bo=12,$o=12,X=t=>(o.pushScopeId("data-v-b18449c6"),t=t(),o.popScopeId(),t),Uo={class:"sp-layout__container"},Wo={class:"sp-layout__header"},Yo={class:"sp-layout__body"},Ho={class:"sp-layout__body"},Go={key:0,class:"sp-layout__flex-container"},Xo={class:"sp-layout__grid-item sp-layout__flex-direction-container"},qo=[X(()=>o.createElementVNode("option",{value:""},null,-1)),X(()=>o.createElementVNode("option",{value:"sp-style__layout-flex-direction__row"},"Fila",-1)),X(()=>o.createElementVNode("option",{value:"sp-style__layout-flex-direction__column"},"Columna",-1))],Ko={key:1,class:"sp-layout__grid-container"},Qo={class:"sp-layout__grid-item sp-layout__columns-container"},Zo=X(()=>o.createElementVNode("option",{value:""},null,-1)),Jo=["value"],tr={class:"sp-layout__grid-item sp-layout__rows-container"},er=X(()=>o.createElementVNode("option",{value:""},null,-1)),nr=["value"],ar={class:"sp-layout__horizontal-alignment-container"},or=X(()=>o.createElementVNode("label",null,"Horizontal",-1)),rr={class:"sp-layout__buttons-container"},ir={class:"sp-layout__button__aligment"},sr={class:"sp-layout__button__aligment"},lr={class:"sp-layout__button__aligment"},cr={class:"sp-layout__button__aligment"},fr={class:"sp-layout__vertical-alignment-container"},ur=X(()=>o.createElementVNode("label",null,"Vertical",-1)),dr={class:"sp-layout__buttons-container"},mr={class:"sp-layout__button__aligment"},pr={class:"sp-layout__button__aligment"},gr={class:"sp-layout__button__aligment"},hr=Object.freeze(Object.defineProperty({__proto__:null,default:nt(o.defineComponent({__name:"Layout",props:{spClassList:{type:Array,default:[]}},emits:["update"],setup(t,{emit:e}){const n=t,a=o.ref(null),r=o.ref(null),i=o.ref(null),s=o.ref(null),l=o.ref(null),f=o.ref(null),c=E=>n.spClassList.find(u=>u.startsWith(E)),d=()=>{a.value=c("sp-style__layout-display__"),r.value=c("sp-style__layout-justify-content__"),i.value=c("sp-style__layout-align-items__"),s.value=c("sp-style__layout-flex-direction__"),l.value=c("sp-style__layout-grid-template__columns-"),f.value=c("sp-style__layout-grid-template__rows-")},y=e,h=E=>{const u=E==="rows"?Bo:$o,m=[];for(let g=0;g<u;g++)m.push(g+1);return m},_=o.computed(()=>h("columns")),N=o.computed(()=>h("rows")),b=()=>{const E=[a.value,r.value,i.value,s.value,l.value,f.value].filter(u=>u);y("update",E)};return o.onMounted(()=>{d()}),(E,u)=>{const m=o.resolveComponent("fa-icon");return o.openBlock(),o.createElementBlock("div",Uo,[o.createElementVNode("div",Wo,[o.createElementVNode("label",null,[o.withDirectives(o.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__flex","onUpdate:modelValue":u[0]||(u[0]=g=>a.value=g),onChange:b},null,544),[[o.vModelRadio,a.value]]),o.createVNode(m,{icon:"arrows-left-right"}),o.createTextVNode(" Flexible ")]),o.createElementVNode("label",null,[o.withDirectives(o.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__grid","onUpdate:modelValue":u[1]||(u[1]=g=>a.value=g),onChange:b},null,544),[[o.vModelRadio,a.value]]),o.createVNode(m,{icon:"table-cells"}),o.createTextVNode(" Tabla ")])]),o.createElementVNode("div",Yo,[o.createElementVNode("div",Ho,[a.value==="sp-style__layout-display__flex"?(o.openBlock(),o.createElementBlock("div",Go,[o.createElementVNode("div",Xo,[o.createElementVNode("label",null,[o.createVNode(m,{icon:"arrow-down-wide-short"}),o.createTextVNode(" Dirección ")]),o.withDirectives(o.createElementVNode("select",{"onUpdate:modelValue":u[2]||(u[2]=g=>s.value=g),onChange:b},qo,544),[[o.vModelSelect,s.value]])])])):o.createCommentVNode("",!0),a.value==="sp-style__layout-display__grid"?(o.openBlock(),o.createElementBlock("div",Ko,[o.createElementVNode("div",Qo,[o.createElementVNode("label",null,[o.createVNode(m,{icon:"grip"}),o.createTextVNode(" Columas ")]),o.withDirectives(o.createElementVNode("select",{"onUpdate:modelValue":u[3]||(u[3]=g=>l.value=g),onChange:b},[Zo,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(_.value,g=>(o.openBlock(),o.createElementBlock("option",{key:g,value:`sp-style__layout-grid-template__columns-${g}`},o.toDisplayString(g),9,Jo))),128))],544),[[o.vModelSelect,l.value]])]),o.createElementVNode("div",tr,[o.createElementVNode("label",null,[o.createVNode(m,{icon:"grip-vertical"}),o.createTextVNode(" Filas ")]),o.withDirectives(o.createElementVNode("select",{"onUpdate:modelValue":u[4]||(u[4]=g=>f.value=g),onChange:b},[er,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(N.value,g=>(o.openBlock(),o.createElementBlock("option",{key:g,value:`sp-style__layout-grid-template__rows-${g}`},o.toDisplayString(g),9,nr))),128))],544),[[o.vModelSelect,f.value]])])])):o.createCommentVNode("",!0),o.createElementVNode("div",ar,[or,o.createElementVNode("div",rr,[o.createElementVNode("label",ir,[o.createVNode(m,{icon:"arrows-up-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__start","onUpdate:modelValue":u[5]||(u[5]=g=>r.value=g),onChange:b},null,544),[[o.vModelRadio,r.value]])]),o.createElementVNode("label",sr,[o.createVNode(m,{icon:"arrows-left-right-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__center","onUpdate:modelValue":u[6]||(u[6]=g=>r.value=g),onChange:b},null,544),[[o.vModelRadio,r.value]])]),o.createElementVNode("label",lr,[o.createVNode(m,{icon:"arrows-up-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__end","onUpdate:modelValue":u[7]||(u[7]=g=>r.value=g),onChange:b},null,544),[[o.vModelRadio,r.value]])]),o.createElementVNode("label",cr,[o.createVNode(m,{icon:"bars"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__between","onUpdate:modelValue":u[8]||(u[8]=g=>r.value=g),onChange:b},null,544),[[o.vModelRadio,r.value]])])])]),o.createElementVNode("div",fr,[ur,o.createElementVNode("div",dr,[o.createElementVNode("label",mr,[o.createVNode(m,{icon:"arrows-up-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__start","onUpdate:modelValue":u[9]||(u[9]=g=>i.value=g),onChange:b},null,544),[[o.vModelRadio,i.value]])]),o.createElementVNode("label",pr,[o.createVNode(m,{icon:"arrows-left-right-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__center","onUpdate:modelValue":u[10]||(u[10]=g=>i.value=g),onChange:b},null,544),[[o.vModelRadio,i.value]])]),o.createElementVNode("label",gr,[o.createVNode(m,{icon:"arrows-up-to-line"}),o.withDirectives(o.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__end","onUpdate:modelValue":u[11]||(u[11]=g=>i.value=g),onChange:b},null,544),[[o.vModelRadio,i.value]])])])])])])])}}}),[["__scopeId","data-v-b18449c6"]])},Symbol.toStringTag,{value:"Module"})),yr=["0","1","2","3","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],$=t=>(o.pushScopeId("data-v-17ec4c84"),t=t(),o.popScopeId(),t),br={class:"sp-spacing__container"},_r={class:"sp-spacing__select-container"},vr={class:"sp-spacing__select-item"},xr=$(()=>o.createElementVNode("label",null,"Arriba",-1)),Er=$(()=>o.createElementVNode("option",{value:""},null,-1)),Nr=["value"],wr={class:"sp-spacing__select-item"},kr=$(()=>o.createElementVNode("label",null,"Abajo",-1)),Ar=$(()=>o.createElementVNode("option",{value:""},null,-1)),Sr=["value"],Cr={class:"sp-spacing__select-item"},Or=$(()=>o.createElementVNode("label",null,"Izquierda",-1)),Pr=$(()=>o.createElementVNode("option",{value:""},null,-1)),Lr=["value"],zr={class:"sp-spacing__select-item"},Mr=$(()=>o.createElementVNode("label",null,"Derecha",-1)),Ir=$(()=>o.createElementVNode("option",{value:""},null,-1)),Tr=["value"],fn=nt(o.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0}},setup(t){const{type:e}=t,n=l=>yr.map(f=>({value:`sp-spacing__${e}-${l}__${f}`,label:f})),a=o.computed(()=>n("top")),r=o.computed(()=>n("bottom")),i=o.computed(()=>n("left")),s=o.computed(()=>n("right"));return(l,f)=>(o.openBlock(),o.createElementBlock("div",br,[o.createElementVNode("div",null,[o.createElementVNode("h2",null,o.toDisplayString(t.title),1)]),o.createElementVNode("div",_r,[o.createElementVNode("div",vr,[xr,o.createElementVNode("select",null,[Er,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(a.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c.value,value:c.value},o.toDisplayString(c.label),9,Nr))),128))])]),o.createElementVNode("div",wr,[kr,o.createElementVNode("select",null,[Ar,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(r.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c.value,value:c.value},o.toDisplayString(c.label),9,Sr))),128))])]),o.createElementVNode("div",Cr,[Or,o.createElementVNode("select",null,[Pr,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(i.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c.value,value:c.value},o.toDisplayString(c.label),9,Lr))),128))])]),o.createElementVNode("div",zr,[Mr,o.createElementVNode("select",null,[Ir,(o.openBlock(!0),o.createElementBlock(o.Fragment,null,o.renderList(s.value,c=>(o.openBlock(),o.createElementBlock("option",{key:c.value,value:c.value},o.toDisplayString(c.label),9,Tr))),128))])])])]))}}),[["__scopeId","data-v-17ec4c84"]]),Fr=t=>(o.pushScopeId("data-v-bd74e2b4"),t=t(),o.popScopeId(),t),Vr={class:"sp-spacing__container"},Dr=Fr(()=>o.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),jr=Object.freeze(Object.defineProperty({__proto__:null,default:nt(o.defineComponent({__name:"Spacing",setup(t){return(e,n)=>(o.openBlock(),o.createElementBlock("div",Vr,[o.createVNode(fn,{title:"Margen",type:"margin"}),Dr,o.createVNode(fn,{title:"Padding",type:"padding"})]))}}),[["__scopeId","data-v-bd74e2b4"]])},Symbol.toStringTag,{value:"Module"}));return Ro});
