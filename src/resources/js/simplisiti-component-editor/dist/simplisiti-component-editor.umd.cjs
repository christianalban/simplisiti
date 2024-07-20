(function(l,tt){typeof exports=="object"&&typeof module<"u"?module.exports=tt(require("vue")):typeof define=="function"&&define.amd?define(["vue"],tt):(l=typeof globalThis<"u"?globalThis:l||self,l.SimplisitiComponentEditor=tt(l.Vue))})(this,function(l){"use strict";const tt={div:"Contenedor",a:"Enlace"},cn={div:"container",a:"ancord"},fn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>ro)}},un={container:["layout"],ancord:[]},mn=t=>{const e=cn[t];return un[e].map(a=>fn[a])},dn={class:"sp-wizard-popup__tabs-container"},pn={class:"sp-wizard-popup__tabs"},gn={class:"sp-wizard-popup__tab"},hn=["title","onClick"],yn={class:"sp-wizard-popup__content"},bn={class:"sp-wizard-popup__content-header"},vn=l.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=l.shallowReactive([]),a=l.shallowRef(null),r=async()=>{const s=mn(e.tagName.toLowerCase());for(const c of s)n.push({component:l.defineAsyncComponent(c.component),icon:c.icon,title:c.title})},o=s=>{a.value=s.component},i=()=>{n.length>0&&o(n[0])};return l.onMounted(async()=>{await r(),i()}),(s,c)=>{const f=l.resolveComponent("fa-icon");return l.openBlock(),l.createElementBlock(l.Fragment,null,[l.createElementVNode("div",dn,[l.createElementVNode("div",pn,[(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(l.unref(n),u=>(l.openBlock(),l.createElementBlock("div",gn,[l.createElementVNode("button",{class:"sp-wizard-popup__tab-button",title:u.title,onClick:h=>o(u)},[l.createVNode(f,{icon:u.icon},null,8,["icon"])],8,hn)]))),256))])]),l.createElementVNode("div",yn,[l.createElementVNode("div",bn,[(l.openBlock(),l.createBlock(l.resolveDynamicComponent(a.value)))])])],64)}}}),At=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},xn=At(vn,[["__scopeId","data-v-e6ae1dee"]]),_n={class:"sp-configuration-popup__header"},An={class:"sp-configuration-popup__body"},wn=At(l.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,a=l.ref(null),r=l.ref(!1),o=e,i=f=>{setTimeout(()=>{if(!f)return;const u=f.getBoundingClientRect(),h=u.top,g=u.bottom,x=u.left+u.width+10;if(a.value){a.value.style.top=`${h}px`,a.value.style.left=`${x}px`;const S=document.body.offsetWidth;x+a.value.offsetWidth>S&&(a.value.style.top=`${h+10}px`,a.value.style.left=`${x-a.value.offsetWidth-20}px`);const O=document.body.offsetHeight;h+a.value.offsetHeight>O&&(a.value.style.top="auto",a.value.style.bottom=`${g-a.value.offsetHeight+20}px`)}},50)},s=l.computed(()=>{var u;const f=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return f&&tt[f]||"Element"}),c=f=>{r.value=!0,setTimeout(()=>{o("close",f)},300)};return i(n),(f,u)=>{const h=l.resolveComponent("fa-icon");return l.openBlock(),l.createElementBlock("div",{class:l.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:a,onClick:l.withModifiers(g=>{},["stop"])},[l.createElementVNode("div",_n,[l.createElementVNode("h4",null,l.toDisplayString(s.value),1),l.createVNode(h,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=g=>c(g))})]),l.createElementVNode("div",An,[t.element?(l.openBlock(),l.createBlock(xn,{key:0,element:t.element},null,8,["element"])):l.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-fe4e3906"]]),kn=l.defineComponent({__name:"App",setup(t){const e=l.ref(!1),n=l.ref(null),a=o=>{o.forEach(i=>{i.addEventListener("click",s=>{e.value||(e.value=!0,n.value=i,i.classList.add("sp-element__active")),s.preventDefault(),s.stopPropagation()}),i.addEventListener("mouseover",s=>{e.value||i.classList.add("sp-element__active"),s.preventDefault(),s.stopPropagation()}),i.addEventListener("mouseout",s=>{e.value||i.classList.remove("sp-element__active"),s.preventDefault(),s.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return l.onMounted(()=>{const o=document.querySelectorAll("div"),i=document.querySelectorAll("a");a(o),a(i)}),(o,i)=>{var s;return e.value?(l.openBlock(),l.createBlock(wn,{key:0,element:n.value,type:(s=n.value)==null?void 0:s.tagName,onClose:l.withModifiers(r,["stop"])},null,8,["element","type"])):l.createCommentVNode("",!0)}}}),ne=()=>{};let wt={},ae={},re=null,oe={mark:ne,measure:ne};try{typeof window<"u"&&(wt=window),typeof document<"u"&&(ae=document),typeof MutationObserver<"u"&&(re=MutationObserver),typeof performance<"u"&&(oe=performance)}catch{}const{userAgent:ie=""}=wt.navigator||{},D=wt,y=ae,se=re,ft=oe;D.document;const M=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",le=~ie.indexOf("MSIE")||~ie.indexOf("Trident/");var b="classic",ce="duotone",k="sharp",E="sharp-duotone",En=[b,ce,k,E],Nn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},fe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},On=["kit"],Sn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Cn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Pn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Tn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},In={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Ln={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Mn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},zn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ue={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Fn=["solid","regular","light","thin","duotone","brands"],me=[1,2,3,4,5,6,7,8,9,10],Dn=me.concat([11,12,13,14,15,16,17,18,19,20]),et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jn=[...Object.keys(Ln),...Fn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(me.map(t=>"".concat(t,"x"))).concat(Dn.map(t=>"w-".concat(t))),Rn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Bn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},de={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const z="___FONT_AWESOME___",kt=16,pe="fa",ge="svg-inline--fa",U="data-fa-i2svg",Et="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",Nt="data-prefix",Ot="data-icon",he="fontawesome-i2svg",Un="async",Yn=["HTML","HEAD","STYLE","SCRIPT"],ye=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),be=[b,k,E];function nt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}const ve={...ue};ve[b]={...ue[b],...fe.kit,...fe["kit-duotone"]};const Y=nt(ve),St={...zn};St[b]={...St[b],...de.kit,...de["kit-duotone"]};const at=nt(St),Ct={...Mn};Ct[b]={...Ct[b],...Bn.kit};const $=nt(Ct),Pt={...In};Pt[b]={...Pt[b],...Vn.kit};const $n=nt(Pt),Hn=Sn,xe="fa-layers-text",Xn=Cn,Gn={...Nn};nt(Gn);const Kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Tt=et,K=new Set;Object.keys(at[b]).map(K.add.bind(K)),Object.keys(at[k]).map(K.add.bind(K)),Object.keys(at[E]).map(K.add.bind(K));const qn=[...On,...jn],rt=D.FontAwesomeConfig||{};function Qn(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Zn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Zn(Qn(n));r!=null&&(rt[a]=r)});const _e={styleDefault:"solid",familyDefault:"classic",cssPrefix:pe,replacementClass:ge,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);const q={..._e,...rt};q.autoReplaceSvg||(q.observeMutations=!1);const m={};Object.keys(_e).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){q[t]=e,ot.forEach(n=>n(m))},get:function(){return q[t]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,ot.forEach(e=>e(m))},get:function(){return q.cssPrefix}}),D.FontAwesomeConfig=m;const ot=[];function Jn(t){return ot.push(t),()=>{ot.splice(ot.indexOf(t),1)}}const j=kt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ta(t){if(!t||!M)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(e,a),t}const ea="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function it(){let t=12,e="";for(;t-- >0;)e+=ea[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function It(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ae(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function na(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ae(t[n]),'" '),"").trim()}function ut(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Lt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function aa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function ra(t){let{transform:e,width:n=kt,height:a=kt,startCentered:r=!1}=t,o="";return r&&le?o+="translate(".concat(e.x/j-n/2,"em, ").concat(e.y/j-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):o+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),o+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var oa=`:root, :host {
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
}`;function we(){const t=pe,e=ge,n=m.cssPrefix,a=m.replacementClass;let r=oa;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let ke=!1;function Mt(){m.autoAddCss&&!ke&&(ta(we()),ke=!0)}var ia={mixout(){return{dom:{css:we,insertCss:Mt}}},hooks(){return{beforeDOMElementCreation(){Mt()},beforeI2svg(){Mt()}}}};const F=D||{};F[z]||(F[z]={}),F[z].styles||(F[z].styles={}),F[z].hooks||(F[z].hooks={}),F[z].shims||(F[z].shims=[]);var I=F[z];const Ee=[],Ne=function(){y.removeEventListener("DOMContentLoaded",Ne),mt=1,Ee.map(t=>t())};let mt=!1;M&&(mt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),mt||y.addEventListener("DOMContentLoaded",Ne));function sa(t){M&&(mt?setTimeout(t,0):Ee.push(t))}function st(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ae(t):"<".concat(e," ").concat(na(n),">").concat(a.map(st).join(""),"</").concat(e,">")}function Oe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,c,f,u;for(a===void 0?(c=1,u=e[o[0]]):(c=0,u=a);c<i;c++)f=o[c],u=s(u,e[f],f,e);return u};function la(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=la(t);return e.length===1?e[0].toString(16):null}function ca(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Se(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,Se(e)):I.styles[t]={...I.styles[t]||{},...r},t==="fas"&&Dt("fa",e)}const{styles:H,shims:fa}=I,ua={[b]:Object.values($[b]),[k]:Object.values($[k]),[E]:Object.values($[E])};let jt=null,Ce={},Pe={},Te={},Ie={},Le={};const ma={[b]:Object.keys(Y[b]),[k]:Object.keys(Y[k]),[E]:Object.keys(Y[E])};function da(t){return~qn.indexOf(t)}function pa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!da(r)?r:null}const Me=()=>{const t=a=>zt(H,(r,o,i)=>(r[i]=zt(o,a,{}),r),{});Ce=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Pe=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),Le=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in H||m.autoFetchSvg,n=zt(fa,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});Te=n.names,Ie=n.unicodes,jt=dt(m.styleDefault,{family:m.familyDefault})};Jn(t=>{jt=dt(t.styleDefault,{family:m.familyDefault})}),Me();function Rt(t,e){return(Ce[t]||{})[e]}function ga(t,e){return(Pe[t]||{})[e]}function R(t,e){return(Le[t]||{})[e]}function ze(t){return Te[t]||{prefix:null,iconName:null}}function ha(t){const e=Ie[t],n=Rt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function V(){return jt}const Vt=()=>({prefix:null,iconName:null,rest:[]});function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=b}=e,a=Y[n][t],r=at[n][t]||at[n][a],o=t in I.styles?t:null;return r||o||null}const ya={[b]:Object.keys($[b]),[k]:Object.keys($[k]),[E]:Object.keys($[E])};function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[b]:"".concat(m.cssPrefix,"-").concat(b),[k]:"".concat(m.cssPrefix,"-").concat(k),[E]:"".concat(m.cssPrefix,"-").concat(E)};let r=null,o=b;const i=En.filter(c=>c!==ce);i.forEach(c=>{(t.includes(a[c])||t.some(f=>ya[c].includes(f)))&&(o=c)});const s=t.reduce((c,f)=>{const u=pa(m.cssPrefix,f);if(H[f]?(f=ua[o].includes(f)?$n[o][f]:f,r=f,c.prefix=f):ma[o].indexOf(f)>-1?(r=f,c.prefix=dt(f,{family:o})):u?c.iconName=u:f!==m.replacementClass&&!i.some(h=>f===a[h])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const h=r==="fa"?ze(c.iconName):{},g=R(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!H.far&&H.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},Vt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===k&&(H.fass||m.autoFetchSvg)&&(s.prefix="fass",s.iconName=R(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===E&&(H.fasds||m.autoFetchSvg)&&(s.prefix="fasds",s.iconName=R(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=V()||"fas"),s}class ba{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...r[o]},Dt(o,r[o]);const i=$[b][o];i&&Dt(i,r[o]),Me()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],c=s[2];e[o]||(e[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[o][f]=s)}),e[o][i]=s}),e}}let Fe=[],Z={};const J={},va=Object.keys(J);function xa(t,e){let{mixoutsTo:n}=e;return Fe=t,Z={},Object.keys(J).forEach(a=>{va.indexOf(a)===-1&&delete J[a]}),Fe.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{Z[i]||(Z[i]=[]),Z[i].push(o[i])})}a.provides&&a.provides(J)}),n}function Bt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Z[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function X(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Z[t]||[]).forEach(o=>{o.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||V();if(e)return e=R(n,e)||e,Oe(De.definitions,n,e)||Oe(I.styles,n,e)}const De=new ba,N={noAuto:()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},config:m,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(X("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,sa(()=>{_a({autoReplaceSvgRoot:e}),X("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:R(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=dt(t[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Hn))){const e=pt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||V(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=V();return{prefix:e,iconName:R(e,t)||t}}}},library:De,findIconDefinition:Wt,toHtml:st},_a=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&M&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function gt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>st(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Aa(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Lt(i)&&n.found&&!a.found){const{width:s,height:c}=n,f={x:s/c/2,y:.5};r.style=ut({...o,"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function wa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:i},children:a}]}]}function Ut(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:c,titleId:f,extra:u,watchable:h=!1}=t,{width:g,height:x}=n.found?n:e,S=a==="fak",O=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(C=>u.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(u.classes).join(" ");let w={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(x)}};const d=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/x*16*.0625,"em")}:{};h&&(w.attributes[U]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||it())},children:[s]}),delete w.attributes.title);const p={...w,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:i,styles:{...d,...u.styles}},{children:v,attributes:_}=n.found&&e.found?B("generateAbstractMask",p)||{children:[],attributes:{}}:B("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=_,i?wa(p):Aa(p)}function je(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,c={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(c[U]="");const f={...i.styles};Lt(r)&&(f.transform=ra({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=ut(f);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function ka(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},o=ut(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Yt}=I;function $t(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Tt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Tt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Tt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ea={found:!1,width:512,height:512};function Na(t,e){!ye&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=V()),new Promise((a,r)=>{if(n==="fa"){const o=ze(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const o=Yt[e][t];return a($t(o))}Na(t,e),a({...Ea,icon:m.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const Re=()=>{},Xt=m.measurePerformance&&ft&&ft.mark&&ft.measure?ft:{mark:Re,measure:Re},lt='FA "6.6.0"',Oa=t=>(Xt.mark("".concat(lt," ").concat(t," begins")),()=>Ve(t)),Ve=t=>{Xt.mark("".concat(lt," ").concat(t," ends")),Xt.measure("".concat(lt," ").concat(t),"".concat(lt," ").concat(t," begins"),"".concat(lt," ").concat(t," ends"))};var Gt={begin:Oa,end:Ve};const ht=()=>{};function Be(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Sa(t){const e=t.getAttribute?t.getAttribute(Nt):null,n=t.getAttribute?t.getAttribute(Ot):null;return e&&n}function Ca(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Pa(){return m.autoReplaceSvg===!0?yt.replace:yt[m.autoReplaceSvg]||yt.replace}function Ta(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ia(t){return y.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ta:Ia}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(We(o,{ceFn:n}))}),a}function La(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const yt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(U)===null&&m.keepOriginalSource){let n=y.createComment(La(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~It(e).indexOf(m.replacementClass))return yt.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===m.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>st(o)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function Ue(t){t()}function Ye(t,e){const n=typeof e=="function"?e:ht;if(t.length===0)n();else{let a=Ue;m.mutateApproach===Un&&(a=D.requestAnimationFrame||Ue),a(()=>{const r=Pa(),o=Gt.begin("mutate");t.map(r),o(),n()})}}let Kt=!1;function $e(){Kt=!0}function qt(){Kt=!1}let bt=null;function He(t){if(!se||!m.observeMutations)return;const{treeCallback:e=ht,nodeCallback:n=ht,pseudoElementsCallback:a=ht,observeMutationsRoot:r=y}=t;bt=new se(o=>{if(Kt)return;const i=V();Q(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Be(s.addedNodes[0])&&(m.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Be(s.target)&&~Kn.indexOf(s.attributeName))if(s.attributeName==="class"&&Sa(s.target)){const{prefix:c,iconName:f}=pt(It(s.target));s.target.setAttribute(Nt,c||i),f&&s.target.setAttribute(Ot,f)}else Ca(s.target)&&n(s.target)})}),M&&bt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ma(){bt&&bt.disconnect()}function za(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Fa(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=pt(It(t));return r.prefix||(r.prefix=V()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ga(r.prefix,t.innerText)||Rt(r.prefix,Ft(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Da(t){const e=Q(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||it()):(e["aria-hidden"]="true",e.focusable="false")),e}function ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Fa(t),o=Da(t),i=Bt("parseNodeAttributes",{},t);let s=e.styleParser?za(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o},...i}}const{styles:Ra}=I;function Ge(t){const e=m.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(xe)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let L=new Set;be.map(t=>{L.add("fa-".concat(t))}),Object.keys(Y[b]).map(L.add.bind(L)),Object.keys(Y[k]).map(L.add.bind(L)),Object.keys(Y[E]).map(L.add.bind(L)),L=[...L];function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(he,"-").concat(u)),r=u=>n.remove("".concat(he,"-").concat(u)),o=m.autoFetchSvg?L:be.map(u=>"fa-".concat(u)).concat(Object.keys(Ra));o.includes("fa")||o.push("fa");const i=[".".concat(xe,":not([").concat(U,"])")].concat(o.map(u=>".".concat(u,":not([").concat(U,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=Q(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Gt.begin("onTree"),f=s.reduce((u,h)=>{try{const g=Ge(h);g&&u.push(g)}catch(g){ye||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,h)=>{Promise.all(f).then(g=>{Ye(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(g=>{c(),h(g)})})}function Va(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ge(t).then(n=>{n&&Ye([n],e)})}function Ba(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Wt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Wt(r||{})),t(a,{...n,mask:r})}}const Wa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:c=[],attributes:f={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:x}=t;return gt({type:"icon",...t},()=>(X("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(i?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||it()):(f["aria-hidden"]="true",f.focusable="false")),Ut({icons:{main:$t(x),mask:r?$t(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:{...T,...n},symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:f,styles:u,classes:c}})))};var Ua={mixout(){return{icon:Ba(Wa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ke,t.nodeCallback=Va,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Ke(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:c,mask:f,maskId:u,extra:h}=n;return new Promise((g,x)=>{Promise.all([Ht(a,i),f.iconName?Ht(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[O,w]=S;g([e,Ut({icons:{main:O,mask:w},prefix:i,iconName:a,transform:s,symbol:c,maskId:u,title:r,titleId:o,extra:h,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=ut(i);s.length>0&&(a.style=s);let c;return Lt(o)&&(c=B("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ya={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return gt({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},$a={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return gt({type:"counter",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),ka({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Ha={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return gt({type:"text",content:t},()=>(X("beforeDOMElementCreation",{content:t,params:e}),je({content:t,transform:{...T,...n},title:a,extra:{attributes:o,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(le){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();i=f.width/c,s=f.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,je({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const Xa=new RegExp('"',"ug"),qe=[1105920,1112319],Qe={FontAwesome:{normal:"fas",400:"fas"},...Tn,...Pn,...Rn},Qt=Object.keys(Qe).reduce((t,e)=>(t[e.toLowerCase()]=Qe[e],t),{}),Ga=Object.keys(Qt).reduce((t,e)=>{const n=Qt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ka(t){const e=t.replace(Xa,""),n=ca(e,0),a=n>=qe[0]&&n<=qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:a||r}}function qa(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Qt[n]||{})[r]||Ga[n]}function Ze(t,e){const n="".concat(Wn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=Q(t.children).filter(g=>g.getAttribute(Et)===e)[0],s=D.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),f=c.match(Xn),u=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&h!=="none"&&h!==""){const g=s.getPropertyValue("content");let x=qa(c,u);const{value:S,isSecondary:O}=Ka(g),w=f[0].startsWith("FontAwesome");let d=Rt(x,S),p=d;if(w){const v=ha(S);v.iconName&&v.prefix&&(d=v.iconName,x=v.prefix)}if(d&&!O&&(!i||i.getAttribute(Nt)!==x||i.getAttribute(Ot)!==p)){t.setAttribute(n,p),i&&t.removeChild(i);const v=ja(),{extra:_}=v;_.attributes[Et]=e,Ht(d,x).then(C=>{const _t=Ut({...v,icons:{main:C,mask:Vt()},prefix:x,iconName:p,extra:_,watchable:!0}),G=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=_t.map(oo=>st(oo)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Qa(t){return Promise.all([Ze(t,"::before"),Ze(t,"::after")])}function Za(t){return t.parentNode!==document.head&&!~Yn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Et)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Je(t){if(M)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(Za).map(Qa),r=Gt.begin("searchPseudoElements");$e(),Promise.all(a).then(()=>{r(),qt(),e()}).catch(()=>{r(),qt(),n()})})}var Ja={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Je,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;m.searchPseudoElements&&Je(n)}}};let tn=!1;var tr={mixout(){return{dom:{unwatch(){$e(),tn=!0}}}},hooks(){return{bootstrap(){He(Bt("mutationObserverCallbacks",{}))},noAuto(){Ma()},watch(t){const{observeMutationsRoot:e}=t;tn?qt():He(Bt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const en=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var er={mixout(){return{parse:{transform:t=>en(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=en(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:i,inner:u,path:h};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Zt={x:0,y:0,width:"100%",height:"100%"};function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nr(t){return t.tag==="g"?t.children:[t]}var ar={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?pt(n.split(" ").map(r=>r.trim())):Vt();return a.prefix||(a.prefix=V()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:c,icon:f}=r,{width:u,icon:h}=o,g=aa({transform:s,containerWidth:u,iconWidth:c}),x={tag:"rect",attributes:{...Zt,fill:"white"}},S=f.children?{children:f.children.map(nn)}:{},O={tag:"g",attributes:{...g.inner},children:[nn({tag:f.tag,attributes:{...f.attributes,...g.path},...S})]},w={tag:"g",attributes:{...g.outer},children:[O]},d="mask-".concat(i||it()),p="clip-".concat(i||it()),v={tag:"mask",attributes:{...Zt,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[x,w]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:nr(h)},v]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")"),...Zt}}),{children:n,attributes:a}}}},rr={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...r,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},or={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},ir=[ia,Ua,Ya,$a,Ha,Ja,tr,er,ar,rr,or];xa(ir,{mixoutsTo:N}),N.noAuto;const an=N.config,sr=N.library;N.dom;const vt=N.parse;N.findIconDefinition,N.toHtml;const lr=N.icon;N.layer;const cr=N.text;N.counter;const fr={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},ur={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},mr={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},dr={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},pr={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},gr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function rn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rn(Object(n),!0).forEach(function(a){A(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function hr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yr(t){var e=hr(t,"string");return typeof e=="symbol"?e:e+""}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function A(t,e,n){return e=yr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function br(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function vr(t,e){if(t==null)return{};var n=br(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Jt(t){return xr(t)||_r(t)||Ar(t)||wr()}function xr(t){if(Array.isArray(t))return te(t)}function _r(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ar(t,e){if(t){if(typeof t=="string")return te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(t,e)}}function te(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},on={exports:{}};(function(t){(function(e){var n=function(d,p,v){if(!f(p)||h(p)||g(p)||x(p)||c(p))return p;var _,C=0,_t=0;if(u(p))for(_=[],_t=p.length;C<_t;C++)_.push(n(d,p[C],v));else{_={};for(var G in p)Object.prototype.hasOwnProperty.call(p,G)&&(_[d(G,v)]=n(d,p[G],v))}return _},a=function(d,p){p=p||{};var v=p.separator||"_",_=p.split||/(?=[A-Z])/;return d.split(_).join(v)},r=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,v){return v?v.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},o=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,c=function(d){return typeof d=="function"},f=function(d){return d===Object(d)},u=function(d){return s.call(d)=="[object Array]"},h=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},x=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},O=function(d,p){var v=p&&"process"in p?p.process:p;return typeof v!="function"?d:function(_,C){return v(_,d,C)}},w={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(d,p){return n(O(r,p),d)},decamelizeKeys:function(d,p){return n(O(i,p),d,p)},pascalizeKeys:function(d,p){return n(O(o,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(kr)})(on);var Er=on.exports,Nr=["class","style"];function Or(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Er.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function Sr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ee(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return ee(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.class=Sr(u);break;case"style":c.style=Or(u);break;default:c.attrs[f]=u}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,s=vr(n,Nr);return l.h(t.tag,P(P(P({},e),{},{class:r.class,style:P(P({},r.style),i)},r.attrs),s),a)}var sn=!1;try{sn=process.env.NODE_ENV==="production"}catch{}function Cr(){if(!sn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ct(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?A({},t,e):{}}function Pr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},A(A(A(A(A(A(A(A(A(A(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),A(A(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function ln(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vt.icon)return vt.icon(t);if(t===null)return null;if(xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Tr=l.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=l.computed(function(){return ln(e.icon)}),o=l.computed(function(){return ct("classes",Pr(e))}),i=l.computed(function(){return ct("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),s=l.computed(function(){return ct("mask",ln(e.mask))}),c=l.computed(function(){return lr(r.value,P(P(P(P({},o.value),i.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});l.watch(c,function(u){if(!u)return Cr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var f=l.computed(function(){return c.value?ee(c.value.abstract[0],{},a):null});return function(){return f.value}}});l.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=an.familyPrefix,o=l.computed(function(){return["".concat(r,"-layers")].concat(Jt(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return l.h("div",{class:o.value},a.default?a.default():[])}}}),l.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=an.familyPrefix,o=l.computed(function(){return ct("classes",[].concat(Jt(e.counter?["".concat(r,"-layers-counter")]:[]),Jt(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),i=l.computed(function(){return ct("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),s=l.computed(function(){var f=cr(e.value.toString(),P(P({},i.value),o.value)),u=f.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=l.computed(function(){return ee(s.value,{},a)});return function(){return c.value}}}),sr.add(gr,pr,ur,fr,dr,mr);const Ir={install:t=>{t.component("simplisiti-component-editor",kn),t.component("fa-icon",Tr)}},Lr=12,Mr=12,W=t=>(l.pushScopeId("data-v-e8a3c5a4"),t=t(),l.popScopeId(),t),zr={class:"sp-layout__container"},Fr={class:"sp-layout__header"},Dr=W(()=>l.createElementVNode("input",{type:"radio",name:"display",value:"flex"},null,-1)),jr=W(()=>l.createElementVNode("input",{type:"radio",name:"display",value:"grid"},null,-1)),Rr={class:"sp-layout__body"},Vr={class:"sp-layout__body"},Br={class:"sp-layout__grid-container"},Wr={class:"sp-layout__grid-item sp-layout__columns-container"},Ur=W(()=>l.createElementVNode("label",null,"Columas",-1)),Yr={name:"",id:""},$r=W(()=>l.createElementVNode("option",{value:""},null,-1)),Hr=["value"],Xr={class:"sp-layout__grid-item sp-layout__rows-container"},Gr=W(()=>l.createElementVNode("label",null,"Filas",-1)),Kr={name:"",id:""},qr=W(()=>l.createElementVNode("option",{value:""},null,-1)),Qr=["value"],Zr={class:"sp-layout__horizontal-alignment-container"},Jr=W(()=>l.createElementVNode("label",null,"Horizontal",-1)),to={class:"sp-layout__buttons-container"},eo={class:"sp-layout__vertical-alignment-container"},no=W(()=>l.createElementVNode("label",null,"Vertical",-1)),ao={class:"sp-layout__buttons-container"},ro=Object.freeze(Object.defineProperty({__proto__:null,default:At(l.defineComponent({__name:"Layout",setup(t){const e=r=>{const o=r==="rows"?Lr:Mr,i=[];for(let s=0;s<o;s++)i.push(s+1);return i},n=l.computed(()=>e("columns")),a=l.computed(()=>e("rows"));return(r,o)=>{const i=l.resolveComponent("fa-icon");return l.openBlock(),l.createElementBlock("div",zr,[l.createElementVNode("div",Fr,[l.createElementVNode("label",null,[Dr,l.createVNode(i,{icon:"arrows-left-right"}),l.createTextVNode(" Flexible ")]),l.createElementVNode("label",null,[jr,l.createVNode(i,{icon:"table-cells"}),l.createTextVNode(" Tabla ")])]),l.createElementVNode("div",Rr,[l.createElementVNode("div",Vr,[l.createElementVNode("div",Br,[l.createElementVNode("div",Wr,[Ur,l.createElementVNode("select",Yr,[$r,(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(n.value,s=>(l.openBlock(),l.createElementBlock("option",{key:s,value:s},l.toDisplayString(s),9,Hr))),128))])]),l.createElementVNode("div",Xr,[Gr,l.createElementVNode("select",Kr,[qr,(l.openBlock(!0),l.createElementBlock(l.Fragment,null,l.renderList(a.value,s=>(l.openBlock(),l.createElementBlock("option",{key:s,value:s},l.toDisplayString(s),9,Qr))),128))])])]),l.createElementVNode("div",Zr,[Jr,l.createElementVNode("div",to,[l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-up-to-line"})]),l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-left-right-to-line"})]),l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-up-to-line"})])])]),l.createElementVNode("div",eo,[no,l.createElementVNode("div",ao,[l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-up-to-line"})]),l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-left-right-to-line"})]),l.createElementVNode("button",null,[l.createVNode(i,{icon:"arrows-up-to-line"})])])])])])])}}}),[["__scopeId","data-v-e8a3c5a4"]])},Symbol.toStringTag,{value:"Module"}));return Ir});
