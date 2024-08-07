(function(r,tt){typeof exports=="object"&&typeof module<"u"?module.exports=tt(require("vue")):typeof define=="function"&&define.amd?define(["vue"],tt):(r=typeof globalThis<"u"?globalThis:r||self,r.SimplisitiComponentEditor=tt(r.Vue))})(this,function(r){"use strict";const tt={div:"Contenedor",a:"Enlace"},un={div:"container",a:"ancord"},dn={layout:{title:"Layout",icon:"object-group",component:()=>Promise.resolve().then(()=>po)},spacing:{title:"Espaciado",icon:"expand",component:()=>Promise.resolve().then(()=>Vo)}},mn={container:["layout","spacing"],ancord:["spacing"]},pn=t=>{const e=un[t];return mn[e].map(a=>({tab:a,...dn[a]}))},gn={class:"sp-wizard-popup__tabs-container"},hn={class:"sp-wizard-popup__tabs"},yn={class:"sp-wizard-popup__tab"},bn=["title","onClick"],_n={class:"sp-wizard-popup__content"},vn={class:"sp-wizard-popup__content-header"},xn=r.defineComponent({__name:"Wizard",props:{element:{type:HTMLElement,required:!0}},setup(t){const{element:e}=t,n=r.ref([]);n.value=Array.from(e.classList).filter(d=>d.startsWith("sp-style"));const a=r.shallowReactive([]),o=r.shallowRef(void 0),i=r.ref(void 0),s=r.computed(()=>pn(e.tagName.toLowerCase())),l=async()=>{for(const d of s.value)a.push({component:r.defineAsyncComponent(d.component),icon:d.icon,title:d.title,tab:d.tab})},f=d=>{o.value=d.component,i.value=d.tab},c=()=>{a.length>0&&f(a[0])},u=d=>i.value===d.tab,b=d=>{e.classList.forEach(g=>{setTimeout(()=>{g.startsWith("sp-style")&&e.classList.remove(g)},100)}),d.forEach(g=>{setTimeout(()=>{e.classList.add(g)},100)})};return r.onMounted(async()=>{await l(),c()}),(d,g)=>{const _=r.resolveComponent("fa-icon");return r.openBlock(),r.createElementBlock(r.Fragment,null,[r.createElementVNode("div",gn,[r.createElementVNode("div",hn,[(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(r.unref(a),y=>(r.openBlock(),r.createElementBlock("div",yn,[r.createElementVNode("button",{class:r.normalizeClass(["sp-wizard-popup__tab-button",{"sp-wizard-popup__tab-button__active":u(y)}]),title:y.title,onClick:N=>f(y)},[r.createVNode(_,{icon:y.icon},null,8,["icon"])],10,bn)]))),256))])]),r.createElementVNode("div",_n,[r.createElementVNode("div",vn,[(r.openBlock(),r.createBlock(r.resolveDynamicComponent(o.value),{onUpdate:b,"sp-class-list":n.value},null,40,["sp-class-list"]))])])],64)}}}),et=(t,e)=>{const n=t.__vccOpts||t;for(const[a,o]of e)n[a]=o;return n},En=et(xn,[["__scopeId","data-v-f5a186ee"]]),kn={class:"sp-configuration-popup__header"},Nn={class:"sp-configuration-popup__body"},An=et(r.defineComponent({__name:"ConfigurationPopUp",props:{element:{type:[HTMLElement,null],required:!0}},emits:["close"],setup(t,{emit:e}){const{element:n}=t,a=r.ref(null),o=r.ref(!1),i=e,s=c=>{setTimeout(()=>{if(!c)return;const u=c.getBoundingClientRect(),b=u.top,d=u.bottom,g=u.left+u.width+10;if(a.value){a.value.style.top=`${b}px`,a.value.style.left=`${g}px`;const _=document.body.offsetWidth;g+a.value.offsetWidth>_&&(a.value.style.top=`${b+10}px`,a.value.style.left=`${g-a.value.offsetWidth-20}px`);const y=document.body.offsetHeight;b+a.value.offsetHeight>y&&(a.value.style.top="auto",a.value.style.bottom=`${d-a.value.offsetHeight+20}px`)}},50)},l=r.computed(()=>{var u;const c=(u=n==null?void 0:n.tagName)==null?void 0:u.toLowerCase();return c&&tt[c]||"Element"}),f=c=>{o.value=!0,setTimeout(()=>{i("close",c)},300)};return s(n),(c,u)=>{const b=r.resolveComponent("fa-icon");return r.openBlock(),r.createElementBlock("div",{class:r.normalizeClass(["sp-configuration-popup",{"sp-configuration-popup_closed":o.value}]),ref_key:"popup",ref:a,onClick:r.withModifiers(d=>{},["stop"])},[r.createElementVNode("div",kn,[r.createElementVNode("h4",null,r.toDisplayString(l.value),1),r.createVNode(b,{class:"sp-configuration-popup__close",icon:"times",onClick:u[0]||(u[0]=d=>f(d))})]),r.createElementVNode("div",Nn,[t.element?(r.openBlock(),r.createBlock(En,{key:0,element:t.element},null,8,["element"])):r.createCommentVNode("",!0)])],2)}}}),[["__scopeId","data-v-317d171c"]]),wn=r.defineComponent({__name:"App",setup(t){const e=r.ref(!1),n=r.ref(null),a=i=>{i.forEach(s=>{s.addEventListener("click",l=>{e.value||(e.value=!0,n.value=s,s.classList.add("sp-element__active")),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseover",l=>{e.value||s.classList.add("sp-element__active"),l.preventDefault(),l.stopPropagation()}),s.addEventListener("mouseout",l=>{e.value||s.classList.remove("sp-element__active"),l.preventDefault(),l.stopPropagation()})})},o=()=>{n.value&&n.value.classList.remove("sp-element__active"),n.value=null,e.value=!1};return r.onMounted(()=>{const i=document.querySelectorAll("div"),s=document.querySelectorAll("a");a(i),a(s)}),(i,s)=>{var l;return e.value?(r.openBlock(),r.createBlock(An,{key:0,element:n.value,type:(l=n.value)==null?void 0:l.tagName,onClose:r.withModifiers(o,["stop"])},null,8,["element","type"])):r.createCommentVNode("",!0)}}}),ae=()=>{};let Nt={},re={},oe=null,ie={mark:ae,measure:ae};try{typeof window<"u"&&(Nt=window),typeof document<"u"&&(re=document),typeof MutationObserver<"u"&&(oe=MutationObserver),typeof performance<"u"&&(ie=performance)}catch{}const{userAgent:se=""}=Nt.navigator||{},V=Nt,v=re,le=oe,ut=ie;V.document;const T=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",ce=~se.indexOf("MSIE")||~se.indexOf("Trident/");var x="classic",fe="duotone",w="sharp",S="sharp-duotone",Sn=[x,fe,w,S],Cn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},ue={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},On=["kit"],Pn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ln=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,In={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},zn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Tn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Mn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Fn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},de={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Dn=["solid","regular","light","thin","duotone","brands"],me=[1,2,3,4,5,6,7,8,9,10],jn=me.concat([11,12,13,14,15,16,17,18,19,20]),nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rn=[...Object.keys(Mn),...Dn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(me.map(t=>"".concat(t,"x"))).concat(jn.map(t=>"w-".concat(t))),Bn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$n={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Un={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",At=16,ge="fa",he="svg-inline--fa",U="data-fa-i2svg",wt="data-fa-pseudo-element",Wn="data-fa-pseudo-element-pending",St="data-prefix",Ct="data-icon",ye="fontawesome-i2svg",Yn="async",Hn=["HTML","HEAD","STYLE","SCRIPT"],be=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),_e=[x,w,S];function at(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[x]}})}const ve={...de};ve[x]={...de[x],...ue.kit,...ue["kit-duotone"]};const W=at(ve),Ot={...Vn};Ot[x]={...Ot[x],...pe.kit,...pe["kit-duotone"]};const rt=at(Ot),Pt={...Fn};Pt[x]={...Pt[x],...Un.kit};const Y=at(Pt),Lt={...Tn};Lt[x]={...Lt[x],...$n.kit};const Gn=at(Lt),Xn=Pn,xe="fa-layers-text",qn=Ln,Kn={...Cn};at(Kn);const Qn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],It=nt,q=new Set;Object.keys(rt[x]).map(q.add.bind(q)),Object.keys(rt[w]).map(q.add.bind(q)),Object.keys(rt[S]).map(q.add.bind(q));const Zn=[...On,...Rn],ot=V.FontAwesomeConfig||{};function Jn(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const o=ta(Jn(n));o!=null&&(ot[a]=o)});const Ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:ge,replacementClass:he,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);const K={...Ee,...ot};K.autoReplaceSvg||(K.observeMutations=!1);const m={};Object.keys(Ee).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){K[t]=e,it.forEach(n=>n(m))},get:function(){return K[t]}})}),Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,it.forEach(e=>e(m))},get:function(){return K.cssPrefix}}),V.FontAwesomeConfig=m;const it=[];function ea(t){return it.push(t),()=>{it.splice(it.indexOf(t),1)}}const D=At,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function na(t){if(!t||!T)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let a=null;for(let o=n.length-1;o>-1;o--){const i=n[o],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return v.head.insertBefore(e,a),t}const aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){let t=12,e="";for(;t-- >0;)e+=aa[Math.random()*62|0];return e}function Q(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function zt(t){return t.classList?Q(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function ke(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ra(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(ke(t[n]),'" '),"").trim()}function dt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Tt(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function oa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:f,path:c}}function ia(t){let{transform:e,width:n=At,height:a=At,startCentered:o=!1}=t,i="";return o&&ce?i+="translate(".concat(e.x/D-n/2,"em, ").concat(e.y/D-a/2,"em) "):o?i+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):i+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),i+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var sa=`:root, :host {
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
}`;function Ne(){const t=ge,e=he,n=m.cssPrefix,a=m.replacementClass;let o=sa;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");o=o.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return o}let Ae=!1;function Mt(){m.autoAddCss&&!Ae&&(na(Ne()),Ae=!0)}var la={mixout(){return{dom:{css:Ne,insertCss:Mt}}},hooks(){return{beforeDOMElementCreation(){Mt()},beforeI2svg(){Mt()}}}};const F=V||{};F[M]||(F[M]={}),F[M].styles||(F[M].styles={}),F[M].hooks||(F[M].hooks={}),F[M].shims||(F[M].shims=[]);var I=F[M];const we=[],Se=function(){v.removeEventListener("DOMContentLoaded",Se),mt=1,we.map(t=>t())};let mt=!1;T&&(mt=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),mt||v.addEventListener("DOMContentLoaded",Se));function ca(t){T&&(mt?setTimeout(t,0):we.push(t))}function lt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?ke(t):"<".concat(e," ").concat(ra(n),">").concat(a.map(lt).join(""),"</").concat(e,">")}function Ce(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ft=function(e,n,a,o){var i=Object.keys(e),s=i.length,l=n,f,c,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<s;f++)c=i[f],u=l(u,e[c],c,e);return u};function fa(t){const e=[];let n=0;const a=t.length;for(;n<a;){const o=t.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((o&1023)<<10)+(i&1023)+65536):(e.push(o),n--)}else e.push(o)}return e}function Vt(t){const e=fa(t);return e.length===1?e[0].toString(16):null}function ua(t,e){const n=t.length;let a=t.charCodeAt(e),o;return a>=55296&&a<=56319&&n>e+1&&(o=t.charCodeAt(e+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function Oe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Dt(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,o=Oe(e);typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,Oe(e)):I.styles[t]={...I.styles[t]||{},...o},t==="fas"&&Dt("fa",e)}const{styles:H,shims:da}=I,ma={[x]:Object.values(Y[x]),[w]:Object.values(Y[w]),[S]:Object.values(Y[S])};let jt=null,Pe={},Le={},Ie={},ze={},Te={};const pa={[x]:Object.keys(W[x]),[w]:Object.keys(W[w]),[S]:Object.keys(W[S])};function ga(t){return~Zn.indexOf(t)}function ha(t,e){const n=e.split("-"),a=n[0],o=n.slice(1).join("-");return a===t&&o!==""&&!ga(o)?o:null}const Me=()=>{const t=a=>Ft(H,(o,i,s)=>(o[s]=Ft(i,a,{}),o),{});Pe=t((a,o,i)=>(o[3]&&(a[o[3]]=i),o[2]&&o[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),Le=t((a,o,i)=>(a[i]=i,o[2]&&o[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),Te=t((a,o,i)=>{const s=o[2];return a[i]=i,s.forEach(l=>{a[l]=i}),a});const e="far"in H||m.autoFetchSvg,n=Ft(da,(a,o)=>{const i=o[0];let s=o[1];const l=o[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ie=n.names,ze=n.unicodes,jt=pt(m.styleDefault,{family:m.familyDefault})};ea(t=>{jt=pt(t.styleDefault,{family:m.familyDefault})}),Me();function Rt(t,e){return(Pe[t]||{})[e]}function ya(t,e){return(Le[t]||{})[e]}function j(t,e){return(Te[t]||{})[e]}function Fe(t){return Ie[t]||{prefix:null,iconName:null}}function ba(t){const e=ze[t],n=Rt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return jt}const Bt=()=>({prefix:null,iconName:null,rest:[]});function pt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=x}=e,a=W[n][t],o=rt[n][t]||rt[n][a],i=t in I.styles?t:null;return o||i||null}const _a={[x]:Object.keys(Y[x]),[w]:Object.keys(Y[w]),[S]:Object.keys(Y[S])};function gt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[x]:"".concat(m.cssPrefix,"-").concat(x),[w]:"".concat(m.cssPrefix,"-").concat(w),[S]:"".concat(m.cssPrefix,"-").concat(S)};let o=null,i=x;const s=Sn.filter(f=>f!==fe);s.forEach(f=>{(t.includes(a[f])||t.some(c=>_a[f].includes(c)))&&(i=f)});const l=t.reduce((f,c)=>{const u=ha(m.cssPrefix,c);if(H[c]?(c=ma[i].includes(c)?Gn[i][c]:c,o=c,f.prefix=c):pa[i].indexOf(c)>-1?(o=c,f.prefix=pt(c,{family:i})):u?f.iconName=u:c!==m.replacementClass&&!s.some(b=>c===a[b])&&f.rest.push(c),!n&&f.prefix&&f.iconName){const b=o==="fa"?Fe(f.iconName):{},d=j(f.prefix,f.iconName);b.prefix&&(o=null),f.iconName=b.iconName||d||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!H.far&&H.fas&&!m.autoFetchSvg&&(f.prefix="fas")}return f},Bt());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===w&&(H.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=j(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===S&&(H.fasds||m.autoFetchSvg)&&(l.prefix="fasds",l.iconName=j(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=R()||"fas"),l}class va{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...o[i]},Dt(i,o[i]);const s=Y[x][i];s&&Dt(s,o[i]),Me()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{const{prefix:i,iconName:s,icon:l}=a[o],f=l[2];e[i]||(e[i]={}),f.length>0&&f.forEach(c=>{typeof c=="string"&&(e[i][c]=l)}),e[i][s]=l}),e}}let Ve=[],Z={};const J={},xa=Object.keys(J);function Ea(t,e){let{mixoutsTo:n}=e;return Ve=t,Z={},Object.keys(J).forEach(a=>{xa.indexOf(a)===-1&&delete J[a]}),Ve.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(i=>{typeof o[i]=="function"&&(n[i]=o[i]),typeof o[i]=="object"&&Object.keys(o[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=o[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{Z[s]||(Z[s]=[]),Z[s].push(i[s])})}a.provides&&a.provides(J)}),n}function $t(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return(Z[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function G(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Z[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=j(n,e)||e,Ce(De.definitions,n,e)||Ce(I.styles,n,e)}const De=new va,C={noAuto:()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},config:m,dom:{i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(G("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ca(()=>{ka({autoReplaceSvgRoot:e}),G("watch",t)})}},parse:{icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:j(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=pt(t[0]);return{prefix:n,iconName:j(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Xn))){const e=gt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:j(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:j(e,t)||t}}}},library:De,findIconDefinition:Ut,toHtml:lt},ka=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&C.dom.i2svg({node:e})};function ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>lt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!T)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Na(t){let{children:e,main:n,mask:a,attributes:o,styles:i,transform:s}=t;if(Tt(s)&&n.found&&!a.found){const{width:l,height:f}=n,c={x:l/f/2,y:.5};o.style=dt({...i,"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")})}return[{tag:"svg",attributes:o,children:e}]}function Aa(t){let{prefix:e,iconName:n,children:a,attributes:o,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...o,id:s},children:a}]}]}function Wt(t){const{icons:{main:e,mask:n},prefix:a,iconName:o,transform:i,symbol:s,title:l,maskId:f,titleId:c,extra:u,watchable:b=!1}=t,{width:d,height:g}=n.found?n:e,_=a==="fak",y=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(O=>u.classes.indexOf(O)===-1).filter(O=>O!==""||!!O).concat(u.classes).join(" ");let N={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":o,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(g)}};const p=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/g*16*.0625,"em")}:{};b&&(N.attributes[U]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||st())},children:[l]}),delete N.attributes.title);const h={...N,prefix:a,iconName:o,main:e,mask:n,maskId:f,transform:i,symbol:s,styles:{...p,...u.styles}},{children:E,attributes:k}=n.found&&e.found?B("generateAbstractMask",h)||{children:[],attributes:{}}:B("generateAbstractIcon",h)||{children:[],attributes:{}};return h.children=E,h.attributes=k,s?Aa(h):Na(h)}function je(t){const{content:e,width:n,height:a,transform:o,title:i,extra:s,watchable:l=!1}=t,f={...s.attributes,...i?{title:i}:{},class:s.classes.join(" ")};l&&(f[U]="");const c={...s.styles};Tt(o)&&(c.transform=ia({transform:o,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);const u=dt(c);u.length>0&&(f.style=u);const b=[];return b.push({tag:"span",attributes:f,children:[e]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function wa(t){const{content:e,title:n,extra:a}=t,o={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=dt(a.styles);i.length>0&&(o.style=i);const s=[];return s.push({tag:"span",attributes:o,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Yt}=I;function Ht(t){const e=t[0],n=t[1],[a]=t.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(It.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(It.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(It.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}const Sa={found:!1,width:512,height:512};function Ca(t,e){!be&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gt(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=R()),new Promise((a,o)=>{if(n==="fa"){const i=Fe(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const i=Yt[e][t];return a(Ht(i))}Ca(t,e),a({...Sa,icon:m.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const Re=()=>{},Xt=m.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:Re,measure:Re},ct='FA "6.6.0"',Oa=t=>(Xt.mark("".concat(ct," ").concat(t," begins")),()=>Be(t)),Be=t=>{Xt.mark("".concat(ct," ").concat(t," ends")),Xt.measure("".concat(ct," ").concat(t),"".concat(ct," ").concat(t," begins"),"".concat(ct," ").concat(t," ends"))};var qt={begin:Oa,end:Be};const yt=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(U):null)=="string"}function Pa(t){const e=t.getAttribute?t.getAttribute(St):null,n=t.getAttribute?t.getAttribute(Ct):null;return e&&n}function La(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function Ia(){return m.autoReplaceSvg===!0?bt.replace:bt[m.autoReplaceSvg]||bt.replace}function za(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function Ta(t){return v.createElement(t)}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?za:Ta}=e;if(typeof t=="string")return v.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Ue(i,{ceFn:n}))}),a}function Ma(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const bt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ue(n),e)}),e.getAttribute(U)===null&&m.keepOriginalSource){let n=v.createComment(Ma(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~zt(e).indexOf(m.replacementClass))return bt.replace(t);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const o=n.map(i=>lt(i)).join(`
`);e.setAttribute(U,""),e.innerHTML=o}};function We(t){t()}function Ye(t,e){const n=typeof e=="function"?e:yt;if(t.length===0)n();else{let a=We;m.mutateApproach===Yn&&(a=V.requestAnimationFrame||We),a(()=>{const o=Ia(),i=qt.begin("mutate");t.map(o),i(),n()})}}let Kt=!1;function He(){Kt=!0}function Qt(){Kt=!1}let _t=null;function Ge(t){if(!le||!m.observeMutations)return;const{treeCallback:e=yt,nodeCallback:n=yt,pseudoElementsCallback:a=yt,observeMutationsRoot:o=v}=t;_t=new le(i=>{if(Kt)return;const s=R();Q(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!$e(l.addedNodes[0])&&(m.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&m.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&$e(l.target)&&~Qn.indexOf(l.attributeName))if(l.attributeName==="class"&&Pa(l.target)){const{prefix:f,iconName:c}=gt(zt(l.target));l.target.setAttribute(St,f||s),c&&l.target.setAttribute(Ct,c)}else La(l.target)&&n(l.target)})}),T&&_t.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Fa(){_t&&_t.disconnect()}function Va(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,o)=>{const i=o.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Da(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let o=gt(zt(t));return o.prefix||(o.prefix=R()),e&&n&&(o.prefix=e,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=ya(o.prefix,t.innerText)||Rt(o.prefix,Vt(t.innerText))),!o.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=t.firstChild.data)),o}function ja(t){const e=Q(t.attributes).reduce((o,i)=>(o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||st()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ra(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:o}=Da(t),i=ja(t),s=$t("parseNodeAttributes",{},t);let l=e.styleParser?Va(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i},...s}}const{styles:Ba}=I;function qe(t){const e=m.autoReplaceSvg==="nest"?Xe(t,{styleParser:!1}):Xe(t);return~e.extra.classes.indexOf(xe)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let z=new Set;_e.map(t=>{z.add("fa-".concat(t))}),Object.keys(W[x]).map(z.add.bind(z)),Object.keys(W[w]).map(z.add.bind(z)),Object.keys(W[S]).map(z.add.bind(z)),z=[...z];function Ke(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();const n=v.documentElement.classList,a=u=>n.add("".concat(ye,"-").concat(u)),o=u=>n.remove("".concat(ye,"-").concat(u)),i=m.autoFetchSvg?z:_e.map(u=>"fa-".concat(u)).concat(Object.keys(Ba));i.includes("fa")||i.push("fa");const s=[".".concat(xe,":not([").concat(U,"])")].concat(i.map(u=>".".concat(u,":not([").concat(U,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=Q(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),o("complete");else return Promise.resolve();const f=qt.begin("onTree"),c=l.reduce((u,b)=>{try{const d=qe(b);d&&u.push(d)}catch(d){be||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,b)=>{Promise.all(c).then(d=>{Ye(d,()=>{a("active"),a("complete"),o("pending"),typeof e=="function"&&e(),f(),u()})}).catch(d=>{f(),b(d)})})}function $a(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qe(t).then(n=>{n&&Ye([n],e)})}function Ua(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ut(e||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Ut(o||{})),t(a,{...n,mask:o})}}const Wa=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,symbol:a=!1,mask:o=null,maskId:i=null,title:s=null,titleId:l=null,classes:f=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:b,iconName:d,icon:g}=t;return ht({type:"icon",...t},()=>(G("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?c["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||st()):(c["aria-hidden"]="true",c.focusable="false")),Wt({icons:{main:Ht(g),mask:o?Ht(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:d,transform:{...L,...n},symbol:a,title:s,maskId:i,titleId:l,extra:{attributes:c,styles:u,classes:f}})))};var Ya={mixout(){return{icon:Ua(Wa)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ke,t.nodeCallback=$a,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:a=()=>{}}=e;return Ke(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:o,titleId:i,prefix:s,transform:l,symbol:f,mask:c,maskId:u,extra:b}=n;return new Promise((d,g)=>{Promise.all([Gt(a,s),c.iconName?Gt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(_=>{let[y,N]=_;d([e,Wt({icons:{main:y,mask:N},prefix:s,iconName:a,transform:l,symbol:f,maskId:u,title:o,titleId:i,extra:b,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:o,transform:i,styles:s}=e;const l=dt(s);l.length>0&&(a.style=l);let f;return Tt(i)&&(f=B("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),n.push(f||o.icon),{children:n,attributes:a}}}},Ha={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ht({type:"layer"},()=>{G("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(o=>{Array.isArray(o)?o.map(i=>{a=a.concat(i.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Ga={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:o={},styles:i={}}=e;return ht({type:"counter",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),wa({content:t.toString(),title:n,extra:{attributes:o,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},Xa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=L,title:a=null,classes:o=[],attributes:i={},styles:s={}}=e;return ht({type:"text",content:t},()=>(G("beforeDOMElementCreation",{content:t,params:e}),je({content:t,transform:{...L,...n},title:a,extra:{attributes:i,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...o]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:o,extra:i}=n;let s=null,l=null;if(ce){const f=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/f,l=c.height/f}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,je({content:e.innerHTML,width:s,height:l,transform:o,title:a,extra:i,watchable:!0})])}}};const qa=new RegExp('"',"ug"),Qe=[1105920,1112319],Ze={FontAwesome:{normal:"fas",400:"fas"},...zn,...In,...Bn},Zt=Object.keys(Ze).reduce((t,e)=>(t[e.toLowerCase()]=Ze[e],t),{}),Ka=Object.keys(Zt).reduce((t,e)=>{const n=Zt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Qa(t){const e=t.replace(qa,""),n=ua(e,0),a=n>=Qe[0]&&n<=Qe[1],o=e.length===2?e[0]===e[1]:!1;return{value:Vt(o?e[0]:e),isSecondary:a||o}}function Za(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),o=isNaN(a)?"normal":a;return(Zt[n]||{})[o]||Ka[n]}function Je(t,e){const n="".concat(Wn).concat(e.replace(":","-"));return new Promise((a,o)=>{if(t.getAttribute(n)!==null)return a();const s=Q(t.children).filter(d=>d.getAttribute(wt)===e)[0],l=V.getComputedStyle(t,e),f=l.getPropertyValue("font-family"),c=f.match(qn),u=l.getPropertyValue("font-weight"),b=l.getPropertyValue("content");if(s&&!c)return t.removeChild(s),a();if(c&&b!=="none"&&b!==""){const d=l.getPropertyValue("content");let g=Za(f,u);const{value:_,isSecondary:y}=Qa(d),N=c[0].startsWith("FontAwesome");let p=Rt(g,_),h=p;if(N){const E=ba(_);E.iconName&&E.prefix&&(p=E.iconName,g=E.prefix)}if(p&&!y&&(!s||s.getAttribute(St)!==g||s.getAttribute(Ct)!==h)){t.setAttribute(n,h),s&&t.removeChild(s);const E=Ra(),{extra:k}=E;k.attributes[wt]=e,Gt(p,g).then(O=>{const kt=Wt({...E,icons:{main:O,mask:Bt()},prefix:g,iconName:h,extra:k,watchable:!0}),X=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(X,t.firstChild):t.appendChild(X),X.outerHTML=kt.map(Do=>lt(Do)).join(`
`),t.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function Ja(t){return Promise.all([Je(t,"::before"),Je(t,"::after")])}function tr(t){return t.parentNode!==document.head&&!~Hn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function tn(t){if(T)return new Promise((e,n)=>{const a=Q(t.querySelectorAll("*")).filter(tr).map(Ja),o=qt.begin("searchPseudoElements");He(),Promise.all(a).then(()=>{o(),Qt(),e()}).catch(()=>{o(),Qt(),n()})})}var er={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=tn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;m.searchPseudoElements&&tn(n)}}};let en=!1;var nr={mixout(){return{dom:{unwatch(){He(),en=!0}}}},hooks(){return{bootstrap(){Ge($t("mutationObserverCallbacks",{}))},noAuto(){Fa()},watch(t){const{observeMutationsRoot:e}=t;en?Qt():Ge($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const nn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const o=a.toLowerCase().split("-"),i=o[0];let s=o.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var ar={mixout(){return{parse:{transform:t=>nn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=nn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:o,iconWidth:i}=e;const s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(c)},b={transform:"translate(".concat(i/2*-1," -256)")},d={outer:s,inner:u,path:b};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Jt={x:0,y:0,width:"100%",height:"100%"};function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function rr(t){return t.tag==="g"?t.children:[t]}var or={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?gt(n.split(" ").map(o=>o.trim())):Bt();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:o,mask:i,maskId:s,transform:l}=e;const{width:f,icon:c}=o,{width:u,icon:b}=i,d=oa({transform:l,containerWidth:u,iconWidth:f}),g={tag:"rect",attributes:{...Jt,fill:"white"}},_=c.children?{children:c.children.map(an)}:{},y={tag:"g",attributes:{...d.inner},children:[an({tag:c.tag,attributes:{...c.attributes,...d.path},..._})]},N={tag:"g",attributes:{...d.outer},children:[y]},p="mask-".concat(s||st()),h="clip-".concat(s||st()),E={tag:"mask",attributes:{...Jt,id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,N]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:rr(b)},E]};return n.push(k,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")"),...Jt}}),{children:n,attributes:a}}}},ir={provides(t){let e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...o,attributeName:"opacity"},s={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||s.children.push({tag:"animate",attributes:{...o,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(s),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},sr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},lr=[la,Ya,Ha,Ga,Xa,er,nr,ar,or,ir,sr];Ea(lr,{mixoutsTo:C}),C.noAuto;const rn=C.config,cr=C.library;C.dom;const vt=C.parse;C.findIconDefinition,C.toHtml;const fr=C.icon;C.layer;const ur=C.text;C.counter;const dr={prefix:"fas",iconName:"arrows-up-to-line",icon:[576,512,[],"e4c2","M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]},mr={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},pr={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},gr={prefix:"fas",iconName:"object-group",icon:[576,512,[],"f247","M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]},hr={prefix:"fas",iconName:"table-cells",icon:[512,512,["th"],"f00a","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]},yr={prefix:"fas",iconName:"grip-vertical",icon:[320,512,[],"f58e","M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]},br={prefix:"fas",iconName:"arrows-left-right-to-line",icon:[640,512,[],"e4ba","M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},_r={prefix:"fas",iconName:"grip",icon:[448,512,["grip-horizontal"],"f58d","M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]},vr={prefix:"fas",iconName:"expand",icon:[448,512,[],"f065","M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]},xr={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};function on(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?on(Object(n),!0).forEach(function(a){A(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):on(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Er(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kr(t){var e=Er(t,"string");return typeof e=="symbol"?e:e+""}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function A(t,e,n){return e=kr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Ar(t,e){if(t==null)return{};var n=Nr(t,e),a,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function te(t){return wr(t)||Sr(t)||Cr(t)||Or()}function wr(t){if(Array.isArray(t))return ee(t)}function Sr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Cr(t,e){if(t){if(typeof t=="string")return ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sn={exports:{}};(function(t){(function(e){var n=function(p,h,E){if(!c(h)||b(h)||d(h)||g(h)||f(h))return h;var k,O=0,kt=0;if(u(h))for(k=[],kt=h.length;O<kt;O++)k.push(n(p,h[O],E));else{k={};for(var X in h)Object.prototype.hasOwnProperty.call(h,X)&&(k[p(X,E)]=n(p,h[X],E))}return k},a=function(p,h){h=h||{};var E=h.separator||"_",k=h.split||/(?=[A-Z])/;return p.split(k).join(E)},o=function(p){return _(p)?p:(p=p.replace(/[\-_\s]+(.)?/g,function(h,E){return E?E.toUpperCase():""}),p.substr(0,1).toLowerCase()+p.substr(1))},i=function(p){var h=o(p);return h.substr(0,1).toUpperCase()+h.substr(1)},s=function(p,h){return a(p,h).toLowerCase()},l=Object.prototype.toString,f=function(p){return typeof p=="function"},c=function(p){return p===Object(p)},u=function(p){return l.call(p)=="[object Array]"},b=function(p){return l.call(p)=="[object Date]"},d=function(p){return l.call(p)=="[object RegExp]"},g=function(p){return l.call(p)=="[object Boolean]"},_=function(p){return p=p-0,p===p},y=function(p,h){var E=h&&"process"in h?h.process:h;return typeof E!="function"?p:function(k,O){return E(k,p,O)}},N={camelize:o,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(p,h){return n(y(o,h),p)},decamelizeKeys:function(p,h){return n(y(s,h),p,h)},pascalizeKeys:function(p,h){return n(y(i,h),p)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(Pr)})(sn);var Lr=sn.exports,Ir=["class","style"];function zr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),o=Lr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[o]=i,e},{})}function Tr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ne(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return ne(f)}),o=Object.keys(t.attributes||{}).reduce(function(f,c){var u=t.attributes[c];switch(c){case"class":f.class=Tr(u);break;case"style":f.style=zr(u);break;default:f.attrs[c]=u}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,l=Ar(n,Ir);return r.h(t.tag,P(P(P({},e),{},{class:o.class,style:P(P({},o.style),s)},o.attrs),l),a)}var ln=!1;try{ln=process.env.NODE_ENV==="production"}catch{}function Mr(){if(!ln&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ft(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?A({},t,e):{}}function Fr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},A(A(A(A(A(A(A(A(A(A(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),A(A(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function cn(t){if(t&&xt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(vt.icon)return vt.icon(t);if(t===null)return null;if(xt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Vr=r.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,o=r.computed(function(){return cn(e.icon)}),i=r.computed(function(){return ft("classes",Fr(e))}),s=r.computed(function(){return ft("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),l=r.computed(function(){return ft("mask",cn(e.mask))}),f=r.computed(function(){return fr(o.value,P(P(P(P({},i.value),s.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});r.watch(f,function(u){if(!u)return Mr("Could not find one or more icon(s)",o.value,l.value)},{immediate:!0});var c=r.computed(function(){return f.value?ne(f.value.abstract[0],{},a):null});return function(){return c.value}}});r.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,o=rn.familyPrefix,i=r.computed(function(){return["".concat(o,"-layers")].concat(te(e.fixedWidth?["".concat(o,"-fw")]:[]))});return function(){return r.h("div",{class:i.value},a.default?a.default():[])}}}),r.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,o=rn.familyPrefix,i=r.computed(function(){return ft("classes",[].concat(te(e.counter?["".concat(o,"-layers-counter")]:[]),te(e.position?["".concat(o,"-layers-").concat(e.position)]:[])))}),s=r.computed(function(){return ft("transform",typeof e.transform=="string"?vt.transform(e.transform):e.transform)}),l=r.computed(function(){var c=ur(e.value.toString(),P(P({},s.value),i.value)),u=c.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),f=r.computed(function(){return ne(l.value,{},a)});return function(){return f.value}}}),cr.add(xr,br,pr,dr,hr,gr,vr,_r,yr,mr);const Dr={install:t=>{t.component("simplisiti-component-editor",wn),t.component("fa-icon",Vr)}},jr=12,Rr=12,Et=t=>(r.pushScopeId("data-v-bcbcb3c5"),t=t(),r.popScopeId(),t),Br={class:"sp-layout__container"},$r={class:"sp-layout__header"},Ur={class:"sp-layout__body"},Wr={class:"sp-layout__body"},Yr={key:0,class:"sp-layout__grid-container"},Hr={class:"sp-layout__grid-item sp-layout__columns-container"},Gr={name:"",id:""},Xr=Et(()=>r.createElementVNode("option",{value:""},null,-1)),qr=["value"],Kr={class:"sp-layout__grid-item sp-layout__rows-container"},Qr={name:"",id:""},Zr=Et(()=>r.createElementVNode("option",{value:""},null,-1)),Jr=["value"],to={class:"sp-layout__horizontal-alignment-container"},eo=Et(()=>r.createElementVNode("label",null,"Horizontal",-1)),no={class:"sp-layout__buttons-container"},ao={class:"sp-layout__button__aligment"},ro={class:"sp-layout__button__aligment"},oo={class:"sp-layout__button__aligment"},io={class:"sp-layout__button__aligment"},so={class:"sp-layout__vertical-alignment-container"},lo=Et(()=>r.createElementVNode("label",null,"Vertical",-1)),co={class:"sp-layout__buttons-container"},fo={class:"sp-layout__button__aligment"},uo={class:"sp-layout__button__aligment"},mo={class:"sp-layout__button__aligment"},po=Object.freeze(Object.defineProperty({__proto__:null,default:et(r.defineComponent({__name:"Layout",props:{spClassList:{type:Array,default:[]}},emits:["update"],setup(t,{emit:e}){const n=t,a=r.ref(null),o=r.ref(null),i=r.ref(null),s=()=>{a.value=n.spClassList.find(d=>d.startsWith("sp-style__layout-display__")),o.value=n.spClassList.find(d=>d.startsWith("sp-style__layout-justify-content__")),i.value=n.spClassList.find(d=>d.startsWith("sp-style__layout-align-items__"))},l=e,f=d=>{const g=d==="rows"?jr:Rr,_=[];for(let y=0;y<g;y++)_.push(y+1);return _},c=r.computed(()=>f("columns")),u=r.computed(()=>f("rows")),b=()=>{const d=[a.value,o.value,i.value].filter(g=>g);l("update",d)};return r.onMounted(()=>{s()}),(d,g)=>{const _=r.resolveComponent("fa-icon");return r.openBlock(),r.createElementBlock("div",Br,[r.createElementVNode("div",$r,[r.createElementVNode("label",null,[r.withDirectives(r.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__flex","onUpdate:modelValue":g[0]||(g[0]=y=>a.value=y),onChange:b},null,544),[[r.vModelRadio,a.value]]),r.createVNode(_,{icon:"arrows-left-right"}),r.createTextVNode(" Flexible ")]),r.createElementVNode("label",null,[r.withDirectives(r.createElementVNode("input",{type:"radio",name:"display",value:"sp-style__layout-display__grid","onUpdate:modelValue":g[1]||(g[1]=y=>a.value=y),onChange:b},null,544),[[r.vModelRadio,a.value]]),r.createVNode(_,{icon:"table-cells"}),r.createTextVNode(" Tabla ")])]),r.createElementVNode("div",Ur,[r.createElementVNode("div",Wr,[a.value==="sp-style__layout-display__grid"?(r.openBlock(),r.createElementBlock("div",Yr,[r.createElementVNode("div",Hr,[r.createElementVNode("label",null,[r.createVNode(_,{icon:"grip"}),r.createTextVNode(" Columas ")]),r.createElementVNode("select",Gr,[Xr,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(c.value,y=>(r.openBlock(),r.createElementBlock("option",{key:y,value:`sp-style__layout-columns__${y}`},r.toDisplayString(y),9,qr))),128))])]),r.createElementVNode("div",Kr,[r.createElementVNode("label",null,[r.createVNode(_,{icon:"grip-vertical"}),r.createTextVNode(" Filas ")]),r.createElementVNode("select",Qr,[Zr,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(u.value,y=>(r.openBlock(),r.createElementBlock("option",{key:y,value:`sp-style__layout-rows__${y}`},r.toDisplayString(y),9,Jr))),128))])])])):r.createCommentVNode("",!0),r.createElementVNode("div",to,[eo,r.createElementVNode("div",no,[r.createElementVNode("label",ao,[r.createVNode(_,{icon:"arrows-up-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__start","onUpdate:modelValue":g[2]||(g[2]=y=>o.value=y),onChange:b},null,544),[[r.vModelRadio,o.value]])]),r.createElementVNode("label",ro,[r.createVNode(_,{icon:"arrows-left-right-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__center","onUpdate:modelValue":g[3]||(g[3]=y=>o.value=y),onChange:b},null,544),[[r.vModelRadio,o.value]])]),r.createElementVNode("label",oo,[r.createVNode(_,{icon:"arrows-up-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__end","onUpdate:modelValue":g[4]||(g[4]=y=>o.value=y),onChange:b},null,544),[[r.vModelRadio,o.value]])]),r.createElementVNode("label",io,[r.createVNode(_,{icon:"bars"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"horizontal",value:"sp-style__layout-justify-content__between","onUpdate:modelValue":g[5]||(g[5]=y=>o.value=y),onChange:b},null,544),[[r.vModelRadio,o.value]])])])]),r.createElementVNode("div",so,[lo,r.createElementVNode("div",co,[r.createElementVNode("label",fo,[r.createVNode(_,{icon:"arrows-up-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__start","onUpdate:modelValue":g[6]||(g[6]=y=>i.value=y),onChange:b},null,544),[[r.vModelRadio,i.value]])]),r.createElementVNode("label",uo,[r.createVNode(_,{icon:"arrows-left-right-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__center","onUpdate:modelValue":g[7]||(g[7]=y=>i.value=y),onChange:b},null,544),[[r.vModelRadio,i.value]])]),r.createElementVNode("label",mo,[r.createVNode(_,{icon:"arrows-up-to-line"}),r.withDirectives(r.createElementVNode("input",{type:"radio",name:"vertical",value:"sp-style__layout-align-items__end","onUpdate:modelValue":g[8]||(g[8]=y=>i.value=y),onChange:b},null,544),[[r.vModelRadio,i.value]])])])])])])])}}}),[["__scopeId","data-v-bcbcb3c5"]])},Symbol.toStringTag,{value:"Module"})),go=["0","1","2","3","4","5","6","7","8","9","10","11","12","14","16","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],$=t=>(r.pushScopeId("data-v-17ec4c84"),t=t(),r.popScopeId(),t),ho={class:"sp-spacing__container"},yo={class:"sp-spacing__select-container"},bo={class:"sp-spacing__select-item"},_o=$(()=>r.createElementVNode("label",null,"Arriba",-1)),vo=$(()=>r.createElementVNode("option",{value:""},null,-1)),xo=["value"],Eo={class:"sp-spacing__select-item"},ko=$(()=>r.createElementVNode("label",null,"Abajo",-1)),No=$(()=>r.createElementVNode("option",{value:""},null,-1)),Ao=["value"],wo={class:"sp-spacing__select-item"},So=$(()=>r.createElementVNode("label",null,"Izquierda",-1)),Co=$(()=>r.createElementVNode("option",{value:""},null,-1)),Oo=["value"],Po={class:"sp-spacing__select-item"},Lo=$(()=>r.createElementVNode("label",null,"Derecha",-1)),Io=$(()=>r.createElementVNode("option",{value:""},null,-1)),zo=["value"],fn=et(r.defineComponent({__name:"SpacingSelect",props:{title:{type:String,required:!0},type:{type:String,required:!0}},setup(t){const{type:e}=t,n=l=>go.map(f=>({value:`sp-spacing__${e}-${l}__${f}`,label:f})),a=r.computed(()=>n("top")),o=r.computed(()=>n("bottom")),i=r.computed(()=>n("left")),s=r.computed(()=>n("right"));return(l,f)=>(r.openBlock(),r.createElementBlock("div",ho,[r.createElementVNode("div",null,[r.createElementVNode("h2",null,r.toDisplayString(t.title),1)]),r.createElementVNode("div",yo,[r.createElementVNode("div",bo,[_o,r.createElementVNode("select",null,[vo,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(a.value,c=>(r.openBlock(),r.createElementBlock("option",{key:c.value,value:c.value},r.toDisplayString(c.label),9,xo))),128))])]),r.createElementVNode("div",Eo,[ko,r.createElementVNode("select",null,[No,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(o.value,c=>(r.openBlock(),r.createElementBlock("option",{key:c.value,value:c.value},r.toDisplayString(c.label),9,Ao))),128))])]),r.createElementVNode("div",wo,[So,r.createElementVNode("select",null,[Co,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(i.value,c=>(r.openBlock(),r.createElementBlock("option",{key:c.value,value:c.value},r.toDisplayString(c.label),9,Oo))),128))])]),r.createElementVNode("div",Po,[Lo,r.createElementVNode("select",null,[Io,(r.openBlock(!0),r.createElementBlock(r.Fragment,null,r.renderList(s.value,c=>(r.openBlock(),r.createElementBlock("option",{key:c.value,value:c.value},r.toDisplayString(c.label),9,zo))),128))])])])]))}}),[["__scopeId","data-v-17ec4c84"]]),To=t=>(r.pushScopeId("data-v-bd74e2b4"),t=t(),r.popScopeId(),t),Mo={class:"sp-spacing__container"},Fo=To(()=>r.createElementVNode("hr",{class:"sp-spacing__separator"},null,-1)),Vo=Object.freeze(Object.defineProperty({__proto__:null,default:et(r.defineComponent({__name:"Spacing",setup(t){return(e,n)=>(r.openBlock(),r.createElementBlock("div",Mo,[r.createVNode(fn,{title:"Margen",type:"margin"}),Fo,r.createVNode(fn,{title:"Padding",type:"padding"})]))}}),[["__scopeId","data-v-bd74e2b4"]])},Symbol.toStringTag,{value:"Module"}));return Dr});
