import { defineComponent as tt, shallowReactive as bn, onMounted as Xt, openBlock as V, createElementBlock as dt, Fragment as ie, createElementVNode as K, renderList as vn, unref as xn, createBlock as Le, resolveDynamicComponent as An, defineAsyncComponent as wn, ref as ht, computed as P, resolveComponent as kn, normalizeClass as _n, toDisplayString as On, createVNode as oe, withModifiers as Fe, createCommentVNode as Sn, watch as En, h as Me } from "vue";
const Pn = {
  div: "Contenedor",
  a: "Enlace"
}, Cn = {
  div: "container",
  a: "ancord"
}, Nn = {
  layout: {
    icon: "square-full",
    component: () => import("./Layout-BmUSNpFv.js")
  }
}, In = {
  container: [
    "layout"
  ],
  ancord: []
}, Tn = (t) => {
  const e = Cn[t];
  return In[e].map((a) => Nn[a]);
}, Ln = /* @__PURE__ */ K("div", { class: "sp-wizard-popup__tabs-container" }, [
  /* @__PURE__ */ K("div", { class: "sp-wizard-popup__tabs" })
], -1), Fn = { class: "sp-wizard-popup__content" }, Mn = { class: "sp-wizard-popup__content-header" }, zn = /* @__PURE__ */ tt({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  setup(t) {
    const { element: e } = t, n = bn([]), a = async () => {
      const r = Tn(e.tagName.toLowerCase());
      for (const i of r)
        n.push({
          component: wn(i.component),
          icon: i.icon
        });
    };
    return Xt(async () => {
      await a();
    }), (r, i) => (V(), dt(ie, null, [
      Ln,
      K("div", Fn, [
        (V(!0), dt(ie, null, vn(xn(n), (o) => (V(), dt("div", Mn, [
          (V(), Le(An(o.component)))
        ]))), 256))
      ])
    ], 64));
  }
}), Dn = { class: "sp-configuration-popup__header" }, Rn = { class: "sp-configuration-popup__body" }, jn = /* @__PURE__ */ tt({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = ht(null), r = ht(!1), i = e, o = (l) => {
      var v;
      if (!l) return;
      const f = l.getBoundingClientRect(), g = f.top, p = f.left + f.width + 10;
      if (a.value) {
        a.value.style.top = `${g}px`;
        const S = document.body.offsetWidth;
        (v = a.value.parentElement) != null && v.offsetWidth && p + a.value.offsetWidth > S ? (a.value.style.left = `${p - a.value.offsetWidth - 20}px`, a.value.style.top = `${g + 10}px`) : a.value.style.left = `${p}px`;
      }
    }, s = P(() => {
      var f;
      const l = (f = n == null ? void 0 : n.tagName) == null ? void 0 : f.toLowerCase();
      return l && Pn[l] || "Element";
    }), c = (l) => {
      r.value = !0, setTimeout(() => {
        i("close", l);
      }, 300);
    };
    return Xt(() => {
      o(n);
    }), (l, f) => {
      const g = kn("fa-icon");
      return V(), dt("div", {
        class: _n(["sp-configuration-popup", { "sp-configuration-popup_closed": r.value }]),
        ref_key: "popup",
        ref: a
      }, [
        K("div", Dn, [
          K("h4", null, On(s.value), 1),
          oe(g, {
            class: "sp-configuration-popup__close",
            icon: "times",
            onClick: f[0] || (f[0] = Fe((p) => c(p), ["stop"]))
          })
        ]),
        K("div", Rn, [
          oe(zn, { element: t.element }, null, 8, ["element"])
        ])
      ], 2);
    };
  }
}), Wn = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, Bn = /* @__PURE__ */ Wn(jn, [["__scopeId", "data-v-624333ac"]]), Un = /* @__PURE__ */ tt({
  __name: "App",
  setup(t) {
    const e = ht(!1), n = ht(null), a = (i) => {
      i.forEach((o) => {
        o.addEventListener("click", (s) => {
          e.value || (e.value = !0, n.value = o, o.classList.add("sp-element__active")), s.preventDefault(), s.stopPropagation();
        }), o.addEventListener("mouseover", (s) => {
          e.value || o.classList.add("sp-element__active"), s.preventDefault(), s.stopPropagation();
        }), o.addEventListener("mouseout", (s) => {
          e.value || o.classList.remove("sp-element__active"), s.preventDefault(), s.stopPropagation();
        });
      });
    }, r = () => {
      n.value && n.value.classList.remove("sp-element__active"), n.value = null, e.value = !1;
    };
    return Xt(() => {
      const i = document.querySelectorAll("div"), o = document.querySelectorAll("a");
      a(i), a(o);
    }), (i, o) => {
      var s;
      return e.value ? (V(), Le(Bn, {
        key: 0,
        element: n.value,
        type: (s = n.value) == null ? void 0 : s.tagName,
        onClose: Fe(r, ["stop"])
      }, null, 8, ["element", "type"])) : Sn("", !0);
    };
  }
}), se = () => {
};
let Gt = {}, ze = {}, De = null, Re = {
  mark: se,
  measure: se
};
try {
  typeof window < "u" && (Gt = window), typeof document < "u" && (ze = document), typeof MutationObserver < "u" && (De = MutationObserver), typeof performance < "u" && (Re = performance);
} catch {
}
const {
  userAgent: le = ""
} = Gt.navigator || {}, j = Gt, h = ze, ce = De, mt = Re;
j.document;
const z = !!h.documentElement && !!h.head && typeof h.addEventListener == "function" && typeof h.createElement == "function", je = ~le.indexOf("MSIE") || ~le.indexOf("Trident/");
var y = "classic", We = "duotone", k = "sharp", _ = "sharp-duotone", Yn = [y, We, k, _], Hn = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, fe = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $n = ["kit"], Xn = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Gn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Vn = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, qn = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, Kn = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, Qn = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Zn = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, Jn = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, Be = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, ta = ["solid", "regular", "light", "thin", "duotone", "brands"], Ue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ea = Ue.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), nt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, na = [...Object.keys(Qn), ...ta, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", nt.GROUP, nt.SWAP_OPACITY, nt.PRIMARY, nt.SECONDARY].concat(Ue.map((t) => "".concat(t, "x"))).concat(ea.map((t) => "w-".concat(t))), aa = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ra = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ia = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, ue = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const F = "___FONT_AWESOME___", Nt = 16, Ye = "fa", He = "svg-inline--fa", X = "data-fa-i2svg", It = "data-fa-pseudo-element", oa = "data-fa-pseudo-element-pending", Vt = "data-prefix", qt = "data-icon", me = "fontawesome-i2svg", sa = "async", la = ["HTML", "HEAD", "STYLE", "SCRIPT"], $e = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Xe = [y, k, _];
function ct(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[y];
    }
  });
}
const Ge = {
  ...Be
};
Ge[y] = {
  ...Be[y],
  ...fe.kit,
  ...fe["kit-duotone"]
};
const H = ct(Ge), Tt = {
  ...Jn
};
Tt[y] = {
  ...Tt[y],
  ...ue.kit,
  ...ue["kit-duotone"]
};
const st = ct(Tt), Lt = {
  ...Zn
};
Lt[y] = {
  ...Lt[y],
  ...ia.kit
};
const $ = ct(Lt), Ft = {
  ...Kn
};
Ft[y] = {
  ...Ft[y],
  ...ra.kit
};
const ca = ct(Ft), fa = Xn, Ve = "fa-layers-text", ua = Gn, ma = {
  ...Hn
};
ct(ma);
const da = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ot = nt, Z = /* @__PURE__ */ new Set();
Object.keys(st[y]).map(Z.add.bind(Z));
Object.keys(st[k]).map(Z.add.bind(Z));
Object.keys(st[_]).map(Z.add.bind(Z));
const pa = [...$n, ...na], rt = j.FontAwesomeConfig || {};
function ga(t) {
  var e = h.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function ha(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
h && typeof h.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = ha(ga(n));
  r != null && (rt[a] = r);
});
const qe = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Ye,
  replacementClass: He,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
