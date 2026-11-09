import { ref as T, defineComponent as fe, shallowReactive as Sa, onMounted as Ot, resolveComponent as qe, openBlock as N, createElementBlock as U, createElementVNode as _, Fragment as qt, renderList as Kt, unref as ae, normalizeClass as Nt, createVNode as se, withDirectives as Ma, createBlock as Ke, resolveDynamicComponent as On, vShow as Oa, defineAsyncComponent as Nn, withModifiers as In, toDisplayString as ut, createCommentVNode as ve, computed as j, nextTick as Qt, onUnmounted as Na, watch as zn, onBeforeUnmount as Ia, h as Tn } from "vue";
const Dn = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, za = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, ko = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Fn = [
  ...Object.keys(Dn)
], Ta = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-Dolapsnz.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-Bw7DXmHj.js")
  },
  background: {
    title: "Color de fondo",
    icon: "fill-drip",
    component: () => import("./Background-0oNBDqrt.js")
  },
  "border-radius": {
    title: "Redondeado",
    icon: "border-all",
    component: () => import("./BorderRadius-y26bdTTR.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-8h-_KNeN.js")
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
}, Da = {
  container: [
    "layout",
    "spacing",
    "background",
    "border-radius"
  ],
  ancord: [
    "spacing",
    "background",
    "border-radius",
    "font",
    "content",
    "url"
  ],
  paragraph: [
    "spacing",
    "background",
    "border-radius",
    "font",
    "content"
  ],
  header1: [
    "spacing",
    "background",
    "border-radius",
    "font",
    "content"
  ],
  image: [
    "spacing",
    "background",
    "border-radius",
    "src"
  ]
}, Fa = [
  "color",
  "background-color"
];
class Fe {
  create() {
    return this.createElement();
  }
}
class Ra extends Fe {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class ja extends Fe {
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
class Ha extends Fe {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class Wa extends Fe {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class $a extends Fe {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const Ua = (e) => {
  if (e === "div")
    return new ja();
  if (e === "a")
    return new Ra();
  if (e === "p")
    return new Ha();
  if (e === "h1")
    return new Wa();
  if (e === "img")
    return new $a();
  throw new Error("Invalid type");
}, Re = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, Ya = (e) => {
  Re("elementRemoved", { simplisitiId: e });
}, Rn = (e, t) => {
  Re("contentChange", { simplisitiId: e, content: t });
}, Ba = (e, t) => {
  Re("classChange", { simplisitiId: e, spClassList: t });
}, Xa = (e, t) => {
  Re("styleChange", { simplisitiId: e, spStyleList: t });
}, Va = (e, t) => {
  Re("attributeChange", { simplisitiId: e, attribute: t });
};
let w = null, O = null, re = null, $e = {
  node: null,
  dragged: !1
}, m = null;
const B = T(!1), Q = T(!1), we = T(!1), R = T(null), Ce = T(null), jn = "simplisiti-component-preview", dt = "sp-element__placeholder", Hn = 32, nt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), It = [
  "sp-element__selected",
  "sp-element__hover",
  "sp-element__dragging",
  "sp-element__drop-target"
], zt = Fn.join(","), X = (e) => e instanceof HTMLElement && Fn.includes(e.tagName.toLowerCase()), Wn = (e, t) => e === t && e.dataset.simplisitiid === jn, Tt = (e) => (e == null ? void 0 : e.classList.contains(dt)) ?? !1, Dt = (e, t) => e === t || t.contains(e), Ie = (e, t) => {
  !e || !X(e) || (e.classList.remove("sp-element__selected", "sp-element__hover"), t === "selected" ? e.classList.add("sp-element__selected") : t === "hover" && e.classList.add("sp-element__hover"));
}, K = (e, t) => {
  if (!(e instanceof Element))
    return null;
  const n = e.closest(zt);
  return !n || !Dt(n, t) || Wn(n, t) || Tt(n) ? null : X(n) ? n : null;
}, at = (e, t) => {
  var a;
  if (!(e instanceof Element))
    return null;
  let n = e.closest("div");
  return n && Tt(n) && (n = ((a = n.parentElement) == null ? void 0 : a.closest("div")) ?? null), !n || !Dt(n, t) ? null : X(n) ? n : null;
}, Ga = (e) => {
  const t = e.ownerDocument;
  return e === t.scrollingElement || e === t.documentElement || e === t.body;
}, Jt = (e, t) => {
  var r;
  if (Ga(e))
    return !0;
  const n = (r = e.ownerDocument.defaultView) == null ? void 0 : r.getComputedStyle(e), a = t === "x" ? n == null ? void 0 : n.overflowX : n == null ? void 0 : n.overflowY;
  return a === "auto" || a === "scroll" || a === "overlay";
}, qa = (e, t) => {
  const n = [];
  let a = e instanceof HTMLElement ? e : t;
  for (; a && (n.push(a), a !== t); )
    a = a.parentElement;
  const r = t.ownerDocument.scrollingElement;
  return r && !n.includes(r) && n.push(r), n;
}, en = (e, t, n) => e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? t * (n.clientHeight || n.ownerDocument.documentElement.clientHeight) : t, Ka = (e, t) => {
  let n = en(e, e.deltaX, t), a = en(e, e.deltaY, t), r = !1;
  for (const i of qa(e.target, t)) {
    const s = i.scrollLeft, o = i.scrollTop, l = Math.max(0, i.scrollWidth - i.clientWidth), c = Math.max(0, i.scrollHeight - i.clientHeight);
    Jt(i, "x") && n !== 0 && (i.scrollLeft = Math.min(l, Math.max(0, s + n))), Jt(i, "y") && a !== 0 && (i.scrollTop = Math.min(c, Math.max(0, o + a)));
    const u = i.scrollLeft - s, h = i.scrollTop - o;
    if ((u !== 0 || h !== 0) && (r = !0), n -= u, a -= h, n === 0 && a === 0)
      break;
  }
  return r;
}, $n = () => {
  re == null || re.classList.remove("sp-element__drop-target"), re = null;
}, ze = () => {
  w == null || w.remove(), w = null, $n();
}, Qa = (e) => {
  const t = It.join("|");
  return e.replace(new RegExp(`\\b(?:${t})\\b`, "g"), "");
}, tn = (e) => {
  const t = e == null ? void 0 : e.dataset.simplisitiid;
  e && t && Rn(t, Qa(e.innerHTML));
}, Qe = (e) => Array.from(e.children).filter(
  (t) => t !== w && t !== O
), Za = (e) => {
  let t = 0;
  for (const n of Array.from(e.children)) {
    if (n === w)
      return t;
    n !== O && (t += 1);
  }
  return -1;
}, Ja = (e, t, n) => {
  const r = Qe(e)[n] ?? null;
  r ? e.insertBefore(t, r) : e.appendChild(t);
}, er = (e, t, n, a) => {
  if ((n == null ? void 0 : n.parentNode) === e) {
    e.insertBefore(t, n);
    return;
  }
  Ja(e, t, a);
}, tr = (e) => {
  var a;
  const t = Zt.get(e);
  if (t)
    return t;
  const n = e.createElement("canvas");
  return n.width = 1, n.height = 1, n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "-10000px", n.style.pointerEvents = "none", (a = n.getContext("2d")) == null || a.clearRect(0, 0, 1, 1), e.body.appendChild(n), Zt.set(e, n), n;
}, Un = (e, t) => {
  var n;
  (n = e.dataTransfer) == null || n.setDragImage(tr(t), 0, 0);
}, nr = (e) => {
  const t = Ce.value, n = e.ownerDocument.defaultView;
  if (!t || !n)
    return 0;
  const a = n.getComputedStyle(t), r = n.getComputedStyle(e), i = parseFloat(r.paddingLeft || "0") + parseFloat(r.paddingRight || "0"), s = Math.max(e.clientWidth - i, 32), l = (/* @__PURE__ */ new Set(["block", "flex", "grid", "table", "list-item"])).has(a.display), c = t.cloneNode(!0);
  c.classList.remove(...It), c.removeAttribute("data-simplisitiid"), c.removeAttribute("draggable"), c.style.position = "absolute", c.style.left = "-100000px", c.style.top = "-100000px", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = l ? `${s}px` : "max-content", c.style.maxWidth = "none", c.style.height = "auto", c.style.minHeight = "0", c.style.margin = "0", e.appendChild(c);
  const u = Math.ceil(c.getBoundingClientRect().width);
  return c.remove(), u > 0 ? u : l ? s : t instanceof HTMLImageElement ? t.width || 150 : 64;
}, ar = (e) => {
  !m || m.type !== "add" || (m.placeholderWidth = nr(e), m.placeholderHeight = Hn, w && (w.style.width = `${m.placeholderWidth}px`, w.style.height = `${m.placeholderHeight}px`));
}, Yn = (e) => w || (w = e.ownerDocument.createElement("div"), w.id = dt, w.classList.add(dt), (m == null ? void 0 : m.type) === "add" && w.classList.add("sp-element__placeholder--new"), w), Bn = () => {
  (m == null ? void 0 : m.frameId) !== null && (m == null ? void 0 : m.frameId) !== void 0 && (cancelAnimationFrame(m.frameId), m.frameId = null), m && (m.pendingPosition = null);
}, rr = (e, t) => {
  !t || !e || (e.originalStyle === null ? t.removeAttribute("style") : t.setAttribute("style", e.originalStyle));
}, pe = (e = !0) => {
  const t = m, n = O;
  Bn(), n && (n.classList.remove("sp-element__dragging"), rr(t, n)), e && (t == null ? void 0 : t.type) === "move" && t.sourceContainer && n && !n.isConnected ? (ze(), er(
    t.sourceContainer,
    n,
    t.sourceNextSibling,
    t.sourceIndex
  )) : ze(), O = null, m = null, Ce.value = null, B.value = !1, Q.value = !1;
}, ir = (e) => {
  e.preventDefault(), e.stopPropagation(), m ? pe() : w && ze();
}, rt = () => {
  $e = {
    node: null,
    dragged: !1
  };
}, sr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover").forEach((t) => {
    Ie(t, null);
  });
}, or = (e, t) => {
  if (e.type !== "click" || !X(t) || B.value || Q.value) {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  const n = R.value, a = t.closest(`[data-simplisitiid="${jn}"]`);
  a ? sr(a) : Ie(n, null), R.value = t, Ie(t, "selected"), we.value = !0, e.preventDefault(), e.stopPropagation();
}, lr = (e, t) => {
  !X(t) || t === R.value || Ie(t, "hover");
}, nn = (e, t) => {
  X(t) && t !== R.value && Ie(t, null);
}, cr = (e, t) => {
  const n = X(t) ? t : null, a = Ce.value ?? O, r = m;
  if (e.preventDefault(), e.stopPropagation(), !n || !a || !r) {
    pe();
    return;
  }
  const i = (w == null ? void 0 : w.parentElement) ?? n, s = r.pendingPosition, o = !r.lastPointer || r.lastPointer.clientX !== e.clientX || r.lastPointer.clientY !== e.clientY;
  Bn(), s ? mt(s) : (o || !(w != null && w.parentNode)) && mt({
    container: n,
    clientX: e.clientX,
    clientY: e.clientY
  });
  const l = r.sourceContainer;
  w != null && w.parentNode ? w.replaceWith(a) : n.appendChild(a), a.innerHTML.startsWith("-empty-") && (a.innerHTML = a.innerHTML.replace("-empty-", "")), a.setAttribute("draggable", "true"), pe(!1), l && l !== i && tn(l), tn(i);
}, Po = () => {
  if ((m == null ? void 0 : m.type) === "add") {
    pe();
    return;
  }
  B.value = !1, Ce.value = null, Q.value || ze();
}, mt = (e) => {
  const { container: t, clientX: n, clientY: a } = e;
  ar(t);
  const r = Yn(t);
  m != null && m.placeholderWidth && (r.style.width = `${m.placeholderWidth}px`), m != null && m.placeholderHeight && (r.style.height = `${m.placeholderHeight}px`);
  const i = Qe(t), s = pr(n, a, t), o = i[s] ?? null, l = Za(t);
  r.parentElement === t && (m == null ? void 0 : m.targetContainer) === t && m.targetIndex === s && l === s || (o ? t.insertBefore(r, o) : t.appendChild(r)), m && (m.targetContainer = t, m.targetIndex = s);
}, fr = (e, t) => {
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
}, Xn = (e) => {
  re !== e && ($n(), re = e, re.classList.add("sp-element__drop-target"));
}, ur = (e, t) => {
  !B.value && !Q.value || !X(t) || !m || (e.preventDefault(), e.stopPropagation(), Xn(t));
}, dr = (e, t) => {
  !B.value && !Q.value || !X(t) || !m || (e.preventDefault(), e.stopPropagation(), fr(e, t) && Xn(t));
}, mr = (e, t) => {
  var s;
  if (!X(t) || B.value || we.value || m)
    return;
  const n = t.parentElement;
  if (!n)
    return;
  const a = Qe(n).indexOf(t), r = t.getBoundingClientRect();
  O = t, m = {
    type: "move",
    sourceContainer: n,
    sourceIndex: a,
    sourceNextSibling: t.nextSibling,
    targetContainer: n,
    targetIndex: a,
    placeholderWidth: r.width,
    placeholderHeight: r.height,
    originalStyle: t.getAttribute("style"),
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, Q.value = !0, O.classList.add("sp-element__dragging"), O.style.position = "fixed", O.style.left = "-100000px", O.style.top = "-100000px", O.style.width = `${r.width}px`, O.style.height = `${r.height}px`, O.style.visibility = "hidden", O.style.pointerEvents = "none";
  const i = Yn(n);
  i.style.width = `${r.width}px`, i.style.height = `${r.height}px`, n.insertBefore(i, t), (s = e.dataTransfer) == null || s.setData("text/plain", O.dataset.simplisitiid || O.tagName), e.dataTransfer && (e.dataTransfer.effectAllowed = "move", Un(e, t.ownerDocument));
}, So = (e, t) => {
  var a;
  m && pe(), B.value = !0;
  const n = Ua(e);
  if (Ce.value = n.create(), m = {
    type: "add",
    sourceContainer: null,
    sourceIndex: -1,
    sourceNextSibling: null,
    targetContainer: null,
    targetIndex: -1,
    placeholderWidth: 0,
    placeholderHeight: Hn,
    originalStyle: null,
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, (a = t == null ? void 0 : t.dataTransfer) == null || a.setData("text/plain", `new:${e}`), t != null && t.dataTransfer) {
    t.dataTransfer.effectAllowed = "copy";
    const r = t.currentTarget instanceof HTMLElement ? t.currentTarget.ownerDocument : document;
    Un(t, r);
  }
}, pr = (e, t, n) => {
  var s;
  const a = Qe(n), r = (s = n.ownerDocument.defaultView) == null ? void 0 : s.getComputedStyle(n), i = n.classList.contains("sp-style__layout-flex-direction__row") || (r == null ? void 0 : r.flexDirection) === "row" || (r == null ? void 0 : r.flexDirection) === "row-reverse";
  for (let o = 0; o < a.length; o++) {
    const l = a[o].getBoundingClientRect(), c = i ? l.left + l.width / 2 : l.top + l.height / 2;
    if ((i ? e : t) < c)
      return o;
  }
  return a.length;
}, an = (e) => {
  X(e) && !Wn(e, e) && e.setAttribute("draggable", "true"), e.querySelectorAll(zt).forEach((t) => {
    Tt(t) || t.setAttribute("draggable", "true");
  });
}, gr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover, .sp-element__dragging, .sp-element__drop-target").forEach((t) => {
    t.classList.remove(...It);
  }), pe(!1), e.querySelectorAll(zt).forEach((t) => {
    t.removeAttribute("draggable");
  }), ze(), R.value && Dt(R.value, e) && (R.value = null, we.value = !1), re = null, Ce.value = null, B.value = !1, Q.value = !1;
}, hr = (e) => {
  const t = nt.get(e);
  if (t)
    return t;
  e.dataset.simplisitiInteractionLayer = "true", an(e);
  const n = (p) => {
    const f = K(p.target, e), d = K(p.relatedTarget, e);
    f && f !== d && lr(p, f), d && d !== f && nn(p, d);
  }, a = (p) => {
    const f = K(p.target, e), d = K(p.relatedTarget, e);
    f && f !== d && nn(p, f);
  }, r = (p) => {
    $e = {
      node: K(p.target, e),
      dragged: !1
    };
  }, i = (p) => {
    const f = K(p.target, e);
    if ($e.dragged || m || Q.value) {
      p.preventDefault(), p.stopPropagation(), rt();
      return;
    }
    f && or(p, f), rt();
  }, s = (p) => {
    K(p.target, e) && (p.preventDefault(), p.stopPropagation());
  }, o = (p) => {
    K(p.target, e) && (p.key === "Enter" || p.key === " ") && (p.preventDefault(), p.stopPropagation());
  }, l = (p) => {
    const f = K(p.target, e);
    if (f) {
      if ($e = {
        node: f,
        dragged: !0
      }, we.value) {
        ir(p);
        return;
      }
      mr(p, f);
    }
  }, c = (p) => {
    const f = at(p.target, e);
    f && dr(p, f);
  }, u = (p) => {
    const f = at(p.target, e);
    f && ur(p, f);
  }, h = (p) => {
    const f = at(p.target, e);
    f && cr(p, f);
  }, b = () => {
    Q.value && pe();
  }, E = (p) => {
    m && Ka(p, e) && p.cancelable && p.preventDefault();
  }, S = new MutationObserver(() => an(e));
  e.addEventListener("pointerover", n), e.addEventListener("pointerout", a), e.addEventListener("pointerdown", r), e.addEventListener("click", i), e.addEventListener("contextmenu", s), e.addEventListener("dblclick", s), e.addEventListener("auxclick", s), e.addEventListener("selectstart", s), e.addEventListener("keydown", o), e.addEventListener("dragstart", l), e.addEventListener("dragenter", u), e.addEventListener("dragover", c), e.addEventListener("drop", h), e.addEventListener("dragend", b), e.ownerDocument.addEventListener("wheel", E, { capture: !0, passive: !1 }), S.observe(e, { childList: !0, subtree: !0 });
  const P = () => {
    e.removeEventListener("pointerover", n), e.removeEventListener("pointerout", a), e.removeEventListener("pointerdown", r), e.removeEventListener("click", i), e.removeEventListener("contextmenu", s), e.removeEventListener("dblclick", s), e.removeEventListener("auxclick", s), e.removeEventListener("selectstart", s), e.removeEventListener("keydown", o), e.removeEventListener("dragstart", l), e.removeEventListener("dragenter", u), e.removeEventListener("dragover", c), e.removeEventListener("drop", h), e.removeEventListener("dragend", b), e.ownerDocument.removeEventListener("wheel", E, !0), S.disconnect(), gr(e), rt(), delete e.dataset.simplisitiInteractionLayer, nt.delete(e);
  };
  return nt.set(e, P), P;
}, yr = (e) => {
  const t = za[e];
  return Da[t].map((a) => ({
    tab: a,
    ...Ta[a]
  }));
}, Mo = (e, t) => t.find((n) => n.startsWith(e)), it = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, Oo = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), a = parseInt(t[1]), r = parseInt(t[2]);
  return "#" + it(n) + it(a) + it(r);
}, vr = '[data-simplisitiid="simplisiti-component-preview"]', pt = (e = document) => e.querySelector(vr), br = (e = document, t = 5e3) => {
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
}, xr = (e) => hr(e), wr = { class: "w-[215px]" }, Er = { class: "flex" }, Lr = ["title", "onClick"], Cr = { class: "editor-icon-wrapper" }, Ar = { class: "pt-2" }, _r = /* @__PURE__ */ fe({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, a = T([]), r = T({}), i = Sa([]), s = T(void 0), o = t, l = () => {
      for (const y of yr(n.tagName.toLowerCase()))
        i.push({
          component: Nn(y.component),
          icon: y.icon,
          title: y.title,
          tab: y.tab,
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
    }, c = (y) => {
      s.value = y, o("tabChange", y.tab);
    }, u = () => {
      i.length > 0 && c(i[0]);
    }, h = (y) => {
      var v;
      return ((v = s.value) == null ? void 0 : v.tab) === y.tab;
    }, b = (y) => new Promise((v) => {
      setTimeout(() => {
        n.classList.remove(y), v();
      }, 10);
    }), E = (y) => new Promise((v) => {
      setTimeout(() => {
        n.classList.add(y), v();
      }, 10);
    }), S = () => new Promise((y) => {
      n.classList.forEach(async (v) => {
        v.startsWith("sp-style") && await b(v);
      }), y();
    }), P = (y) => new Promise((v) => {
      y.forEach(async (z) => {
        await E(z);
      }), v();
    }), p = (y) => new Promise((v) => {
      for (const z in y)
        n.style.setProperty(z, y[z]);
      v();
    }), f = (y) => new Promise((v) => {
      n.innerHTML = y.content, v();
    }), d = (y) => new Promise((v) => {
      n.setAttribute(y.type, y.content), v();
    }), x = (y, v) => {
      v != null && v.spClassList && (v.spClassList = y);
      const z = i.flatMap((A) => A.spClassList);
      a.value = z, S().then(() => {
        P(z).then(() => {
          n.dataset.simplisitiid && Ba(n.dataset.simplisitiid, z);
        });
      });
    }, C = (y) => {
      var z;
      (z = s.value) != null && z.spStyleList && (s.value.spStyleList = y);
      const v = i.reduce((A, ye) => ({ ...A, ...ye.spStyleList, ...y }), {});
      r.value = v, p(v).then(() => {
        n.dataset.simplisitiid && Xa(n.dataset.simplisitiid, v);
      });
    }, M = (y) => {
      var v;
      (v = s.value) != null && v.spContent && (s.value.spContent = y), f(y).then(() => {
        n.dataset.simplisitiid && y.type === "text" && Rn(n.dataset.simplisitiid, y.content);
      });
    }, I = (y) => {
      var v;
      (v = s.value) != null && v.spAttribute && (s.value.spAttribute = y), d(y).then(() => {
        n.dataset.simplisitiid && Va(n.dataset.simplisitiid, y);
      });
    }, D = () => {
      a.value = Array.from(n.classList).filter((y) => y.startsWith("sp-style"));
    }, te = () => {
      r.value = {};
      for (const y of Fa) {
        const v = n.style.getPropertyValue(y);
        v !== "" && (r.value[y] = v);
      }
    };
    return Ot(() => {
      D(), te(), l(), u();
    }), (y, v) => {
      const z = qe("fa-icon");
      return N(), U("div", wr, [
        _("div", Er, [
          (N(!0), U(qt, null, Kt(ae(i), (A) => (N(), U("div", {
            key: A.tab
          }, [
            _("button", {
              class: Nt([
                "wizard-icon-button cursor-pointer border-0 bg-gray-100 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                { "wizard-icon-button--selected": h(A) }
              ]),
              title: A.title,
              onClick: (ye) => c(A)
            }, [
              _("div", Cr, [
                se(z, {
                  icon: A.icon
                }, null, 8, ["icon"])
              ])
            ], 10, Lr)
          ]))), 128))
        ]),
        _("div", Ar, [
          (N(!0), U(qt, null, Kt(ae(i), (A) => (N(), U("div", null, [
            Ma(_("div", null, [
              (N(), Ke(On(A == null ? void 0 : A.component), {
                "sp-class-list": A == null ? void 0 : A.spClassList,
                "onUpdate:spClassList": (ye) => x(ye, A),
                "sp-style-list": A == null ? void 0 : A.spStyleList,
                "onUpdate:spStyleList": C,
                element: e.element,
                "onUpdate:spContent": M,
                "onUpdate:spAttribute": I
              }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
            ], 512), [
              [Oa, h(A)]
            ])
          ]))), 256))
        ])
      ]);
    };
  }
}), kr = { class: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10" }, Pr = { class: "m-0 text-base font-semibold text-gray-900" }, Sr = { class: "mt-2 text-sm text-gray-600" }, Mr = { class: "mt-4 flex justify-end gap-2" }, Or = /* @__PURE__ */ fe({
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
      onClick: r[2] || (r[2] = In((i) => n("cancel"), ["self"]))
    }, [
      _("div", kr, [
        _("h3", Pr, ut(e.title), 1),
        _("p", Sr, ut(e.message), 1),
        _("div", Mr, [
          _("button", {
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
            onClick: r[0] || (r[0] = (i) => n("cancel"))
          }, " Cancelar "),
          _("button", {
            type: "button",
            class: "rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
            onClick: r[1] || (r[1] = (i) => n("confirm"))
          }, " Eliminar ")
        ])
      ])
    ])) : ve("", !0);
  }
}), Nr = { class: "flex items-center gap-2 border-b border-gray-200 py-1.5" }, Ir = { class: "m-0 text-sm font-semibold text-gray-800" }, zr = { class: "editor-icon-wrapper" }, Tr = { class: "editor-icon-wrapper" }, Dr = { class: "pt-2" }, Fr = /* @__PURE__ */ fe({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const { element: n } = e, a = T(null), r = T(!1), i = T(!1);
    let s = null, o = null;
    const l = t, c = (d) => {
      if (!d || !a.value)
        return;
      const x = document.documentElement, C = x.clientWidth || window.innerWidth, M = x.clientHeight || window.innerHeight, I = d.getBoundingClientRect(), D = a.value.offsetWidth, te = a.value.offsetHeight, y = 10, v = 10, z = Math.max(y, C - D - y), A = Math.max(y, M - te - y), ye = I.right + v + D <= C - y, ka = I.left - v - D >= y;
      let Pa = ye ? I.right + v : ka ? I.left - D - v : I.right + v, _e = I.top;
      if (_e + te > M - y) {
        const ke = I.top - te - v;
        _e = ke >= y ? ke : A;
      }
      if (_e < y) {
        const ke = I.bottom + v;
        _e = ke + te <= M - y ? ke : y;
      }
      a.value.style.top = `${Math.min(Math.max(_e, y), A)}px`, a.value.style.left = `${Math.min(Math.max(Pa, y), z)}px`;
    }, u = (d = n) => {
      s !== null && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
        s = null, c(d);
      });
    }, h = j(() => {
      var x;
      const d = (x = n == null ? void 0 : n.tagName) == null ? void 0 : x.toLowerCase();
      return d && Dn[d] || "Element";
    }), b = (d) => {
      setTimeout(() => {
        l("close", d), r.value = !0;
      }, 300);
    }, E = () => {
      i.value = !0;
    }, S = () => {
      i.value = !1;
    }, P = () => {
      n && (n.remove(), n.dataset.simplisitiid && Ya(n.dataset.simplisitiid), i.value = !1, r.value = !0, l("close"));
    }, p = () => {
      Qt(() => u(n));
    }, f = () => {
      u(n);
    };
    return Ot(() => {
      var d, x;
      document.addEventListener("scroll", f, !0), window.addEventListener("resize", f), (d = window.visualViewport) == null || d.addEventListener("resize", f), (x = window.visualViewport) == null || x.addEventListener("scroll", f), o = new ResizeObserver(() => u(n)), a.value && o.observe(a.value), n && o.observe(n), Qt(() => u(n));
    }), Na(() => {
      var d, x;
      document.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f), (d = window.visualViewport) == null || d.removeEventListener("resize", f), (x = window.visualViewport) == null || x.removeEventListener("scroll", f), o == null || o.disconnect(), o = null, s !== null && (cancelAnimationFrame(s), s = null);
    }), (d, x) => {
      const C = qe("fa-icon");
      return N(), U("div", {
        class: Nt([
          "fixed z-[1000] max-h-[calc(100vh-20px)] max-w-[calc(100vw-20px)] overflow-auto rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in",
          { "animate-editor-fade-out": r.value }
        ]),
        ref_key: "popup",
        ref: a,
        onClick: x[0] || (x[0] = In(() => {
        }, ["stop"]))
      }, [
        _("div", Nr, [
          _("h4", Ir, ut(h.value), 1),
          _("button", {
            class: "ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            "aria-label": "Eliminar elemento",
            title: "Eliminar elemento",
            onClick: E
          }, [
            _("div", zr, [
              se(C, { icon: "trash" })
            ])
          ]),
          _("button", {
            class: "cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
            onClick: b
          }, [
            _("div", Tr, [
              se(C, { icon: "xmark" })
            ])
          ])
        ]),
        _("div", Dr, [
          e.element ? (N(), Ke(_r, {
            key: 0,
            element: e.element,
            onTabChange: p
          }, null, 8, ["element"])) : ve("", !0)
        ]),
        se(Or, {
          show: i.value,
          title: "Eliminar elemento",
          message: `¿Deseas eliminar ${h.value.toLowerCase()}?`,
          onConfirm: P,
          onCancel: S
        }, null, 8, ["show", "message"])
      ], 2);
    };
  }
}), Rr = [
  {
    icon: "cube",
    component: Nn(() => import("./ElementsPanel-DiuQWPgL.js"))
  }
], jr = { class: "editor-fixed-overlay inset-y-0 left-0 z-[1000] flex overflow-y-auto" }, Hr = { class: "min-w-[300px]" }, Wr = { class: "flex flex-col items-center justify-center" }, $r = ["aria-label"], Ur = /* @__PURE__ */ fe({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = T(!1), n = T(Rr[0]), a = j(() => t.value && !B.value), r = () => {
      t.value = !a.value;
    };
    return (i, s) => {
      const o = qe("fa-icon");
      return N(), U("div", jr, [
        _("div", {
          class: Nt([
            "flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300",
            { "!w-0": ae(B) || !t.value }
          ])
        }, [
          _("div", Hr, [
            (N(), Ke(On(n.value.component)))
          ])
        ], 2),
        _("div", Wr, [
          _("button", {
            class: "cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none",
            onClick: r,
            "aria-label": a.value ? "Cerrar elementos" : "Abrir elementos"
          }, [
            se(o, {
              icon: a.value ? "xmark" : n.value.icon
            }, null, 8, ["icon"])
          ], 8, $r)
        ])
      ]);
    };
  }
}), Yr = { class: "min-h-full font-sans text-sm text-gray-800" }, Br = {
  key: 0,
  class: "editor-fixed-overlay right-3 top-3 z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5"
}, Xr = { class: "editor-icon-wrapper" }, Vr = { class: "editor-icon-wrapper" }, Gr = /* @__PURE__ */ fe({
  __name: "App",
  setup(e) {
    let t = null;
    const n = T(!1), a = T(!1);
    zn(B, (u) => {
      const h = pt();
      u ? h == null || h.classList.add("sp-element__add-element-mode") : h == null || h.classList.remove("sp-element__add-element-mode");
    });
    const r = () => {
      R.value && R.value.classList.remove("sp-element__selected"), R.value = null, we.value = !1;
    }, i = (u) => {
      window.parent.document.dispatchEvent(new CustomEvent(`editorHistory${u === "undo" ? "Undo" : "Redo"}`));
    }, s = (u) => {
      const h = u.detail;
      n.value = (h == null ? void 0 : h.canUndo) ?? !1, a.value = (h == null ? void 0 : h.canRedo) ?? !1;
    }, o = () => {
      r();
    }, l = () => {
      window.parent.document.dispatchEvent(new CustomEvent("editorHistoryStateRequest"));
    }, c = async () => {
      const u = await br();
      t == null || t(), t = xr(u);
    };
    return Ot(() => {
      document.addEventListener("editorHistoryState", s), document.addEventListener("editorHistoryRestored", o), l(), c().catch((u) => {
        console.error("Unable to initialize the graphical editor surface.", u);
      });
    }), Ia(() => {
      document.removeEventListener("editorHistoryState", s), document.removeEventListener("editorHistoryRestored", o), t == null || t(), t = null;
    }), (u, h) => {
      var E, S, P;
      const b = qe("fa-icon");
      return N(), U("div", Yr, [
        n.value || a.value ? (N(), U("div", Br, [
          n.value ? (N(), U("button", {
            key: 0,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Deshacer cambio",
            title: "Deshacer cambio",
            onClick: h[0] || (h[0] = (p) => i("undo"))
          }, [
            _("div", Xr, [
              se(b, { icon: "arrow-rotate-left" })
            ])
          ])) : ve("", !0),
          a.value ? (N(), U("button", {
            key: 1,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Rehacer cambio",
            title: "Rehacer cambio",
            onClick: h[1] || (h[1] = (p) => i("redo"))
          }, [
            _("div", Vr, [
              se(b, { icon: "arrow-rotate-right" })
            ])
          ])) : ve("", !0)
        ])) : ve("", !0),
        ae(we) ? (N(), Ke(Fr, {
          key: ((E = ae(R)) == null ? void 0 : E.dataset.simplisitiid) || ((S = ae(R)) == null ? void 0 : S.tagName),
          element: ae(R),
          type: (P = ae(R)) == null ? void 0 : P.tagName,
          onClose: r
        }, null, 8, ["element", "type"])) : ve("", !0),
        se(Ur)
      ]);
    };
  }
}), rn = () => {
};
let Ft = {}, Vn = {}, Gn = null, qn = {
  mark: rn,
  measure: rn
};
try {
  typeof window < "u" && (Ft = window), typeof document < "u" && (Vn = document), typeof MutationObserver < "u" && (Gn = MutationObserver), typeof performance < "u" && (qn = performance);
} catch {
}
const {
  userAgent: sn = ""
} = Ft.navigator || {}, oe = Ft, L = Vn, on = Gn, We = qn;
oe.document;
const ee = !!L.documentElement && !!L.head && typeof L.addEventListener == "function" && typeof L.createElement == "function", Kn = ~sn.indexOf("MSIE") || ~sn.indexOf("Trident/");
var k = "classic", Qn = "duotone", H = "sharp", W = "sharp-duotone", qr = [k, Qn, H, W], Kr = {
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
}, ln = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Qr = ["kit"], Zr = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Jr = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, ei = {
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
}, ti = {
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
}, ni = {
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
}, ai = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, ri = {
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
}, ii = {
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
}, Zn = {
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
}, si = ["solid", "regular", "light", "thin", "duotone", "brands"], Jn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oi = Jn.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Pe = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, li = [...Object.keys(ai), ...si, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Pe.GROUP, Pe.SWAP_OPACITY, Pe.PRIMARY, Pe.SECONDARY].concat(Jn.map((e) => "".concat(e, "x"))).concat(oi.map((e) => "w-".concat(e))), ci = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, fi = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ui = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, cn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Z = "___FONT_AWESOME___", gt = 16, ea = "fa", ta = "svg-inline--fa", ge = "data-fa-i2svg", ht = "data-fa-pseudo-element", di = "data-fa-pseudo-element-pending", Rt = "data-prefix", jt = "data-icon", fn = "fontawesome-i2svg", mi = "async", pi = ["HTML", "HEAD", "STYLE", "SCRIPT"], na = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), aa = [k, H, W];
function je(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[k];
    }
  });
}
const ra = {
  ...Zn
};
ra[k] = {
  ...Zn[k],
  ...ln.kit,
  ...ln["kit-duotone"]
};
const de = je(ra), yt = {
  ...ii
};
yt[k] = {
  ...yt[k],
  ...cn.kit,
  ...cn["kit-duotone"]
};
const Te = je(yt), vt = {
  ...ri
};
vt[k] = {
  ...vt[k],
  ...ui.kit
};
const me = je(vt), bt = {
  ...ni
};
bt[k] = {
  ...bt[k],
  ...fi.kit
};
const gi = je(bt), hi = Zr, ia = "fa-layers-text", yi = Jr, vi = {
  ...Kr
};
je(vi);
const bi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], st = Pe, Ee = /* @__PURE__ */ new Set();
Object.keys(Te[k]).map(Ee.add.bind(Ee));
Object.keys(Te[H]).map(Ee.add.bind(Ee));
Object.keys(Te[W]).map(Ee.add.bind(Ee));
const xi = [...Qr, ...li], Me = oe.FontAwesomeConfig || {};
function wi(e) {
  var t = L.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Ei(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
L && typeof L.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = Ei(wi(n));
  r != null && (Me[a] = r);
});
const sa = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ea,
  replacementClass: ta,
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
Me.familyPrefix && (Me.cssPrefix = Me.familyPrefix);
const Le = {
  ...sa,
  ...Me
};
Le.autoReplaceSvg || (Le.observeMutations = !1);
const g = {};
Object.keys(sa).forEach((e) => {
  Object.defineProperty(g, e, {
    enumerable: !0,
    set: function(t) {
      Le[e] = t, Oe.forEach((n) => n(g));
    },
    get: function() {
      return Le[e];
    }
  });
});
Object.defineProperty(g, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Le.cssPrefix = e, Oe.forEach((t) => t(g));
  },
  get: function() {
    return Le.cssPrefix;
  }
});
oe.FontAwesomeConfig = g;
const Oe = [];
function Li(e) {
  return Oe.push(e), () => {
    Oe.splice(Oe.indexOf(e), 1);
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
function Ci(e) {
  if (!e || !ee)
    return;
  const t = L.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = L.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
  }
  return L.head.insertBefore(t, a), e;
}
const Ai = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function De() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ai[Math.random() * 62 | 0];
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
function oa(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _i(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(oa(e[n]), '" '), "").trim();
}
function Ze(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Wt(e) {
  return e.size !== V.size || e.x !== V.x || e.y !== V.y || e.rotate !== V.rotate || e.flipX || e.flipY;
}
function ki(e) {
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
function Pi(e) {
  let {
    transform: t,
    width: n = gt,
    height: a = gt,
    startCentered: r = !1
  } = e, i = "";
  return r && Kn ? i += "translate(".concat(t.x / ne - n / 2, "em, ").concat(t.y / ne - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(t.x / ne, "em), calc(-50% + ").concat(t.y / ne, "em)) ") : i += "translate(".concat(t.x / ne, "em, ").concat(t.y / ne, "em) "), i += "scale(".concat(t.size / ne * (t.flipX ? -1 : 1), ", ").concat(t.size / ne * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Si = `:root, :host {
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
function la() {
  const e = ea, t = ta, n = g.cssPrefix, a = g.replacementClass;
  let r = Si;
  if (n !== e || a !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let un = !1;
function ot() {
  g.autoAddCss && !un && (Ci(la()), un = !0);
}
var Mi = {
  mixout() {
    return {
      dom: {
        css: la,
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
const ca = [], fa = function() {
  L.removeEventListener("DOMContentLoaded", fa), Be = 1, ca.map((e) => e());
};
let Be = !1;
ee && (Be = (L.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(L.readyState), Be || L.addEventListener("DOMContentLoaded", fa));
function Oi(e) {
  ee && (Be ? setTimeout(e, 0) : ca.push(e));
}
function He(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? oa(e) : "<".concat(t, " ").concat(_i(n), ">").concat(a.map(He).join(""), "</").concat(t, ">");
}
function dn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var lt = function(t, n, a, r) {
  var i = Object.keys(t), s = i.length, o = n, l, c, u;
  for (a === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = a); l < s; l++)
    c = i[l], u = o(u, t[c], c, t);
  return u;
};
function Ni(e) {
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
  const t = Ni(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ii(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function mn(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function wt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = mn(t);
  typeof G.hooks.addPack == "function" && !a ? G.hooks.addPack(e, mn(t)) : G.styles[e] = {
    ...G.styles[e] || {},
    ...r
  }, e === "fas" && wt("fa", t);
}
const {
  styles: ue,
  shims: zi
} = G, Ti = {
  [k]: Object.values(me[k]),
  [H]: Object.values(me[H]),
  [W]: Object.values(me[W])
};
let $t = null, ua = {}, da = {}, ma = {}, pa = {}, ga = {};
const Di = {
  [k]: Object.keys(de[k]),
  [H]: Object.keys(de[H]),
  [W]: Object.keys(de[W])
};
function Fi(e) {
  return ~xi.indexOf(e);
}
function Ri(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !Fi(r) ? r : null;
}
const ha = () => {
  const e = (a) => lt(ue, (r, i, s) => (r[s] = lt(i, a, {}), r), {});
  ua = e((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = i;
  }), a)), da = e((a, r, i) => (a[i] = i, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = i;
  }), a)), ga = e((a, r, i) => {
    const s = r[2];
    return a[i] = i, s.forEach((o) => {
      a[o] = i;
    }), a;
  });
  const t = "far" in ue || g.autoFetchSvg, n = lt(zi, (a, r) => {
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
  ma = n.names, pa = n.unicodes, $t = Je(g.styleDefault, {
    family: g.familyDefault
  });
};
Li((e) => {
  $t = Je(e.styleDefault, {
    family: g.familyDefault
  });
});
ha();
function Ut(e, t) {
  return (ua[e] || {})[t];
}
function ji(e, t) {
  return (da[e] || {})[t];
}
function ie(e, t) {
  return (ga[e] || {})[t];
}
function ya(e) {
  return ma[e] || {
    prefix: null,
    iconName: null
  };
}
function Hi(e) {
  const t = pa[e], n = Ut("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function le() {
  return $t;
}
const Yt = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Je(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = k
  } = t, a = de[n][e], r = Te[n][e] || Te[n][a], i = e in G.styles ? e : null;
  return r || i || null;
}
const Wi = {
  [k]: Object.keys(me[k]),
  [H]: Object.keys(me[H]),
  [W]: Object.keys(me[W])
};
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [k]: "".concat(g.cssPrefix, "-").concat(k),
    [H]: "".concat(g.cssPrefix, "-").concat(H),
    [W]: "".concat(g.cssPrefix, "-").concat(W)
  };
  let r = null, i = k;
  const s = qr.filter((l) => l !== Qn);
  s.forEach((l) => {
    (e.includes(a[l]) || e.some((c) => Wi[l].includes(c))) && (i = l);
  });
  const o = e.reduce((l, c) => {
    const u = Ri(g.cssPrefix, c);
    if (ue[c] ? (c = Ti[i].includes(c) ? gi[i][c] : c, r = c, l.prefix = c) : Di[i].indexOf(c) > -1 ? (r = c, l.prefix = Je(c, {
      family: i
    })) : u ? l.iconName = u : c !== g.replacementClass && !s.some((h) => c === a[h]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const h = r === "fa" ? ya(l.iconName) : {}, b = ie(l.prefix, l.iconName);
      h.prefix && (r = null), l.iconName = h.iconName || b || l.iconName, l.prefix = h.prefix || l.prefix, l.prefix === "far" && !ue.far && ue.fas && !g.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Yt());
  return (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"), !o.prefix && i === H && (ue.fass || g.autoFetchSvg) && (o.prefix = "fass", o.iconName = ie(o.prefix, o.iconName) || o.iconName), !o.prefix && i === W && (ue.fasds || g.autoFetchSvg) && (o.prefix = "fasds", o.iconName = ie(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = le() || "fas"), o;
}
class $i {
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
      const s = me[k][i];
      s && wt(s, r[i]), ha();
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
let pn = [], be = {};
const xe = {}, Ui = Object.keys(xe);
function Yi(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return pn = e, be = {}, Object.keys(xe).forEach((a) => {
    Ui.indexOf(a) === -1 && delete xe[a];
  }), pn.forEach((a) => {
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
function Lt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || le();
  if (t)
    return t = ie(n, t) || t, dn(va.definitions, n, t) || dn(G.styles, n, t);
}
const va = new $i(), Bi = () => {
  g.autoReplaceSvg = !1, g.observeMutations = !1, he("noAuto");
}, Xi = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (he("beforeI2svg", e), ce("pseudoElements2svg", e), ce("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    g.autoReplaceSvg === !1 && (g.autoReplaceSvg = !0), g.observeMutations = !0, Oi(() => {
      Gi({
        autoReplaceSvgRoot: t
      }), he("watch", e);
    });
  }
}, Vi = {
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
    if (typeof e == "string" && (e.indexOf("".concat(g.cssPrefix, "-")) > -1 || e.match(hi))) {
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
}, $ = {
  noAuto: Bi,
  config: g,
  dom: Xi,
  parse: Vi,
  library: va,
  findIconDefinition: Lt,
  toHtml: He
}, Gi = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = L
  } = e;
  (Object.keys(G.styles).length > 0 || g.autoFetchSvg) && ee && g.autoReplaceSvg && $.dom.i2svg({
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
      const n = L.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function qi(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: s
  } = e;
  if (Wt(s) && n.found && !a.found) {
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
function Ki(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = e;
  const s = i === !0 ? "".concat(t, "-").concat(g.cssPrefix, "-").concat(n) : i;
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
    extra: u,
    watchable: h = !1
  } = e, {
    width: b,
    height: E
  } = n.found ? n : t, S = a === "fak", P = [g.replacementClass, r ? "".concat(g.cssPrefix, "-").concat(r) : ""].filter((M) => u.classes.indexOf(M) === -1).filter((M) => M !== "" || !!M).concat(u.classes).join(" ");
  let p = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: P,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(E)
    }
  };
  const f = S && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(b / E * 16 * 0.0625, "em")
  } : {};
  h && (p.attributes[ge] = ""), o && (p.children.push({
    tag: "title",
    attributes: {
      id: p.attributes["aria-labelledby"] || "title-".concat(c || De())
    },
    children: [o]
  }), delete p.attributes.title);
  const d = {
    ...p,
    prefix: a,
    iconName: r,
    main: t,
    mask: n,
    maskId: l,
    transform: i,
    symbol: s,
    styles: {
      ...f,
      ...u.styles
    }
  }, {
    children: x,
    attributes: C
  } = n.found && t.found ? ce("generateAbstractMask", d) || {
    children: [],
    attributes: {}
  } : ce("generateAbstractIcon", d) || {
    children: [],
    attributes: {}
  };
  return d.children = x, d.attributes = C, s ? Ki(d) : qi(d);
}
function gn(e) {
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
  Wt(r) && (c.transform = Pi({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const u = Ze(c);
  u.length > 0 && (l.style = u);
  const h = [];
  return h.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), i && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), h;
}
function Qi(e) {
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
function Ct(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(g.cssPrefix, "-").concat(st.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(g.cssPrefix, "-").concat(st.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(g.cssPrefix, "-").concat(st.PRIMARY),
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
const Zi = {
  found: !1,
  width: 512,
  height: 512
};
function Ji(e, t) {
  !na && !g.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function At(e, t) {
  let n = t;
  return t === "fa" && g.styleDefault !== null && (t = le()), new Promise((a, r) => {
    if (n === "fa") {
      const i = ya(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && ct[t] && ct[t][e]) {
      const i = ct[t][e];
      return a(Ct(i));
    }
    Ji(e, t), a({
      ...Zi,
      icon: g.showMissingIcons && e ? ce("missingIconAbstract") || {} : {}
    });
  });
}
const hn = () => {
}, _t = g.measurePerformance && We && We.mark && We.measure ? We : {
  mark: hn,
  measure: hn
}, Se = 'FA "6.6.0"', es = (e) => (_t.mark("".concat(Se, " ").concat(e, " begins")), () => ba(e)), ba = (e) => {
  _t.mark("".concat(Se, " ").concat(e, " ends")), _t.measure("".concat(Se, " ").concat(e), "".concat(Se, " ").concat(e, " begins"), "".concat(Se, " ").concat(e, " ends"));
};
var Xt = {
  begin: es,
  end: ba
};
const Ue = () => {
};
function yn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ge) : null) == "string";
}
function ts(e) {
  const t = e.getAttribute ? e.getAttribute(Rt) : null, n = e.getAttribute ? e.getAttribute(jt) : null;
  return t && n;
}
function ns(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(g.replacementClass);
}
function as() {
  return g.autoReplaceSvg === !0 ? Ye.replace : Ye[g.autoReplaceSvg] || Ye.replace;
}
function rs(e) {
  return L.createElementNS("http://www.w3.org/2000/svg", e);
}
function is(e) {
  return L.createElement(e);
}
function xa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? rs : is
  } = t;
  if (typeof e == "string")
    return L.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    a.appendChild(xa(i, {
      ceFn: n
    }));
  }), a;
}
function ss(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ye = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(xa(n), t);
      }), t.getAttribute(ge) === null && g.keepOriginalSource) {
        let n = L.createComment(ss(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Ht(t).indexOf(g.replacementClass))
      return Ye.replace(e);
    const a = new RegExp("".concat(g.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, o) => (o === g.replacementClass || o.match(a) ? s.toSvg.push(o) : s.toNode.push(o), s), {
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
function vn(e) {
  e();
}
function wa(e, t) {
  const n = typeof t == "function" ? t : Ue;
  if (e.length === 0)
    n();
  else {
    let a = vn;
    g.mutateApproach === mi && (a = oe.requestAnimationFrame || vn), a(() => {
      const r = as(), i = Xt.begin("mutate");
      e.map(r), i(), n();
    });
  }
}
let Vt = !1;
function Ea() {
  Vt = !0;
}
function kt() {
  Vt = !1;
}
let Xe = null;
function bn(e) {
  if (!on || !g.observeMutations)
    return;
  const {
    treeCallback: t = Ue,
    nodeCallback: n = Ue,
    pseudoElementsCallback: a = Ue,
    observeMutationsRoot: r = L
  } = e;
  Xe = new on((i) => {
    if (Vt) return;
    const s = le();
    Ae(i).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !yn(o.addedNodes[0]) && (g.searchPseudoElements && a(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && g.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && yn(o.target) && ~bi.indexOf(o.attributeName))
        if (o.attributeName === "class" && ts(o.target)) {
          const {
            prefix: l,
            iconName: c
          } = et(Ht(o.target));
          o.target.setAttribute(Rt, l || s), c && o.target.setAttribute(jt, c);
        } else ns(o.target) && n(o.target);
    });
  }), ee && Xe.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function os() {
  Xe && Xe.disconnect();
}
function ls(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const i = r.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (a[s] = o.join(":").trim()), a;
  }, {})), n;
}
function cs(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = et(Ht(e));
  return r.prefix || (r.prefix = le()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = ji(r.prefix, e.innerText) || Ut(r.prefix, xt(e.innerText))), !r.iconName && g.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function fs(e) {
  const t = Ae(e.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return g.autoA11y && (n ? t["aria-labelledby"] = "".concat(g.replacementClass, "-title-").concat(a || De()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function us() {
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
function xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = cs(e), i = fs(e), s = Et("parseNodeAttributes", {}, e);
  let o = t.styleParser ? ls(e) : [];
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
  styles: ds
} = G;
function La(e) {
  const t = g.autoReplaceSvg === "nest" ? xn(e, {
    styleParser: !1
  }) : xn(e);
  return ~t.extra.classes.indexOf(ia) ? ce("generateLayersText", e, t) : ce("generateSvgReplacementMutation", e, t);
}
let q = /* @__PURE__ */ new Set();
aa.map((e) => {
  q.add("fa-".concat(e));
});
Object.keys(de[k]).map(q.add.bind(q));
Object.keys(de[H]).map(q.add.bind(q));
Object.keys(de[W]).map(q.add.bind(q));
q = [...q];
function wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = L.documentElement.classList, a = (u) => n.add("".concat(fn, "-").concat(u)), r = (u) => n.remove("".concat(fn, "-").concat(u)), i = g.autoFetchSvg ? q : aa.map((u) => "fa-".concat(u)).concat(Object.keys(ds));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(ia, ":not([").concat(ge, "])")].concat(i.map((u) => ".".concat(u, ":not([").concat(ge, "])"))).join(", ");
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
  const l = Xt.begin("onTree"), c = o.reduce((u, h) => {
    try {
      const b = La(h);
      b && u.push(b);
    } catch (b) {
      na || b.name === "MissingIcon" && console.error(b);
    }
    return u;
  }, []);
  return new Promise((u, h) => {
    Promise.all(c).then((b) => {
      wa(b, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((b) => {
      l(), h(b);
    });
  });
}
function ms(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  La(e).then((n) => {
    n && wa([n], t);
  });
}
function ps(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : Lt(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : Lt(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const gs = function(e) {
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
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: h,
    iconName: b,
    icon: E
  } = e;
  return tt({
    type: "icon",
    ...e
  }, () => (he("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), g.autoA11y && (s ? c["aria-labelledby"] = "".concat(g.replacementClass, "-title-").concat(o || De()) : (c["aria-hidden"] = "true", c.focusable = "false")), Bt({
    icons: {
      main: Ct(E),
      mask: r ? Ct(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: h,
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
      styles: u,
      classes: l
    }
  })));
};
var hs = {
  mixout() {
    return {
      icon: ps(gs)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = wn, e.nodeCallback = ms, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = L,
        callback: a = () => {
        }
      } = t;
      return wn(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: s,
        transform: o,
        symbol: l,
        mask: c,
        maskId: u,
        extra: h
      } = n;
      return new Promise((b, E) => {
        Promise.all([At(a, s), c.iconName ? At(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((S) => {
          let [P, p] = S;
          b([t, Bt({
            icons: {
              main: P,
              mask: p
            },
            prefix: s,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: u,
            title: r,
            titleId: i,
            extra: h,
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
      return Wt(i) && (l = ce("generateAbstractTransformGrouping", {
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
}, ys = {
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
              class: ["".concat(g.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, vs = {
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
        }), Qi({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(g.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, bs = {
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
        }), gn({
          content: e,
          transform: {
            ...V,
            ...n
          },
          title: a,
          extra: {
            attributes: i,
            styles: s,
            classes: ["".concat(g.cssPrefix, "-layers-text"), ...r]
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
      if (Kn) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / l, o = c.height / l;
      }
      return g.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, gn({
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
const xs = new RegExp('"', "ug"), En = [1105920, 1112319], Ln = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...ti,
  ...ei,
  ...ci
}, Pt = Object.keys(Ln).reduce((e, t) => (e[t.toLowerCase()] = Ln[t], e), {}), ws = Object.keys(Pt).reduce((e, t) => {
  const n = Pt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Es(e) {
  const t = e.replace(xs, ""), n = Ii(t, 0), a = n >= En[0] && n <= En[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: xt(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Ls(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (Pt[n] || {})[r] || ws[n];
}
function Cn(e, t) {
  const n = "".concat(di).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const s = Ae(e.children).filter((b) => b.getAttribute(ht) === t)[0], o = oe.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), c = l.match(yi), u = o.getPropertyValue("font-weight"), h = o.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), a();
    if (c && h !== "none" && h !== "") {
      const b = o.getPropertyValue("content");
      let E = Ls(l, u);
      const {
        value: S,
        isSecondary: P
      } = Es(b), p = c[0].startsWith("FontAwesome");
      let f = Ut(E, S), d = f;
      if (p) {
        const x = Hi(S);
        x.iconName && x.prefix && (f = x.iconName, E = x.prefix);
      }
      if (f && !P && (!s || s.getAttribute(Rt) !== E || s.getAttribute(jt) !== d)) {
        e.setAttribute(n, d), s && e.removeChild(s);
        const x = us(), {
          extra: C
        } = x;
        C.attributes[ht] = t, At(f, E).then((M) => {
          const I = Bt({
            ...x,
            icons: {
              main: M,
              mask: Yt()
            },
            prefix: E,
            iconName: d,
            extra: C,
            watchable: !0
          }), D = L.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(D, e.firstChild) : e.appendChild(D), D.outerHTML = I.map((te) => He(te)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Cs(e) {
  return Promise.all([Cn(e, "::before"), Cn(e, "::after")]);
}
function As(e) {
  return e.parentNode !== document.head && !~pi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ht) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function An(e) {
  if (ee)
    return new Promise((t, n) => {
      const a = Ae(e.querySelectorAll("*")).filter(As).map(Cs), r = Xt.begin("searchPseudoElements");
      Ea(), Promise.all(a).then(() => {
        r(), kt(), t();
      }).catch(() => {
        r(), kt(), n();
      });
    });
}
var _s = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = An, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = L
      } = t;
      g.searchPseudoElements && An(n);
    };
  }
};
let _n = !1;
var ks = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ea(), _n = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        bn(Et("mutationObserverCallbacks", {}));
      },
      noAuto() {
        os();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        _n ? kt() : bn(Et("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const kn = (e) => {
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
var Ps = {
  mixout() {
    return {
      parse: {
        transform: (e) => kn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = kn(n)), e;
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
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), u = {
        transform: "".concat(o, " ").concat(l, " ").concat(c)
      }, h = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: u,
        path: h
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
function Pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ss(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ms = {
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
        width: u,
        icon: h
      } = i, b = ki({
        transform: o,
        containerWidth: u,
        iconWidth: l
      }), E = {
        tag: "rect",
        attributes: {
          ...ft,
          fill: "white"
        }
      }, S = c.children ? {
        children: c.children.map(Pn)
      } : {}, P = {
        tag: "g",
        attributes: {
          ...b.inner
        },
        children: [Pn({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...b.path
          },
          ...S
        })]
      }, p = {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [P]
      }, f = "mask-".concat(s || De()), d = "clip-".concat(s || De()), x = {
        tag: "mask",
        attributes: {
          ...ft,
          id: f,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [E, p]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: d
          },
          children: Ss(h)
        }, x]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(d, ")"),
          mask: "url(#".concat(f, ")"),
          ...ft
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Os = {
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
}, Ns = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Is = [Mi, hs, ys, vs, bs, _s, ks, Ps, Ms, Os, Ns];
Yi(Is, {
  mixoutsTo: $
});
$.noAuto;
const Ca = $.config, zs = $.library;
$.dom;
const Ve = $.parse;
$.findIconDefinition;
$.toHtml;
const Ts = $.icon;
$.layer;
const Ds = $.text;
$.counter;
const Fs = {
  prefix: "fas",
  iconName: "fill-drip",
  icon: [576, 512, [], "f576", "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6l319.2 0 42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"]
}, Rs = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, js = {
  prefix: "fas",
  iconName: "strikethrough",
  icon: [512, 512, [], "f0cc", "M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"]
}, Hs = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Ws = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, $s = {
  prefix: "fas",
  iconName: "underline",
  icon: [448, 512, [], "f0cd", "M16 64c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 53 43 96 96 96s96-43 96-96l0-128-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 96 48 96C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z"]
}, Us = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, Ys = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Bs = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Xs = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Vs = {
  prefix: "fas",
  iconName: "italic",
  icon: [384, 512, [], "f033", "M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0L160 416l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0L224 96l-64 0c-17.7 0-32-14.3-32-32z"]
}, Gs = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, qs = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, Ks = {
  prefix: "fas",
  iconName: "arrow-rotate-right",
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
}, Qs = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Zs = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Js = {
  prefix: "fas",
  iconName: "arrow-rotate-left",
  icon: [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]
}, eo = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, to = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, no = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, ao = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, ro = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, io = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, so = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, oo = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, lo = {
  prefix: "fas",
  iconName: "border-all",
  icon: [448, 512, [], "f84c", "M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
function Sn(e, t) {
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
    t % 2 ? Sn(Object(n), !0).forEach(function(a) {
      F(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function co(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function fo(e) {
  var t = co(e, "string");
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
function F(e, t, n) {
  return t = fo(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function uo(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function mo(e, t) {
  if (e == null) return {};
  var n = uo(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function St(e) {
  return po(e) || go(e) || ho(e) || yo();
}
function po(e) {
  if (Array.isArray(e)) return Mt(e);
}
function go(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ho(e, t) {
  if (e) {
    if (typeof e == "string") return Mt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mt(e, t);
  }
}
function Mt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function yo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Aa = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(f, d, x) {
      if (!c(d) || h(d) || b(d) || E(d) || l(d))
        return d;
      var C, M = 0, I = 0;
      if (u(d))
        for (C = [], I = d.length; M < I; M++)
          C.push(n(f, d[M], x));
      else {
        C = {};
        for (var D in d)
          Object.prototype.hasOwnProperty.call(d, D) && (C[f(D, x)] = n(f, d[D], x));
      }
      return C;
    }, a = function(f, d) {
      d = d || {};
      var x = d.separator || "_", C = d.split || /(?=[A-Z])/;
      return f.split(C).join(x);
    }, r = function(f) {
      return S(f) ? f : (f = f.replace(/[\-_\s]+(.)?/g, function(d, x) {
        return x ? x.toUpperCase() : "";
      }), f.substr(0, 1).toLowerCase() + f.substr(1));
    }, i = function(f) {
      var d = r(f);
      return d.substr(0, 1).toUpperCase() + d.substr(1);
    }, s = function(f, d) {
      return a(f, d).toLowerCase();
    }, o = Object.prototype.toString, l = function(f) {
      return typeof f == "function";
    }, c = function(f) {
      return f === Object(f);
    }, u = function(f) {
      return o.call(f) == "[object Array]";
    }, h = function(f) {
      return o.call(f) == "[object Date]";
    }, b = function(f) {
      return o.call(f) == "[object RegExp]";
    }, E = function(f) {
      return o.call(f) == "[object Boolean]";
    }, S = function(f) {
      return f = f - 0, f === f;
    }, P = function(f, d) {
      var x = d && "process" in d ? d.process : d;
      return typeof x != "function" ? f : function(C, M) {
        return x(C, f, M);
      };
    }, p = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(f, d) {
        return n(P(r, d), f);
      },
      decamelizeKeys: function(f, d) {
        return n(P(s, d), f, d);
      },
      pascalizeKeys: function(f, d) {
        return n(P(i, d), f);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = p : t.humps = p;
  })(vo);
})(Aa);
var bo = Aa.exports, xo = ["class", "style"];
function wo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = bo.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return t[r] = i, t;
  }, {});
}
function Eo(e) {
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
    var u = e.attributes[c];
    switch (c) {
      case "class":
        l.class = Eo(u);
        break;
      case "style":
        l.style = wo(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, s = i === void 0 ? {} : i, o = mo(n, xo);
  return Tn(e.tag, Y(Y(Y({}, t), {}, {
    class: r.class,
    style: Y(Y({}, r.style), s)
  }, r.attrs), o), a);
}
var _a = !1;
try {
  _a = process.env.NODE_ENV === "production";
} catch {
}
function Lo() {
  if (!_a && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ne(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? F({}, e, t) : {};
}
function Co(e) {
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
  }, F(F(F(F(F(F(F(F(F(F(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), F(F(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Mn(e) {
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
var Ao = fe({
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
      return Mn(t.icon);
    }), i = j(function() {
      return Ne("classes", Co(t));
    }), s = j(function() {
      return Ne("transform", typeof t.transform == "string" ? Ve.transform(t.transform) : t.transform);
    }), o = j(function() {
      return Ne("mask", Mn(t.mask));
    }), l = j(function() {
      return Ts(r.value, Y(Y(Y(Y({}, i.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    zn(l, function(u) {
      if (!u)
        return Lo("Could not find one or more icon(s)", r.value, o.value);
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
    var a = n.slots, r = Ca.familyPrefix, i = j(function() {
      return ["".concat(r, "-layers")].concat(St(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Tn("div", {
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
    var a = n.attrs, r = Ca.familyPrefix, i = j(function() {
      return Ne("classes", [].concat(St(t.counter ? ["".concat(r, "-layers-counter")] : []), St(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), s = j(function() {
      return Ne("transform", typeof t.transform == "string" ? Ve.transform(t.transform) : t.transform);
    }), o = j(function() {
      var c = Ds(t.value.toString(), Y(Y({}, s.value), i.value)), u = c.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = j(function() {
      return Gt(o.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
zs.add(
  oo,
  Js,
  Ks,
  to,
  Bs,
  Rs,
  Zs,
  Gs,
  so,
  lo,
  Fs,
  io,
  eo,
  Hs,
  Ys,
  Xs,
  ao,
  Qs,
  ro,
  Vs,
  js,
  $s,
  no,
  qs,
  Ws,
  Us
);
const No = {
  install: (e) => {
    e.component("simplisiti-component-editor", Gr), e.component("fa-icon", Ao);
  }
};
export {
  ko as H,
  Dn as a,
  Po as d,
  So as e,
  No as m,
  Mo as p,
  Oo as r
};
