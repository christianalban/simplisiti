import { ref as R, defineComponent as it, shallowReactive as Gn, onMounted as me, resolveComponent as de, openBlock as S, createElementBlock as F, Fragment as vt, createElementVNode as P, renderList as Xt, unref as et, normalizeClass as pe, createVNode as ut, withDirectives as nn, createBlock as Ft, resolveDynamicComponent as an, vShow as Vn, defineAsyncComponent as rn, computed as T, withModifiers as sn, toDisplayString as Xn, createCommentVNode as ge, resolveDirective as qn, watch as on, h as cn } from "vue";
const Kn = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, Qn = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, gi = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Zn = [
  "div",
  "a",
  "p",
  "h1",
  "img"
], Jn = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-XLUY3nFm.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-DaWZbbc0.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-pNdiLt2s.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-CpDuaZZ4.js")
  },
  url: {
    title: "URL",
    icon: "link",
    component: () => import("./Url-BRGonqFN.js")
  },
  src: {
    title: "SRC",
    icon: "link",
    component: () => import("./Src-DseeBxTw.js")
  }
}, ta = {
  container: [
    "layout",
    "spacing"
  ],
  ancord: [
    "spacing",
    "font",
    "content",
    "url"
  ],
  paragraph: [
    "spacing",
    "font",
    "content"
  ],
  header1: [
    "spacing",
    "font",
    "content"
  ],
  image: [
    "spacing",
    "src"
  ]
}, ea = [
  "color"
];
class wt {
  create() {
    const e = this.createElement();
    return qt(e), e;
  }
}
class na extends wt {
  createElement() {
    const e = document.createElement("a");
    return e.innerHTML = "Enlace", e;
  }
}
class aa extends wt {
  createElement() {
    const e = document.createElement("div");
    return e.classList.add(
      "sp-style__layout-display__flex",
      "sp-style__layout-flex-direction__column",
      "sp-style__spacing-padding-top__1",
      "sp-style__spacing-padding-bottom__1",
      "sp-style__spacing-padding-left__1",
      "sp-style__spacing-padding-right__1"
    ), e.innerHTML = "-empty-", e;
  }
}
class ra extends wt {
  createElement() {
    const e = document.createElement("p");
    return e.innerHTML = "Parrafo", e;
  }
}
class sa extends wt {
  createElement() {
    const e = document.createElement("h1");
    return e.innerHTML = "Cabecera 1", e;
  }
}
class ia extends wt {
  createElement() {
    const e = document.createElement("img");
    return e.src = "https://via.placeholder.com/150", e;
  }
}
const oa = (t) => {
  if (t === "div")
    return new aa();
  if (t === "a")
    return new na();
  if (t === "p")
    return new ra();
  if (t === "h1")
    return new sa();
  if (t === "img")
    return new ia();
  throw new Error("Invalid type");
}, Et = (t, e) => {
  window.parent.document.dispatchEvent(new CustomEvent(t, { detail: e }));
}, ln = (t) => {
  Et("elementRemoved", { simplisitiId: t });
}, fn = (t, e) => {
  Et("contentChange", { simplisitiId: t, content: e });
}, ca = (t, e) => {
  Et("classChange", { simplisitiId: t, spClassList: e });
}, la = (t, e) => {
  Et("styleChange", { simplisitiId: t, spStyleList: e });
}, fa = (t, e) => {
  Et("attributeChange", { simplisitiId: t, attribute: e });
};
let B = null;
const K = R(!1), mt = R(!1), ct = R(null), X = R(null), ua = (t, e) => {
  mt.value || (mt.value = !0, ct.value = e, e.classList.add("sp-element__active")), t.preventDefault(), t.stopPropagation();
}, un = (t, e) => {
  mt.value || (ga(), e.classList.add("sp-element__active")), t.preventDefault(), t.stopPropagation();
}, ma = (t, e) => {
  mt.value || e.classList.remove("sp-element__active"), t.preventDefault(), t.stopPropagation();
}, da = (t, e) => {
  var a, r;
  const n = e;
  X.value !== null && (B == null || B.replaceWith(X.value)), n.innerHTML.startsWith("-empty-") && (n.innerHTML = n.innerHTML.replace("-empty-", "")), (a = X.value) != null && a.dataset.simplisitiid && ln((r = X.value) == null ? void 0 : r.dataset.simplisitiid), setTimeout(() => {
    n.classList.remove("sp-element__active"), (n.dataset.simplisitiid || n.id === "simplisiti-component-preview") && fn(n.dataset.simplisitiid, n.innerHTML.replace(/sp-element__active/, "")), pa(), t.preventDefault(), t.stopPropagation();
  }, 10);
}, pa = () => {
  K.value = !1, X.value = null;
}, ga = () => {
  document.querySelectorAll(".sp-element__active").forEach((e) => {
    e.classList.remove("sp-element__active");
  });
}, ha = (t, e) => {
  B === null && (B = document.createElement("div"), B.id = "sp-element__placeholder", B.classList.add("sp-element__placeholder"));
  const n = Array.from(e.childNodes).filter((r) => r.nodeName != "#text"), a = ba(t, e);
  n[a] !== void 0 ? e.insertBefore(B, n[a]) : e.appendChild(B);
}, ya = (t, e) => {
  if (un(t, e), K.value && e.nodeName !== "DIV") {
    t.preventDefault(), t.stopPropagation();
    return;
  }
  K.value && X.value !== null && ha(t, e);
}, va = (t, e) => {
  K.value || (K.value = !0, X.value = e, t.preventDefault(), t.stopPropagation());
}, hi = (t) => {
  K.value = !0;
  const e = oa(t);
  X.value = e.create();
}, ba = (t, e) => {
  const n = t.clientX, a = t.clientY, r = e.childNodes.values(), s = Array.from(r).filter((i) => i.nodeName != "#text");
  for (let i = 0; i < s.length; i++) {
    const o = s[i].getBoundingClientRect(), c = o.left + o.width / 2, l = o.top + o.height / 2, f = e.classList;
    if (n < c && f.contains("sp-style__layout-flex-direction__row") || a < l && f.contains("sp-style__layout-flex-direction__column"))
      return i;
  }
  return s.length;
}, qt = (t) => {
  t.addEventListener("click", (n) => ua(n, t)), t.addEventListener("mouseover", (n) => un(n, t)), t.addEventListener("mouseout", (n) => ma(n, t));
  const e = t;
  e.tagName === "DIV" && (e.addEventListener("dragover", (n) => ya(n, t)), e.addEventListener("drop", (n) => da(n, t))), e.setAttribute("draggable", "true"), t.addEventListener("drag", (n) => va(n, t));
}, xa = (t) => {
  const e = Qn[t];
  return ta[e].map((a) => ({
    tab: a,
    ...Jn[a]
  }));
}, yi = (t, e) => e.find((n) => n.startsWith(t)), Wt = (t) => {
  var e = t.toString(16);
  return e.length == 1 ? "0" + e : e;
}, vi = (t) => {
  if (t === "")
    return "";
  if (t.match(/#[0-9A-Fa-f]{6}/))
    return t;
  const e = t.match(/\d+/g), n = parseInt(e[0]), a = parseInt(e[1]), r = parseInt(e[2]);
  return "#" + Wt(n) + Wt(a) + Wt(r);
}, _a = (t) => {
  document.querySelectorAll(t).forEach((a) => qt(a));
  const n = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
  n && qt(n);
}, Aa = () => {
  Zn.forEach((t) => {
    _a(`[data-simplisitiid="simplisiti-component-preview"] ${t}`);
  });
}, Ca = { class: "sp-wizard-popup__tabs-container" }, wa = { class: "sp-wizard-popup__tabs" }, Ea = { class: "sp-wizard-popup__tab" }, La = ["title", "onClick"], Sa = { class: "sp-wizard-popup__content" }, ka = { class: "sp-wizard-popup__content-header" }, Oa = /* @__PURE__ */ it({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = R([]), r = R({}), s = Gn([]), i = R(void 0), o = e, c = () => {
      for (const p of xa(n.tagName.toLowerCase()))
        s.push({
          component: rn(p.component),
          icon: p.icon,
          title: p.title,
          tab: p.tab,
          spClassList: a.value,
          spStyleList: r.value,
          spContent: {
            content: "",
            type: "text"
          },
          spAttribute: {
            content: "",
            type: "src"
          }
        });
    }, l = (p) => {
      i.value = p, o("tabChange", p.tab);
    }, f = () => {
      s.length > 0 && l(s[0]);
    }, h = (p) => {
      var y;
      return ((y = i.value) == null ? void 0 : y.tab) === p.tab;
    }, g = (p) => new Promise((y) => {
      setTimeout(() => {
        n.classList.remove(p), y();
      }, 10);
    }), _ = (p) => new Promise((y) => {
      setTimeout(() => {
        n.classList.add(p), y();
      }, 10);
    }), E = () => new Promise((p) => {
      n.classList.forEach(async (y) => {
        y.startsWith("sp-style") && await g(y);
      }), p();
    }), L = (p) => new Promise((y) => {
      p.forEach(async (N) => {
        await _(N);
      }), y();
    }), A = (p) => new Promise((y) => {
      for (const N in p)
        n.style.setProperty(N, p[N]);
      y();
    }), u = (p) => new Promise((y) => {
      n.innerHTML = p.content, y();
    }), d = (p) => new Promise((y) => {
      n.setAttribute(p.type, p.content), y();
    }), v = (p, y) => {
      y != null && y.spClassList && (y.spClassList = p);
      const N = s.flatMap((C) => C.spClassList);
      a.value = N, E().then(() => {
        L(N).then(() => {
          n.dataset.simplisitiid && ca(n.dataset.simplisitiid, N);
        });
      });
    }, w = (p) => {
      var N;
      (N = i.value) != null && N.spStyleList && (i.value.spStyleList = p);
      const y = s.reduce((C, kt) => ({ ...C, ...kt.spStyleList, ...p }), {});
      r.value = y, A(y).then(() => {
        n.dataset.simplisitiid && la(n.dataset.simplisitiid, y);
      });
    }, k = (p) => {
      var y;
      (y = i.value) != null && y.spContent && (i.value.spContent = p), u(p).then(() => {
        n.dataset.simplisitiid && p.type === "text" && fn(n.dataset.simplisitiid, p.content);
      });
    }, ot = (p) => {
      var y;
      (y = i.value) != null && y.spAttribute && (i.value.spAttribute = p), d(p).then(() => {
        n.dataset.simplisitiid && fa(n.dataset.simplisitiid, p);
      });
    }, W = () => {
      a.value = Array.from(n.classList).filter((p) => p.startsWith("sp-style"));
    }, Ut = () => {
      for (let p in n.style)
        ea.includes(p) && n.style[p] !== "" && (r.value[p] = n.style[p]);
    };
    return me(() => {
      W(), Ut(), c(), f();
    }), (p, y) => {
      const N = de("fa-icon");
      return S(), F(vt, null, [
        P("div", Ca, [
          P("div", wa, [
            (S(!0), F(vt, null, Xt(et(s), (C) => (S(), F("div", Ea, [
              P("button", {
                class: pe(["sp-wizard-popup__tab-button", { "sp-wizard-popup__tab-button__active": h(C) }]),
                title: C.title,
                onClick: (kt) => l(C)
              }, [
                ut(N, {
                  icon: C.icon
                }, null, 8, ["icon"])
              ], 10, La)
            ]))), 256))
          ])
        ]),
        P("div", Sa, [
          P("div", ka, [
            (S(!0), F(vt, null, Xt(et(s), (C) => (S(), F("div", null, [
              nn(P("div", null, [
                (S(), Ft(an(C == null ? void 0 : C.component), {
                  "sp-class-list": C == null ? void 0 : C.spClassList,
                  "onUpdate:spClassList": (kt) => v(kt, C),
                  "sp-style-list": C == null ? void 0 : C.spStyleList,
                  "onUpdate:spStyleList": w,
                  element: t.element,
                  "onUpdate:spContent": k,
                  "onUpdate:spAttribute": ot
                }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
              ], 512), [
                [Vn, h(C)]
              ])
            ]))), 256))
          ])
        ])
      ], 64);
    };
  }
}), he = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, Pa = /* @__PURE__ */ he(Oa, [["__scopeId", "data-v-0f7f4822"]]), Na = { class: "sp-configuration-popup__header" }, Ma = { class: "sp-configuration-popup__body" }, za = /* @__PURE__ */ it({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = R(null), r = R(!1), s = e, i = (h) => {
      setTimeout(() => {
        if (!h || !a.value) return;
        const g = h.getBoundingClientRect(), _ = document.body.offsetWidth, E = document.body.offsetHeight, L = 250, A = 10;
        let u = g.top, d = g.left + g.width + A;
        d + L > _ && (d = g.right - L, u = g.top - a.value.offsetHeight - A, u < A && (u = A)), u + a.value.offsetHeight > E && (u = E - a.value.offsetHeight - A), a.value.style.top = `${u}px`, a.value.style.left = `${d}px`;
      }, 50);
    }, o = T(() => {
      var g;
      const h = (g = n == null ? void 0 : n.tagName) == null ? void 0 : g.toLowerCase();
      return h && Kn[h] || "Element";
    }), c = (h) => {
      setTimeout(() => {
        s("close", h), r.value = !0;
      }, 300);
    }, l = (h) => {
      n && (n.remove(), n.dataset.simplisitiid && ln(n.dataset.simplisitiid), s("close", h)), r.value = !0;
    }, f = () => {
      i(n);
    };
    return i(n), me(() => {
      document.addEventListener("scroll", () => {
        i(n);
      });
    }), (h, g) => {
      const _ = de("fa-icon");
      return S(), F("div", {
        class: pe(["sp-configuration-popup", { "sp-configuration-popup_closed": r.value }]),
        ref_key: "popup",
        ref: a,
        onClick: sn((E) => {
        }, ["stop"])
      }, [
        P("div", Na, [
          P("h4", null, Xn(o.value), 1),
          P("button", {
            class: "sp-configuration-popup__button",
            onClick: l
          }, [
            ut(_, { icon: "trash" })
          ]),
          P("button", {
            class: "sp-configuration-popup__button",
            onClick: c
          }, [
            ut(_, { icon: "times" })
          ])
        ]),
        P("div", Ma, [
          t.element ? (S(), Ft(Pa, {
            key: 0,
            element: t.element,
            onTabChange: f
          }, null, 8, ["element"])) : ge("", !0)
        ])
      ], 2);
    };
  }
}), Ia = /* @__PURE__ */ he(za, [["__scopeId", "data-v-9896d74d"]]), Oe = [
  {
    icon: "cube",
    component: rn(() => import("./ElementsPanel-JYQm-_Gi.js"))
  }
  // {
  //     icon: 'comment-dots',
  //     component: defineAsyncComponent(() => import('../../components/element-floating-panel/CodeGeneratorPanel.vue')),
  // },
], Ta = { class: "sp-element__floating-container" }, Fa = { class: "sp-element__component-container" }, Da = { class: "sp-element__side-buttons" }, Ra = ["onClick"], ja = /* @__PURE__ */ it({
  __name: "ElementFloatingPanel",
  setup(t) {
    const e = R(!1), n = R(Oe[0]), a = () => {
      e.value = !e.value;
    }, r = (s) => {
      n.value = s, e.value = !0;
    };
    return (s, i) => {
      const o = de("fa-icon"), c = qn("key");
      return S(), F("div", Ta, [
        P("div", {
          class: pe(["sp-element__floating-panel", { "sp-element__floating-panel__closed": et(K) || !e.value }])
        }, [
          P("div", Fa, [
            (S(), Ft(an(n.value.component)))
          ])
        ], 2),
        P("div", Da, [
          (S(!0), F(vt, null, Xt(et(Oe), (l) => nn((S(), F("button", {
            class: "sp-element__close-button",
            onClick: (f) => r(l)
          }, [
            ut(o, {
              icon: l.icon
            }, null, 8, ["icon"])
          ], 8, Ra)), [
            [c, l.icon]
          ])), 256)),
          e.value ? (S(), F("button", {
            key: 0,
            class: "sp-element__close-button",
            onClick: a
          }, [
            ut(o, { icon: "times" })
          ])) : ge("", !0)
        ])
      ]);
    };
  }
}), Ha = /* @__PURE__ */ he(ja, [["__scopeId", "data-v-e6c667dc"]]), Ua = /* @__PURE__ */ it({
  __name: "App",
  setup(t) {
    on(K, (n) => {
      const a = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      n ? a == null || a.classList.add("sp-element__add-element-mode") : a == null || a.classList.remove("sp-element__add-element-mode");
    });
    const e = () => {
      ct.value && ct.value.classList.remove("sp-element__active"), ct.value = null, mt.value = !1;
    };
    return me(() => {
      document.body.innerHTML, Aa();
    }), (n, a) => {
      var r;
      return S(), F(vt, null, [
        et(mt) ? (S(), Ft(Ia, {
          key: 0,
          element: et(ct),
          type: (r = et(ct)) == null ? void 0 : r.tagName,
          onClose: sn(e, ["stop"])
        }, null, 8, ["element", "type"])) : ge("", !0),
        ut(Ha)
      ], 64);
    };
  }
}), Pe = () => {
};
let ye = {}, mn = {}, dn = null, pn = {
  mark: Pe,
  measure: Pe
};
try {
  typeof window < "u" && (ye = window), typeof document < "u" && (mn = document), typeof MutationObserver < "u" && (dn = MutationObserver), typeof performance < "u" && (pn = performance);
} catch {
}
const {
  userAgent: Ne = ""
} = ye.navigator || {}, Q = ye, b = mn, Me = dn, Ot = pn;
Q.document;
const G = !!b.documentElement && !!b.head && typeof b.addEventListener == "function" && typeof b.createElement == "function", gn = ~Ne.indexOf("MSIE") || ~Ne.indexOf("Trident/");
var x = "classic", hn = "duotone", M = "sharp", z = "sharp-duotone", Wa = [x, hn, M, z], Ba = {
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
}, ze = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ya = ["kit"], $a = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Ga = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Va = {
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
}, Xa = {
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
}, qa = {
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
}, Ka = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Qa = {
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
}, Za = {
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
}, yn = {
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
}, Ja = ["solid", "regular", "light", "thin", "duotone", "brands"], vn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], tr = vn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ht = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, er = [...Object.keys(Ka), ...Ja, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ht.GROUP, ht.SWAP_OPACITY, ht.PRIMARY, ht.SECONDARY].concat(vn.map((t) => "".concat(t, "x"))).concat(tr.map((t) => "w-".concat(t))), nr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ar = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, rr = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Ie = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Y = "___FONT_AWESOME___", Kt = 16, bn = "fa", xn = "svg-inline--fa", rt = "data-fa-i2svg", Qt = "data-fa-pseudo-element", sr = "data-fa-pseudo-element-pending", ve = "data-prefix", be = "data-icon", Te = "fontawesome-i2svg", ir = "async", or = ["HTML", "HEAD", "STYLE", "SCRIPT"], _n = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), An = [x, M, z];
function Lt(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[x];
    }
  });
}
const Cn = {
  ...yn
};
Cn[x] = {
  ...yn[x],
  ...ze.kit,
  ...ze["kit-duotone"]
};
const nt = Lt(Cn), Zt = {
  ...Za
};
Zt[x] = {
  ...Zt[x],
  ...Ie.kit,
  ...Ie["kit-duotone"]
};
const At = Lt(Zt), Jt = {
  ...Qa
};
Jt[x] = {
  ...Jt[x],
  ...rr.kit
};
const at = Lt(Jt), te = {
  ...qa
};
te[x] = {
  ...te[x],
  ...ar.kit
};
const cr = Lt(te), lr = $a, wn = "fa-layers-text", fr = Ga, ur = {
  ...Ba
};
Lt(ur);
const mr = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Bt = ht, dt = /* @__PURE__ */ new Set();
Object.keys(At[x]).map(dt.add.bind(dt));
Object.keys(At[M]).map(dt.add.bind(dt));
Object.keys(At[z]).map(dt.add.bind(dt));
const dr = [...Ya, ...er], bt = Q.FontAwesomeConfig || {};
function pr(t) {
  var e = b.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function gr(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
b && typeof b.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = gr(pr(n));
  r != null && (bt[a] = r);
});
const En = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: bn,
  replacementClass: xn,
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
bt.familyPrefix && (bt.cssPrefix = bt.familyPrefix);
const pt = {
  ...En,
  ...bt
};
pt.autoReplaceSvg || (pt.observeMutations = !1);
const m = {};
Object.keys(En).forEach((t) => {
  Object.defineProperty(m, t, {
    enumerable: !0,
    set: function(e) {
      pt[t] = e, xt.forEach((n) => n(m));
    },
    get: function() {
      return pt[t];
    }
  });
});
Object.defineProperty(m, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    pt.cssPrefix = t, xt.forEach((e) => e(m));
  },
  get: function() {
    return pt.cssPrefix;
  }
});
Q.FontAwesomeConfig = m;
const xt = [];
function hr(t) {
  return xt.push(t), () => {
    xt.splice(xt.indexOf(t), 1);
  };
}
const V = Kt, j = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function yr(t) {
  if (!t || !G)
    return;
  const e = b.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = b.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const s = n[r], i = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(i) > -1 && (a = s);
  }
  return b.head.insertBefore(e, a), t;
}
const vr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ct() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += vr[Math.random() * 62 | 0];
  return e;
}
function gt(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function xe(t) {
  return t.classList ? gt(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Ln(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function br(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(Ln(t[n]), '" '), "").trim();
}
function Dt(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function _e(t) {
  return t.size !== j.size || t.x !== j.x || t.y !== j.y || t.rotate !== j.rotate || t.flipX || t.flipY;
}
function xr(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: a
  } = t;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), i = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), o = "rotate(".concat(e.rotate, " 0 0)"), c = {
    transform: "".concat(s, " ").concat(i, " ").concat(o)
  }, l = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: c,
    path: l
  };
}
function _r(t) {
  let {
    transform: e,
    width: n = Kt,
    height: a = Kt,
    startCentered: r = !1
  } = t, s = "";
  return r && gn ? s += "translate(".concat(e.x / V - n / 2, "em, ").concat(e.y / V - a / 2, "em) ") : r ? s += "translate(calc(-50% + ".concat(e.x / V, "em), calc(-50% + ").concat(e.y / V, "em)) ") : s += "translate(".concat(e.x / V, "em, ").concat(e.y / V, "em) "), s += "scale(".concat(e.size / V * (e.flipX ? -1 : 1), ", ").concat(e.size / V * (e.flipY ? -1 : 1), ") "), s += "rotate(".concat(e.rotate, "deg) "), s;
}
var Ar = `:root, :host {
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
function Sn() {
  const t = bn, e = xn, n = m.cssPrefix, a = m.replacementClass;
  let r = Ar;
  if (n !== t || a !== e) {
    const s = new RegExp("\\.".concat(t, "\\-"), "g"), i = new RegExp("\\--".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(e), "g");
    r = r.replace(s, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let Fe = !1;
function Yt() {
  m.autoAddCss && !Fe && (yr(Sn()), Fe = !0);
}
var Cr = {
  mixout() {
    return {
      dom: {
        css: Sn,
        insertCss: Yt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Yt();
      },
      beforeI2svg() {
        Yt();
      }
    };
  }
};
const $ = Q || {};
$[Y] || ($[Y] = {});
$[Y].styles || ($[Y].styles = {});
$[Y].hooks || ($[Y].hooks = {});
$[Y].shims || ($[Y].shims = []);
var H = $[Y];
const kn = [], On = function() {
  b.removeEventListener("DOMContentLoaded", On), Mt = 1, kn.map((t) => t());
};
let Mt = !1;
G && (Mt = (b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(b.readyState), Mt || b.addEventListener("DOMContentLoaded", On));
function wr(t) {
  G && (Mt ? setTimeout(t, 0) : kn.push(t));
}
function St(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? Ln(t) : "<".concat(e, " ").concat(br(n), ">").concat(a.map(St).join(""), "</").concat(e, ">");
}
function De(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var $t = function(e, n, a, r) {
  var s = Object.keys(e), i = s.length, o = n, c, l, f;
  for (a === void 0 ? (c = 1, f = e[s[0]]) : (c = 0, f = a); c < i; c++)
    l = s[c], f = o(f, e[l], l, e);
  return f;
};
function Er(t) {
  const e = [];
  let n = 0;
  const a = t.length;
  for (; n < a; ) {
    const r = t.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const s = t.charCodeAt(n++);
      (s & 64512) == 56320 ? e.push(((r & 1023) << 10) + (s & 1023) + 65536) : (e.push(r), n--);
    } else
      e.push(r);
  }
  return e;
}
function ee(t) {
  const e = Er(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Lr(t, e) {
  const n = t.length;
  let a = t.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function Re(t) {
  return Object.keys(t).reduce((e, n) => {
    const a = t[n];
    return !!a.icon ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function ne(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = Re(e);
  typeof H.hooks.addPack == "function" && !a ? H.hooks.addPack(t, Re(e)) : H.styles[t] = {
    ...H.styles[t] || {},
    ...r
  }, t === "fas" && ne("fa", e);
}
const {
  styles: tt,
  shims: Sr
} = H, kr = {
  [x]: Object.values(at[x]),
  [M]: Object.values(at[M]),
  [z]: Object.values(at[z])
};
let Ae = null, Pn = {}, Nn = {}, Mn = {}, zn = {}, In = {};
const Or = {
  [x]: Object.keys(nt[x]),
  [M]: Object.keys(nt[M]),
  [z]: Object.keys(nt[z])
};
function Pr(t) {
  return ~dr.indexOf(t);
}
function Nr(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Pr(r) ? r : null;
}
const Tn = () => {
  const t = (a) => $t(tt, (r, s, i) => (r[i] = $t(s, a, {}), r), {});
  Pn = t((a, r, s) => (r[3] && (a[r[3]] = s), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = s;
  }), a)), Nn = t((a, r, s) => (a[s] = s, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = s;
  }), a)), In = t((a, r, s) => {
    const i = r[2];
    return a[s] = s, i.forEach((o) => {
      a[o] = s;
    }), a;
  });
  const e = "far" in tt || m.autoFetchSvg, n = $t(Sr, (a, r) => {
    const s = r[0];
    let i = r[1];
    const o = r[2];
    return i === "far" && !e && (i = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: i,
      iconName: o
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: i,
      iconName: o
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Mn = n.names, zn = n.unicodes, Ae = Rt(m.styleDefault, {
    family: m.familyDefault
  });
};
hr((t) => {
  Ae = Rt(t.styleDefault, {
    family: m.familyDefault
  });
});
Tn();
function Ce(t, e) {
  return (Pn[t] || {})[e];
}
function Mr(t, e) {
  return (Nn[t] || {})[e];
}
function q(t, e) {
  return (In[t] || {})[e];
}
function Fn(t) {
  return Mn[t] || {
    prefix: null,
    iconName: null
  };
}
function zr(t) {
  const e = zn[t], n = Ce("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Z() {
  return Ae;
}
const we = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Rt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = x
  } = e, a = nt[n][t], r = At[n][t] || At[n][a], s = t in H.styles ? t : null;
  return r || s || null;
}
const Ir = {
  [x]: Object.keys(at[x]),
  [M]: Object.keys(at[M]),
  [z]: Object.keys(at[z])
};
function jt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e, a = {
    [x]: "".concat(m.cssPrefix, "-").concat(x),
    [M]: "".concat(m.cssPrefix, "-").concat(M),
    [z]: "".concat(m.cssPrefix, "-").concat(z)
  };
  let r = null, s = x;
  const i = Wa.filter((c) => c !== hn);
  i.forEach((c) => {
    (t.includes(a[c]) || t.some((l) => Ir[c].includes(l))) && (s = c);
  });
  const o = t.reduce((c, l) => {
    const f = Nr(m.cssPrefix, l);
    if (tt[l] ? (l = kr[s].includes(l) ? cr[s][l] : l, r = l, c.prefix = l) : Or[s].indexOf(l) > -1 ? (r = l, c.prefix = Rt(l, {
      family: s
    })) : f ? c.iconName = f : l !== m.replacementClass && !i.some((h) => l === a[h]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const h = r === "fa" ? Fn(c.iconName) : {}, g = q(c.prefix, c.iconName);
      h.prefix && (r = null), c.iconName = h.iconName || g || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !tt.far && tt.fas && !m.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, we());
  return (t.includes("fa-brands") || t.includes("fab")) && (o.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (o.prefix = "fad"), !o.prefix && s === M && (tt.fass || m.autoFetchSvg) && (o.prefix = "fass", o.iconName = q(o.prefix, o.iconName) || o.iconName), !o.prefix && s === z && (tt.fasds || m.autoFetchSvg) && (o.prefix = "fasds", o.iconName = q(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = Z() || "fas"), o;
}
class Tr {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((s) => {
      this.definitions[s] = {
        ...this.definitions[s] || {},
        ...r[s]
      }, ne(s, r[s]);
      const i = at[x][s];
      i && ne(i, r[s]), Tn();
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
        prefix: s,
        iconName: i,
        icon: o
      } = a[r], c = o[2];
      e[s] || (e[s] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (e[s][l] = o);
      }), e[s][i] = o;
    }), e;
  }
}
let je = [], lt = {};
const ft = {}, Fr = Object.keys(ft);
function Dr(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return je = t, lt = {}, Object.keys(ft).forEach((a) => {
    Fr.indexOf(a) === -1 && delete ft[a];
  }), je.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((s) => {
      typeof r[s] == "function" && (n[s] = r[s]), typeof r[s] == "object" && Object.keys(r[s]).forEach((i) => {
        n[s] || (n[s] = {}), n[s][i] = r[s][i];
      });
    }), a.hooks) {
      const s = a.hooks();
      Object.keys(s).forEach((i) => {
        lt[i] || (lt[i] = []), lt[i].push(s[i]);
      });
    }
    a.provides && a.provides(ft);
  }), n;
}
function ae(t, e) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (lt[t] || []).forEach((i) => {
    e = i.apply(null, [e, ...a]);
  }), e;
}
function st(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    n[a - 1] = arguments[a];
  (lt[t] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function J() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return ft[t] ? ft[t].apply(null, e) : void 0;
}
function re(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || Z();
  if (e)
    return e = q(n, e) || e, De(Dn.definitions, n, e) || De(H.styles, n, e);
}
const Dn = new Tr(), Rr = () => {
  m.autoReplaceSvg = !1, m.observeMutations = !1, st("noAuto");
}, jr = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return G ? (st("beforeI2svg", t), J("pseudoElements2svg", t), J("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0), m.observeMutations = !0, wr(() => {
      Ur({
        autoReplaceSvgRoot: e
      }), st("watch", t);
    });
  }
}, Hr = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: q(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = Rt(t[0]);
      return {
        prefix: n,
        iconName: q(n, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(m.cssPrefix, "-")) > -1 || t.match(lr))) {
      const e = jt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || Z(),
        iconName: q(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = Z();
      return {
        prefix: e,
        iconName: q(e, t) || t
      };
    }
  }
}, I = {
  noAuto: Rr,
  config: m,
  dom: jr,
  parse: Hr,
  library: Dn,
  findIconDefinition: re,
  toHtml: St
}, Ur = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = b
  } = t;
  (Object.keys(H.styles).length > 0 || m.autoFetchSvg) && G && m.autoReplaceSvg && I.dom.i2svg({
    node: e
  });
};
function Ht(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => St(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!G) return;
      const n = b.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function Wr(t) {
  let {
    children: e,
    main: n,
    mask: a,
    attributes: r,
    styles: s,
    transform: i
  } = t;
  if (_e(i) && n.found && !a.found) {
    const {
      width: o,
      height: c
    } = n, l = {
      x: o / c / 2,
      y: 0.5
    };
    r.style = Dt({
      ...s,
      "transform-origin": "".concat(l.x + i.x / 16, "em ").concat(l.y + i.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function Br(t) {
  let {
    prefix: e,
    iconName: n,
    children: a,
    attributes: r,
    symbol: s
  } = t;
  const i = s === !0 ? "".concat(e, "-").concat(m.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: i
      },
      children: a
    }]
  }];
}
function Ee(t) {
  const {
    icons: {
      main: e,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: s,
    symbol: i,
    title: o,
    maskId: c,
    titleId: l,
    extra: f,
    watchable: h = !1
  } = t, {
    width: g,
    height: _
  } = n.found ? n : e, E = a === "fak", L = [m.replacementClass, r ? "".concat(m.cssPrefix, "-").concat(r) : ""].filter((k) => f.classes.indexOf(k) === -1).filter((k) => k !== "" || !!k).concat(f.classes).join(" ");
  let A = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: L,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(_)
    }
  };
  const u = E && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(g / _ * 16 * 0.0625, "em")
  } : {};
  h && (A.attributes[rt] = ""), o && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(l || Ct())
    },
    children: [o]
  }), delete A.attributes.title);
  const d = {
    ...A,
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: c,
    transform: s,
    symbol: i,
    styles: {
      ...u,
      ...f.styles
    }
  }, {
    children: v,
    attributes: w
  } = n.found && e.found ? J("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : J("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  };
  return d.children = v, d.attributes = w, i ? Br(d) : Wr(d);
}
function He(t) {
  const {
    content: e,
    width: n,
    height: a,
    transform: r,
    title: s,
    extra: i,
    watchable: o = !1
  } = t, c = {
    ...i.attributes,
    ...s ? {
      title: s
    } : {},
    class: i.classes.join(" ")
  };
  o && (c[rt] = "");
  const l = {
    ...i.styles
  };
  _e(r) && (l.transform = _r({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), l["-webkit-transform"] = l.transform);
  const f = Dt(l);
  f.length > 0 && (c.style = f);
  const h = [];
  return h.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), s && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), h;
}
function Yr(t) {
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
  }, s = Dt(a.styles);
  s.length > 0 && (r.style = s);
  const i = [];
  return i.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
const {
  styles: Gt
} = H;
function se(t) {
  const e = t[0], n = t[1], [a] = t.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(m.cssPrefix, "-").concat(Bt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(Bt.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(m.cssPrefix, "-").concat(Bt.PRIMARY),
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
const $r = {
  found: !1,
  width: 512,
  height: 512
};
function Gr(t, e) {
  !_n && !m.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function ie(t, e) {
  let n = e;
  return e === "fa" && m.styleDefault !== null && (e = Z()), new Promise((a, r) => {
    if (n === "fa") {
      const s = Fn(t) || {};
      t = s.iconName || t, e = s.prefix || e;
    }
    if (t && e && Gt[e] && Gt[e][t]) {
      const s = Gt[e][t];
      return a(se(s));
    }
    Gr(t, e), a({
      ...$r,
      icon: m.showMissingIcons && t ? J("missingIconAbstract") || {} : {}
    });
  });
}
const Ue = () => {
}, oe = m.measurePerformance && Ot && Ot.mark && Ot.measure ? Ot : {
  mark: Ue,
  measure: Ue
}, yt = 'FA "6.6.0"', Vr = (t) => (oe.mark("".concat(yt, " ").concat(t, " begins")), () => Rn(t)), Rn = (t) => {
  oe.mark("".concat(yt, " ").concat(t, " ends")), oe.measure("".concat(yt, " ").concat(t), "".concat(yt, " ").concat(t, " begins"), "".concat(yt, " ").concat(t, " ends"));
};
var Le = {
  begin: Vr,
  end: Rn
};
const Pt = () => {
};
function We(t) {
  return typeof (t.getAttribute ? t.getAttribute(rt) : null) == "string";
}
function Xr(t) {
  const e = t.getAttribute ? t.getAttribute(ve) : null, n = t.getAttribute ? t.getAttribute(be) : null;
  return e && n;
}
function qr(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(m.replacementClass);
}
function Kr() {
  return m.autoReplaceSvg === !0 ? Nt.replace : Nt[m.autoReplaceSvg] || Nt.replace;
}
function Qr(t) {
  return b.createElementNS("http://www.w3.org/2000/svg", t);
}
function Zr(t) {
  return b.createElement(t);
}
function jn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? Qr : Zr
  } = e;
  if (typeof t == "string")
    return b.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(s) {
    a.setAttribute(s, t.attributes[s]);
  }), (t.children || []).forEach(function(s) {
    a.appendChild(jn(s, {
      ceFn: n
    }));
  }), a;
}
function Jr(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const Nt = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(jn(n), e);
      }), e.getAttribute(rt) === null && m.keepOriginalSource) {
        let n = b.createComment(Jr(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~xe(e).indexOf(m.replacementClass))
      return Nt.replace(t);
    const a = new RegExp("".concat(m.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((i, o) => (o === m.replacementClass || o.match(a) ? i.toSvg.push(o) : i.toNode.push(o), i), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", s.toNode.join(" "));
    }
    const r = n.map((s) => St(s)).join(`
