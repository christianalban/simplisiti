import { defineComponent as tt, shallowReactive as An, shallowRef as wn, onMounted as Te, resolveComponent as Le, openBlock as $, createElementBlock as dt, Fragment as ie, createElementVNode as j, renderList as _n, unref as kn, createVNode as ze, createBlock as Gt, resolveDynamicComponent as On, defineAsyncComponent as Sn, ref as ht, computed as C, normalizeClass as En, withModifiers as Me, toDisplayString as Pn, createCommentVNode as Fe, watch as Cn, h as De } from "vue";
const Nn = {
  div: "Contenedor",
  a: "Enlace"
}, In = {
  div: "container",
  a: "ancord"
}, Tn = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-DFPeg1m-.js")
  }
}, Ln = {
  container: [
    "layout"
  ],
  ancord: []
}, zn = (t) => {
  const e = In[t];
  return Ln[e].map((a) => Tn[a]);
}, Mn = { class: "sp-wizard-popup__tabs-container" }, Fn = { class: "sp-wizard-popup__tabs" }, Dn = { class: "sp-wizard-popup__tab" }, jn = ["title", "onClick"], Rn = { class: "sp-wizard-popup__content" }, Wn = { class: "sp-wizard-popup__content-header" }, Un = /* @__PURE__ */ tt({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  setup(t) {
    const { element: e } = t, n = An([]), a = wn(null), r = async () => {
      const s = zn(e.tagName.toLowerCase());
      for (const l of s)
        n.push({
          component: Sn(l.component),
          icon: l.icon,
          title: l.title
        });
    }, i = (s) => {
      a.value = s.component;
    }, o = () => {
      n.length > 0 && i(n[0]);
    };
    return Te(async () => {
      await r(), o();
    }), (s, l) => {
      const c = Le("fa-icon");
      return $(), dt(ie, null, [
        j("div", Mn, [
          j("div", Fn, [
            ($(!0), dt(ie, null, _n(kn(n), (f) => ($(), dt("div", Dn, [
              j("button", {
                class: "sp-wizard-popup__tab-button",
                title: f.title,
                onClick: (g) => i(f)
              }, [
                ze(c, {
                  icon: f.icon
                }, null, 8, ["icon"])
              ], 8, jn)
            ]))), 256))
          ])
        ]),
        j("div", Rn, [
          j("div", Wn, [
            ($(), Gt(On(a.value)))
          ])
        ])
      ], 64);
    };
  }
}), je = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, Bn = /* @__PURE__ */ je(Un, [["__scopeId", "data-v-e6ae1dee"]]), Yn = { class: "sp-configuration-popup__header" }, Hn = { class: "sp-configuration-popup__body" }, $n = /* @__PURE__ */ tt({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = ht(null), r = ht(!1), i = e, o = (c) => {
      setTimeout(() => {
        if (!c) return;
        const f = c.getBoundingClientRect(), g = f.top, p = f.bottom, v = f.left + f.width + 10;
        if (a.value) {
          a.value.style.top = `${g}px`, a.value.style.left = `${v}px`;
          const E = document.body.offsetWidth;
          v + a.value.offsetWidth > E && (a.value.style.top = `${g + 10}px`, a.value.style.left = `${v - a.value.offsetWidth - 20}px`);
          const _ = document.body.offsetHeight;
          g + a.value.offsetHeight > _ && (a.value.style.top = "auto", a.value.style.bottom = `${p - a.value.offsetHeight + 20}px`);
        }
      }, 50);
    }, s = C(() => {
      var f;
      const c = (f = n == null ? void 0 : n.tagName) == null ? void 0 : f.toLowerCase();
      return c && Nn[c] || "Element";
    }), l = (c) => {
      r.value = !0, setTimeout(() => {
        i("close", c);
      }, 300);
    };
    return o(n), (c, f) => {
      const g = Le("fa-icon");
      return $(), dt("div", {
        class: En(["sp-configuration-popup", { "sp-configuration-popup_closed": r.value }]),
        ref_key: "popup",
        ref: a,
        onClick: Me((p) => {
        }, ["stop"])
      }, [
        j("div", Yn, [
          j("h4", null, Pn(s.value), 1),
          ze(g, {
            class: "sp-configuration-popup__close",
            icon: "times",
            onClick: f[0] || (f[0] = (p) => l(p))
          })
        ]),
        j("div", Hn, [
          t.element ? ($(), Gt(Bn, {
            key: 0,
            element: t.element
          }, null, 8, ["element"])) : Fe("", !0)
        ])
      ], 2);
    };
  }
}), Gn = /* @__PURE__ */ je($n, [["__scopeId", "data-v-fe4e3906"]]), Xn = /* @__PURE__ */ tt({
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
    return Te(() => {
      const i = document.querySelectorAll("div"), o = document.querySelectorAll("a");
      a(i), a(o);
    }), (i, o) => {
      var s;
      return e.value ? ($(), Gt(Gn, {
        key: 0,
        element: n.value,
        type: (s = n.value) == null ? void 0 : s.tagName,
        onClose: Me(r, ["stop"])
      }, null, 8, ["element", "type"])) : Fe("", !0);
    };
  }
}), oe = () => {
};
let Xt = {}, Re = {}, We = null, Ue = {
  mark: oe,
  measure: oe
};
try {
  typeof window < "u" && (Xt = window), typeof document < "u" && (Re = document), typeof MutationObserver < "u" && (We = MutationObserver), typeof performance < "u" && (Ue = performance);
} catch {
}
const {
  userAgent: se = ""
} = Xt.navigator || {}, W = Xt, h = Re, le = We, mt = Ue;
W.document;
const F = !!h.documentElement && !!h.head && typeof h.addEventListener == "function" && typeof h.createElement == "function", Be = ~se.indexOf("MSIE") || ~se.indexOf("Trident/");
var y = "classic", Ye = "duotone", k = "sharp", O = "sharp-duotone", Vn = [y, Ye, k, O], Kn = {
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
}, ce = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, qn = ["kit"], Qn = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Zn = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Jn = {
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
}, ta = {
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
}, ea = {
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
}, na = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, aa = {
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
}, ra = {
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
}, He = {
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
}, ia = ["solid", "regular", "light", "thin", "duotone", "brands"], $e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oa = $e.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), nt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sa = [...Object.keys(na), ...ia, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", nt.GROUP, nt.SWAP_OPACITY, nt.PRIMARY, nt.SECONDARY].concat($e.map((t) => "".concat(t, "x"))).concat(oa.map((t) => "w-".concat(t))), la = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ca = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, fa = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, fe = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const z = "___FONT_AWESOME___", Nt = 16, Ge = "fa", Xe = "svg-inline--fa", V = "data-fa-i2svg", It = "data-fa-pseudo-element", ua = "data-fa-pseudo-element-pending", Vt = "data-prefix", Kt = "data-icon", ue = "fontawesome-i2svg", ma = "async", da = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ve = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Ke = [y, k, O];
function ct(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[y];
    }
  });
}
const qe = {
  ...He
};
qe[y] = {
  ...He[y],
  ...ce.kit,
  ...ce["kit-duotone"]
};
const G = ct(qe), Tt = {
  ...ra
};
Tt[y] = {
  ...Tt[y],
  ...fe.kit,
  ...fe["kit-duotone"]
};
const st = ct(Tt), Lt = {
  ...aa
};
Lt[y] = {
  ...Lt[y],
  ...fa.kit
};
const X = ct(Lt), zt = {
  ...ea
};
zt[y] = {
  ...zt[y],
  ...ca.kit
};
const pa = ct(zt), ga = Qn, Qe = "fa-layers-text", ha = Zn, ya = {
  ...Kn
};
ct(ya);
const ba = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ot = nt, Z = /* @__PURE__ */ new Set();
Object.keys(st[y]).map(Z.add.bind(Z));
Object.keys(st[k]).map(Z.add.bind(Z));
Object.keys(st[O]).map(Z.add.bind(Z));
const va = [...qn, ...sa], rt = W.FontAwesomeConfig || {};
function xa(t) {
  var e = h.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function Aa(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
h && typeof h.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = Aa(xa(n));
  r != null && (rt[a] = r);
});
const Ze = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Ge,
  replacementClass: Xe,
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
  ...Ze,
  ...rt
};
J.autoReplaceSvg || (J.observeMutations = !1);
const u = {};
Object.keys(Ze).forEach((t) => {
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
W.FontAwesomeConfig = u;
const it = [];
function wa(t) {
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
function _a(t) {
  if (!t || !F)
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
const ka = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lt() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += ka[Math.random() * 62 | 0];
  return e;
}
function et(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function qt(t) {
  return t.classList ? et(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Je(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(Je(t[n]), '" '), "").trim();
}
function At(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function Qt(t) {
  return t.size !== I.size || t.x !== I.x || t.y !== I.y || t.rotate !== I.rotate || t.flipX || t.flipY;
}
function Sa(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: a
  } = t;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function Ea(t) {
  let {
    transform: e,
    width: n = Nt,
    height: a = Nt,
    startCentered: r = !1
  } = t, i = "";
  return r && Be ? i += "translate(".concat(e.x / D - n / 2, "em, ").concat(e.y / D - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / D, "em), calc(-50% + ").concat(e.y / D, "em)) ") : i += "translate(".concat(e.x / D, "em, ").concat(e.y / D, "em) "), i += "scale(".concat(e.size / D * (e.flipX ? -1 : 1), ", ").concat(e.size / D * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i;
}
var Pa = `:root, :host {
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
function tn() {
  const t = Ge, e = Xe, n = u.cssPrefix, a = u.replacementClass;
  let r = Pa;
  if (n !== t || a !== e) {
    const i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
let me = !1;
function St() {
  u.autoAddCss && !me && (_a(tn()), me = !0);
}
var Ca = {
  mixout() {
    return {
      dom: {
        css: tn,
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
const M = W || {};
M[z] || (M[z] = {});
M[z].styles || (M[z].styles = {});
M[z].hooks || (M[z].hooks = {});
M[z].shims || (M[z].shims = []);
var T = M[z];
const en = [], nn = function() {
  h.removeEventListener("DOMContentLoaded", nn), yt = 1, en.map((t) => t());
};
let yt = !1;
F && (yt = (h.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(h.readyState), yt || h.addEventListener("DOMContentLoaded", nn));
function Na(t) {
  F && (yt ? setTimeout(t, 0) : en.push(t));
}
function ft(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? Je(t) : "<".concat(e, " ").concat(Oa(n), ">").concat(a.map(ft).join(""), "</").concat(e, ">");
}
function de(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var Et = function(e, n, a, r) {
  var i = Object.keys(e), o = i.length, s = n, l, c, f;
  for (a === void 0 ? (l = 1, f = e[i[0]]) : (l = 0, f = a); l < o; l++)
    c = i[l], f = s(f, e[c], c, e);
  return f;
};
function Ia(t) {
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
  const e = Ia(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Ta(t, e) {
  const n = t.length;
  let a = t.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function pe(t) {
  return Object.keys(t).reduce((e, n) => {
    const a = t[n];
    return !!a.icon ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function Ft(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = pe(e);
  typeof T.hooks.addPack == "function" && !a ? T.hooks.addPack(t, pe(e)) : T.styles[t] = {
    ...T.styles[t] || {},
    ...r
  }, t === "fas" && Ft("fa", e);
}
const {
  styles: H,
  shims: La
} = T, za = {
  [y]: Object.values(X[y]),
  [k]: Object.values(X[k]),
  [O]: Object.values(X[O])
};
let Zt = null, an = {}, rn = {}, on = {}, sn = {}, ln = {};
const Ma = {
  [y]: Object.keys(G[y]),
  [k]: Object.keys(G[k]),
  [O]: Object.keys(G[O])
};
function Fa(t) {
  return ~va.indexOf(t);
}
function Da(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Fa(r) ? r : null;
}
const cn = () => {
  const t = (a) => Et(H, (r, i, o) => (r[o] = Et(i, a, {}), r), {});
  an = t((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((s) => typeof s == "number").forEach((s) => {
    a[s.toString(16)] = i;
  }), a)), rn = t((a, r, i) => (a[i] = i, r[2] && r[2].filter((s) => typeof s == "string").forEach((s) => {
    a[s] = i;
  }), a)), ln = t((a, r, i) => {
    const o = r[2];
    return a[i] = i, o.forEach((s) => {
      a[s] = i;
    }), a;
  });
  const e = "far" in H || u.autoFetchSvg, n = Et(La, (a, r) => {
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
  on = n.names, sn = n.unicodes, Zt = wt(u.styleDefault, {
    family: u.familyDefault
  });
};
wa((t) => {
  Zt = wt(t.styleDefault, {
    family: u.familyDefault
  });
});
cn();
function Jt(t, e) {
  return (an[t] || {})[e];
}
function ja(t, e) {
  return (rn[t] || {})[e];
}
function R(t, e) {
  return (ln[t] || {})[e];
}
function fn(t) {
  return on[t] || {
    prefix: null,
    iconName: null
  };
}
function Ra(t) {
  const e = sn[t], n = Jt("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function U() {
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
  } = e, a = G[n][t], r = st[n][t] || st[n][a], i = t in T.styles ? t : null;
  return r || i || null;
}
const Wa = {
  [y]: Object.keys(X[y]),
  [k]: Object.keys(X[k]),
  [O]: Object.keys(X[O])
};
function _t(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e, a = {
    [y]: "".concat(u.cssPrefix, "-").concat(y),
    [k]: "".concat(u.cssPrefix, "-").concat(k),
    [O]: "".concat(u.cssPrefix, "-").concat(O)
  };
  let r = null, i = y;
  const o = Vn.filter((l) => l !== Ye);
  o.forEach((l) => {
    (t.includes(a[l]) || t.some((c) => Wa[l].includes(c))) && (i = l);
  });
  const s = t.reduce((l, c) => {
    const f = Da(u.cssPrefix, c);
    if (H[c] ? (c = za[i].includes(c) ? pa[i][c] : c, r = c, l.prefix = c) : Ma[i].indexOf(c) > -1 ? (r = c, l.prefix = wt(c, {
      family: i
    })) : f ? l.iconName = f : c !== u.replacementClass && !o.some((g) => c === a[g]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const g = r === "fa" ? fn(l.iconName) : {}, p = R(l.prefix, l.iconName);
      g.prefix && (r = null), l.iconName = g.iconName || p || l.iconName, l.prefix = g.prefix || l.prefix, l.prefix === "far" && !H.far && H.fas && !u.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, te());
  return (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"), !s.prefix && i === k && (H.fass || u.autoFetchSvg) && (s.prefix = "fass", s.iconName = R(s.prefix, s.iconName) || s.iconName), !s.prefix && i === O && (H.fasds || u.autoFetchSvg) && (s.prefix = "fasds", s.iconName = R(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || r === "fa") && (s.prefix = U() || "fas"), s;
}
class Ua {
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
      }, Ft(i, r[i]);
      const o = X[y][i];
      o && Ft(o, r[i]), cn();
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
      } = a[r], l = s[2];
      e[i] || (e[i] = {}), l.length > 0 && l.forEach((c) => {
        typeof c == "string" && (e[i][c] = s);
      }), e[i][o] = s;
    }), e;
  }
}
let ge = [], q = {};
const Q = {}, Ba = Object.keys(Q);
function Ya(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return ge = t, q = {}, Object.keys(Q).forEach((a) => {
    Ba.indexOf(a) === -1 && delete Q[a];
  }), ge.forEach((a) => {
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
function K(t) {
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
function jt(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || U();
  if (e)
    return e = R(n, e) || e, de(un.definitions, n, e) || de(T.styles, n, e);
}
const un = new Ua(), Ha = () => {
  u.autoReplaceSvg = !1, u.observeMutations = !1, K("noAuto");
}, $a = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return F ? (K("beforeI2svg", t), B("pseudoElements2svg", t), B("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    u.autoReplaceSvg === !1 && (u.autoReplaceSvg = !0), u.observeMutations = !0, Na(() => {
      Xa({
        autoReplaceSvgRoot: e
      }), K("watch", t);
    });
  }
}, Ga = {
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
    if (typeof t == "string" && (t.indexOf("".concat(u.cssPrefix, "-")) > -1 || t.match(ga))) {
      const e = _t(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || U(),
        iconName: R(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = U();
      return {
        prefix: e,
        iconName: R(e, t) || t
      };
    }
  }
}, S = {
  noAuto: Ha,
  config: u,
  dom: $a,
  parse: Ga,
  library: un,
  findIconDefinition: jt,
  toHtml: ft
}, Xa = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = h
  } = t;
  (Object.keys(T.styles).length > 0 || u.autoFetchSvg) && F && u.autoReplaceSvg && S.dom.i2svg({
    node: e
  });
};
function kt(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => ft(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!F) return;
      const n = h.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function Va(t) {
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
      height: l
    } = n, c = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = At({
      ...i,
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function Ka(t) {
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
    maskId: l,
    titleId: c,
    extra: f,
    watchable: g = !1
  } = t, {
    width: p,
    height: v
  } = n.found ? n : e, E = a === "fak", _ = [u.replacementClass, r ? "".concat(u.cssPrefix, "-").concat(r) : ""].filter((P) => f.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(f.classes).join(" ");
  let A = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: _,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(v)
    }
  };
  const m = E && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(p / v * 16 * 0.0625, "em")
  } : {};
  g && (A.attributes[V] = ""), s && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || lt())
    },
    children: [s]
  }), delete A.attributes.title);
  const d = {
    ...A,
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: l,
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
  return d.children = b, d.attributes = x, o ? Ka(d) : Va(d);
}
function he(t) {
  const {
    content: e,
    width: n,
    height: a,
    transform: r,
    title: i,
    extra: o,
    watchable: s = !1
  } = t, l = {
    ...o.attributes,
    ...i ? {
      title: i
    } : {},
    class: o.classes.join(" ")
  };
  s && (l[V] = "");
  const c = {
    ...o.styles
  };
  Qt(r) && (c.transform = Ea({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const f = At(c);
  f.length > 0 && (l.style = f);
  const g = [];
  return g.push({
    tag: "span",
    attributes: l,
    children: [e]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
function qa(t) {
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
function Rt(t) {
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
const Qa = {
  found: !1,
  width: 512,
  height: 512
};
function Za(t, e) {
  !Ve && !u.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Wt(t, e) {
  let n = e;
  return e === "fa" && u.styleDefault !== null && (e = U()), new Promise((a, r) => {
    if (n === "fa") {
      const i = fn(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && Pt[e] && Pt[e][t]) {
      const i = Pt[e][t];
      return a(Rt(i));
    }
    Za(t, e), a({
      ...Qa,
      icon: u.showMissingIcons && t ? B("missingIconAbstract") || {} : {}
    });
  });
}
const ye = () => {
}, Ut = u.measurePerformance && mt && mt.mark && mt.measure ? mt : {
  mark: ye,
  measure: ye
}, at = 'FA "6.6.0"', Ja = (t) => (Ut.mark("".concat(at, " ").concat(t, " begins")), () => mn(t)), mn = (t) => {
  Ut.mark("".concat(at, " ").concat(t, " ends")), Ut.measure("".concat(at, " ").concat(t), "".concat(at, " ").concat(t, " begins"), "".concat(at, " ").concat(t, " ends"));
};
var ne = {
  begin: Ja,
  end: mn
};
const pt = () => {
};
function be(t) {
  return typeof (t.getAttribute ? t.getAttribute(V) : null) == "string";
}
function tr(t) {
  const e = t.getAttribute ? t.getAttribute(Vt) : null, n = t.getAttribute ? t.getAttribute(Kt) : null;
  return e && n;
}
function er(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(u.replacementClass);
}
function nr() {
  return u.autoReplaceSvg === !0 ? gt.replace : gt[u.autoReplaceSvg] || gt.replace;
}
function ar(t) {
  return h.createElementNS("http://www.w3.org/2000/svg", t);
}
function rr(t) {
  return h.createElement(t);
}
function dn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? ar : rr
  } = e;
  if (typeof t == "string")
    return h.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(i) {
    a.setAttribute(i, t.attributes[i]);
  }), (t.children || []).forEach(function(i) {
    a.appendChild(dn(i, {
      ceFn: n
    }));
  }), a;
}
function ir(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const gt = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(dn(n), e);
      }), e.getAttribute(V) === null && u.keepOriginalSource) {
        let n = h.createComment(ir(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~qt(e).indexOf(u.replacementClass))
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
    e.setAttribute(V, ""), e.innerHTML = r;
  }
};
function ve(t) {
  t();
}
function pn(t, e) {
  const n = typeof e == "function" ? e : pt;
  if (t.length === 0)
    n();
  else {
    let a = ve;
    u.mutateApproach === ma && (a = W.requestAnimationFrame || ve), a(() => {
      const r = nr(), i = ne.begin("mutate");
      t.map(r), i(), n();
    });
  }
}
let ae = !1;
function gn() {
  ae = !0;
}
function Bt() {
  ae = !1;
}
let bt = null;
function xe(t) {
  if (!le || !u.observeMutations)
    return;
  const {
    treeCallback: e = pt,
    nodeCallback: n = pt,
    pseudoElementsCallback: a = pt,
    observeMutationsRoot: r = h
  } = t;
  bt = new le((i) => {
    if (ae) return;
    const o = U();
    et(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !be(s.addedNodes[0]) && (u.searchPseudoElements && a(s.target), e(s.target)), s.type === "attributes" && s.target.parentNode && u.searchPseudoElements && a(s.target.parentNode), s.type === "attributes" && be(s.target) && ~ba.indexOf(s.attributeName))
        if (s.attributeName === "class" && tr(s.target)) {
          const {
            prefix: l,
            iconName: c
          } = _t(qt(s.target));
          s.target.setAttribute(Vt, l || o), c && s.target.setAttribute(Kt, c);
        } else er(s.target) && n(s.target);
    });
  }), F && bt.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function or() {
  bt && bt.disconnect();
}
function sr(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((a, r) => {
    const i = r.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (a[o] = s.join(":").trim()), a;
  }, {})), n;
}
function lr(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "";
  let r = _t(qt(t));
  return r.prefix || (r.prefix = U()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = ja(r.prefix, t.innerText) || Jt(r.prefix, Mt(t.innerText))), !r.iconName && u.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function cr(t) {
  const e = et(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return u.autoA11y && (n ? e["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(a || lt()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function fr() {
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
function Ae(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = lr(t), i = cr(t), o = Dt("parseNodeAttributes", {}, t);
  let s = e.styleParser ? sr(t) : [];
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
  styles: ur
} = T;
function hn(t) {
  const e = u.autoReplaceSvg === "nest" ? Ae(t, {
    styleParser: !1
  }) : Ae(t);
  return ~e.extra.classes.indexOf(Qe) ? B("generateLayersText", t, e) : B("generateSvgReplacementMutation", t, e);
}
let L = /* @__PURE__ */ new Set();
Ke.map((t) => {
  L.add("fa-".concat(t));
});
Object.keys(G[y]).map(L.add.bind(L));
Object.keys(G[k]).map(L.add.bind(L));
Object.keys(G[O]).map(L.add.bind(L));
L = [...L];
function we(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!F) return Promise.resolve();
  const n = h.documentElement.classList, a = (f) => n.add("".concat(ue, "-").concat(f)), r = (f) => n.remove("".concat(ue, "-").concat(f)), i = u.autoFetchSvg ? L : Ke.map((f) => "fa-".concat(f)).concat(Object.keys(ur));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(Qe, ":not([").concat(V, "])")].concat(i.map((f) => ".".concat(f, ":not([").concat(V, "])"))).join(", ");
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
  const l = ne.begin("onTree"), c = s.reduce((f, g) => {
    try {
      const p = hn(g);
      p && f.push(p);
    } catch (p) {
      Ve || p.name === "MissingIcon" && console.error(p);
    }
    return f;
  }, []);
  return new Promise((f, g) => {
    Promise.all(c).then((p) => {
      pn(p, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), l(), f();
      });
    }).catch((p) => {
      l(), g(p);
    });
  });
}
function mr(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  hn(t).then((n) => {
    n && pn([n], e);
  });
}
function dr(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || {}).icon ? e : jt(e || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : jt(r || {})), t(a, {
      ...n,
      mask: r
    });
  };
}
const pr = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = I,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: o = null,
    titleId: s = null,
    classes: l = [],
    attributes: c = {},
    styles: f = {}
  } = e;
  if (!t) return;
  const {
    prefix: g,
    iconName: p,
    icon: v
  } = t;
  return kt({
    type: "icon",
    ...t
  }, () => (K("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), u.autoA11y && (o ? c["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(s || lt()) : (c["aria-hidden"] = "true", c.focusable = "false")), ee({
    icons: {
      main: Rt(v),
      mask: r ? Rt(r.icon) : {
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
      attributes: c,
      styles: f,
      classes: l
    }
  })));
};
var gr = {
  mixout() {
    return {
      icon: dr(pr)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = we, t.nodeCallback = mr, t;
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
      return we(n, a);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: o,
        transform: s,
        symbol: l,
        mask: c,
        maskId: f,
        extra: g
      } = n;
      return new Promise((p, v) => {
        Promise.all([Wt(a, o), c.iconName ? Wt(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((E) => {
          let [_, A] = E;
          p([e, ee({
            icons: {
              main: _,
              mask: A
            },
            prefix: o,
            iconName: a,
            transform: s,
            symbol: l,
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
      let l;
      return Qt(i) && (l = B("generateAbstractTransformGrouping", {
        main: r,
        transform: i,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(l || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, hr = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = e;
        return kt({
          type: "layer"
        }, () => {
          K("beforeDOMElementCreation", {
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
}, yr = {
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
        return kt({
          type: "counter",
          content: t
        }, () => (K("beforeDOMElementCreation", {
          content: t,
          params: e
        }), qa({
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
}, br = {
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
        return kt({
          type: "text",
          content: t
        }, () => (K("beforeDOMElementCreation", {
          content: t,
          params: e
        }), he({
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
      if (Be) {
        const l = parseInt(getComputedStyle(e).fontSize, 10), c = e.getBoundingClientRect();
        o = c.width / l, s = c.height / l;
      }
      return u.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, he({
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
const vr = new RegExp('"', "ug"), _e = [1105920, 1112319], ke = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...ta,
  ...Jn,
  ...la
}, Yt = Object.keys(ke).reduce((t, e) => (t[e.toLowerCase()] = ke[e], t), {}), xr = Object.keys(Yt).reduce((t, e) => {
  const n = Yt[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function Ar(t) {
  const e = t.replace(vr, ""), n = Ta(e, 0), a = n >= _e[0] && n <= _e[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Mt(r ? e[0] : e),
    isSecondary: a || r
  };
}
function wr(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(e), r = isNaN(a) ? "normal" : a;
  return (Yt[n] || {})[r] || xr[n];
}
function Oe(t, e) {
  const n = "".concat(ua).concat(e.replace(":", "-"));
  return new Promise((a, r) => {
    if (t.getAttribute(n) !== null)
      return a();
    const o = et(t.children).filter((p) => p.getAttribute(It) === e)[0], s = W.getComputedStyle(t, e), l = s.getPropertyValue("font-family"), c = l.match(ha), f = s.getPropertyValue("font-weight"), g = s.getPropertyValue("content");
    if (o && !c)
      return t.removeChild(o), a();
    if (c && g !== "none" && g !== "") {
      const p = s.getPropertyValue("content");
      let v = wr(l, f);
      const {
        value: E,
        isSecondary: _
      } = Ar(p), A = c[0].startsWith("FontAwesome");
      let m = Jt(v, E), d = m;
      if (A) {
        const b = Ra(E);
        b.iconName && b.prefix && (m = b.iconName, v = b.prefix);
      }
      if (m && !_ && (!o || o.getAttribute(Vt) !== v || o.getAttribute(Kt) !== d)) {
        t.setAttribute(n, d), o && t.removeChild(o);
        const b = fr(), {
          extra: x
        } = b;
        x.attributes[It] = e, Wt(m, v).then((P) => {
          const ut = ee({
            ...b,
            icons: {
              main: P,
              mask: te()
            },
            prefix: v,
            iconName: d,
            extra: x,
            watchable: !0
          }), Y = h.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(Y, t.firstChild) : t.appendChild(Y), Y.outerHTML = ut.map((xn) => ft(xn)).join(`
`), t.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function _r(t) {
  return Promise.all([Oe(t, "::before"), Oe(t, "::after")]);
}
function kr(t) {
  return t.parentNode !== document.head && !~da.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(It) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Se(t) {
  if (F)
    return new Promise((e, n) => {
      const a = et(t.querySelectorAll("*")).filter(kr).map(_r), r = ne.begin("searchPseudoElements");
      gn(), Promise.all(a).then(() => {
        r(), Bt(), e();
      }).catch(() => {
        r(), Bt(), n();
      });
    });
}
var Or = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Se, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = h
      } = e;
      u.searchPseudoElements && Se(n);
    };
  }
};
let Ee = !1;
var Sr = {
  mixout() {
    return {
      dom: {
        unwatch() {
          gn(), Ee = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        xe(Dt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        or();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        Ee ? Bt() : xe(Dt("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const Pe = (t) => {
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
var Er = {
  mixout() {
    return {
      parse: {
        transform: (t) => Pe(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = Pe(n)), t;
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
      }, s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(s, " ").concat(l, " ").concat(c)
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
function Ce(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function Pr(t) {
  return t.tag === "g" ? t.children : [t];
}
var Cr = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), a = n ? _t(n.split(" ").map((r) => r.trim())) : te();
        return a.prefix || (a.prefix = U()), t.mask = a, t.maskId = e.getAttribute("data-fa-mask-id"), t;
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
        width: l,
        icon: c
      } = r, {
        width: f,
        icon: g
      } = i, p = Sa({
        transform: s,
        containerWidth: f,
        iconWidth: l
      }), v = {
        tag: "rect",
        attributes: {
          ...Ct,
          fill: "white"
        }
      }, E = c.children ? {
        children: c.children.map(Ce)
      } : {}, _ = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [Ce({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...p.path
          },
          ...E
        })]
      }, A = {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [_]
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
          children: Pr(g)
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
}, Nr = {
  provides(t) {
    let e = !1;
    W.matchMedia && (e = W.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
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
}, Ir = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Tr = [Ca, gr, hr, yr, br, Or, Sr, Er, Cr, Nr, Ir];
Ya(Tr, {
  mixoutsTo: S
});
S.noAuto;
const yn = S.config, Lr = S.library;
S.dom;
const vt = S.parse;
S.findIconDefinition;
S.toHtml;
const zr = S.icon;
S.layer;
const Mr = S.text;
S.counter;
const Fr = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Dr = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, jr = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Rr = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Wr = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Ur = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
function Ne(t, e) {
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
    e % 2 ? Ne(Object(n), !0).forEach(function(a) {
      w(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Br(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Yr(t) {
  var e = Br(t, "string");
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
  return e = Yr(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Hr(t, e) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      if (e.indexOf(a) >= 0) continue;
      n[a] = t[a];
    }
  return n;
}
function $r(t, e) {
  if (t == null) return {};
  var n = Hr(t, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      a = i[r], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function Ht(t) {
  return Gr(t) || Xr(t) || Vr(t) || Kr();
}
function Gr(t) {
  if (Array.isArray(t)) return $t(t);
}
function Xr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Vr(t, e) {
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
function Kr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bn = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(m, d, b) {
      if (!c(d) || g(d) || p(d) || v(d) || l(d))
        return d;
      var x, P = 0, ut = 0;
      if (f(d))
        for (x = [], ut = d.length; P < ut; P++)
          x.push(n(m, d[P], b));
      else {
        x = {};
        for (var Y in d)
          Object.prototype.hasOwnProperty.call(d, Y) && (x[m(Y, b)] = n(m, d[Y], b));
      }
      return x;
    }, a = function(m, d) {
      d = d || {};
      var b = d.separator || "_", x = d.split || /(?=[A-Z])/;
      return m.split(x).join(b);
    }, r = function(m) {
      return E(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(d, b) {
        return b ? b.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, i = function(m) {
      var d = r(m);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, o = function(m, d) {
      return a(m, d).toLowerCase();
    }, s = Object.prototype.toString, l = function(m) {
      return typeof m == "function";
    }, c = function(m) {
      return m === Object(m);
    }, f = function(m) {
      return s.call(m) == "[object Array]";
    }, g = function(m) {
      return s.call(m) == "[object Date]";
    }, p = function(m) {
      return s.call(m) == "[object RegExp]";
    }, v = function(m) {
      return s.call(m) == "[object Boolean]";
    }, E = function(m) {
      return m = m - 0, m === m;
    }, _ = function(m, d) {
      var b = d && "process" in d ? d.process : d;
      return typeof b != "function" ? m : function(x, P) {
        return b(x, m, P);
      };
    }, A = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(m, d) {
        return n(_(r, d), m);
      },
      decamelizeKeys: function(m, d) {
        return n(_(o, d), m, d);
      },
      pascalizeKeys: function(m, d) {
        return n(_(i, d), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(qr);
})(bn);
var Qr = bn.exports, Zr = ["class", "style"];
function Jr(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = Qr.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return e[r] = i, e;
  }, {});
}
function ti(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function re(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(l) {
    return re(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        l.class = ti(f);
        break;
      case "style":
        l.style = Jr(f);
        break;
      default:
        l.attrs[c] = f;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, o = i === void 0 ? {} : i, s = $r(n, Zr);
  return De(t.tag, N(N(N({}, e), {}, {
    class: r.class,
    style: N(N({}, r.style), o)
  }, r.attrs), s), a);
}
var vn = !1;
try {
  vn = process.env.NODE_ENV === "production";
} catch {
}
function ei() {
  if (!vn && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function ot(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? w({}, t, e) : {};
}
function ni(t) {
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
function Ie(t) {
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
var ai = tt({
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
    var a = n.attrs, r = C(function() {
      return Ie(e.icon);
    }), i = C(function() {
      return ot("classes", ni(e));
    }), o = C(function() {
      return ot("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = C(function() {
      return ot("mask", Ie(e.mask));
    }), l = C(function() {
      return zr(r.value, N(N(N(N({}, i.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Cn(l, function(f) {
      if (!f)
        return ei("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var c = C(function() {
      return l.value ? re(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
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
    var a = n.slots, r = yn.familyPrefix, i = C(function() {
      return ["".concat(r, "-layers")].concat(Ht(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return De("div", {
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
    var a = n.attrs, r = yn.familyPrefix, i = C(function() {
      return ot("classes", [].concat(Ht(e.counter ? ["".concat(r, "-layers-counter")] : []), Ht(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), o = C(function() {
      return ot("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = C(function() {
      var c = Mr(e.value.toString(), N(N({}, o.value), i.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = C(function() {
      return re(s.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
Lr.add(
  Ur,
  Wr,
  Dr,
  Fr,
  Rr,
  jr
);
const ii = {
  install: (t) => {
    t.component("simplisiti-component-editor", Xn), t.component("fa-icon", ai);
  }
};
export {
  je as _,
  ii as m
};
