import { defineComponent as et, ref as Z, shallowReactive as wn, shallowRef as _n, computed as O, onMounted as Le, resolveComponent as Te, openBlock as $, createElementBlock as pt, Fragment as ie, createElementVNode as j, renderList as kn, unref as On, normalizeClass as Ie, createVNode as Me, createBlock as Gt, resolveDynamicComponent as En, defineAsyncComponent as Sn, withModifiers as Fe, toDisplayString as Cn, createCommentVNode as De, watch as Pn, h as je } from "vue";
const Nn = {
  div: "Contenedor",
  a: "Enlace"
}, zn = {
  div: "container",
  a: "ancord"
}, Ln = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-DbVuh-I3.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-CEb2uoW4.js")
  }
}, Tn = {
  container: [
    "layout",
    "spacing"
  ],
  ancord: [
    "spacing"
  ]
}, In = (t) => {
  const e = zn[t];
  return Tn[e].map((a) => ({
    tab: a,
    ...Ln[a]
  }));
}, Mn = { class: "sp-wizard-popup__tabs-container" }, Fn = { class: "sp-wizard-popup__tabs" }, Dn = { class: "sp-wizard-popup__tab" }, jn = ["title", "onClick"], Rn = { class: "sp-wizard-popup__content" }, Wn = { class: "sp-wizard-popup__content-header" }, Un = /* @__PURE__ */ et({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  setup(t) {
    const { element: e } = t, n = Z([]);
    n.value = Array.from(e.classList).filter((m) => m.startsWith("sp-style"));
    const a = wn([]), r = _n(void 0), i = Z(void 0), o = O(() => In(e.tagName.toLowerCase())), s = async () => {
      for (const m of o.value)
        a.push({
          component: Sn(m.component),
          icon: m.icon,
          title: m.title,
          tab: m.tab
        });
    }, c = (m) => {
      r.value = m.component, i.value = m.tab;
    }, l = () => {
      a.length > 0 && c(a[0]);
    }, f = (m) => i.value === m.tab, g = (m) => {
      e.classList.forEach((h) => {
        setTimeout(() => {
          h.startsWith("sp-style") && e.classList.remove(h);
        }, 100);
      }), m.forEach((h) => {
        setTimeout(() => {
          e.classList.add(h);
        }, 100);
      }), window.parent.document.dispatchEvent(new CustomEvent("elementChange", {
        detail: {
          simplisitiId: e.dataset.simplisitiid,
          spClassList: m
        }
      }));
    };
    return Le(async () => {
      await s(), l();
    }), (m, h) => {
      const _ = Te("fa-icon");
      return $(), pt(ie, null, [
        j("div", Mn, [
          j("div", Fn, [
            ($(!0), pt(ie, null, kn(On(a), (x) => ($(), pt("div", Dn, [
              j("button", {
                class: Ie(["sp-wizard-popup__tab-button", { "sp-wizard-popup__tab-button__active": f(x) }]),
                title: x.title,
                onClick: (w) => c(x)
              }, [
                Me(_, {
                  icon: x.icon
                }, null, 8, ["icon"])
              ], 10, jn)
            ]))), 256))
          ])
        ]),
        j("div", Rn, [
          j("div", Wn, [
            ($(), Gt(En(r.value), {
              onUpdate: g,
              "sp-class-list": n.value
            }, null, 40, ["sp-class-list"]))
          ])
        ])
      ], 64);
    };
  }
}), Re = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, Bn = /* @__PURE__ */ Re(Un, [["__scopeId", "data-v-7b7a2678"]]), Yn = { class: "sp-configuration-popup__header" }, Hn = { class: "sp-configuration-popup__body" }, $n = /* @__PURE__ */ et({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = Z(null), r = Z(!1), i = e, o = (l) => {
      setTimeout(() => {
        if (!l) return;
        const f = l.getBoundingClientRect(), g = f.top, m = f.bottom, h = f.left + f.width + 10;
        if (a.value) {
          a.value.style.top = `${g}px`, a.value.style.left = `${h}px`;
          const _ = document.body.offsetWidth;
          h + a.value.offsetWidth > _ && (a.value.style.top = `${g + 10}px`, a.value.style.left = `${h - a.value.offsetWidth - 20}px`);
          const x = document.body.offsetHeight;
          g + a.value.offsetHeight > x && (a.value.style.top = "auto", a.value.style.bottom = `${m - a.value.offsetHeight + 20}px`);
        }
      }, 50);
    }, s = O(() => {
      var f;
      const l = (f = n == null ? void 0 : n.tagName) == null ? void 0 : f.toLowerCase();
      return l && Nn[l] || "Element";
    }), c = (l) => {
      r.value = !0, setTimeout(() => {
        i("close", l);
      }, 300);
    };
    return o(n), (l, f) => {
      const g = Te("fa-icon");
      return $(), pt("div", {
        class: Ie(["sp-configuration-popup", { "sp-configuration-popup_closed": r.value }]),
        ref_key: "popup",
        ref: a,
        onClick: Fe((m) => {
        }, ["stop"])
      }, [
        j("div", Yn, [
          j("h4", null, Cn(s.value), 1),
          Me(g, {
            class: "sp-configuration-popup__close",
            icon: "times",
            onClick: f[0] || (f[0] = (m) => c(m))
          })
        ]),
        j("div", Hn, [
          t.element ? ($(), Gt(Bn, {
            key: 0,
            element: t.element
          }, null, 8, ["element"])) : De("", !0)
        ])
      ], 2);
    };
  }
}), Gn = /* @__PURE__ */ Re($n, [["__scopeId", "data-v-317d171c"]]), Xn = /* @__PURE__ */ et({
  __name: "App",
  setup(t) {
    const e = Z(!1), n = Z(null), a = (i) => {
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
    return Le(() => {
      const i = document.querySelectorAll("div"), o = document.querySelectorAll("a");
      a(i), a(o);
    }), (i, o) => {
      var s;
      return e.value ? ($(), Gt(Gn, {
        key: 0,
        element: n.value,
        type: (s = n.value) == null ? void 0 : s.tagName,
        onClose: Fe(r, ["stop"])
      }, null, 8, ["element", "type"])) : De("", !0);
    };
  }
}), oe = () => {
};
let Xt = {}, We = {}, Ue = null, Be = {
  mark: oe,
  measure: oe
};
try {
  typeof window < "u" && (Xt = window), typeof document < "u" && (We = document), typeof MutationObserver < "u" && (Ue = MutationObserver), typeof performance < "u" && (Be = performance);
} catch {
}
const {
  userAgent: se = ""
} = Xt.navigator || {}, W = Xt, y = We, le = Ue, dt = Be;
W.document;
const F = !!y.documentElement && !!y.head && typeof y.addEventListener == "function" && typeof y.createElement == "function", Ye = ~se.indexOf("MSIE") || ~se.indexOf("Trident/");
var b = "classic", He = "duotone", E = "sharp", S = "sharp-duotone", Vn = [b, He, E, S], Kn = {
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
}, $e = {
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
}, ia = ["solid", "regular", "light", "thin", "duotone", "brands"], Ge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oa = Ge.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), at = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, sa = [...Object.keys(na), ...ia, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", at.GROUP, at.SWAP_OPACITY, at.PRIMARY, at.SECONDARY].concat(Ge.map((t) => "".concat(t, "x"))).concat(oa.map((t) => "w-".concat(t))), la = {
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
const I = "___FONT_AWESOME___", Nt = 16, Xe = "fa", Ve = "svg-inline--fa", V = "data-fa-i2svg", zt = "data-fa-pseudo-element", ua = "data-fa-pseudo-element-pending", Vt = "data-prefix", Kt = "data-icon", ue = "fontawesome-i2svg", ma = "async", da = ["HTML", "HEAD", "STYLE", "SCRIPT"], Ke = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), qe = [b, E, S];
function ft(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[b];
    }
  });
}
const Qe = {
  ...$e
};
Qe[b] = {
  ...$e[b],
  ...ce.kit,
  ...ce["kit-duotone"]
};
const G = ft(Qe), Lt = {
  ...ra
};
Lt[b] = {
  ...Lt[b],
  ...fe.kit,
  ...fe["kit-duotone"]
};
const lt = ft(Lt), Tt = {
  ...aa
};
Tt[b] = {
  ...Tt[b],
  ...fa.kit
};
const X = ft(Tt), It = {
  ...ea
};
It[b] = {
  ...It[b],
  ...ca.kit
};
const pa = ft(It), ga = Qn, Ze = "fa-layers-text", ha = Zn, ya = {
  ...Kn
};
ft(ya);
const ba = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ot = at, J = /* @__PURE__ */ new Set();
Object.keys(lt[b]).map(J.add.bind(J));
Object.keys(lt[E]).map(J.add.bind(J));
Object.keys(lt[S]).map(J.add.bind(J));
const va = [...qn, ...sa], it = W.FontAwesomeConfig || {};
function xa(t) {
  var e = y.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function Aa(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
y && typeof y.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = Aa(xa(n));
  r != null && (it[a] = r);
});
const Je = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Xe,
  replacementClass: Ve,
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
it.familyPrefix && (it.cssPrefix = it.familyPrefix);
const tt = {
  ...Je,
  ...it
};
tt.autoReplaceSvg || (tt.observeMutations = !1);
const u = {};
Object.keys(Je).forEach((t) => {
  Object.defineProperty(u, t, {
    enumerable: !0,
    set: function(e) {
      tt[t] = e, ot.forEach((n) => n(u));
    },
    get: function() {
      return tt[t];
    }
  });
});
Object.defineProperty(u, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    tt.cssPrefix = t, ot.forEach((e) => e(u));
  },
  get: function() {
    return tt.cssPrefix;
  }
});
W.FontAwesomeConfig = u;
const ot = [];
function wa(t) {
  return ot.push(t), () => {
    ot.splice(ot.indexOf(t), 1);
  };
}
const D = Nt, z = {
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
  const e = y.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = y.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], o = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (a = i);
  }
  return y.head.insertBefore(e, a), t;
}
const ka = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ct() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += ka[Math.random() * 62 | 0];
  return e;
}
function nt(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function qt(t) {
  return t.classList ? nt(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function tn(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(tn(t[n]), '" '), "").trim();
}
function At(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function Qt(t) {
  return t.size !== z.size || t.x !== z.x || t.y !== z.y || t.rotate !== z.rotate || t.flipX || t.flipY;
}
function Ea(t) {
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
function Sa(t) {
  let {
    transform: e,
    width: n = Nt,
    height: a = Nt,
    startCentered: r = !1
  } = t, i = "";
  return r && Ye ? i += "translate(".concat(e.x / D - n / 2, "em, ").concat(e.y / D - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / D, "em), calc(-50% + ").concat(e.y / D, "em)) ") : i += "translate(".concat(e.x / D, "em, ").concat(e.y / D, "em) "), i += "scale(".concat(e.size / D * (e.flipX ? -1 : 1), ", ").concat(e.size / D * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i;
}
var Ca = `:root, :host {
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
function en() {
  const t = Xe, e = Ve, n = u.cssPrefix, a = u.replacementClass;
  let r = Ca;
  if (n !== t || a !== e) {
    const i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
let me = !1;
function Et() {
  u.autoAddCss && !me && (_a(en()), me = !0);
}
var Pa = {
  mixout() {
    return {
      dom: {
        css: en,
        insertCss: Et
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Et();
      },
      beforeI2svg() {
        Et();
      }
    };
  }
};
const M = W || {};
M[I] || (M[I] = {});
M[I].styles || (M[I].styles = {});
M[I].hooks || (M[I].hooks = {});
M[I].shims || (M[I].shims = []);
var L = M[I];
const nn = [], an = function() {
  y.removeEventListener("DOMContentLoaded", an), yt = 1, nn.map((t) => t());
};
let yt = !1;
F && (yt = (y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(y.readyState), yt || y.addEventListener("DOMContentLoaded", an));
function Na(t) {
  F && (yt ? setTimeout(t, 0) : nn.push(t));
}
function ut(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? tn(t) : "<".concat(e, " ").concat(Oa(n), ">").concat(a.map(ut).join(""), "</").concat(e, ">");
}
function de(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var St = function(e, n, a, r) {
  var i = Object.keys(e), o = i.length, s = n, c, l, f;
  for (a === void 0 ? (c = 1, f = e[i[0]]) : (c = 0, f = a); c < o; c++)
    l = i[c], f = s(f, e[l], l, e);
  return f;
};
function za(t) {
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
  const e = za(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function La(t, e) {
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
  typeof L.hooks.addPack == "function" && !a ? L.hooks.addPack(t, pe(e)) : L.styles[t] = {
    ...L.styles[t] || {},
    ...r
  }, t === "fas" && Ft("fa", e);
}
const {
  styles: H,
  shims: Ta
} = L, Ia = {
  [b]: Object.values(X[b]),
  [E]: Object.values(X[E]),
  [S]: Object.values(X[S])
};
let Zt = null, rn = {}, on = {}, sn = {}, ln = {}, cn = {};
const Ma = {
  [b]: Object.keys(G[b]),
  [E]: Object.keys(G[E]),
  [S]: Object.keys(G[S])
};
function Fa(t) {
  return ~va.indexOf(t);
}
function Da(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Fa(r) ? r : null;
}
const fn = () => {
  const t = (a) => St(H, (r, i, o) => (r[o] = St(i, a, {}), r), {});
  rn = t((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((s) => typeof s == "number").forEach((s) => {
    a[s.toString(16)] = i;
  }), a)), on = t((a, r, i) => (a[i] = i, r[2] && r[2].filter((s) => typeof s == "string").forEach((s) => {
    a[s] = i;
  }), a)), cn = t((a, r, i) => {
    const o = r[2];
    return a[i] = i, o.forEach((s) => {
      a[s] = i;
    }), a;
  });
  const e = "far" in H || u.autoFetchSvg, n = St(Ta, (a, r) => {
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
  sn = n.names, ln = n.unicodes, Zt = wt(u.styleDefault, {
    family: u.familyDefault
  });
};
wa((t) => {
  Zt = wt(t.styleDefault, {
    family: u.familyDefault
  });
});
fn();
function Jt(t, e) {
  return (rn[t] || {})[e];
}
function ja(t, e) {
  return (on[t] || {})[e];
}
function R(t, e) {
  return (cn[t] || {})[e];
}
function un(t) {
  return sn[t] || {
    prefix: null,
    iconName: null
  };
}
function Ra(t) {
  const e = ln[t], n = Jt("fas", t);
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
    family: n = b
  } = e, a = G[n][t], r = lt[n][t] || lt[n][a], i = t in L.styles ? t : null;
  return r || i || null;
}
const Wa = {
  [b]: Object.keys(X[b]),
  [E]: Object.keys(X[E]),
  [S]: Object.keys(X[S])
};
function _t(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e, a = {
    [b]: "".concat(u.cssPrefix, "-").concat(b),
    [E]: "".concat(u.cssPrefix, "-").concat(E),
    [S]: "".concat(u.cssPrefix, "-").concat(S)
  };
  let r = null, i = b;
  const o = Vn.filter((c) => c !== He);
  o.forEach((c) => {
    (t.includes(a[c]) || t.some((l) => Wa[c].includes(l))) && (i = c);
  });
  const s = t.reduce((c, l) => {
    const f = Da(u.cssPrefix, l);
    if (H[l] ? (l = Ia[i].includes(l) ? pa[i][l] : l, r = l, c.prefix = l) : Ma[i].indexOf(l) > -1 ? (r = l, c.prefix = wt(l, {
      family: i
    })) : f ? c.iconName = f : l !== u.replacementClass && !o.some((g) => l === a[g]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const g = r === "fa" ? un(c.iconName) : {}, m = R(c.prefix, c.iconName);
      g.prefix && (r = null), c.iconName = g.iconName || m || c.iconName, c.prefix = g.prefix || c.prefix, c.prefix === "far" && !H.far && H.fas && !u.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, te());
  return (t.includes("fa-brands") || t.includes("fab")) && (s.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (s.prefix = "fad"), !s.prefix && i === E && (H.fass || u.autoFetchSvg) && (s.prefix = "fass", s.iconName = R(s.prefix, s.iconName) || s.iconName), !s.prefix && i === S && (H.fasds || u.autoFetchSvg) && (s.prefix = "fasds", s.iconName = R(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || r === "fa") && (s.prefix = U() || "fas"), s;
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
      const o = X[b][i];
      o && Ft(o, r[i]), fn();
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
    return e = R(n, e) || e, de(mn.definitions, n, e) || de(L.styles, n, e);
}
const mn = new Ua(), Ha = () => {
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
}, C = {
  noAuto: Ha,
  config: u,
  dom: $a,
  parse: Ga,
  library: mn,
  findIconDefinition: jt,
  toHtml: ut
}, Xa = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = y
  } = t;
  (Object.keys(L.styles).length > 0 || u.autoFetchSvg) && F && u.autoReplaceSvg && C.dom.i2svg({
    node: e
  });
};
function kt(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => ut(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!F) return;
      const n = y.createElement("div");
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
    maskId: c,
    titleId: l,
    extra: f,
    watchable: g = !1
  } = t, {
    width: m,
    height: h
  } = n.found ? n : e, _ = a === "fak", x = [u.replacementClass, r ? "".concat(u.cssPrefix, "-").concat(r) : ""].filter((P) => f.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(f.classes).join(" ");
  let w = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: x,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(m, " ").concat(h)
    }
  };
  const d = _ && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(m / h * 16 * 0.0625, "em")
  } : {};
  g && (w.attributes[V] = ""), s && (w.children.push({
    tag: "title",
    attributes: {
      id: w.attributes["aria-labelledby"] || "title-".concat(l || ct())
    },
    children: [s]
  }), delete w.attributes.title);
  const p = {
    ...w,
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: c,
    transform: i,
    symbol: o,
    styles: {
      ...d,
      ...f.styles
    }
  }, {
    children: v,
    attributes: A
  } = n.found && e.found ? B("generateAbstractMask", p) || {
    children: [],
    attributes: {}
  } : B("generateAbstractIcon", p) || {
    children: [],
    attributes: {}
  };
  return p.children = v, p.attributes = A, o ? Ka(p) : Va(p);
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
  } = t, c = {
    ...o.attributes,
    ...i ? {
      title: i
    } : {},
    class: o.classes.join(" ")
  };
  s && (c[V] = "");
  const l = {
    ...o.styles
  };
  Qt(r) && (l.transform = Sa({
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
  styles: Ct
} = L;
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
  !Ke && !u.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Wt(t, e) {
  let n = e;
  return e === "fa" && u.styleDefault !== null && (e = U()), new Promise((a, r) => {
    if (n === "fa") {
      const i = un(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && Ct[e] && Ct[e][t]) {
      const i = Ct[e][t];
      return a(Rt(i));
    }
    Za(t, e), a({
      ...Qa,
      icon: u.showMissingIcons && t ? B("missingIconAbstract") || {} : {}
    });
  });
}
const ye = () => {
}, Ut = u.measurePerformance && dt && dt.mark && dt.measure ? dt : {
  mark: ye,
  measure: ye
}, rt = 'FA "6.6.0"', Ja = (t) => (Ut.mark("".concat(rt, " ").concat(t, " begins")), () => dn(t)), dn = (t) => {
  Ut.mark("".concat(rt, " ").concat(t, " ends")), Ut.measure("".concat(rt, " ").concat(t), "".concat(rt, " ").concat(t, " begins"), "".concat(rt, " ").concat(t, " ends"));
};
var ne = {
  begin: Ja,
  end: dn
};
const gt = () => {
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
  return u.autoReplaceSvg === !0 ? ht.replace : ht[u.autoReplaceSvg] || ht.replace;
}
function ar(t) {
  return y.createElementNS("http://www.w3.org/2000/svg", t);
}
function rr(t) {
  return y.createElement(t);
}
function pn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? ar : rr
  } = e;
  if (typeof t == "string")
    return y.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(i) {
    a.setAttribute(i, t.attributes[i]);
  }), (t.children || []).forEach(function(i) {
    a.appendChild(pn(i, {
      ceFn: n
    }));
  }), a;
}
function ir(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const ht = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(pn(n), e);
      }), e.getAttribute(V) === null && u.keepOriginalSource) {
        let n = y.createComment(ir(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~qt(e).indexOf(u.replacementClass))
      return ht.replace(t);
    const a = new RegExp("".concat(u.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((o, s) => (s === u.replacementClass || s.match(a) ? o.toSvg.push(s) : o.toNode.push(s), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => ut(i)).join(`
`);
    e.setAttribute(V, ""), e.innerHTML = r;
  }
};
function ve(t) {
  t();
}
function gn(t, e) {
  const n = typeof e == "function" ? e : gt;
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
function hn() {
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
    treeCallback: e = gt,
    nodeCallback: n = gt,
    pseudoElementsCallback: a = gt,
    observeMutationsRoot: r = y
  } = t;
  bt = new le((i) => {
    if (ae) return;
    const o = U();
    nt(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !be(s.addedNodes[0]) && (u.searchPseudoElements && a(s.target), e(s.target)), s.type === "attributes" && s.target.parentNode && u.searchPseudoElements && a(s.target.parentNode), s.type === "attributes" && be(s.target) && ~ba.indexOf(s.attributeName))
        if (s.attributeName === "class" && tr(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = _t(qt(s.target));
          s.target.setAttribute(Vt, c || o), l && s.target.setAttribute(Kt, l);
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
  const e = nt(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return u.autoA11y && (n ? e["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(a || ct()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function fr() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: z,
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
    transform: z,
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
} = L;
function yn(t) {
  const e = u.autoReplaceSvg === "nest" ? Ae(t, {
    styleParser: !1
  }) : Ae(t);
  return ~e.extra.classes.indexOf(Ze) ? B("generateLayersText", t, e) : B("generateSvgReplacementMutation", t, e);
}
let T = /* @__PURE__ */ new Set();
qe.map((t) => {
  T.add("fa-".concat(t));
});
Object.keys(G[b]).map(T.add.bind(T));
Object.keys(G[E]).map(T.add.bind(T));
Object.keys(G[S]).map(T.add.bind(T));
T = [...T];
function we(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!F) return Promise.resolve();
  const n = y.documentElement.classList, a = (f) => n.add("".concat(ue, "-").concat(f)), r = (f) => n.remove("".concat(ue, "-").concat(f)), i = u.autoFetchSvg ? T : qe.map((f) => "fa-".concat(f)).concat(Object.keys(ur));
  i.includes("fa") || i.push("fa");
  const o = [".".concat(Ze, ":not([").concat(V, "])")].concat(i.map((f) => ".".concat(f, ":not([").concat(V, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = nt(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const c = ne.begin("onTree"), l = s.reduce((f, g) => {
    try {
      const m = yn(g);
      m && f.push(m);
    } catch (m) {
      Ke || m.name === "MissingIcon" && console.error(m);
    }
    return f;
  }, []);
  return new Promise((f, g) => {
    Promise.all(l).then((m) => {
      gn(m, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), c(), f();
      });
    }).catch((m) => {
      c(), g(m);
    });
  });
}
function mr(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  yn(t).then((n) => {
    n && gn([n], e);
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
    transform: n = z,
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
    iconName: m,
    icon: h
  } = t;
  return kt({
    type: "icon",
    ...t
  }, () => (K("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), u.autoA11y && (o ? l["aria-labelledby"] = "".concat(u.replacementClass, "-title-").concat(s || ct()) : (l["aria-hidden"] = "true", l.focusable = "false")), ee({
    icons: {
      main: Rt(h),
      mask: r ? Rt(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: g,
    iconName: m,
    transform: {
      ...z,
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
        node: n = y,
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
        symbol: c,
        mask: l,
        maskId: f,
        extra: g
      } = n;
      return new Promise((m, h) => {
        Promise.all([Wt(a, o), l.iconName ? Wt(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((_) => {
          let [x, w] = _;
          m([e, ee({
            icons: {
              main: x,
              mask: w
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
        }).catch(h);
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
          transform: n = z,
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
            ...z,
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
      if (Ye) {
        const c = parseInt(getComputedStyle(e).fontSize, 10), l = e.getBoundingClientRect();
        o = l.width / c, s = l.height / c;
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
  const e = t.replace(vr, ""), n = La(e, 0), a = n >= _e[0] && n <= _e[1], r = e.length === 2 ? e[0] === e[1] : !1;
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
    const o = nt(t.children).filter((m) => m.getAttribute(zt) === e)[0], s = W.getComputedStyle(t, e), c = s.getPropertyValue("font-family"), l = c.match(ha), f = s.getPropertyValue("font-weight"), g = s.getPropertyValue("content");
    if (o && !l)
      return t.removeChild(o), a();
    if (l && g !== "none" && g !== "") {
      const m = s.getPropertyValue("content");
      let h = wr(c, f);
      const {
        value: _,
        isSecondary: x
      } = Ar(m), w = l[0].startsWith("FontAwesome");
      let d = Jt(h, _), p = d;
      if (w) {
        const v = Ra(_);
        v.iconName && v.prefix && (d = v.iconName, h = v.prefix);
      }
      if (d && !x && (!o || o.getAttribute(Vt) !== h || o.getAttribute(Kt) !== p)) {
        t.setAttribute(n, p), o && t.removeChild(o);
        const v = fr(), {
          extra: A
        } = v;
        A.attributes[zt] = e, Wt(d, h).then((P) => {
          const mt = ee({
            ...v,
            icons: {
              main: P,
              mask: te()
            },
            prefix: h,
            iconName: p,
            extra: A,
            watchable: !0
          }), Y = y.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(Y, t.firstChild) : t.appendChild(Y), Y.outerHTML = mt.map((An) => ut(An)).join(`
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
  return t.parentNode !== document.head && !~da.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(zt) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ee(t) {
  if (F)
    return new Promise((e, n) => {
      const a = nt(t.querySelectorAll("*")).filter(kr).map(_r), r = ne.begin("searchPseudoElements");
      hn(), Promise.all(a).then(() => {
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
        return t.pseudoElementsCallback = Ee, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = y
      } = e;
      u.searchPseudoElements && Ee(n);
    };
  }
};
let Se = !1;
var Er = {
  mixout() {
    return {
      dom: {
        unwatch() {
          hn(), Se = !0;
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
        Se ? Bt() : xe(Dt("mutationObserverCallbacks", {
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
var Sr = {
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
      }, m = {
        outer: o,
        inner: f,
        path: g
      };
      return {
        tag: "g",
        attributes: {
          ...m.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...m.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...m.path
            }
          }]
        }]
      };
    };
  }
};
const Pt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Pe(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function Cr(t) {
  return t.tag === "g" ? t.children : [t];
}
var Pr = {
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
        width: c,
        icon: l
      } = r, {
        width: f,
        icon: g
      } = i, m = Ea({
        transform: s,
        containerWidth: f,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: {
          ...Pt,
          fill: "white"
        }
      }, _ = l.children ? {
        children: l.children.map(Pe)
      } : {}, x = {
        tag: "g",
        attributes: {
          ...m.inner
        },
        children: [Pe({
          tag: l.tag,
          attributes: {
            ...l.attributes,
            ...m.path
          },
          ..._
        })]
      }, w = {
        tag: "g",
        attributes: {
          ...m.outer
        },
        children: [x]
      }, d = "mask-".concat(o || ct()), p = "clip-".concat(o || ct()), v = {
        tag: "mask",
        attributes: {
          ...Pt,
          id: d,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [h, w]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: p
          },
          children: Cr(g)
        }, v]
      };
      return n.push(A, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(p, ")"),
          mask: "url(#".concat(d, ")"),
          ...Pt
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
}, zr = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Lr = [Pa, gr, hr, yr, br, Or, Er, Sr, Pr, Nr, zr];
Ya(Lr, {
  mixoutsTo: C
});
C.noAuto;
const bn = C.config, Tr = C.library;
C.dom;
const vt = C.parse;
C.findIconDefinition;
C.toHtml;
const Ir = C.icon;
C.layer;
const Mr = C.text;
C.counter;
const Fr = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Dr = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, jr = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Rr = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Wr = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Ur = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Br = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Yr = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Hr = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, $r = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Gr = {
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
      k(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Xr(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Vr(t) {
  var e = Xr(t, "string");
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
function k(t, e, n) {
  return e = Vr(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Kr(t, e) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      if (e.indexOf(a) >= 0) continue;
      n[a] = t[a];
    }
  return n;
}
function qr(t, e) {
  if (t == null) return {};
  var n = Kr(t, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      a = i[r], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function Ht(t) {
  return Qr(t) || Zr(t) || Jr(t) || ti();
}
function Qr(t) {
  if (Array.isArray(t)) return $t(t);
}
function Zr(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Jr(t, e) {
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
function ti() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ei = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, vn = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(d, p, v) {
      if (!l(p) || g(p) || m(p) || h(p) || c(p))
        return p;
      var A, P = 0, mt = 0;
      if (f(p))
        for (A = [], mt = p.length; P < mt; P++)
          A.push(n(d, p[P], v));
      else {
        A = {};
        for (var Y in p)
          Object.prototype.hasOwnProperty.call(p, Y) && (A[d(Y, v)] = n(d, p[Y], v));
      }
      return A;
    }, a = function(d, p) {
      p = p || {};
      var v = p.separator || "_", A = p.split || /(?=[A-Z])/;
      return d.split(A).join(v);
    }, r = function(d) {
      return _(d) ? d : (d = d.replace(/[\-_\s]+(.)?/g, function(p, v) {
        return v ? v.toUpperCase() : "";
      }), d.substr(0, 1).toLowerCase() + d.substr(1));
    }, i = function(d) {
      var p = r(d);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, o = function(d, p) {
      return a(d, p).toLowerCase();
    }, s = Object.prototype.toString, c = function(d) {
      return typeof d == "function";
    }, l = function(d) {
      return d === Object(d);
    }, f = function(d) {
      return s.call(d) == "[object Array]";
    }, g = function(d) {
      return s.call(d) == "[object Date]";
    }, m = function(d) {
      return s.call(d) == "[object RegExp]";
    }, h = function(d) {
      return s.call(d) == "[object Boolean]";
    }, _ = function(d) {
      return d = d - 0, d === d;
    }, x = function(d, p) {
      var v = p && "process" in p ? p.process : p;
      return typeof v != "function" ? d : function(A, P) {
        return v(A, d, P);
      };
    }, w = {
      camelize: r,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(d, p) {
        return n(x(r, p), d);
      },
      decamelizeKeys: function(d, p) {
        return n(x(o, p), d, p);
      },
      pascalizeKeys: function(d, p) {
        return n(x(i, p), d);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = w : e.humps = w;
  })(ei);
})(vn);
var ni = vn.exports, ai = ["class", "style"];
function ri(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = ni.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return e[r] = i, e;
  }, {});
}
function ii(t) {
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
        c.class = ii(f);
        break;
      case "style":
        c.style = ri(f);
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
  var i = n.style, o = i === void 0 ? {} : i, s = qr(n, ai);
  return je(t.tag, N(N(N({}, e), {}, {
    class: r.class,
    style: N(N({}, r.style), o)
  }, r.attrs), s), a);
}
var xn = !1;
try {
  xn = process.env.NODE_ENV === "production";
} catch {
}
function oi() {
  if (!xn && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function st(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? k({}, t, e) : {};
}
function si(t) {
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
  }, k(k(k(k(k(k(k(k(k(k(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), k(k(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function ze(t) {
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
var li = et({
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
    var a = n.attrs, r = O(function() {
      return ze(e.icon);
    }), i = O(function() {
      return st("classes", si(e));
    }), o = O(function() {
      return st("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = O(function() {
      return st("mask", ze(e.mask));
    }), c = O(function() {
      return Ir(r.value, N(N(N(N({}, i.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Pn(c, function(f) {
      if (!f)
        return oi("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var l = O(function() {
      return c.value ? re(c.value.abstract[0], {}, a) : null;
    });
    return function() {
      return l.value;
    };
  }
});
et({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var a = n.slots, r = bn.familyPrefix, i = O(function() {
      return ["".concat(r, "-layers")].concat(Ht(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return je("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
et({
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
    var a = n.attrs, r = bn.familyPrefix, i = O(function() {
      return st("classes", [].concat(Ht(e.counter ? ["".concat(r, "-layers-counter")] : []), Ht(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), o = O(function() {
      return st("transform", typeof e.transform == "string" ? vt.transform(e.transform) : e.transform);
    }), s = O(function() {
      var l = Mr(e.value.toString(), N(N({}, o.value), i.value)), f = l.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), c = O(function() {
      return re(s.value, {}, a);
    });
    return function() {
      return c.value;
    };
  }
});
Tr.add(
  Gr,
  Yr,
  Rr,
  Fr,
  Ur,
  Wr,
  $r,
  Hr,
  Br,
  Dr,
  jr
);
const fi = {
  install: (t) => {
    t.component("simplisiti-component-editor", Xn), t.component("fa-icon", li);
  }
};
export {
  Re as _,
  fi as m
};