`);
    e.setAttribute(rt, ""), e.innerHTML = r;
  }
};
function Be(t) {
  t();
}
function Hn(t, e) {
  const n = typeof e == "function" ? e : Pt;
  if (t.length === 0)
    n();
  else {
    let a = Be;
    m.mutateApproach === ir && (a = Q.requestAnimationFrame || Be), a(() => {
      const r = Kr(), s = Le.begin("mutate");
      t.map(r), s(), n();
    });
  }
}
let Se = !1;
function Un() {
  Se = !0;
}
function ce() {
  Se = !1;
}
let zt = null;
function Ye(t) {
  if (!Me || !m.observeMutations)
    return;
  const {
    treeCallback: e = Pt,
    nodeCallback: n = Pt,
    pseudoElementsCallback: a = Pt,
    observeMutationsRoot: r = b
  } = t;
  zt = new Me((s) => {
    if (Se) return;
    const i = Z();
    gt(s).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !We(o.addedNodes[0]) && (m.searchPseudoElements && a(o.target), e(o.target)), o.type === "attributes" && o.target.parentNode && m.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && We(o.target) && ~mr.indexOf(o.attributeName))
        if (o.attributeName === "class" && Xr(o.target)) {
          const {
            prefix: c,
            iconName: l
          } = jt(xe(o.target));
          o.target.setAttribute(ve, c || i), l && o.target.setAttribute(be, l);
        } else qr(o.target) && n(o.target);
    });
  }), G && zt.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ts() {
  zt && zt.disconnect();
}
function es(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((a, r) => {
    const s = r.split(":"), i = s[0], o = s.slice(1);
    return i && o.length > 0 && (a[i] = o.join(":").trim()), a;
  }, {})), n;
}
function ns(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "";
  let r = jt(xe(t));
  return r.prefix || (r.prefix = Z()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Mr(r.prefix, t.innerText) || Ce(r.prefix, ee(t.innerText))), !r.iconName && m.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function as(t) {
  const e = gt(t.attributes).reduce((r, s) => (r.name !== "class" && r.name !== "style" && (r[s.name] = s.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return m.autoA11y && (n ? e["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(a || Ct()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function rs() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: j,
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
function $e(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = ns(t), s = as(t), i = ae("parseNodeAttributes", {}, t);
  let o = e.styleParser ? es(t) : [];
  return {
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: j,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: r,
      styles: o,
      attributes: s
    },
    ...i
  };
}
const {
  styles: ss
} = H;
function Wn(t) {
  const e = m.autoReplaceSvg === "nest" ? $e(t, {
    styleParser: !1
  }) : $e(t);
  return ~e.extra.classes.indexOf(wn) ? J("generateLayersText", t, e) : J("generateSvgReplacementMutation", t, e);
}
let U = /* @__PURE__ */ new Set();
An.map((t) => {
  U.add("fa-".concat(t));
});
Object.keys(nt[x]).map(U.add.bind(U));
Object.keys(nt[M]).map(U.add.bind(U));
Object.keys(nt[z]).map(U.add.bind(U));
U = [...U];
function Ge(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!G) return Promise.resolve();
  const n = b.documentElement.classList, a = (f) => n.add("".concat(Te, "-").concat(f)), r = (f) => n.remove("".concat(Te, "-").concat(f)), s = m.autoFetchSvg ? U : An.map((f) => "fa-".concat(f)).concat(Object.keys(ss));
  s.includes("fa") || s.push("fa");
  const i = [".".concat(wn, ":not([").concat(rt, "])")].concat(s.map((f) => ".".concat(f, ":not([").concat(rt, "])"))).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = gt(t.querySelectorAll(i));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const c = Le.begin("onTree"), l = o.reduce((f, h) => {
    try {
      const g = Wn(h);
      g && f.push(g);
    } catch (g) {
      _n || g.name === "MissingIcon" && console.error(g);
    }
    return f;
  }, []);
  return new Promise((f, h) => {
    Promise.all(l).then((g) => {
      Hn(g, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), c(), f();
      });
    }).catch((g) => {
      c(), h(g);
    });
  });
}
function is(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Wn(t).then((n) => {
    n && Hn([n], e);
  });
}
function os(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || {}).icon ? e : re(e || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : re(r || {})), t(a, {
      ...n,
      mask: r
    });
  };
}
const cs = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = j,
    symbol: a = !1,
    mask: r = null,
    maskId: s = null,
    title: i = null,
    titleId: o = null,
    classes: c = [],
    attributes: l = {},
    styles: f = {}
  } = e;
  if (!t) return;
  const {
    prefix: h,
    iconName: g,
    icon: _
  } = t;
  return Ht({
    type: "icon",
    ...t
  }, () => (st("beforeDOMElementCreation", {
    iconDefinition: t,
    params: e
  }), m.autoA11y && (i ? l["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(o || Ct()) : (l["aria-hidden"] = "true", l.focusable = "false")), Ee({
    icons: {
      main: se(_),
      mask: r ? se(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: g,
    transform: {
      ...j,
      ...n
    },
    symbol: a,
    title: i,
    maskId: s,
    titleId: o,
    extra: {
      attributes: l,
      styles: f,
      classes: c
    }
  })));
};
var ls = {
  mixout() {
    return {
      icon: os(cs)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = Ge, t.nodeCallback = is, t;
      }
    };
  },
  provides(t) {
    t.i2svg = function(e) {
      const {
        node: n = b,
        callback: a = () => {
        }
      } = e;
      return Ge(n, a);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: a,
        title: r,
        titleId: s,
        prefix: i,
        transform: o,
        symbol: c,
        mask: l,
        maskId: f,
        extra: h
      } = n;
      return new Promise((g, _) => {
        Promise.all([ie(a, i), l.iconName ? ie(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((E) => {
          let [L, A] = E;
          g([e, Ee({
            icons: {
              main: L,
              mask: A
            },
            prefix: i,
            iconName: a,
            transform: o,
            symbol: c,
            maskId: f,
            title: r,
            titleId: s,
            extra: h,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, t.generateAbstractIcon = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: s,
        styles: i
      } = e;
      const o = Dt(i);
      o.length > 0 && (a.style = o);
      let c;
      return _e(s) && (c = J("generateAbstractTransformGrouping", {
        main: r,
        transform: s,
        containerWidth: r.width,
        iconWidth: r.width
      })), n.push(c || r.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, fs = {
  mixout() {
    return {
      layer(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = e;
        return Ht({
          type: "layer"
        }, () => {
          st("beforeDOMElementCreation", {
            assembler: t,
            params: e
          });
          let a = [];
          return t((r) => {
            Array.isArray(r) ? r.map((s) => {
              a = a.concat(s.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(m.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, us = {
  mixout() {
    return {
      counter(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: s = {}
        } = e;
        return Ht({
          type: "counter",
          content: t
        }, () => (st("beforeDOMElementCreation", {
          content: t,
          params: e
        }), Yr({
          content: t.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: s,
            classes: ["".concat(m.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, ms = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = j,
          title: a = null,
          classes: r = [],
          attributes: s = {},
          styles: i = {}
        } = e;
        return Ht({
          type: "text",
          content: t
        }, () => (st("beforeDOMElementCreation", {
          content: t,
          params: e
        }), He({
          content: t,
          transform: {
            ...j,
            ...n
          },
          title: a,
          extra: {
            attributes: s,
            styles: i,
            classes: ["".concat(m.cssPrefix, "-layers-text"), ...r]
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
        extra: s
      } = n;
      let i = null, o = null;
      if (gn) {
        const c = parseInt(getComputedStyle(e).fontSize, 10), l = e.getBoundingClientRect();
        i = l.width / c, o = l.height / c;
      }
      return m.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([e, He({
        content: e.innerHTML,
        width: i,
        height: o,
        transform: r,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const ds = new RegExp('"', "ug"), Ve = [1105920, 1112319], Xe = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Xa,
  ...Va,
  ...nr
}, le = Object.keys(Xe).reduce((t, e) => (t[e.toLowerCase()] = Xe[e], t), {}), ps = Object.keys(le).reduce((t, e) => {
  const n = le[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function gs(t) {
  const e = t.replace(ds, ""), n = Lr(e, 0), a = n >= Ve[0] && n <= Ve[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: ee(r ? e[0] : e),
    isSecondary: a || r
  };
}
function hs(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(e), r = isNaN(a) ? "normal" : a;
  return (le[n] || {})[r] || ps[n];
}
function qe(t, e) {
  const n = "".concat(sr).concat(e.replace(":", "-"));
  return new Promise((a, r) => {
    if (t.getAttribute(n) !== null)
      return a();
    const i = gt(t.children).filter((g) => g.getAttribute(Qt) === e)[0], o = Q.getComputedStyle(t, e), c = o.getPropertyValue("font-family"), l = c.match(fr), f = o.getPropertyValue("font-weight"), h = o.getPropertyValue("content");
    if (i && !l)
      return t.removeChild(i), a();
    if (l && h !== "none" && h !== "") {
      const g = o.getPropertyValue("content");
      let _ = hs(c, f);
      const {
        value: E,
        isSecondary: L
      } = gs(g), A = l[0].startsWith("FontAwesome");
      let u = Ce(_, E), d = u;
      if (A) {
        const v = zr(E);
        v.iconName && v.prefix && (u = v.iconName, _ = v.prefix);
      }
      if (u && !L && (!i || i.getAttribute(ve) !== _ || i.getAttribute(be) !== d)) {
        t.setAttribute(n, d), i && t.removeChild(i);
        const v = rs(), {
          extra: w
        } = v;
        w.attributes[Qt] = e, ie(u, _).then((k) => {
          const ot = Ee({
            ...v,
            icons: {
              main: k,
              mask: we()
            },
            prefix: _,
            iconName: d,
            extra: w,
            watchable: !0
          }), W = b.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(W, t.firstChild) : t.appendChild(W), W.outerHTML = ot.map((Ut) => St(Ut)).join(`