rt.familyPrefix && (rt.cssPrefix = rt.familyPrefix);
const J = {
  ...qe,
  ...rt
};
J.autoReplaceSvg || (J.observeMutations = !1);
const u = {};
Object.keys(qe).forEach((t) => {
  Object.defineProperty(u, t, {
    enumerable: !0,
    set: function(e) {
      J[t] = e, it.forEach((n) => n(u));
    },
    get: function() {
      return J[t];
    }
  });
});
Object.defineProperty(u, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    J.cssPrefix = t, it.forEach((e) => e(u));
  },
  get: function() {
    return J.cssPrefix;
  }
});
j.FontAwesomeConfig = u;
const it = [];
function ya(t) {
  return it.push(t), () => {
    it.splice(it.indexOf(t), 1);
  };
}
const D = Nt, I = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ba(t) {
  if (!t || !z)
    return;
  const e = h.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = h.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
  }
  return h.head.insertBefore(e, a), t;
}
const va = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lt() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += va[Math.random() * 62 | 0];
  return e;
}
function et(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function Kt(t) {
  return t.classList ? et(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Ke(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function xa(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(Ke(t[n]), '" '), "").trim();
}
function At(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function Qt(t) {
  return t.size !== I.size || t.x !== I.x || t.y !== I.y || t.rotate !== I.rotate || t.flipX || t.flipY;
}
function Aa(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: a
  } = t;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, l = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: c,
    path: l
  };
}
function wa(t) {
  let {
    transform: e,
    width: n = Nt,
    height: a = Nt,
    startCentered: r = !1
  } = t, i = "";
  return r && je ? i += "translate(".concat(e.x / D - n / 2, "em, ").concat(e.y / D - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / D, "em), calc(-50% + ").concat(e.y / D, "em)) ") : i += "translate(".concat(e.x / D, "em, ").concat(e.y / D, "em) "), i += "scale(".concat(e.size / D * (e.flipX ? -1 : 1), ", ").concat(e.size / D * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i;
}
var ka = `:root, :host {
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
}`;
function Qe() {
  const t = Ye, e = He, n = u.cssPrefix, a = u.replacementClass;
  let r = ka;
  if (n !== t || a !== e) {
    const i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
let de = !1;
function St() {
  u.autoAddCss && !de && (ba(Qe()), de = !0);
}
var _a = {
  mixout() {
    return {
      dom: {
        css: Qe,
        insertCss: St
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        St();
      },
      beforeI2svg() {
        St();
      }
    };
  }
};
const M = j || {};
M[F] || (M[F] = {});
M[F].styles || (M[F].styles = {});
M[F].hooks || (M[F].hooks = {});
M[F].shims || (M[F].shims = []);
var T = M[F];
const Ze = [], Je = function() {
  h.removeEventListener("DOMContentLoaded", Je), yt = 1, Ze.map((t) => t());
};
let yt = !1;
z && (yt = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState), yt || h.addEventListener("DOMContentLoaded", Je));
function Oa(t) {
  z && (yt ? setTimeout(t, 0) : Ze.push(t));
}
function ft(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? Ke(t) : "<".concat(e, " ").concat(xa(n), ">").concat(a.map(ft).join(""), "</").concat(e, ">");
}
function pe(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var Et = function(e, n, a, r) {
  var i = Object.keys(e), o = i.length, s = n, c, l, f;
  for (a === void 0 ? (c = 1, f = e[i[0]]) : (c = 0, f = a); c < o; c++)
    l = i[c], f = s(f, e[l], l, e);
  return f;
};
function Sa(t) {
  const e = [];
  let n = 0;
  const a = t.length;
  for (; n < a; ) {
    const r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const i = t.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((r & 1023) << 10) + (i & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function Mt(t) {
  const e = Sa(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Ea(t, e) {
  const n = t.length;
  let a = t.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function ge(t) {
  return Object.keys(t).reduce((e, n) => {
    const a = t[n];
    return !!a.icon ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function zt(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = ge(e);
  typeof T.hooks.addPack == "function" && !a ? T.hooks.addPack(t, ge(e)) : T.styles[t] = {
    ...T.styles[t] || {},
    ...r
  }, t === "fas" && zt("fa", e);
}
const {
  styles: Y,
  shims: Pa
} = T, Ca = {
  [y]: Object.values($[y]),
  [k]: Object.values($[k]),
  [_]: Object.values($[_])
};
let Zt = null, tn = {}, en = {}, nn = {}, an = {}, rn = {};
const Na = {
  [y]: Object.keys(H[y]),
  [k]: Object.keys(H[k]),
  [_]: Object.keys(H[_])
};
function Ia(t) {
  return ~pa.indexOf(t);
}
function Ta(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Ia(r) ? r : null;
}
const on = () => {
  const t = (a) => Et(Y, (r, i, o) => (r[o] = Et(i, a, {}), r), {});
  tn = t((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((s) => typeof s == "number").forEach((s) => {
    a[s.toString(16)] = i;
  }), a)), en = t((a, r, i) => (a[i] = i, r[2] && r[2].filter((s) => typeof s == "string").forEach((s) => {
    a[s] = i;
  }), a)), rn = t((a, r, i) => {
    const o = r[2];
    return a[i] = i, o.forEach((s) => {
      a[s] = i;
    }), a;
  });
  const e = "far" in Y || u.autoFetchSvg, n = Et(Pa, (a, r) => {
    const i = r[0];
    let o = r[1];
    const s = r[2];
    return o === "far" && !e && (o = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: o,
      iconName: s
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: o,
      iconName: s
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  nn = n.names, an = n.unicodes, Zt = wt(u.styleDefault, {
    family: u.familyDefault
  });
};
ya((t) => {
  Zt = wt(t.styleDefault, {
    family: u.familyDefault
  });
});
on();
function Jt(t, e) {
  return (tn[t] || {})[e];
}
function La(t, e) {
  return (en[t] || {})[e];
}
function R(t, e) {
  return (rn[t] || {})[e];
}
function sn(t) {
  return nn[t] || {
    prefix: null,
    iconName: null
  };
}
function Fa(t) {
  const e = an[t], n = Jt("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function W() {
  return Zt;
}
const te = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function wt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = y
  } = e, a = H[n][t], r = st[n][t] || st[n][a], i = t in T.styles ? t : null;
  return r || i || null;
}
const Ma = {
  [y]: Object.keys($[y]),
  [k]: Object.keys($[k]),
  [_]: Object.keys($[_])
};
function kt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e, a = {
    [y]: "".concat(u.cssPrefix, "-").concat(y),
    [k]: "".concat(u.cssPrefix, "-").concat(k),
    [_]: "".concat(u.cssPrefix, "-").concat(_)
  };
  let r = null, i = y;
  const o = Yn.filter((c) => c !== We);
  o.forEach((c) => {
    (t.includes(a[c]) || t.some((l) => Ma[c].includes(l))) && (i = c);
  });
  const s = t.reduce((c, l) => {
    const f = Ta(u.cssPrefix, l);
    if (Y[l] ? (l = Ca[i].includes(l) ? ca[i][l] : l, r = l, c.prefix = l) : Na[i].indexOf(l) > -1 ? (r = l, c.prefix = wt(l, {
      family: i
    })) : f ? c.iconName = f : l !== u.replacementClass && !o.some((g) => l === a[g]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const g = r === "fa" ? sn(c.iconName) : {}, p = R(c.prefix, c.iconName);
      g.prefix && (r = null), c.iconName = g.iconName || p || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !Y.far && Y.fas && !u.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, te());
  return (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"), !s.prefix && i === k && (Y.fass || u.autoFetchSvg) && (s.prefix = "fass", s.iconName = R(s.prefix, s.iconName) || s.iconName), !s.prefix && i === _ && (Y.fasds || u.autoFetchSvg) && (s.prefix = "fasds", s.iconName = R(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || r === "fa") && (s.prefix = W() || "fas"), s;
}
class za {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((i) => {
      this.definitions[i] = {
        ...this.definitions[i] || {},
        ...r[i]
      }, zt(i, r[i]);
      const o = $[y][i];
      o && zt(o, r[i]), on();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(e, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: i,
        iconName: o,
        icon: s
      } = a[r], c = s[2];
      e[i] || (e[i] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (e[i][l] = s);
      }), e[i][o] = s;
    }), e;
  }
}
let he = [], q = {};
const Q = {}, Da = Object.keys(Q);
function Ra(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return he = t, q = {}, Object.keys(Q).forEach((a) => {
    Da.indexOf(a) === -1 && delete Q[a];
  }), he.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((o) => {
        n[i] || (n[i] = {}), n[i][o] = r[i][o];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((o) => {
        q[o] || (q[o] = []), q[o].push(i[o]);
      });
    }
    a.provides && a.provides(Q);
  }), n;
}
function Dt(t, e) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (q[t] || []).forEach((o) => {
    e = o.apply(null, [e, ...a]);
  }), e;
}
function G(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    n[a - 1] = arguments[a];
  (q[t] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function B() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return Q[t] ? Q[t].apply(null, e) : void 0;
}
function Rt(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || W();
  if (e)
    return e = R(n, e) || e, pe(ln.definitions, n, e) || pe(T.styles, n, e);
}
const ln = new za(), ja = () => {
  u.autoReplaceSvg = !1, u.observeMutations = !1, G("noAuto");
}, Wa = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return z ? (G("beforeI2svg", t), B("pseudoElements2svg", t), B("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    u.autoReplaceSvg === !1 && (u.autoReplaceSvg = !0), u.observeMutations = !0, Oa(() => {
      Ua({
        autoReplaceSvgRoot: e
      }), G("watch", t);
    });
  }
}, Ba = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: R(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = wt(t[0]);
      return {
        prefix: n,
        iconName: R(n, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(u.cssPrefix, "-")) > -1 || t.match(fa))) {
      const e = kt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || W(),
        iconName: R(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = W();
      return {
        prefix: e,
        iconName: R(e, t) || t
      };
    }
  }
}, O = {
  noAuto: ja,
  config: u,
  dom: Wa,
  parse: Ba,
  library: ln,
  findIconDefinition: Rt,
  toHtml: ft
}, Ua = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = h
  } = t;
  (Object.keys(T.styles).length > 0 || u.autoFetchSvg) && z && u.autoReplaceSvg && O.dom.i2svg({
    node: e
  });
};
function _t(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => ft(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!z) return;
      const n = h.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function Ya(t) {
  let {
    children: e,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: o
  } = t;
  if (Qt(o) && n.found && !a.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    r.style = At({
      ...i,
      "transform-origin": "".concat(l.x + o.x / 16, "em ").concat(l.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function Ha(t) {
  let {
    prefix: e,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = t;
  const o = i === !0 ? "".concat(e, "-").concat(u.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: o
      },
      children: a
    }]
  }];
}
function ee(t) {
  const {
    icons: {
      main: e,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: i,
    symbol: o,
    title: s,
    maskId: c,
    titleId: l,
    extra: f,
    watchable: g = !1
  } = t, {
    width: p,
    height: v
  } = n.found ? n : e, S = a === "fak", C = [u.replacementClass, r ? "".concat(u.cssPrefix, "-").concat(r) : ""].filter((E) => f.classes.indexOf(E) === -1).filter((E) => E !== "" || !!E).concat(f.classes).join(" ");
  let A = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: C,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(v)
    }
  };
  const m = S && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(p / v * 16 * 0.0625, "em")
  } : {};
  g && (A.attributes[X] = ""), s && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(l || lt())
    },
    children: [s]
  }), delete A.attributes.title);
  const d = {
    ...A,
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: c,
    transform: i,
    symbol: o,
    styles: {
      ...m,
      ...f.styles
    }
  }, {
    children: b,
    attributes: x
  } = n.found && e.found ? B("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : B("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  };
  return d.children = b, d.attributes = x, o ? Ha(d) : Ya(d);
}
function ye(t) {
  const {
    content: e,
    width: n,
    height: a,
    transform: r,
    title: i,
    extra: o,
    watchable: s = !1
  } = t, c = {
    ...o.attributes,
    ...i ? {
      title: i
    } : {},
    class: o.classes.join(" ")
  };
  s && (c[X] = "");
  const l = {
    ...o.styles
  };
  Qt(r) && (l.transform = wa({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), l["-webkit-transform"] = l.transform);
  const f = At(l);
  f.length > 0 && (c.style = f);
  const g = [];
  return g.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
function $a(t) {
  const {
    content: e,
    title: n,
    extra: a
  } = t, r = {
    ...a.attributes,
    ...n ? {
      title: n
    } : {},
    class: a.classes.join(" ")
  }, i = At(a.styles);
  i.length > 0 && (r.style = i);
  const o = [];
  return o.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: Pt
} = T;
function jt(t) {
  const e = t[0], n = t[1], [a] = t.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(u.cssPrefix, "-").concat(Ot.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(u.cssPrefix, "-").concat(Ot.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(u.cssPrefix, "-").concat(Ot.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : r = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: r
  };
}
const Xa = {
  found: !1,
  width: 512,
  height: 512
};
function Ga(t, e) {
  !$e && !u.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Wt(t, e) {
  let n = e;
  return e === "fa" && u.styleDefault !== null && (e = W()), new Promise((a, r) => {
    if (n === "fa") {
      const i = sn(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && Pt[e] && Pt[e][t]) {
      const i = Pt[e][t];
      return a(jt(i));
    }
    Ga(t, e), a({
      ...Xa,
      icon: u.showMissingIcons && t ? B("missingIconAbstract") || {} : {}
    });
  });
}
const be = () => {
}, Bt = u.measurePerformance && mt && mt.mark && mt.measure ? mt : {
  mark: be,
  measure: be
}, at = 'FA "6.6.0"', Va = (t) => (Bt.mark("".concat(at, " ").concat(t, " begins")), () => cn(t)), cn = (t) => {
  Bt.mark("".concat(at, " ").concat(t, " ends")), Bt.measure("".concat(at, " ").concat(t), "".concat(at, " ").concat(t, " begins"), "".concat(at, " ").concat(t, " ends"));
};
var ne = {
  begin: Va,
  end: cn
};
const pt = () => {
};
function ve(t) {
  return typeof (t.getAttribute ? t.getAttribute(X) : null) == "string";
}
function qa(t) {
  const e = t.getAttribute ? t.getAttribute(Vt) : null, n = t.getAttribute ? t.getAttribute(qt) : null;
  return e && n;
}
function Ka(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(u.replacementClass);
}
function Qa() {
  return u.autoReplaceSvg === !0 ? gt.replace : gt[u.autoReplaceSvg] || gt.replace;
}
function Za(t) {
  return h.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ja(t) {
  return h.createElement(t);
}
function fn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? Za : Ja
  } = e;
  if (typeof t == "string")
    return h.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(i) {
    a.setAttribute(i, t.attributes[i]);
  }), (t.children || []).forEach(function(i) {
    a.appendChild(fn(i, {
      ceFn: n
    }));
  }), a;
}
function tr(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const gt = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(fn(n), e);
      }), e.getAttribute(X) === null && u.keepOriginalSource) {
        let n = h.createComment(tr(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~Kt(e).indexOf(u.replacementClass))
      return gt.replace(t);
    const a = new RegExp("".concat(u.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, s) => (s === u.replacementClass || s.match(a) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => ft(i)).join(`
`);
    e.setAttribute(X, ""), e.innerHTML = r;
  }
};
function xe(t) {
  t();
}
function un(t, e) {
  const n = typeof e == "function" ? e : pt;
  if (t.length === 0)
    n();
  else {
    let a = xe;
    u.mutateApproach === sa && (a = j.requestAnimationFrame || xe), a(() => {
      const r = Qa(), i = ne.begin("mutate");
      t.map(r), i(), n();
    });
  }
}
let ae = !1;
function mn() {
  ae = !0;
}
function Ut() {
  ae = !1;
}
let bt = null;
function Ae(t) {
  if (!ce || !u.observeMutations)
    return;
  const {
    treeCallback: e = pt,
    nodeCallback: n = pt,
    pseudoElementsCallback: a = pt,
    observeMutationsRoot: r = h
  } = t;
  bt = new ce((i) => {
    if (ae) return;
    const o = W();
    et(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !ve(s.addedNodes[0]) && (u.searchPseudoElements && a(s.target), e(s.target)), s.type === "attributes" && s.target.parentNode && u.searchPseudoElements && a(s.target.parentNode), s.type === "attributes" && ve(s.target) && ~da.indexOf(s.attributeName))
        if (s.attributeName === "class" && qa(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = kt(Kt(s.target));
          s.target.setAttribute(Vt, c || o), l && s.target.setAttribute(qt, l);
        } else Ka(s.target) && n(s.target);
    });
  }), z && bt.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function er() {
  bt && bt.disconnect();
}
function nr(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((a, r) => {
    const i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function ar(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "";
  let r = kt(Kt(t));
  return r.prefix || (r.prefix = W()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = La(r.prefix, t.innerText) || Jt(r.prefix, Mt(t.innerText))), !r.iconName && u.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function rr(t) {
  const e = et(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return u.autoA11y && (n ? e["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(a || lt()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function ir() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: I,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function we(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = ar(t), i = rr(t), o = Dt("parseNodeAttributes", {}, t);
  let s = e.styleParser ? nr(t) : [];
  return {
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: I,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: s,
      attributes: i
    },
    ...o
  };
}
const {
  styles: or
} = T;
function dn(t) {
  const e = u.autoReplaceSvg === "nest" ? we(t, {
    styleParser: !1
  }) : we(t);
  return ~e.extra.classes.indexOf(Ve) ? B("generateLayersText", t, e) : B("generateSvgReplacementMutation", t, e);
}
let L = /* @__PURE__ */ new Set();
Xe.map((t) => {
  L.add("fa-".concat(t));
});
Object.keys(H[y]).map(L.add.bind(L));
Object.keys(H[k]).map(L.add.bind(L));
Object.keys(H[_]).map(L.add.bind(L));
L = [...L];
function ke(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!z) return Promise.resolve();
  const n = h.documentElement.classList, a = (f) => n.add("".concat(me, "-").concat(f)), r = (f) => n.remove("".concat(me, "-").concat(f)), i = u.autoFetchSvg ? L : Xe.map((f) => "fa-".concat(f)).concat(Object.keys(or));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(Ve, ":not([").concat(X, "])")].concat(i.map((f) => ".".concat(f, ":not([").concat(X, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = et(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const c = ne.begin("onTree"), l = s.reduce((f, g) => {
    try {
      const p = dn(g);
      p && f.push(p);
    } catch (p) {
      $e || p.name === "MissingIcon" && console.error(p);
    }
    return f;
  }, []);
  return new Promise((f, g) => {
    Promise.all(l).then((p) => {
      un(p, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), c(), f();
      });
    }).catch((p) => {
      c(), g(p);
    });
  });
}
function sr(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  dn(t).then((n) => {
    n && un([n], e);
  });
}
function lr(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || {}).icon ? e : Rt(e || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : Rt(r || {})), t(a, {
      ...n,
      mask: r
    });
  };
}
const cr = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = I,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: o = null,
    titleId: s = null,
    classes: c = [],
    attributes: l = {},
    styles: f = {}
  } = e;
  if (!t) return;
  const {
    prefix: g,
    iconName: p,
    icon: v
  } = t;
  return _t({
    type: "icon",
    ...t
  }, () => (G("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), u.autoA11y && (o ? l["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(s || lt()) : (l["aria-hidden"] = "true", l.focusable = "false")), ee({
    icons: {
      main: jt(v),
      mask: r ? jt(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: p,
    transform: {
      ...I,
      ...n
    },
    symbol: a,
    title: o,
    maskId: i,
    titleId: s,
    extra: {
      attributes: l,
      styles: f,
      classes: c
    }
  })));
};
var fr = {
  mixout() {
    return {
      icon: lr(cr)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = ke, t.nodeCallback = sr, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(e) {
      const {
        node: n = h,
        callback: a = () => {
        }
      } = e;
      return ke(n, a);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: o,
        transform: s,
        symbol: c,
        mask: l,
        maskId: f,
        extra: g
      } = n;
      return new Promise((p, v) => {
        Promise.all([Wt(a, o), l.iconName ? Wt(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((S) => {
          let [C, A] = S;
          p([e, ee({
            icons: {
              main: C,
              mask: A
            },
            prefix: o,
            iconName: a,
            transform: s,
            symbol: c,
            maskId: f,
            title: r,
            titleId: i,
            extra: g,
            watchable: !0
          })]);
        }).catch(v);
      });
    }, t.generateAbstractIcon = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: i,
        styles: o
      } = e;
      const s = At(o);
      s.length > 0 && (a.style = s);
      let c;
      return Qt(i) && (c = B("generateAbstractTransformGrouping", {
        main: r,
        transform: i,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(c || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, ur = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = e;
        return _t({
          type: "layer"
        }, () => {
          G("beforeDOMElementCreation", {
            assembler: t,
            params: e
          });
          let a = [];
          return t((r) => {
            Array.isArray(r) ? r.map((i) => {
              a = a.concat(i.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(u.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, mr = {
  mixout() {
    return {
      counter(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: i = {}
        } = e;
        return _t({
          type: "counter",
          content: t
        }, () => (G("beforeDOMElementCreation", {
          content: t,
          params: e
        }), $a({
          content: t.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(u.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, dr = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = I,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: o = {}
        } = e;
        return _t({
          type: "text",
          content: t
        }, () => (G("beforeDOMElementCreation", {
          content: t,
          params: e
        }), ye({
          content: t,
          transform: {
            ...I,
            ...n
          },
          title: a,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(u.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(t) {
    t.generateLayersText = function(e, n) {
      const {
        title: a,
        transform: r,
        extra: i
      } = n;
      let o = null, s = null;
      if (je) {
        const c = parseInt(getComputedStyle(e).fontSize, 10), l = e.getBoundingClientRect();
        o = l.width / c, s = l.height / c;
      }
      return u.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, ye({
        content: e.innerHTML,
        width: o,
        height: s,
        transform: r,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const pr = new RegExp('"', "ug"), _e = [1105920, 1112319], Oe = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...qn,
  ...Vn,
  ...aa
}, Yt = Object.keys(Oe).reduce((t, e) => (t[e.toLowerCase()] = Oe[e], t), {}), gr = Object.keys(Yt).reduce((t, e) => {
  const n = Yt[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function hr(t) {
  const e = t.replace(pr, ""), n = Ea(e, 0), a = n >= _e[0] && n <= _e[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Mt(r ? e[0] : e),
    isSecondary: a || r
  };
}
function yr(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(e), r = isNaN(a) ? "normal" : a;
  return (Yt[n] || {})[r] || gr[n];
}
function Se(t, e) {
  const n = "".concat(oa).concat(e.replace(":", "-"));
  return new Promise((a, r) => {
    if (t.getAttribute(n) !== null)
      return a();
    const o = et(t.children).filter((p) => p.getAttribute(It) === e)[0], s = j.getComputedStyle(t, e), c = s.getPropertyValue("font-family"), l = c.match(ua), f = s.getPropertyValue("font-weight"), g = s.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), a();
    if (l && g !== "none" && g !== "") {
      const p = s.getPropertyValue("content");
      let v = yr(c, f);
      const {
        value: S,
        isSecondary: C
      } = hr(p), A = l[0].startsWith("FontAwesome");
      let m = Jt(v, S), d = m;
      if (A) {
        const b = Fa(S);
        b.iconName && b.prefix && (m = b.iconName, v = b.prefix);
      }
      if (m && !C && (!o || o.getAttribute(Vt) !== v || o.getAttribute(qt) !== d)) {
        t.setAttribute(n, d), o && t.removeChild(o);
        const b = ir(), {
          extra: x
        } = b;
        x.attributes[It] = e, Wt(m, v).then((E) => {
          const ut = ee({
            ...b,
            icons: {
              main: E,
              mask: te()
            },
            prefix: v,
            iconName: d,
            extra: x,
            watchable: !0
          }), U = h.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(U, t.firstChild) : t.appendChild(U), U.outerHTML = ut.map((yn) => ft(yn)).join(`
`), t.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function br(t) {
  return Promise.all([Se(t, "::before"), Se(t, "::after")]);
}
function vr(t) {
  return t.parentNode !== document.head && !~la.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(It) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ee(t) {
  if (z)
    return new Promise((e, n) => {
      const a = et(t.querySelectorAll("*")).filter(vr).map(br), r = ne.begin("searchPseudoElements");
      mn(), Promise.all(a).then(() => {
        r(), Ut(), e();
      }).catch(() => {
        r(), Ut(), n();
      });
    });
}
var xr = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Ee, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = h
      } = e;
      u.searchPseudoElements && Ee(n);
    };
  }
};
let Pe = !1;
var Ar = {
  mixout() {
    return {
      dom: {
        unwatch() {
          mn(), Pe = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ae(Dt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        er();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        Pe ? Ut() : Ae(Dt("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const Ce = (t) => {
  let e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), i = r[0];
    let o = r.slice(1).join("-");
    if (i && o === "h")
      return n.flipX = !0, n;
    if (i && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + o;
        break;
      case "shrink":
        n.size = n.size - o;
        break;
      case "left":
        n.x = n.x - o;
        break;
      case "right":
        n.x = n.x + o;
        break;
      case "up":
        n.y = n.y - o;
        break;
      case "down":
        n.y = n.y + o;
        break;
      case "rotate":
        n.rotate = n.rotate + o;
        break;
    }
    return n;
  }, e);
};
var wr = {
  mixout() {
    return {
      parse: {
        transform: (t) => Ce(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = Ce(n)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(e) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: i
      } = e;
      const o = {
        transform: "translate(".concat(r / 2, " 256)")
      }, s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), l = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(s, " ").concat(c, " ").concat(l)
      }, g = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, p = {
        outer: o,
        inner: f,
        path: g
      };
      return {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...p.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...p.path
            }
          }]
        }]
      };
    };
  }
};
const Ct = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ne(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function kr(t) {
  return t.tag === "g" ? t.children : [t];
}
var _r = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), a = n ? kt(n.split(" ").map((r) => r.trim())) : te();
        return a.prefix || (a.prefix = W()), t.mask = a, t.maskId = e.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: i,
        maskId: o,
        transform: s
      } = e;
      const {
        width: c,
        icon: l
      } = r, {
        width: f,
        icon: g
      } = i, p = Aa({
        transform: s,
        containerWidth: f,
        iconWidth: c
      }), v = {
        tag: "rect",
        attributes: {
          ...Ct,
          fill: "white"
        }
      }, S = l.children ? {
        children: l.children.map(Ne)
      } : {}, C = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [Ne({
          tag: l.tag,
          attributes: {
            ...l.attributes,
            ...p.path
          },
          ...S
        })]
      }, A = {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [C]
      }, m = "mask-".concat(o || lt()), d = "clip-".concat(o || lt()), b = {
        tag: "mask",
        attributes: {
          ...Ct,
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [v, A]
      }, x = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: d
          },
          children: kr(g)
        }, b]
      };
      return n.push(x, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(d, ")"),
          mask: "url(#".concat(m, ")"),
          ...Ct
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Or = {
  provides(t) {
    let e = !1;
    j.matchMedia && (e = j.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      const n = [], a = {
        fill: "currentColor"
      }, r = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...a,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const i = {
        ...r,
        attributeName: "opacity"
      }, o = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return e || o.children.push({
        tag: "animate",
        attributes: {
          ...r,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...i,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(o), n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: e ? [] : [{
          tag: "animate",
          attributes: {
            ...i,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), e || n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...i,
            values: "0;0;1;1;0;0;"
          }
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Sr = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Er = [_a, fr, ur, mr, dr, xr, Ar, wr, _r, Or, Sr];
Ra(Er, {
  mixoutsTo: O
});
O.noAuto;
const pn = O.config, Pr = O.library;
O.dom;
const vt = O.parse;
O.findIconDefinition;
O.toHtml;
const Cr = O.icon;
O.layer;
const Nr = O.text;
O.counter;
const Ir = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Tr = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Lr = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Fr = {
  prefix: "fas",
  iconName: "square-full",
  icon: [512, 512, [128997, 128998, 128999, 129e3, 129001, 129002, 129003, 11035, 11036], "f45c", "M0 0H512V512H0V0z"]
};
function Ie(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function N(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ie(Object(n), !0).forEach(function(a) {
      w(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Mr(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function zr(t) {
  var e = Mr(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function xt(t) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xt(t);
}
function w(t, e, n) {
  return e = zr(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Dr(t, e) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      if (e.indexOf(a) >= 0) continue;
      n[a] = t[a];
    }
  return n;
}
function Rr(t, e) {
  if (t == null) return {};
  var n = Dr(t, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      a = i[r], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function Ht(t) {
  return jr(t) || Wr(t) || Br(t) || Ur();
}
function jr(t) {
  if (Array.isArray(t)) return $t(t);
}
function Wr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Br(t, e) {
  if (t) {
    if (typeof t == "string") return $t(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $t(t, e);
  }
}
function $t(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function Ur() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, gn = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(m, d, b) {
      if (!l(d) || g(d) || p(d) || v(d) || c(d))
        return d;
      var x, E = 0, ut = 0;
      if (f(d))
        for (x = [], ut = d.length; E < ut; E++)
          x.push(n(m, d[E], b));
      else {
        x = {};
        for (var U in d)
          Object.prototype.hasOwnProperty.call(d, U) && (x[m(U, b)] = n(m, d[U], b));
      }
      return x;
    }, a = function(m, d) {
      d = d || {};
      var b = d.separator || "_", x = d.split || /(?=[A-Z])/;
      return m.split(x).join(b);
    }, r = function(m) {
      return S(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(d, b) {
        return b ? b.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, i = function(m) {
      var d = r(m);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, o = function(m, d) {
      return a(m, d).toLowerCase();
    }, s = Object.prototype.toString, c = function(m) {
      return typeof m == "function";
    }, l = function(m) {
      return m === Object(m);
    }, f = function(m) {
      return s.call(m) == "[object Array]";
    }, g = function(m) {
      return s.call(m) == "[object Date]";
    }, p = function(m) {
      return s.call(m) == "[object RegExp]";
    }, v = function(m) {
      return s.call(m) == "[object Boolean]";
    }, S = function(m) {
      return m = m - 0, m === m;
    }, C = function(m, d) {
      var b = d && "process" in d ? d.process : d;
      return typeof b != "function" ? m : function(x, E) {
        return b(x, m, E);
      };
    }, A = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(m, d) {
        return n(C(r, d), m);
      },
      decamelizeKeys: function(m, d) {
        return n(C(o, d), m, d);
      },
      pascalizeKeys: function(m, d) {
        return n(C(i, d), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(Yr);
})(gn);
var Hr = gn.exports, $r = ["class", "style"];
function Xr(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = Hr.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return e[r] = i, e;
  }, {});
}
function Gr(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function re(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(c) {
    return re(c);
  }), r = Object.keys(t.attributes || {}).reduce(function(c, l) {
    var f = t.attributes[l];
    switch (l) {
      case "class":
        c.class = Gr(f);
        break;
      case "style":
        c.style = Xr(f);
        break;
      default:
        c.attrs[l] = f;
    }
    return c;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, s = Rr(n, $r);
  return Me(t.tag, N(N(N({}, e), {}, {
    class: r.class,
    style: N(N({}, r.style), o)
  }, r.attrs), s), a);
}
var hn = !1;
try {
  hn = process.env.NODE_ENV === "production";
} catch {
}
function Vr() {
  if (!hn && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function ot(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? w({}, t, e) : {};
}
function qr(t) {
  var e, n = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, w(w(w(w(w(w(w(w(w(w(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), w(w(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Te(t) {
  if (t && xt(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (vt.icon)
    return vt.icon(t);
  if (t === null)
    return null;
  if (xt(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var Kr = tt({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var a = n.attrs, r = P(function() {
      return Te(e.icon);
    }), i = P(function() {
      return ot("classes", qr(e));
    }), o = P(function() {
      return ot("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = P(function() {
      return ot("mask", Te(e.mask));
    }), c = P(function() {
      return Cr(r.value, N(N(N(N({}, i.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    En(c, function(f) {
      if (!f)
        return Vr("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var l = P(function() {
      return c.value ? re(c.value.abstract[0], {}, a) : null;
    });
    return function() {
      return l.value;
    };
  }
});
tt({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var a = n.slots, r = pn.familyPrefix, i = P(function() {
      return ["".concat(r, "-layers")].concat(Ht(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Me("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
tt({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, n) {
    var a = n.attrs, r = pn.familyPrefix, i = P(function() {
      return ot("classes", [].concat(Ht(e.counter ? ["".concat(r, "-layers-counter")] : []), Ht(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), o = P(function() {
      return ot("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = P(function() {
      var l = Nr(e.value.toString(), N(N({}, o.value), i.value)), f = l.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), c = P(function() {
      return re(s.value, {}, a);
    });
    return function() {
      return c.value;
    };
  }
});
Pr.add(
  Lr,
  Tr,
  Ir,
  Fr
);
const Zr = {
  install: (t) => {
    t.component("simplisiti-component-editor", Un), t.component("fa-icon", Kr);
  }
};
export {
  Wn as _,
  Zr as m
};
