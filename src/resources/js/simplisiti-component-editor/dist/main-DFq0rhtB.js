import { ref as z, defineComponent as fe, shallowReactive as La, onMounted as Nt, resolveComponent as qe, openBlock as N, createElementBlock as U, createElementVNode as k, Fragment as qt, renderList as Kt, unref as ae, normalizeClass as Mt, createVNode as se, withDirectives as ka, createBlock as Ke, resolveDynamicComponent as Pn, vShow as Pa, defineAsyncComponent as Sn, withModifiers as On, toDisplayString as ut, createCommentVNode as ye, computed as j, nextTick as Qt, onUnmounted as Sa, watch as Nn, onBeforeUnmount as Oa, h as Mn } from "vue";
const In = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, Na = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, uo = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Tn = [
  ...Object.keys(In)
], Ma = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-m035Eefa.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-C59_PXEg.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-BO7Kl3N9.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-DHNcpzA9.js")
  },
  url: {
    title: "URL",
    icon: "link",
    component: () => import("./Url-BerzbFRP.js")
  },
  src: {
    title: "SRC",
    icon: "link",
    component: () => import("./Src-BLZuJg_r.js")
  }
}, Ia = {
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
}, Ta = [
  "color"
];
class De {
  create() {
    return this.createElement();
  }
}
class za extends De {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class Fa extends De {
  createElement() {
    const t = document.createElement("div");
    return t.classList.add(
      "sp-style__layout-display__flex",
      "sp-style__layout-flex-direction__column",
      "sp-style__spacing-padding-top__1",
      "sp-style__spacing-padding-bottom__1",
      "sp-style__spacing-padding-left__1",
      "sp-style__spacing-padding-right__1"
    ), t.innerHTML = "-empty-", t;
  }
}
class Da extends De {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class Ra extends De {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class ja extends De {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const Ha = (e) => {
  if (e === "div")
    return new Fa();
  if (e === "a")
    return new za();
  if (e === "p")
    return new Da();
  if (e === "h1")
    return new Ra();
  if (e === "img")
    return new ja();
  throw new Error("Invalid type");
}, Re = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, $a = (e) => {
  Re("elementRemoved", { simplisitiId: e });
}, zn = (e, t) => {
  Re("contentChange", { simplisitiId: e, content: t });
}, Wa = (e, t) => {
  Re("classChange", { simplisitiId: e, spClassList: t });
}, Ua = (e, t) => {
  Re("styleChange", { simplisitiId: e, spStyleList: t });
}, Ya = (e, t) => {
  Re("attributeChange", { simplisitiId: e, attribute: t });
};
let C = null, T = null, re = null, We = {
  node: null,
  dragged: !1
}, m = null;
const B = z(!1), Q = z(!1), we = z(!1), R = z(null), _e = z(null), Fn = "simplisiti-component-preview", dt = "sp-element__placeholder", Dn = 32, nt = /* @__PURE__ */ new WeakMap(), It = [
  "sp-element__active",
  "sp-element__hover",
  "sp-element__dragging",
  "sp-element__drop-target"
], Tt = Tn.join(","), X = (e) => e instanceof HTMLElement && Tn.includes(e.tagName.toLowerCase()), Rn = (e, t) => e === t && e.dataset.simplisitiid === Fn, zt = (e) => (e == null ? void 0 : e.classList.contains(dt)) ?? !1, Ft = (e, t) => e === t || t.contains(e), Ie = (e, t) => {
  !e || !X(e) || (e.classList.remove("sp-element__active", "sp-element__hover"), t === "active" ? e.classList.add("sp-element__active") : t === "hover" && e.classList.add("sp-element__hover"));
}, K = (e, t) => {
  if (!(e instanceof Element))
    return null;
  const n = e.closest(Tt);
  return !n || !Ft(n, t) || Rn(n, t) || zt(n) ? null : X(n) ? n : null;
}, at = (e, t) => {
  var a;
  if (!(e instanceof Element))
    return null;
  let n = e.closest("div");
  return n && zt(n) && (n = ((a = n.parentElement) == null ? void 0 : a.closest("div")) ?? null), !n || !Ft(n, t) ? null : X(n) ? n : null;
}, jn = () => {
  re == null || re.classList.remove("sp-element__drop-target"), re = null;
}, Te = () => {
  C == null || C.remove(), C = null, jn();
}, Ba = (e) => {
  const t = It.join("|");
  return e.replace(new RegExp(`\\b(?:${t})\\b`, "g"), "");
}, Zt = (e) => {
  const t = e == null ? void 0 : e.dataset.simplisitiid;
  e && t && zn(t, Ba(e.innerHTML));
}, Qe = (e) => Array.from(e.children).filter(
  (t) => t !== C && t !== T
), Hn = (e, t, n) => {
  const r = Qe(e)[n] ?? null;
  r ? e.insertBefore(t, r) : e.appendChild(t);
}, Xa = (e) => {
  const t = _e.value, n = e.ownerDocument.defaultView;
  if (!t || !n)
    return 0;
  const a = n.getComputedStyle(t), r = n.getComputedStyle(e), i = parseFloat(r.paddingLeft || "0") + parseFloat(r.paddingRight || "0"), s = Math.max(e.clientWidth - i, 32), l = (/* @__PURE__ */ new Set(["block", "flex", "grid", "table", "list-item"])).has(a.display), c = t.cloneNode(!0);
  c.classList.remove(...It), c.removeAttribute("data-simplisitiid"), c.removeAttribute("draggable"), c.style.position = "absolute", c.style.left = "-100000px", c.style.top = "-100000px", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = l ? `${s}px` : "max-content", c.style.maxWidth = "none", c.style.height = "auto", c.style.minHeight = "0", c.style.margin = "0", e.appendChild(c);
  const f = Math.ceil(c.getBoundingClientRect().width);
  return c.remove(), f > 0 ? f : l ? s : t instanceof HTMLImageElement ? t.width || 150 : 64;
}, Va = (e) => {
  !m || m.type !== "add" || (m.placeholderWidth = Xa(e), m.placeholderHeight = Dn, C && (C.style.width = `${m.placeholderWidth}px`, C.style.height = `${m.placeholderHeight}px`));
}, $n = (e) => C || (C = e.ownerDocument.createElement("div"), C.id = dt, C.classList.add(dt), (m == null ? void 0 : m.type) === "add" && C.classList.add("sp-element__placeholder--new"), C), Wn = () => {
  (m == null ? void 0 : m.frameId) !== null && (m == null ? void 0 : m.frameId) !== void 0 && (cancelAnimationFrame(m.frameId), m.frameId = null), m && (m.pendingPosition = null);
}, Ga = (e, t) => {
  !t || !e || (e.originalStyle === null ? t.removeAttribute("style") : t.setAttribute("style", e.originalStyle));
}, pe = (e = !0) => {
  const t = m, n = T;
  Wn(), n && (n.classList.remove("sp-element__dragging"), Ga(t, n)), e && (t == null ? void 0 : t.type) === "move" && t.sourceContainer && n && !n.isConnected ? (Te(), Hn(t.sourceContainer, n, t.sourceIndex)) : Te(), T = null, m = null, _e.value = null, B.value = !1, Q.value = !1;
}, qa = (e) => {
  e.preventDefault(), e.stopPropagation(), m ? pe() : C && Te();
}, rt = () => {
  We = {
    node: null,
    dragged: !1
  };
}, Ka = (e) => {
  e.querySelectorAll(".sp-element__active, .sp-element__hover").forEach((t) => {
    Ie(t, null);
  });
}, Qa = (e, t) => {
  if (e.type !== "click" || !X(t) || B.value || Q.value) {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  const n = R.value, a = t.closest(`[data-simplisitiid="${Fn}"]`);
  a ? Ka(a) : Ie(n, null), R.value = t, Ie(t, "active"), we.value = !0, e.preventDefault(), e.stopPropagation();
}, Za = (e, t) => {
  !X(t) || t === R.value || Ie(t, "hover");
}, Jt = (e, t) => {
  X(t) && t !== R.value && Ie(t, null);
}, Ja = (e, t) => {
  const n = X(t) ? t : null, a = _e.value ?? T, r = m;
  if (e.preventDefault(), e.stopPropagation(), !n || !a || !r) {
    pe();
    return;
  }
  const i = (C == null ? void 0 : C.parentElement) ?? n, s = r.pendingPosition, o = !r.lastPointer || r.lastPointer.clientX !== e.clientX || r.lastPointer.clientY !== e.clientY;
  Wn(), s ? mt(s) : (o || !(C != null && C.parentNode)) && mt({
    container: n,
    clientX: e.clientX,
    clientY: e.clientY
  });
  const l = r.sourceContainer;
  C != null && C.parentNode ? C.replaceWith(a) : n.appendChild(a), a.innerHTML.startsWith("-empty-") && (a.innerHTML = a.innerHTML.replace("-empty-", "")), a.setAttribute("draggable", "true"), pe(!1), l && l !== i && Zt(l), Zt(i);
}, mo = () => {
  if ((m == null ? void 0 : m.type) === "add") {
    pe();
    return;
  }
  B.value = !1, _e.value = null, Q.value || Te();
}, mt = (e) => {
  const { container: t, clientX: n, clientY: a } = e;
  Va(t);
  const r = $n(t);
  m != null && m.placeholderWidth && (r.style.width = `${m.placeholderWidth}px`), m != null && m.placeholderHeight && (r.style.height = `${m.placeholderHeight}px`);
  const i = Qe(t), s = rr(n, a, t), o = i[s] ?? null;
  r.parentElement === t && (m == null ? void 0 : m.targetContainer) === t && m.targetIndex === s && (o ? r.nextElementSibling === o : t.lastElementChild === r) || (o ? t.insertBefore(r, o) : t.appendChild(r)), m && (m.targetContainer = t, m.targetIndex = s);
}, er = (e, t) => {
  if (!m)
    return !1;
  const n = !m.lastPointer || m.lastPointer.clientX !== e.clientX || m.lastPointer.clientY !== e.clientY;
  return m.lastPointer = {
    clientX: e.clientX,
    clientY: e.clientY
  }, n ? (m.pendingPosition = {
    container: t,
    clientX: e.clientX,
    clientY: e.clientY
  }, m.frameId !== null || (m.frameId = requestAnimationFrame(() => {
    if (!(m != null && m.pendingPosition)) {
      m && (m.frameId = null);
      return;
    }
    const a = m.pendingPosition;
    m.pendingPosition = null, m.frameId = null, mt(a);
  })), !0) : !1;
}, Un = (e) => {
  re !== e && (jn(), re = e, re.classList.add("sp-element__drop-target"));
}, tr = (e, t) => {
  !B.value && !Q.value || !X(t) || !m || (e.preventDefault(), e.stopPropagation(), Un(t));
}, nr = (e, t) => {
  !B.value && !Q.value || !X(t) || !m || (e.preventDefault(), e.stopPropagation(), er(e, t) && Un(t));
}, ar = (e, t) => {
  var s;
  if (!X(t) || B.value || we.value || m)
    return;
  const n = t.parentElement;
  if (!n)
    return;
  const a = Qe(n).indexOf(t), r = t.getBoundingClientRect();
  T = t, m = {
    type: "move",
    sourceContainer: n,
    sourceIndex: a,
    targetContainer: n,
    targetIndex: a,
    placeholderWidth: r.width,
    placeholderHeight: r.height,
    originalStyle: t.getAttribute("style"),
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, Q.value = !0, T.classList.add("sp-element__dragging"), T.style.position = "fixed", T.style.left = "-100000px", T.style.top = "-100000px", T.style.width = `${r.width}px`, T.style.height = `${r.height}px`, T.style.visibility = "hidden", T.style.pointerEvents = "none";
  const i = $n(n);
  i.style.width = `${r.width}px`, i.style.height = `${r.height}px`, Hn(n, i, a), (s = e.dataTransfer) == null || s.setData("text/plain", T.dataset.simplisitiid || T.tagName), e.dataTransfer && (e.dataTransfer.effectAllowed = "move");
}, po = (e, t) => {
  var a;
  m && pe(), B.value = !0;
  const n = Ha(e);
  _e.value = n.create(), m = {
    type: "add",
    sourceContainer: null,
    sourceIndex: -1,
    targetContainer: null,
    targetIndex: -1,
    placeholderWidth: 0,
    placeholderHeight: Dn,
    originalStyle: null,
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, (a = t == null ? void 0 : t.dataTransfer) == null || a.setData("text/plain", `new:${e}`), t != null && t.dataTransfer && (t.dataTransfer.effectAllowed = "copy");
}, rr = (e, t, n) => {
  var s;
  const a = Qe(n), r = (s = n.ownerDocument.defaultView) == null ? void 0 : s.getComputedStyle(n), i = n.classList.contains("sp-style__layout-flex-direction__row") || (r == null ? void 0 : r.flexDirection) === "row" || (r == null ? void 0 : r.flexDirection) === "row-reverse";
  for (let o = 0; o < a.length; o++) {
    const l = a[o].getBoundingClientRect(), c = i ? l.left + l.width / 2 : l.top + l.height / 2;
    if ((i ? e : t) < c)
      return o;
  }
  return a.length;
}, en = (e) => {
  X(e) && !Rn(e, e) && e.setAttribute("draggable", "true"), e.querySelectorAll(Tt).forEach((t) => {
    zt(t) || t.setAttribute("draggable", "true");
  });
}, ir = (e) => {
  e.querySelectorAll(".sp-element__active, .sp-element__hover, .sp-element__dragging, .sp-element__drop-target").forEach((t) => {
    t.classList.remove(...It);
  }), pe(!1), e.querySelectorAll(Tt).forEach((t) => {
    t.removeAttribute("draggable");
  }), Te(), R.value && Ft(R.value, e) && (R.value = null, we.value = !1), re = null, _e.value = null, B.value = !1, Q.value = !1;
}, sr = (e) => {
  const t = nt.get(e);
  if (t)
    return t;
  e.dataset.simplisitiInteractionLayer = "true", en(e);
  const n = (h) => {
    const y = K(h.target, e), u = K(h.relatedTarget, e);
    y && y !== u && Za(h, y), u && u !== y && Jt(h, u);
  }, a = (h) => {
    const y = K(h.target, e), u = K(h.relatedTarget, e);
    y && y !== u && Jt(h, y);
  }, r = (h) => {
    We = {
      node: K(h.target, e),
      dragged: !1
    };
  }, i = (h) => {
    const y = K(h.target, e);
    if (We.dragged || m || Q.value) {
      h.preventDefault(), h.stopPropagation(), rt();
      return;
    }
    y && Qa(h, y), rt();
  }, s = (h) => {
    K(h.target, e) && (h.preventDefault(), h.stopPropagation());
  }, o = (h) => {
    K(h.target, e) && (h.key === "Enter" || h.key === " ") && (h.preventDefault(), h.stopPropagation());
  }, l = (h) => {
    const y = K(h.target, e);
    if (y) {
      if (We = {
        node: y,
        dragged: !0
      }, we.value) {
        qa(h);
        return;
      }
      ar(h, y);
    }
  }, c = (h) => {
    const y = at(h.target, e);
    y && nr(h, y);
  }, f = (h) => {
    const y = at(h.target, e);
    y && tr(h, y);
  }, v = (h) => {
    const y = at(h.target, e);
    y && Ja(h, y);
  }, b = () => {
    Q.value && pe();
  }, E = new MutationObserver(() => en(e));
  e.addEventListener("pointerover", n), e.addEventListener("pointerout", a), e.addEventListener("pointerdown", r), e.addEventListener("click", i), e.addEventListener("contextmenu", s), e.addEventListener("dblclick", s), e.addEventListener("auxclick", s), e.addEventListener("selectstart", s), e.addEventListener("keydown", o), e.addEventListener("dragstart", l), e.addEventListener("dragenter", f), e.addEventListener("dragover", c), e.addEventListener("drop", v), e.addEventListener("dragend", b), E.observe(e, { childList: !0, subtree: !0 });
  const S = () => {
    e.removeEventListener("pointerover", n), e.removeEventListener("pointerout", a), e.removeEventListener("pointerdown", r), e.removeEventListener("click", i), e.removeEventListener("contextmenu", s), e.removeEventListener("dblclick", s), e.removeEventListener("auxclick", s), e.removeEventListener("selectstart", s), e.removeEventListener("keydown", o), e.removeEventListener("dragstart", l), e.removeEventListener("dragenter", f), e.removeEventListener("dragover", c), e.removeEventListener("drop", v), e.removeEventListener("dragend", b), E.disconnect(), ir(e), rt(), delete e.dataset.simplisitiInteractionLayer, nt.delete(e);
  };
  return nt.set(e, S), S;
}, or = (e) => {
  const t = Na[e];
  return Ia[t].map((a) => ({
    tab: a,
    ...Ma[a]
  }));
}, go = (e, t) => t.find((n) => n.startsWith(e)), it = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, ho = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), a = parseInt(t[1]), r = parseInt(t[2]);
  return "#" + it(n) + it(a) + it(r);
}, lr = '[data-simplisitiid="simplisiti-component-preview"]', pt = (e = document) => e.querySelector(lr), cr = (e = document, t = 5e3) => {
  const n = pt(e);
  return n ? Promise.resolve(n) : new Promise((a, r) => {
    const i = e.body ?? e.documentElement, s = new MutationObserver(() => {
      const l = pt(e);
      l && (window.clearTimeout(o), s.disconnect(), a(l));
    }), o = window.setTimeout(() => {
      s.disconnect(), r(new Error("The component preview was not found in the editor iframe."));
    }, t);
    s.observe(i, { childList: !0, subtree: !0 });
  });
}, fr = (e) => sr(e), ur = { class: "w-[215px]" }, dr = { class: "flex" }, mr = ["title", "onClick"], pr = { class: "editor-icon-wrapper" }, gr = { class: "pt-2" }, hr = /* @__PURE__ */ fe({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, a = z([]), r = z({}), i = La([]), s = z(void 0), o = t, l = () => {
      for (const g of or(n.tagName.toLowerCase()))
        i.push({
          component: Sn(g.component),
          icon: g.icon,
          title: g.title,
          tab: g.tab,
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
    }, c = (g) => {
      s.value = g, o("tabChange", g.tab);
    }, f = () => {
      i.length > 0 && c(i[0]);
    }, v = (g) => {
      var x;
      return ((x = s.value) == null ? void 0 : x.tab) === g.tab;
    }, b = (g) => new Promise((x) => {
      setTimeout(() => {
        n.classList.remove(g), x();
      }, 10);
    }), E = (g) => new Promise((x) => {
      setTimeout(() => {
        n.classList.add(g), x();
      }, 10);
    }), S = () => new Promise((g) => {
      n.classList.forEach(async (x) => {
        x.startsWith("sp-style") && await b(x);
      }), g();
    }), h = (g) => new Promise((x) => {
      g.forEach(async (I) => {
        await E(I);
      }), x();
    }), y = (g) => new Promise((x) => {
      for (const I in g)
        n.style.setProperty(I, g[I]);
      x();
    }), u = (g) => new Promise((x) => {
      n.innerHTML = g.content, x();
    }), d = (g) => new Promise((x) => {
      n.setAttribute(g.type, g.content), x();
    }), w = (g, x) => {
      x != null && x.spClassList && (x.spClassList = g);
      const I = i.flatMap((L) => L.spClassList);
      a.value = I, S().then(() => {
        h(I).then(() => {
          n.dataset.simplisitiid && Wa(n.dataset.simplisitiid, I);
        });
      });
    }, A = (g) => {
      var I;
      (I = s.value) != null && I.spStyleList && (s.value.spStyleList = g);
      const x = i.reduce((L, ve) => ({ ...L, ...ve.spStyleList, ...g }), {});
      r.value = x, y(x).then(() => {
        n.dataset.simplisitiid && Ua(n.dataset.simplisitiid, x);
      });
    }, O = (g) => {
      var x;
      (x = s.value) != null && x.spContent && (s.value.spContent = g), u(g).then(() => {
        n.dataset.simplisitiid && g.type === "text" && zn(n.dataset.simplisitiid, g.content);
      });
    }, M = (g) => {
      var x;
      (x = s.value) != null && x.spAttribute && (s.value.spAttribute = g), d(g).then(() => {
        n.dataset.simplisitiid && Ya(n.dataset.simplisitiid, g);
      });
    }, F = () => {
      a.value = Array.from(n.classList).filter((g) => g.startsWith("sp-style"));
    }, te = () => {
      for (let g in n.style)
        Ta.includes(g) && n.style[g] !== "" && (r.value[g] = n.style[g]);
    };
    return Nt(() => {
      F(), te(), l(), f();
    }), (g, x) => {
      const I = qe("fa-icon");
      return N(), U("div", ur, [
        k("div", dr, [
          (N(!0), U(qt, null, Kt(ae(i), (L) => (N(), U("div", {
            key: L.tab
          }, [
            k("button", {
              class: Mt([
                "cursor-pointer border-0 bg-gray-100 w-6 p-2 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                { "bg-blue-100 text-blue-900": v(L) }
              ]),
              title: L.title,
              onClick: (ve) => c(L)
            }, [
              k("div", pr, [
                se(I, {
                  icon: L.icon
                }, null, 8, ["icon"])
              ])
            ], 10, mr)
          ]))), 128))
        ]),
        k("div", gr, [
          (N(!0), U(qt, null, Kt(ae(i), (L) => (N(), U("div", null, [
            ka(k("div", null, [
              (N(), Ke(Pn(L == null ? void 0 : L.component), {
                "sp-class-list": L == null ? void 0 : L.spClassList,
                "onUpdate:spClassList": (ve) => w(ve, L),
                "sp-style-list": L == null ? void 0 : L.spStyleList,
                "onUpdate:spStyleList": A,
                element: e.element,
                "onUpdate:spContent": O,
                "onUpdate:spAttribute": M
              }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
            ], 512), [
              [Pa, v(L)]
            ])
          ]))), 256))
        ])
      ]);
    };
  }
}), vr = { class: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10" }, yr = { class: "m-0 text-base font-semibold text-gray-900" }, br = { class: "mt-2 text-sm text-gray-600" }, xr = { class: "mt-4 flex justify-end gap-2" }, wr = /* @__PURE__ */ fe({
  __name: "ConfirmationDialog",
  props: {
    show: {
      type: Boolean,
      required: !0
    },
    title: {
      type: String,
      required: !0
    },
    message: {
      type: String,
      required: !0
    }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, r) => e.show ? (N(), U("div", {
      key: 0,
      class: "fixed inset-0 z-[1100] flex items-center justify-center bg-gray-900/40 p-4",
      role: "dialog",
      "aria-modal": "true",
      onClick: r[2] || (r[2] = On((i) => n("cancel"), ["self"]))
    }, [
      k("div", vr, [
        k("h3", yr, ut(e.title), 1),
        k("p", br, ut(e.message), 1),
        k("div", xr, [
          k("button", {
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
            onClick: r[0] || (r[0] = (i) => n("cancel"))
          }, " Cancelar "),
          k("button", {
            type: "button",
            class: "rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
            onClick: r[1] || (r[1] = (i) => n("confirm"))
          }, " Eliminar ")
        ])
      ])
    ])) : ye("", !0);
  }
}), Er = { class: "flex items-center gap-2 border-b border-gray-200 py-1.5" }, Cr = { class: "m-0 text-sm font-semibold text-gray-800" }, _r = { class: "editor-icon-wrapper" }, Ar = { class: "editor-icon-wrapper" }, Lr = { class: "pt-2" }, kr = /* @__PURE__ */ fe({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const { element: n } = e, a = z(null), r = z(!1), i = z(!1);
    let s = null, o = null;
    const l = t, c = (d) => {
      if (!d || !a.value)
        return;
      const w = document.documentElement, A = w.clientWidth || window.innerWidth, O = w.clientHeight || window.innerHeight, M = d.getBoundingClientRect(), F = a.value.offsetWidth, te = a.value.offsetHeight, g = 10, x = 10, I = Math.max(g, A - F - g), L = Math.max(g, O - te - g), ve = M.right + x + F <= A - g, _a = M.left - x - F >= g;
      let Aa = ve ? M.right + x : _a ? M.left - F - x : M.right + x, Le = M.top;
      if (Le + te > O - g) {
        const ke = M.top - te - x;
        Le = ke >= g ? ke : L;
      }
      if (Le < g) {
        const ke = M.bottom + x;
        Le = ke + te <= O - g ? ke : g;
      }
      a.value.style.top = `${Math.min(Math.max(Le, g), L)}px`, a.value.style.left = `${Math.min(Math.max(Aa, g), I)}px`;
    }, f = (d = n) => {
      s !== null && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
        s = null, c(d);
      });
    }, v = j(() => {
      var w;
      const d = (w = n == null ? void 0 : n.tagName) == null ? void 0 : w.toLowerCase();
      return d && In[d] || "Element";
    }), b = (d) => {
      setTimeout(() => {
        l("close", d), r.value = !0;
      }, 300);
    }, E = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, h = () => {
      n && (n.remove(), n.dataset.simplisitiid && $a(n.dataset.simplisitiid), i.value = !1, r.value = !0, l("close"));
    }, y = () => {
      Qt(() => f(n));
    }, u = () => {
      f(n);
    };
    return Nt(() => {
      var d, w;
      document.addEventListener("scroll", u, !0), window.addEventListener("resize", u), (d = window.visualViewport) == null || d.addEventListener("resize", u), (w = window.visualViewport) == null || w.addEventListener("scroll", u), o = new ResizeObserver(() => f(n)), a.value && o.observe(a.value), n && o.observe(n), Qt(() => f(n));
    }), Sa(() => {
      var d, w;
      document.removeEventListener("scroll", u, !0), window.removeEventListener("resize", u), (d = window.visualViewport) == null || d.removeEventListener("resize", u), (w = window.visualViewport) == null || w.removeEventListener("scroll", u), o == null || o.disconnect(), o = null, s !== null && (cancelAnimationFrame(s), s = null);
    }), (d, w) => {
      const A = qe("fa-icon");
      return N(), U("div", {
        class: Mt([
          "fixed z-[1000] max-h-[calc(100vh-20px)] max-w-[calc(100vw-20px)] overflow-auto rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in",
          { "animate-editor-fade-out": r.value }
        ]),
        ref_key: "popup",
        ref: a,
        onClick: w[0] || (w[0] = On(() => {
        }, ["stop"]))
      }, [
        k("div", Er, [
          k("h4", Cr, ut(v.value), 1),
          k("button", {
            class: "ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            "aria-label": "Eliminar elemento",
            title: "Eliminar elemento",
            onClick: E
          }, [
            k("div", _r, [
              se(A, { icon: "trash" })
            ])
          ]),
          k("button", {
            class: "cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
            onClick: b
          }, [
            k("div", Ar, [
              se(A, { icon: "xmark" })
            ])
          ])
        ]),
        k("div", Lr, [
          e.element ? (N(), Ke(hr, {
            key: 0,
            element: e.element,
            onTabChange: y
          }, null, 8, ["element"])) : ye("", !0)
        ]),
        se(wr, {
          show: i.value,
          title: "Eliminar elemento",
          message: `¿Deseas eliminar ${v.value.toLowerCase()}?`,
          onConfirm: h,
          onCancel: S
        }, null, 8, ["show", "message"])
      ], 2);
    };
  }
}), Pr = [
  {
    icon: "cube",
    component: Sn(() => import("./ElementsPanel-DaJawaIj.js"))
  }
], Sr = { class: "editor-fixed-overlay inset-y-0 left-0 z-[1000] flex overflow-y-auto" }, Or = { class: "min-w-[300px]" }, Nr = { class: "flex flex-col items-center justify-center" }, Mr = ["aria-label"], Ir = /* @__PURE__ */ fe({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = z(!1), n = z(Pr[0]), a = j(() => t.value && !B.value), r = () => {
      t.value = !a.value;
    };
    return (i, s) => {
      const o = qe("fa-icon");
      return N(), U("div", Sr, [
        k("div", {
          class: Mt([
            "flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300",
            { "!w-0": ae(B) || !t.value }
          ])
        }, [
          k("div", Or, [
            (N(), Ke(Pn(n.value.component)))
          ])
        ], 2),
        k("div", Nr, [
          k("button", {
            class: "cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none",
            onClick: r,
            "aria-label": a.value ? "Cerrar elementos" : "Abrir elementos"
          }, [
            se(o, {
              icon: a.value ? "xmark" : n.value.icon
            }, null, 8, ["icon"])
          ], 8, Mr)
        ])
      ]);
    };
  }
}), Tr = { class: "min-h-full font-sans text-sm text-gray-800" }, zr = {
  key: 0,
  class: "editor-fixed-overlay right-3 top-3 z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5"
}, Fr = { class: "editor-icon-wrapper" }, Dr = { class: "editor-icon-wrapper" }, Rr = /* @__PURE__ */ fe({
  __name: "App",
  setup(e) {
    let t = null;
    const n = z(!1), a = z(!1);
    Nn(B, (f) => {
      const v = pt();
      f ? v == null || v.classList.add("sp-element__add-element-mode") : v == null || v.classList.remove("sp-element__add-element-mode");
    });
    const r = () => {
      R.value && R.value.classList.remove("sp-element__active"), R.value = null, we.value = !1;
    }, i = (f) => {
      window.parent.document.dispatchEvent(new CustomEvent(`editorHistory${f === "undo" ? "Undo" : "Redo"}`));
    }, s = (f) => {
      const v = f.detail;
      n.value = (v == null ? void 0 : v.canUndo) ?? !1, a.value = (v == null ? void 0 : v.canRedo) ?? !1;
    }, o = () => {
      r();
    }, l = () => {
      window.parent.document.dispatchEvent(new CustomEvent("editorHistoryStateRequest"));
    }, c = async () => {
      const f = await cr();
      t == null || t(), t = fr(f);
    };
    return Nt(() => {
      document.addEventListener("editorHistoryState", s), document.addEventListener("editorHistoryRestored", o), l(), c().catch((f) => {
        console.error("Unable to initialize the graphical editor surface.", f);
      });
    }), Oa(() => {
      document.removeEventListener("editorHistoryState", s), document.removeEventListener("editorHistoryRestored", o), t == null || t(), t = null;
    }), (f, v) => {
      var E, S, h;
      const b = qe("fa-icon");
      return N(), U("div", Tr, [
        n.value || a.value ? (N(), U("div", zr, [
          n.value ? (N(), U("button", {
            key: 0,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Deshacer cambio",
            title: "Deshacer cambio",
            onClick: v[0] || (v[0] = (y) => i("undo"))
          }, [
            k("div", Fr, [
              se(b, { icon: "arrow-rotate-left" })
            ])
          ])) : ye("", !0),
          a.value ? (N(), U("button", {
            key: 1,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Rehacer cambio",
            title: "Rehacer cambio",
            onClick: v[1] || (v[1] = (y) => i("redo"))
          }, [
            k("div", Dr, [
              se(b, { icon: "arrow-rotate-right" })
            ])
          ])) : ye("", !0)
        ])) : ye("", !0),
        ae(we) ? (N(), Ke(kr, {
          key: ((E = ae(R)) == null ? void 0 : E.dataset.simplisitiid) || ((S = ae(R)) == null ? void 0 : S.tagName),
          element: ae(R),
          type: (h = ae(R)) == null ? void 0 : h.tagName,
          onClose: r
        }, null, 8, ["element", "type"])) : ye("", !0),
        se(Ir)
      ]);
    };
  }
}), tn = () => {
};
let Dt = {}, Yn = {}, Bn = null, Xn = {
  mark: tn,
  measure: tn
};
try {
  typeof window < "u" && (Dt = window), typeof document < "u" && (Yn = document), typeof MutationObserver < "u" && (Bn = MutationObserver), typeof performance < "u" && (Xn = performance);
} catch {
}
const {
  userAgent: nn = ""
} = Dt.navigator || {}, oe = Dt, _ = Yn, an = Bn, $e = Xn;
oe.document;
const ee = !!_.documentElement && !!_.head && typeof _.addEventListener == "function" && typeof _.createElement == "function", Vn = ~nn.indexOf("MSIE") || ~nn.indexOf("Trident/");
var P = "classic", Gn = "duotone", H = "sharp", $ = "sharp-duotone", jr = [P, Gn, H, $], Hr = {
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
}, rn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, $r = ["kit"], Wr = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Ur = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Yr = {
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
}, Br = {
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
}, Xr = {
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
}, Vr = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Gr = {
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
}, qr = {
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
}, qn = {
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
}, Kr = ["solid", "regular", "light", "thin", "duotone", "brands"], Kn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qr = Kn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Pe = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Zr = [...Object.keys(Vr), ...Kr, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pe.GROUP, Pe.SWAP_OPACITY, Pe.PRIMARY, Pe.SECONDARY].concat(Kn.map((e) => "".concat(e, "x"))).concat(Qr.map((e) => "w-".concat(e))), Jr = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ei = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ti = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, sn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Z = "___FONT_AWESOME___", gt = 16, Qn = "fa", Zn = "svg-inline--fa", ge = "data-fa-i2svg", ht = "data-fa-pseudo-element", ni = "data-fa-pseudo-element-pending", Rt = "data-prefix", jt = "data-icon", on = "fontawesome-i2svg", ai = "async", ri = ["HTML", "HEAD", "STYLE", "SCRIPT"], Jn = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), ea = [P, H, $];
function je(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[P];
    }
  });
}
const ta = {
  ...qn
};
ta[P] = {
  ...qn[P],
  ...rn.kit,
  ...rn["kit-duotone"]
};
const de = je(ta), vt = {
  ...qr
};
vt[P] = {
  ...vt[P],
  ...sn.kit,
  ...sn["kit-duotone"]
};
const ze = je(vt), yt = {
  ...Gr
};
yt[P] = {
  ...yt[P],
  ...ti.kit
};
const me = je(yt), bt = {
  ...Xr
};
bt[P] = {
  ...bt[P],
  ...ei.kit
};
const ii = je(bt), si = Wr, na = "fa-layers-text", oi = Ur, li = {
  ...Hr
};
je(li);
const ci = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], st = Pe, Ee = /* @__PURE__ */ new Set();
Object.keys(ze[P]).map(Ee.add.bind(Ee));
Object.keys(ze[H]).map(Ee.add.bind(Ee));
Object.keys(ze[$]).map(Ee.add.bind(Ee));
const fi = [...$r, ...Zr], Oe = oe.FontAwesomeConfig || {};
function ui(e) {
  var t = _.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function di(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
_ && typeof _.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = di(ui(n));
  r != null && (Oe[a] = r);
});
const aa = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Qn,
  replacementClass: Zn,
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
Oe.familyPrefix && (Oe.cssPrefix = Oe.familyPrefix);
const Ce = {
  ...aa,
  ...Oe
};
Ce.autoReplaceSvg || (Ce.observeMutations = !1);
const p = {};
Object.keys(aa).forEach((e) => {
  Object.defineProperty(p, e, {
    enumerable: !0,
    set: function(t) {
      Ce[e] = t, Ne.forEach((n) => n(p));
    },
    get: function() {
      return Ce[e];
    }
  });
});
Object.defineProperty(p, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ce.cssPrefix = e, Ne.forEach((t) => t(p));
  },
  get: function() {
    return Ce.cssPrefix;
  }
});
oe.FontAwesomeConfig = p;
const Ne = [];
function mi(e) {
  return Ne.push(e), () => {
    Ne.splice(Ne.indexOf(e), 1);
  };
}
const ne = gt, V = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function pi(e) {
  if (!e || !ee)
    return;
  const t = _.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = _.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
  }
  return _.head.insertBefore(t, a), e;
}
const gi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Fe() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += gi[Math.random() * 62 | 0];
  return t;
}
function Ae(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ht(e) {
  return e.classList ? Ae(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ra(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hi(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(ra(e[n]), '" '), "").trim();
}
function Ze(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function $t(e) {
  return e.size !== V.size || e.x !== V.x || e.y !== V.y || e.rotate !== V.rotate || e.flipX || e.flipY;
}
function vi(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: a
  } = e;
  const r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
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
function yi(e) {
  let {
    transform: t,
    width: n = gt,
    height: a = gt,
    startCentered: r = !1
  } = e, i = "";
  return r && Vn ? i += "translate(".concat(t.x / ne - n / 2, "em, ").concat(t.y / ne - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(t.x / ne, "em), calc(-50% + ").concat(t.y / ne, "em)) ") : i += "translate(".concat(t.x / ne, "em, ").concat(t.y / ne, "em) "), i += "scale(".concat(t.size / ne * (t.flipX ? -1 : 1), ", ").concat(t.size / ne * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var bi = `:root, :host {
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
function ia() {
  const e = Qn, t = Zn, n = p.cssPrefix, a = p.replacementClass;
  let r = bi;
  if (n !== e || a !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let ln = !1;
function ot() {
  p.autoAddCss && !ln && (pi(ia()), ln = !0);
}
var xi = {
  mixout() {
    return {
      dom: {
        css: ia,
        insertCss: ot
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ot();
      },
      beforeI2svg() {
        ot();
      }
    };
  }
};
const J = oe || {};
J[Z] || (J[Z] = {});
J[Z].styles || (J[Z].styles = {});
J[Z].hooks || (J[Z].hooks = {});
J[Z].shims || (J[Z].shims = []);
var G = J[Z];
const sa = [], oa = function() {
  _.removeEventListener("DOMContentLoaded", oa), Be = 1, sa.map((e) => e());
};
let Be = !1;
ee && (Be = (_.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(_.readyState), Be || _.addEventListener("DOMContentLoaded", oa));
function wi(e) {
  ee && (Be ? setTimeout(e, 0) : sa.push(e));
}
function He(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? ra(e) : "<".concat(t, " ").concat(hi(n), ">").concat(a.map(He).join(""), "</").concat(t, ">");
}
function cn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var lt = function(t, n, a, r) {
  var i = Object.keys(t), s = i.length, o = n, l, c, f;
  for (a === void 0 ? (l = 1, f = t[i[0]]) : (l = 0, f = a); l < s; l++)
    c = i[l], f = o(f, t[c], c, t);
  return f;
};
function Ei(e) {
  const t = [];
  let n = 0;
  const a = e.length;
  for (; n < a; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < a) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
function xt(e) {
  const t = Ei(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ci(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function fn(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function wt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = fn(t);
  typeof G.hooks.addPack == "function" && !a ? G.hooks.addPack(e, fn(t)) : G.styles[e] = {
    ...G.styles[e] || {},
    ...r
  }, e === "fas" && wt("fa", t);
}
const {
  styles: ue,
  shims: _i
} = G, Ai = {
  [P]: Object.values(me[P]),
  [H]: Object.values(me[H]),
  [$]: Object.values(me[$])
};
let Wt = null, la = {}, ca = {}, fa = {}, ua = {}, da = {};
const Li = {
  [P]: Object.keys(de[P]),
  [H]: Object.keys(de[H]),
  [$]: Object.keys(de[$])
};
function ki(e) {
  return ~fi.indexOf(e);
}
function Pi(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !ki(r) ? r : null;
}
const ma = () => {
  const e = (a) => lt(ue, (r, i, s) => (r[s] = lt(i, a, {}), r), {});
  la = e((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = i;
  }), a)), ca = e((a, r, i) => (a[i] = i, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = i;
  }), a)), da = e((a, r, i) => {
    const s = r[2];
    return a[i] = i, s.forEach((o) => {
      a[o] = i;
    }), a;
  });
  const t = "far" in ue || p.autoFetchSvg, n = lt(_i, (a, r) => {
    const i = r[0];
    let s = r[1];
    const o = r[2];
    return s === "far" && !t && (s = "fas"), typeof i == "string" && (a.names[i] = {
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
  fa = n.names, ua = n.unicodes, Wt = Je(p.styleDefault, {
    family: p.familyDefault
  });
};
mi((e) => {
  Wt = Je(e.styleDefault, {
    family: p.familyDefault
  });
});
ma();
function Ut(e, t) {
  return (la[e] || {})[t];
}
function Si(e, t) {
  return (ca[e] || {})[t];
}
function ie(e, t) {
  return (da[e] || {})[t];
}
function pa(e) {
  return fa[e] || {
    prefix: null,
    iconName: null
  };
}
function Oi(e) {
  const t = ua[e], n = Ut("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function le() {
  return Wt;
}
const Yt = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = P
  } = t, a = de[n][e], r = ze[n][e] || ze[n][a], i = e in G.styles ? e : null;
  return r || i || null;
}
const Ni = {
  [P]: Object.keys(me[P]),
  [H]: Object.keys(me[H]),
  [$]: Object.keys(me[$])
};
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [P]: "".concat(p.cssPrefix, "-").concat(P),
    [H]: "".concat(p.cssPrefix, "-").concat(H),
    [$]: "".concat(p.cssPrefix, "-").concat($)
  };
  let r = null, i = P;
  const s = jr.filter((l) => l !== Gn);
  s.forEach((l) => {
    (e.includes(a[l]) || e.some((c) => Ni[l].includes(c))) && (i = l);
  });
  const o = e.reduce((l, c) => {
    const f = Pi(p.cssPrefix, c);
    if (ue[c] ? (c = Ai[i].includes(c) ? ii[i][c] : c, r = c, l.prefix = c) : Li[i].indexOf(c) > -1 ? (r = c, l.prefix = Je(c, {
      family: i
    })) : f ? l.iconName = f : c !== p.replacementClass && !s.some((v) => c === a[v]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const v = r === "fa" ? pa(l.iconName) : {}, b = ie(l.prefix, l.iconName);
      v.prefix && (r = null), l.iconName = v.iconName || b || l.iconName, l.prefix = v.prefix || l.prefix, l.prefix === "far" && !ue.far && ue.fas && !p.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Yt());
  return (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"), !o.prefix && i === H && (ue.fass || p.autoFetchSvg) && (o.prefix = "fass", o.iconName = ie(o.prefix, o.iconName) || o.iconName), !o.prefix && i === $ && (ue.fasds || p.autoFetchSvg) && (o.prefix = "fasds", o.iconName = ie(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = le() || "fas"), o;
}
class Mi {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
      n[a] = arguments[a];
    const r = n.reduce(this._pullDefinitions, {});
    Object.keys(r).forEach((i) => {
      this.definitions[i] = {
        ...this.definitions[i] || {},
        ...r[i]
      }, wt(i, r[i]);
      const s = me[P][i];
      s && wt(s, r[i]), ma();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const a = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(a).map((r) => {
      const {
        prefix: i,
        iconName: s,
        icon: o
      } = a[r], l = o[2];
      t[i] || (t[i] = {}), l.length > 0 && l.forEach((c) => {
        typeof c == "string" && (t[i][c] = o);
      }), t[i][s] = o;
    }), t;
  }
}
let un = [], be = {};
const xe = {}, Ii = Object.keys(xe);
function Ti(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return un = e, be = {}, Object.keys(xe).forEach((a) => {
    Ii.indexOf(a) === -1 && delete xe[a];
  }), un.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = r[i][s];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((s) => {
        be[s] || (be[s] = []), be[s].push(i[s]);
      });
    }
    a.provides && a.provides(xe);
  }), n;
}
function Et(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (be[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...a]);
  }), t;
}
function he(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (be[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function ce() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return xe[e] ? xe[e].apply(null, t) : void 0;
}
function Ct(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || le();
  if (t)
    return t = ie(n, t) || t, cn(ga.definitions, n, t) || cn(G.styles, n, t);
}
const ga = new Mi(), zi = () => {
  p.autoReplaceSvg = !1, p.observeMutations = !1, he("noAuto");
}, Fi = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (he("beforeI2svg", e), ce("pseudoElements2svg", e), ce("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    p.autoReplaceSvg === !1 && (p.autoReplaceSvg = !0), p.observeMutations = !0, wi(() => {
      Ri({
        autoReplaceSvgRoot: t
      }), he("watch", e);
    });
  }
}, Di = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ie(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Je(e[0]);
      return {
        prefix: n,
        iconName: ie(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(p.cssPrefix, "-")) > -1 || e.match(si))) {
      const t = et(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || le(),
        iconName: ie(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = le();
      return {
        prefix: t,
        iconName: ie(t, e) || e
      };
    }
  }
}, W = {
  noAuto: zi,
  config: p,
  dom: Fi,
  parse: Di,
  library: ga,
  findIconDefinition: Ct,
  toHtml: He
}, Ri = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = _
  } = e;
  (Object.keys(G.styles).length > 0 || p.autoFetchSvg) && ee && p.autoReplaceSvg && W.dom.i2svg({
    node: t
  });
};
function tt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => He(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ee) return;
      const n = _.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function ji(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: s
  } = e;
  if ($t(s) && n.found && !a.found) {
    const {
      width: o,
      height: l
    } = n, c = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = Ze({
      ...i,
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function Hi(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = e;
  const s = i === !0 ? "".concat(t, "-").concat(p.cssPrefix, "-").concat(n) : i;
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
function Bt(e) {
  const {
    icons: {
      main: t,
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
    watchable: v = !1
  } = e, {
    width: b,
    height: E
  } = n.found ? n : t, S = a === "fak", h = [p.replacementClass, r ? "".concat(p.cssPrefix, "-").concat(r) : ""].filter((O) => f.classes.indexOf(O) === -1).filter((O) => O !== "" || !!O).concat(f.classes).join(" ");
  let y = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: h,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(E)
    }
  };
  const u = S && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(b / E * 16 * 0.0625, "em")
  } : {};
  v && (y.attributes[ge] = ""), o && (y.children.push({
    tag: "title",
    attributes: {
      id: y.attributes["aria-labelledby"] || "title-".concat(c || Fe())
    },
    children: [o]
  }), delete y.attributes.title);
  const d = {
    ...y,
    prefix: a,
    iconName: r,
    main: t,
    mask: n,
    maskId: l,
    transform: i,
    symbol: s,
    styles: {
      ...u,
      ...f.styles
    }
  }, {
    children: w,
    attributes: A
  } = n.found && t.found ? ce("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : ce("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  };
  return d.children = w, d.attributes = A, s ? Hi(d) : ji(d);
}
function dn(e) {
  const {
    content: t,
    width: n,
    height: a,
    transform: r,
    title: i,
    extra: s,
    watchable: o = !1
  } = e, l = {
    ...s.attributes,
    ...i ? {
      title: i
    } : {},
    class: s.classes.join(" ")
  };
  o && (l[ge] = "");
  const c = {
    ...s.styles
  };
  $t(r) && (c.transform = yi({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const f = Ze(c);
  f.length > 0 && (l.style = f);
  const v = [];
  return v.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), i && v.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), v;
}
function $i(e) {
  const {
    content: t,
    title: n,
    extra: a
  } = e, r = {
    ...a.attributes,
    ...n ? {
      title: n
    } : {},
    class: a.classes.join(" ")
  }, i = Ze(a.styles);
  i.length > 0 && (r.style = i);
  const s = [];
  return s.push({
    tag: "span",
    attributes: r,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: ct
} = G;
function _t(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(p.cssPrefix, "-").concat(st.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(p.cssPrefix, "-").concat(st.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(p.cssPrefix, "-").concat(st.PRIMARY),
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
    width: t,
    height: n,
    icon: r
  };
}
const Wi = {
  found: !1,
  width: 512,
  height: 512
};
function Ui(e, t) {
  !Jn && !p.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function At(e, t) {
  let n = t;
  return t === "fa" && p.styleDefault !== null && (t = le()), new Promise((a, r) => {
    if (n === "fa") {
      const i = pa(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && ct[t] && ct[t][e]) {
      const i = ct[t][e];
      return a(_t(i));
    }
    Ui(e, t), a({
      ...Wi,
      icon: p.showMissingIcons && e ? ce("missingIconAbstract") || {} : {}
    });
  });
}
const mn = () => {
}, Lt = p.measurePerformance && $e && $e.mark && $e.measure ? $e : {
  mark: mn,
  measure: mn
}, Se = 'FA "6.6.0"', Yi = (e) => (Lt.mark("".concat(Se, " ").concat(e, " begins")), () => ha(e)), ha = (e) => {
  Lt.mark("".concat(Se, " ").concat(e, " ends")), Lt.measure("".concat(Se, " ").concat(e), "".concat(Se, " ").concat(e, " begins"), "".concat(Se, " ").concat(e, " ends"));
};
var Xt = {
  begin: Yi,
  end: ha
};
const Ue = () => {
};
function pn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ge) : null) == "string";
}
function Bi(e) {
  const t = e.getAttribute ? e.getAttribute(Rt) : null, n = e.getAttribute ? e.getAttribute(jt) : null;
  return t && n;
}
function Xi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(p.replacementClass);
}
function Vi() {
  return p.autoReplaceSvg === !0 ? Ye.replace : Ye[p.autoReplaceSvg] || Ye.replace;
}
function Gi(e) {
  return _.createElementNS("http://www.w3.org/2000/svg", e);
}
function qi(e) {
  return _.createElement(e);
}
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Gi : qi
  } = t;
  if (typeof e == "string")
    return _.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    a.appendChild(va(i, {
      ceFn: n
    }));
  }), a;
}
function Ki(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ye = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(va(n), t);
      }), t.getAttribute(ge) === null && p.keepOriginalSource) {
        let n = _.createComment(Ki(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Ht(t).indexOf(p.replacementClass))
      return Ye.replace(e);
    const a = new RegExp("".concat(p.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, o) => (o === p.replacementClass || o.match(a) ? s.toSvg.push(o) : s.toNode.push(o), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => He(i)).join(`
`);
    t.setAttribute(ge, ""), t.innerHTML = r;
  }
};
function gn(e) {
  e();
}
function ya(e, t) {
  const n = typeof t == "function" ? t : Ue;
  if (e.length === 0)
    n();
  else {
    let a = gn;
    p.mutateApproach === ai && (a = oe.requestAnimationFrame || gn), a(() => {
      const r = Vi(), i = Xt.begin("mutate");
      e.map(r), i(), n();
    });
  }
}
let Vt = !1;
function ba() {
  Vt = !0;
}
function kt() {
  Vt = !1;
}
let Xe = null;
function hn(e) {
  if (!an || !p.observeMutations)
    return;
  const {
    treeCallback: t = Ue,
    nodeCallback: n = Ue,
    pseudoElementsCallback: a = Ue,
    observeMutationsRoot: r = _
  } = e;
  Xe = new an((i) => {
    if (Vt) return;
    const s = le();
    Ae(i).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !pn(o.addedNodes[0]) && (p.searchPseudoElements && a(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && p.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && pn(o.target) && ~ci.indexOf(o.attributeName))
        if (o.attributeName === "class" && Bi(o.target)) {
          const {
            prefix: l,
            iconName: c
          } = et(Ht(o.target));
          o.target.setAttribute(Rt, l || s), c && o.target.setAttribute(jt, c);
        } else Xi(o.target) && n(o.target);
    });
  }), ee && Xe.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Qi() {
  Xe && Xe.disconnect();
}
function Zi(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const i = r.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (a[s] = o.join(":").trim()), a;
  }, {})), n;
}
function Ji(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = et(Ht(e));
  return r.prefix || (r.prefix = le()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Si(r.prefix, e.innerText) || Ut(r.prefix, xt(e.innerText))), !r.iconName && p.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function es(e) {
  const t = Ae(e.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return p.autoA11y && (n ? t["aria-labelledby"] = "".concat(p.replacementClass, "-title-").concat(a || Fe()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ts() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: V,
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
function vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = Ji(e), i = es(e), s = Et("parseNodeAttributes", {}, e);
  let o = t.styleParser ? Zi(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: V,
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
  styles: ns
} = G;
function xa(e) {
  const t = p.autoReplaceSvg === "nest" ? vn(e, {
    styleParser: !1
  }) : vn(e);
  return ~t.extra.classes.indexOf(na) ? ce("generateLayersText", e, t) : ce("generateSvgReplacementMutation", e, t);
}
let q = /* @__PURE__ */ new Set();
ea.map((e) => {
  q.add("fa-".concat(e));
});
Object.keys(de[P]).map(q.add.bind(q));
Object.keys(de[H]).map(q.add.bind(q));
Object.keys(de[$]).map(q.add.bind(q));
q = [...q];
function yn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = _.documentElement.classList, a = (f) => n.add("".concat(on, "-").concat(f)), r = (f) => n.remove("".concat(on, "-").concat(f)), i = p.autoFetchSvg ? q : ea.map((f) => "fa-".concat(f)).concat(Object.keys(ns));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(na, ":not([").concat(ge, "])")].concat(i.map((f) => ".".concat(f, ":not([").concat(ge, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = Ae(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = Xt.begin("onTree"), c = o.reduce((f, v) => {
    try {
      const b = xa(v);
      b && f.push(b);
    } catch (b) {
      Jn || b.name === "MissingIcon" && console.error(b);
    }
    return f;
  }, []);
  return new Promise((f, v) => {
    Promise.all(c).then((b) => {
      ya(b, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), f();
      });
    }).catch((b) => {
      l(), v(b);
    });
  });
}
function as(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  xa(e).then((n) => {
    n && ya([n], t);
  });
}
function rs(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : Ct(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : Ct(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const is = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = V,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: s = null,
    titleId: o = null,
    classes: l = [],
    attributes: c = {},
    styles: f = {}
  } = t;
  if (!e) return;
  const {
    prefix: v,
    iconName: b,
    icon: E
  } = e;
  return tt({
    type: "icon",
    ...e
  }, () => (he("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), p.autoA11y && (s ? c["aria-labelledby"] = "".concat(p.replacementClass, "-title-").concat(o || Fe()) : (c["aria-hidden"] = "true", c.focusable = "false")), Bt({
    icons: {
      main: _t(E),
      mask: r ? _t(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: v,
    iconName: b,
    transform: {
      ...V,
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
var ss = {
  mixout() {
    return {
      icon: rs(is)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = yn, e.nodeCallback = as, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = _,
        callback: a = () => {
        }
      } = t;
      return yn(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: s,
        transform: o,
        symbol: l,
        mask: c,
        maskId: f,
        extra: v
      } = n;
      return new Promise((b, E) => {
        Promise.all([At(a, s), c.iconName ? At(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((S) => {
          let [h, y] = S;
          b([t, Bt({
            icons: {
              main: h,
              mask: y
            },
            prefix: s,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: f,
            title: r,
            titleId: i,
            extra: v,
            watchable: !0
          })]);
        }).catch(E);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: i,
        styles: s
      } = t;
      const o = Ze(s);
      o.length > 0 && (a.style = o);
      let l;
      return $t(i) && (l = ce("generateAbstractTransformGrouping", {
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
}, os = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return tt({
          type: "layer"
        }, () => {
          he("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let a = [];
          return e((r) => {
            Array.isArray(r) ? r.map((i) => {
              a = a.concat(i.abstract);
            }) : a = a.concat(r.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(p.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, ls = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: a = [],
          attributes: r = {},
          styles: i = {}
        } = t;
        return tt({
          type: "counter",
          content: e
        }, () => (he("beforeDOMElementCreation", {
          content: e,
          params: t
        }), $i({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(p.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, cs = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = V,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: s = {}
        } = t;
        return tt({
          type: "text",
          content: e
        }, () => (he("beforeDOMElementCreation", {
          content: e,
          params: t
        }), dn({
          content: e,
          transform: {
            ...V,
            ...n
          },
          title: a,
          extra: {
            attributes: i,
            styles: s,
            classes: ["".concat(p.cssPrefix, "-layers-text"), ...r]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: a,
        transform: r,
        extra: i
      } = n;
      let s = null, o = null;
      if (Vn) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / l, o = c.height / l;
      }
      return p.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, dn({
        content: t.innerHTML,
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
const fs = new RegExp('"', "ug"), bn = [1105920, 1112319], xn = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Br,
  ...Yr,
  ...Jr
}, Pt = Object.keys(xn).reduce((e, t) => (e[t.toLowerCase()] = xn[t], e), {}), us = Object.keys(Pt).reduce((e, t) => {
  const n = Pt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function ds(e) {
  const t = e.replace(fs, ""), n = Ci(t, 0), a = n >= bn[0] && n <= bn[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: xt(r ? t[0] : t),
    isSecondary: a || r
  };
}
function ms(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (Pt[n] || {})[r] || us[n];
}
function wn(e, t) {
  const n = "".concat(ni).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const s = Ae(e.children).filter((b) => b.getAttribute(ht) === t)[0], o = oe.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), c = l.match(oi), f = o.getPropertyValue("font-weight"), v = o.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), a();
    if (c && v !== "none" && v !== "") {
      const b = o.getPropertyValue("content");
      let E = ms(l, f);
      const {
        value: S,
        isSecondary: h
      } = ds(b), y = c[0].startsWith("FontAwesome");
      let u = Ut(E, S), d = u;
      if (y) {
        const w = Oi(S);
        w.iconName && w.prefix && (u = w.iconName, E = w.prefix);
      }
      if (u && !h && (!s || s.getAttribute(Rt) !== E || s.getAttribute(jt) !== d)) {
        e.setAttribute(n, d), s && e.removeChild(s);
        const w = ts(), {
          extra: A
        } = w;
        A.attributes[ht] = t, At(u, E).then((O) => {
          const M = Bt({
            ...w,
            icons: {
              main: O,
              mask: Yt()
            },
            prefix: E,
            iconName: d,
            extra: A,
            watchable: !0
          }), F = _.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = M.map((te) => He(te)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function ps(e) {
  return Promise.all([wn(e, "::before"), wn(e, "::after")]);
}
function gs(e) {
  return e.parentNode !== document.head && !~ri.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ht) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function En(e) {
  if (ee)
    return new Promise((t, n) => {
      const a = Ae(e.querySelectorAll("*")).filter(gs).map(ps), r = Xt.begin("searchPseudoElements");
      ba(), Promise.all(a).then(() => {
        r(), kt(), t();
      }).catch(() => {
        r(), kt(), n();
      });
    });
}
var hs = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = En, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = _
      } = t;
      p.searchPseudoElements && En(n);
    };
  }
};
let Cn = !1;
var vs = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ba(), Cn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        hn(Et("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Qi();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Cn ? kt() : hn(Et("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const _n = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, a) => {
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
  }, t);
};
var ys = {
  mixout() {
    return {
      parse: {
        transform: (e) => _n(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = _n(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: a,
        containerWidth: r,
        iconWidth: i
      } = t;
      const s = {
        transform: "translate(".concat(r / 2, " 256)")
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), f = {
        transform: "".concat(o, " ").concat(l, " ").concat(c)
      }, v = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: f,
        path: v
      };
      return {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...b.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...b.path
            }
          }]
        }]
      };
    };
  }
};
const ft = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function bs(e) {
  return e.tag === "g" ? e.children : [e];
}
var xs = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), a = n ? et(n.split(" ").map((r) => r.trim())) : Yt();
        return a.prefix || (a.prefix = le()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        mask: i,
        maskId: s,
        transform: o
      } = t;
      const {
        width: l,
        icon: c
      } = r, {
        width: f,
        icon: v
      } = i, b = vi({
        transform: o,
        containerWidth: f,
        iconWidth: l
      }), E = {
        tag: "rect",
        attributes: {
          ...ft,
          fill: "white"
        }
      }, S = c.children ? {
        children: c.children.map(An)
      } : {}, h = {
        tag: "g",
        attributes: {
          ...b.inner
        },
        children: [An({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...b.path
          },
          ...S
        })]
      }, y = {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [h]
      }, u = "mask-".concat(s || Fe()), d = "clip-".concat(s || Fe()), w = {
        tag: "mask",
        attributes: {
          ...ft,
          id: u,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [E, y]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: d
          },
          children: bs(v)
        }, w]
      };
      return n.push(A, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(d, ")"),
          mask: "url(#".concat(u, ")"),
          ...ft
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, ws = {
  provides(e) {
    let t = !1;
    oe.matchMedia && (t = oe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
      return t || s.children.push({
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
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...i,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
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
}, Es = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Cs = [xi, ss, os, ls, cs, hs, vs, ys, xs, ws, Es];
Ti(Cs, {
  mixoutsTo: W
});
W.noAuto;
const wa = W.config, _s = W.library;
W.dom;
const Ve = W.parse;
W.findIconDefinition;
W.toHtml;
const As = W.icon;
W.layer;
const Ls = W.text;
W.counter;
const ks = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Ps = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Ss = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, Os = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Ns = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Ms = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Is = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Ts = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, zs = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, Fs = {
  prefix: "fas",
  iconName: "arrow-rotate-right",
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
}, Ds = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Rs = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, js = {
  prefix: "fas",
  iconName: "arrow-rotate-left",
  icon: [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]
}, Hs = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, $s = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Ws = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Us = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Ys = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, Bs = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, Xs = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Vs = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
function Ln(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ln(Object(n), !0).forEach(function(a) {
      D(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ln(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Gs(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qs(e) {
  var t = Gs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ge(e) {
  "@babel/helpers - typeof";
  return Ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ge(e);
}
function D(e, t, n) {
  return t = qs(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ks(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function Qs(e, t) {
  if (e == null) return {};
  var n = Ks(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function St(e) {
  return Zs(e) || Js(e) || eo(e) || to();
}
function Zs(e) {
  if (Array.isArray(e)) return Ot(e);
}
function Js(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function eo(e, t) {
  if (e) {
    if (typeof e == "string") return Ot(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ot(e, t);
  }
}
function Ot(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function to() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ea = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(u, d, w) {
      if (!c(d) || v(d) || b(d) || E(d) || l(d))
        return d;
      var A, O = 0, M = 0;
      if (f(d))
        for (A = [], M = d.length; O < M; O++)
          A.push(n(u, d[O], w));
      else {
        A = {};
        for (var F in d)
          Object.prototype.hasOwnProperty.call(d, F) && (A[u(F, w)] = n(u, d[F], w));
      }
      return A;
    }, a = function(u, d) {
      d = d || {};
      var w = d.separator || "_", A = d.split || /(?=[A-Z])/;
      return u.split(A).join(w);
    }, r = function(u) {
      return S(u) ? u : (u = u.replace(/[\-_\s]+(.)?/g, function(d, w) {
        return w ? w.toUpperCase() : "";
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
    }, v = function(u) {
      return o.call(u) == "[object Date]";
    }, b = function(u) {
      return o.call(u) == "[object RegExp]";
    }, E = function(u) {
      return o.call(u) == "[object Boolean]";
    }, S = function(u) {
      return u = u - 0, u === u;
    }, h = function(u, d) {
      var w = d && "process" in d ? d.process : d;
      return typeof w != "function" ? u : function(A, O) {
        return w(A, u, O);
      };
    }, y = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(u, d) {
        return n(h(r, d), u);
      },
      decamelizeKeys: function(u, d) {
        return n(h(s, d), u, d);
      },
      pascalizeKeys: function(u, d) {
        return n(h(i, d), u);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = y : t.humps = y;
  })(no);
})(Ea);
var ao = Ea.exports, ro = ["class", "style"];
function io(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = ao.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return t[r] = i, t;
  }, {});
}
function so(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Gt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return Gt(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var f = e.attributes[c];
    switch (c) {
      case "class":
        l.class = so(f);
        break;
      case "style":
        l.style = io(f);
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
  var i = n.style, s = i === void 0 ? {} : i, o = Qs(n, ro);
  return Mn(e.tag, Y(Y(Y({}, t), {}, {
    class: r.class,
    style: Y(Y({}, r.style), s)
  }, r.attrs), o), a);
}
var Ca = !1;
try {
  Ca = process.env.NODE_ENV === "production";
} catch {
}
function oo() {
  if (!Ca && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Me(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? D({}, e, t) : {};
}
function lo(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, D(D(D(D(D(D(D(D(D(D(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), D(D(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function kn(e) {
  if (e && Ge(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ve.icon)
    return Ve.icon(e);
  if (e === null)
    return null;
  if (Ge(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var co = fe({
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
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
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
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
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
  setup: function(t, n) {
    var a = n.attrs, r = j(function() {
      return kn(t.icon);
    }), i = j(function() {
      return Me("classes", lo(t));
    }), s = j(function() {
      return Me("transform", typeof t.transform == "string" ? Ve.transform(t.transform) : t.transform);
    }), o = j(function() {
      return Me("mask", kn(t.mask));
    }), l = j(function() {
      return As(r.value, Y(Y(Y(Y({}, i.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Nn(l, function(f) {
      if (!f)
        return oo("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var c = j(function() {
      return l.value ? Gt(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
fe({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = wa.familyPrefix, i = j(function() {
      return ["".concat(r, "-layers")].concat(St(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Mn("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
fe({
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
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var a = n.attrs, r = wa.familyPrefix, i = j(function() {
      return Me("classes", [].concat(St(t.counter ? ["".concat(r, "-layers-counter")] : []), St(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), s = j(function() {
      return Me("transform", typeof t.transform == "string" ? Ve.transform(t.transform) : t.transform);
    }), o = j(function() {
      var c = Ls(t.value.toString(), Y(Y({}, s.value), i.value)), f = c.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = j(function() {
      return Gt(o.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
_s.add(
  Vs,
  js,
  Fs,
  $s,
  Ms,
  ks,
  Rs,
  Ts,
  Xs,
  Bs,
  Hs,
  Ps,
  Ns,
  Is,
  Us,
  Ds,
  Ys,
  Ws,
  zs,
  Ss,
  Os
);
const vo = {
  install: (e) => {
    e.component("simplisiti-component-editor", Rr), e.component("fa-icon", co);
  }
};
export {
  uo as H,
  In as a,
  mo as d,
  po as e,
  vo as m,
  go as p,
  ho as r
};
