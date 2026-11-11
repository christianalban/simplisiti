import { ref as z, defineComponent as ye, shallowReactive as Na, onMounted as Rt, resolveComponent as et, openBlock as j, createElementBlock as V, createElementVNode as I, Fragment as tn, renderList as nn, unref as fe, normalizeClass as tt, createVNode as me, withDirectives as Ta, createBlock as nt, resolveDynamicComponent as Rn, vShow as za, defineAsyncComponent as jn, withModifiers as Hn, toDisplayString as yt, createCommentVNode as xe, computed as X, nextTick as an, onUnmounted as Da, watch as vt, onBeforeUnmount as Fa, normalizeStyle as Ra, h as Wn } from "vue";
const Yn = {
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
}, $n = [
  ...Object.keys(Yn)
], Ha = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-IWg6jMIy.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-BEcrqMs4.js")
  },
  background: {
    title: "Color de fondo",
    icon: "fill-drip",
    component: () => import("./Background-CKNfB4RW.js")
  },
  "border-radius": {
    title: "Redondeado",
    icon: "border-all",
    component: () => import("./BorderRadius-CmFsuOID.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-D0LRRWho.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-CyAo-M6j.js")
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
class Ye {
  create() {
    return this.createElement();
  }
}
class $a extends Ye {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class Ba extends Ye {
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
class Ua extends Ye {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class Xa extends Ye {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class Va extends Ye {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const qa = (e) => {
  if (e === "div")
    return new Ba();
  if (e === "a")
    return new $a();
  if (e === "p")
    return new Ua();
  if (e === "h1")
    return new Xa();
  if (e === "img")
    return new Va();
  throw new Error("Invalid type");
}, $e = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, Ga = (e) => {
  $e("elementRemoved", { simplisitiId: e });
}, Bn = (e, t) => {
  $e("contentChange", { simplisitiId: e, content: t });
}, Ka = (e, t) => {
  $e("classChange", { simplisitiId: e, spClassList: t });
}, Za = (e, t) => {
  $e("styleChange", { simplisitiId: e, spStyleList: t });
}, Qa = (e, t) => {
  $e("attributeChange", { simplisitiId: e, attribute: t });
}, Ja = /^&(?:amp|lt|gt|quot|apos|#39|#039);/, er = (e) => !!(e && /[A-Za-z0-9_]/.test(e)), rn = (e, t, n, a) => {
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
    } else e.startsWith("{!!", n) ? a = rn(e, n, 3, "!!}") : e.startsWith("{{", n) ? a = rn(e, n, 2, "}}") : e[n] === "@" && (a = tr(e, n));
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
let P = null, H = null, ue = null, Ve = {
  node: null,
  dragged: !1
}, d = null;
const J = z(!1), ie = z(!1), Pe = z(!1), U = z(null), Me = z(null), Un = "simplisiti-component-preview", bt = "sp-element__placeholder", Xn = 32, lt = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), jt = [
  "sp-element__selected",
  "sp-element__hover",
  "sp-element__dragging",
  "sp-element__drop-target"
], Ht = $n.join(","), ee = (e) => e instanceof HTMLElement && $n.includes(e.tagName.toLowerCase()), Vn = (e, t) => e === t && e.dataset.simplisitiid === Un, Wt = (e) => (e == null ? void 0 : e.classList.contains(bt)) ?? !1, Yt = (e, t) => e === t || t.contains(e), Re = (e, t) => {
  !e || !ee(e) || (e.classList.remove("sp-element__selected", "sp-element__hover"), t === "selected" ? e.classList.add("sp-element__selected") : t === "hover" && e.classList.add("sp-element__hover"));
}, re = (e, t) => {
  if (!(e instanceof Element))
    return null;
  const n = e.closest(Ht);
  return !n || !Yt(n, t) || Vn(n, t) || Wt(n) ? null : ee(n) ? n : null;
}, ct = (e, t) => {
  var a;
  if (!(e instanceof Element))
    return null;
  let n = e.closest("div");
  return n && Wt(n) && (n = ((a = n.parentElement) == null ? void 0 : a.closest("div")) ?? null), !n || !Yt(n, t) ? null : ee(n) ? n : null;
}, sr = (e) => {
  const t = e.ownerDocument;
  return e === t.scrollingElement || e === t.documentElement || e === t.body;
}, on = (e, t) => {
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
}, ln = (e, t, n) => e.deltaMode === WheelEvent.DOM_DELTA_LINE ? t * 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? t * (n.clientHeight || n.ownerDocument.documentElement.clientHeight) : t, lr = (e, t) => {
  let n = ln(e, e.deltaX, t), a = ln(e, e.deltaY, t), r = !1;
  for (const i of or(e.target, t)) {
    const s = i.scrollLeft, o = i.scrollTop, l = Math.max(0, i.scrollWidth - i.clientWidth), c = Math.max(0, i.scrollHeight - i.clientHeight);
    on(i, "x") && n !== 0 && (i.scrollLeft = Math.min(l, Math.max(0, s + n))), on(i, "y") && a !== 0 && (i.scrollTop = Math.min(c, Math.max(0, o + a)));
    const u = i.scrollLeft - s, E = i.scrollTop - o;
    if ((u !== 0 || E !== 0) && (r = !0), n -= u, a -= E, n === 0 && a === 0)
      break;
  }
  return r;
}, qn = () => {
  ue == null || ue.classList.remove("sp-element__drop-target"), ue = null;
}, je = () => {
  P == null || P.remove(), P = null, qn();
}, cr = (e) => {
  const t = jt.join("|");
  return e.replace(new RegExp(`\\b(?:${t})\\b`, "g"), "");
}, cn = (e) => {
  const t = e == null ? void 0 : e.dataset.simplisitiid;
  if (e && t) {
    const n = cr(e.innerHTML);
    Bn(t, ir(n));
  }
}, at = (e) => Array.from(e.children).filter(
  (t) => t !== P && t !== H
), fr = (e) => {
  let t = 0;
  for (const n of Array.from(e.children)) {
    if (n === P)
      return t;
    n !== H && (t += 1);
  }
  return -1;
}, ur = (e, t, n) => {
  const r = at(e)[n] ?? null;
  r ? e.insertBefore(t, r) : e.appendChild(t);
}, dr = (e, t, n, a) => {
  if ((n == null ? void 0 : n.parentNode) === e) {
    e.insertBefore(t, n);
    return;
  }
  ur(e, t, a);
}, mr = (e) => {
  var a;
  const t = sn.get(e);
  if (t)
    return t;
  const n = e.createElement("canvas");
  return n.width = 1, n.height = 1, n.style.position = "fixed", n.style.left = "-10000px", n.style.top = "-10000px", n.style.pointerEvents = "none", (a = n.getContext("2d")) == null || a.clearRect(0, 0, 1, 1), e.body.appendChild(n), sn.set(e, n), n;
}, Gn = (e, t) => {
  var n;
  (n = e.dataTransfer) == null || n.setDragImage(mr(t), 0, 0);
}, pr = (e) => {
  const t = Me.value, n = e.ownerDocument.defaultView;
  if (!t || !n)
    return 0;
  const a = n.getComputedStyle(t), r = n.getComputedStyle(e), i = parseFloat(r.paddingLeft || "0") + parseFloat(r.paddingRight || "0"), s = Math.max(e.clientWidth - i, 32), l = (/* @__PURE__ */ new Set(["block", "flex", "grid", "table", "list-item"])).has(a.display), c = t.cloneNode(!0);
  c.classList.remove(...jt), c.removeAttribute("data-simplisitiid"), c.removeAttribute("draggable"), c.style.position = "absolute", c.style.left = "-100000px", c.style.top = "-100000px", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = l ? `${s}px` : "max-content", c.style.maxWidth = "none", c.style.height = "auto", c.style.minHeight = "0", c.style.margin = "0", e.appendChild(c);
  const u = Math.ceil(c.getBoundingClientRect().width);
  return c.remove(), u > 0 ? u : l ? s : t instanceof HTMLImageElement ? t.width || 150 : 64;
}, gr = (e) => {
  !d || d.type !== "add" || (d.placeholderWidth = pr(e), d.placeholderHeight = Xn, P && (P.style.width = `${d.placeholderWidth}px`, P.style.height = `${d.placeholderHeight}px`));
}, Kn = (e) => P || (P = e.ownerDocument.createElement("div"), P.id = bt, P.classList.add(bt), (d == null ? void 0 : d.type) === "add" && P.classList.add("sp-element__placeholder--new"), P), Zn = () => {
  (d == null ? void 0 : d.frameId) !== null && (d == null ? void 0 : d.frameId) !== void 0 && (cancelAnimationFrame(d.frameId), d.frameId = null), d && (d.pendingPosition = null);
}, hr = (e, t) => {
  !t || !e || (e.originalStyle === null ? t.removeAttribute("style") : t.setAttribute("style", e.originalStyle));
}, Ce = (e = !0) => {
  const t = d, n = H;
  Zn(), n && (n.classList.remove("sp-element__dragging"), hr(t, n)), e && (t == null ? void 0 : t.type) === "move" && t.sourceContainer && n && !n.isConnected ? (je(), dr(
    t.sourceContainer,
    n,
    t.sourceNextSibling,
    t.sourceIndex
  )) : je(), H = null, d = null, Me.value = null, J.value = !1, ie.value = !1;
}, yr = (e) => {
  e.preventDefault(), e.stopPropagation(), d ? Ce() : P && je();
}, ft = () => {
  Ve = {
    node: null,
    dragged: !1
  };
}, vr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover").forEach((t) => {
    Re(t, null);
  });
}, br = (e, t) => {
  if (e.type !== "click" || !ee(t) || J.value || ie.value) {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  const n = U.value, a = t.closest(`[data-simplisitiid="${Un}"]`);
  a ? vr(a) : Re(n, null), U.value = t, Re(t, "selected"), Pe.value = !0, e.preventDefault(), e.stopPropagation();
}, xr = (e, t) => {
  !ee(t) || t === U.value || Re(t, "hover");
}, fn = (e, t) => {
  ee(t) && t !== U.value && Re(t, null);
}, wr = (e, t) => {
  const n = ee(t) ? t : null, a = Me.value ?? H, r = d;
  if (e.preventDefault(), e.stopPropagation(), !n || !a || !r) {
    Ce();
    return;
  }
  const i = (P == null ? void 0 : P.parentElement) ?? n, s = r.pendingPosition, o = !r.lastPointer || r.lastPointer.clientX !== e.clientX || r.lastPointer.clientY !== e.clientY;
  Zn(), s ? xt(s) : (o || !(P != null && P.parentNode)) && xt({
    container: n,
    clientX: e.clientX,
    clientY: e.clientY
  });
  const l = r.sourceContainer;
  P != null && P.parentNode ? P.replaceWith(a) : n.appendChild(a), a.innerHTML.startsWith("-empty-") && (a.innerHTML = a.innerHTML.replace("-empty-", "")), a.setAttribute("draggable", "true"), Ce(!1), l && l !== i && cn(l), cn(i);
}, Wo = () => {
  if ((d == null ? void 0 : d.type) === "add") {
    Ce();
    return;
  }
  J.value = !1, Me.value = null, ie.value || je();
}, xt = (e) => {
  const { container: t, clientX: n, clientY: a } = e;
  gr(t);
  const r = Kn(t);
  d != null && d.placeholderWidth && (r.style.width = `${d.placeholderWidth}px`), d != null && d.placeholderHeight && (r.style.height = `${d.placeholderHeight}px`);
  const i = at(t), s = _r(n, a, t), o = i[s] ?? null, l = fr(t);
  r.parentElement === t && (d == null ? void 0 : d.targetContainer) === t && d.targetIndex === s && l === s || (o ? t.insertBefore(r, o) : t.appendChild(r)), d && (d.targetContainer = t, d.targetIndex = s);
}, Er = (e, t) => {
  if (!d)
    return !1;
  const n = !d.lastPointer || d.lastPointer.clientX !== e.clientX || d.lastPointer.clientY !== e.clientY;
  return d.lastPointer = {
    clientX: e.clientX,
    clientY: e.clientY
  }, n ? (d.pendingPosition = {
    container: t,
    clientX: e.clientX,
    clientY: e.clientY
  }, d.frameId !== null || (d.frameId = requestAnimationFrame(() => {
    if (!(d != null && d.pendingPosition)) {
      d && (d.frameId = null);
      return;
    }
    const a = d.pendingPosition;
    d.pendingPosition = null, d.frameId = null, xt(a);
  })), !0) : !1;
}, Qn = (e) => {
  ue !== e && (qn(), ue = e, ue.classList.add("sp-element__drop-target"));
}, Cr = (e, t) => {
  !J.value && !ie.value || !ee(t) || !d || (e.preventDefault(), e.stopPropagation(), Qn(t));
}, Lr = (e, t) => {
  !J.value && !ie.value || !ee(t) || !d || (e.preventDefault(), e.stopPropagation(), Er(e, t) && Qn(t));
}, Ar = (e, t) => {
  var s;
  if (!ee(t) || J.value || Pe.value || d)
    return;
  const n = t.parentElement;
  if (!n)
    return;
  const a = at(n).indexOf(t), r = t.getBoundingClientRect();
  H = t, d = {
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
  }, ie.value = !0, H.classList.add("sp-element__dragging"), H.style.position = "fixed", H.style.left = "-100000px", H.style.top = "-100000px", H.style.width = `${r.width}px`, H.style.height = `${r.height}px`, H.style.visibility = "hidden", H.style.pointerEvents = "none";
  const i = Kn(n);
  i.style.width = `${r.width}px`, i.style.height = `${r.height}px`, n.insertBefore(i, t), (s = e.dataTransfer) == null || s.setData("text/plain", H.dataset.simplisitiid || H.tagName), e.dataTransfer && (e.dataTransfer.effectAllowed = "move", Gn(e, t.ownerDocument));
}, Yo = (e, t) => {
  var a;
  d && Ce(), J.value = !0;
  const n = qa(e);
  if (Me.value = n.create(), d = {
    type: "add",
    sourceContainer: null,
    sourceIndex: -1,
    sourceNextSibling: null,
    targetContainer: null,
    targetIndex: -1,
    placeholderWidth: 0,
    placeholderHeight: Xn,
    originalStyle: null,
    pendingPosition: null,
    frameId: null,
    lastPointer: null
  }, (a = t == null ? void 0 : t.dataTransfer) == null || a.setData("text/plain", `new:${e}`), t != null && t.dataTransfer) {
    t.dataTransfer.effectAllowed = "copy";
    const r = t.currentTarget instanceof HTMLElement ? t.currentTarget.ownerDocument : document;
    Gn(t, r);
  }
}, _r = (e, t, n) => {
  var s;
  const a = at(n), r = (s = n.ownerDocument.defaultView) == null ? void 0 : s.getComputedStyle(n), i = n.classList.contains("sp-style__layout-flex-direction__row") || (r == null ? void 0 : r.flexDirection) === "row" || (r == null ? void 0 : r.flexDirection) === "row-reverse";
  for (let o = 0; o < a.length; o++) {
    const l = a[o].getBoundingClientRect(), c = i ? l.left + l.width / 2 : l.top + l.height / 2;
    if ((i ? e : t) < c)
      return o;
  }
  return a.length;
}, un = (e) => {
  ee(e) && !Vn(e, e) && e.setAttribute("draggable", "true"), e.querySelectorAll(Ht).forEach((t) => {
    Wt(t) || t.setAttribute("draggable", "true");
  });
}, kr = (e) => {
  e.querySelectorAll(".sp-element__selected, .sp-element__hover, .sp-element__dragging, .sp-element__drop-target").forEach((t) => {
    t.classList.remove(...jt);
  }), Ce(!1), e.querySelectorAll(Ht).forEach((t) => {
    t.removeAttribute("draggable");
  }), je(), U.value && Yt(U.value, e) && (U.value = null, Pe.value = !1), ue = null, Me.value = null, J.value = !1, ie.value = !1;
}, Pr = (e) => {
  const t = lt.get(e);
  if (t)
    return t;
  e.dataset.simplisitiInteractionLayer = "true", un(e);
  const n = (m) => {
    const f = re(m.target, e), p = re(m.relatedTarget, e);
    f && f !== p && xr(m, f), p && p !== f && fn(m, p);
  }, a = (m) => {
    const f = re(m.target, e), p = re(m.relatedTarget, e);
    f && f !== p && fn(m, f);
  }, r = (m) => {
    Ve = {
      node: re(m.target, e),
      dragged: !1
    };
  }, i = (m) => {
    const f = re(m.target, e);
    if (Ve.dragged || d || ie.value) {
      m.preventDefault(), m.stopPropagation(), ft();
      return;
    }
    f && br(m, f), ft();
  }, s = (m) => {
    re(m.target, e) && (m.preventDefault(), m.stopPropagation());
  }, o = (m) => {
    re(m.target, e) && (m.key === "Enter" || m.key === " ") && (m.preventDefault(), m.stopPropagation());
  }, l = (m) => {
    const f = re(m.target, e);
    if (f) {
      if (Ve = {
        node: f,
        dragged: !0
      }, Pe.value) {
        yr(m);
        return;
      }
      Ar(m, f);
    }
  }, c = (m) => {
    const f = ct(m.target, e);
    f && Lr(m, f);
  }, u = (m) => {
    const f = ct(m.target, e);
    f && Cr(m, f);
  }, E = (m) => {
    const f = ct(m.target, e);
    f && wr(m, f);
  }, b = () => {
    ie.value && Ce();
  }, k = (m) => {
    d && lr(m, e) && m.cancelable && m.preventDefault();
  }, D = new MutationObserver(() => un(e));
  e.addEventListener("pointerover", n), e.addEventListener("pointerout", a), e.addEventListener("pointerdown", r), e.addEventListener("click", i), e.addEventListener("contextmenu", s), e.addEventListener("dblclick", s), e.addEventListener("auxclick", s), e.addEventListener("selectstart", s), e.addEventListener("keydown", o), e.addEventListener("dragstart", l), e.addEventListener("dragenter", u), e.addEventListener("dragover", c), e.addEventListener("drop", E), e.addEventListener("dragend", b), e.ownerDocument.addEventListener("wheel", k, { capture: !0, passive: !1 }), D.observe(e, { childList: !0, subtree: !0 });
  const N = () => {
    e.removeEventListener("pointerover", n), e.removeEventListener("pointerout", a), e.removeEventListener("pointerdown", r), e.removeEventListener("click", i), e.removeEventListener("contextmenu", s), e.removeEventListener("dblclick", s), e.removeEventListener("auxclick", s), e.removeEventListener("selectstart", s), e.removeEventListener("keydown", o), e.removeEventListener("dragstart", l), e.removeEventListener("dragenter", u), e.removeEventListener("dragover", c), e.removeEventListener("drop", E), e.removeEventListener("dragend", b), e.ownerDocument.removeEventListener("wheel", k, !0), D.disconnect(), kr(e), ft(), delete e.dataset.simplisitiInteractionLayer, lt.delete(e);
  };
  return lt.set(e, N), N;
}, Sr = (e) => {
  const t = ja[e];
  return Wa[t].map((a) => ({
    tab: a,
    ...Ha[a]
  }));
}, $o = (e, t) => t.find((n) => n.startsWith(e)), ut = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, Bo = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), a = parseInt(t[1]), r = parseInt(t[2]);
  return "#" + ut(n) + ut(a) + ut(r);
}, Or = '[data-simplisitiid="simplisiti-component-preview"]', wt = (e = document) => e.querySelector(Or), Mr = (e = document, t = 5e3) => {
  const n = wt(e);
  return n ? Promise.resolve(n) : new Promise((a, r) => {
    const i = e.body ?? e.documentElement, s = new MutationObserver(() => {
      const l = wt(e);
      l && (window.clearTimeout(o), s.disconnect(), a(l));
    }), o = window.setTimeout(() => {
      s.disconnect(), r(new Error("The component preview was not found in the editor iframe."));
    }, t);
    s.observe(i, { childList: !0, subtree: !0 });
  });
}, Ir = (e) => Pr(e), Nr = { class: "w-[215px]" }, Tr = { class: "flex" }, zr = ["title", "onClick"], Dr = { class: "editor-icon-wrapper" }, Fr = { class: "pt-2" }, Rr = /* @__PURE__ */ ye({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    },
    dispatchChanges: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "tabChange",
    "classChange",
    "styleChange",
    "contentChange",
    "attributeChange"
  ],
  setup(e, { emit: t }) {
    const { element: n, dispatchChanges: a } = e, r = z([]), i = z({}), s = Na([]), o = z(void 0), l = t, c = () => {
      for (const h of Sr(n.tagName.toLowerCase()))
        s.push({
          component: jn(h.component),
          icon: h.icon,
          title: h.title,
          tab: h.tab,
          spClassList: r.value,
          spStyleList: i.value,
          spContent: {
            content: "",
            type: "text"
          },
          spAttribute: {
            content: "",
            type: "src"
          }
        });
    }, u = (h) => {
      o.value = h, l("tabChange", h.tab);
    }, E = () => {
      s.length > 0 && u(s[0]);
    }, b = (h) => {
      var L;
      return ((L = o.value) == null ? void 0 : L.tab) === h.tab;
    }, k = () => {
      Array.from(n.classList).filter((h) => h.startsWith("sp-style__")).forEach((h) => n.classList.remove(h));
    }, D = (h) => {
      h.forEach((L) => n.classList.add(L));
    }, N = (h) => new Promise((L) => {
      for (const F in h)
        n.style.setProperty(F, h[F]);
      L();
    }), m = (h) => new Promise((L) => {
      n.innerHTML = h.content, L();
    }), f = (h) => new Promise((L) => {
      n.setAttribute(h.type, h.content), L();
    }), p = (h, L) => {
      L != null && L.spClassList && (L.spClassList = h);
      const F = s.flatMap((x) => x.spClassList);
      if (r.value = F, k(), D(F), n.dataset.simplisitiid) {
        const x = {
          simplisitiId: n.dataset.simplisitiid,
          spClassList: F
        };
        a ? Ka(x.simplisitiId, x.spClassList) : l("classChange", x);
      }
    }, A = (h) => {
      var F;
      (F = o.value) != null && F.spStyleList && (o.value.spStyleList = h);
      const L = s.reduce((x, Y) => ({ ...x, ...Y.spStyleList, ...h }), {});
      i.value = L, N(L).then(() => {
        if (n.dataset.simplisitiid) {
          const x = {
            simplisitiId: n.dataset.simplisitiid,
            spStyleList: L
          };
          a ? Za(x.simplisitiId, x.spStyleList) : l("styleChange", x);
        }
      });
    }, C = (h) => {
      var L;
      (L = o.value) != null && L.spContent && (o.value.spContent = h), m(h).then(() => {
        n.dataset.simplisitiid && h.type === "text" && (a ? Bn(n.dataset.simplisitiid, h.content) : l("contentChange", {
          simplisitiId: n.dataset.simplisitiid,
          content: h.content
        }));
      });
    }, w = (h) => {
      var L;
      (L = o.value) != null && L.spAttribute && (o.value.spAttribute = h), f(h).then(() => {
        n.dataset.simplisitiid && (a ? Qa(n.dataset.simplisitiid, h) : l("attributeChange", {
          simplisitiId: n.dataset.simplisitiid,
          attribute: h
        }));
      });
    }, W = () => {
      r.value = Array.from(n.classList).filter((h) => h.startsWith("sp-style__"));
    }, O = () => {
      i.value = {};
      for (const h of Ya) {
        const L = n.style.getPropertyValue(h);
        L !== "" && (i.value[h] = L);
      }
    };
    return Rt(() => {
      W(), O(), c(), E();
    }), (h, L) => {
      const F = et("fa-icon");
      return j(), V("div", Nr, [
        I("div", Tr, [
          (j(!0), V(tn, null, nn(fe(s), (x) => (j(), V("div", {
            key: x.tab
          }, [
            I("button", {
              type: "button",
              class: tt([
                "wizard-icon-button cursor-pointer border-0 bg-gray-100 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                { "wizard-icon-button--selected": b(x) }
              ]),
              title: x.title,
              onClick: (Y) => u(x)
            }, [
              I("div", Dr, [
                me(F, {
                  icon: x.icon
                }, null, 8, ["icon"])
              ])
            ], 10, zr)
          ]))), 128))
        ]),
        I("div", Fr, [
          (j(!0), V(tn, null, nn(fe(s), (x) => (j(), V("div", null, [
            Ta(I("div", null, [
              (j(), nt(Rn(x == null ? void 0 : x.component), {
                "sp-class-list": x == null ? void 0 : x.spClassList,
                "onUpdate:spClassList": (Y) => p(Y, x),
                "sp-style-list": x == null ? void 0 : x.spStyleList,
                "onUpdate:spStyleList": A,
                element: e.element,
                "onUpdate:spContent": C,
                "onUpdate:spAttribute": w
              }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
            ], 512), [
              [za, b(x)]
            ])
          ]))), 256))
        ])
      ]);
    };
  }
}), jr = { class: "w-full max-w-sm rounded-lg bg-white p-4 shadow-xl ring-1 ring-black/10" }, Hr = { class: "m-0 text-base font-semibold text-gray-900" }, Wr = { class: "mt-2 text-sm text-gray-600" }, Yr = { class: "mt-4 flex justify-end gap-2" }, $r = /* @__PURE__ */ ye({
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
    return (a, r) => e.show ? (j(), V("div", {
      key: 0,
      class: "fixed inset-0 z-[1100] flex items-center justify-center bg-gray-900/40 p-4",
      role: "dialog",
      "aria-modal": "true",
      onClick: r[2] || (r[2] = Hn((i) => n("cancel"), ["self"]))
    }, [
      I("div", jr, [
        I("h3", Hr, yt(e.title), 1),
        I("p", Wr, yt(e.message), 1),
        I("div", Yr, [
          I("button", {
            type: "button",
            class: "rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
            onClick: r[0] || (r[0] = (i) => n("cancel"))
          }, " Cancelar "),
          I("button", {
            type: "button",
            class: "rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1",
            onClick: r[1] || (r[1] = (i) => n("confirm"))
          }, " Eliminar ")
        ])
      ])
    ])) : xe("", !0);
  }
}), Br = { class: "flex items-center gap-2 border-b border-gray-200 py-1.5" }, Ur = { class: "m-0 text-sm font-semibold text-gray-800" }, Xr = { class: "editor-icon-wrapper" }, Vr = { class: "editor-icon-wrapper" }, qr = { class: "pt-2" }, Gr = /* @__PURE__ */ ye({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    },
    showDeleteButton: {
      type: Boolean,
      default: !0
    },
    dispatchChanges: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "close",
    "classChange",
    "styleChange",
    "contentChange",
    "attributeChange"
  ],
  setup(e, { emit: t }) {
    const { element: n, showDeleteButton: a, dispatchChanges: r } = e, i = z(null), s = z(!1), o = z(!1);
    let l = null, c = null;
    const u = t, E = (C) => {
      if (!C || !i.value)
        return;
      const w = document.documentElement, W = w.clientWidth || window.innerWidth, O = w.clientHeight || window.innerHeight, h = C.getBoundingClientRect(), L = i.value.offsetWidth, F = i.value.offsetHeight, x = 10, Y = 10, v = Math.max(x, W - L - x), y = Math.max(x, O - F - x), _ = h.right + Y + L <= W - x, T = h.left - Y - L >= x;
      let $ = _ ? h.right + Y : T ? h.left - L - Y : h.right + Y, Z = h.top;
      if (Z + F > O - x) {
        const ve = h.top - F - Y;
        Z = ve >= x ? ve : y;
      }
      if (Z < x) {
        const ve = h.bottom + Y;
        Z = ve + F <= O - x ? ve : x;
      }
      i.value.style.top = `${Math.min(Math.max(Z, x), y)}px`, i.value.style.left = `${Math.min(Math.max($, x), v)}px`;
    }, b = (C = n) => {
      l !== null && cancelAnimationFrame(l), l = requestAnimationFrame(() => {
        l = null, E(C);
      });
    }, k = X(() => {
      var w;
      const C = (w = n == null ? void 0 : n.tagName) == null ? void 0 : w.toLowerCase();
      return C && Yn[C] || "Element";
    }), D = (C) => {
      setTimeout(() => {
        u("close", C), s.value = !0;
      }, 300);
    }, N = () => {
      o.value = !0;
    }, m = () => {
      o.value = !1;
    }, f = () => {
      n && (n.remove(), n.dataset.simplisitiid && Ga(n.dataset.simplisitiid), o.value = !1, s.value = !0, u("close"));
    }, p = () => {
      an(() => b(n));
    }, A = () => {
      b(n);
    };
    return Rt(() => {
      var C, w;
      document.addEventListener("scroll", A, !0), window.addEventListener("resize", A), (C = window.visualViewport) == null || C.addEventListener("resize", A), (w = window.visualViewport) == null || w.addEventListener("scroll", A), c = new ResizeObserver(() => b(n)), i.value && c.observe(i.value), n && c.observe(n), an(() => b(n));
    }), Da(() => {
      var C, w;
      document.removeEventListener("scroll", A, !0), window.removeEventListener("resize", A), (C = window.visualViewport) == null || C.removeEventListener("resize", A), (w = window.visualViewport) == null || w.removeEventListener("scroll", A), c == null || c.disconnect(), c = null, l !== null && (cancelAnimationFrame(l), l = null);
    }), (C, w) => {
      const W = et("fa-icon");
      return j(), V("div", {
        class: tt([
          "fixed z-[1000] max-h-[calc(100vh-20px)] max-w-[calc(100vw-20px)] overflow-auto rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in",
          { "animate-editor-fade-out": s.value }
        ]),
        ref_key: "popup",
        ref: i,
        onClick: w[4] || (w[4] = Hn(() => {
        }, ["stop"]))
      }, [
        I("div", Br, [
          I("h4", Ur, yt(k.value), 1),
          e.showDeleteButton ? (j(), V("button", {
            key: 0,
            type: "button",
            class: "ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            "aria-label": "Eliminar elemento",
            title: "Eliminar elemento",
            onClick: N
          }, [
            I("div", Xr, [
              me(W, { icon: "trash" })
            ])
          ])) : xe("", !0),
          I("button", {
            type: "button",
            class: "cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
            onClick: D
          }, [
            I("div", Vr, [
              me(W, { icon: "xmark" })
            ])
          ])
        ]),
        I("div", qr, [
          e.element ? (j(), nt(Rr, {
            key: 0,
            element: e.element,
            "dispatch-changes": e.dispatchChanges,
            onTabChange: p,
            onClassChange: w[0] || (w[0] = (O) => u("classChange", O)),
            onStyleChange: w[1] || (w[1] = (O) => u("styleChange", O)),
            onContentChange: w[2] || (w[2] = (O) => u("contentChange", O)),
            onAttributeChange: w[3] || (w[3] = (O) => u("attributeChange", O))
          }, null, 8, ["element", "dispatch-changes"])) : xe("", !0)
        ]),
        me($r, {
          show: o.value,
          title: "Eliminar elemento",
          message: `¿Deseas eliminar ${k.value.toLowerCase()}?`,
          onConfirm: f,
          onCancel: m
        }, null, 8, ["show", "message"])
      ], 2);
    };
  }
}), Kr = [
  {
    icon: "cube",
    component: jn(() => import("./ElementsPanel-DSTVdWHT.js"))
  }
], Zr = { class: "editor-fixed-overlay inset-y-0 left-0 z-[1000] flex overflow-y-auto" }, Qr = { class: "min-w-[300px]" }, Jr = { class: "flex flex-col items-center justify-center" }, ei = ["aria-label"], ti = /* @__PURE__ */ ye({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = z(!1), n = z(Kr[0]), a = X(() => t.value && !J.value), r = () => {
      t.value = !a.value;
    };
    return (i, s) => {
      const o = et("fa-icon");
      return j(), V("div", Zr, [
        I("div", {
          class: tt([
            "flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300",
            { "!w-0": fe(J) || !t.value }
          ])
        }, [
          I("div", Qr, [
            (j(), nt(Rn(n.value.component)))
          ])
        ], 2),
        I("div", Jr, [
          I("button", {
            class: "cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none",
            onClick: r,
            "aria-label": a.value ? "Cerrar elementos" : "Abrir elementos"
          }, [
            me(o, {
              icon: a.value ? "xmark" : n.value.icon
            }, null, 8, ["icon"])
          ], 8, ei)
        ])
      ]);
    };
  }
}), ni = { class: "min-h-full font-sans text-sm text-gray-800" }, ai = { class: "editor-icon-wrapper" }, ri = { class: "editor-icon-wrapper" }, R = 12, ii = 4, si = 200, oi = /* @__PURE__ */ ye({
  __name: "App",
  setup(e) {
    let t = null;
    const n = z(!1), a = z(!1), r = z(null), i = z(!1), s = z(!1), o = z({
      left: null,
      right: R,
      top: R
    });
    let l = null;
    const c = { passive: !1 }, u = z(!1);
    let E = null;
    const b = X(() => {
      const v = o.value, y = v.left !== null;
      return {
        top: `${v.top}px`,
        left: y ? `${v.left}px` : "auto",
        right: y ? "auto" : `${v.right}px`
      };
    }), k = (v, y, _) => Math.min(Math.max(v, y), Math.max(y, _)), D = (v, y, _, T) => {
      const $ = Math.max(
        R,
        window.innerWidth - _ - R
      ), Z = Math.max(
        R,
        window.innerHeight - T - R
      );
      o.value = {
        ...o.value,
        left: k(v, R, $),
        top: k(y, R, Z)
      };
    }, N = () => {
      E !== null && (window.clearTimeout(E), E = null);
    }, m = () => {
      N(), u.value = !1;
    }, f = (v, y, _) => {
      const $ = v + _ / 2 <= window.innerWidth / 2 ? R : window.innerWidth - _ - R;
      N(), u.value = !0, o.value = {
        ...o.value,
        left: v,
        top: y
      }, E = window.setTimeout(m, si + 50), window.requestAnimationFrame(() => {
        u.value && (o.value = {
          ...o.value,
          left: Math.max(R, $),
          right: R,
          top: R
        });
      });
    }, p = () => {
      const v = r.value;
      if (!v)
        return;
      const y = v.getBoundingClientRect(), _ = Math.max(
        R,
        window.innerWidth - y.width - R
      ), T = o.value, $ = T.left === null ? null : k(T.left, R, _), Z = k(
        T.right,
        R,
        _
      );
      o.value = {
        ...T,
        left: $,
        right: Z,
        top: i.value ? T.top : R
      };
    }, A = (v) => {
      if (u.value || !v.isPrimary || v.pointerType === "mouse" && v.button !== 0)
        return;
      const y = r.value;
      if (!y)
        return;
      const _ = y.getBoundingClientRect();
      s.value = !1, o.value = {
        ...o.value,
        left: _.left,
        top: _.top
      }, l = {
        pointerId: v.pointerId,
        startX: v.clientX,
        startY: v.clientY,
        startLeft: _.left,
        startTop: _.top,
        width: _.width,
        height: _.height,
        moved: !1
      }, document.addEventListener("pointermove", C, c), document.addEventListener("pointerup", w, c), document.addEventListener("pointercancel", w, c);
    }, C = (v) => {
      const y = l;
      if (!y || y.pointerId !== v.pointerId)
        return;
      const _ = v.clientX - y.startX, T = v.clientY - y.startY;
      if (!y.moved && Math.hypot(_, T) < ii)
        return;
      y.moved = !0, i.value = !0, v.preventDefault();
      const $ = r.value;
      $ && !$.hasPointerCapture(v.pointerId) && $.setPointerCapture(v.pointerId), D(
        y.startLeft + _,
        y.startTop + T,
        y.width,
        y.height
      );
    }, w = (v) => {
      const y = l, _ = r.value;
      if (!(!y || y.pointerId !== v.pointerId)) {
        if (y.moved && _) {
          v.preventDefault();
          const T = _.getBoundingClientRect();
          f(T.left, T.top, T.width), s.value = !0;
        }
        _ != null && _.hasPointerCapture(v.pointerId) && _.releasePointerCapture(v.pointerId), document.removeEventListener("pointermove", C, c), document.removeEventListener("pointerup", w, c), document.removeEventListener("pointercancel", w, c), l = null, i.value = !1;
      }
    }, W = (v) => {
      if (s.value) {
        s.value = !1;
        return;
      }
      h(v);
    };
    vt(J, (v) => {
      const y = wt();
      v ? y == null || y.classList.add("sp-element__add-element-mode") : y == null || y.classList.remove("sp-element__add-element-mode");
    }), vt([n, a], () => {
      window.requestAnimationFrame(p);
    });
    const O = () => {
      U.value && U.value.classList.remove("sp-element__selected"), U.value = null, Pe.value = !1;
    }, h = (v) => {
      window.parent.document.dispatchEvent(new CustomEvent(`editorHistory${v === "undo" ? "Undo" : "Redo"}`));
    }, L = (v) => {
      const y = v.detail;
      n.value = (y == null ? void 0 : y.canUndo) ?? !1, a.value = (y == null ? void 0 : y.canRedo) ?? !1;
    }, F = () => {
      O();
    }, x = () => {
      window.parent.document.dispatchEvent(new CustomEvent("editorHistoryStateRequest"));
    }, Y = async () => {
      const v = await Mr();
      t == null || t(), t = Ir(v);
    };
    return Rt(() => {
      document.addEventListener("editorHistoryState", L), document.addEventListener("editorHistoryRestored", F), window.addEventListener("resize", p), x(), Y().catch((v) => {
        console.error("Unable to initialize the graphical editor surface.", v);
      });
    }), Fa(() => {
      document.removeEventListener("editorHistoryState", L), document.removeEventListener("editorHistoryRestored", F), window.removeEventListener("resize", p), N(), document.removeEventListener("pointermove", C, c), document.removeEventListener("pointerup", w, c), document.removeEventListener("pointercancel", w, c), l = null, i.value = !1, t == null || t(), t = null;
    }), (v, y) => {
      var T, $, Z;
      const _ = et("fa-icon");
      return j(), V("div", ni, [
        n.value || a.value ? (j(), V("div", {
          key: 0,
          ref_key: "historyOverlay",
          ref: r,
          class: tt([
            "editor-fixed-overlay editor-history-overlay z-[1100] flex gap-1 rounded-md bg-white/95 p-1 shadow-lg ring-1 ring-black/5",
            {
              "editor-history-overlay--dragging": i.value,
              "editor-history-overlay--snapping": u.value
            }
          ]),
          style: Ra(b.value),
          onPointerdown: A,
          onTransitionend: m
        }, [
          n.value ? (j(), V("button", {
            key: 0,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Deshacer cambio",
            title: "Deshacer cambio",
            onClick: y[0] || (y[0] = (ve) => W("undo"))
          }, [
            I("div", ai, [
              me(_, { icon: "arrow-rotate-left" })
            ])
          ])) : xe("", !0),
          a.value ? (j(), V("button", {
            key: 1,
            class: "flex h-8 w-8 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500",
            type: "button",
            "aria-label": "Rehacer cambio",
            title: "Rehacer cambio",
            onClick: y[1] || (y[1] = (ve) => W("redo"))
          }, [
            I("div", ri, [
              me(_, { icon: "arrow-rotate-right" })
            ])
          ])) : xe("", !0)
        ], 38)) : xe("", !0),
        fe(Pe) ? (j(), nt(Gr, {
          key: ((T = fe(U)) == null ? void 0 : T.dataset.simplisitiid) || (($ = fe(U)) == null ? void 0 : $.tagName),
          element: fe(U),
          type: (Z = fe(U)) == null ? void 0 : Z.tagName,
          onClose: O
        }, null, 8, ["element", "type"])) : xe("", !0),
        me(ti)
      ]);
    };
  }
}), dn = () => {
};
let $t = {}, Jn = {}, ea = null, ta = {
  mark: dn,
  measure: dn
};
try {
  typeof window < "u" && ($t = window), typeof document < "u" && (Jn = document), typeof MutationObserver < "u" && (ea = MutationObserver), typeof performance < "u" && (ta = performance);
} catch {
}
const {
  userAgent: mn = ""
} = $t.navigator || {}, pe = $t, S = Jn, pn = ea, Xe = ta;
pe.document;
const le = !!S.documentElement && !!S.head && typeof S.addEventListener == "function" && typeof S.createElement == "function", na = ~mn.indexOf("MSIE") || ~mn.indexOf("Trident/");
var M = "classic", aa = "duotone", q = "sharp", G = "sharp-duotone", li = [M, aa, q, G], ci = {
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
}, gn = {
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
}, yi = {
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
}, vi = {
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
}, ra = {
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
}, bi = ["solid", "regular", "light", "thin", "duotone", "brands"], ia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], xi = ia.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ne = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, wi = [...Object.keys(hi), ...bi, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ne.GROUP, Ne.SWAP_OPACITY, Ne.PRIMARY, Ne.SECONDARY].concat(ia.map((e) => "".concat(e, "x"))).concat(xi.map((e) => "w-".concat(e))), Ei = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ci = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, Li = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, hn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const se = "___FONT_AWESOME___", Et = 16, sa = "fa", oa = "svg-inline--fa", Le = "data-fa-i2svg", Ct = "data-fa-pseudo-element", Ai = "data-fa-pseudo-element-pending", Bt = "data-prefix", Ut = "data-icon", yn = "fontawesome-i2svg", _i = "async", ki = ["HTML", "HEAD", "STYLE", "SCRIPT"], la = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), ca = [M, q, G];
function Be(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[M];
    }
  });
}
const fa = {
  ...ra
};
fa[M] = {
  ...ra[M],
  ...gn.kit,
  ...gn["kit-duotone"]
};
const we = Be(fa), Lt = {
  ...vi
};
Lt[M] = {
  ...Lt[M],
  ...hn.kit,
  ...hn["kit-duotone"]
};
const He = Be(Lt), At = {
  ...yi
};
At[M] = {
  ...At[M],
  ...Li.kit
};
const Ee = Be(At), _t = {
  ...gi
};
_t[M] = {
  ..._t[M],
  ...Ci.kit
};
const Pi = Be(_t), Si = ui, ua = "fa-layers-text", Oi = di, Mi = {
  ...ci
};
Be(Mi);
const Ii = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], dt = Ne, Se = /* @__PURE__ */ new Set();
Object.keys(He[M]).map(Se.add.bind(Se));
Object.keys(He[q]).map(Se.add.bind(Se));
Object.keys(He[G]).map(Se.add.bind(Se));
const Ni = [...fi, ...wi], ze = pe.FontAwesomeConfig || {};
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
  r != null && (ze[a] = r);
});
const da = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: sa,
  replacementClass: oa,
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
ze.familyPrefix && (ze.cssPrefix = ze.familyPrefix);
const Oe = {
  ...da,
  ...ze
};
Oe.autoReplaceSvg || (Oe.observeMutations = !1);
const g = {};
Object.keys(da).forEach((e) => {
  Object.defineProperty(g, e, {
    enumerable: !0,
    set: function(t) {
      Oe[e] = t, De.forEach((n) => n(g));
    },
    get: function() {
      return Oe[e];
    }
  });
});
Object.defineProperty(g, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Oe.cssPrefix = e, De.forEach((t) => t(g));
  },
  get: function() {
    return Oe.cssPrefix;
  }
});
pe.FontAwesomeConfig = g;
const De = [];
function Di(e) {
  return De.push(e), () => {
    De.splice(De.indexOf(e), 1);
  };
}
const ce = Et, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Fi(e) {
  if (!e || !le)
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
function We() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Ri[Math.random() * 62 | 0];
  return t;
}
function Ie(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Xt(e) {
  return e.classList ? Ie(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ma(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ji(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(ma(e[n]), '" '), "").trim();
}
function rt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Vt(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
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
    width: n = Et,
    height: a = Et,
    startCentered: r = !1
  } = e, i = "";
  return r && na ? i += "translate(".concat(t.x / ce - n / 2, "em, ").concat(t.y / ce - a / 2, "em) ") : r ? i += "translate(calc(-50% + ".concat(t.x / ce, "em), calc(-50% + ").concat(t.y / ce, "em)) ") : i += "translate(".concat(t.x / ce, "em, ").concat(t.y / ce, "em) "), i += "scale(".concat(t.size / ce * (t.flipX ? -1 : 1), ", ").concat(t.size / ce * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
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
function pa() {
  const e = sa, t = oa, n = g.cssPrefix, a = g.replacementClass;
  let r = Yi;
  if (n !== e || a !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    r = r.replace(i, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(a));
  }
  return r;
}
let vn = !1;
function mt() {
  g.autoAddCss && !vn && (Fi(pa()), vn = !0);
}
var $i = {
  mixout() {
    return {
      dom: {
        css: pa,
        insertCss: mt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        mt();
      },
      beforeI2svg() {
        mt();
      }
    };
  }
};
const oe = pe || {};
oe[se] || (oe[se] = {});
oe[se].styles || (oe[se].styles = {});
oe[se].hooks || (oe[se].hooks = {});
oe[se].shims || (oe[se].shims = []);
var ne = oe[se];
const ga = [], ha = function() {
  S.removeEventListener("DOMContentLoaded", ha), Ke = 1, ga.map((e) => e());
};
let Ke = !1;
le && (Ke = (S.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(S.readyState), Ke || S.addEventListener("DOMContentLoaded", ha));
function Bi(e) {
  le && (Ke ? setTimeout(e, 0) : ga.push(e));
}
function Ue(e) {
  const {
    tag: t,
    attributes: n = {},
    children: a = []
  } = e;
  return typeof e == "string" ? ma(e) : "<".concat(t, " ").concat(ji(n), ">").concat(a.map(Ue).join(""), "</").concat(t, ">");
}
function bn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var pt = function(t, n, a, r) {
  var i = Object.keys(t), s = i.length, o = n, l, c, u;
  for (a === void 0 ? (l = 1, u = t[i[0]]) : (l = 0, u = a); l < s; l++)
    c = i[l], u = o(u, t[c], c, t);
  return u;
};
function Ui(e) {
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
function kt(e) {
  const t = Ui(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Xi(e, t) {
  const n = e.length;
  let a = e.charCodeAt(t), r;
  return a >= 55296 && a <= 56319 && n > t + 1 && (r = e.charCodeAt(t + 1), r >= 56320 && r <= 57343) ? (a - 55296) * 1024 + r - 56320 + 65536 : a;
}
function xn(e) {
  return Object.keys(e).reduce((t, n) => {
    const a = e[n];
    return !!a.icon ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function Pt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: a = !1
  } = n, r = xn(t);
  typeof ne.hooks.addPack == "function" && !a ? ne.hooks.addPack(e, xn(t)) : ne.styles[e] = {
    ...ne.styles[e] || {},
    ...r
  }, e === "fas" && Pt("fa", t);
}
const {
  styles: be,
  shims: Vi
} = ne, qi = {
  [M]: Object.values(Ee[M]),
  [q]: Object.values(Ee[q]),
  [G]: Object.values(Ee[G])
};
let qt = null, ya = {}, va = {}, ba = {}, xa = {}, wa = {};
const Gi = {
  [M]: Object.keys(we[M]),
  [q]: Object.keys(we[q]),
  [G]: Object.keys(we[G])
};
function Ki(e) {
  return ~Ni.indexOf(e);
}
function Zi(e, t) {
  const n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !Ki(r) ? r : null;
}
const Ea = () => {
  const e = (a) => pt(be, (r, i, s) => (r[s] = pt(i, a, {}), r), {});
  ya = e((a, r, i) => (r[3] && (a[r[3]] = i), r[2] && r[2].filter((o) => typeof o == "number").forEach((o) => {
    a[o.toString(16)] = i;
  }), a)), va = e((a, r, i) => (a[i] = i, r[2] && r[2].filter((o) => typeof o == "string").forEach((o) => {
    a[o] = i;
  }), a)), wa = e((a, r, i) => {
    const s = r[2];
    return a[i] = i, s.forEach((o) => {
      a[o] = i;
    }), a;
  });
  const t = "far" in be || g.autoFetchSvg, n = pt(Vi, (a, r) => {
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
  ba = n.names, xa = n.unicodes, qt = it(g.styleDefault, {
    family: g.familyDefault
  });
};
Di((e) => {
  qt = it(e.styleDefault, {
    family: g.familyDefault
  });
});
Ea();
function Gt(e, t) {
  return (ya[e] || {})[t];
}
function Qi(e, t) {
  return (va[e] || {})[t];
}
function de(e, t) {
  return (wa[e] || {})[t];
}
function Ca(e) {
  return ba[e] || {
    prefix: null,
    iconName: null
  };
}
function Ji(e) {
  const t = xa[e], n = Gt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ge() {
  return qt;
}
const Kt = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function it(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = M
  } = t, a = we[n][e], r = He[n][e] || He[n][a], i = e in ne.styles ? e : null;
  return r || i || null;
}
const es = {
  [M]: Object.keys(Ee[M]),
  [q]: Object.keys(Ee[q]),
  [G]: Object.keys(Ee[G])
};
function st(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, a = {
    [M]: "".concat(g.cssPrefix, "-").concat(M),
    [q]: "".concat(g.cssPrefix, "-").concat(q),
    [G]: "".concat(g.cssPrefix, "-").concat(G)
  };
  let r = null, i = M;
  const s = li.filter((l) => l !== aa);
  s.forEach((l) => {
    (e.includes(a[l]) || e.some((c) => es[l].includes(c))) && (i = l);
  });
  const o = e.reduce((l, c) => {
    const u = Zi(g.cssPrefix, c);
    if (be[c] ? (c = qi[i].includes(c) ? Pi[i][c] : c, r = c, l.prefix = c) : Gi[i].indexOf(c) > -1 ? (r = c, l.prefix = it(c, {
      family: i
    })) : u ? l.iconName = u : c !== g.replacementClass && !s.some((E) => c === a[E]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const E = r === "fa" ? Ca(l.iconName) : {}, b = de(l.prefix, l.iconName);
      E.prefix && (r = null), l.iconName = E.iconName || b || l.iconName, l.prefix = E.prefix || l.prefix, l.prefix === "far" && !be.far && be.fas && !g.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Kt());
  return (e.includes("fa-brands") || e.includes("fab")) && (o.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (o.prefix = "fad"), !o.prefix && i === q && (be.fass || g.autoFetchSvg) && (o.prefix = "fass", o.iconName = de(o.prefix, o.iconName) || o.iconName), !o.prefix && i === G && (be.fasds || g.autoFetchSvg) && (o.prefix = "fasds", o.iconName = de(o.prefix, o.iconName) || o.iconName), (o.prefix === "fa" || r === "fa") && (o.prefix = ge() || "fas"), o;
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
      }, Pt(i, r[i]);
      const s = Ee[M][i];
      s && Pt(s, r[i]), Ea();
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
let wn = [], _e = {};
const ke = {}, ns = Object.keys(ke);
function as(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return wn = e, _e = {}, Object.keys(ke).forEach((a) => {
    ns.indexOf(a) === -1 && delete ke[a];
  }), wn.forEach((a) => {
    const r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach((i) => {
      typeof r[i] == "function" && (n[i] = r[i]), typeof r[i] == "object" && Object.keys(r[i]).forEach((s) => {
        n[i] || (n[i] = {}), n[i][s] = r[i][s];
      });
    }), a.hooks) {
      const i = a.hooks();
      Object.keys(i).forEach((s) => {
        _e[s] || (_e[s] = []), _e[s].push(i[s]);
      });
    }
    a.provides && a.provides(ke);
  }), n;
}
function St(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return (_e[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...a]);
  }), t;
}
function Ae(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  (_e[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function he() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ke[e] ? ke[e].apply(null, t) : void 0;
}
function Ot(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ge();
  if (t)
    return t = de(n, t) || t, bn(La.definitions, n, t) || bn(ne.styles, n, t);
}
const La = new ts(), rs = () => {
  g.autoReplaceSvg = !1, g.observeMutations = !1, Ae("noAuto");
}, is = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return le ? (Ae("beforeI2svg", e), he("pseudoElements2svg", e), he("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    g.autoReplaceSvg === !1 && (g.autoReplaceSvg = !0), g.observeMutations = !0, Bi(() => {
      os({
        autoReplaceSvgRoot: t
      }), Ae("watch", e);
    });
  }
}, ss = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: de(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = it(e[0]);
      return {
        prefix: n,
        iconName: de(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(g.cssPrefix, "-")) > -1 || e.match(Si))) {
      const t = st(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ge(),
        iconName: de(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ge();
      return {
        prefix: t,
        iconName: de(t, e) || e
      };
    }
  }
}, K = {
  noAuto: rs,
  config: g,
  dom: is,
  parse: ss,
  library: La,
  findIconDefinition: Ot,
  toHtml: Ue
}, os = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = S
  } = e;
  (Object.keys(ne.styles).length > 0 || g.autoFetchSvg) && le && g.autoReplaceSvg && K.dom.i2svg({
    node: t
  });
};
function ot(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ue(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!le) return;
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
  if (Vt(s) && n.found && !a.found) {
    const {
      width: o,
      height: l
    } = n, c = {
      x: o / l / 2,
      y: 0.5
    };
    r.style = rt({
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
function Zt(e) {
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
    watchable: E = !1
  } = e, {
    width: b,
    height: k
  } = n.found ? n : t, D = a === "fak", N = [g.replacementClass, r ? "".concat(g.cssPrefix, "-").concat(r) : ""].filter((w) => u.classes.indexOf(w) === -1).filter((w) => w !== "" || !!w).concat(u.classes).join(" ");
  let m = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": a,
      "data-icon": r,
      class: N,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(k)
    }
  };
  const f = D && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(b / k * 16 * 0.0625, "em")
  } : {};
  E && (m.attributes[Le] = ""), o && (m.children.push({
    tag: "title",
    attributes: {
      id: m.attributes["aria-labelledby"] || "title-".concat(c || We())
    },
    children: [o]
  }), delete m.attributes.title);
  const p = {
    ...m,
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
    children: A,
    attributes: C
  } = n.found && t.found ? he("generateAbstractMask", p) || {
    children: [],
    attributes: {}
  } : he("generateAbstractIcon", p) || {
    children: [],
    attributes: {}
  };
  return p.children = A, p.attributes = C, s ? cs(p) : ls(p);
}
function En(e) {
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
  o && (l[Le] = "");
  const c = {
    ...s.styles
  };
  Vt(r) && (c.transform = Wi({
    transform: r,
    startCentered: !0,
    width: n,
    height: a
  }), c["-webkit-transform"] = c.transform);
  const u = rt(c);
  u.length > 0 && (l.style = u);
  const E = [];
  return E.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), i && E.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), E;
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
  }, i = rt(a.styles);
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
  styles: gt
} = ne;
function Mt(e) {
  const t = e[0], n = e[1], [a] = e.slice(4);
  let r = null;
  return Array.isArray(a) ? r = {
    tag: "g",
    attributes: {
      class: "".concat(g.cssPrefix, "-").concat(dt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(g.cssPrefix, "-").concat(dt.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(g.cssPrefix, "-").concat(dt.PRIMARY),
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
  !la && !g.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function It(e, t) {
  let n = t;
  return t === "fa" && g.styleDefault !== null && (t = ge()), new Promise((a, r) => {
    if (n === "fa") {
      const i = Ca(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && gt[t] && gt[t][e]) {
      const i = gt[t][e];
      return a(Mt(i));
    }
    ds(e, t), a({
      ...us,
      icon: g.showMissingIcons && e ? he("missingIconAbstract") || {} : {}
    });
  });
}
const Cn = () => {
}, Nt = g.measurePerformance && Xe && Xe.mark && Xe.measure ? Xe : {
  mark: Cn,
  measure: Cn
}, Te = 'FA "6.6.0"', ms = (e) => (Nt.mark("".concat(Te, " ").concat(e, " begins")), () => Aa(e)), Aa = (e) => {
  Nt.mark("".concat(Te, " ").concat(e, " ends")), Nt.measure("".concat(Te, " ").concat(e), "".concat(Te, " ").concat(e, " begins"), "".concat(Te, " ").concat(e, " ends"));
};
var Qt = {
  begin: ms,
  end: Aa
};
const qe = () => {
};
function Ln(e) {
  return typeof (e.getAttribute ? e.getAttribute(Le) : null) == "string";
}
function ps(e) {
  const t = e.getAttribute ? e.getAttribute(Bt) : null, n = e.getAttribute ? e.getAttribute(Ut) : null;
  return t && n;
}
function gs(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(g.replacementClass);
}
function hs() {
  return g.autoReplaceSvg === !0 ? Ge.replace : Ge[g.autoReplaceSvg] || Ge.replace;
}
function ys(e) {
  return S.createElementNS("http://www.w3.org/2000/svg", e);
}
function vs(e) {
  return S.createElement(e);
}
function _a(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? ys : vs
  } = t;
  if (typeof e == "string")
    return S.createTextNode(e);
  const a = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    a.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    a.appendChild(_a(i, {
      ceFn: n
    }));
  }), a;
}
function bs(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ge = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(_a(n), t);
      }), t.getAttribute(Le) === null && g.keepOriginalSource) {
        let n = S.createComment(bs(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Xt(t).indexOf(g.replacementClass))
      return Ge.replace(e);
    const a = new RegExp("".concat(g.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((s, o) => (o === g.replacementClass || o.match(a) ? s.toSvg.push(o) : s.toNode.push(o), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const r = n.map((i) => Ue(i)).join(`
`);
    t.setAttribute(Le, ""), t.innerHTML = r;
  }
};
function An(e) {
  e();
}
function ka(e, t) {
  const n = typeof t == "function" ? t : qe;
  if (e.length === 0)
    n();
  else {
    let a = An;
    g.mutateApproach === _i && (a = pe.requestAnimationFrame || An), a(() => {
      const r = hs(), i = Qt.begin("mutate");
      e.map(r), i(), n();
    });
  }
}
let Jt = !1;
function Pa() {
  Jt = !0;
}
function Tt() {
  Jt = !1;
}
let Ze = null;
function _n(e) {
  if (!pn || !g.observeMutations)
    return;
  const {
    treeCallback: t = qe,
    nodeCallback: n = qe,
    pseudoElementsCallback: a = qe,
    observeMutationsRoot: r = S
  } = e;
  Ze = new pn((i) => {
    if (Jt) return;
    const s = ge();
    Ie(i).forEach((o) => {
      if (o.type === "childList" && o.addedNodes.length > 0 && !Ln(o.addedNodes[0]) && (g.searchPseudoElements && a(o.target), t(o.target)), o.type === "attributes" && o.target.parentNode && g.searchPseudoElements && a(o.target.parentNode), o.type === "attributes" && Ln(o.target) && ~Ii.indexOf(o.attributeName))
        if (o.attributeName === "class" && ps(o.target)) {
          const {
            prefix: l,
            iconName: c
          } = st(Xt(o.target));
          o.target.setAttribute(Bt, l || s), c && o.target.setAttribute(Ut, c);
        } else gs(o.target) && n(o.target);
    });
  }), le && Ze.observe(r, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function xs() {
  Ze && Ze.disconnect();
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
  let r = st(Xt(e));
  return r.prefix || (r.prefix = ge()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Qi(r.prefix, e.innerText) || Gt(r.prefix, kt(e.innerText))), !r.iconName && g.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function Cs(e) {
  const t = Ie(e.attributes).reduce((r, i) => (r.name !== "class" && r.name !== "style" && (r[i.name] = i.value), r), {}), n = e.getAttribute("title"), a = e.getAttribute("data-fa-title-id");
  return g.autoA11y && (n ? t["aria-labelledby"] = "".concat(g.replacementClass, "-title-").concat(a || We()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Ls() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: te,
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
function kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: a,
    rest: r
  } = Es(e), i = Cs(e), s = St("parseNodeAttributes", {}, e);
  let o = t.styleParser ? ws(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: te,
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
} = ne;
function Sa(e) {
  const t = g.autoReplaceSvg === "nest" ? kn(e, {
    styleParser: !1
  }) : kn(e);
  return ~t.extra.classes.indexOf(ua) ? he("generateLayersText", e, t) : he("generateSvgReplacementMutation", e, t);
}
let ae = /* @__PURE__ */ new Set();
ca.map((e) => {
  ae.add("fa-".concat(e));
});
Object.keys(we[M]).map(ae.add.bind(ae));
Object.keys(we[q]).map(ae.add.bind(ae));
Object.keys(we[G]).map(ae.add.bind(ae));
ae = [...ae];
function Pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!le) return Promise.resolve();
  const n = S.documentElement.classList, a = (u) => n.add("".concat(yn, "-").concat(u)), r = (u) => n.remove("".concat(yn, "-").concat(u)), i = g.autoFetchSvg ? ae : ca.map((u) => "fa-".concat(u)).concat(Object.keys(As));
  i.includes("fa") || i.push("fa");
  const s = [".".concat(ua, ":not([").concat(Le, "])")].concat(i.map((u) => ".".concat(u, ":not([").concat(Le, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let o = [];
  try {
    o = Ie(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  const l = Qt.begin("onTree"), c = o.reduce((u, E) => {
    try {
      const b = Sa(E);
      b && u.push(b);
    } catch (b) {
      la || b.name === "MissingIcon" && console.error(b);
    }
    return u;
  }, []);
  return new Promise((u, E) => {
    Promise.all(c).then((b) => {
      ka(b, () => {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((b) => {
      l(), E(b);
    });
  });
}
function _s(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Sa(e).then((n) => {
    n && ka([n], t);
  });
}
function ks(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = (t || {}).icon ? t : Ot(t || {});
    let {
      mask: r
    } = n;
    return r && (r = (r || {}).icon ? r : Ot(r || {})), e(a, {
      ...n,
      mask: r
    });
  };
}
const Ps = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = te,
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
    prefix: E,
    iconName: b,
    icon: k
  } = e;
  return ot({
    type: "icon",
    ...e
  }, () => (Ae("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), g.autoA11y && (s ? c["aria-labelledby"] = "".concat(g.replacementClass, "-title-").concat(o || We()) : (c["aria-hidden"] = "true", c.focusable = "false")), Zt({
    icons: {
      main: Mt(k),
      mask: r ? Mt(r.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: E,
    iconName: b,
    transform: {
      ...te,
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
var Ss = {
  mixout() {
    return {
      icon: ks(Ps)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Pn, e.nodeCallback = _s, e;
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
      return Pn(n, a);
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
        extra: E
      } = n;
      return new Promise((b, k) => {
        Promise.all([It(a, s), c.iconName ? It(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((D) => {
          let [N, m] = D;
          b([t, Zt({
            icons: {
              main: N,
              mask: m
            },
            prefix: s,
            iconName: a,
            transform: o,
            symbol: l,
            maskId: u,
            title: r,
            titleId: i,
            extra: E,
            watchable: !0
          })]);
        }).catch(k);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: a,
        main: r,
        transform: i,
        styles: s
      } = t;
      const o = rt(s);
      o.length > 0 && (a.style = o);
      let l;
      return Vt(i) && (l = he("generateAbstractTransformGrouping", {
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
        return ot({
          type: "layer"
        }, () => {
          Ae("beforeDOMElementCreation", {
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
        return ot({
          type: "counter",
          content: e
        }, () => (Ae("beforeDOMElementCreation", {
          content: e,
          params: t
        }), fs({
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
}, Is = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = te,
          title: a = null,
          classes: r = [],
          attributes: i = {},
          styles: s = {}
        } = t;
        return ot({
          type: "text",
          content: e
        }, () => (Ae("beforeDOMElementCreation", {
          content: e,
          params: t
        }), En({
          content: e,
          transform: {
            ...te,
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
      if (na) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        s = c.width / l, o = c.height / l;
      }
      return g.autoA11y && !a && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, En({
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
const Ns = new RegExp('"', "ug"), Sn = [1105920, 1112319], On = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...pi,
  ...mi,
  ...Ei
}, zt = Object.keys(On).reduce((e, t) => (e[t.toLowerCase()] = On[t], e), {}), Ts = Object.keys(zt).reduce((e, t) => {
  const n = zt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function zs(e) {
  const t = e.replace(Ns, ""), n = Xi(t, 0), a = n >= Sn[0] && n <= Sn[1], r = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: kt(r ? t[0] : t),
    isSecondary: a || r
  };
}
function Ds(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (zt[n] || {})[r] || Ts[n];
}
function Mn(e, t) {
  const n = "".concat(Ai).concat(t.replace(":", "-"));
  return new Promise((a, r) => {
    if (e.getAttribute(n) !== null)
      return a();
    const s = Ie(e.children).filter((b) => b.getAttribute(Ct) === t)[0], o = pe.getComputedStyle(e, t), l = o.getPropertyValue("font-family"), c = l.match(Oi), u = o.getPropertyValue("font-weight"), E = o.getPropertyValue("content");
    if (s && !c)
      return e.removeChild(s), a();
    if (c && E !== "none" && E !== "") {
      const b = o.getPropertyValue("content");
      let k = Ds(l, u);
      const {
        value: D,
        isSecondary: N
      } = zs(b), m = c[0].startsWith("FontAwesome");
      let f = Gt(k, D), p = f;
      if (m) {
        const A = Ji(D);
        A.iconName && A.prefix && (f = A.iconName, k = A.prefix);
      }
      if (f && !N && (!s || s.getAttribute(Bt) !== k || s.getAttribute(Ut) !== p)) {
        e.setAttribute(n, p), s && e.removeChild(s);
        const A = Ls(), {
          extra: C
        } = A;
        C.attributes[Ct] = t, It(f, k).then((w) => {
          const W = Zt({
            ...A,
            icons: {
              main: w,
              mask: Kt()
            },
            prefix: k,
            iconName: p,
            extra: C,
            watchable: !0
          }), O = S.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(O, e.firstChild) : e.appendChild(O), O.outerHTML = W.map((h) => Ue(h)).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Fs(e) {
  return Promise.all([Mn(e, "::before"), Mn(e, "::after")]);
}
function Rs(e) {
  return e.parentNode !== document.head && !~ki.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Ct) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function In(e) {
  if (le)
    return new Promise((t, n) => {
      const a = Ie(e.querySelectorAll("*")).filter(Rs).map(Fs), r = Qt.begin("searchPseudoElements");
      Pa(), Promise.all(a).then(() => {
        r(), Tt(), t();
      }).catch(() => {
        r(), Tt(), n();
      });
    });
}
var js = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = In, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = S
      } = t;
      g.searchPseudoElements && In(n);
    };
  }
};
let Nn = !1;
var Hs = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Pa(), Nn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        _n(St("mutationObserverCallbacks", {}));
      },
      noAuto() {
        xs();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Nn ? Tt() : _n(St("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Tn = (e) => {
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
        transform: (e) => Tn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Tn(n)), e;
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
      }, E = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, b = {
        outer: s,
        inner: u,
        path: E
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
const ht = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function zn(e) {
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
        const n = t.getAttribute("data-fa-mask"), a = n ? st(n.split(" ").map((r) => r.trim())) : Kt();
        return a.prefix || (a.prefix = ge()), e.mask = a, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        icon: E
      } = i, b = Hi({
        transform: o,
        containerWidth: u,
        iconWidth: l
      }), k = {
        tag: "rect",
        attributes: {
          ...ht,
          fill: "white"
        }
      }, D = c.children ? {
        children: c.children.map(zn)
      } : {}, N = {
        tag: "g",
        attributes: {
          ...b.inner
        },
        children: [zn({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...b.path
          },
          ...D
        })]
      }, m = {
        tag: "g",
        attributes: {
          ...b.outer
        },
        children: [N]
      }, f = "mask-".concat(s || We()), p = "clip-".concat(s || We()), A = {
        tag: "mask",
        attributes: {
          ...ht,
          id: f,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [k, m]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: p
          },
          children: Ys(E)
        }, A]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(p, ")"),
          mask: "url(#".concat(f, ")"),
          ...ht
        }
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, Bs = {
  provides(e) {
    let t = !1;
    pe.matchMedia && (t = pe.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, Us = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), a = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = a, e;
      }
    };
  }
}, Xs = [$i, Ss, Os, Ms, Is, js, Hs, Ws, $s, Bs, Us];
as(Xs, {
  mixoutsTo: K
});
K.noAuto;
const Oa = K.config, Vs = K.library;
K.dom;
const Qe = K.parse;
K.findIconDefinition;
K.toHtml;
const qs = K.icon;
K.layer;
const Gs = K.text;
K.counter;
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
}, yo = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, vo = {
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
function Dn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dn(Object(n), !0).forEach(function(a) {
      B(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Co(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t || "default");
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lo(e) {
  var t = Co(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function B(e, t, n) {
  return t = Lo(t), t in e ? Object.defineProperty(e, t, {
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
function Dt(e) {
  return ko(e) || Po(e) || So(e) || Oo();
}
function ko(e) {
  if (Array.isArray(e)) return Ft(e);
}
function Po(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function So(e, t) {
  if (e) {
    if (typeof e == "string") return Ft(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ft(e, t);
  }
}
function Ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Oo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ma = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(f, p, A) {
      if (!c(p) || E(p) || b(p) || k(p) || l(p))
        return p;
      var C, w = 0, W = 0;
      if (u(p))
        for (C = [], W = p.length; w < W; w++)
          C.push(n(f, p[w], A));
      else {
        C = {};
        for (var O in p)
          Object.prototype.hasOwnProperty.call(p, O) && (C[f(O, A)] = n(f, p[O], A));
      }
      return C;
    }, a = function(f, p) {
      p = p || {};
      var A = p.separator || "_", C = p.split || /(?=[A-Z])/;
      return f.split(C).join(A);
    }, r = function(f) {
      return D(f) ? f : (f = f.replace(/[\-_\s]+(.)?/g, function(p, A) {
        return A ? A.toUpperCase() : "";
      }), f.substr(0, 1).toLowerCase() + f.substr(1));
    }, i = function(f) {
      var p = r(f);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, s = function(f, p) {
      return a(f, p).toLowerCase();
    }, o = Object.prototype.toString, l = function(f) {
      return typeof f == "function";
    }, c = function(f) {
      return f === Object(f);
    }, u = function(f) {
      return o.call(f) == "[object Array]";
    }, E = function(f) {
      return o.call(f) == "[object Date]";
    }, b = function(f) {
      return o.call(f) == "[object RegExp]";
    }, k = function(f) {
      return o.call(f) == "[object Boolean]";
    }, D = function(f) {
      return f = f - 0, f === f;
    }, N = function(f, p) {
      var A = p && "process" in p ? p.process : p;
      return typeof A != "function" ? f : function(C, w) {
        return A(C, f, w);
      };
    }, m = {
      camelize: r,
      decamelize: s,
      pascalize: i,
      depascalize: s,
      camelizeKeys: function(f, p) {
        return n(N(r, p), f);
      },
      decamelizeKeys: function(f, p) {
        return n(N(s, p), f, p);
      },
      pascalizeKeys: function(f, p) {
        return n(N(i, p), f);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = m : t.humps = m;
  })(Mo);
})(Ma);
var Io = Ma.exports, No = ["class", "style"];
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
function en(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return en(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var u = e.attributes[c];
    switch (c) {
      case "class":
        l.class = zo(u);
        break;
      case "style":
        l.style = To(u);
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
  var i = n.style, s = i === void 0 ? {} : i, o = _o(n, No);
  return Wn(e.tag, Q(Q(Q({}, t), {}, {
    class: r.class,
    style: Q(Q({}, r.style), s)
  }, r.attrs), o), a);
}
var Ia = !1;
try {
  Ia = process.env.NODE_ENV === "production";
} catch {
}
function Do() {
  if (!Ia && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fe(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? B({}, e, t) : {};
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
  }, B(B(B(B(B(B(B(B(B(B(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), B(B(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Fn(e) {
  if (e && Je(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Qe.icon)
    return Qe.icon(e);
  if (e === null)
    return null;
  if (Je(e) === "object" && e.prefix && e.iconName)
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
var Ro = ye({
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
    var a = n.attrs, r = X(function() {
      return Fn(t.icon);
    }), i = X(function() {
      return Fe("classes", Fo(t));
    }), s = X(function() {
      return Fe("transform", typeof t.transform == "string" ? Qe.transform(t.transform) : t.transform);
    }), o = X(function() {
      return Fe("mask", Fn(t.mask));
    }), l = X(function() {
      return qs(r.value, Q(Q(Q(Q({}, i.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    vt(l, function(u) {
      if (!u)
        return Do("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var c = X(function() {
      return l.value ? en(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
ye({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = Oa.familyPrefix, i = X(function() {
      return ["".concat(r, "-layers")].concat(Dt(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return Wn("div", {
        class: i.value
      }, a.default ? a.default() : []);
    };
  }
});
ye({
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
    var a = n.attrs, r = Oa.familyPrefix, i = X(function() {
      return Fe("classes", [].concat(Dt(t.counter ? ["".concat(r, "-layers-counter")] : []), Dt(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), s = X(function() {
      return Fe("transform", typeof t.transform == "string" ? Qe.transform(t.transform) : t.transform);
    }), o = X(function() {
      var c = Gs(t.value.toString(), Q(Q({}, s.value), i.value)), u = c.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = X(function() {
      return en(o.value, {}, a);
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
  yo,
  fo,
  vo,
  so,
  Qs,
  to,
  ho,
  lo,
  eo,
  no
);
const Uo = {
  install: (e) => {
    e.component("simplisiti-component-editor", oi), e.component("fa-icon", Ro);
  }
};
export {
  Ho as H,
  Yn as a,
  Wo as d,
  Yo as e,
  Uo as m,
  ir as n,
  $o as p,
  Bo as r
};
