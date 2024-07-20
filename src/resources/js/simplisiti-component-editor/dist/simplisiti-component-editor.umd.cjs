(function(f,J){typeof exports=="object"&&typeof module<"u"?module.exports=J(require("vue")):typeof define=="function"&&define.amd?define(["vue"],J):(f=typeof globalThis<"u"?globalThis:f||self,f.SimplisitiComponentEditor=J(f.Vue))})(this,function(f){"use strict";const J={div:"Contenedor",a:"Enlace"},ln={div:"container",a:"ancord"},cn={layout:{icon:"square-full",component:()=>Promise.resolve().then(()=>Cr)}},fn={container:["layout"],ancord:[]},un=t=>{const e=ln[t];return fn[e].map(a=>cn[a])},mn=f.createElementVNode("div",{class:"sp-wizard-popup__tabs-container"},[f.createElementVNode("div",{class:"sp-wizard-popup__tabs"})],-1),dn={class:"sp-wizard-popup__content"},pn={class:"sp-wizard-popup__content-header"},gn=f.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=f.shallowReactive([]),a=async()=>{const r=un(e.tagName.toLowerCase());for(const o of r)n.push({component:f.defineAsyncComponent(o.component),icon:o.icon})};return f.onMounted(async()=>{await a()}),(r,o)=>(f.openBlock(),f.createElementBlock(f.Fragment,null,[mn,f.createElementVNode("div",dn,[(f.openBlock(!0),f.createElementBlock(f.Fragment,null,f.renderList(f.unref(n),i=>(f.openBlock(),f.createElementBlock("div",pn,[(f.openBlock(),f.createBlock(f.resolveDynamicComponent(i.component)))]))),256))])],64))}}),hn={class:"sp-configuration-popup__header"},yn={class:"sp-configuration-popup__body"},bn=f.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,a=f.ref(null),r=f.ref(!1),o=e,i=l=>{var x;if(!l)return;const u=l.getBoundingClientRect(),h=u.top,g=u.left+u.width+10;if(a.value){a.value.style.top=`${h}px`;const S=document.body.offsetWidth;(x=a.value.parentElement)!=null&&x.offsetWidth&&g+a.value.offsetWidth>S?(a.value.style.left=`${g-a.value.offsetWidth-20}px`,a.value.style.top=`${h+10}px`):a.value.style.left=`${g}px`}},s=f.computed(()=>{var u;const l=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return l&&J[l]||"Element"}),c=l=>{r.value=!0,setTimeout(()=>{o("close",l)},300)};return f.onMounted(()=>{i(n)}),(l,u)=>{const h=f.resolveComponent("fa-icon");return f.openBlock(),f.createElementBlock("div",{class:f.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":r.value}]),ref_key:"popup",ref:a},[f.createElementVNode("div",hn,[f.createElementVNode("h4",null,f.toDisplayString(s.value),1),f.createVNode(h,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=f.withModifiers(g=>c(g),["stop"]))})]),f.createElementVNode("div",yn,[f.createVNode(gn,{element:t.element},null,8,["element"])])],2)}}}),te=(t,e)=>{const n=t.__vccOpts||t;for(const[a,r]of e)n[a]=r;return n},vn=te(bn,[["__scopeId","data-v-624333ac"]]),xn=f.defineComponent({__name:"App",setup(t){const e=f.ref(!1),n=f.ref(null),a=o=>{o.forEach(i=>{i.addEventListener("click",s=>{e.value||(e.value=!0,n.value=i,i.classList.add("sp-element__active")),s.preventDefault(),s.stopPropagation()}),i.addEventListener("mouseover",s=>{e.value||i.classList.add("sp-element__active"),s.preventDefault(),s.stopPropagation()}),i.addEventListener("mouseout",s=>{e.value||i.classList.remove("sp-element__active"),s.preventDefault(),s.stopPropagation()})})},r=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return f.onMounted(()=>{const o=document.querySelectorAll("div"),i=document.querySelectorAll("a");a(o),a(i)}),(o,i)=>{var s;return e.value?(f.openBlock(),f.createBlock(vn,{key:0,element:n.value,type:(s=n.value)==null?void 0:s.tagName,onClose:f.withModifiers(r,["stop"])},null,8,["element","type"])):f.createCommentVNode("",!0)}}}),ee=()=>{};let At={},ne={},ae=null,re={mark:ee,measure:ee};try{typeof window<"u"&&(At=window),typeof document<"u"&&(ne=document),typeof MutationObserver<"u"&&(ae=MutationObserver),typeof performance<"u"&&(re=performance)}catch{}const{userAgent:oe=""}=At.navigator||{},D=At,y=ne,ie=ae,ct=re;D.document;const F=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",se=~oe.indexOf("MSIE")||~oe.indexOf("Trident/");var b="classic",le="duotone",_="sharp",O="sharp-duotone",An=[b,le,_,O],kn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ce={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},wn=["kit"],_n=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,On=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,En={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Sn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Pn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Cn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Nn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Tn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},fe={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},In=["solid","regular","light","thin","duotone","brands"],ue=[1,2,3,4,5,6,7,8,9,10],Ln=ue.concat([11,12,13,14,15,16,17,18,19,20]),tt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=[...Object.keys(Cn),...In,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",tt.GROUP,tt.SWAP_OPACITY,tt.PRIMARY,tt.SECONDARY].concat(ue.map(t=>"".concat(t,"x"))).concat(Ln.map(t=>"w-".concat(t))),Mn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},zn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Dn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},me={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",kt=16,de="fa",pe="svg-inline--fa",U="data-fa-i2svg",wt="data-fa-pseudo-element",jn="data-fa-pseudo-element-pending",_t="data-prefix",Ot="data-icon",ge="fontawesome-i2svg",Rn="async",Bn=["HTML","HEAD","STYLE","SCRIPT"],he=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),ye=[b,_,O];function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[b]}})}const be={...fe};be[b]={...fe[b],...ce.kit,...ce["kit-duotone"]};const Y=et(be),Et={...Tn};Et[b]={...Et[b],...me.kit,...me["kit-duotone"]};const nt=et(Et),St={...Nn};St[b]={...St[b],...Dn.kit};const H=et(St),Pt={...Pn};Pt[b]={...Pt[b],...zn.kit};const Wn=et(Pt),Un=_n,ve="fa-layers-text",Yn=On,Hn={...kn};et(Hn);const $n=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ct=tt,G=new Set;Object.keys(nt[b]).map(G.add.bind(G)),Object.keys(nt[_]).map(G.add.bind(G)),Object.keys(nt[O]).map(G.add.bind(G));const Vn=[...wn,...Fn],at=D.FontAwesomeConfig||{};function Xn(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Gn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Gn(Xn(n));r!=null&&(at[a]=r)});const xe={styleDefault:"solid",familyDefault:"classic",cssPrefix:de,replacementClass:pe,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);const q={...xe,...at};q.autoReplaceSvg||(q.observeMutations=!1);const m={};Object.keys(xe).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){q[t]=e,rt.forEach(n=>n(m))},get:function(){return q[t]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,rt.forEach(e=>e(m))},get:function(){return q.cssPrefix}}),D.FontAwesomeConfig=m;const rt=[];function qn(t){return rt.push(t),()=>{rt.splice(rt.indexOf(t),1)}}const j=kt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kn(t){if(!t||!F)return;const e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return y.head.insertBefore(e,a),t}const Qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ot(){let t=12,e="";for(;t-- >0;)e+=Qn[Math.random()*62|0];return e}function K(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Nt(t){return t.classList?K(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ae(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ae(t[n]),'" '),"").trim()}function ft(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Tt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function Jn(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(i," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}function ta(t){let{transform:e,width:n=kt,height:a=kt,startCentered:r=!1}=t,o="";return r&&se?o+="translate(".concat(e.x/j-n/2,"em, ").concat(e.y/j-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/j,"em), calc(-50% + ").concat(e.y/j,"em)) "):o+="translate(".concat(e.x/j,"em, ").concat(e.y/j,"em) "),o+="scale(".concat(e.size/j*(e.flipX?-1:1),", ").concat(e.size/j*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var ea=`:root, :host {
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
}`;function ke(){const t=de,e=pe,n=m.cssPrefix,a=m.replacementClass;let r=ea;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}let we=!1;function It(){m.autoAddCss&&!we&&(Kn(ke()),we=!0)}var na={mixout(){return{dom:{css:ke,insertCss:It}}},hooks(){return{beforeDOMElementCreation(){It()},beforeI2svg(){It()}}}};const z=D||{};z[M]||(z[M]={}),z[M].styles||(z[M].styles={}),z[M].hooks||(z[M].hooks={}),z[M].shims||(z[M].shims=[]);var I=z[M];const _e=[],Oe=function(){y.removeEventListener("DOMContentLoaded",Oe),ut=1,_e.map(t=>t())};let ut=!1;F&&(ut=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ut||y.addEventListener("DOMContentLoaded",Oe));function aa(t){F&&(ut?setTimeout(t,0):_e.push(t))}function it(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ae(t):"<".concat(e," ").concat(Zn(n),">").concat(a.map(it).join(""),"</").concat(e,">")}function Ee(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Lt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=n,c,l,u;for(a===void 0?(c=1,u=e[o[0]]):(c=0,u=a);c<i;c++)l=o[c],u=s(u,e[l],l,e);return u};function ra(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ft(t){const e=ra(t);return e.length===1?e[0].toString(16):null}function oa(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Mt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Se(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,Se(e)):I.styles[t]={...I.styles[t]||{},...r},t==="fas"&&Mt("fa",e)}const{styles:$,shims:ia}=I,sa={[b]:Object.values(H[b]),[_]:Object.values(H[_]),[O]:Object.values(H[O])};let zt=null,Pe={},Ce={},Ne={},Te={},Ie={};const la={[b]:Object.keys(Y[b]),[_]:Object.keys(Y[_]),[O]:Object.keys(Y[O])};function ca(t){return~Vn.indexOf(t)}function fa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ca(r)?r:null}const Le=()=>{const t=a=>Lt($,(r,o,i)=>(r[i]=Lt(o,a,{}),r),{});Pe=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(s=>typeof s=="number").forEach(s=>{a[s.toString(16)]=o}),a)),Ce=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(s=>typeof s=="string").forEach(s=>{a[s]=o}),a)),Ie=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(s=>{a[s]=o}),a});const e="far"in $||m.autoFetchSvg,n=Lt(ia,(a,r)=>{const o=r[0];let i=r[1];const s=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:s}),a},{names:{},unicodes:{}});Ne=n.names,Te=n.unicodes,zt=mt(m.styleDefault,{family:m.familyDefault})};qn(t=>{zt=mt(t.styleDefault,{family:m.familyDefault})}),Le();function Dt(t,e){return(Pe[t]||{})[e]}function ua(t,e){return(Ce[t]||{})[e]}function R(t,e){return(Ie[t]||{})[e]}function Fe(t){return Ne[t]||{prefix:null,iconName:null}}function ma(t){const e=Te[t],n=Dt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return zt}const jt=()=>({prefix:null,iconName:null,rest:[]});function mt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=b}=e,a=Y[n][t],r=nt[n][t]||nt[n][a],o=t in I.styles?t:null;return r||o||null}const da={[b]:Object.keys(H[b]),[_]:Object.keys(H[_]),[O]:Object.keys(H[O])};function dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[b]:"".concat(m.cssPrefix,"-").concat(b),[_]:"".concat(m.cssPrefix,"-").concat(_),[O]:"".concat(m.cssPrefix,"-").concat(O)};let r=null,o=b;const i=An.filter(c=>c!==le);i.forEach(c=>{(t.includes(a[c])||t.some(l=>da[c].includes(l)))&&(o=c)});const s=t.reduce((c,l)=>{const u=fa(m.cssPrefix,l);if($[l]?(l=sa[o].includes(l)?Wn[o][l]:l,r=l,c.prefix=l):la[o].indexOf(l)>-1?(r=l,c.prefix=mt(l,{family:o})):u?c.iconName=u:l!==m.replacementClass&&!i.some(h=>l===a[h])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const h=r==="fa"?Fe(c.iconName):{},g=R(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!$.far&&$.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},jt());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===_&&($.fass||m.autoFetchSvg)&&(s.prefix="fass",s.iconName=R(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===O&&($.fasds||m.autoFetchSvg)&&(s.prefix="fasds",s.iconName=R(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||r==="fa")&&(s.prefix=B()||"fas"),s}class pa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...r[o]},Mt(o,r[o]);const i=H[b][o];i&&Mt(i,r[o]),Le()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:s}=a[r],c=s[2];e[o]||(e[o]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[o][l]=s)}),e[o][i]=s}),e}}let Me=[],Q={};const Z={},ga=Object.keys(Z);function ha(t,e){let{mixoutsTo:n}=e;return Me=t,Q={},Object.keys(Z).forEach(a=>{ga.indexOf(a)===-1&&delete Z[a]}),Me.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{Q[i]||(Q[i]=[]),Q[i].push(o[i])})}a.provides&&a.provides(Z)}),n}function Rt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Q[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Q[t]||[]).forEach(o=>{o.apply(null,n)})}function W(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||B();if(e)return e=R(n,e)||e,Ee(ze.definitions,n,e)||Ee(I.styles,n,e)}const ze=new pa,E={noAuto:()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,V("noAuto")},config:m,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(V("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,aa(()=>{ya({autoReplaceSvgRoot:e}),V("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:R(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=mt(t[0]);return{prefix:n,iconName:R(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Un))){const e=dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||B(),iconName:R(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=B();return{prefix:e,iconName:R(e,t)||t}}}},library:ze,findIconDefinition:Bt,toHtml:it},ya=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=y}=t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&F&&m.autoReplaceSvg&&E.dom.i2svg({node:e})};function pt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>it(n))}}),Object.defineProperty(t,"node",{get:function(){if(!F)return;const n=y.createElement("div");return n.innerHTML=t.html,n.children}}),t}function ba(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Tt(i)&&n.found&&!a.found){const{width:s,height:c}=n,l={x:s/c/2,y:.5};r.style=ft({...o,"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function va(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:i},children:a}]}]}function Wt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:s,maskId:c,titleId:l,extra:u,watchable:h=!1}=t,{width:g,height:x}=n.found?n:e,S=a==="fak",N=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let w={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:N,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(x)}};const d=S&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/x*16*.0625,"em")}:{};h&&(w.attributes[U]=""),s&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||ot())},children:[s]}),delete w.attributes.title);const p={...w,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:i,styles:{...d,...u.styles}},{children:v,attributes:A}=n.found&&e.found?W("generateAbstractMask",p)||{children:[],attributes:{}}:W("generateAbstractIcon",p)||{children:[],attributes:{}};return p.children=v,p.attributes=A,i?va(p):ba(p)}function De(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:s=!1}=t,c={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(c[U]="");const l={...i.styles};Tt(r)&&(l.transform=ta({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);const u=ft(l);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function xa(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},o=ft(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ut}=I;function Yt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ct.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Aa={found:!1,width:512,height:512};function ka(t,e){!he&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ht(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=B()),new Promise((a,r)=>{if(n==="fa"){const o=Fe(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ut[e]&&Ut[e][t]){const o=Ut[e][t];return a(Yt(o))}ka(t,e),a({...Aa,icon:m.showMissingIcons&&t?W("missingIconAbstract")||{}:{}})})}const je=()=>{},$t=m.measurePerformance&&ct&&ct.mark&&ct.measure?ct:{mark:je,measure:je},st='FA "6.6.0"',wa=t=>($t.mark("".concat(st," ").concat(t," begins")),()=>Re(t)),Re=t=>{$t.mark("".concat(st," ").concat(t," ends")),$t.measure("".concat(st," ").concat(t),"".concat(st," ").concat(t," begins"),"".concat(st," ").concat(t," ends"))};var Vt={begin:wa,end:Re};const gt=()=>{};function Be(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function _a(t){const e=t.getAttribute?t.getAttribute(_t):null,n=t.getAttribute?t.getAttribute(Ot):null;return e&&n}function Oa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ea(){return m.autoReplaceSvg===!0?ht.replace:ht[m.autoReplaceSvg]||ht.replace}function Sa(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Pa(t){return y.createElement(t)}function We(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Sa:Pa}=e;if(typeof t=="string")return y.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(We(o,{ceFn:n}))}),a}function Ca(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ht={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(We(n),e)}),e.getAttribute(U)===null&&m.keepOriginalSource){let n=y.createComment(Ca(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Nt(e).indexOf(m.replacementClass))return ht.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===m.replacementClass||s.match(a)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>it(o)).join(`
`);e.setAttribute(U,""),e.innerHTML=r}};function Ue(t){t()}function Ye(t,e){const n=typeof e=="function"?e:gt;if(t.length===0)n();else{let a=Ue;m.mutateApproach===Rn&&(a=D.requestAnimationFrame||Ue),a(()=>{const r=Ea(),o=Vt.begin("mutate");t.map(r),o(),n()})}}let Xt=!1;function He(){Xt=!0}function Gt(){Xt=!1}let yt=null;function $e(t){if(!ie||!m.observeMutations)return;const{treeCallback:e=gt,nodeCallback:n=gt,pseudoElementsCallback:a=gt,observeMutationsRoot:r=y}=t;yt=new ie(o=>{if(Xt)return;const i=B();K(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!Be(s.addedNodes[0])&&(m.searchPseudoElements&&a(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&m.searchPseudoElements&&a(s.target.parentNode),s.type==="attributes"&&Be(s.target)&&~$n.indexOf(s.attributeName))if(s.attributeName==="class"&&_a(s.target)){const{prefix:c,iconName:l}=dt(Nt(s.target));s.target.setAttribute(_t,c||i),l&&s.target.setAttribute(Ot,l)}else Oa(s.target)&&n(s.target)})}),F&&yt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Na(){yt&&yt.disconnect()}function Ta(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Ia(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=dt(Nt(t));return r.prefix||(r.prefix=B()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ua(r.prefix,t.innerText)||Dt(r.prefix,Ft(t.innerText))),!r.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function La(t){const e=K(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||ot()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Ia(t),o=La(t),i=Rt("parseNodeAttributes",{},t);let s=e.styleParser?Ta(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:s,attributes:o},...i}}const{styles:Ma}=I;function Xe(t){const e=m.autoReplaceSvg==="nest"?Ve(t,{styleParser:!1}):Ve(t);return~e.extra.classes.indexOf(ve)?W("generateLayersText",t,e):W("generateSvgReplacementMutation",t,e)}let L=new Set;ye.map(t=>{L.add("fa-".concat(t))}),Object.keys(Y[b]).map(L.add.bind(L)),Object.keys(Y[_]).map(L.add.bind(L)),Object.keys(Y[O]).map(L.add.bind(L)),L=[...L];function Ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(ge,"-").concat(u)),r=u=>n.remove("".concat(ge,"-").concat(u)),o=m.autoFetchSvg?L:ye.map(u=>"fa-".concat(u)).concat(Object.keys(Ma));o.includes("fa")||o.push("fa");const i=[".".concat(ve,":not([").concat(U,"])")].concat(o.map(u=>".".concat(u,":not([").concat(U,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=K(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Vt.begin("onTree"),l=s.reduce((u,h)=>{try{const g=Xe(h);g&&u.push(g)}catch(g){he||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise((u,h)=>{Promise.all(l).then(g=>{Ye(g,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),u()})}).catch(g=>{c(),h(g)})})}function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xe(t).then(n=>{n&&Ye([n],e)})}function Da(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Bt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(a,{...n,mask:r})}}const ja=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:h,iconName:g,icon:x}=t;return pt({type:"icon",...t},()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(i?l["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(s||ot()):(l["aria-hidden"]="true",l.focusable="false")),Wt({icons:{main:Yt(x),mask:r?Yt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:g,transform:{...T,...n},symbol:a,title:i,maskId:o,titleId:s,extra:{attributes:l,styles:u,classes:c}})))};var Ra={mixout(){return{icon:Da(ja)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ge,t.nodeCallback=za,t}}},provides(t){t.i2svg=function(e){const{node:n=y,callback:a=()=>{}}=e;return Ge(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:s,symbol:c,mask:l,maskId:u,extra:h}=n;return new Promise((g,x)=>{Promise.all([Ht(a,i),l.iconName?Ht(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[N,w]=S;g([e,Wt({icons:{main:N,mask:w},prefix:i,iconName:a,transform:s,symbol:c,maskId:u,title:r,titleId:o,extra:h,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const s=ft(i);s.length>0&&(a.style=s);let c;return Tt(o)&&(c=W("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Ba={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Wa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return pt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),xa({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Ua={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=T,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return pt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),De({content:t,transform:{...T,...n},title:a,extra:{attributes:o,styles:i,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,s=null;if(se){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/c,s=l.height/c}return m.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,De({content:e.innerHTML,width:i,height:s,transform:r,title:a,extra:o,watchable:!0})])}}};const Ya=new RegExp('"',"ug"),qe=[1105920,1112319],Ke={FontAwesome:{normal:"fas",400:"fas"},...Sn,...En,...Mn},qt=Object.keys(Ke).reduce((t,e)=>(t[e.toLowerCase()]=Ke[e],t),{}),Ha=Object.keys(qt).reduce((t,e)=>{const n=qt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function $a(t){const e=t.replace(Ya,""),n=oa(e,0),a=n>=qe[0]&&n<=qe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ft(r?e[0]:e),isSecondary:a||r}}function Va(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(qt[n]||{})[r]||Ha[n]}function Qe(t,e){const n="".concat(jn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=K(t.children).filter(g=>g.getAttribute(wt)===e)[0],s=D.getComputedStyle(t,e),c=s.getPropertyValue("font-family"),l=c.match(Yn),u=s.getPropertyValue("font-weight"),h=s.getPropertyValue("content");if(i&&!l)return t.removeChild(i),a();if(l&&h!=="none"&&h!==""){const g=s.getPropertyValue("content");let x=Va(c,u);const{value:S,isSecondary:N}=$a(g),w=l[0].startsWith("FontAwesome");let d=Dt(x,S),p=d;if(w){const v=ma(S);v.iconName&&v.prefix&&(d=v.iconName,x=v.prefix)}if(d&&!N&&(!i||i.getAttribute(_t)!==x||i.getAttribute(Ot)!==p)){t.setAttribute(n,p),i&&t.removeChild(i);const v=Fa(),{extra:A}=v;A.attributes[wt]=e,Ht(d,x).then(P=>{const xt=Wt({...v,icons:{main:P,mask:jt()},prefix:x,iconName:p,extra:A,watchable:!0}),X=y.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=xt.map(Nr=>it(Nr)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Xa(t){return Promise.all([Qe(t,"::before"),Qe(t,"::after")])}function Ga(t){return t.parentNode!==document.head&&!~Bn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ze(t){if(F)return new Promise((e,n)=>{const a=K(t.querySelectorAll("*")).filter(Ga).map(Xa),r=Vt.begin("searchPseudoElements");He(),Promise.all(a).then(()=>{r(),Gt(),e()}).catch(()=>{r(),Gt(),n()})})}var qa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ze,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=y}=e;m.searchPseudoElements&&Ze(n)}}};let Je=!1;var Ka={mixout(){return{dom:{unwatch(){He(),Je=!0}}}},hooks(){return{bootstrap(){$e(Rt("mutationObserverCallbacks",{}))},noAuto(){Na()},watch(t){const{observeMutationsRoot:e}=t;Je?Gt():$e(Rt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const tn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Qa={mixout(){return{parse:{transform:t=>tn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=tn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),l="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(s," ").concat(c," ").concat(l)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:i,inner:u,path:h};return{tag:"g",attributes:{...g.outer},children:[{tag:"g",attributes:{...g.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...g.path}}]}]}}}};const Kt={x:0,y:0,width:"100%",height:"100%"};function en(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Za(t){return t.tag==="g"?t.children:[t]}var Ja={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?dt(n.split(" ").map(r=>r.trim())):jt();return a.prefix||(a.prefix=B()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:s}=e;const{width:c,icon:l}=r,{width:u,icon:h}=o,g=Jn({transform:s,containerWidth:u,iconWidth:c}),x={tag:"rect",attributes:{...Kt,fill:"white"}},S=l.children?{children:l.children.map(en)}:{},N={tag:"g",attributes:{...g.inner},children:[en({tag:l.tag,attributes:{...l.attributes,...g.path},...S})]},w={tag:"g",attributes:{...g.outer},children:[N]},d="mask-".concat(i||ot()),p="clip-".concat(i||ot()),v={tag:"mask",attributes:{...Kt,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[x,w]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Za(h)},v]};return n.push(A,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(d,")"),...Kt}}),{children:n,attributes:a}}}},tr={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...r,attributeName:"opacity"},i={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},er={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},nr=[na,Ra,Ba,Wa,Ua,qa,Ka,Qa,Ja,tr,er];ha(nr,{mixoutsTo:E}),E.noAuto;const nn=E.config,ar=E.library;E.dom;const bt=E.parse;E.findIconDefinition,E.toHtml;const rr=E.icon;E.layer;const or=E.text;E.counter;const ir={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},sr={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},lr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},cr={prefix:"fas",iconName:"square-full",icon:[512,512,[128997,128998,128999,129e3,129001,129002,129003,11035,11036],"f45c","M0 0H512V512H0V0z"]};function an(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?an(Object(n),!0).forEach(function(a){k(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function fr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ur(t){var e=fr(t,"string");return typeof e=="symbol"?e:e+""}function vt(t){"@babel/helpers - typeof";return vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vt(t)}function k(t,e,n){return e=ur(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function mr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function dr(t,e){if(t==null)return{};var n=mr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Qt(t){return pr(t)||gr(t)||hr(t)||yr()}function pr(t){if(Array.isArray(t))return Zt(t)}function gr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hr(t,e){if(t){if(typeof t=="string")return Zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zt(t,e)}}function Zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},rn={exports:{}};(function(t){(function(e){var n=function(d,p,v){if(!l(p)||h(p)||g(p)||x(p)||c(p))return p;var A,P=0,xt=0;if(u(p))for(A=[],xt=p.length;P<xt;P++)A.push(n(d,p[P],v));else{A={};for(var X in p)Object.prototype.hasOwnProperty.call(p,X)&&(A[d(X,v)]=n(d,p[X],v))}return A},a=function(d,p){p=p||{};var v=p.separator||"_",A=p.split||/(?=[A-Z])/;return d.split(A).join(v)},r=function(d){return S(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(p,v){return v?v.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},o=function(d){var p=r(d);return p.substr(0,1).toUpperCase()+p.substr(1)},i=function(d,p){return a(d,p).toLowerCase()},s=Object.prototype.toString,c=function(d){return typeof d=="function"},l=function(d){return d===Object(d)},u=function(d){return s.call(d)=="[object Array]"},h=function(d){return s.call(d)=="[object Date]"},g=function(d){return s.call(d)=="[object RegExp]"},x=function(d){return s.call(d)=="[object Boolean]"},S=function(d){return d=d-0,d===d},N=function(d,p){var v=p&&"process"in p?p.process:p;return typeof v!="function"?d:function(A,P){return v(A,d,P)}},w={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(d,p){return n(N(r,p),d)},decamelizeKeys:function(d,p){return n(N(i,p),d,p)},pascalizeKeys:function(d,p){return n(N(o,p),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(br)})(rn);var vr=rn.exports,xr=["class","style"];function Ar(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=vr.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function kr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Jt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Jt(c)}),r=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=kr(u);break;case"style":c.style=Ar(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,s=dr(n,xr);return f.h(t.tag,C(C(C({},e),{},{class:r.class,style:C(C({},r.style),i)},r.attrs),s),a)}var on=!1;try{on=process.env.NODE_ENV==="production"}catch{}function wr(){if(!on&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?k({},t,e):{}}function _r(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},k(k(k(k(k(k(k(k(k(k(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),k(k(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function sn(t){if(t&&vt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(bt.icon)return bt.icon(t);if(t===null)return null;if(vt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Or=f.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=f.computed(function(){return sn(e.icon)}),o=f.computed(function(){return lt("classes",_r(e))}),i=f.computed(function(){return lt("transform",typeof e.transform=="string"?bt.transform(e.transform):e.transform)}),s=f.computed(function(){return lt("mask",sn(e.mask))}),c=f.computed(function(){return rr(r.value,C(C(C(C({},o.value),i.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});f.watch(c,function(u){if(!u)return wr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=f.computed(function(){return c.value?Jt(c.value.abstract[0],{},a):null});return function(){return l.value}}});f.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=nn.familyPrefix,o=f.computed(function(){return["".concat(r,"-layers")].concat(Qt(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return f.h("div",{class:o.value},a.default?a.default():[])}}}),f.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=nn.familyPrefix,o=f.computed(function(){return lt("classes",[].concat(Qt(e.counter?["".concat(r,"-layers-counter")]:[]),Qt(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),i=f.computed(function(){return lt("transform",typeof e.transform=="string"?bt.transform(e.transform):e.transform)}),s=f.computed(function(){var l=or(e.value.toString(),C(C({},i.value),o.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=f.computed(function(){return Jt(s.value,{},a)});return function(){return c.value}}}),ar.add(lr,sr,ir,cr);const Er={install:t=>{t.component("simplisiti-component-editor",xn),t.component("fa-icon",Or)}},Sr={};function Pr(t,e){return f.openBlock(),f.createElementBlock("p",null,"Container")}const Cr=Object.freeze(Object.defineProperty({__proto__:null,default:te(Sr,[["render",Pr]])},Symbol.toStringTag,{value:"Module"}));return Er});