`), t.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function ys(t) {
  return Promise.all([qe(t, "::before"), qe(t, "::after")]);
}
function vs(t) {
  return t.parentNode !== document.head && !~or.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Qt) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Ke(t) {
  if (G)
    return new Promise((e, n) => {
      const a = gt(t.querySelectorAll("*")).filter(vs).map(ys), r = Le.begin("searchPseudoElements");
      Un(), Promise.all(a).then(() => {
        r(), ce(), e();
      }).catch(() => {
        r(), ce(), n();
      });
    });
}
var bs = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Ke, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = b
      } = e;
      m.searchPseudoElements && Ke(n);
    };
  }
};
let Qe = !1;
var xs = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Un(), Qe = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ye(ae("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ts();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        Qe ? ce() : Ye(ae("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const Ze = (t) => {
  let e = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce((n, a) => {
    const r = a.toLowerCase().split("-"), s = r[0];
    let i = r.slice(1).join("-");
    if (s && i === "h")
      return n.flipX = !0, n;
    if (s && i === "v")
      return n.flipY = !0, n;
    if (i = parseFloat(i), isNaN(i))
      return n;
    switch (s) {
      case "grow":
        n.size = n.size + i;
        break;
      case "shrink":
        n.size = n.size - i;
        break;
      case "left":
        n.x = n.x - i;
        break;
      case "right":
        n.x = n.x + i;
        break;
      case "up":
        n.y = n.y - i;
        break;
      case "down":
        n.y = n.y + i;
        break;
      case "rotate":
        n.rotate = n.rotate + i;
        break;
    }
    return n;
  }, e);
};
var _s = {
  mixout() {
    return {
      parse: {
        transform: (t) => Ze(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = Ze(n)), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractTransformGrouping = function(e) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: s
      } = e;
      const i = {
        transform: "translate(".concat(r / 2, " 256)")
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), l = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(o, " ").concat(c, " ").concat(l)
      }, h = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, g = {
        outer: i,
        inner: f,
        path: h
      };
      return {
        tag: "g",
        attributes: {
          ...g.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...g.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...g.path
            }
          }]
        }]
      };
    };
  }
};
const Vt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Je(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function As(t) {
  return t.tag === "g" ? t.children : [t];
}
var Cs = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), a = n ? jt(n.split(" ").map((r) => r.trim())) : we();
        return a.prefix || (a.prefix = Z()), t.mask = a, t.maskId = e.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides(t) {
    t.generateAbstractMask = function(e) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: s,
        maskId: i,
        transform: o
      } = e;
      const {
        width: c,
        icon: l
      } = r, {
        width: f,
        icon: h
      } = s, g = xr({
        transform: o,
        containerWidth: f,
        iconWidth: c
      }), _ = {
        tag: "rect",
        attributes: {
          ...Vt,
          fill: "white"
        }
      }, E = l.children ? {
        children: l.children.map(Je)
      } : {}, L = {
        tag: "g",
        attributes: {
          ...g.inner
        },
        children: [Je({
          tag: l.tag,
          attributes: {
            ...l.attributes,
            ...g.path
          },
          ...E
        })]
      }, A = {
        tag: "g",
        attributes: {
          ...g.outer
        },
        children: [L]
      }, u = "mask-".concat(i || Ct()), d = "clip-".concat(i || Ct()), v = {
        tag: "mask",
        attributes: {
          ...Vt,
          id: u,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [_, A]
      }, w = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: d
          },
          children: As(h)
        }, v]
      };
      return n.push(w, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(d, ")"),
          mask: "url(#".concat(u, ")"),
          ...Vt
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, ws = {
  provides(t) {
    let e = !1;
    Q.matchMedia && (e = Q.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
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
      const s = {
        ...r,
        attributeName: "opacity"
      }, i = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return e || i.children.push({
        tag: "animate",
        attributes: {
          ...r,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...s,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(i), n.push({
        tag: "path",
        attributes: {
          ...a,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: e ? [] : [{
          tag: "animate",
          attributes: {
            ...s,
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
            ...s,
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
}, Es = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Ls = [Cr, ls, fs, us, ms, bs, xs, _s, Cs, ws, Es];
Dr(Ls, {
  mixoutsTo: I
});
I.noAuto;
const Bn = I.config, Ss = I.library;
I.dom;
const It = I.parse;
I.findIconDefinition;
I.toHtml;
const ks = I.icon;
I.layer;
const Os = I.text;
I.counter;
const Ps = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Ns = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Ms = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, zs = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Is = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Ts = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Fs = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Ds = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Rs = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, js = {
  prefix: "fas",
  iconName: "comment-dots",
  icon: [512, 512, [128172, 62075, "commenting"], "f4ad", "M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Hs = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Us = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Ws = {
  prefix: "fas",
  iconName: "gear",
  icon: [512, 512, [9881, "cog"], "f013", "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
}, Bs = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Ys = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, $s = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Gs = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Vs = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, Xs = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, qs = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Ks = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Qs = {
  prefix: "fas",
  iconName: "gears",
  icon: [640, 512, ["cogs"], "f085", "M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
};
function tn(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? tn(Object(n), !0).forEach(function(a) {
      O(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Zs(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Js(t) {
  var e = Zs(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Tt(t) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(t);
}
function O(t, e, n) {
  return e = Js(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function ti(t, e) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      if (e.indexOf(a) >= 0) continue;
      n[a] = t[a];
    }
  return n;
}
function ei(t, e) {
  if (t == null) return {};
  var n = ti(t, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      a = s[r], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function fe(t) {
  return ni(t) || ai(t) || ri(t) || si();
}
function ni(t) {
  if (Array.isArray(t)) return ue(t);
}
function ai(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ri(t, e) {
  if (t) {
    if (typeof t == "string") return ue(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ue(t, e);
  }
}
function ue(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function si() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yn = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(u, d, v) {
      if (!l(d) || h(d) || g(d) || _(d) || c(d))
        return d;
      var w, k = 0, ot = 0;
      if (f(d))
        for (w = [], ot = d.length; k < ot; k++)
          w.push(n(u, d[k], v));
      else {
        w = {};
        for (var W in d)
          Object.prototype.hasOwnProperty.call(d, W) && (w[u(W, v)] = n(u, d[W], v));
      }
      return w;
    }, a = function(u, d) {
      d = d || {};
      var v = d.separator || "_", w = d.split || /(?=[A-Z])/;
      return u.split(w).join(v);
    }, r = function(u) {
      return E(u) ? u : (u = u.replace(/[\-_\s]+(.)?/g, function(d, v) {
        return v ? v.toUpperCase() : "";
      }), u.substr(0, 1).toLowerCase() + u.substr(1));
    }, s = function(u) {
      var d = r(u);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, i = function(u, d) {
      return a(u, d).toLowerCase();
    }, o = Object.prototype.toString, c = function(u) {
      return typeof u == "function";
    }, l = function(u) {
      return u === Object(u);
    }, f = function(u) {
      return o.call(u) == "[object Array]";
    }, h = function(u) {
      return o.call(u) == "[object Date]";
    }, g = function(u) {
      return o.call(u) == "[object RegExp]";
    }, _ = function(u) {
      return o.call(u) == "[object Boolean]";
    }, E = function(u) {
      return u = u - 0, u === u;
    }, L = function(u, d) {
      var v = d && "process" in d ? d.process : d;
      return typeof v != "function" ? u : function(w, k) {
        return v(w, u, k);
      };
    }, A = {
      camelize: r,
      decamelize: i,
      pascalize: s,
      depascalize: i,
      camelizeKeys: function(u, d) {
        return n(L(r, d), u);
      },
      decamelizeKeys: function(u, d) {
        return n(L(i, d), u, d);
      },
      pascalizeKeys: function(u, d) {
        return n(L(s, d), u);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(ii);
})(Yn);
var oi = Yn.exports, ci = ["class", "style"];
function li(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = oi.camelize(n.slice(0, a)), s = n.slice(a + 1).trim();
    return e[r] = s, e;
  }, {});
}
function fi(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function ke(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(c) {
    return ke(c);
  }), r = Object.keys(t.attributes || {}).reduce(function(c, l) {
    var f = t.attributes[l];
    switch (l) {
      case "class":
        c.class = fi(f);
        break;
      case "style":
        c.style = li(f);
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
  var s = n.style, i = s === void 0 ? {} : s, o = ei(n, ci);
  return cn(t.tag, D(D(D({}, e), {}, {
    class: r.class,
    style: D(D({}, r.style), i)
  }, r.attrs), o), a);
}
var $n = !1;
try {
  $n = process.env.NODE_ENV === "production";
} catch {
}
function ui() {
  if (!$n && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function _t(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? O({}, t, e) : {};
}
function mi(t) {
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
  }, O(O(O(O(O(O(O(O(O(O(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), O(O(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function en(t) {
  if (t && Tt(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (It.icon)
    return It.icon(t);
  if (t === null)
    return null;
  if (Tt(t) === "object" && t.prefix && t.iconName)
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
var di = it({
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
    var a = n.attrs, r = T(function() {
      return en(e.icon);
    }), s = T(function() {
      return _t("classes", mi(e));
    }), i = T(function() {
      return _t("transform", typeof e.transform == "string" ? It.transform(e.transform) : e.transform);
    }), o = T(function() {
      return _t("mask", en(e.mask));
    }), c = T(function() {
      return ks(r.value, D(D(D(D({}, s.value), i.value), o.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    on(c, function(f) {
      if (!f)
        return ui("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var l = T(function() {
      return c.value ? ke(c.value.abstract[0], {}, a) : null;
    });
    return function() {
      return l.value;
    };
  }
});
it({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var a = n.slots, r = Bn.familyPrefix, s = T(function() {
      return ["".concat(r, "-layers")].concat(fe(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return cn("div", {
        class: s.value
      }, a.default ? a.default() : []);
    };
  }
});
it({
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
    var a = n.attrs, r = Bn.familyPrefix, s = T(function() {
      return _t("classes", [].concat(fe(e.counter ? ["".concat(r, "-layers-counter")] : []), fe(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), i = T(function() {
      return _t("transform", typeof e.transform == "string" ? It.transform(e.transform) : e.transform);
    }), o = T(function() {
      var l = Os(e.value.toString(), D(D({}, i.value), s.value)), f = l.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), c = T(function() {
      return ke(o.value, {}, a);
    });
    return function() {
      return c.value;
    };
  }
});
Ss.add(
  Ks,
  Ys,
  Ts,
  Ps,
  Us,
  Ds,
  qs,
  Xs,
  Bs,
  Ns,
  Is,
  Fs,
  Gs,
  Hs,
  Vs,
  $s,
  Rs,
  Ms,
  zs,
  js,
  Qs,
  Ws
);
const bi = {
  install: (t) => {
    t.component("simplisiti-component-editor", Ua), t.component("fa-icon", di);
  }
};
export {
  gi as H,
  he as _,
  Kn as a,
  pa as d,
  hi as e,
  bi as m,
  yi as p,
  vi as r
};
