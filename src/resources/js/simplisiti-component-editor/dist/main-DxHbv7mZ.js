import { ref as T, defineComponent as he, shallowReactive as Na, onMounted as Ft, resolveComponent as Je, openBlock as Y, createElementBlock as G, createElementVNode as M, Fragment as en, renderList as tn, unref as ce, normalizeClass as et, createVNode as de, withDirectives as Ta, createBlock as tt, resolveDynamicComponent as Fn, vShow as za, defineAsyncComponent as Rn, withModifiers as jn, toDisplayString as ht, createCommentVNode as Ce, computed as B, nextTick as nn, onUnmounted as Da, watch as vt, onBeforeUnmount as Fa, normalizeStyle as Ra, h as Hn } from "vue";
const Wn = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, ja = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, Ho = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Yn = [
  ...Object.keys(Wn)
], Ha = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-CkR6m5a9.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-BeI7afAH.js")
  },
  background: {
    title: "Color de fondo",
    icon: "fill-drip",
    component: () => import("./Background-DLT-uFEu.js")
  },
  "border-radius": {
    title: "Redondeado",
    icon: "border-all",
    component: () => import("./BorderRadius-KasV_PjR.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-bXb4FGb9.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-xsc4UBSu.js")
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
}, Wa = {
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
}, Ya = [
  "color",
  "background-color"
];
class We {
  create() {
    return this.createElement();
  }
}
class $a extends We {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class Ua extends We {
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
class Ba extends We {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class Xa extends We {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class Va extends We {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const qa = (e) => {
  if (e === "div")
    return new Ua();
  if (e === "a")
    return new $a();
  if (e === "p")
    return new Ba();
  if (e === "h1")
    return new Xa();
  if (e === "img")
    return new Va();
  throw new Error("Invalid type");
}, Ye = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, Ga = (e) => {
  Ye("elementRemoved", { simplisitiId: e });
}, $n = (e, t) => {
  Ye("contentChange", { simplisitiId: e, content: t });
}, Ka = (e, t) => {
  Ye("classChange", { simplisitiId: e, spClassList: t });
}, Za = (e, t) => {
  Ye("styleChange", { simplisitiId: e, spStyleList: t });
}, Qa = (e, t) => {
  Ye("attributeChange", { simplisitiId: e, attribute: t });
}, Ja = /^&(?:amp|lt|gt|quot|apos|#39|#039);/, er = (e) => !!(e && /[A-Za-z0-9_]/.test(e)), an = (e, t, n, a) => {
  let r = null, i = !1;
  for (let s = t + n; s < e.length; s += 1) {
    const o = e[s];
    if (r) {
      i ? i = !1 : o === "\\" ? i = !0 : o === r && (r = null);
      continue;
    }
    if (o === '"' || o === "'") {
      r = o;
      continue;
    }
    if (e.startsWith(a, s))
      return s + a.length;
  }
  return -1;
}, tr = (e, t) => {
  if (e[t] !== "@" || e[t + 1] === "@")
    return -1;
  let n = t + 1;
  for (; er(e[n]); )
    n += 1;
  if (n === t + 1)
    return -1;
  for (; /\s/.test(e[n] ?? ""); )
    n += 1;
  if (e[n] !== "(")
    return n;
  let a = 0, r = null, i = !1;
  for (; n < e.length; n += 1) {
    const s = e[n];
    if (r) {
      i ? i = !1 : s === "\\" ? i = !0 : s === r && (r = null);
      continue;
    }
    if (s === '"' || s === "'")
      r = s;
    else if (s === "(")
      a += 1;
    else if (s === ")" && (a -= 1, a === 0))
      return n + 1;
  }
  return e.length;
}, nr = (e) => {
  const t = [];
  for (let n = 0; n < e.length; n += 1) {
    let a = -1;
    if (e.startsWith("{{--", n)) {
      const r = e.indexOf("--}}", n + 4);
      a = r === -1 ? -1 : r + 4;
    } else if (e.startsWith("<?", n) && !e.startsWith("<?xml", n)) {
      const r = e.indexOf("?>", n + 2);
      a = r === -1 ? -1 : r + 2;
    } else e.startsWith("{!!", n) ? a = an(e, n, 3, "!!}") : e.startsWith("{{", n) ? a = an(e, n, 2, "}}") : e[n] === "@" && (a = tr(e, n));
    a > n && (t.push({ start: n, end: a }), n = a - 1);
  }
  return t;
}, ar = (e, t, n) => {
  const a = [...t].sort((s, o) => s.start - o.start);
  let r = "", i = 0;
  for (const s of a)
    s.start < i || (r += e.slice(i, s.start), r += n(e.slice(s.start, s.end), s), i = s.end);
  return r + e.slice(i);
}, rr = (e) => {
  var i;
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&#039;": "'"
  };
  let n = "", a = null, r = !1;
  for (let s = 0; s < e.length; s += 1) {
    const o = e[s];
    if (a) {
      n += o, r ? r = !1 : o === "\\" ? r = !0 : o === a && (a = null);
      continue;
    }
    if (o === '"' || o === "'") {
      a = o, n += o;
      continue;
    }
    const l = (i = e.slice(s).match(Ja)) == null ? void 0 : i[0];
    l ? (n += t[l] ?? l, s += l.length - 1) : n += o;
  }
  return n;
}, ir = (e) => {
  const t = nr(e);
  return ar(
    e,
    t,
    rr
  ).replace(/&amp;&amp;/g, "&&").replace(/&lt;=/g, "<=").replace(/&gt;=/g, ">=").replace(/&lt;=&gt;/g, "<=>");
};
let _ = null, W = null, fe = null, Xe = {
  node: null,
  dragged: !1
}, m = null;
const Z = T(!1), re = T(!1), ke = T(!1), U = T(null), Oe = T(null), Un = "simplisiti-component-preview", yt = "sp-element__placeholder", Bn = 32, ot = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Rt = [
  "sp-element__selected",
  "sp-element__hover",
  "sp-element__dragging",
  "sp-element__drop-target"
], jt = Yn.join(","), Q = (e) => e instanceof HTMLElement && Yn.includes(e.tagName.toLowerCase()), Xn = (e, t) => e === t && e.dataset.simplisitiid === Un, Ht = (e) => (e == null ? void 0 : e.classList.contains(yt)) ?? !1, Wt = (e, t) => e === t || t.contains(e), Fe = (e, t) => {
  !e || !Q(e) || (e.classList.remove("sp-element__selected", "sp-element__hover"), t === "selected" ? e.classList.add("sp-element__selected") : t === "hover" && e.classList.add("sp-element__hover"));
}, ae = (e, t) => {
  if (!(e instanceof Element))
    return null;
  const n = e.closest(jt);
  return !n || !Wt(n, t) || Xn(n, t) || Ht(n) ? null : Q(n) ? n : null;
}, lt = (e, t) => {
  var a;
  if (!(e instanceof Element))
    return null;
  let n = e.closest("div");
  return n && Ht(n) && (n = ((a = n.parentElement) == null ? void 0 : a.closest("div")) ?? null), !n || !Wt(n, t) ? null : Q(n) ? n : null;
}, sr = (e) => {
  const t = e.ownerDocument;
  return e === t.scrollingElement || e === t.documentElement || e === t.body;
}, sn = (e, t) => {
  var r;
  if (sr(e))
    return !0;
  const n = (r = e.ownerDocument.defaultView) == null ? void 0 : r.getComputedStyle(e), a = t === "x" ? n == null ? void 0 : n.overflowX : n == null ? void 0 : n.overflowY;
  return a === "auto" || a === "scroll" || a === "overlay";
}, or = (e, t) => {
  const n = [];
  let a = e instanceof HTMLElement ? e : t;
  for (; a && (n.push(a), a !== t); )
    a = a.parentElement;
  const r = t.ownerDocument.scrollingElement;
  return r && !n.includes(r) && n.push(r), n;
}, on = (e, t, n) => e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? t * (n.clientHeight || n.ownerDocument.documentElement.clientHeight) : t, lr = (e, t) => {
  let n = on(e, e.deltaX, t), a = on(e, e.deltaY, t), r = !1;
  for (const i of or(e.target, t)) {
    const s = i.scrollLeft, o = i.scrollTop, l = Math.max(0, i.scrollWidth - i.clientWidth), c = Math.max(0, i.scrollHeight - i.clientHeight);
    sn(i, "x") && n !== 0 && (i.scrollLeft = Math.min(l, Math.max(0, s + n))), sn(i, "y") && a !== 0 && (i.scrollTop = Math.min(c, Math.max(0, o + a)));
    const d = i.scrollLeft - s, x = i.scrollTop - o;
    if ((d !== 0 || x !== 0) && (r = !0), n -= d, a -= x, n === 0 && a === 0)
      break;
  }
  return r;
}, Vn = () => {
  fe == null || fe.classList.remove("sp-element__drop-target"), fe = null;
}, Re = () => {
  _ == null || _.remove(), _ = null, Vn();
}, cr = (e) => {
  const t = Rt.join("|");
  return e.replace(new RegExp(`\\b(?:${t})\\b`, "g"), "");
}, ln = (e) => {
  const t = e == null ? void 0 : e.dataset.simplisitiid;
  if (e && t) {
    const n = cr(e.innerHTML);
    $n(t, ir(n));
  }
}, nt = (e) => Array.from(e.children).filter(
  (t) => t !== _ && t !== W
), fr = (e) => {
  let t = 0;
  for (const n of Array.from(e.children)) {
    if (n === _)
      return t;
    n !== W && (t += 1);
  }
  return -1;
}, ur = (e, t, n) => {
  const r = nt(e)[n] ?? null;
  r ? e.insertBefore(t, r) : e.appendChild(t);
}, dr = (e, t, n, a) => {
  if ((n == null ? void 0 : n.parentNode) === e) {
    e.insertBefore(t, n);
    return;
  }
  ur(e, t, a);
}, mr = (e) => {
  var a;
  const t = rn.get(e);
  if (t)
    return t;
  const n = e.createElement("canvas");
  return n.width = 1, n.height = 1, n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "-10000px", n.style.pointerEvents = "none", (a = n.getContext("2d")) == null || a.clearRect(0, 0, 1, 1), e.body.appendChild(n), rn.set(e, n), n;
}, qn = (e, t) => {
  var n;
  (n = e.dataTransfer) == null || n.setDragImage(mr(t), 0, 0);
}, pr = (e) => {
  const t = Oe.value, n = e.ownerDocument.defaultView;
  if (!t || !n)
    return 0;
  const a = n.getComputedStyle(t), r = n.getComputedStyle(e), i = parseFloat(r.paddingLeft || "0") + parseFloat(r.paddingRight || "0"), s = Math.max(e.clientWidth - i, 32), l = (/* @__PURE__ */ new Set(["block", "flex", "grid", "table", "list-item"])).has(a.display), c = t.cloneNode(!0);
  c.classList.remove(...Rt), c.removeAttribute("data-simplisitiid"), c.removeAttribute("draggable"), c.style.position = "absolute", c.style.left = "-100000px", c.style.top = "-100000px", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = l ? `${s}px` : "max-content", c.style.maxWidth = "none", c.style.height = "auto", c.style.minHeight = "0", c.style.margin = "0", e.appendChild(c);
  const d = Math.ceil(c.getBoundingClientRect().width);
  return c.remove(), d > 0 ? d : l ? s : t instanceof HTMLImageElement ? t.width || 150 : 64;
}, gr = (e) => {
  !m || m.type !== "add" || (m.placeholderWidth = pr(e), m.placeholderHeight = Bn, _ && (_.style.width = `${m.placeholderWidth}px`, _.style.height = `${m.placeholderHeight}px`));
}, Gn = (e) => _ || (_ = e.ownerDocument.createElement("div"), _.id = yt, _.classList.add(yt), (m == null ? void 0 : m.type) === "add" && _.classList.add("sp-element__placeholder--new"), _), Kn = () => {
  (m == null ? void 0 : m.frameId) !== null && (m == null ? void 0 : m.frameId) !== void 0 && (cancelAnimationFrame(m.frameId), m.frameId = null), m && (m.pendingPosition = null);
}, hr = (e, t) => {
  !t || !e || (e.originalStyle === null ? t.removeAttribute("style") : t.setAttribute("style", e.originalStyle));
}, xe = (e = !0) => {
  const t = m, n = W;
  Kn(), n && (n.classList.remove("sp-element__dragging"), hr(t, n)), e && (t == null ? void 0 : t.type) === "move" && t.sourceContainer && n && !n.isConnected ? (Re(), dr(
    t.sourceContainer,
    n,
    t.sourceNextSibling,
    t.sourceIndex
  )) : Re(), W = null, m = null, Oe.value = null, Z.value = !1, re.value = !1;
}, vr = (e) => {
  e.preventDefault(), e.stopPropagation(), m ? xe() : _ && Re();
}, ct = () => {
  Xe = {
    node: null,
    dragged: !1
  };
}, yr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover").forEach((t) => {
    Fe(t, null);
  });
}, br = (e, t) => {
  if (e.type !== "click" || !Q(t) || Z.value || re.value) {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  const n = U.value, a = t.closest(`[data-simplisitiid="${Un}"]`);
  a ? yr(a) : Fe(n, null), U.value = t, Fe(t, "selected"), ke.value = !0, e.preventDefault(), e.stopPropagation();
}, xr = (e, t) => {
  !Q(t) || t === U.value || Fe(t, "hover");
}, cn = (e, t) => {
  Q(t) && t !== U.value && Fe(t, null);
}, wr = (e, t) => {
  const n = Q(t) ? t : null, a = Oe.value ?? W, r = m;
  if (e.preventDefault(), e.stopPropagation(), !n || !a || !r) {
    xe();
    return;
  }
  const i = (_ == null ? void 0 : _.parentElement) ?? n, s = r.pendingPosition, o = !r.lastPointer || r.lastPointer.clientX !== e.clientX || r.lastPointer.clientY !== e.clientY;
  Kn(), s ? bt(s) : (o || !(_ != null && _.parentNode)) && bt({
    container: n,
    clientX: e.clientX,
    clientY: e.clientY
  });
  const l = r.sourceContainer;
  _ != null && _.parentNode ? _.replaceWith(a) : n.appendChild(a), a.innerHTML.startsWith("-empty-") && (a.innerHTML = a.innerHTML.replace("-empty-", "")), a.setAttribute("draggable", "true"), xe(!1), l && l !== i && ln(l), ln(i);
}, Wo = () => {
  if ((m == null ? void 0 : m.type) === "add") {
    xe();
    return;
  }
  Z.value = !1, Oe.value = null, re.value || Re();
}, bt = (e) => {
  const { container: t, clientX: n, clientY: a } = e;
  gr(t);
  const r = Gn(t);
  m != null && m.placeholderWidth && (r.style.width = `${m.placeholderWidth}px`), m != null && m.placeholderHeight && (r.style.height = `${m.placeholderHeight}px`);
  const i = nt(t), s = _r(n, a, t), o = i[s] ?? null, l = fr(t);
  r.parentElement === t && (m == null ? void 0 : m.targetContainer) === t && m.targetIndex === s && l === s || (o ? t.insertBefore(r, o) : t.appendChild(r)), m && (m.targetContainer = t, m.targetIndex = s);
}, Er = (e, t) => {
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
    m.pendingPosition = null, m.frameId = null, bt(a);
  })), !0) : !1;
}, Zn = (e) => {
  fe !== e && (Vn(), fe = e, fe.classList.add("sp-element__drop-target"));
}, Lr = (e, t) => {
  !Z.value && !re.value || !Q(t) || !m || (e.preventDefault(), e.stopPropagation(), Zn(t));
}, Cr = (e, t) => {
  !Z.value && !re.value || !Q(t) || !m || (e.preventDefault(), e.stopPropagation(), Er(e, t) && Zn(t));
}, Ar = (e, t) => {
  var s;
  if (!Q(t) || Z.value || ke.value || m)
    return;
  const n = t.parentElement;
  if (!n)
    return;
  const a = nt(n).indexOf(t), r = t.getBoundingClientRect();
  W = t, m = {
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
  }, re.value = !0, W.classList.add("sp-element__dragging"), W.style.position = "fixed", W.style.left = "-100000px", W.style.top = "-100000px", W.style.width = `${r.width}px`, W.style.height = `${r.height}px`, W.style.visibility = "hidden", W.style.pointerEvents = "none";
  const i = Gn(n);
  i.style.width = `${r.width}px`, i.style.height = `${r.height}px`, n.insertBefore(i, t), (s = e.dataTransfer) == null || s.setData("text/plain", W.dataset.simplisitiid || W.tagName), e.dataTransfer && (e.dataTransfer.effectAllowed = "move", qn(e, t.ownerDocument));
}, Yo = (e, t) => {
  var a;
  m && xe(), Z.value = !0;
  const n = qa(e);
  if (Oe.value = n.create(), m = {
    type: "add",
    sourceContainer: null,
    sourceIndex: -1,
    sourceNextSibling: null,
    targetContainer: null,
    targetIndex: -1,
    placeholderWidth: 0,
    placeholderHeight: Bn,
    originalStyle: null,
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, (a = t == null ? void 0 : t.dataTransfer) == null || a.setData("text/plain", `new:${e}`), t != null && t.dataTransfer) {
    t.dataTransfer.effectAllowed = "copy";
    const r = t.currentTarget instanceof HTMLElement ? t.currentTarget.ownerDocument : document;
    qn(t, r);
  }
}, _r = (e, t, n) => {
  var s;
  const a = nt(n), r = (s = n.ownerDocument.defaultView) == null ? void 0 : s.getComputedStyle(n), i = n.classList.contains("sp-style__layout-flex-direction__row") || (r == null ? void 0 : r.flexDirection) === "row" || (r == null ? void 0 : r.flexDirection) === "row-reverse";
  for (let o = 0; o < a.length; o++) {
    const l = a[o].getBoundingClientRect(), c = i ? l.left + l.width / 2 : l.top + l.height / 2;
    if ((i ? e : t) < c)
      return o;
  }
  return a.length;
}, fn = (e) => {
  Q(e) && !Xn(e, e) && e.setAttribute("draggable", "true"), e.querySelectorAll(jt).forEach((t) => {
    Ht(t) || t.setAttribute("draggable", "true");
  });
}, kr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover, .sp-element__dragging, .sp-element__drop-target").forEach((t) => {
    t.classList.remove(...Rt);
  }), xe(!1), e.querySelectorAll(jt).forEach((t) => {
    t.removeAttribute("draggable");
  }), Re(), U.value && Wt(U.value, e) && (U.value = null, ke.value = !1), fe = null, Oe.value = null, Z.value = !1, re.value = !1;
}, Pr = (e) => {
  const t = ot.get(e);
  if (t)
    return t;
  e.dataset.simplisitiInteractionLayer = "true", fn(e);
  const n = (p) => {
    const f = ae(p.target, e), u = ae(p.relatedTarget, e);
    f && f !== u && xr(p, f), u && u !== f && cn(p, u);
  }, a = (p) => {
    const f = ae(p.target, e), u = ae(p.relatedTarget, e);
    f && f !== u && cn(p, f);
  }, r = (p) => {
    Xe = {
      node: ae(p.target, e),
      dragged: !1
    };
  }, i = (p) => {
    const f = ae(p.target, e);
    if (Xe.dragged || m || re.value) {
      p.preventDefault(), p.stopPropagation(), ct();
      return;
    }
    f && br(p, f), ct();
  }, s = (p) => {
    ae(p.target, e) && (p.preventDefault(), p.stopPropagation());
  }, o = (p) => {
    ae(p.target, e) && (p.key === "Enter" || p.key === " ") && (p.preventDefault(), p.stopPropagation());
  }, l = (p) => {
    const f = ae(p.target, e);
    if (f) {
      if (Xe = {
        node: f,
        dragged: !0
      }, ke.value) {
        vr(p);
        return;
      }
      Ar(p, f);
    }
  }, c = (p) => {
    const f = lt(p.target, e);
    f && Cr(p, f);
  }, d = (p) => {
    const f = lt(p.target, e);
    f && Lr(p, f);
  }, x = (p) => {
    const f = lt(p.target, e);
    f && wr(p, f);
  }, E = () => {
    re.value && xe();
  }, C = (p) => {
    m && lr(p, e) && p.cancelable && p.preventDefault();
  }, z = new MutationObserver(() => fn(e));
  e.addEventListener("pointerover", n), e.addEventListener("pointerout", a), e.addEventListener("pointerdown", r), e.addEventListener("click", i), e.addEventListener("contextmenu", s), e.addEventListener("dblclick", s), e.addEventListener("auxclick", s), e.addEventListener("selectstart", s), e.addEventListener("keydown", o), e.addEventListener("dragstart", l), e.addEventListener("dragenter", d), e.addEventListener("dragover", c), e.addEventListener("drop", x), e.addEventListener("dragend", E), e.ownerDocument.addEventListener("wheel", C, { capture: !0, passive: !1 }), z.observe(e, { childList: !0, subtree: !0 });
  const N = () => {
    e.removeEventListener("pointerover", n), e.removeEventListener("pointerout", a), e.removeEventListener("pointerdown", r), e.removeEventListener("click", i), e.removeEventListener("contextmenu", s), e.removeEventListener("dblclick", s), e.removeEventListener("auxclick", s), e.removeEventListener("selectstart", s), e.removeEventListener("keydown", o), e.removeEventListener("dragstart", l), e.removeEventListener("dragenter", d), e.removeEventListener("dragover", c), e.removeEventListener("drop", x), e.removeEventListener("dragend", E), e.ownerDocument.removeEventListener("wheel", C, !0), z.disconnect(), kr(e), ct(), delete e.dataset.simplisitiInteractionLayer, ot.delete(e);
  };
  return ot.set(e, N), N;
}, Sr = (e) => {
  const t = ja[e];
  return Wa[t].map((a) => ({
    tab: a,
    ...Ha[a]
  }));
}, $o = (e, t) => t.find((n) => n.startsWith(e)), ft = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, Uo = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), a = parseInt(t[1]), r = parseInt(t[2]);
  return "#" + ft(n) + ft(a) + ft(r);
}, Or = '[data-simplisitiid="simplisiti-component-preview"]', xt = (e = document) => e.querySelector(Or), Mr = (e = document, t = 5e3) => {
  const n = xt(e);
  return n ? Promise.resolve(n) : new Promise((a, r) => {
    const i = e.body ?? e.documentElement, s = new MutationObserver(() => {
      const l = xt(e);
      l && (window.clearTimeout(o), s.disconnect(), a(l));
    }), o = window.setTimeout(() => {
      s.disconnect(), r(new Error("The component preview was not found in the editor iframe."));
    }, t);
    s.observe(i, { childList: !0, subtree: !0 });
  });
}, Ir = (e) => Pr(e), Nr = { class: "w-[215px]" }, Tr = { class: "flex" }, zr = ["title", "onClick"], Dr = { class: "editor-icon-wrapper" }, Fr = { class: "pt-2" }, Rr = /* @__PURE__ */ he({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, a = T([]), r = T({}), i = Na([]), s = T(void 0), o = t, l = () => {
      for (const g of Sr(n.tagName.toLowerCase()))
        i.push({
          component: Rn(g.component),
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
    }, d = () => {
      i.length > 0 && c(i[0]);
    }, x = (g) => {
      var b;
      return ((b = s.value) == null ? void 0 : b.tab) === g.tab;
    }, E = (g) => new Promise((b) => {
      setTimeout(() => {
        n.classList.remove(g), b();
      }, 10);
    }), C = (g) => new Promise((b) => {
      setTimeout(() => {
        n.classList.add(g), b();
      }, 10);
    }), z = () => new Promise((g) => {
      n.classList.forEach(async (b) => {
        b.startsWith("sp-style") && await E(b);
      }), g();
    }), N = (g) => new Promise((b) => {
      g.forEach(async (H) => {
        await C(H);
      }), b();
    }), p = (g) => new Promise((b) => {
      for (const H in g)
        n.style.setProperty(H, g[H]);
      b();
    }), f = (g) => new Promise((b) => {
      n.innerHTML = g.content, b();
    }), u = (g) => new Promise((b) => {
      n.setAttribute(g.type, g.content), b();
    }), w = (g, b) => {
      b != null && b.spClassList && (b.spClassList = g);
      const H = i.flatMap((k) => k.spClassList);
      a.value = H, z().then(() => {
        N(H).then(() => {
          n.dataset.simplisitiid && Ka(n.dataset.simplisitiid, H);
        });
      });
    }, A = (g) => {
      var H;
      (H = s.value) != null && H.spStyleList && (s.value.spStyleList = g);
      const b = i.reduce((k, v) => ({ ...k, ...v.spStyleList, ...g }), {});
      r.value = b, p(b).then(() => {
        n.dataset.simplisitiid && Za(n.dataset.simplisitiid, b);
      });
    }, P = (g) => {
      var b;
      (b = s.value) != null && b.spContent && (s.value.spContent = g), f(g).then(() => {
        n.dataset.simplisitiid && g.type === "text" && $n(n.dataset.simplisitiid, g.content);
      });
    }, D = (g) => {
      var b;
      (b = s.value) != null && b.spAttribute && (s.value.spAttribute = g), u(g).then(() => {
        n.dataset.simplisitiid && Qa(n.dataset.simplisitiid, g);
      });
    }, j = () => {
      a.value = Array.from(n.classList).filter((g) => g.startsWith("sp-style"));
    }, J = () => {
      r.value = {};
      for (const g of Ya) {
        const b = n.style.getPropertyValue(g);
        b !== "" && (r.value[g] = b);
      }
    };
    return Ft(() => {
      j(), J(), l(), d();
    }), (g, b) => {
      const H = Je("fa-icon");
      return Y(), G("div", Nr, [
        M("div", Tr, [
          (Y(!0), G(en, null, tn(ce(i), (k) => (Y(), G("div", {
            key: k.tab
          }, [
            M("button", {
              class: et([
                "wizard-icon-button cursor-pointer border-0 bg-gray-100 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                { "wizard-icon-button--selected": x(k) }
              ]),
              title: k.title,
              onClick: (v) => c(k)
            }, [
              M("div", Dr, [
                de(H, {
                  icon: k.icon
                }, null, 8, ["icon"])
              ])
            ], 10, zr)
          ]))), 128))
        ]),
        M("div", Fr, [
          (Y(!0), G(en, null, tn(ce(i), (k) => (Y(), G("div", null, [
            Ta(M("div", null, [
              (Y(), tt(Fn(k == null ? void 0 : k.component), {
                "sp-class-list": k == null ? void 0 : k.spClassList,
                "onUpdate:spClassList": (v) => w(v, k),
                "sp-style-list": k == null ? void 0 : k.spStyleList,
                "onUpdate:spStyleList": A,
                element: e.element,
                "onUpdate:spContent": P,
                "onUpdate:spAttribute": D
              }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
            ], 512), [
              [za, x(k)]
            ])
          ]))), 256))
        ])
      ]);
    };
  }
}), jr = { class: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10" }, Hr = { class: "m-0 text-base font-semibold text-gray-900" }, Wr = { class: "mt-2 text-sm text-gray-600" }, Yr = { class: "mt-4 flex justify-end gap-2" }, $r = /* @__PURE__ */ he({
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
    return (a, r) => e.show ? (Y(), G("div", {
      key: 0,
      class: "fixed inset-0 z-[1100] flex items-center justify-center bg-gray-900/40 p-4",
      role: "dialog",
      "aria-modal": "true",
      onClick: r[2] || (r[2] = jn((i) => n("cancel"), ["self"]))
    }, [
      M("div", jr, [
        M("h3", Hr, ht(e.title), 1),
        M("p", Wr, ht(e.message), 1),
        M("div", Yr, [
          M("button", {
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
            onClick: r[0] || (r[0] = (i) => n("cancel"))
          }, " Cancelar "),
          M("button", {
            type: "button",
            class: "rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
            onClick: r[1] || (r[1] = (i) => n("confirm"))
          }, " Eliminar ")
        ])
      ])
    ])) : Ce("", !0);
  }
}), Ur = { class: "flex items-center gap-2 border-b border-gray-200 py-1.5" }, Br = { class: "m-0 text-sm font-semibold text-gray-800" }, Xr = { class: "editor-icon-wrapper" }, Vr = { class: "editor-icon-wrapper" }, qr = { class: "pt-2" }, Gr = /* @__PURE__ */ he({
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
    const l = t, c = (u) => {
      if (!u || !a.value)
        return;
      const w = document.documentElement, A = w.clientWidth || window.innerWidth, P = w.clientHeight || window.innerHeight, D = u.getBoundingClientRect(), j = a.value.offsetWidth, J = a.value.offsetHeight, g = 10, b = 10, H = Math.max(g, A - j - g), k = Math.max(g, P - J - g), v = D.right + b + j <= A - g, y = D.left - b - j >= g;
      let L = v ? D.right + b : y ? D.left - j - b : D.right + b, O = D.top;
      if (O + J > P - g) {
        const F = D.top - J - b;
        O = F >= g ? F : k;
      }
      if (O < g) {
        const F = D.bottom + b;
        O = F + J <= P - g ? F : g;
      }
      a.value.style.top = `${Math.min(Math.max(O, g), k)}px`, a.value.style.left = `${Math.min(Math.max(L, g), H)}px`;
    }, d = (u = n) => {
      s !== null && cancelAnimationFrame(s), s = requestAnimationFrame(() => {
        s = null, c(u);
      });
    }, x = B(() => {
      var w;
      const u = (w = n == null ? void 0 : n.tagName) == null ? void 0 : w.toLowerCase();
      return u && Wn[u] || "Element";
    }), E = (u) => {
      setTimeout(() => {
        l("close", u), r.value = !0;
      }, 300);
    }, C = () => {
      i.value = !0;
    }, z = () => {
      i.value = !1;
    }, N = () => {
      n && (n.remove(), n.dataset.simplisitiid && Ga(n.dataset.simplisitiid), i.value = !1, r.value = !0, l("close"));
    }, p = () => {
      nn(() => d(n));
    }, f = () => {
      d(n);
    };
    return Ft(() => {
      var u, w;
      document.addEventListener("scroll", f, !0), window.addEventListener("resize", f), (u = window.visualViewport) == null || u.addEventListener("resize", f), (w = window.visualViewport) == null || w.addEventListener("scroll", f), o = new ResizeObserver(() => d(n)), a.value && o.observe(a.value), n && o.observe(n), nn(() => d(n));
    }), Da(() => {
      var u, w;
      document.removeEventListener("scroll", f, !0), window.removeEventListener("resize", f), (u = window.visualViewport) == null || u.removeEventListener("resize", f), (w = window.visualViewport) == null || w.removeEventListener("scroll", f), o == null || o.disconnect(), o = null, s !== null && (cancelAnimationFrame(s), s = null);
    }), (u, w) => {
      const A = Je("fa-icon");
      return Y(), G("div", {
        class: et([
          "fixed z-[1000] max-h-[calc(100vh-20px)] max-w-[calc(100vw-20px)] overflow-auto rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in",
          { "animate-editor-fade-out": r.value }
        ]),
        ref_key: "popup",
        ref: a,
        onClick: w[0] || (w[0] = jn(() => {
        }, ["stop"]))
      }, [
        M("div", Ur, [
          M("h4", Br, ht(x.value), 1),
          M("button", {
            class: "ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            "aria-label": "Eliminar elemento",
            title: "Eliminar elemento",
            onClick: C
          }, [
            M("div", Xr, [
              de(A, { icon: "trash" })
            ])
          ]),
          M("button", {
            class: "cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
            onClick: E
          }, [
            M("div", Vr, [
              de(A, { icon: "xmark" })
            ])
          ])
        ]),
        M("div", qr, [
          e.element ? (Y(), tt(Rr, {
            key: 0,
            element: e.element,
            onTabChange: p
          }, null, 8, ["element"])) : Ce("", !0)
        ]),
        de($r, {
          show: i.value,
          title: "Eliminar elemento",
          message: `¿Deseas eliminar ${x.value.toLowerCase()}?`,
          onConfirm: N,
          onCancel: z
        }, null, 8, ["show", "message"])
      ], 2);
    };
  }
}), Kr = [
  {
    icon: "cube",
    component: Rn(() => import("./ElementsPanel-3knm6SaH.js"))
  }
], Zr = { class: "editor-fixed-overlay inset-y-0 left-0 z-[1000] flex overflow-y-auto" }, Qr = { class: "min-w-[300px]" }, Jr = { class: "flex flex-col items-center justify-center" }, ei = ["aria-label"], ti = /* @__PURE__ */ he({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = T(!1), n = T(Kr[0]), a = B(() => t.value && !Z.value), r = () => {
      t.value = !a.value;
    };
    return (i, s) => {
      const o = Je("fa-icon");
      return Y(), G("div", Zr, [
        M("div", {
          class: et([
            "flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300",
            { "!w-0": ce(Z) || !t.value }
          ])
        }, [
          M("div", Qr, [
            (Y(), tt(Fn(n.value.component)))
          ])
        ], 2),
        M("div", Jr, [
          M("button", {
            class: "cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none",
            onClick: r,
            "aria-label": a.value ? "Cerrar elementos" : "Abrir elementos"
          }, [
            de(o, {
              icon: a.value ? "xmark" : n.value.icon
            }, null, 8, ["icon"])
          ], 8, ei)
        ])
      ]);
    };
  }
}), ni = { class: "min-h-full font-sans text-sm text-gray-800" }, ai = { class: "editor-icon-wrapper" }, ri = { class: "editor-icon-wrapper" }, R = 12, ii = 4, si = 200, oi = /* @__PURE__ */ he({
  __name: "App",
  setup(e) {
    let t = null;
    const n = T(!1), a = T(!1), r = T(null), i = T(!1), s = T(!1), o = T({
      left: null,
      right: R,
      top: R
    });
    let l = null;
    const c = { passive: !1 }, d = T(!1);
    let x = null;
    const E = B(() => {
      const v = o.value, y = v.left !== null;
      return {
        top: `${v.top}px`,
        left: y ? `${v.left}px` : "auto",
        right: y ? "auto" : `${v.right}px`
      };
    }), C = (v, y, L) => Math.min(Math.max(v, y), Math.max(y, L)), z = (v, y, L, O) => {
      const F = Math.max(
        R,
        window.innerWidth - L - R
      ), Le = Math.max(
        R,
        window.innerHeight - O - R
      );
      o.value = {
        ...o.value,
        left: C(v, R, F),
        top: C(y, R, Le)
      };
    }, N = () => {
      x !== null && (window.clearTimeout(x), x = null);
    }, p = () => {
      N(), d.value = !1;
    }, f = (v, y, L) => {
      const F = v + L / 2 <= window.innerWidth / 2 ? R : window.innerWidth - L - R;
      N(), d.value = !0, o.value = {
        ...o.value,
        left: v,
        top: y
      }, x = window.setTimeout(p, si + 50), window.requestAnimationFrame(() => {
        d.value && (o.value = {
          ...o.value,
          left: Math.max(R, F),
          right: R,
          top: R
        });
      });
    }, u = () => {
      const v = r.value;
      if (!v)
        return;
      const y = v.getBoundingClientRect(), L = Math.max(
        R,
        window.innerWidth - y.width - R
      ), O = o.value, F = O.left === null ? null : C(O.left, R, L), Le = C(
        O.right,
        R,
        L
      );
      o.value = {
        ...O,
        left: F,
        right: Le,
        top: i.value ? O.top : R
      };
    }, w = (v) => {
      if (d.value || !v.isPrimary || v.pointerType === "mouse" && v.button !== 0)
        return;
      const y = r.value;
      if (!y)
        return;
      const L = y.getBoundingClientRect();
      s.value = !1, o.value = {
        ...o.value,
        left: L.left,
        top: L.top
      }, l = {
        pointerId: v.pointerId,
        startX: v.clientX,
        startY: v.clientY,
        startLeft: L.left,
        startTop: L.top,
        width: L.width,
        height: L.height,
        moved: !1
      }, document.addEventListener("pointermove", A, c), document.addEventListener("pointerup", P, c), document.addEventListener("pointercancel", P, c);
    }, A = (v) => {
      const y = l;
      if (!y || y.pointerId !== v.pointerId)
        return;
      const L = v.clientX - y.startX, O = v.clientY - y.startY;
      if (!y.moved && Math.hypot(L, O) < ii)
        return;
      y.moved = !0, i.value = !0, v.preventDefault();
      const F = r.value;
      F && !F.hasPointerCapture(v.pointerId) && F.setPointerCapture(v.pointerId), z(
        y.startLeft + L,
        y.startTop + O,
        y.width,
        y.height
      );
    }, P = (v) => {
      const y = l, L = r.value;
      if (!(!y || y.pointerId !== v.pointerId)) {
        if (y.moved && L) {
          v.preventDefault();
          const O = L.getBoundingClientRect();
          f(O.left, O.top, O.width), s.value = !0;
        }
        L != null && L.hasPointerCapture(v.pointerId) && L.releasePointerCapture(v.pointerId), document.removeEventListener("pointermove", A, c), document.removeEventListener("pointerup", P, c), document.removeEventListener("pointercancel", P, c), l = null, i.value = !1;
      }
    }, D = (v) => {
      if (s.value) {
        s.value = !1;
        return;
      }
      J(v);
    };
    vt(Z, (v) => {
      const y = xt();
      v ? y == null || y.classList.add("sp-element__add-element-mode") : y == null || y.classList.remove("sp-element__add-element-mode");
    }), vt([n, a], () => {
      window.requestAnimationFrame(u);
    });
    const j = () => {
      U.value && U.value.classList.remove("sp-element__selected"), U.value = null, ke.value = !1;
    }, J = (v) => {
      window.parent.document.dispatchEvent(new CustomEvent(`editorHistory${v === "undo" ? "Undo" : "Redo"}`));
    }, g = (v) => {
      const y = v.detail;
      n.value = (y == null ? void 0 : y.canUndo) ?? !1, a.value = (y == null ? void 0 : y.canRedo) ?? !1;
    }, b = () => {
      j();
    }, H = () => {
      window.parent.document.dispatchEvent(new CustomEvent("editorHistoryStateRequest"));
    }, k = async () => {
      const v = await Mr();
      t == null || t(), t = Ir(v);
    };
    return Ft(() => {
      document.addEventListener("editorHistoryState", g), document.addEventListener("editorHistoryRestored", b), window.addEventListener("resize", u), H(), k().catch((v) => {
        console.error("Unable to initialize the graphical editor surface.", v);
      });
    }), Fa(() => {
      document.removeEventListener("editorHistoryState", g), document.removeEventListener("editorHistoryRestored", b), window.removeEventListener("resize", u), N(), document.removeEventListener("pointermove", A, c), document.removeEventListener("pointerup", P, c), document.removeEventListener("pointercancel", P, c), l = null, i.value = !1, t == null || t(), t = null;
    }), (v, y) => {
      var O, F, Le;
      const L = Je("fa-icon");
      return Y(), G("div", ni, [
        n.value || a.value ? (Y(), G("div", {
          key: 0,
          ref_key: "historyOverlay",
          ref: r,
          class: et([
            "editor-fixed-overlay editor-history-overlay z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5",
            {
              "editor-history-overlay--dragging": i.value,
              "editor-history-overlay--snapping": d.value
            }
          ]),
          style: Ra(E.value),
          onPointerdown: w,
          onTransitionend: p
        }, [
          n.value ? (Y(), G("button", {
            key: 0,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Deshacer cambio",
            title: "Deshacer cambio",
            onClick: y[0] || (y[0] = (Ia) => D("undo"))
          }, [
            M("div", ai, [
              de(L, { icon: "arrow-rotate-left" })
            ])
          ])) : Ce("", !0),
          a.value ? (Y(), G("button", {
            key: 1,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Rehacer cambio",
            title: "Rehacer cambio",
            onClick: y[1] || (y[1] = (Ia) => D("redo"))
          }, [
            M("div", ri, [
              de(L, { icon: "arrow-rotate-right" })
            ])
          ])) : Ce("", !0)
        ], 38)) : Ce("", !0),
        ce(ke) ? (Y(), tt(Gr, {
          key: ((O = ce(U)) == null ? void 0 : O.dataset.simplisitiid) || ((F = ce(U)) == null ? void 0 : F.tagName),
          element: ce(U),
          type: (Le = ce(U)) == null ? void 0 : Le.tagName,
          onClose: j
        }, null, 8, ["element", "type"])) : Ce("", !0),
        de(ti)
      ]);
    };
  }
}), un = () => {
};
let Yt = {}, Qn = {}, Jn = null, ea = {
  mark: un,
  measure: un
};
try {
  typeof window < "u" && (Yt = window), typeof document < "u" && (Qn = document), typeof MutationObserver < "u" && (Jn = MutationObserver), typeof performance < "u" && (ea = performance);
} catch {
}
const {
  userAgent: dn = ""
} = Yt.navigator || {}, me = Yt, S = Qn, mn = Jn, Be = ea;
me.document;
const oe = !!S.documentElement && !!S.head && typeof S.addEventListener == "function" && typeof S.createElement == "function", ta = ~dn.indexOf("MSIE") || ~dn.indexOf("Trident/");
var I = "classic", na = "duotone", X = "sharp", V = "sharp-duotone", li = [I, na, X, V], ci = {
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
}, pn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, fi = ["kit"], ui = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, di = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, mi = {
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
}, pi = {
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
}, gi = {
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
}, hi = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, vi = {
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
}, yi = {
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
}, aa = {
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
}, bi = ["solid", "regular", "light", "thin", "duotone", "brands"], ra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xi = ra.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ie = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, wi = [...Object.keys(hi), ...bi, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ie.GROUP, Ie.SWAP_OPACITY, Ie.PRIMARY, Ie.SECONDARY].concat(ra.map((e) => "".concat(e, "x"))).concat(xi.map((e) => "w-".concat(e))), Ei = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Li = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, Ci = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, gn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const ie = "___FONT_AWESOME___", wt = 16, ia = "fa", sa = "svg-inline--fa", we = "data-fa-i2svg", Et = "data-fa-pseudo-element", Ai = "data-fa-pseudo-element-pending", $t = "data-prefix", Ut = "data-icon", hn = "fontawesome-i2svg", _i = "async", ki = ["HTML", "HEAD", "STYLE", "SCRIPT"], oa = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), la = [I, X, V];
function $e(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[I];
    }
  });
}
const ca = {
  ...aa
};
ca[I] = {
  ...aa[I],
  ...pn.kit,
  ...pn["kit-duotone"]
};
const ye = $e(ca), Lt = {
  ...yi
};
Lt[I] = {
  ...Lt[I],
  ...gn.kit,
  ...gn["kit-duotone"]
};
const je = $e(Lt), Ct = {
  ...vi
};
Ct[I] = {
  ...Ct[I],
  ...Ci.kit
};
const be = $e(Ct), At = {
  ...gi
};
At[I] = {
  ...At[I],
  ...Li.kit
};
const Pi = $e(At), Si = ui, fa = "fa-layers-text", Oi = di, Mi = {
  ...ci
};
$e(Mi);
const Ii = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ut = Ie, Pe = /* @__PURE__ */ new Set();
Object.keys(je[I]).map(Pe.add.bind(Pe));
Object.keys(je[X]).map(Pe.add.bind(Pe));
Object.keys(je[V]).map(Pe.add.bind(Pe));
const Ni = [...fi, ...wi], Te = me.FontAwesomeConfig || {};
function Ti(e) {
  var t = S.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function zi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
S && typeof S.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, a] = t;
  const r = zi(Ti(n));
  r != null && (Te[a] = r);
});
const ua = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: ia,
  replacementClass: sa,
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
Te.familyPrefix && (Te.cssPrefix = Te.familyPrefix);
const Se = {
  ...ua,
  ...Te
};
Se.autoReplaceSvg || (Se.observeMutations = !1);
const h = {};
Object.keys(ua).forEach((e) => {
  Object.defineProperty(h, e, {
    enumerable: !0,
    set: function(t) {
      Se[e] = t, ze.forEach((n) => n(h));
    },
    get: function() {
      return Se[e];
    }
  });
});
Object.defineProperty(h, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Se.cssPrefix = e, ze.forEach((t) => t(h));
  },
  get: function() {
    return Se.cssPrefix;
  }
});
me.FontAwesomeConfig = h;
const ze = [];
function Di(e) {
  return ze.push(e), () => {
    ze.splice(ze.indexOf(e), 1);
  };
}
const le = wt, ee = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Fi(e) {
  if (!e || !oe)
    return;
  const t = S.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = S.head.childNodes;
  let a = null;
  for (let r = n.length - 1; r > -1; r--) {
    const i = n[r], s = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (a = i);
  }
  return S.head.insertBefore(t, a), e;
}
const Ri = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function He() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ri[Math.random() * 62 | 0];
  return t;
}
function Me(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Bt(e) {
  return e.classList ? Me(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function da(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ji(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(da(e[n]), '" '), "").trim();
}
function at(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Xt(e) {
  return e.size !== ee.size || e.x !== ee.x || e.y !== ee.y || e.rotate !== ee.rotate || e.flipX || e.flipY;
}
function Hi(e) {
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
function Wi(e) {
  let {
    transform: t,
    width: n = wt,
    height: a = wt,
    startCentered: r = !1
  } = e, i = "";
  return r && ta ? i += "translate(".concat(t.x / le - n / 2, "em, ").concat(t.y / le - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(t.x / le, "em), calc(-50% + ").concat(t.y / le, "em)) ") : i += "translate(".concat(t.x / le, "em, ").concat(t.y / le, "em) "), i += "scale(".concat(t.size / le * (t.flipX ? -1 : 1), ", ").concat(t.size / le * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var Yi = `:root, :host {
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
function ma() {
  const e = ia, t = sa, n = h.cssPrefix, a = h.replacementClass;
  let r = Yi;
  if (n !== e || a !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let vn = !1;
function dt() {
  h.autoAddCss && !vn && (Fi(ma()), vn = !0);
}
var $i = {
  mixout() {
    return {
      dom: {
        css: ma,
        insertCss: dt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        dt();
      },
      beforeI2svg() {
        dt();
      }
    };
  }
};
const se = me || {};
se[ie] || (se[ie] = {});
se[ie].styles || (se[ie].styles = {});
se[ie].hooks || (se[ie].hooks = {});
se[ie].shims || (se[ie].shims = []);
var te = se[ie];
const pa = [], ga = function() {
  S.removeEventListener("DOMContentLoaded", ga), Ge = 1, pa.map((e) => e());
};
let Ge = !1;
oe && (Ge = (S.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(S.readyState), Ge || S.addEventListener("DOMContentLoaded", ga));
function Ui(e) {
  oe && (Ge ? setTimeout(e, 0) : pa.push(e));
}
function Ue(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? da(e) : "<".concat(t, " ").concat(ji(n), ">").concat(a.map(Ue).join(""), "</").concat(t, ">");
}
function yn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var mt = function(t, n, a, r) {
  var i = Object.keys(t), s = i.length, o = n, l, c, d;
  for (a === void 0 ? (l = 1, d = t[i[0]]) : (l = 0, d = a); l < s; l++)
    c = i[l], d = o(d, t[c], c, t);
  return d;
};
function Bi(e) {
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
function _t(e) {
  const t = Bi(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Xi(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function bn(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function kt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = bn(t);
  typeof te.hooks.addPack == "function" && !a ? te.hooks.addPack(e, bn(t)) : te.styles[e] = {
    ...te.styles[e] || {},
    ...r
  }, e === "fas" && kt("fa", t);
}
const {
  styles: ve,
  shims: Vi
} = te, qi = {
  [I]: Object.values(be[I]),
  [X]: Object.values(be[X]),
  [V]: Object.values(be[V])
};
let Vt = null, ha = {}, va = {}, ya = {}, ba = {}, xa = {};
const Gi = {
  [I]: Object.keys(ye[I]),
  [X]: Object.keys(ye[X]),
  [V]: Object.keys(ye[V])
};
function Ki(e) {
  return ~Ni.indexOf(e);
}
function Zi(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !Ki(r) ? r : null;
}
const wa = () => {
  const e = (a) => mt(ve, (r, i, s) => (r[s] = mt(i, a, {}), r), {});
  ha = e((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = i;
  }), a)), va = e((a, r, i) => (a[i] = i, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = i;
  }), a)), xa = e((a, r, i) => {
    const s = r[2];
    return a[i] = i, s.forEach((o) => {
      a[o] = i;
    }), a;
  });
  const t = "far" in ve || h.autoFetchSvg, n = mt(Vi, (a, r) => {
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
  ya = n.names, ba = n.unicodes, Vt = rt(h.styleDefault, {
    family: h.familyDefault
  });
};
Di((e) => {
  Vt = rt(e.styleDefault, {
    family: h.familyDefault
  });
});
wa();
function qt(e, t) {
  return (ha[e] || {})[t];
}
function Qi(e, t) {
  return (va[e] || {})[t];
}
function ue(e, t) {
  return (xa[e] || {})[t];
}
function Ea(e) {
  return ya[e] || {
    prefix: null,
    iconName: null
  };
}
function Ji(e) {
  const t = ba[e], n = qt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function pe() {
  return Vt;
}
const Gt = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = I
  } = t, a = ye[n][e], r = je[n][e] || je[n][a], i = e in te.styles ? e : null;
  return r || i || null;
}
const es = {
  [I]: Object.keys(be[I]),
  [X]: Object.keys(be[X]),
  [V]: Object.keys(be[V])
};
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [I]: "".concat(h.cssPrefix, "-").concat(I),
    [X]: "".concat(h.cssPrefix, "-").concat(X),
    [V]: "".concat(h.cssPrefix, "-").concat(V)
  };
  let r = null, i = I;
  const s = li.filter((l) => l !== na);
  s.forEach((l) => {
    (e.includes(a[l]) || e.some((c) => es[l].includes(c))) && (i = l);
  });
  const o = e.reduce((l, c) => {
    const d = Zi(h.cssPrefix, c);
    if (ve[c] ? (c = qi[i].includes(c) ? Pi[i][c] : c, r = c, l.prefix = c) : Gi[i].indexOf(c) > -1 ? (r = c, l.prefix = rt(c, {
      family: i
    })) : d ? l.iconName = d : c !== h.replacementClass && !s.some((x) => c === a[x]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const x = r === "fa" ? Ea(l.iconName) : {}, E = ue(l.prefix, l.iconName);
      x.prefix && (r = null), l.iconName = x.iconName || E || l.iconName, l.prefix = x.prefix || l.prefix, l.prefix === "far" && !ve.far && ve.fas && !h.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Gt());
  return (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"), !o.prefix && i === X && (ve.fass || h.autoFetchSvg) && (o.prefix = "fass", o.iconName = ue(o.prefix, o.iconName) || o.iconName), !o.prefix && i === V && (ve.fasds || h.autoFetchSvg) && (o.prefix = "fasds", o.iconName = ue(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = pe() || "fas"), o;
}
class ts {
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
      }, kt(i, r[i]);
      const s = be[I][i];
      s && kt(s, r[i]), wa();
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
let xn = [], Ae = {};
const _e = {}, ns = Object.keys(_e);
function as(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return xn = e, Ae = {}, Object.keys(_e).forEach((a) => {
    ns.indexOf(a) === -1 && delete _e[a];
  }), xn.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = r[i][s];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((s) => {
        Ae[s] || (Ae[s] = []), Ae[s].push(i[s]);
      });
    }
    a.provides && a.provides(_e);
  }), n;
}
function Pt(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (Ae[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...a]);
  }), t;
}
function Ee(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (Ae[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function ge() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return _e[e] ? _e[e].apply(null, t) : void 0;
}
function St(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || pe();
  if (t)
    return t = ue(n, t) || t, yn(La.definitions, n, t) || yn(te.styles, n, t);
}
const La = new ts(), rs = () => {
  h.autoReplaceSvg = !1, h.observeMutations = !1, Ee("noAuto");
}, is = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return oe ? (Ee("beforeI2svg", e), ge("pseudoElements2svg", e), ge("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    h.autoReplaceSvg === !1 && (h.autoReplaceSvg = !0), h.observeMutations = !0, Ui(() => {
      os({
        autoReplaceSvgRoot: t
      }), Ee("watch", e);
    });
  }
}, ss = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ue(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = rt(e[0]);
      return {
        prefix: n,
        iconName: ue(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(h.cssPrefix, "-")) > -1 || e.match(Si))) {
      const t = it(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || pe(),
        iconName: ue(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = pe();
      return {
        prefix: t,
        iconName: ue(t, e) || e
      };
    }
  }
}, q = {
  noAuto: rs,
  config: h,
  dom: is,
  parse: ss,
  library: La,
  findIconDefinition: St,
  toHtml: Ue
}, os = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = S
  } = e;
  (Object.keys(te.styles).length > 0 || h.autoFetchSvg) && oe && h.autoReplaceSvg && q.dom.i2svg({
    node: t
  });
};
function st(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ue(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!oe) return;
      const n = S.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function ls(e) {
  let {
    children: t,
    main: n,
    mask: a,
    attributes: r,
    styles: i,
    transform: s
  } = e;
  if (Xt(s) && n.found && !a.found) {
    const {
      width: o,
      height: l
    } = n, c = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = at({
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
function cs(e) {
  let {
    prefix: t,
    iconName: n,
    children: a,
    attributes: r,
    symbol: i
  } = e;
  const s = i === !0 ? "".concat(t, "-").concat(h.cssPrefix, "-").concat(n) : i;
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
function Kt(e) {
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
    extra: d,
    watchable: x = !1
  } = e, {
    width: E,
    height: C
  } = n.found ? n : t, z = a === "fak", N = [h.replacementClass, r ? "".concat(h.cssPrefix, "-").concat(r) : ""].filter((P) => d.classes.indexOf(P) === -1).filter((P) => P !== "" || !!P).concat(d.classes).join(" ");
  let p = {
    children: [],
    attributes: {
      ...d.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: N,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(E, " ").concat(C)
    }
  };
  const f = z && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(E / C * 16 * 0.0625, "em")
  } : {};
  x && (p.attributes[we] = ""), o && (p.children.push({
    tag: "title",
    attributes: {
      id: p.attributes["aria-labelledby"] || "title-".concat(c || He())
    },
    children: [o]
  }), delete p.attributes.title);
  const u = {
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
      ...d.styles
    }
  }, {
    children: w,
    attributes: A
  } = n.found && t.found ? ge("generateAbstractMask", u) || {
    children: [],
    attributes: {}
  } : ge("generateAbstractIcon", u) || {
    children: [],
    attributes: {}
  };
  return u.children = w, u.attributes = A, s ? cs(u) : ls(u);
}
function wn(e) {
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
  o && (l[we] = "");
  const c = {
    ...s.styles
  };
  Xt(r) && (c.transform = Wi({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const d = at(c);
  d.length > 0 && (l.style = d);
  const x = [];
  return x.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), i && x.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), x;
}
function fs(e) {
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
  }, i = at(a.styles);
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
  styles: pt
} = te;
function Ot(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(h.cssPrefix, "-").concat(ut.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(h.cssPrefix, "-").concat(ut.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(h.cssPrefix, "-").concat(ut.PRIMARY),
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
const us = {
  found: !1,
  width: 512,
  height: 512
};
function ds(e, t) {
  !oa && !h.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Mt(e, t) {
  let n = t;
  return t === "fa" && h.styleDefault !== null && (t = pe()), new Promise((a, r) => {
    if (n === "fa") {
      const i = Ea(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && pt[t] && pt[t][e]) {
      const i = pt[t][e];
      return a(Ot(i));
    }
    ds(e, t), a({
      ...us,
      icon: h.showMissingIcons && e ? ge("missingIconAbstract") || {} : {}
    });
  });
}
const En = () => {
}, It = h.measurePerformance && Be && Be.mark && Be.measure ? Be : {
  mark: En,
  measure: En
}, Ne = 'FA "6.6.0"', ms = (e) => (It.mark("".concat(Ne, " ").concat(e, " begins")), () => Ca(e)), Ca = (e) => {
  It.mark("".concat(Ne, " ").concat(e, " ends")), It.measure("".concat(Ne, " ").concat(e), "".concat(Ne, " ").concat(e, " begins"), "".concat(Ne, " ").concat(e, " ends"));
};
var Zt = {
  begin: ms,
  end: Ca
};
const Ve = () => {
};
function Ln(e) {
  return typeof (e.getAttribute ? e.getAttribute(we) : null) == "string";
}
function ps(e) {
  const t = e.getAttribute ? e.getAttribute($t) : null, n = e.getAttribute ? e.getAttribute(Ut) : null;
  return t && n;
}
function gs(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(h.replacementClass);
}
function hs() {
  return h.autoReplaceSvg === !0 ? qe.replace : qe[h.autoReplaceSvg] || qe.replace;
}
function vs(e) {
  return S.createElementNS("http://www.w3.org/2000/svg", e);
}
function ys(e) {
  return S.createElement(e);
}
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? vs : ys
  } = t;
  if (typeof e == "string")
    return S.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    a.appendChild(Aa(i, {
      ceFn: n
    }));
  }), a;
}
function bs(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const qe = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Aa(n), t);
      }), t.getAttribute(we) === null && h.keepOriginalSource) {
        let n = S.createComment(bs(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Bt(t).indexOf(h.replacementClass))
      return qe.replace(e);
    const a = new RegExp("".concat(h.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, o) => (o === h.replacementClass || o.match(a) ? s.toSvg.push(o) : s.toNode.push(o), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => Ue(i)).join(`
`);
    t.setAttribute(we, ""), t.innerHTML = r;
  }
};
function Cn(e) {
  e();
}
function _a(e, t) {
  const n = typeof t == "function" ? t : Ve;
  if (e.length === 0)
    n();
  else {
    let a = Cn;
    h.mutateApproach === _i && (a = me.requestAnimationFrame || Cn), a(() => {
      const r = hs(), i = Zt.begin("mutate");
      e.map(r), i(), n();
    });
  }
}
let Qt = !1;
function ka() {
  Qt = !0;
}
function Nt() {
  Qt = !1;
}
let Ke = null;
function An(e) {
  if (!mn || !h.observeMutations)
    return;
  const {
    treeCallback: t = Ve,
    nodeCallback: n = Ve,
    pseudoElementsCallback: a = Ve,
    observeMutationsRoot: r = S
  } = e;
  Ke = new mn((i) => {
    if (Qt) return;
    const s = pe();
    Me(i).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !Ln(o.addedNodes[0]) && (h.searchPseudoElements && a(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && h.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && Ln(o.target) && ~Ii.indexOf(o.attributeName))
        if (o.attributeName === "class" && ps(o.target)) {
          const {
            prefix: l,
            iconName: c
          } = it(Bt(o.target));
          o.target.setAttribute($t, l || s), c && o.target.setAttribute(Ut, c);
        } else gs(o.target) && n(o.target);
    });
  }), oe && Ke.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function xs() {
  Ke && Ke.disconnect();
}
function ws(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((a, r) => {
    const i = r.split(":"), s = i[0], o = i.slice(1);
    return s && o.length > 0 && (a[s] = o.join(":").trim()), a;
  }, {})), n;
}
function Es(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "";
  let r = it(Bt(e));
  return r.prefix || (r.prefix = pe()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Qi(r.prefix, e.innerText) || qt(r.prefix, _t(e.innerText))), !r.iconName && h.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function Ls(e) {
  const t = Me(e.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return h.autoA11y && (n ? t["aria-labelledby"] = "".concat(h.replacementClass, "-title-").concat(a || He()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Cs() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ee,
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
function _n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = Es(e), i = Ls(e), s = Pt("parseNodeAttributes", {}, e);
  let o = t.styleParser ? ws(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ee,
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
  styles: As
} = te;
function Pa(e) {
  const t = h.autoReplaceSvg === "nest" ? _n(e, {
    styleParser: !1
  }) : _n(e);
  return ~t.extra.classes.indexOf(fa) ? ge("generateLayersText", e, t) : ge("generateSvgReplacementMutation", e, t);
}
let ne = /* @__PURE__ */ new Set();
la.map((e) => {
  ne.add("fa-".concat(e));
});
Object.keys(ye[I]).map(ne.add.bind(ne));
Object.keys(ye[X]).map(ne.add.bind(ne));
Object.keys(ye[V]).map(ne.add.bind(ne));
ne = [...ne];
function kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!oe) return Promise.resolve();
  const n = S.documentElement.classList, a = (d) => n.add("".concat(hn, "-").concat(d)), r = (d) => n.remove("".concat(hn, "-").concat(d)), i = h.autoFetchSvg ? ne : la.map((d) => "fa-".concat(d)).concat(Object.keys(As));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(fa, ":not([").concat(we, "])")].concat(i.map((d) => ".".concat(d, ":not([").concat(we, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = Me(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = Zt.begin("onTree"), c = o.reduce((d, x) => {
    try {
      const E = Pa(x);
      E && d.push(E);
    } catch (E) {
      oa || E.name === "MissingIcon" && console.error(E);
    }
    return d;
  }, []);
  return new Promise((d, x) => {
    Promise.all(c).then((E) => {
      _a(E, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), d();
      });
    }).catch((E) => {
      l(), x(E);
    });
  });
}
function _s(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pa(e).then((n) => {
    n && _a([n], t);
  });
}
function ks(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : St(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : St(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const Ps = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = ee,
    symbol: a = !1,
    mask: r = null,
    maskId: i = null,
    title: s = null,
    titleId: o = null,
    classes: l = [],
    attributes: c = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: x,
    iconName: E,
    icon: C
  } = e;
  return st({
    type: "icon",
    ...e
  }, () => (Ee("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), h.autoA11y && (s ? c["aria-labelledby"] = "".concat(h.replacementClass, "-title-").concat(o || He()) : (c["aria-hidden"] = "true", c.focusable = "false")), Kt({
    icons: {
      main: Ot(C),
      mask: r ? Ot(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: x,
    iconName: E,
    transform: {
      ...ee,
      ...n
    },
    symbol: a,
    title: s,
    maskId: i,
    titleId: o,
    extra: {
      attributes: c,
      styles: d,
      classes: l
    }
  })));
};
var Ss = {
  mixout() {
    return {
      icon: ks(Ps)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = kn, e.nodeCallback = _s, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = S,
        callback: a = () => {
        }
      } = t;
      return kn(n, a);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: a,
        title: r,
        titleId: i,
        prefix: s,
        transform: o,
        symbol: l,
        mask: c,
        maskId: d,
        extra: x
      } = n;
      return new Promise((E, C) => {
        Promise.all([Mt(a, s), c.iconName ? Mt(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((z) => {
          let [N, p] = z;
          E([t, Kt({
            icons: {
              main: N,
              mask: p
            },
            prefix: s,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: d,
            title: r,
            titleId: i,
            extra: x,
            watchable: !0
          })]);
        }).catch(C);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: i,
        styles: s
      } = t;
      const o = at(s);
      o.length > 0 && (a.style = o);
      let l;
      return Xt(i) && (l = ge("generateAbstractTransformGrouping", {
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
}, Os = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return st({
          type: "layer"
        }, () => {
          Ee("beforeDOMElementCreation", {
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
              class: ["".concat(h.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: a
          }];
        });
      }
    };
  }
}, Ms = {
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
        return st({
          type: "counter",
          content: e
        }, () => (Ee("beforeDOMElementCreation", {
          content: e,
          params: t
        }), fs({
          content: e.toString(),
          title: n,
          extra: {
            attributes: r,
            styles: i,
            classes: ["".concat(h.cssPrefix, "-layers-counter"), ...a]
          }
        })));
      }
    };
  }
}, Is = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = ee,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: s = {}
        } = t;
        return st({
          type: "text",
          content: e
        }, () => (Ee("beforeDOMElementCreation", {
          content: e,
          params: t
        }), wn({
          content: e,
          transform: {
            ...ee,
            ...n
          },
          title: a,
          extra: {
            attributes: i,
            styles: s,
            classes: ["".concat(h.cssPrefix, "-layers-text"), ...r]
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
      if (ta) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / l, o = c.height / l;
      }
      return h.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, wn({
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
const Ns = new RegExp('"', "ug"), Pn = [1105920, 1112319], Sn = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...pi,
  ...mi,
  ...Ei
}, Tt = Object.keys(Sn).reduce((e, t) => (e[t.toLowerCase()] = Sn[t], e), {}), Ts = Object.keys(Tt).reduce((e, t) => {
  const n = Tt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function zs(e) {
  const t = e.replace(Ns, ""), n = Xi(t, 0), a = n >= Pn[0] && n <= Pn[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: _t(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Ds(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (Tt[n] || {})[r] || Ts[n];
}
function On(e, t) {
  const n = "".concat(Ai).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const s = Me(e.children).filter((E) => E.getAttribute(Et) === t)[0], o = me.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), c = l.match(Oi), d = o.getPropertyValue("font-weight"), x = o.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), a();
    if (c && x !== "none" && x !== "") {
      const E = o.getPropertyValue("content");
      let C = Ds(l, d);
      const {
        value: z,
        isSecondary: N
      } = zs(E), p = c[0].startsWith("FontAwesome");
      let f = qt(C, z), u = f;
      if (p) {
        const w = Ji(z);
        w.iconName && w.prefix && (f = w.iconName, C = w.prefix);
      }
      if (f && !N && (!s || s.getAttribute($t) !== C || s.getAttribute(Ut) !== u)) {
        e.setAttribute(n, u), s && e.removeChild(s);
        const w = Cs(), {
          extra: A
        } = w;
        A.attributes[Et] = t, Mt(f, C).then((P) => {
          const D = Kt({
            ...w,
            icons: {
              main: P,
              mask: Gt()
            },
            prefix: C,
            iconName: u,
            extra: A,
            watchable: !0
          }), j = S.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(j, e.firstChild) : e.appendChild(j), j.outerHTML = D.map((J) => Ue(J)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Fs(e) {
  return Promise.all([On(e, "::before"), On(e, "::after")]);
}
function Rs(e) {
  return e.parentNode !== document.head && !~ki.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Et) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Mn(e) {
  if (oe)
    return new Promise((t, n) => {
      const a = Me(e.querySelectorAll("*")).filter(Rs).map(Fs), r = Zt.begin("searchPseudoElements");
      ka(), Promise.all(a).then(() => {
        r(), Nt(), t();
      }).catch(() => {
        r(), Nt(), n();
      });
    });
}
var js = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Mn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = S
      } = t;
      h.searchPseudoElements && Mn(n);
    };
  }
};
let In = !1;
var Hs = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ka(), In = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        An(Pt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        xs();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        In ? Nt() : An(Pt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Nn = (e) => {
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
var Ws = {
  mixout() {
    return {
      parse: {
        transform: (e) => Nn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Nn(n)), e;
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
      }, o = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), l = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(o, " ").concat(l, " ").concat(c)
      }, x = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, E = {
        outer: s,
        inner: d,
        path: x
      };
      return {
        tag: "g",
        attributes: {
          ...E.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...E.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...E.path
            }
          }]
        }]
      };
    };
  }
};
const gt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Tn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ys(e) {
  return e.tag === "g" ? e.children : [e];
}
var $s = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), a = n ? it(n.split(" ").map((r) => r.trim())) : Gt();
        return a.prefix || (a.prefix = pe()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        width: d,
        icon: x
      } = i, E = Hi({
        transform: o,
        containerWidth: d,
        iconWidth: l
      }), C = {
        tag: "rect",
        attributes: {
          ...gt,
          fill: "white"
        }
      }, z = c.children ? {
        children: c.children.map(Tn)
      } : {}, N = {
        tag: "g",
        attributes: {
          ...E.inner
        },
        children: [Tn({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...E.path
          },
          ...z
        })]
      }, p = {
        tag: "g",
        attributes: {
          ...E.outer
        },
        children: [N]
      }, f = "mask-".concat(s || He()), u = "clip-".concat(s || He()), w = {
        tag: "mask",
        attributes: {
          ...gt,
          id: f,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [C, p]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: u
          },
          children: Ys(x)
        }, w]
      };
      return n.push(A, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(u, ")"),
          mask: "url(#".concat(f, ")"),
          ...gt
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Us = {
  provides(e) {
    let t = !1;
    me.matchMedia && (t = me.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, Bs = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Xs = [$i, Ss, Os, Ms, Is, js, Hs, Ws, $s, Us, Bs];
as(Xs, {
  mixoutsTo: q
});
q.noAuto;
const Sa = q.config, Vs = q.library;
q.dom;
const Ze = q.parse;
q.findIconDefinition;
q.toHtml;
const qs = q.icon;
q.layer;
const Gs = q.text;
q.counter;
const Ks = {
  prefix: "fas",
  iconName: "fill-drip",
  icon: [576, 512, [], "f576", "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6l319.2 0 42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z"]
}, Zs = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Qs = {
  prefix: "fas",
  iconName: "strikethrough",
  icon: [512, 512, [], "f0cc", "M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-209.9 0-.4-.1-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3c0 0 0 0 0 0s0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6c0 0 0 0 0 0l.2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1l-75.7 0c7 5.6 11.4 11.2 13.9 17.2z"]
}, Js = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, eo = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, to = {
  prefix: "fas",
  iconName: "underline",
  icon: [448, 512, [], "f0cd", "M16 64c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 53 43 96 96 96s96-43 96-96l0-128-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 128c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 96 48 96C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32z"]
}, no = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, ao = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, ro = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, io = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, so = {
  prefix: "fas",
  iconName: "italic",
  icon: [384, 512, [], "f033", "M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0L160 416l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0L224 96l-64 0c-17.7 0-32-14.3-32-32z"]
}, oo = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, lo = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, co = {
  prefix: "fas",
  iconName: "arrow-rotate-right",
  icon: [512, 512, [8635, "arrow-right-rotate", "arrow-rotate-forward", "redo"], "f01e", "M386.3 160L336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]
}, fo = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, uo = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, mo = {
  prefix: "fas",
  iconName: "arrow-rotate-left",
  icon: [512, 512, [8634, "arrow-left-rotate", "arrow-rotate-back", "arrow-rotate-backward", "undo"], "f0e2", "M125.7 160l50.3 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 224c-17.7 0-32-14.3-32-32L16 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]
}, po = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, go = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, ho = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, vo = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, yo = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, bo = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, xo = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, wo = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Eo = {
  prefix: "fas",
  iconName: "border-all",
  icon: [448, 512, [], "f84c", "M384 96l0 128-128 0 0-128 128 0zm0 192l0 128-128 0 0-128 128 0zM192 224L64 224 64 96l128 0 0 128zM64 288l128 0 0 128L64 416l0-128zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
function zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(n), !0).forEach(function(a) {
      $(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Lo(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Co(e) {
  var t = Lo(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qe(e) {
  "@babel/helpers - typeof";
  return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qe(e);
}
function $(e, t, n) {
  return t = Co(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ao(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      n[a] = e[a];
    }
  return n;
}
function _o(e, t) {
  if (e == null) return {};
  var n = Ao(e, t), a, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      a = i[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function zt(e) {
  return ko(e) || Po(e) || So(e) || Oo();
}
function ko(e) {
  if (Array.isArray(e)) return Dt(e);
}
function Po(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function So(e, t) {
  if (e) {
    if (typeof e == "string") return Dt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dt(e, t);
  }
}
function Dt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Oo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Oa = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(f, u, w) {
      if (!c(u) || x(u) || E(u) || C(u) || l(u))
        return u;
      var A, P = 0, D = 0;
      if (d(u))
        for (A = [], D = u.length; P < D; P++)
          A.push(n(f, u[P], w));
      else {
        A = {};
        for (var j in u)
          Object.prototype.hasOwnProperty.call(u, j) && (A[f(j, w)] = n(f, u[j], w));
      }
      return A;
    }, a = function(f, u) {
      u = u || {};
      var w = u.separator || "_", A = u.split || /(?=[A-Z])/;
      return f.split(A).join(w);
    }, r = function(f) {
      return z(f) ? f : (f = f.replace(/[\-_\s]+(.)?/g, function(u, w) {
        return w ? w.toUpperCase() : "";
      }), f.substr(0, 1).toLowerCase() + f.substr(1));
    }, i = function(f) {
      var u = r(f);
      return u.substr(0, 1).toUpperCase() + u.substr(1);
    }, s = function(f, u) {
      return a(f, u).toLowerCase();
    }, o = Object.prototype.toString, l = function(f) {
      return typeof f == "function";
    }, c = function(f) {
      return f === Object(f);
    }, d = function(f) {
      return o.call(f) == "[object Array]";
    }, x = function(f) {
      return o.call(f) == "[object Date]";
    }, E = function(f) {
      return o.call(f) == "[object RegExp]";
    }, C = function(f) {
      return o.call(f) == "[object Boolean]";
    }, z = function(f) {
      return f = f - 0, f === f;
    }, N = function(f, u) {
      var w = u && "process" in u ? u.process : u;
      return typeof w != "function" ? f : function(A, P) {
        return w(A, f, P);
      };
    }, p = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(f, u) {
        return n(N(r, u), f);
      },
      decamelizeKeys: function(f, u) {
        return n(N(s, u), f, u);
      },
      pascalizeKeys: function(f, u) {
        return n(N(i, u), f);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = p : t.humps = p;
  })(Mo);
})(Oa);
var Io = Oa.exports, No = ["class", "style"];
function To(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = Io.camelize(n.slice(0, a)), i = n.slice(a + 1).trim();
    return t[r] = i, t;
  }, {});
}
function zo(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return Jt(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var d = e.attributes[c];
    switch (c) {
      case "class":
        l.class = zo(d);
        break;
      case "style":
        l.style = To(d);
        break;
      default:
        l.attrs[c] = d;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, s = i === void 0 ? {} : i, o = _o(n, No);
  return Hn(e.tag, K(K(K({}, t), {}, {
    class: r.class,
    style: K(K({}, r.style), s)
  }, r.attrs), o), a);
}
var Ma = !1;
try {
  Ma = process.env.NODE_ENV === "production";
} catch {
}
function Do() {
  if (!Ma && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function De(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? $({}, e, t) : {};
}
function Fo(e) {
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
  }, $($($($($($($($($($(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), $($(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Dn(e) {
  if (e && Qe(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ze.icon)
    return Ze.icon(e);
  if (e === null)
    return null;
  if (Qe(e) === "object" && e.prefix && e.iconName)
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
var Ro = he({
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
    var a = n.attrs, r = B(function() {
      return Dn(t.icon);
    }), i = B(function() {
      return De("classes", Fo(t));
    }), s = B(function() {
      return De("transform", typeof t.transform == "string" ? Ze.transform(t.transform) : t.transform);
    }), o = B(function() {
      return De("mask", Dn(t.mask));
    }), l = B(function() {
      return qs(r.value, K(K(K(K({}, i.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    vt(l, function(d) {
      if (!d)
        return Do("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var c = B(function() {
      return l.value ? Jt(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
he({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = Sa.familyPrefix, i = B(function() {
      return ["".concat(r, "-layers")].concat(zt(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Hn("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
he({
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
    var a = n.attrs, r = Sa.familyPrefix, i = B(function() {
      return De("classes", [].concat(zt(t.counter ? ["".concat(r, "-layers-counter")] : []), zt(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), s = B(function() {
      return De("transform", typeof t.transform == "string" ? Ze.transform(t.transform) : t.transform);
    }), o = B(function() {
      var c = Gs(t.value.toString(), K(K({}, s.value), i.value)), d = c.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), l = B(function() {
      return Jt(o.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
Vs.add(
  wo,
  mo,
  co,
  go,
  ro,
  Zs,
  uo,
  oo,
  xo,
  Eo,
  Ks,
  bo,
  po,
  Js,
  ao,
  io,
  vo,
  fo,
  yo,
  so,
  Qs,
  to,
  ho,
  lo,
  eo,
  no
);
const Bo = {
  install: (e) => {
    e.component("simplisiti-component-editor", oi), e.component("fa-icon", Ro);
  }
};
export {
  Ho as H,
  Wn as a,
  Wo as d,
  Yo as e,
  Bo as m,
  ir as n,
  $o as p,
  Uo as r
};
