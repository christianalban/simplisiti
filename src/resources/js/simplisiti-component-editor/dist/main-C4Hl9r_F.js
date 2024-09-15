import { defineComponent as ot, ref as H, shallowReactive as Yn, onMounted as ue, resolveComponent as me, openBlock as k, createElementBlock as D, Fragment as vt, createElementVNode as E, renderList as Xt, unref as et, normalizeClass as de, createVNode as At, withDirectives as $n, createBlock as wt, resolveDynamicComponent as Gn, vShow as Vn, defineAsyncComponent as Xn, computed as T, withModifiers as tn, toDisplayString as en, createCommentVNode as nn, pushScopeId as qn, popScopeId as Kn, watch as an, h as rn } from "vue";
const sn = {
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
}, Le = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Zn = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-De1p9sc9.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-DQB4EXgR.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-B_W_ykE_.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-CcYLc1RU.js")
  },
  url: {
    title: "URL",
    icon: "link",
    component: () => import("./Url-B3XM_2zP.js")
  },
  src: {
    title: "SRC",
    icon: "link",
    component: () => import("./Src-BOuI__Xv.js")
  }
}, Jn = {
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
}, ta = [
  "color"
], ea = (t) => {
  const e = Qn[t];
  return Jn[e].map((a) => ({
    tab: a,
    ...Zn[a]
  }));
}, us = (t, e) => e.find((n) => n.startsWith(t)), Wt = (t) => {
  var e = t.toString(16);
  return e.length == 1 ? "0" + e : e;
}, ms = (t) => {
  if (t === "")
    return "";
  if (t.match(/#[0-9A-Fa-f]{6}/))
    return t;
  const e = t.match(/\d+/g), n = parseInt(e[0]), a = parseInt(e[1]), r = parseInt(e[2]);
  return "#" + Wt(n) + Wt(a) + Wt(r);
}, St = (t, e) => {
  window.parent.document.dispatchEvent(new CustomEvent(t, { detail: e }));
}, on = (t) => {
  St("elementRemoved", { simplisitiId: t });
}, ln = (t, e) => {
  St("contentChange", { simplisitiId: t, content: e });
}, na = (t, e) => {
  St("classChange", { simplisitiId: t, spClassList: e });
}, aa = (t, e) => {
  St("styleChange", { simplisitiId: t, spStyleList: e });
}, ra = (t, e) => {
  St("attributeChange", { simplisitiId: t, attribute: e });
}, ia = { class: "sp-wizard-popup__tabs-container" }, sa = { class: "sp-wizard-popup__tabs" }, oa = { class: "sp-wizard-popup__tab" }, la = ["title", "onClick"], ca = { class: "sp-wizard-popup__content" }, fa = { class: "sp-wizard-popup__content-header" }, ua = /* @__PURE__ */ ot({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = H([]), r = H({}), i = Yn([]), s = H(void 0), o = e, l = () => {
      for (const p of ea(n.tagName.toLowerCase()))
        i.push({
          component: Xn(p.component),
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
    }, c = (p) => {
      s.value = p, o("tabChange", p.tab);
    }, f = () => {
      i.length > 0 && c(i[0]);
    }, h = (p) => {
      var y;
      return ((y = s.value) == null ? void 0 : y.tab) === p.tab;
    }, g = (p) => new Promise((y) => {
      setTimeout(() => {
        n.classList.remove(p), y();
      }, 10);
    }), _ = (p) => new Promise((y) => {
      setTimeout(() => {
        n.classList.add(p), y();
      }, 10);
    }), S = () => new Promise((p) => {
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
      const N = i.flatMap((w) => w.spClassList);
      a.value = N, S().then(() => {
        L(N).then(() => {
          n.dataset.simplisitiid && na(n.dataset.simplisitiid, N);
        });
      });
    }, C = (p) => {
      var N;
      (N = s.value) != null && N.spStyleList && (s.value.spStyleList = p);
      const y = i.reduce((w, Ot) => ({ ...w, ...Ot.spStyleList, ...p }), {});
      r.value = y, A(y).then(() => {
        n.dataset.simplisitiid && aa(n.dataset.simplisitiid, y);
      });
    }, O = (p) => {
      var y;
      (y = s.value) != null && y.spContent && (s.value.spContent = p), u(p).then(() => {
        n.dataset.simplisitiid && p.type === "text" && ln(n.dataset.simplisitiid, p.content);
      });
    }, lt = (p) => {
      var y;
      (y = s.value) != null && y.spAttribute && (s.value.spAttribute = p), d(p).then(() => {
        n.dataset.simplisitiid && ra(n.dataset.simplisitiid, p);
      });
    }, W = () => {
      a.value = Array.from(n.classList).filter((p) => p.startsWith("sp-style"));
    }, Ut = () => {
      for (let p in n.style)
        ta.includes(p) && n.style[p] !== "" && (r.value[p] = n.style[p]);
    };
    return ue(() => {
      W(), Ut(), l(), f();
    }), (p, y) => {
      const N = me("fa-icon");
      return k(), D(vt, null, [
        E("div", ia, [
          E("div", sa, [
            (k(!0), D(vt, null, Xt(et(i), (w) => (k(), D("div", oa, [
              E("button", {
                class: de(["sp-wizard-popup__tab-button", { "sp-wizard-popup__tab-button__active": h(w) }]),
                title: w.title,
                onClick: (Ot) => c(w)
              }, [
                At(N, {
                  icon: w.icon
                }, null, 8, ["icon"])
              ], 10, la)
            ]))), 256))
          ])
        ]),
        E("div", ca, [
          E("div", fa, [
            (k(!0), D(vt, null, Xt(et(i), (w) => (k(), D("div", null, [
              $n(E("div", null, [
                (k(), wt(Gn(w == null ? void 0 : w.component), {
                  "sp-class-list": w == null ? void 0 : w.spClassList,
                  "onUpdate:spClassList": (Ot) => v(Ot, w),
                  "sp-style-list": w == null ? void 0 : w.spStyleList,
                  "onUpdate:spStyleList": C,
                  element: t.element,
                  "onUpdate:spContent": O,
                  "onUpdate:spAttribute": lt
                }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
              ], 512), [
                [Vn, h(w)]
              ])
            ]))), 256))
          ])
        ])
      ], 64);
    };
  }
}), pe = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of e)
    n[a] = r;
  return n;
}, ma = /* @__PURE__ */ pe(ua, [["__scopeId", "data-v-0f7f4822"]]), da = { class: "sp-configuration-popup__header" }, pa = { class: "sp-configuration-popup__body" }, ga = /* @__PURE__ */ ot({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const { element: n } = t, a = H(null), r = H(!1), i = e, s = (h) => {
      setTimeout(() => {
        if (!h || !a.value) return;
        const g = h.getBoundingClientRect(), _ = document.body.offsetWidth, S = document.body.offsetHeight, L = 250, A = 10;
        let u = g.top, d = g.left + g.width + A;
        d + L > _ && (d = g.right - L, u = g.top - a.value.offsetHeight - A, u < A && (u = A)), u + a.value.offsetHeight > S && (u = S - a.value.offsetHeight - A), a.value.style.top = `${u}px`, a.value.style.left = `${d}px`;
      }, 50);
    }, o = T(() => {
      var g;
      const h = (g = n == null ? void 0 : n.tagName) == null ? void 0 : g.toLowerCase();
      return h && sn[h] || "Element";
    }), l = (h) => {
      setTimeout(() => {
        i("close", h), r.value = !0;
      }, 300);
    }, c = (h) => {
      n && (n.remove(), n.dataset.simplisitiid && on(n.dataset.simplisitiid), i("close", h)), r.value = !0;
    }, f = () => {
      s(n);
    };
    return s(n), ue(() => {
      document.addEventListener("scroll", () => {
        s(n);
      });
    }), (h, g) => {
      const _ = me("fa-icon");
      return k(), D("div", {
        class: de(["sp-configuration-popup", { "sp-configuration-popup_closed": r.value }]),
        ref_key: "popup",
        ref: a,
        onClick: tn((S) => {
        }, ["stop"])
      }, [
        E("div", da, [
          E("h4", null, en(o.value), 1),
          E("button", {
            class: "sp-configuration-popup__button",
            onClick: c
          }, [
            At(_, { icon: "trash" })
          ]),
          E("button", {
            class: "sp-configuration-popup__button",
            onClick: l
          }, [
            At(_, { icon: "times" })
          ])
        ]),
        E("div", pa, [
          t.element ? (k(), wt(ma, {
            key: 0,
            element: t.element,
            onTabChange: f
          }, null, 8, ["element"])) : nn("", !0)
        ])
      ], 2);
    };
  }
}), ha = /* @__PURE__ */ pe(ga, [["__scopeId", "data-v-9896d74d"]]);
class Y {
  create() {
    const e = this.createElement();
    return Y.addElementListeners(e), e;
  }
  static addElementListeners(e) {
    e.addEventListener("click", (a) => wa(a, e)), e.addEventListener("mouseover", (a) => cn(a, e)), e.addEventListener("mouseout", (a) => Ca(a, e));
    const n = e;
    n.tagName === "DIV" && (n.addEventListener("dragover", (a) => ka(a, e)), n.addEventListener("drop", (a) => Ea(a, e))), n.setAttribute("draggable", "true"), e.addEventListener("drag", (a) => Oa(a, e));
  }
}
class ya extends Y {
  createElement() {
    const e = document.createElement("a");
    return e.innerHTML = "Enlace", e;
  }
}
class va extends Y {
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
class ba extends Y {
  createElement() {
    const e = document.createElement("p");
    return e.innerHTML = "Parrafo", e;
  }
}
class xa extends Y {
  createElement() {
    const e = document.createElement("h1");
    return e.innerHTML = "Cabecera 1", e;
  }
}
class _a extends Y {
  createElement() {
    const e = document.createElement("img");
    return e.src = "https://via.placeholder.com/150", e;
  }
}
const Aa = (t) => {
  if (t === "div")
    return new va();
  if (t === "a")
    return new ya();
  if (t === "p")
    return new ba();
  if (t === "h1")
    return new xa();
  if (t === "img")
    return new _a();
  throw new Error("Invalid type");
};
let B = null;
const rt = H(!1), mt = H(!1), ct = H(null), q = H(null), wa = (t, e) => {
  mt.value || (mt.value = !0, ct.value = e, e.classList.add("sp-element__active")), t.preventDefault(), t.stopPropagation();
}, cn = (t, e) => {
  mt.value || (Sa(), e.classList.add("sp-element__active")), t.preventDefault(), t.stopPropagation();
}, Ca = (t, e) => {
  mt.value || e.classList.remove("sp-element__active"), t.preventDefault(), t.stopPropagation();
}, Ea = (t, e) => {
  var a, r;
  const n = e;
  q.value !== null && (B == null || B.replaceWith(q.value)), n.innerHTML.startsWith("-empty-") && (n.innerHTML = n.innerHTML.replace("-empty-", "")), (a = q.value) != null && a.dataset.simplisitiid && on((r = q.value) == null ? void 0 : r.dataset.simplisitiid), (n.dataset.simplisitiid || n.id === "simplisiti-component-preview") && ln(n.dataset.simplisitiid, n.innerHTML.replace(/sp-element__active/, "")), rt.value = !1, q.value = null, t.preventDefault(), t.stopPropagation();
}, Sa = () => {
  document.querySelectorAll(".sp-element__active").forEach((e) => {
    e.classList.remove("sp-element__active");
  });
}, La = (t, e) => {
  B === null && (B = document.createElement("div"), B.id = "sp-element__placeholder", B.classList.add("sp-element__placeholder"));
  const n = Array.from(e.childNodes).filter((r) => r.nodeName != "#text"), a = Na(t, e);
  n[a] !== void 0 ? e.insertBefore(B, n[a]) : e.appendChild(B);
}, ka = (t, e) => {
  if (cn(t, e), rt.value && e.nodeName !== "DIV") {
    t.preventDefault(), t.stopPropagation();
    return;
  }
  rt.value && q.value !== null && La(t, e);
}, Oa = (t, e) => {
  rt.value || (rt.value = !0, q.value = e, t.preventDefault(), t.stopPropagation());
}, Pa = (t) => {
  rt.value = !0;
  const e = Aa(t);
  q.value = e.create();
}, Na = (t, e) => {
  const n = t.clientX, a = t.clientY, r = e.childNodes.values(), i = Array.from(r).filter((s) => s.nodeName != "#text");
  for (let s = 0; s < i.length; s++) {
    const o = i[s].getBoundingClientRect(), l = o.left + o.width / 2, c = o.top + o.height / 2, f = e.classList;
    if (n < l && f.contains("sp-style__layout-flex-direction__row") || a < c && f.contains("sp-style__layout-flex-direction__column"))
      return s;
  }
  return i.length;
}, Ma = (t) => (qn("data-v-4e3ae0aa"), t = t(), Kn(), t), Ia = { class: "sp-element__floating-container" }, za = { class: "sp-element__element-content" }, Ta = /* @__PURE__ */ Ma(() => /* @__PURE__ */ E("div", null, [
  /* @__PURE__ */ E("h2", { class: "sp-element__title" }, "Elementos")
], -1)), Fa = ["title", "onDragstart"], Da = { class: "sp-element__side-buttons" }, Ra = /* @__PURE__ */ ot({
  __name: "ElementFloatingPanel",
  setup(t) {
    const e = H(!0), n = Object.keys(Le).map((r) => ({
      icon: Le[r],
      title: sn[r],
      element: r
    })), a = () => {
      e.value = !e.value;
    };
    return (r, i) => {
      const s = me("fa-icon");
      return k(), D("div", Ia, [
        E("div", {
          class: de(["sp-element__floating-panel", { "sp-element__floating-panel__closed": !e.value }])
        }, [
          E("div", za, [
            Ta,
            (k(!0), D(vt, null, Xt(et(n), ({ icon: o, title: l, element: c }) => (k(), D("div", {
              class: "sp-element__icons-container",
              title: l,
              onDragstart: (f) => et(Pa)(c),
              draggable: "true"
            }, [
              At(s, {
                icon: o,
                class: "sp-element__icon"
              }, null, 8, ["icon"]),
              E("span", null, en(l), 1)
            ], 40, Fa))), 256))
          ])
        ], 2),
        E("div", Da, [
          E("button", {
            class: "sp-element__close-button",
            onClick: a
          }, [
            e.value ? (k(), wt(s, {
              key: 0,
              icon: "times"
            })) : (k(), wt(s, {
              key: 1,
              icon: "cube"
            }))
          ])
        ])
      ]);
    };
  }
}), ja = /* @__PURE__ */ pe(Ra, [["__scopeId", "data-v-4e3ae0aa"]]), Ha = /* @__PURE__ */ ot({
  __name: "App",
  setup(t) {
    const e = (a) => {
      a.forEach((i) => Y.addElementListeners(i));
      const r = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      r && Y.addElementListeners(r);
    };
    an(rt, (a) => {
      const r = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      a ? r == null || r.classList.add("sp-element__add-element-mode") : r == null || r.classList.remove("sp-element__add-element-mode");
    });
    const n = () => {
      ct.value && ct.value.classList.remove("sp-element__active"), ct.value = null, mt.value = !1;
    };
    return ue(() => {
      const a = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] div'), r = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] a'), i = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] p'), s = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] h1'), o = document.querySelectorAll('[data-simplisitiid="simplisiti-component-preview"] img');
      e(a), e(r), e(i), e(s), e(o);
    }), (a, r) => {
      var i;
      return k(), D(vt, null, [
        et(mt) ? (k(), wt(ha, {
          key: 0,
          element: et(ct),
          type: (i = et(ct)) == null ? void 0 : i.tagName,
          onClose: tn(n, ["stop"])
        }, null, 8, ["element", "type"])) : nn("", !0),
        At(ja)
      ], 64);
    };
  }
}), ke = () => {
};
let ge = {}, fn = {}, un = null, mn = {
  mark: ke,
  measure: ke
};
try {
  typeof window < "u" && (ge = window), typeof document < "u" && (fn = document), typeof MutationObserver < "u" && (un = MutationObserver), typeof performance < "u" && (mn = performance);
} catch {
}
const {
  userAgent: Oe = ""
} = ge.navigator || {}, Q = ge, b = fn, Pe = un, Pt = mn;
Q.document;
const V = !!b.documentElement && !!b.head && typeof b.addEventListener == "function" && typeof b.createElement == "function", dn = ~Oe.indexOf("MSIE") || ~Oe.indexOf("Trident/");
var x = "classic", pn = "duotone", M = "sharp", I = "sharp-duotone", Ua = [x, pn, M, I], Wa = {
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
}, Ne = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ba = ["kit"], Ya = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, $a = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ga = {
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
}, Va = {
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
}, Xa = {
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
}, qa = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Ka = {
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
}, Qa = {
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
}, gn = {
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
}, Za = ["solid", "regular", "light", "thin", "duotone", "brands"], hn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Ja = hn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ht = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, tr = [...Object.keys(qa), ...Za, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ht.GROUP, ht.SWAP_OPACITY, ht.PRIMARY, ht.SECONDARY].concat(hn.map((t) => "".concat(t, "x"))).concat(Ja.map((t) => "w-".concat(t))), er = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, nr = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ar = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Me = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const $ = "___FONT_AWESOME___", qt = 16, yn = "fa", vn = "svg-inline--fa", it = "data-fa-i2svg", Kt = "data-fa-pseudo-element", rr = "data-fa-pseudo-element-pending", he = "data-prefix", ye = "data-icon", Ie = "fontawesome-i2svg", ir = "async", sr = ["HTML", "HEAD", "STYLE", "SCRIPT"], bn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), xn = [x, M, I];
function Lt(t) {
  return new Proxy(t, {
    get(e, n) {
      return n in e ? e[n] : e[x];
    }
  });
}
const _n = {
  ...gn
};
_n[x] = {
  ...gn[x],
  ...Ne.kit,
  ...Ne["kit-duotone"]
};
const nt = Lt(_n), Qt = {
  ...Qa
};
Qt[x] = {
  ...Qt[x],
  ...Me.kit,
  ...Me["kit-duotone"]
};
const Ct = Lt(Qt), Zt = {
  ...Ka
};
Zt[x] = {
  ...Zt[x],
  ...ar.kit
};
const at = Lt(Zt), Jt = {
  ...Xa
};
Jt[x] = {
  ...Jt[x],
  ...nr.kit
};
const or = Lt(Jt), lr = Ya, An = "fa-layers-text", cr = $a, fr = {
  ...Wa
};
Lt(fr);
const ur = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Bt = ht, dt = /* @__PURE__ */ new Set();
Object.keys(Ct[x]).map(dt.add.bind(dt));
Object.keys(Ct[M]).map(dt.add.bind(dt));
Object.keys(Ct[I]).map(dt.add.bind(dt));
const mr = [...Ba, ...tr], bt = Q.FontAwesomeConfig || {};
function dr(t) {
  var e = b.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function pr(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
b && typeof b.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((e) => {
  let [n, a] = e;
  const r = pr(dr(n));
  r != null && (bt[a] = r);
});
const wn = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: yn,
  replacementClass: vn,
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
  ...wn,
  ...bt
};
pt.autoReplaceSvg || (pt.observeMutations = !1);
const m = {};
Object.keys(wn).forEach((t) => {
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
function gr(t) {
  return xt.push(t), () => {
    xt.splice(xt.indexOf(t), 1);
  };
}
const X = qt, R = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function hr(t) {
  if (!t || !V)
    return;
  const e = b.createElement("style");
  e.setAttribute("type", "text/css"), e.innerHTML = t;
  const n = b.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
  }
  return b.head.insertBefore(e, a), t;
}
const yr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Et() {
  let t = 12, e = "";
  for (; t-- > 0; )
    e += yr[Math.random() * 62 | 0];
  return e;
}
function gt(t) {
  const e = [];
  for (let n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function ve(t) {
  return t.classList ? gt(t.classList) : (t.getAttribute("class") || "").split(" ").filter((e) => e);
}
function Cn(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function vr(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, '="').concat(Cn(t[n]), '" '), "").trim();
}
function Dt(t) {
  return Object.keys(t || {}).reduce((e, n) => e + "".concat(n, ": ").concat(t[n].trim(), ";"), "");
}
function be(t) {
  return t.size !== R.size || t.x !== R.x || t.y !== R.y || t.rotate !== R.rotate || t.flipX || t.flipY;
}
function br(t) {
  let {
    transform: e,
    containerWidth: n,
    iconWidth: a
  } = t;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), s = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), o = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(i, " ").concat(s, " ").concat(o)
  }, c = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: c
  };
}
function xr(t) {
  let {
    transform: e,
    width: n = qt,
    height: a = qt,
    startCentered: r = !1
  } = t, i = "";
  return r && dn ? i += "translate(".concat(e.x / X - n / 2, "em, ").concat(e.y / X - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(e.x / X, "em), calc(-50% + ").concat(e.y / X, "em)) ") : i += "translate(".concat(e.x / X, "em, ").concat(e.y / X, "em) "), i += "scale(".concat(e.size / X * (e.flipX ? -1 : 1), ", ").concat(e.size / X * (e.flipY ? -1 : 1), ") "), i += "rotate(".concat(e.rotate, "deg) "), i;
}
var _r = `:root, :host {
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
function En() {
  const t = yn, e = vn, n = m.cssPrefix, a = m.replacementClass;
  let r = _r;
  if (n !== t || a !== e) {
    const i = new RegExp("\\.".concat(t, "\\-"), "g"), s = new RegExp("\\--".concat(t, "\\-"), "g"), o = new RegExp("\\.".concat(e), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let ze = !1;
function Yt() {
  m.autoAddCss && !ze && (hr(En()), ze = !0);
}
var Ar = {
  mixout() {
    return {
      dom: {
        css: En,
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
const G = Q || {};
G[$] || (G[$] = {});
G[$].styles || (G[$].styles = {});
G[$].hooks || (G[$].hooks = {});
G[$].shims || (G[$].shims = []);
var j = G[$];
const Sn = [], Ln = function() {
  b.removeEventListener("DOMContentLoaded", Ln), It = 1, Sn.map((t) => t());
};
let It = !1;
V && (It = (b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(b.readyState), It || b.addEventListener("DOMContentLoaded", Ln));
function wr(t) {
  V && (It ? setTimeout(t, 0) : Sn.push(t));
}
function kt(t) {
  const {
    tag: e,
    attributes: n = {},
    children: a = []
  } = t;
  return typeof t == "string" ? Cn(t) : "<".concat(e, " ").concat(vr(n), ">").concat(a.map(kt).join(""), "</").concat(e, ">");
}
function Te(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var $t = function(e, n, a, r) {
  var i = Object.keys(e), s = i.length, o = n, l, c, f;
  for (a === void 0 ? (l = 1, f = e[i[0]]) : (l = 0, f = a); l < s; l++)
    c = i[l], f = o(f, e[c], c, e);
  return f;
};
function Cr(t) {
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
function te(t) {
  const e = Cr(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Er(t, e) {
  const n = t.length;
  let a = t.charCodeAt(e), r;
  return a >= 55296 && a <= 56319 && n > e + 1 && (r = t.charCodeAt(e + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function Fe(t) {
  return Object.keys(t).reduce((e, n) => {
    const a = t[n];
    return !!a.icon ? e[a.iconName] = a.icon : e[n] = a, e;
  }, {});
}
function ee(t, e) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = Fe(e);
  typeof j.hooks.addPack == "function" && !a ? j.hooks.addPack(t, Fe(e)) : j.styles[t] = {
    ...j.styles[t] || {},
    ...r
  }, t === "fas" && ee("fa", e);
}
const {
  styles: tt,
  shims: Sr
} = j, Lr = {
  [x]: Object.values(at[x]),
  [M]: Object.values(at[M]),
  [I]: Object.values(at[I])
};
let xe = null, kn = {}, On = {}, Pn = {}, Nn = {}, Mn = {};
const kr = {
  [x]: Object.keys(nt[x]),
  [M]: Object.keys(nt[M]),
  [I]: Object.keys(nt[I])
};
function Or(t) {
  return ~mr.indexOf(t);
}
function Pr(t, e) {
  const n = e.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === t && r !== "" && !Or(r) ? r : null;
}
const In = () => {
  const t = (a) => $t(tt, (r, i, s) => (r[s] = $t(i, a, {}), r), {});
  kn = t((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = i;
  }), a)), On = t((a, r, i) => (a[i] = i, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = i;
  }), a)), Mn = t((a, r, i) => {
    const s = r[2];
    return a[i] = i, s.forEach((o) => {
      a[o] = i;
    }), a;
  });
  const e = "far" in tt || m.autoFetchSvg, n = $t(Sr, (a, r) => {
    const i = r[0];
    let s = r[1];
    const o = r[2];
    return s === "far" && !e && (s = "fas"), typeof i == "string" && (a.names[i] = {
      prefix: s,
      iconName: o
    }), typeof i == "number" && (a.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: o
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Pn = n.names, Nn = n.unicodes, xe = Rt(m.styleDefault, {
    family: m.familyDefault
  });
};
gr((t) => {
  xe = Rt(t.styleDefault, {
    family: m.familyDefault
  });
});
In();
function _e(t, e) {
  return (kn[t] || {})[e];
}
function Nr(t, e) {
  return (On[t] || {})[e];
}
function K(t, e) {
  return (Mn[t] || {})[e];
}
function zn(t) {
  return Pn[t] || {
    prefix: null,
    iconName: null
  };
}
function Mr(t) {
  const e = Nn[t], n = _e("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Z() {
  return xe;
}
const Ae = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Rt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = x
  } = e, a = nt[n][t], r = Ct[n][t] || Ct[n][a], i = t in j.styles ? t : null;
  return r || i || null;
}
const Ir = {
  [x]: Object.keys(at[x]),
  [M]: Object.keys(at[M]),
  [I]: Object.keys(at[I])
};
function jt(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = e, a = {
    [x]: "".concat(m.cssPrefix, "-").concat(x),
    [M]: "".concat(m.cssPrefix, "-").concat(M),
    [I]: "".concat(m.cssPrefix, "-").concat(I)
  };
  let r = null, i = x;
  const s = Ua.filter((l) => l !== pn);
  s.forEach((l) => {
    (t.includes(a[l]) || t.some((c) => Ir[l].includes(c))) && (i = l);
  });
  const o = t.reduce((l, c) => {
    const f = Pr(m.cssPrefix, c);
    if (tt[c] ? (c = Lr[i].includes(c) ? or[i][c] : c, r = c, l.prefix = c) : kr[i].indexOf(c) > -1 ? (r = c, l.prefix = Rt(c, {
      family: i
    })) : f ? l.iconName = f : c !== m.replacementClass && !s.some((h) => c === a[h]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const h = r === "fa" ? zn(l.iconName) : {}, g = K(l.prefix, l.iconName);
      h.prefix && (r = null), l.iconName = h.iconName || g || l.iconName, l.prefix = h.prefix || l.prefix, l.prefix === "far" && !tt.far && tt.fas && !m.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Ae());
  return (t.includes("fa-brands") || t.includes("fab")) && (o.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (o.prefix = "fad"), !o.prefix && i === M && (tt.fass || m.autoFetchSvg) && (o.prefix = "fass", o.iconName = K(o.prefix, o.iconName) || o.iconName), !o.prefix && i === I && (tt.fasds || m.autoFetchSvg) && (o.prefix = "fasds", o.iconName = K(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = Z() || "fas"), o;
}
class zr {
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
      }, ee(i, r[i]);
      const s = at[x][i];
      s && ee(s, r[i]), In();
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
        iconName: s,
        icon: o
      } = a[r], l = o[2];
      e[i] || (e[i] = {}), l.length > 0 && l.forEach((c) => {
        typeof c == "string" && (e[i][c] = o);
      }), e[i][s] = o;
    }), e;
  }
}
let De = [], ft = {};
const ut = {}, Tr = Object.keys(ut);
function Fr(t, e) {
  let {
    mixoutsTo: n
  } = e;
  return De = t, ft = {}, Object.keys(ut).forEach((a) => {
    Tr.indexOf(a) === -1 && delete ut[a];
  }), De.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = r[i][s];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((s) => {
        ft[s] || (ft[s] = []), ft[s].push(i[s]);
      });
    }
    a.provides && a.provides(ut);
  }), n;
}
function ne(t, e) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (ft[t] || []).forEach((s) => {
    e = s.apply(null, [e, ...a]);
  }), e;
}
function st(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
    n[a - 1] = arguments[a];
  (ft[t] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function J() {
  const t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return ut[t] ? ut[t].apply(null, e) : void 0;
}
function ae(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  let {
    iconName: e
  } = t;
  const n = t.prefix || Z();
  if (e)
    return e = K(n, e) || e, Te(Tn.definitions, n, e) || Te(j.styles, n, e);
}
const Tn = new zr(), Dr = () => {
  m.autoReplaceSvg = !1, m.observeMutations = !1, st("noAuto");
}, Rr = {
  i2svg: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return V ? (st("beforeI2svg", t), J("pseudoElements2svg", t), J("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: e
    } = t;
    m.autoReplaceSvg === !1 && (m.autoReplaceSvg = !0), m.observeMutations = !0, wr(() => {
      Hr({
        autoReplaceSvgRoot: e
      }), st("watch", t);
    });
  }
}, jr = {
  icon: (t) => {
    if (t === null)
      return null;
    if (typeof t == "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: K(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      const e = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = Rt(t[0]);
      return {
        prefix: n,
        iconName: K(n, e) || e
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(m.cssPrefix, "-")) > -1 || t.match(lr))) {
      const e = jt(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: e.prefix || Z(),
        iconName: K(e.prefix, e.iconName) || e.iconName
      };
    }
    if (typeof t == "string") {
      const e = Z();
      return {
        prefix: e,
        iconName: K(e, t) || t
      };
    }
  }
}, z = {
  noAuto: Dr,
  config: m,
  dom: Rr,
  parse: jr,
  library: Tn,
  findIconDefinition: ae,
  toHtml: kt
}, Hr = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: e = b
  } = t;
  (Object.keys(j.styles).length > 0 || m.autoFetchSvg) && V && m.autoReplaceSvg && z.dom.i2svg({
    node: e
  });
};
function Ht(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map((n) => kt(n));
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!V) return;
      const n = b.createElement("div");
      return n.innerHTML = t.html, n.children;
    }
  }), t;
}
function Ur(t) {
  let {
    children: e,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: s
  } = t;
  if (be(s) && n.found && !a.found) {
    const {
      width: o,
      height: l
    } = n, c = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = Dt({
      ...i,
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: e
  }];
}
function Wr(t) {
  let {
    prefix: e,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = t;
  const s = i === !0 ? "".concat(e, "-").concat(m.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...r,
        id: s
      },
      children: a
    }]
  }];
}
function we(t) {
  const {
    icons: {
      main: e,
      mask: n
    },
    prefix: a,
    iconName: r,
    transform: i,
    symbol: s,
    title: o,
    maskId: l,
    titleId: c,
    extra: f,
    watchable: h = !1
  } = t, {
    width: g,
    height: _
  } = n.found ? n : e, S = a === "fak", L = [m.replacementClass, r ? "".concat(m.cssPrefix, "-").concat(r) : ""].filter((O) => f.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(f.classes).join(" ");
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
  const u = S && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(g / _ * 16 * 0.0625, "em")
  } : {};
  h && (A.attributes[it] = ""), o && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || Et())
    },
    children: [o]
  }), delete A.attributes.title);
  const d = {
    ...A,
    prefix: a,
    iconName: r,
    main: e,
    mask: n,
    maskId: l,
    transform: i,
    symbol: s,
    styles: {
      ...u,
      ...f.styles
    }
  }, {
    children: v,
    attributes: C
  } = n.found && e.found ? J("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : J("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  };
  return d.children = v, d.attributes = C, s ? Wr(d) : Ur(d);
}
function Re(t) {
  const {
    content: e,
    width: n,
    height: a,
    transform: r,
    title: i,
    extra: s,
    watchable: o = !1
  } = t, l = {
    ...s.attributes,
    ...i ? {
      title: i
    } : {},
    class: s.classes.join(" ")
  };
  o && (l[it] = "");
  const c = {
    ...s.styles
  };
  be(r) && (c.transform = xr({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const f = Dt(c);
  f.length > 0 && (l.style = f);
  const h = [];
  return h.push({
    tag: "span",
    attributes: l,
    children: [e]
  }), i && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), h;
}
function Br(t) {
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
  }, i = Dt(a.styles);
  i.length > 0 && (r.style = i);
  const s = [];
  return s.push({
    tag: "span",
    attributes: r,
    children: [e]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: Gt
} = j;
function re(t) {
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
const Yr = {
  found: !1,
  width: 512,
  height: 512
};
function $r(t, e) {
  !bn && !m.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function ie(t, e) {
  let n = e;
  return e === "fa" && m.styleDefault !== null && (e = Z()), new Promise((a, r) => {
    if (n === "fa") {
      const i = zn(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && Gt[e] && Gt[e][t]) {
      const i = Gt[e][t];
      return a(re(i));
    }
    $r(t, e), a({
      ...Yr,
      icon: m.showMissingIcons && t ? J("missingIconAbstract") || {} : {}
    });
  });
}
const je = () => {
}, se = m.measurePerformance && Pt && Pt.mark && Pt.measure ? Pt : {
  mark: je,
  measure: je
}, yt = 'FA "6.6.0"', Gr = (t) => (se.mark("".concat(yt, " ").concat(t, " begins")), () => Fn(t)), Fn = (t) => {
  se.mark("".concat(yt, " ").concat(t, " ends")), se.measure("".concat(yt, " ").concat(t), "".concat(yt, " ").concat(t, " begins"), "".concat(yt, " ").concat(t, " ends"));
};
var Ce = {
  begin: Gr,
  end: Fn
};
const Nt = () => {
};
function He(t) {
  return typeof (t.getAttribute ? t.getAttribute(it) : null) == "string";
}
function Vr(t) {
  const e = t.getAttribute ? t.getAttribute(he) : null, n = t.getAttribute ? t.getAttribute(ye) : null;
  return e && n;
}
function Xr(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(m.replacementClass);
}
function qr() {
  return m.autoReplaceSvg === !0 ? Mt.replace : Mt[m.autoReplaceSvg] || Mt.replace;
}
function Kr(t) {
  return b.createElementNS("http://www.w3.org/2000/svg", t);
}
function Qr(t) {
  return b.createElement(t);
}
function Dn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = t.tag === "svg" ? Kr : Qr
  } = e;
  if (typeof t == "string")
    return b.createTextNode(t);
  const a = n(t.tag);
  return Object.keys(t.attributes || []).forEach(function(i) {
    a.setAttribute(i, t.attributes[i]);
  }), (t.children || []).forEach(function(i) {
    a.appendChild(Dn(i, {
      ceFn: n
    }));
  }), a;
}
function Zr(t) {
  let e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
const Mt = {
  replace: function(t) {
    const e = t[0];
    if (e.parentNode)
      if (t[1].forEach((n) => {
        e.parentNode.insertBefore(Dn(n), e);
      }), e.getAttribute(it) === null && m.keepOriginalSource) {
        let n = b.createComment(Zr(e));
        e.parentNode.replaceChild(n, e);
      } else
        e.remove();
  },
  nest: function(t) {
    const e = t[0], n = t[1];
    if (~ve(e).indexOf(m.replacementClass))
      return Mt.replace(t);
    const a = new RegExp("".concat(m.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, o) => (o === m.replacementClass || o.match(a) ? s.toSvg.push(o) : s.toNode.push(o), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? e.removeAttribute("class") : e.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => kt(i)).join(`
`);
    e.setAttribute(it, ""), e.innerHTML = r;
  }
};
function Ue(t) {
  t();
}
function Rn(t, e) {
  const n = typeof e == "function" ? e : Nt;
  if (t.length === 0)
    n();
  else {
    let a = Ue;
    m.mutateApproach === ir && (a = Q.requestAnimationFrame || Ue), a(() => {
      const r = qr(), i = Ce.begin("mutate");
      t.map(r), i(), n();
    });
  }
}
let Ee = !1;
function jn() {
  Ee = !0;
}
function oe() {
  Ee = !1;
}
let zt = null;
function We(t) {
  if (!Pe || !m.observeMutations)
    return;
  const {
    treeCallback: e = Nt,
    nodeCallback: n = Nt,
    pseudoElementsCallback: a = Nt,
    observeMutationsRoot: r = b
  } = t;
  zt = new Pe((i) => {
    if (Ee) return;
    const s = Z();
    gt(i).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !He(o.addedNodes[0]) && (m.searchPseudoElements && a(o.target), e(o.target)), o.type === "attributes" && o.target.parentNode && m.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && He(o.target) && ~ur.indexOf(o.attributeName))
        if (o.attributeName === "class" && Vr(o.target)) {
          const {
            prefix: l,
            iconName: c
          } = jt(ve(o.target));
          o.target.setAttribute(he, l || s), c && o.target.setAttribute(ye, c);
        } else Xr(o.target) && n(o.target);
    });
  }), V && zt.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Jr() {
  zt && zt.disconnect();
}
function ti(t) {
  const e = t.getAttribute("style");
  let n = [];
  return e && (n = e.split(";").reduce((a, r) => {
    const i = r.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (a[s] = o.join(":").trim()), a;
  }, {})), n;
}
function ei(t) {
  const e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), a = t.innerText !== void 0 ? t.innerText.trim() : "";
  let r = jt(ve(t));
  return r.prefix || (r.prefix = Z()), e && n && (r.prefix = e, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Nr(r.prefix, t.innerText) || _e(r.prefix, te(t.innerText))), !r.iconName && m.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = t.firstChild.data)), r;
}
function ni(t) {
  const e = gt(t.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = t.getAttribute("title"), a = t.getAttribute("data-fa-title-id");
  return m.autoA11y && (n ? e["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(a || Et()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function ai() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: R,
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
function Be(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = ei(t), i = ni(t), s = ne("parseNodeAttributes", {}, t);
  let o = e.styleParser ? ti(t) : [];
  return {
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: R,
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
      attributes: i
    },
    ...s
  };
}
const {
  styles: ri
} = j;
function Hn(t) {
  const e = m.autoReplaceSvg === "nest" ? Be(t, {
    styleParser: !1
  }) : Be(t);
  return ~e.extra.classes.indexOf(An) ? J("generateLayersText", t, e) : J("generateSvgReplacementMutation", t, e);
}
let U = /* @__PURE__ */ new Set();
xn.map((t) => {
  U.add("fa-".concat(t));
});
Object.keys(nt[x]).map(U.add.bind(U));
Object.keys(nt[M]).map(U.add.bind(U));
Object.keys(nt[I]).map(U.add.bind(U));
U = [...U];
function Ye(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!V) return Promise.resolve();
  const n = b.documentElement.classList, a = (f) => n.add("".concat(Ie, "-").concat(f)), r = (f) => n.remove("".concat(Ie, "-").concat(f)), i = m.autoFetchSvg ? U : xn.map((f) => "fa-".concat(f)).concat(Object.keys(ri));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(An, ":not([").concat(it, "])")].concat(i.map((f) => ".".concat(f, ":not([").concat(it, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = gt(t.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = Ce.begin("onTree"), c = o.reduce((f, h) => {
    try {
      const g = Hn(h);
      g && f.push(g);
    } catch (g) {
      bn || g.name === "MissingIcon" && console.error(g);
    }
    return f;
  }, []);
  return new Promise((f, h) => {
    Promise.all(c).then((g) => {
      Rn(g, () => {
        a("active"), a("complete"), r("pending"), typeof e == "function" && e(), l(), f();
      });
    }).catch((g) => {
      l(), h(g);
    });
  });
}
function ii(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Hn(t).then((n) => {
    n && Rn([n], e);
  });
}
function si(t) {
  return function(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (e || {}).icon ? e : ae(e || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : ae(r || {})), t(a, {
      ...n,
      mask: r
    });
  };
}
const oi = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = R,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: s = null,
    titleId: o = null,
    classes: l = [],
    attributes: c = {},
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
  }), m.autoA11y && (s ? c["aria-labelledby"] = "".concat(m.replacementClass, "-title-").concat(o || Et()) : (c["aria-hidden"] = "true", c.focusable = "false")), we({
    icons: {
      main: re(_),
      mask: r ? re(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
    iconName: g,
    transform: {
      ...R,
      ...n
    },
    symbol: a,
    title: s,
    maskId: i,
    titleId: o,
    extra: {
      attributes: c,
      styles: f,
      classes: l
    }
  })));
};
var li = {
  mixout() {
    return {
      icon: si(oi)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.treeCallback = Ye, t.nodeCallback = ii, t;
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
      return Ye(n, a);
    }, t.generateSvgReplacementMutation = function(e, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: s,
        transform: o,
        symbol: l,
        mask: c,
        maskId: f,
        extra: h
      } = n;
      return new Promise((g, _) => {
        Promise.all([ie(a, s), c.iconName ? ie(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((S) => {
          let [L, A] = S;
          g([e, we({
            icons: {
              main: L,
              mask: A
            },
            prefix: s,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: f,
            title: r,
            titleId: i,
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
        transform: i,
        styles: s
      } = e;
      const o = Dt(s);
      o.length > 0 && (a.style = o);
      let l;
      return be(i) && (l = J("generateAbstractTransformGrouping", {
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
}, ci = {
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
            Array.isArray(r) ? r.map((i) => {
              a = a.concat(i.abstract);
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
}, fi = {
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
        return Ht({
          type: "counter",
          content: t
        }, () => (st("beforeDOMElementCreation", {
          content: t,
          params: e
        }), Br({
          content: t.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(m.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, ui = {
  mixout() {
    return {
      text(t) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = R,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: s = {}
        } = e;
        return Ht({
          type: "text",
          content: t
        }, () => (st("beforeDOMElementCreation", {
          content: t,
          params: e
        }), Re({
          content: t,
          transform: {
            ...R,
            ...n
          },
          title: a,
          extra: {
            attributes: i,
            styles: s,
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
        extra: i
      } = n;
      let s = null, o = null;
      if (dn) {
        const l = parseInt(getComputedStyle(e).fontSize, 10), c = e.getBoundingClientRect();
        s = c.width / l, o = c.height / l;
      }
      return m.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([e, Re({
        content: e.innerHTML,
        width: s,
        height: o,
        transform: r,
        title: a,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const mi = new RegExp('"', "ug"), $e = [1105920, 1112319], Ge = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Va,
  ...Ga,
  ...er
}, le = Object.keys(Ge).reduce((t, e) => (t[e.toLowerCase()] = Ge[e], t), {}), di = Object.keys(le).reduce((t, e) => {
  const n = le[e];
  return t[e] = n[900] || [...Object.entries(n)][0][1], t;
}, {});
function pi(t) {
  const e = t.replace(mi, ""), n = Er(e, 0), a = n >= $e[0] && n <= $e[1], r = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: te(r ? e[0] : e),
    isSecondary: a || r
  };
}
function gi(t, e) {
  const n = t.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(e), r = isNaN(a) ? "normal" : a;
  return (le[n] || {})[r] || di[n];
}
function Ve(t, e) {
  const n = "".concat(rr).concat(e.replace(":", "-"));
  return new Promise((a, r) => {
    if (t.getAttribute(n) !== null)
      return a();
    const s = gt(t.children).filter((g) => g.getAttribute(Kt) === e)[0], o = Q.getComputedStyle(t, e), l = o.getPropertyValue("font-family"), c = l.match(cr), f = o.getPropertyValue("font-weight"), h = o.getPropertyValue("content");
    if (s && !c)
      return t.removeChild(s), a();
    if (c && h !== "none" && h !== "") {
      const g = o.getPropertyValue("content");
      let _ = gi(l, f);
      const {
        value: S,
        isSecondary: L
      } = pi(g), A = c[0].startsWith("FontAwesome");
      let u = _e(_, S), d = u;
      if (A) {
        const v = Mr(S);
        v.iconName && v.prefix && (u = v.iconName, _ = v.prefix);
      }
      if (u && !L && (!s || s.getAttribute(he) !== _ || s.getAttribute(ye) !== d)) {
        t.setAttribute(n, d), s && t.removeChild(s);
        const v = ai(), {
          extra: C
        } = v;
        C.attributes[Kt] = e, ie(u, _).then((O) => {
          const lt = we({
            ...v,
            icons: {
              main: O,
              mask: Ae()
            },
            prefix: _,
            iconName: d,
            extra: C,
            watchable: !0
          }), W = b.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(W, t.firstChild) : t.appendChild(W), W.outerHTML = lt.map((Ut) => kt(Ut)).join(`
`), t.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function hi(t) {
  return Promise.all([Ve(t, "::before"), Ve(t, "::after")]);
}
function yi(t) {
  return t.parentNode !== document.head && !~sr.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Kt) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Xe(t) {
  if (V)
    return new Promise((e, n) => {
      const a = gt(t.querySelectorAll("*")).filter(yi).map(hi), r = Ce.begin("searchPseudoElements");
      jn(), Promise.all(a).then(() => {
        r(), oe(), e();
      }).catch(() => {
        r(), oe(), n();
      });
    });
}
var vi = {
  hooks() {
    return {
      mutationObserverCallbacks(t) {
        return t.pseudoElementsCallback = Xe, t;
      }
    };
  },
  provides(t) {
    t.pseudoElements2svg = function(e) {
      const {
        node: n = b
      } = e;
      m.searchPseudoElements && Xe(n);
    };
  }
};
let qe = !1;
var bi = {
  mixout() {
    return {
      dom: {
        unwatch() {
          jn(), qe = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        We(ne("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Jr();
      },
      watch(t) {
        const {
          observeMutationsRoot: e
        } = t;
        qe ? oe() : We(ne("mutationObserverCallbacks", {
          observeMutationsRoot: e
        }));
      }
    };
  }
};
const Ke = (t) => {
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
    let s = r.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, e);
};
var xi = {
  mixout() {
    return {
      parse: {
        transform: (t) => Ke(t)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-transform");
        return n && (t.transform = Ke(n)), t;
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
      const s = {
        transform: "translate(".concat(r / 2, " 256)")
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(o, " ").concat(l, " ").concat(c)
      }, h = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, g = {
        outer: s,
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
function Qe(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function _i(t) {
  return t.tag === "g" ? t.children : [t];
}
var Ai = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-mask"), a = n ? jt(n.split(" ").map((r) => r.trim())) : Ae();
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
        mask: i,
        maskId: s,
        transform: o
      } = e;
      const {
        width: l,
        icon: c
      } = r, {
        width: f,
        icon: h
      } = i, g = br({
        transform: o,
        containerWidth: f,
        iconWidth: l
      }), _ = {
        tag: "rect",
        attributes: {
          ...Vt,
          fill: "white"
        }
      }, S = c.children ? {
        children: c.children.map(Qe)
      } : {}, L = {
        tag: "g",
        attributes: {
          ...g.inner
        },
        children: [Qe({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...g.path
          },
          ...S
        })]
      }, A = {
        tag: "g",
        attributes: {
          ...g.outer
        },
        children: [L]
      }, u = "mask-".concat(s || Et()), d = "clip-".concat(s || Et()), v = {
        tag: "mask",
        attributes: {
          ...Vt,
          id: u,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [_, A]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: d
          },
          children: _i(h)
        }, v]
      };
      return n.push(C, {
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
}, wi = {
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
      const i = {
        ...r,
        attributeName: "opacity"
      }, s = {
        tag: "circle",
        attributes: {
          ...a,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return e || s.children.push({
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
      }), n.push(s), n.push({
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
}, Ci = {
  hooks() {
    return {
      parseNodeAttributes(t, e) {
        const n = e.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return t.symbol = a, t;
      }
    };
  }
}, Ei = [Ar, li, ci, fi, ui, vi, bi, xi, Ai, wi, Ci];
Fr(Ei, {
  mixoutsTo: z
});
z.noAuto;
const Un = z.config, Si = z.library;
z.dom;
const Tt = z.parse;
z.findIconDefinition;
z.toHtml;
const Li = z.icon;
z.layer;
const ki = z.text;
z.counter;
const Oi = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Pi = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Ni = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, Mi = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Ii = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, zi = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Ti = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Fi = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Di = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, Ri = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ji = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Hi = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Ui = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Wi = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Bi = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Yi = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, $i = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, Gi = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Vi = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
function Ze(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    e && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function F(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ze(Object(n), !0).forEach(function(a) {
      P(t, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach(function(a) {
      Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return t;
}
function Xi(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(t, e || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function qi(t) {
  var e = Xi(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ft(t) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ft(t);
}
function P(t, e, n) {
  return e = qi(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Ki(t, e) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if (Object.prototype.hasOwnProperty.call(t, a)) {
      if (e.indexOf(a) >= 0) continue;
      n[a] = t[a];
    }
  return n;
}
function Qi(t, e) {
  if (t == null) return {};
  var n = Ki(t, e), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      a = i[r], !(e.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(t, a) && (n[a] = t[a]);
  }
  return n;
}
function ce(t) {
  return Zi(t) || Ji(t) || ts(t) || es();
}
function Zi(t) {
  if (Array.isArray(t)) return fe(t);
}
function Ji(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function ts(t, e) {
  if (t) {
    if (typeof t == "string") return fe(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fe(t, e);
  }
}
function fe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, a = new Array(e); n < e; n++) a[n] = t[n];
  return a;
}
function es() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ns = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wn = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(u, d, v) {
      if (!c(d) || h(d) || g(d) || _(d) || l(d))
        return d;
      var C, O = 0, lt = 0;
      if (f(d))
        for (C = [], lt = d.length; O < lt; O++)
          C.push(n(u, d[O], v));
      else {
        C = {};
        for (var W in d)
          Object.prototype.hasOwnProperty.call(d, W) && (C[u(W, v)] = n(u, d[W], v));
      }
      return C;
    }, a = function(u, d) {
      d = d || {};
      var v = d.separator || "_", C = d.split || /(?=[A-Z])/;
      return u.split(C).join(v);
    }, r = function(u) {
      return S(u) ? u : (u = u.replace(/[\-_\s]+(.)?/g, function(d, v) {
        return v ? v.toUpperCase() : "";
      }), u.substr(0, 1).toLowerCase() + u.substr(1));
    }, i = function(u) {
      var d = r(u);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, s = function(u, d) {
      return a(u, d).toLowerCase();
    }, o = Object.prototype.toString, l = function(u) {
      return typeof u == "function";
    }, c = function(u) {
      return u === Object(u);
    }, f = function(u) {
      return o.call(u) == "[object Array]";
    }, h = function(u) {
      return o.call(u) == "[object Date]";
    }, g = function(u) {
      return o.call(u) == "[object RegExp]";
    }, _ = function(u) {
      return o.call(u) == "[object Boolean]";
    }, S = function(u) {
      return u = u - 0, u === u;
    }, L = function(u, d) {
      var v = d && "process" in d ? d.process : d;
      return typeof v != "function" ? u : function(C, O) {
        return v(C, u, O);
      };
    }, A = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(u, d) {
        return n(L(r, d), u);
      },
      decamelizeKeys: function(u, d) {
        return n(L(s, d), u, d);
      },
      pascalizeKeys: function(u, d) {
        return n(L(i, d), u);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = A : e.humps = A;
  })(ns);
})(Wn);
var as = Wn.exports, rs = ["class", "style"];
function is(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var a = n.indexOf(":"), r = as.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return e[r] = i, e;
  }, {});
}
function ss(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function Se(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var a = (t.children || []).map(function(l) {
    return Se(l);
  }), r = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        l.class = ss(f);
        break;
      case "style":
        l.style = is(f);
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
  var i = n.style, s = i === void 0 ? {} : i, o = Qi(n, rs);
  return rn(t.tag, F(F(F({}, e), {}, {
    class: r.class,
    style: F(F({}, r.style), s)
  }, r.attrs), o), a);
}
var Bn = !1;
try {
  Bn = process.env.NODE_ENV === "production";
} catch {
}
function os() {
  if (!Bn && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function _t(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? P({}, t, e) : {};
}
function ls(t) {
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
  }, P(P(P(P(P(P(P(P(P(P(e, "fa-".concat(t.size), t.size !== null), "fa-rotate-".concat(t.rotation), t.rotation !== null), "fa-pull-".concat(t.pull), t.pull !== null), "fa-swap-opacity", t.swapOpacity), "fa-bounce", t.bounce), "fa-shake", t.shake), "fa-beat", t.beat), "fa-fade", t.fade), "fa-beat-fade", t.beatFade), "fa-flash", t.flash), P(P(e, "fa-spin-pulse", t.spinPulse), "fa-spin-reverse", t.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Je(t) {
  if (t && Ft(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (Tt.icon)
    return Tt.icon(t);
  if (t === null)
    return null;
  if (Ft(t) === "object" && t.prefix && t.iconName)
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
var cs = ot({
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
      return Je(e.icon);
    }), i = T(function() {
      return _t("classes", ls(e));
    }), s = T(function() {
      return _t("transform", typeof e.transform == "string" ? Tt.transform(e.transform) : e.transform);
    }), o = T(function() {
      return _t("mask", Je(e.mask));
    }), l = T(function() {
      return Li(r.value, F(F(F(F({}, i.value), s.value), o.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    an(l, function(f) {
      if (!f)
        return os("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var c = T(function() {
      return l.value ? Se(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
ot({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var a = n.slots, r = Un.familyPrefix, i = T(function() {
      return ["".concat(r, "-layers")].concat(ce(e.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return rn("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
ot({
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
    var a = n.attrs, r = Un.familyPrefix, i = T(function() {
      return _t("classes", [].concat(ce(e.counter ? ["".concat(r, "-layers-counter")] : []), ce(e.position ? ["".concat(r, "-layers-").concat(e.position)] : [])));
    }), s = T(function() {
      return _t("transform", typeof e.transform == "string" ? Tt.transform(e.transform) : e.transform);
    }), o = T(function() {
      var c = ki(e.value.toString(), F(F({}, s.value), i.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = T(function() {
      return Se(o.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
Si.add(
  Vi,
  Ui,
  zi,
  Oi,
  ji,
  Fi,
  Gi,
  $i,
  Hi,
  Pi,
  Ii,
  Ti,
  Bi,
  Ri,
  Yi,
  Wi,
  Di,
  Ni,
  Mi
);
const ds = {
  install: (t) => {
    t.component("simplisiti-component-editor", Ha), t.component("fa-icon", cs);
  }
};
export {
  pe as _,
  ds as m,
  us as p,
  ms as r
};
