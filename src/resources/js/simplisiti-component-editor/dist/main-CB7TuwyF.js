import { ref as te, defineComponent as Me, shallowReactive as ba, onMounted as Cn, resolveComponent as Pn, openBlock as B, createElementBlock as Z, Fragment as st, createElementVNode as W, renderList as an, unref as Pe, normalizeClass as Rn, createVNode as qe, withDirectives as Gr, createBlock as Dt, resolveDynamicComponent as Jr, vShow as wa, defineAsyncComponent as Qr, computed as G, withModifiers as Zr, toDisplayString as va, createCommentVNode as Ln, resolveDirective as Ea, watch as es, h as ts } from "vue";
const xa = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, _a = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, Gf = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Oa = [
  "div",
  "a",
  "p",
  "h1",
  "img"
];
function ns(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Sa } = Object.prototype, { getPrototypeOf: we } = Object, { iterator: dt, toStringTag: rs } = Symbol, ct = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ss = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), as = (e, t, n) => e === Object.prototype || !n && t === null, Aa = (e) => {
  if (!Object.isExtensible(e))
    return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((n) => {
    if (ss(n))
      return !1;
    const r = Object.getOwnPropertyDescriptor(e, n);
    return !!r && r.configurable && r.writable === !0;
  });
}, lt = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    r.push(n);
    const s = we(n);
    if (as(n, s, n === e))
      return !1;
    if (ct(n, t))
      return !0;
    n = s;
  }
  return !1;
}, Ca = (e, t) => e != null && lt(e, t) ? e[t] : void 0, Pa = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function")
    return e;
  const t = we(e);
  if (t === null && Aa(e))
    return e;
  const n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), s = [];
  let a = e;
  for (; a != null && s.indexOf(a) === -1; ) {
    s.push(a);
    const o = a === e ? t : we(a);
    if (as(a, o, a === e))
      break;
    const i = Object.getOwnPropertyNames(a);
    Object.getOwnPropertySymbols && i.push(...Object.getOwnPropertySymbols(a));
    for (const c of i)
      ss(c) || ct(r, c) || (n[c] = e[c], r[c] = !0);
    a = o;
  }
  return n;
}, Tn = /* @__PURE__ */ ((e) => (t) => {
  const n = Sa.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => Tn(t) === e), Mt = (e) => (t) => typeof t === e, { isArray: Ne } = Array, ke = Mt("undefined");
function Xe(e) {
  return e !== null && !ke(e) && e.constructor !== null && !ke(e.constructor) && $(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const os = J("ArrayBuffer");
function Ra(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && os(e.buffer), t;
}
const La = Mt("string"), $ = Mt("function"), is = Mt("number"), Ye = (e) => e !== null && typeof e == "object", Ta = (e) => e === !0 || e === !1, Ot = (e) => {
  if (!Ye(e))
    return !1;
  const t = we(e);
  return (t === null || t === Object.prototype || we(t) === null) && // Treat safe own/inherited Symbol.toStringTag or Symbol.iterator members as
  // evidence the value is tagged/iterable, while ignoring members reachable
  // only through shared or terminal prototype boundaries.
  !lt(e, rs) && !lt(e, dt);
}, Na = (e) => {
  if (!Ye(e) || Xe(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, ka = J("Date"), Fa = J("File"), Ia = (e) => !!(e && typeof e.uri < "u"), Da = (e) => e && typeof e.getParts < "u", Ma = J("Blob"), za = J("FileList"), ja = J("Set"), Ua = (e) => Ye(e) && $(e.pipe);
function Ba() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const rr = Ba(), sr = typeof rr.FormData < "u" ? rr.FormData : void 0, Ha = (e) => {
  if (!e) return !1;
  if (sr && e instanceof sr) return !0;
  const t = we(e);
  if (!t || t === Object.prototype || !$(e.append)) return !1;
  const n = Tn(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && $(e.toString) && e.toString() === "[object FormData]";
}, qa = J("URLSearchParams"), [Wa, $a, Va, Xa] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(J), Ya = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function mt(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ne(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Xe(e))
      return;
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let i;
    for (r = 0; r < o; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function cs(e, t) {
  if (Xe(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ls = (e) => !ke(e) && e !== Ce;
function on(...e) {
  const { caseless: t, skipUndefined: n } = ls(this) && this || {}, r = {}, s = (a, o) => {
    if (o === "__proto__" || o === "constructor" || o === "prototype")
      return;
    const i = t && typeof o == "string" && cs(r, o) || o, c = ct(r, i) ? r[i] : void 0;
    Ot(c) && Ot(a) ? r[i] = on(c, a) : Ot(a) ? r[i] = on({}, a) : Ne(a) ? r[i] = a.slice() : (!n || !ke(a)) && (r[i] = a);
  };
  for (let a = 0, o = e.length; a < o; a++) {
    const i = e[a];
    if (!i || Xe(i) || (mt(i, s), typeof i != "object" || Ne(i)))
      continue;
    const c = Object.getOwnPropertySymbols(i);
    for (let f = 0; f < c.length; f++) {
      const d = c[f];
      oo.call(i, d) && s(i[d], d);
    }
  }
  return r;
}
const Ka = (e, t, n, { allOwnKeys: r } = {}) => (mt(
  t,
  (s, a) => {
    n && $(s) ? Object.defineProperty(e, a, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: ns(s, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, a, {
      __proto__: null,
      value: s,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), Ga = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ja = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Qa = (e, t, n, r) => {
  let s, a, o;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && we(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Za = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, eo = (e) => {
  if (!e) return null;
  if (Ne(e)) return e;
  let t = e.length;
  if (!is(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, to = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && we(Uint8Array)), no = (e, t) => {
  const r = (e && e[dt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, ro = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, so = J("HTMLFormElement"), ao = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, s) {
  return r.toUpperCase() + s;
}), { propertyIsEnumerable: oo } = Object.prototype, io = J("RegExp"), fs = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  mt(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, co = (e) => {
  fs(e, (t, n) => {
    if ($(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if ($(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, lo = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return Ne(e) ? r(e) : r(String(e).split(t)), n;
}, fo = () => {
}, uo = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function mo(e) {
  return !!(e && $(e.append) && e[rs] === "FormData" && e[dt]);
}
const po = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (Ye(r)) {
      if (t.has(r))
        return;
      if (Xe(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        let s;
        if (ja(r)) {
          s = [];
          for (const a of r) {
            const o = n(a);
            !ke(o) && s.push(o);
          }
        } else
          s = Ne(r) ? [] : {}, mt(r, (a, o) => {
            const i = n(a);
            !ke(i) && (s[o] = i);
          });
        return t.delete(r), s;
      }
    }
    return r;
  };
  return n(e);
}, ho = J("AsyncFunction"), go = (e) => e && (Ye(e) || $(e)) && $(e.then) && $(e.catch), us = ((e, t) => e ? setImmediate : t ? ((n, r) => (Ce.addEventListener(
  "message",
  ({ source: s, data: a }) => {
    s === Ce && a === n && r.length && r.shift()();
  },
  !1
), (s) => {
  r.push(s), Ce.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", $(Ce.postMessage)), yo = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ce) : typeof process < "u" && process.nextTick || us, ds = (e) => e != null && $(e[dt]), bo = (e) => e != null && lt(e, dt) && ds(e), l = {
  isArray: Ne,
  isArrayBuffer: os,
  isBuffer: Xe,
  isFormData: Ha,
  isArrayBufferView: Ra,
  isString: La,
  isNumber: is,
  isBoolean: Ta,
  isObject: Ye,
  isPlainObject: Ot,
  isEmptyObject: Na,
  isReadableStream: Wa,
  isRequest: $a,
  isResponse: Va,
  isHeaders: Xa,
  isUndefined: ke,
  isDate: ka,
  isFile: Fa,
  isReactNativeBlob: Ia,
  isReactNative: Da,
  isBlob: Ma,
  isRegExp: io,
  isFunction: $,
  isStream: Ua,
  isURLSearchParams: qa,
  isTypedArray: to,
  isFileList: za,
  forEach: mt,
  merge: on,
  extend: Ka,
  trim: Ya,
  stripBOM: Ga,
  inherits: Ja,
  toFlatObject: Qa,
  kindOf: Tn,
  kindOfTest: J,
  endsWith: Za,
  toArray: eo,
  forEachEntry: no,
  matchAll: ro,
  isHTMLForm: so,
  hasOwnProperty: ct,
  hasOwnProp: ct,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: lt,
  getSafeProp: Ca,
  toSafeFlatObject: Pa,
  reduceDescriptors: fs,
  freezeMethods: co,
  toObjectSet: lo,
  toCamelCase: ao,
  noop: fo,
  toFiniteNumber: uo,
  findKey: cs,
  global: Ce,
  isContextDefined: ls,
  isSpecCompliantForm: mo,
  toJSONObject: po,
  isAsyncFn: ho,
  isThenable: go,
  setImmediate: us,
  asap: yo,
  isIterable: ds,
  isSafeIterable: bo
}, wo = l.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), vo = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim();
    const i = l.hasOwnProp(t, n);
    !n || i && l.hasOwnProp(wo, n) || (n === "set-cookie" ? i ? t[n].push(r) : t[n] = [r] : t[n] = i ? t[n] + ", " + r : r);
  }), t;
};
function Eo(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const xo = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), _o = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Nn(e, t) {
  return l.isArray(e) ? e.map((n) => Nn(n, t)) : Eo(String(e).replace(t, ""));
}
const Oo = (e) => Nn(e, xo), So = (e) => Nn(e, _o);
function ms(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return l.forEach(e.toJSON(), (n, r) => {
    t[r] = So(n);
  }), t;
}
const ar = Symbol("internals");
function Ze(e) {
  return e && String(e).trim().toLowerCase();
}
function St(e) {
  return e === !1 || e == null ? e : l.isArray(e) ? e.map(St) : Oo(String(e));
}
function Ao(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Co = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Vt(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function Po(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let n = "";
  for (let r = 1; r < t; r++) {
    const s = e.charCodeAt(r);
    if (s === 34 || s === 92 && (r += 1, r >= t))
      return e;
    n += e[r];
  }
  return n;
}
function Ro(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, s = !1, a = !1;
  function o(i) {
    const c = Vt(n.slice(r, i)), f = c.indexOf("=");
    if (f < 1)
      return;
    const d = Vt(c.slice(0, f));
    if (!Co.test(d))
      return;
    const m = d.toLowerCase();
    if (m === "__proto__" || m === "constructor" || m === "prototype")
      return;
    const h = Vt(c.slice(f + 1));
    t[m] = Po(h);
  }
  for (let i = 0; i < n.length; i++) {
    const c = n.charCodeAt(i);
    s ? a ? a = !1 : c === 92 ? a = !0 : c === 34 && (s = !1) : c === 34 ? s = !0 : (c === 44 || c === 59) && (o(i), r = i + 1);
  }
  return o(n.length), t;
}
const Lo = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xt(e, t, n, r, s) {
  if (l.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!l.isString(t)) {
    if (l.isString(r))
      return t.indexOf(r) !== -1;
    if (l.isRegExp(r))
      return r.test(t);
  }
}
function To(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function No(e, t) {
  const n = l.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(s, a, o) {
        return this[r].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
class U {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function a(i, c, f) {
      const d = Ze(c);
      if (!d)
        return;
      const m = l.findKey(s, d);
      (!m || s[m] === void 0 || f === !0 || f === void 0 && s[m] !== !1) && (s[m || c] = St(i));
    }
    const o = (i, c) => l.forEach(i, (f, d) => a(f, d, c));
    if (l.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (l.isString(t) && (t = t.trim()) && !Lo(t))
      o(vo(t), n);
    else if (l.isObject(t) && l.isSafeIterable(t)) {
      let i = /* @__PURE__ */ Object.create(null), c, f;
      for (const d of t) {
        if (!l.isArray(d))
          throw new TypeError("Object iterator must return a key-value pair");
        f = d[0], l.hasOwnProp(i, f) ? (c = i[f], i[f] = l.isArray(c) ? [...c, d[1]] : [c, d[1]]) : i[f] = d[1];
      }
      o(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Ze(t), t) {
      const r = l.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ao(s);
        if (l.isFunction(n))
          return n.call(this, s, r);
        if (l.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ze(t), t) {
      const r = l.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (o = Ze(o), o) {
        const i = l.findKey(r, o);
        i && (!n || Xt(r, r[i], i, n)) && (delete r[i], s = !0);
      }
    }
    return l.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Xt(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return l.forEach(this, (s, a) => {
      const o = l.findKey(r, a);
      if (o) {
        n[o] = St(s), delete n[a];
        return;
      }
      const i = t ? To(a) : String(a).trim();
      i !== a && delete n[a], n[i] = St(s), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return l.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && l.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    const t = this.get("set-cookie");
    return l.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return Ro(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ar] = this[ar] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const i = Ze(o);
      r[i] || (No(s, o), r[i] = !0);
    }
    return l.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
U.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
l.reduceDescriptors(U.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
l.freezeMethods(U);
const Lt = "[REDACTED ****]";
function ko(e) {
  if (l.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (l.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Fo(e, t) {
  const n = new Set(t.map((a) => String(a).toLowerCase())), r = [], s = (a) => {
    if (a === null || typeof a != "object" || l.isBuffer(a)) return a;
    if (r.indexOf(a) !== -1) return;
    a instanceof U && (a = a.toJSON()), r.push(a);
    let o;
    if (l.isArray(a))
      o = [], a.forEach((i, c) => {
        const f = s(i);
        l.isUndefined(f) || (o[c] = f);
      });
    else {
      if (!l.isPlainObject(a) && ko(a))
        return r.pop(), a;
      o = /* @__PURE__ */ Object.create(null);
      for (const [i, c] of Object.entries(a)) {
        const f = n.has(i.toLowerCase()) ? Lt : s(c);
        l.isUndefined(f) || (o[i] = f);
      }
    }
    return r.pop(), o;
  };
  return s(e);
}
function or(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function Io(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? or(n.message) : or(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
class g extends Error {
  static from(t, n, r, s, a, o) {
    let i = t.message;
    !i && l.isArray(t.errors) && t.errors.length && (i = Io(t));
    const c = new g(i, n || t.code, r, s, a);
    return Object.defineProperty(c, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), c.name = t.name, t.status != null && c.status == null && (c.status = t.status), o && Object.assign(c, o), c;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, s, a) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), s && (this.request = s), a && (this.response = a, this.status = a.status);
  }
  toJSON() {
    const t = this.config, n = t && l.hasOwnProp(t, "redact") ? t.redact : void 0, r = l.isArray(n) && n.length > 0 ? Fo(t, n) : l.toJSONObject(t);
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: r,
      code: this.code,
      status: this.status
    };
  }
}
g.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
g.ERR_BAD_OPTION = "ERR_BAD_OPTION";
g.ECONNABORTED = "ECONNABORTED";
g.ETIMEDOUT = "ETIMEDOUT";
g.ECONNREFUSED = "ECONNREFUSED";
g.ERR_NETWORK = "ERR_NETWORK";
g.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
g.ERR_DEPRECATED = "ERR_DEPRECATED";
g.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
g.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
g.ERR_CANCELED = "ERR_CANCELED";
g.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
g.ERR_INVALID_URL = "ERR_INVALID_URL";
g.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Do = null, ps = 100;
function cn(e) {
  return l.isPlainObject(e) || l.isArray(e);
}
function hs(e) {
  return l.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Yt(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = hs(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Mo(e) {
  return l.isArray(e) && !e.some(cn);
}
const zo = l.toFlatObject(l, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function zt(e, t, n) {
  if (!l.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const r = (p, y) => {
    const b = l.getSafeProp(n, p);
    return l.isUndefined(b) ? y : b;
  }, s = r("metaTokens", !0), a = r("visitor") || _, o = r("dots", !1), i = r("indexes", !1), c = r("Blob") || typeof Blob < "u" && Blob, f = r("maxDepth", ps), d = c && l.isSpecCompliantForm(t), m = [];
  if (!l.isFunction(a))
    throw new TypeError("visitor must be a function");
  function h(p) {
    if (p === null) return "";
    if (l.isDate(p))
      return p.toISOString();
    if (l.isBoolean(p))
      return p.toString();
    if (!d && l.isBlob(p))
      throw new g("Blob is not supported. Use a Buffer instead.");
    if (l.isArrayBuffer(p) || l.isTypedArray(p)) {
      if (d && typeof c == "function")
        return new c([p]);
      throw new g(
        "Blob is not supported. Use a Buffer instead.",
        g.ERR_NOT_SUPPORT
      );
    }
    return p;
  }
  function v(p) {
    if (p > f)
      throw new g(
        "Object is too deeply nested (" + p + " levels). Max depth: " + f,
        g.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function x(p, y) {
    if (f === 1 / 0)
      return JSON.stringify(p);
    const b = [];
    return JSON.stringify(p, function(k, P) {
      if (!l.isObject(P))
        return P;
      for (; b.length && b[b.length - 1] !== this; )
        b.pop();
      return b.push(P), v(y + b.length - 1), P;
    });
  }
  function _(p, y, b) {
    let C = p;
    if (l.isReactNative(t) && l.isReactNativeBlob(p))
      return t.append(Yt(b, y, o), h(p)), !1;
    if (p && !b && typeof p == "object") {
      if (l.endsWith(y, "{}"))
        y = s ? y : y.slice(0, -2), p = x(p, 1);
      else if (l.isArray(p) && Mo(p) || (l.isFileList(p) || l.endsWith(y, "[]")) && (C = l.toArray(p)))
        return y = hs(y), C.forEach(function(P, H) {
          !(l.isUndefined(P) || P === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Yt([y], H, o) : i === null ? y : y + "[]",
            h(P)
          );
        }), !1;
    }
    return cn(p) ? !0 : (t.append(Yt(b, y, o), h(p)), !1);
  }
  const A = Object.assign(zo, {
    defaultVisitor: _,
    convertValue: h,
    isVisitable: cn
  });
  function u(p, y, b = 0) {
    if (!l.isUndefined(p)) {
      if (v(b), m.indexOf(p) !== -1)
        throw new Error("Circular reference detected in " + y.join("."));
      m.push(p), l.forEach(p, function(k, P) {
        (!(l.isUndefined(k) || k === null) && a.call(t, k, l.isString(P) ? P.trim() : P, y, A)) === !0 && u(k, y ? y.concat(P) : [P], b + 1);
      }), m.pop();
    }
  }
  if (!l.isObject(e))
    throw new TypeError("data must be an object");
  return u(e), t;
}
function ir(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function kn(e, t) {
  this._pairs = [], e && zt(e, this, t);
}
const gs = kn.prototype;
gs.append = function(t, n) {
  this._pairs.push([t, n]);
};
gs.toString = function(t) {
  const n = t ? (r) => t.call(this, r, ir) : ir;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function jo(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ys(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = l.isFunction(n) ? {
    serialize: n
  } : n, s = l.getSafeProp(r, "encode") || jo, a = l.getSafeProp(r, "serialize");
  let o;
  if (a ? o = a(t, r) : o = l.isURLSearchParams(t) ? t.toString() : new kn(t, r).toString(s), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
const et = Symbol("internals");
function bs(e) {
  return e ? e.length : 0;
}
function cr(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; )
      e.pop();
}
function tt(e, t) {
  const n = e.handlers, r = bs(n);
  n !== t.handlersRef ? (t.handlersRef = n, t.handlerEntries.clear()) : r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(a, o) {
    n[a.index] !== a.handler && t.handlerEntries.delete(o);
  }) : t.handlerEntries.clear()), t.handlersLength = r;
}
class lr {
  constructor() {
    this.handlers = [], this[et] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    const s = {
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }, a = this[et];
    this.handlers == null && (this.handlers = []), tt(this, a);
    const o = a.nextId++;
    return this.handlers.push(s), a.handlerEntries.set(o, {
      handler: s,
      index: this.handlers.length - 1
    }), a.handlersLength = this.handlers.length, o;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    const n = this[et];
    tt(this, n);
    const r = n.handlerEntries.get(t);
    if (r) {
      if (n.handlerEntries.delete(t), this.handlers[r.index] !== r.handler)
        return;
      this.handlers[r.index] = null, n.iterationDepth || (cr(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], tt(this, this[et]));
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    const n = this[et];
    tt(this, n), n.iterationDepth++;
    try {
      l.forEach(this.handlers, function(s) {
        s !== null && t(s);
      });
    } finally {
      --n.iterationDepth || (tt(this, n), cr(this.handlers), n.handlersLength = bs(this.handlers));
    }
  }
}
const Fn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Uo = typeof URLSearchParams < "u" ? URLSearchParams : kn, Bo = typeof FormData < "u" ? FormData : null, Ho = typeof Blob < "u" ? Blob : null, qo = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Uo,
    FormData: Bo,
    Blob: Ho
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, In = typeof window < "u" && typeof document < "u", ln = typeof navigator == "object" && navigator || void 0, Wo = In && (!ln || ["ReactNative", "NativeScript", "NS"].indexOf(ln.product) < 0), $o = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Vo = In && window.location.href || "http://localhost", Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: In,
  hasStandardBrowserEnv: Wo,
  hasStandardBrowserWebWorkerEnv: $o,
  navigator: ln,
  origin: Vo
}, Symbol.toStringTag, { value: "Module" })), D = {
  ...Xo,
  ...qo
};
function Yo(e, t) {
  return zt(e, new D.classes.URLSearchParams(), {
    visitor: function(n, r, s, a) {
      return D.isNode && l.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const fr = ps;
function ws(e) {
  if (e > fr)
    throw new g(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + fr,
      g.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function Ko(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    ws(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function Go(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function vs(e) {
  function t(n, r, s, a) {
    ws(a);
    let o = n[a++];
    if (o === "__proto__") return !0;
    const i = Number.isFinite(+o), c = a >= n.length;
    return o = !o && l.isArray(s) ? s.length : o, c ? (l.hasOwnProp(s, o) ? s[o] = l.isArray(s[o]) ? s[o].concat(r) : [s[o], r] : s[o] = r, !i) : ((!l.hasOwnProp(s, o) || !l.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && l.isArray(s[o]) && (s[o] = Go(s[o])), !i);
  }
  if (l.isFormData(e) && l.isFunction(e.entries)) {
    const n = {};
    return l.forEachEntry(e, (r, s) => {
      t(Ko(r), s, n, 0);
    }), n;
  }
  return null;
}
const Es = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), je = (e, t) => e != null && l.hasOwnProp(e, t) ? e[t] : void 0;
function Jo(e, t, n) {
  if (l.isString(e))
    try {
      return (t || JSON.parse)(e), l.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const pt = {
  transitional: Fn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = l.isObject(t);
      if (a && l.isHTMLForm(t) && (t = new FormData(t)), l.isFormData(t))
        return s ? JSON.stringify(vs(t)) : t;
      if (l.isArrayBuffer(t) || l.isBuffer(t) || l.isStream(t) || l.isFile(t) || l.isBlob(t) || l.isReadableStream(t))
        return t;
      if (l.isArrayBufferView(t))
        return t.buffer;
      if (l.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (a) {
        const c = je(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Yo(t, c).toString();
        if ((i = l.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = je(this, "env"), d = f && f.FormData;
          return zt(
            i ? { "files[]": t } : t,
            d && new d(),
            c
          );
        }
      }
      return a || s ? (n.setContentType("application/json", !1), Jo(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = je(this, "transitional") || pt.transitional, r = n && n.forcedJSONParsing, s = je(this, "responseType"), a = s === "json";
      if (l.isResponse(t) || l.isReadableStream(t))
        return t;
      if (t && l.isString(t) && (r && !s || a)) {
        const i = !(n && n.silentJSONParsing) && a;
        try {
          return JSON.parse(t, je(this, "parseReviver"));
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError" ? g.from(c, g.ERR_BAD_RESPONSE, this, null, je(this, "response")) : c;
        }
      }
      return t;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
l.forEach(Es, (e) => {
  pt.headers[e] = {};
});
function Kt(e, t) {
  const n = this || pt, r = t || n, s = U.from(r.headers);
  let a = r.data;
  return l.forEach(e, function(i) {
    a = i.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function xs(e) {
  return !!(e && e.__CANCEL__);
}
class ht extends g {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", g.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
}
function _s(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? g.ERR_BAD_REQUEST : g.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const Qo = /[\t\n\r]/g;
function Os(e) {
  if (typeof e != "string")
    return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t).replace(Qo, "");
}
function Gt(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Zo(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const f = Date.now(), d = r[a];
    o || (o = f), n[s] = c, r[s] = f;
    let m = a, h = 0;
    for (; m !== s; )
      h += n[m++], m = m % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), f - o < t)
      return;
    const v = d && f - d;
    return v ? Math.round(h * 1e3 / v) : void 0;
  };
}
function ei(e, t) {
  let n = 0, r = 1e3 / t, s, a;
  const o = (d, m = Date.now()) => {
    n = m, s = null, a && (clearTimeout(a), a = null), e(...d);
  };
  return [(...d) => {
    const m = Date.now(), h = m - n;
    h >= r ? o(d, m) : (s = d, a || (a = setTimeout(() => {
      a = null, o(s);
    }, r - h)));
  }, () => s && o(s), (...d) => o(d)];
}
const Tt = (e, t, n = 3) => {
  let r = 0;
  const s = Zo(50, 250);
  return ei((a) => {
    if (!a || !l.isNumber(a.loaded))
      return;
    const o = a.loaded, i = a.lengthComputable ? a.total : void 0, c = Math.max(0, i != null ? Math.min(o, i) : o), f = Math.max(0, c - r), d = s(f);
    r = Math.max(r, c);
    const m = {
      loaded: c,
      total: i,
      progress: i ? c / i : void 0,
      bytes: f,
      rate: d || void 0,
      estimated: d && i ? (i - c) / d : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, n);
}, ur = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, dr = (e, t = l.asap) => (...n) => t(() => e(...n)), ti = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, D.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(D.origin),
  D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)
) : () => !0, ni = D.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, a, o) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      l.isNumber(n) && i.push(`expires=${new Date(n).toUTCString()}`), l.isString(r) && i.push(`path=${r}`), l.isString(s) && i.push(`domain=${s}`), a === !0 && i.push("secure"), l.isString(o) && i.push(`SameSite=${o}`), document.cookie = i.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let n = 0; n < t.length; n++) {
        const r = t[n].replace(/^\s+/, ""), s = r.indexOf("=");
        if (s !== -1 && r.slice(0, s) === e)
          try {
            return decodeURIComponent(r.slice(s + 1));
          } catch {
            return r.slice(s + 1);
          }
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ri(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function si(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const ai = /^https?:(?!\/\/)/i;
function oi(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${Lt}`);
}
function ii(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${Lt}@`), n = t.indexOf("#"), s = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${Lt}`
  );
  return n === -1 ? s : `${s}#${oi(t.slice(n + 1))}`;
}
function mr(e, t) {
  if (typeof e == "string") {
    const n = Os(e);
    if (ai.test(n))
      throw new g(
        `Invalid URL ${JSON.stringify(ii(n))}: missing "//" after protocol`,
        g.ERR_INVALID_URL,
        t
      );
  }
}
function Ss(e, t, n, r) {
  mr(t, r);
  let s = !ri(t);
  return e && (s || n === !1) ? (mr(e, r), si(e, t)) : t;
}
const pr = (e) => e instanceof U ? { ...e } : e, ci = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  )
) : Object.keys(e);
function Fe(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function r(d, m, h, v) {
    return l.isPlainObject(d) && l.isPlainObject(m) ? l.merge.call({ caseless: v }, d, m) : l.isPlainObject(m) ? l.merge({}, m) : l.isArray(m) ? m.slice() : m;
  }
  function s(d, m, h, v) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(d))
        return r(void 0, d, h, v);
    } else return r(d, m, h, v);
  }
  function a(d, m) {
    if (!l.isUndefined(m))
      return r(void 0, m);
  }
  function o(d, m) {
    if (l.isUndefined(m)) {
      if (!l.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, m);
  }
  function i(d) {
    const m = l.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!l.isUndefined(m))
      if (l.isPlainObject(m)) {
        if (l.hasOwnProp(m, d))
          return m[d];
      } else
        return;
    const h = l.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (l.isPlainObject(h) && l.hasOwnProp(h, d))
      return h[d];
  }
  function c(d, m, h) {
    if (l.hasOwnProp(t, h))
      return r(d, m);
    if (l.hasOwnProp(e, h))
      return r(void 0, d);
  }
  const f = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutErrorMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (d, m, h) => s(pr(d), pr(m), h, !0)
  };
  return l.forEach(ci({ ...e, ...t }), function(m) {
    if (m === "__proto__" || m === "constructor" || m === "prototype") return;
    const h = l.hasOwnProp(f, m) ? f[m] : s, v = l.hasOwnProp(e, m) ? e[m] : void 0, x = l.hasOwnProp(t, m) ? t[m] : void 0, _ = h(v, x, m);
    l.isUndefined(_) && h !== c || (n[m] = _);
  }), l.hasOwnProp(t, "validateStatus") && l.isUndefined(t.validateStatus) && i("validateStatusUndefinedResolves") === !1 && (l.hasOwnProp(e, "validateStatus") ? n.validateStatus = r(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const li = ["content-type", "content-length"];
function fi(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, s]) => {
    li.includes(r.toLowerCase()) && e.set(r, s);
  });
}
const ui = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
);
function As(e) {
  const t = Fe({}, e), n = (h) => l.hasOwnProp(t, h) ? t[h] : void 0, r = n("data");
  let s = n("withXSRFToken");
  const a = n("xsrfHeaderName"), o = n("xsrfCookieName");
  let i = n("headers");
  const c = n("auth"), f = n("baseURL"), d = n("allowAbsoluteUrls"), m = n("url");
  if (t.headers = i = U.from(i), t.url = ys(
    Ss(f, m, d, t),
    n("params"),
    n("paramsSerializer")
  ), c) {
    const h = l.getSafeProp(c, "username") || "", v = l.getSafeProp(c, "password") || "";
    try {
      i.set(
        "Authorization",
        "Basic " + btoa(h + ":" + (v ? ui(v) : ""))
      );
    } catch (x) {
      throw g.from(x, g.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (l.isFormData(r)) {
    const h = l.getSafeProp(r, "getHeaders");
    D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv || l.isReactNative(r) ? i.setContentType(void 0) : l.isFunction(h) && fi(i, h.call(r), n("formDataHeaderPolicy"));
  }
  if (D.hasStandardBrowserEnv && (l.isFunction(s) && (s = s(t)), s === !0 || s == null && ti(t.url))) {
    const v = a && o && ni.read(o);
    v && i.set(a, v);
  }
  return t;
}
const di = typeof XMLHttpRequest < "u", mi = di && function(e) {
  return new Promise(function(n, r) {
    const s = As(e);
    let a = s.data;
    const o = U.from(s.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: f } = s, d, m, h, v, x, _;
    function A() {
      v && v(), x && x(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let u = new XMLHttpRequest();
    u.open(s.method.toUpperCase(), s.url, !0), u.timeout = s.timeout;
    function p(b) {
      if (!u)
        return;
      if (u.status === 0 && (Gt(Os(s.url)) || Gt(D.origin)) !== "file" && !(u.responseURL && u.responseURL.startsWith("file:"))) {
        r(new g("Request aborted", g.ECONNABORTED, e, u)), A(), u = null;
        return;
      }
      try {
        b ? _ && _(b) : x && x();
      } catch (H) {
        setTimeout(() => {
          throw H;
        });
      }
      if (!u)
        return;
      const C = U.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), P = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: C,
        config: e,
        request: u
      };
      _s(
        function(E) {
          n(E), A();
        },
        function(E) {
          r(E), A();
        },
        P
      ), u = null;
    }
    "onloadend" in u ? u.onloadend = p : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.startsWith("file:")) || setTimeout(p);
    }, u.onabort = function() {
      u && (r(new g("Request aborted", g.ECONNABORTED, e, u)), A(), u = null);
    }, u.onerror = function(C) {
      const k = C && C.message ? C.message : "Network Error", P = new g(k, g.ERR_NETWORK, e, u);
      P.event = C || null, r(P), A(), u = null;
    }, u.ontimeout = function() {
      let C = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const k = s.transitional || Fn;
      s.timeoutErrorMessage && (C = s.timeoutErrorMessage), r(
        new g(
          C,
          k.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
          e,
          u
        )
      ), A(), u = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in u && l.forEach(ms(o), function(C, k) {
      u.setRequestHeader(k, C);
    }), l.isUndefined(s.withCredentials) || (u.withCredentials = !!s.withCredentials), i && i !== "json" && (u.responseType = s.responseType), f && ([h, x, _] = Tt(
      f,
      !0
    ), u.addEventListener("progress", h)), c && u.upload && ([m, v] = Tt(c), u.upload.addEventListener("progress", m), u.upload.addEventListener("loadend", v)), (s.cancelToken || s.signal) && (d = (b) => {
      u && (r(!b || b.type ? new ht(null, e, u) : b), u.abort(), A(), u = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const y = Gt(s.url);
    if (y && !D.protocols.includes(y)) {
      r(
        new g(
          "Unsupported protocol " + y + ":",
          g.ERR_BAD_REQUEST,
          e
        )
      ), A();
      return;
    }
    u.send(a || null);
  });
}, pi = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const s = function(c) {
    if (!r) {
      r = !0, o();
      const f = c instanceof Error ? c : this.reason;
      n.abort(
        f instanceof g ? f : new ht(f instanceof Error ? f.message : f)
      );
    }
  };
  let a = t && setTimeout(() => {
    a = null, s(new g(`timeout of ${t}ms exceeded`, g.ETIMEDOUT));
  }, t);
  const o = () => {
    e && (a && clearTimeout(a), a = null, e.forEach((c) => {
      c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
    }), e = null);
  };
  e.forEach((c) => {
    if (!r) {
      if (c.aborted) {
        s.call(c);
        return;
      }
      c.addEventListener("abort", s, { once: !0 });
    }
  });
  const { signal: i } = n;
  return i.unsubscribe = () => l.asap(o), i;
}, hi = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, gi = async function* (e, t) {
  for await (const n of yi(e))
    yield* hi(n, t);
}, yi = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, hr = (e, t, n, r) => {
  const s = gi(e, t);
  let a = 0, o, i = (c) => {
    o || (o = !0, r && r(c));
  };
  return new ReadableStream(
    {
      async pull(c) {
        try {
          const { done: f, value: d } = await s.next();
          if (f) {
            i(), c.close();
            return;
          }
          let m = d.byteLength;
          if (n) {
            let h = a += m;
            n(h);
          }
          c.enqueue(new Uint8Array(d));
        } catch (f) {
          throw i(f), f;
        }
      },
      cancel(c) {
        return i(c), s.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
}, gr = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Cs = (e, t, n) => t + 2 < n && gr(e.charCodeAt(t + 1)) && gr(e.charCodeAt(t + 2)), yr = (e) => e <= 57 ? e - 48 : (e & 223) - 55, bi = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, wi = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, vi = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, Ei = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, xi = (e) => {
  const t = e.length;
  let n = 0, r = 0, s = !1;
  for (let a = 0; a < t; a++) {
    let o = e.charCodeAt(a);
    if (o === 37 && Cs(e, a, t) && (o = yr(e.charCodeAt(a + 1)) * 16 + yr(e.charCodeAt(a + 2)), a += 2), !wi(o)) {
      if (o === 61) {
        r++;
        continue;
      }
      if (!bi(o) || r > 0) {
        s = !0;
        continue;
      }
      n++;
    }
  }
  return s || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? Ei(e) : vi(n);
}, _i = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const n = e.indexOf(",");
  if (n < 0) return 0;
  const r = e.slice(5, n), s = e.slice(n + 1);
  if (/;base64/i.test(r))
    return t(s);
  let o = 0;
  for (let i = 0, c = s.length; i < c; i++) {
    const f = s.charCodeAt(i);
    if (f === 37 && Cs(s, i, c))
      o += 1, i += 2;
    else if (f < 128)
      o += 1;
    else if (f < 2048)
      o += 2;
    else if (f >= 55296 && f <= 56319 && i + 1 < c) {
      const d = s.charCodeAt(i + 1);
      d >= 56320 && d <= 57343 ? (o += 4, i++) : o += 3;
    } else
      o += 3;
  }
  return o;
};
function Oi(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return _i(
    t === -1 ? e : e.slice(0, t),
    xi
  );
}
const Dn = "1.20.0", br = 64 * 1024, Si = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: xt } = l, Ai = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), wr = (e) => {
  if (!l.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, vr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ci = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, Pi = (e) => {
  const t = l.global !== void 0 && l.global !== null ? l.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = l.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: s, Request: a, Response: o } = e, i = s ? xt(s) : typeof fetch == "function", c = xt(a), f = xt(o);
  if (!i)
    return !1;
  const d = i && xt(n), m = i && (typeof r == "function" ? /* @__PURE__ */ ((u) => (p) => u.encode(p))(new r()) : async (u) => new Uint8Array(await new a(u).arrayBuffer())), h = c && d && vr(() => {
    let u = !1;
    const p = new a(D.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return u = !0, "half";
      }
    }), y = p.headers.has("Content-Type");
    return p.body != null && p.body.cancel(), u && !y;
  }), v = f && d && vr(() => l.isReadableStream(new o("").body)), x = {
    stream: v && ((u) => u.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((u) => {
    !x[u] && (x[u] = (p, y) => {
      let b = p && p[u];
      if (b)
        return b.call(p);
      throw new g(
        `Response type '${u}' is not supported`,
        g.ERR_NOT_SUPPORT,
        y
      );
    });
  });
  const _ = async (u) => {
    if (u == null)
      return 0;
    if (l.isBlob(u))
      return u.size;
    if (l.isSpecCompliantForm(u))
      return (await new a(D.origin, {
        method: "POST",
        body: u
      }).arrayBuffer()).byteLength;
    if (l.isArrayBufferView(u) || l.isArrayBuffer(u))
      return u.byteLength;
    if (l.isURLSearchParams(u) && (u = u + ""), l.isString(u))
      return (await m(u)).byteLength;
  }, A = async (u, p) => {
    const y = l.toFiniteNumber(u.getContentLength());
    return y ?? _(p);
  };
  return async (u) => {
    let {
      url: p,
      method: y,
      data: b,
      signal: C,
      cancelToken: k,
      timeout: P,
      onDownloadProgress: H,
      onUploadProgress: E,
      responseType: S,
      headers: F,
      withCredentials: L = "same-origin",
      fetchOptions: me,
      maxContentLength: ne,
      maxBodyLength: vt,
      maxRedirects: pa
    } = As(u);
    const Ge = l.isNumber(ne) && ne > -1, Wt = l.isNumber(vt) && vt > -1, ha = (R) => l.hasOwnProp(u, R) ? u[R] : void 0;
    let Qn = s || fetch;
    S = S ? (S + "").toLowerCase() : "text";
    let pe = pi(
      [C, k && k.toAbortSignal()],
      P
    ), M = null;
    const Oe = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let ze, Je = null;
    const Zn = () => new g(
      "Request body larger than maxBodyLength limit",
      g.ERR_BAD_REQUEST,
      u,
      M
    );
    try {
      let R;
      const K = ha("auth");
      if (K) {
        const O = l.getSafeProp(K, "username") || "", z = l.getSafeProp(K, "password") || "";
        R = {
          username: O,
          password: z
        };
      }
      if (Ci(p)) {
        const O = new URL(p, D.origin);
        if (!R && (O.username || O.password)) {
          const z = wr(O.username), he = wr(O.password);
          R = {
            username: z,
            password: he
          };
        }
        (O.username || O.password) && (O.username = "", O.password = "", p = O.href);
      }
      if (R && (F.delete("authorization"), F.set(
        "Authorization",
        "Basic " + btoa(Ai((R.username || "") + ":" + (R.password || "")))
      )), Ge && typeof p == "string" && p.startsWith("data:") && Oi(p) > ne)
        throw new g(
          "maxContentLength size of " + ne + " exceeded",
          g.ERR_BAD_RESPONSE,
          u,
          M
        );
      if (Wt && y !== "get" && y !== "head") {
        const O = await _(b);
        if (typeof O == "number" && isFinite(O) && (ze = O, O > vt))
          throw Zn();
      }
      const Et = Wt && (l.isReadableStream(b) || l.isStream(b)), er = (O, z, he) => hr(
        O,
        br,
        (Se) => {
          if (Wt && Se > vt)
            throw Je = Zn();
          z && z(Se);
        },
        he
      );
      if (h && y !== "get" && y !== "head" && (E || Et)) {
        if (ze = ze ?? await A(F, b), ze !== 0 || Et) {
          let O = new a(p, {
            method: "POST",
            body: b,
            duplex: "half"
          }), z;
          if (l.isFormData(b) && (z = O.headers.get("content-type")) && F.setContentType(z), O.body) {
            const [he, Se] = E && ur(
              ze,
              Tt(dr(E))
            ) || [];
            b = er(O.body, he, Se);
          }
        }
      } else if (Et && !c && d && y !== "get" && y !== "head")
        b = er(b);
      else if (Et && c && !h && y !== "get" && y !== "head")
        throw new g(
          "Stream request bodies are not supported by the current fetch implementation",
          g.ERR_NOT_SUPPORT,
          u,
          M
        );
      l.isString(L) || (L = L ? "include" : "omit");
      const ga = c && "credentials" in a.prototype;
      if (l.isFormData(b)) {
        const O = F.getContentType();
        O && /^multipart\/form-data/i.test(O) && !/boundary=/i.test(O) && F.delete("content-type");
      }
      F.set("User-Agent", "axios/" + Dn, !1);
      const Q = me == null ? me : Object.assign(/* @__PURE__ */ Object.create(null), me);
      Q && (delete Q.body, delete Q.headers, delete Q.method, delete Q.signal, delete Q.duplex, delete Q.credentials);
      const oe = Object.assign(/* @__PURE__ */ Object.create(null), Q, {
        signal: pe,
        method: y.toUpperCase(),
        headers: ms(F.normalize()),
        body: b,
        duplex: "half",
        credentials: ga ? L : void 0
      });
      c && (l.forEach(Si, (O, z) => {
        oe[z] === void 0 && (oe[z] = O);
      }), oe.signal === void 0 && (oe.signal = null), oe.body === void 0 && (oe.body = null)), pa === 0 && (oe.redirect = "manual", Q && (Q.redirect = "manual")), M = c && new a(p, oe);
      let ie = await (c ? Qn(M, Q) : Qn(p, oe));
      const tr = U.from(ie.headers);
      if (Ge) {
        const O = l.toFiniteNumber(tr.getContentLength());
        if (O != null && O > ne)
          throw new g(
            "maxContentLength size of " + ne + " exceeded",
            g.ERR_BAD_RESPONSE,
            u,
            M
          );
      }
      const $t = v && (S === "stream" || S === "response");
      if (v && ie.body && (H || Ge || $t && Oe)) {
        const O = {};
        ["status", "statusText", "headers"].forEach((Qe) => {
          O[Qe] = ie[Qe];
        });
        const z = l.toFiniteNumber(tr.getContentLength()), [he, Se] = H && ur(
          z,
          Tt(dr(H), !0)
        ) || [];
        let nr = 0;
        const ya = (Qe) => {
          if (Ge && (nr = Qe, nr > ne))
            throw new g(
              "maxContentLength size of " + ne + " exceeded",
              g.ERR_BAD_RESPONSE,
              u,
              M
            );
          he && he(Qe);
        };
        ie = new o(
          hr(ie.body, br, ya, () => {
            Se && Se(), Oe && Oe();
          }),
          O
        );
      }
      S = S || "text";
      let ce = await x[l.findKey(x, S) || "text"](
        ie,
        u
      );
      if (Ge && !v && !$t) {
        let O;
        if (ce != null && (typeof ce.byteLength == "number" ? O = ce.byteLength : typeof ce.size == "number" ? O = ce.size : typeof ce == "string" && (O = typeof r == "function" ? new r().encode(ce).byteLength : ce.length)), typeof O == "number" && O > ne)
          throw new g(
            "maxContentLength size of " + ne + " exceeded",
            g.ERR_BAD_RESPONSE,
            u,
            M
          );
      }
      return !$t && Oe && Oe(), await new Promise((O, z) => {
        _s(O, z, {
          data: ce,
          headers: U.from(ie.headers),
          status: ie.status,
          statusText: ie.statusText,
          config: u,
          request: M
        });
      });
    } catch (R) {
      if (Oe && Oe(), pe && pe.aborted && pe.reason instanceof g) {
        const K = pe.reason;
        throw K.config = u, M && (K.request = M), R !== K && Object.defineProperty(K, "cause", {
          __proto__: null,
          value: R,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      if (Je)
        throw M && !Je.request && (Je.request = M), Je;
      if (R instanceof g)
        throw M && !R.request && (R.request = M), R;
      if (R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message)) {
        const K = new g(
          "Network Error",
          g.ERR_NETWORK,
          u,
          M,
          R && R.response
        );
        throw Object.defineProperty(K, "cause", {
          __proto__: null,
          value: R.cause || R,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), K;
      }
      throw g.from(R, R && R.code, u, M, R && R.response);
    }
  };
}, Ri = /* @__PURE__ */ new Map(), Ps = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, a = [r, s, n];
  let o = a.length, i = o, c, f, d = Ri;
  for (; i--; )
    c = a[i], f = d.get(c), f === void 0 && d.set(c, f = i ? /* @__PURE__ */ new Map() : Pi(t)), d = f;
  return f;
};
Ps();
const Mn = {
  http: Do,
  xhr: mi,
  fetch: {
    get: Ps
  }
};
l.forEach(Mn, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const Er = (e) => `- ${e}`, Li = (e) => l.isFunction(e) || e === null || e === !1;
function Ti(e, t) {
  e = l.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let i;
    if (s = r, !Li(r) && (s = Mn[(i = String(r)).toLowerCase()], s === void 0))
      throw new g(`Unknown adapter '${i}'`);
    if (s && (l.isFunction(s) || (s = s.get(t))))
      break;
    a[i || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(a).map(
      ([c, f]) => `adapter ${c} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = n ? o.length > 1 ? `since :
` + o.map(Er).join(`
`) : " " + Er(o[0]) : "as no adapter specified";
    throw new g(
      "There is no suitable adapter to dispatch the request " + i,
      g.ERR_NOT_SUPPORT
    );
  }
  return s;
}
const Rs = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Ti,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Mn
};
function Jt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ht(null, e);
}
function Qt(e) {
  const t = l.toSafeFlatObject(e);
  return Jt(t), t.headers = U.from(l.getSafeProp(t, "headers")), t.data = Kt.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Rs.getAdapter(t.adapter || pt.adapter, t)(t).then(
    function(s) {
      Jt(t), t.response = s;
      try {
        s.data = Kt.call(t, t.transformResponse, s);
      } finally {
        delete t.response;
      }
      return s.headers = U.from(s.headers), s;
    },
    function(s) {
      if (!xs(s) && (Jt(t), s && s.response)) {
        t.response = s.response;
        try {
          s.response.data = Kt.call(
            t,
            t.transformResponse,
            s.response
          );
        } finally {
          delete t.response;
        }
        s.response.headers = U.from(s.response.headers);
      }
      return Promise.reject(s);
    }
  );
}
const jt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  jt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const xr = {};
jt.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + Dn + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, i) => {
    if (t === !1)
      throw new g(
        s(o, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !xr[o] && (xr[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, i) : !0;
  };
};
jt.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Ni(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      const i = e[a], c = i === void 0 || o(i, a, e);
      if (c !== !0)
        throw new g(
          "option " + a + " must be " + c,
          g.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + a, g.ERR_BAD_OPTION);
  }
}
const At = {
  assertOptions: Ni,
  validators: jt
}, j = At.validators;
class Re {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new lr(),
      response: new lr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error)
        try {
          let s = {};
          Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
          const a = s.stack;
          let o = "";
          if (typeof a == "string") {
            const i = a.indexOf(`
`);
            o = i === -1 ? "" : a.slice(i + 1);
          }
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const i = o.indexOf(`
`), c = i === -1 ? -1 : o.indexOf(`
`, i + 1), f = c === -1 ? "" : o.slice(c + 1);
            String(r.stack).endsWith(f) || (r.stack += `
` + o);
          }
        } catch {
        }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Fe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
    r !== void 0 && At.assertOptions(
      r,
      {
        silentJSONParsing: j.transitional(j.boolean),
        forcedJSONParsing: j.transitional(j.boolean),
        clarifyTimeoutError: j.transitional(j.boolean),
        legacyInterceptorReqResOrdering: j.transitional(j.boolean),
        advertiseZstdAcceptEncoding: j.transitional(j.boolean),
        validateStatusUndefinedResolves: j.transitional(j.boolean)
      },
      !1
    ), s != null && (l.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : At.assertOptions(
      s,
      {
        encode: j.function,
        serialize: j.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), At.assertOptions(
      n,
      {
        baseUrl: j.spelling("baseURL"),
        withXsrfToken: j.spelling("withXSRFToken")
      },
      !0
    ), n.method = (l.getSafeProp(n, "method") || l.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let o = a && l.merge(a.common, a[n.method]);
    a && l.forEach(Es.concat("common"), (x) => {
      delete a[x];
    }), n.headers = U.concat(o, a);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(_) {
      if (typeof _.runWhen == "function" && _.runWhen(n) === !1)
        return;
      c = c && _.synchronous;
      const A = n.transitional || Fn;
      A && A.legacyInterceptorReqResOrdering ? i.unshift(_.fulfilled, _.rejected) : i.push(_.fulfilled, _.rejected);
    });
    const f = [];
    this.interceptors.response.forEach(function(_) {
      f.push(_.fulfilled, _.rejected);
    });
    let d, m = 0, h;
    if (!c) {
      const x = [Qt.bind(this), void 0];
      for (x.unshift(...i), x.push(...f), h = x.length, d = Promise.resolve(n); m < h; )
        d = d.then(x[m++], x[m++]);
      return d;
    }
    h = i.length;
    let v = n;
    for (; m < h; ) {
      const x = i[m++], _ = i[m++];
      try {
        v = x ? x(v) : v;
      } catch (A) {
        if (!_) {
          d = Promise.reject(A);
          break;
        }
        try {
          const u = _.call(this, A);
          l.isThenable(u) && (d = Promise.resolve(u).then(
            () => Qt.call(this, v)
          ));
        } catch (u) {
          d = Promise.reject(u);
        }
        break;
      }
    }
    if (!d)
      try {
        d = Qt.call(this, v);
      } catch (x) {
        d = Promise.reject(x);
      }
    for (m = 0, h = f.length; m < h; )
      d = d.then(f[m++], f[m++]);
    return d;
  }
  getUri(t) {
    t = Fe(this.defaults, t);
    const n = Ss(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return ys(n, t.params, t.paramsSerializer);
  }
}
l.forEach(["delete", "get", "head", "options"], function(t) {
  Re.prototype[t] = function(n, r) {
    return this.request(
      Fe(r || {}, {
        method: t,
        url: n,
        data: r && l.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
l.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return function(a, o, i) {
      return this.request(
        Fe(i || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: a,
          data: o
        })
      );
    };
  }
  Re.prototype[t] = n(), t !== "query" && (Re.prototype[t + "Form"] = n(!0));
});
class zn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, i) {
      r.reason || (r.reason = new ht(a, o, i), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new zn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function ki(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Fi(e) {
  return l.isObject(e) && e.isAxiosError === !0;
}
const Ct = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ct).forEach(([e, t]) => {
  Ct[t] === void 0 && (Ct[t] = e);
});
function Ls(e) {
  const t = new Re(e), n = ns(Re.prototype.request, t);
  return l.extend(n, Re.prototype, t, { allOwnKeys: !0 }), l.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ls(Fe(e, s));
  }, n;
}
const I = Ls(pt);
I.Axios = Re;
I.CanceledError = ht;
I.CancelToken = zn;
I.isCancel = xs;
I.VERSION = Dn;
I.toFormData = zt;
I.AxiosError = g;
I.Cancel = I.CanceledError;
I.all = function(t) {
  return Promise.all(t);
};
I.spread = ki;
I.isAxiosError = Fi;
I.mergeConfig = Fe;
I.AxiosHeaders = U;
I.formToJSON = (e) => vs(l.isHTMLForm(e) ? new FormData(e) : e);
I.getAdapter = Rs.getAdapter;
I.HttpStatusCode = Ct;
I.default = I;
const Ii = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-BA_xmCrI.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing--OMHqyoY.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-onDJk7Of.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-HNjpSqS5.js")
  },
  url: {
    title: "URL",
    icon: "link",
    component: () => import("./Url-Ulr-3xU8.js")
  },
  src: {
    title: "SRC",
    icon: "link",
    component: () => import("./Src-BOtuO3Ef.js")
  }
}, Di = {
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
}, Mi = [
  "color"
];
class gt {
  create() {
    const t = this.createElement();
    return fn(t), t;
  }
}
class zi extends gt {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class ji extends gt {
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
class Ui extends gt {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class Bi extends gt {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class Hi extends gt {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const qi = (e) => {
  if (e === "div")
    return new ji();
  if (e === "a")
    return new zi();
  if (e === "p")
    return new Ui();
  if (e === "h1")
    return new Bi();
  if (e === "img")
    return new Hi();
  throw new Error("Invalid type");
}, yt = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, Ts = (e) => {
  yt("elementRemoved", { simplisitiId: e });
}, Ns = (e, t) => {
  yt("contentChange", { simplisitiId: e, content: t });
}, Wi = (e, t) => {
  yt("classChange", { simplisitiId: e, spClassList: t });
}, $i = (e, t) => {
  yt("styleChange", { simplisitiId: e, spStyleList: t });
}, Vi = (e, t) => {
  yt("attributeChange", { simplisitiId: e, attribute: t });
};
let le = null;
const ve = te(!1), We = te(!1), Ue = te(null), ye = te(null), Xi = (e, t) => {
  We.value || (We.value = !0, Ue.value = t, t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, ks = (e, t) => {
  We.value || (Ji(), t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, Yi = (e, t) => {
  We.value || t.classList.remove("sp-element__active"), e.preventDefault(), e.stopPropagation();
}, Ki = (e, t) => {
  var r, s;
  const n = t;
  ye.value !== null && (le == null || le.replaceWith(ye.value)), n.innerHTML.startsWith("-empty-") && (n.innerHTML = n.innerHTML.replace("-empty-", "")), (r = ye.value) != null && r.dataset.simplisitiid && Ts((s = ye.value) == null ? void 0 : s.dataset.simplisitiid), setTimeout(() => {
    n.classList.remove("sp-element__active"), (n.dataset.simplisitiid || n.id === "simplisiti-component-preview") && Ns(n.dataset.simplisitiid, n.innerHTML.replace(/sp-element__active/, "")), Gi(), e.preventDefault(), e.stopPropagation();
  }, 10);
}, Gi = () => {
  ve.value = !1, ye.value = null;
}, Ji = () => {
  document.querySelectorAll(".sp-element__active").forEach((t) => {
    t.classList.remove("sp-element__active");
  });
}, Qi = (e, t) => {
  le === null && (le = document.createElement("div"), le.id = "sp-element__placeholder", le.classList.add("sp-element__placeholder"));
  const n = Array.from(t.childNodes).filter((s) => s.nodeName != "#text"), r = tc(e, t);
  n[r] !== void 0 ? t.insertBefore(le, n[r]) : t.appendChild(le);
}, Zi = (e, t) => {
  if (ks(e, t), ve.value && t.nodeName !== "DIV") {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  ve.value && ye.value !== null && Qi(e, t);
}, ec = (e, t) => {
  ve.value || (ve.value = !0, ye.value = t, e.preventDefault(), e.stopPropagation());
}, Jf = (e) => {
  ve.value = !0;
  const t = qi(e);
  ye.value = t.create();
}, tc = (e, t) => {
  const n = e.clientX, r = e.clientY, s = t.childNodes.values(), a = Array.from(s).filter((o) => o.nodeName != "#text");
  for (let o = 0; o < a.length; o++) {
    const i = a[o].getBoundingClientRect(), c = i.left + i.width / 2, f = i.top + i.height / 2, d = t.classList;
    if (n < c && d.contains("sp-style__layout-flex-direction__row") || r < f && d.contains("sp-style__layout-flex-direction__column"))
      return o;
  }
  return a.length;
}, fn = (e) => {
  e.addEventListener("click", (n) => Xi(n, e)), e.addEventListener("mouseover", (n) => ks(n, e)), e.addEventListener("mouseout", (n) => Yi(n, e));
  const t = e;
  t.tagName === "DIV" && (t.addEventListener("dragover", (n) => Zi(n, e)), t.addEventListener("drop", (n) => Ki(n, e))), t.setAttribute("draggable", "true"), e.addEventListener("drag", (n) => ec(n, e));
}, nc = (e) => {
  const t = _a[e];
  return Di[t].map((r) => ({
    tab: r,
    ...Ii[r]
  }));
}, Qf = (e, t) => t.find((n) => n.startsWith(e)), Zt = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, Zf = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), r = parseInt(t[1]), s = parseInt(t[2]);
  return "#" + Zt(n) + Zt(r) + Zt(s);
}, rc = (e) => {
  document.querySelectorAll(e).forEach((r) => fn(r));
  const n = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
  n && fn(n);
}, sc = () => {
  Oa.forEach((e) => {
    rc(`[data-simplisitiid="simplisiti-component-preview"] ${e}`);
  });
}, ac = (e) => new Promise((t) => {
  I.post("/compile_styles", { html: e }).then(({ data: n }) => {
    let r = document.getElementById("simplisiti-preview-style");
    r || (r = document.createElement("style"), r.id = "simplisiti-preview-style"), r.textContent = n, document.head.appendChild(r), t();
  });
}), oc = { class: "sp-wizard-popup__tabs-container" }, ic = { class: "sp-wizard-popup__tabs" }, cc = { class: "sp-wizard-popup__tab" }, lc = ["title", "onClick"], fc = { class: "sp-wizard-popup__content" }, uc = { class: "sp-wizard-popup__content-header" }, dc = /* @__PURE__ */ Me({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = te([]), s = te({}), a = ba([]), o = te(void 0), i = t, c = () => {
      for (const E of nc(n.tagName.toLowerCase()))
        a.push({
          component: Qr(E.component),
          icon: E.icon,
          title: E.title,
          tab: E.tab,
          spClassList: r.value,
          spStyleList: s.value,
          spContent: {
            content: "",
            type: "text"
          },
          spAttribute: {
            content: "",
            type: "src"
          }
        });
    }, f = (E) => {
      o.value = E, i("tabChange", E.tab);
    }, d = () => {
      a.length > 0 && f(a[0]);
    }, m = (E) => {
      var S;
      return ((S = o.value) == null ? void 0 : S.tab) === E.tab;
    }, h = (E) => new Promise((S) => {
      setTimeout(() => {
        n.classList.remove(E), S();
      }, 10);
    }), v = (E) => new Promise((S) => {
      setTimeout(() => {
        n.classList.add(E), S();
      }, 10);
    }), x = () => new Promise((E) => {
      n.classList.forEach(async (S) => {
        S.startsWith("sp-style") && await h(S);
      }), E();
    }), _ = (E) => new Promise((S) => {
      E.forEach(async (F) => {
        await v(F);
      }), S();
    }), A = (E) => new Promise((S) => {
      for (const F in E)
        n.style.setProperty(F, E[F]);
      S();
    }), u = (E) => new Promise((S) => {
      n.innerHTML = E.content, S();
    }), p = (E) => new Promise((S) => {
      n.setAttribute(E.type, E.content), S();
    }), y = (E, S) => {
      S != null && S.spClassList && (S.spClassList = E);
      const F = a.flatMap((L) => L.spClassList);
      r.value = F, x().then(() => {
        _(F).then(() => {
          n.dataset.simplisitiid && Wi(n.dataset.simplisitiid, F);
        });
      });
    }, b = (E) => {
      var F;
      (F = o.value) != null && F.spStyleList && (o.value.spStyleList = E);
      const S = a.reduce((L, me) => ({ ...L, ...me.spStyleList, ...E }), {});
      s.value = S, A(S).then(() => {
        n.dataset.simplisitiid && $i(n.dataset.simplisitiid, S);
      });
    }, C = (E) => {
      var S;
      (S = o.value) != null && S.spContent && (o.value.spContent = E), u(E).then(() => {
        n.dataset.simplisitiid && E.type === "text" && Ns(n.dataset.simplisitiid, E.content);
      });
    }, k = (E) => {
      var S;
      (S = o.value) != null && S.spAttribute && (o.value.spAttribute = E), p(E).then(() => {
        n.dataset.simplisitiid && Vi(n.dataset.simplisitiid, E);
      });
    }, P = () => {
      r.value = Array.from(n.classList).filter((E) => E.startsWith("sp-style"));
    }, H = () => {
      for (let E in n.style)
        Mi.includes(E) && n.style[E] !== "" && (s.value[E] = n.style[E]);
    };
    return Cn(() => {
      P(), H(), c(), d();
    }), (E, S) => {
      const F = Pn("fa-icon");
      return B(), Z(st, null, [
        W("div", oc, [
          W("div", ic, [
            (B(!0), Z(st, null, an(Pe(a), (L) => (B(), Z("div", cc, [
              W("button", {
                class: Rn(["sp-wizard-popup__tab-button", { "sp-wizard-popup__tab-button__active": m(L) }]),
                title: L.title,
                onClick: (me) => f(L)
              }, [
                qe(F, {
                  icon: L.icon
                }, null, 8, ["icon"])
              ], 10, lc)
            ]))), 256))
          ])
        ]),
        W("div", fc, [
          W("div", uc, [
            (B(!0), Z(st, null, an(Pe(a), (L) => (B(), Z("div", null, [
              Gr(W("div", null, [
                (B(), Dt(Jr(L == null ? void 0 : L.component), {
                  "sp-class-list": L == null ? void 0 : L.spClassList,
                  "onUpdate:spClassList": (me) => y(me, L),
                  "sp-style-list": L == null ? void 0 : L.spStyleList,
                  "onUpdate:spStyleList": b,
                  element: e.element,
                  "onUpdate:spContent": C,
                  "onUpdate:spAttribute": k
                }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
              ], 512), [
                [wa, m(L)]
              ])
            ]))), 256))
          ])
        ])
      ], 64);
    };
  }
}), jn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, mc = /* @__PURE__ */ jn(dc, [["__scopeId", "data-v-0f7f4822"]]), pc = { class: "sp-configuration-popup__header" }, hc = { class: "sp-configuration-popup__body" }, gc = /* @__PURE__ */ Me({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = te(null), s = te(!1), a = t, o = (m) => {
      setTimeout(() => {
        if (!m || !r.value) return;
        const h = m.getBoundingClientRect(), v = document.body.offsetWidth, x = document.body.offsetHeight, _ = 250, A = 10;
        let u = h.top, p = h.left + h.width + A;
        p + _ > v && (p = h.right - _, u = h.top - r.value.offsetHeight - A, u < A && (u = A)), u + r.value.offsetHeight > x && (u = x - r.value.offsetHeight - A), r.value.style.top = `${u}px`, r.value.style.left = `${p}px`;
      }, 50);
    }, i = G(() => {
      var h;
      const m = (h = n == null ? void 0 : n.tagName) == null ? void 0 : h.toLowerCase();
      return m && xa[m] || "Element";
    }), c = (m) => {
      setTimeout(() => {
        a("close", m), s.value = !0;
      }, 300);
    }, f = (m) => {
      n && (n.remove(), n.dataset.simplisitiid && Ts(n.dataset.simplisitiid), a("close", m)), s.value = !0;
    }, d = () => {
      o(n);
    };
    return o(n), Cn(() => {
      document.addEventListener("scroll", () => {
        o(n);
      });
    }), (m, h) => {
      const v = Pn("fa-icon");
      return B(), Z("div", {
        class: Rn(["sp-configuration-popup", { "sp-configuration-popup_closed": s.value }]),
        ref_key: "popup",
        ref: r,
        onClick: Zr((x) => {
        }, ["stop"])
      }, [
        W("div", pc, [
          W("h4", null, va(i.value), 1),
          W("button", {
            class: "sp-configuration-popup__button",
            onClick: f
          }, [
            qe(v, { icon: "trash" })
          ]),
          W("button", {
            class: "sp-configuration-popup__button",
            onClick: c
          }, [
            qe(v, { icon: "times" })
          ])
        ]),
        W("div", hc, [
          e.element ? (B(), Dt(mc, {
            key: 0,
            element: e.element,
            onTabChange: d
          }, null, 8, ["element"])) : Ln("", !0)
        ])
      ], 2);
    };
  }
}), yc = /* @__PURE__ */ jn(gc, [["__scopeId", "data-v-9896d74d"]]), _r = [
  {
    icon: "cube",
    component: Qr(() => import("./ElementsPanel-BA0uTVkb.js"))
  }
], bc = { class: "sp-element__floating-container" }, wc = { class: "sp-element__component-container" }, vc = { class: "sp-element__side-buttons" }, Ec = ["onClick"], xc = /* @__PURE__ */ Me({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = te(!1), n = te(_r[0]), r = () => {
      t.value = !t.value;
    }, s = (a) => {
      n.value = a, t.value = !0;
    };
    return (a, o) => {
      const i = Pn("fa-icon"), c = Ea("key");
      return B(), Z("div", bc, [
        W("div", {
          class: Rn(["sp-element__floating-panel", { "sp-element__floating-panel__closed": Pe(ve) || !t.value }])
        }, [
          W("div", wc, [
            (B(), Dt(Jr(n.value.component)))
          ])
        ], 2),
        W("div", vc, [
          (B(!0), Z(st, null, an(Pe(_r), (f) => Gr((B(), Z("button", {
            class: "sp-element__close-button",
            onClick: (d) => s(f)
          }, [
            qe(i, {
              icon: f.icon
            }, null, 8, ["icon"])
          ], 8, Ec)), [
            [c, f.icon]
          ])), 256)),
          t.value ? (B(), Z("button", {
            key: 0,
            class: "sp-element__close-button",
            onClick: r
          }, [
            qe(i, { icon: "times" })
          ])) : Ln("", !0)
        ])
      ]);
    };
  }
}), _c = /* @__PURE__ */ jn(xc, [["__scopeId", "data-v-e6c667dc"]]), Oc = /* @__PURE__ */ Me({
  __name: "App",
  setup(e) {
    es(ve, (n) => {
      const r = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      n ? r == null || r.classList.add("sp-element__add-element-mode") : r == null || r.classList.remove("sp-element__add-element-mode");
    });
    const t = () => {
      Ue.value && Ue.value.classList.remove("sp-element__active"), Ue.value = null, We.value = !1;
    };
    return Cn(() => {
      const n = document.body.innerHTML;
      ac(n).then(() => {
        sc();
      });
    }), (n, r) => {
      var s;
      return B(), Z(st, null, [
        Pe(We) ? (B(), Dt(yc, {
          key: 0,
          element: Pe(Ue),
          type: (s = Pe(Ue)) == null ? void 0 : s.tagName,
          onClose: Zr(t, ["stop"])
        }, null, 8, ["element", "type"])) : Ln("", !0),
        qe(_c)
      ], 64);
    };
  }
}), Or = () => {
};
let Un = {}, Fs = {}, Is = null, Ds = {
  mark: Or,
  measure: Or
};
try {
  typeof window < "u" && (Un = window), typeof document < "u" && (Fs = document), typeof MutationObserver < "u" && (Is = MutationObserver), typeof performance < "u" && (Ds = performance);
} catch {
}
const {
  userAgent: Sr = ""
} = Un.navigator || {}, Ee = Un, T = Fs, Ar = Is, _t = Ds;
Ee.document;
const de = !!T.documentElement && !!T.head && typeof T.addEventListener == "function" && typeof T.createElement == "function", Ms = ~Sr.indexOf("MSIE") || ~Sr.indexOf("Trident/");
var N = "classic", zs = "duotone", V = "sharp", X = "sharp-duotone", Sc = [N, zs, V, X], Ac = {
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
}, Cr = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Cc = ["kit"], Pc = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Rc = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Lc = {
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
}, Tc = {
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
}, Nc = {
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
}, kc = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Fc = {
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
}, Ic = {
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
}, js = {
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
}, Dc = ["solid", "regular", "light", "thin", "duotone", "brands"], Us = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Mc = Us.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), nt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, zc = [...Object.keys(kc), ...Dc, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", nt.GROUP, nt.SWAP_OPACITY, nt.PRIMARY, nt.SECONDARY].concat(Us.map((e) => "".concat(e, "x"))).concat(Mc.map((e) => "w-".concat(e))), jc = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Uc = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, Bc = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Pr = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const fe = "___FONT_AWESOME___", un = 16, Bs = "fa", Hs = "svg-inline--fa", Ie = "data-fa-i2svg", dn = "data-fa-pseudo-element", Hc = "data-fa-pseudo-element-pending", Bn = "data-prefix", Hn = "data-icon", Rr = "fontawesome-i2svg", qc = "async", Wc = ["HTML", "HEAD", "STYLE", "SCRIPT"], qs = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Ws = [N, V, X];
function bt(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[N];
    }
  });
}
const $s = {
  ...js
};
$s[N] = {
  ...js[N],
  ...Cr.kit,
  ...Cr["kit-duotone"]
};
const Le = bt($s), mn = {
  ...Ic
};
mn[N] = {
  ...mn[N],
  ...Pr.kit,
  ...Pr["kit-duotone"]
};
const ft = bt(mn), pn = {
  ...Fc
};
pn[N] = {
  ...pn[N],
  ...Bc.kit
};
const Te = bt(pn), hn = {
  ...Nc
};
hn[N] = {
  ...hn[N],
  ...Uc.kit
};
const $c = bt(hn), Vc = Pc, Vs = "fa-layers-text", Xc = Rc, Yc = {
  ...Ac
};
bt(Yc);
const Kc = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], en = nt, $e = /* @__PURE__ */ new Set();
Object.keys(ft[N]).map($e.add.bind($e));
Object.keys(ft[V]).map($e.add.bind($e));
Object.keys(ft[X]).map($e.add.bind($e));
const Gc = [...Cc, ...zc], at = Ee.FontAwesomeConfig || {};
function Jc(e) {
  var t = T.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Qc(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
T && typeof T.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const s = Qc(Jc(n));
  s != null && (at[r] = s);
});
const Xs = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Bs,
  replacementClass: Hs,
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
at.familyPrefix && (at.cssPrefix = at.familyPrefix);
const Ve = {
  ...Xs,
  ...at
};
Ve.autoReplaceSvg || (Ve.observeMutations = !1);
const w = {};
Object.keys(Xs).forEach((e) => {
  Object.defineProperty(w, e, {
    enumerable: !0,
    set: function(t) {
      Ve[e] = t, ot.forEach((n) => n(w));
    },
    get: function() {
      return Ve[e];
    }
  });
});
Object.defineProperty(w, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ve.cssPrefix = e, ot.forEach((t) => t(w));
  },
  get: function() {
    return Ve.cssPrefix;
  }
});
Ee.FontAwesomeConfig = w;
const ot = [];
function Zc(e) {
  return ot.push(e), () => {
    ot.splice(ot.indexOf(e), 1);
  };
}
const ge = un, re = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function el(e) {
  if (!e || !de)
    return;
  const t = T.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = T.head.childNodes;
  let r = null;
  for (let s = n.length - 1; s > -1; s--) {
    const a = n[s], o = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
  }
  return T.head.insertBefore(t, r), e;
}
const tl = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ut() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += tl[Math.random() * 62 | 0];
  return t;
}
function Ke(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function qn(e) {
  return e.classList ? Ke(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Ys(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function nl(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Ys(e[n]), '" '), "").trim();
}
function Ut(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Wn(e) {
  return e.size !== re.size || e.x !== re.x || e.y !== re.y || e.rotate !== re.rotate || e.flipX || e.flipY;
}
function rl(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const s = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), i = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(a, " ").concat(o, " ").concat(i)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: s,
    inner: c,
    path: f
  };
}
function sl(e) {
  let {
    transform: t,
    width: n = un,
    height: r = un,
    startCentered: s = !1
  } = e, a = "";
  return s && Ms ? a += "translate(".concat(t.x / ge - n / 2, "em, ").concat(t.y / ge - r / 2, "em) ") : s ? a += "translate(calc(-50% + ".concat(t.x / ge, "em), calc(-50% + ").concat(t.y / ge, "em)) ") : a += "translate(".concat(t.x / ge, "em, ").concat(t.y / ge, "em) "), a += "scale(".concat(t.size / ge * (t.flipX ? -1 : 1), ", ").concat(t.size / ge * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var al = `:root, :host {
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
function Ks() {
  const e = Bs, t = Hs, n = w.cssPrefix, r = w.replacementClass;
  let s = al;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    s = s.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return s;
}
let Lr = !1;
function tn() {
  w.autoAddCss && !Lr && (el(Ks()), Lr = !0);
}
var ol = {
  mixout() {
    return {
      dom: {
        css: Ks,
        insertCss: tn
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        tn();
      },
      beforeI2svg() {
        tn();
      }
    };
  }
};
const ue = Ee || {};
ue[fe] || (ue[fe] = {});
ue[fe].styles || (ue[fe].styles = {});
ue[fe].hooks || (ue[fe].hooks = {});
ue[fe].shims || (ue[fe].shims = []);
var se = ue[fe];
const Gs = [], Js = function() {
  T.removeEventListener("DOMContentLoaded", Js), Nt = 1, Gs.map((e) => e());
};
let Nt = !1;
de && (Nt = (T.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(T.readyState), Nt || T.addEventListener("DOMContentLoaded", Js));
function il(e) {
  de && (Nt ? setTimeout(e, 0) : Gs.push(e));
}
function wt(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Ys(e) : "<".concat(t, " ").concat(nl(n), ">").concat(r.map(wt).join(""), "</").concat(t, ">");
}
function Tr(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var nn = function(t, n, r, s) {
  var a = Object.keys(t), o = a.length, i = n, c, f, d;
  for (r === void 0 ? (c = 1, d = t[a[0]]) : (c = 0, d = r); c < o; c++)
    f = a[c], d = i(d, t[f], f, t);
  return d;
};
function cl(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < r) {
      const a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((s & 1023) << 10) + (a & 1023) + 65536) : (t.push(s), n--);
    } else
      t.push(s);
  }
  return t;
}
function gn(e) {
  const t = cl(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ll(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), s;
  return r >= 55296 && r <= 56319 && n > t + 1 && (s = e.charCodeAt(t + 1), s >= 56320 && s <= 57343) ? (r - 55296) * 1024 + s - 56320 + 65536 : r;
}
function Nr(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function yn(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, s = Nr(t);
  typeof se.hooks.addPack == "function" && !r ? se.hooks.addPack(e, Nr(t)) : se.styles[e] = {
    ...se.styles[e] || {},
    ...s
  }, e === "fas" && yn("fa", t);
}
const {
  styles: Ae,
  shims: fl
} = se, ul = {
  [N]: Object.values(Te[N]),
  [V]: Object.values(Te[V]),
  [X]: Object.values(Te[X])
};
let $n = null, Qs = {}, Zs = {}, ea = {}, ta = {}, na = {};
const dl = {
  [N]: Object.keys(Le[N]),
  [V]: Object.keys(Le[V]),
  [X]: Object.keys(Le[X])
};
function ml(e) {
  return ~Gc.indexOf(e);
}
function pl(e, t) {
  const n = t.split("-"), r = n[0], s = n.slice(1).join("-");
  return r === e && s !== "" && !ml(s) ? s : null;
}
const ra = () => {
  const e = (r) => nn(Ae, (s, a, o) => (s[o] = nn(a, r, {}), s), {});
  Qs = e((r, s, a) => (s[3] && (r[s[3]] = a), s[2] && s[2].filter((i) => typeof i == "number").forEach((i) => {
    r[i.toString(16)] = a;
  }), r)), Zs = e((r, s, a) => (r[a] = a, s[2] && s[2].filter((i) => typeof i == "string").forEach((i) => {
    r[i] = a;
  }), r)), na = e((r, s, a) => {
    const o = s[2];
    return r[a] = a, o.forEach((i) => {
      r[i] = a;
    }), r;
  });
  const t = "far" in Ae || w.autoFetchSvg, n = nn(fl, (r, s) => {
    const a = s[0];
    let o = s[1];
    const i = s[2];
    return o === "far" && !t && (o = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: o,
      iconName: i
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: o,
      iconName: i
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  ea = n.names, ta = n.unicodes, $n = Bt(w.styleDefault, {
    family: w.familyDefault
  });
};
Zc((e) => {
  $n = Bt(e.styleDefault, {
    family: w.familyDefault
  });
});
ra();
function Vn(e, t) {
  return (Qs[e] || {})[t];
}
function hl(e, t) {
  return (Zs[e] || {})[t];
}
function be(e, t) {
  return (na[e] || {})[t];
}
function sa(e) {
  return ea[e] || {
    prefix: null,
    iconName: null
  };
}
function gl(e) {
  const t = ta[e], n = Vn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function xe() {
  return $n;
}
const Xn = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Bt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = N
  } = t, r = Le[n][e], s = ft[n][e] || ft[n][r], a = e in se.styles ? e : null;
  return s || a || null;
}
const yl = {
  [N]: Object.keys(Te[N]),
  [V]: Object.keys(Te[V]),
  [X]: Object.keys(Te[X])
};
function Ht(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [N]: "".concat(w.cssPrefix, "-").concat(N),
    [V]: "".concat(w.cssPrefix, "-").concat(V),
    [X]: "".concat(w.cssPrefix, "-").concat(X)
  };
  let s = null, a = N;
  const o = Sc.filter((c) => c !== zs);
  o.forEach((c) => {
    (e.includes(r[c]) || e.some((f) => yl[c].includes(f))) && (a = c);
  });
  const i = e.reduce((c, f) => {
    const d = pl(w.cssPrefix, f);
    if (Ae[f] ? (f = ul[a].includes(f) ? $c[a][f] : f, s = f, c.prefix = f) : dl[a].indexOf(f) > -1 ? (s = f, c.prefix = Bt(f, {
      family: a
    })) : d ? c.iconName = d : f !== w.replacementClass && !o.some((m) => f === r[m]) && c.rest.push(f), !n && c.prefix && c.iconName) {
      const m = s === "fa" ? sa(c.iconName) : {}, h = be(c.prefix, c.iconName);
      m.prefix && (s = null), c.iconName = m.iconName || h || c.iconName, c.prefix = m.prefix || c.prefix, c.prefix === "far" && !Ae.far && Ae.fas && !w.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Xn());
  return (e.includes("fa-brands") || e.includes("fab")) && (i.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (i.prefix = "fad"), !i.prefix && a === V && (Ae.fass || w.autoFetchSvg) && (i.prefix = "fass", i.iconName = be(i.prefix, i.iconName) || i.iconName), !i.prefix && a === X && (Ae.fasds || w.autoFetchSvg) && (i.prefix = "fasds", i.iconName = be(i.prefix, i.iconName) || i.iconName), (i.prefix === "fa" || s === "fa") && (i.prefix = xe() || "fas"), i;
}
class bl {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const s = n.reduce(this._pullDefinitions, {});
    Object.keys(s).forEach((a) => {
      this.definitions[a] = {
        ...this.definitions[a] || {},
        ...s[a]
      }, yn(a, s[a]);
      const o = Te[N][a];
      o && yn(o, s[a]), ra();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((s) => {
      const {
        prefix: a,
        iconName: o,
        icon: i
      } = r[s], c = i[2];
      t[a] || (t[a] = {}), c.length > 0 && c.forEach((f) => {
        typeof f == "string" && (t[a][f] = i);
      }), t[a][o] = i;
    }), t;
  }
}
let kr = [], Be = {};
const He = {}, wl = Object.keys(He);
function vl(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return kr = e, Be = {}, Object.keys(He).forEach((r) => {
    wl.indexOf(r) === -1 && delete He[r];
  }), kr.forEach((r) => {
    const s = r.mixout ? r.mixout() : {};
    if (Object.keys(s).forEach((a) => {
      typeof s[a] == "function" && (n[a] = s[a]), typeof s[a] == "object" && Object.keys(s[a]).forEach((o) => {
        n[a] || (n[a] = {}), n[a][o] = s[a][o];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((o) => {
        Be[o] || (Be[o] = []), Be[o].push(a[o]);
      });
    }
    r.provides && r.provides(He);
  }), n;
}
function bn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    r[s - 2] = arguments[s];
  return (Be[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function De(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Be[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function _e() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return He[e] ? He[e].apply(null, t) : void 0;
}
function wn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || xe();
  if (t)
    return t = be(n, t) || t, Tr(aa.definitions, n, t) || Tr(se.styles, n, t);
}
const aa = new bl(), El = () => {
  w.autoReplaceSvg = !1, w.observeMutations = !1, De("noAuto");
}, xl = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return de ? (De("beforeI2svg", e), _e("pseudoElements2svg", e), _e("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    w.autoReplaceSvg === !1 && (w.autoReplaceSvg = !0), w.observeMutations = !0, il(() => {
      Ol({
        autoReplaceSvgRoot: t
      }), De("watch", e);
    });
  }
}, _l = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: be(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Bt(e[0]);
      return {
        prefix: n,
        iconName: be(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(w.cssPrefix, "-")) > -1 || e.match(Vc))) {
      const t = Ht(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || xe(),
        iconName: be(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = xe();
      return {
        prefix: t,
        iconName: be(t, e) || e
      };
    }
  }
}, Y = {
  noAuto: El,
  config: w,
  dom: xl,
  parse: _l,
  library: aa,
  findIconDefinition: wn,
  toHtml: wt
}, Ol = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = T
  } = e;
  (Object.keys(se.styles).length > 0 || w.autoFetchSvg) && de && w.autoReplaceSvg && Y.dom.i2svg({
    node: t
  });
};
function qt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => wt(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!de) return;
      const n = T.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Sl(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: s,
    styles: a,
    transform: o
  } = e;
  if (Wn(o) && n.found && !r.found) {
    const {
      width: i,
      height: c
    } = n, f = {
      x: i / c / 2,
      y: 0.5
    };
    s.style = Ut({
      ...a,
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: s,
    children: t
  }];
}
function Al(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: s,
    symbol: a
  } = e;
  const o = a === !0 ? "".concat(t, "-").concat(w.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...s,
        id: o
      },
      children: r
    }]
  }];
}
function Yn(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: s,
    transform: a,
    symbol: o,
    title: i,
    maskId: c,
    titleId: f,
    extra: d,
    watchable: m = !1
  } = e, {
    width: h,
    height: v
  } = n.found ? n : t, x = r === "fak", _ = [w.replacementClass, s ? "".concat(w.cssPrefix, "-").concat(s) : ""].filter((C) => d.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(d.classes).join(" ");
  let A = {
    children: [],
    attributes: {
      ...d.attributes,
      "data-prefix": r,
      "data-icon": s,
      class: _,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(v)
    }
  };
  const u = x && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(h / v * 16 * 0.0625, "em")
  } : {};
  m && (A.attributes[Ie] = ""), i && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(f || ut())
    },
    children: [i]
  }), delete A.attributes.title);
  const p = {
    ...A,
    prefix: r,
    iconName: s,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: o,
    styles: {
      ...u,
      ...d.styles
    }
  }, {
    children: y,
    attributes: b
  } = n.found && t.found ? _e("generateAbstractMask", p) || {
    children: [],
    attributes: {}
  } : _e("generateAbstractIcon", p) || {
    children: [],
    attributes: {}
  };
  return p.children = y, p.attributes = b, o ? Al(p) : Sl(p);
}
function Fr(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: s,
    title: a,
    extra: o,
    watchable: i = !1
  } = e, c = {
    ...o.attributes,
    ...a ? {
      title: a
    } : {},
    class: o.classes.join(" ")
  };
  i && (c[Ie] = "");
  const f = {
    ...o.styles
  };
  Wn(s) && (f.transform = sl({
    transform: s,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  const d = Ut(f);
  d.length > 0 && (c.style = d);
  const m = [];
  return m.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), a && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), m;
}
function Cl(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, s = {
    ...r.attributes,
    ...n ? {
      title: n
    } : {},
    class: r.classes.join(" ")
  }, a = Ut(r.styles);
  a.length > 0 && (s.style = a);
  const o = [];
  return o.push({
    tag: "span",
    attributes: s,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
const {
  styles: rn
} = se;
function vn(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let s = null;
  return Array.isArray(r) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(w.cssPrefix, "-").concat(en.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(en.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(en.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
const Pl = {
  found: !1,
  width: 512,
  height: 512
};
function Rl(e, t) {
  !qs && !w.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function En(e, t) {
  let n = t;
  return t === "fa" && w.styleDefault !== null && (t = xe()), new Promise((r, s) => {
    if (n === "fa") {
      const a = sa(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && rn[t] && rn[t][e]) {
      const a = rn[t][e];
      return r(vn(a));
    }
    Rl(e, t), r({
      ...Pl,
      icon: w.showMissingIcons && e ? _e("missingIconAbstract") || {} : {}
    });
  });
}
const Ir = () => {
}, xn = w.measurePerformance && _t && _t.mark && _t.measure ? _t : {
  mark: Ir,
  measure: Ir
}, rt = 'FA "6.6.0"', Ll = (e) => (xn.mark("".concat(rt, " ").concat(e, " begins")), () => oa(e)), oa = (e) => {
  xn.mark("".concat(rt, " ").concat(e, " ends")), xn.measure("".concat(rt, " ").concat(e), "".concat(rt, " ").concat(e, " begins"), "".concat(rt, " ").concat(e, " ends"));
};
var Kn = {
  begin: Ll,
  end: oa
};
const Pt = () => {
};
function Dr(e) {
  return typeof (e.getAttribute ? e.getAttribute(Ie) : null) == "string";
}
function Tl(e) {
  const t = e.getAttribute ? e.getAttribute(Bn) : null, n = e.getAttribute ? e.getAttribute(Hn) : null;
  return t && n;
}
function Nl(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(w.replacementClass);
}
function kl() {
  return w.autoReplaceSvg === !0 ? Rt.replace : Rt[w.autoReplaceSvg] || Rt.replace;
}
function Fl(e) {
  return T.createElementNS("http://www.w3.org/2000/svg", e);
}
function Il(e) {
  return T.createElement(e);
}
function ia(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Fl : Il
  } = t;
  if (typeof e == "string")
    return T.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(ia(a, {
      ceFn: n
    }));
  }), r;
}
function Dl(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Rt = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ia(n), t);
      }), t.getAttribute(Ie) === null && w.keepOriginalSource) {
        let n = T.createComment(Dl(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~qn(t).indexOf(w.replacementClass))
      return Rt.replace(e);
    const r = new RegExp("".concat(w.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((o, i) => (i === w.replacementClass || i.match(r) ? o.toSvg.push(i) : o.toNode.push(i), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const s = n.map((a) => wt(a)).join(`
`);
    t.setAttribute(Ie, ""), t.innerHTML = s;
  }
};
function Mr(e) {
  e();
}
function ca(e, t) {
  const n = typeof t == "function" ? t : Pt;
  if (e.length === 0)
    n();
  else {
    let r = Mr;
    w.mutateApproach === qc && (r = Ee.requestAnimationFrame || Mr), r(() => {
      const s = kl(), a = Kn.begin("mutate");
      e.map(s), a(), n();
    });
  }
}
let Gn = !1;
function la() {
  Gn = !0;
}
function _n() {
  Gn = !1;
}
let kt = null;
function zr(e) {
  if (!Ar || !w.observeMutations)
    return;
  const {
    treeCallback: t = Pt,
    nodeCallback: n = Pt,
    pseudoElementsCallback: r = Pt,
    observeMutationsRoot: s = T
  } = e;
  kt = new Ar((a) => {
    if (Gn) return;
    const o = xe();
    Ke(a).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !Dr(i.addedNodes[0]) && (w.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && w.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && Dr(i.target) && ~Kc.indexOf(i.attributeName))
        if (i.attributeName === "class" && Tl(i.target)) {
          const {
            prefix: c,
            iconName: f
          } = Ht(qn(i.target));
          i.target.setAttribute(Bn, c || o), f && i.target.setAttribute(Hn, f);
        } else Nl(i.target) && n(i.target);
    });
  }), de && kt.observe(s, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Ml() {
  kt && kt.disconnect();
}
function zl(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, s) => {
    const a = s.split(":"), o = a[0], i = a.slice(1);
    return o && i.length > 0 && (r[o] = i.join(":").trim()), r;
  }, {})), n;
}
function jl(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let s = Ht(qn(e));
  return s.prefix || (s.prefix = xe()), t && n && (s.prefix = t, s.iconName = n), s.iconName && s.prefix || (s.prefix && r.length > 0 && (s.iconName = hl(s.prefix, e.innerText) || Vn(s.prefix, gn(e.innerText))), !s.iconName && w.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (s.iconName = e.firstChild.data)), s;
}
function Ul(e) {
  const t = Ke(e.attributes).reduce((s, a) => (s.name !== "class" && s.name !== "style" && (s[a.name] = a.value), s), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return w.autoA11y && (n ? t["aria-labelledby"] = "".concat(w.replacementClass, "-title-").concat(r || ut()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Bl() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: re,
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
function jr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: s
  } = jl(e), a = Ul(e), o = bn("parseNodeAttributes", {}, e);
  let i = t.styleParser ? zl(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: re,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: s,
      styles: i,
      attributes: a
    },
    ...o
  };
}
const {
  styles: Hl
} = se;
function fa(e) {
  const t = w.autoReplaceSvg === "nest" ? jr(e, {
    styleParser: !1
  }) : jr(e);
  return ~t.extra.classes.indexOf(Vs) ? _e("generateLayersText", e, t) : _e("generateSvgReplacementMutation", e, t);
}
let ae = /* @__PURE__ */ new Set();
Ws.map((e) => {
  ae.add("fa-".concat(e));
});
Object.keys(Le[N]).map(ae.add.bind(ae));
Object.keys(Le[V]).map(ae.add.bind(ae));
Object.keys(Le[X]).map(ae.add.bind(ae));
ae = [...ae];
function Ur(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!de) return Promise.resolve();
  const n = T.documentElement.classList, r = (d) => n.add("".concat(Rr, "-").concat(d)), s = (d) => n.remove("".concat(Rr, "-").concat(d)), a = w.autoFetchSvg ? ae : Ws.map((d) => "fa-".concat(d)).concat(Object.keys(Hl));
  a.includes("fa") || a.push("fa");
  const o = [".".concat(Vs, ":not([").concat(Ie, "])")].concat(a.map((d) => ".".concat(d, ":not([").concat(Ie, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Ke(e.querySelectorAll(o));
  } catch {
  }
  if (i.length > 0)
    r("pending"), s("complete");
  else
    return Promise.resolve();
  const c = Kn.begin("onTree"), f = i.reduce((d, m) => {
    try {
      const h = fa(m);
      h && d.push(h);
    } catch (h) {
      qs || h.name === "MissingIcon" && console.error(h);
    }
    return d;
  }, []);
  return new Promise((d, m) => {
    Promise.all(f).then((h) => {
      ca(h, () => {
        r("active"), r("complete"), s("pending"), typeof t == "function" && t(), c(), d();
      });
    }).catch((h) => {
      c(), m(h);
    });
  });
}
function ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  fa(e).then((n) => {
    n && ca([n], t);
  });
}
function Wl(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : wn(t || {});
    let {
      mask: s
    } = n;
    return s && (s = (s || {}).icon ? s : wn(s || {})), e(r, {
      ...n,
      mask: s
    });
  };
}
const $l = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = re,
    symbol: r = !1,
    mask: s = null,
    maskId: a = null,
    title: o = null,
    titleId: i = null,
    classes: c = [],
    attributes: f = {},
    styles: d = {}
  } = t;
  if (!e) return;
  const {
    prefix: m,
    iconName: h,
    icon: v
  } = e;
  return qt({
    type: "icon",
    ...e
  }, () => (De("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), w.autoA11y && (o ? f["aria-labelledby"] = "".concat(w.replacementClass, "-title-").concat(i || ut()) : (f["aria-hidden"] = "true", f.focusable = "false")), Yn({
    icons: {
      main: vn(v),
      mask: s ? vn(s.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: m,
    iconName: h,
    transform: {
      ...re,
      ...n
    },
    symbol: r,
    title: o,
    maskId: a,
    titleId: i,
    extra: {
      attributes: f,
      styles: d,
      classes: c
    }
  })));
};
var Vl = {
  mixout() {
    return {
      icon: Wl($l)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Ur, e.nodeCallback = ql, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = T,
        callback: r = () => {
        }
      } = t;
      return Ur(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: s,
        titleId: a,
        prefix: o,
        transform: i,
        symbol: c,
        mask: f,
        maskId: d,
        extra: m
      } = n;
      return new Promise((h, v) => {
        Promise.all([En(r, o), f.iconName ? En(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((x) => {
          let [_, A] = x;
          h([t, Yn({
            icons: {
              main: _,
              mask: A
            },
            prefix: o,
            iconName: r,
            transform: i,
            symbol: c,
            maskId: d,
            title: s,
            titleId: a,
            extra: m,
            watchable: !0
          })]);
        }).catch(v);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: s,
        transform: a,
        styles: o
      } = t;
      const i = Ut(o);
      i.length > 0 && (r.style = i);
      let c;
      return Wn(a) && (c = _e("generateAbstractTransformGrouping", {
        main: s,
        transform: a,
        containerWidth: s.width,
        iconWidth: s.width
      })), n.push(c || s.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Xl = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return qt({
          type: "layer"
        }, () => {
          De("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((s) => {
            Array.isArray(s) ? s.map((a) => {
              r = r.concat(a.abstract);
            }) : r = r.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(w.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, Yl = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: s = {},
          styles: a = {}
        } = t;
        return qt({
          type: "counter",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Cl({
          content: e.toString(),
          title: n,
          extra: {
            attributes: s,
            styles: a,
            classes: ["".concat(w.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, Kl = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = re,
          title: r = null,
          classes: s = [],
          attributes: a = {},
          styles: o = {}
        } = t;
        return qt({
          type: "text",
          content: e
        }, () => (De("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Fr({
          content: e,
          transform: {
            ...re,
            ...n
          },
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(w.cssPrefix, "-layers-text"), ...s]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: s,
        extra: a
      } = n;
      let o = null, i = null;
      if (Ms) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), f = t.getBoundingClientRect();
        o = f.width / c, i = f.height / c;
      }
      return w.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, Fr({
        content: t.innerHTML,
        width: o,
        height: i,
        transform: s,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const Gl = new RegExp('"', "ug"), Br = [1105920, 1112319], Hr = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Tc,
  ...Lc,
  ...jc
}, On = Object.keys(Hr).reduce((e, t) => (e[t.toLowerCase()] = Hr[t], e), {}), Jl = Object.keys(On).reduce((e, t) => {
  const n = On[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function Ql(e) {
  const t = e.replace(Gl, ""), n = ll(t, 0), r = n >= Br[0] && n <= Br[1], s = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: gn(s ? t[0] : t),
    isSecondary: r || s
  };
}
function Zl(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), s = isNaN(r) ? "normal" : r;
  return (On[n] || {})[s] || Jl[n];
}
function qr(e, t) {
  const n = "".concat(Hc).concat(t.replace(":", "-"));
  return new Promise((r, s) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Ke(e.children).filter((h) => h.getAttribute(dn) === t)[0], i = Ee.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), f = c.match(Xc), d = i.getPropertyValue("font-weight"), m = i.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && m !== "none" && m !== "") {
      const h = i.getPropertyValue("content");
      let v = Zl(c, d);
      const {
        value: x,
        isSecondary: _
      } = Ql(h), A = f[0].startsWith("FontAwesome");
      let u = Vn(v, x), p = u;
      if (A) {
        const y = gl(x);
        y.iconName && y.prefix && (u = y.iconName, v = y.prefix);
      }
      if (u && !_ && (!o || o.getAttribute(Bn) !== v || o.getAttribute(Hn) !== p)) {
        e.setAttribute(n, p), o && e.removeChild(o);
        const y = Bl(), {
          extra: b
        } = y;
        b.attributes[dn] = t, En(u, v).then((C) => {
          const k = Yn({
            ...y,
            icons: {
              main: C,
              mask: Xn()
            },
            prefix: v,
            iconName: p,
            extra: b,
            watchable: !0
          }), P = T.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = k.map((H) => wt(H)).join(`
`), e.removeAttribute(n), r();
        }).catch(s);
      } else
        r();
    } else
      r();
  });
}
function ef(e) {
  return Promise.all([qr(e, "::before"), qr(e, "::after")]);
}
function tf(e) {
  return e.parentNode !== document.head && !~Wc.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(dn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Wr(e) {
  if (de)
    return new Promise((t, n) => {
      const r = Ke(e.querySelectorAll("*")).filter(tf).map(ef), s = Kn.begin("searchPseudoElements");
      la(), Promise.all(r).then(() => {
        s(), _n(), t();
      }).catch(() => {
        s(), _n(), n();
      });
    });
}
var nf = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Wr, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = T
      } = t;
      w.searchPseudoElements && Wr(n);
    };
  }
};
let $r = !1;
var rf = {
  mixout() {
    return {
      dom: {
        unwatch() {
          la(), $r = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        zr(bn("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Ml();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        $r ? _n() : zr(bn("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Vr = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const s = r.toLowerCase().split("-"), a = s[0];
    let o = s.slice(1).join("-");
    if (a && o === "h")
      return n.flipX = !0, n;
    if (a && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (a) {
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
  }, t);
};
var sf = {
  mixout() {
    return {
      parse: {
        transform: (e) => Vr(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Vr(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: s,
        iconWidth: a
      } = t;
      const o = {
        transform: "translate(".concat(s / 2, " 256)")
      }, i = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), f = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(i, " ").concat(c, " ").concat(f)
      }, m = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, h = {
        outer: o,
        inner: d,
        path: m
      };
      return {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...h.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...h.path
            }
          }]
        }]
      };
    };
  }
};
const sn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Xr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function af(e) {
  return e.tag === "g" ? e.children : [e];
}
var of = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ht(n.split(" ").map((s) => s.trim())) : Xn();
        return r.prefix || (r.prefix = xe()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: s,
        mask: a,
        maskId: o,
        transform: i
      } = t;
      const {
        width: c,
        icon: f
      } = s, {
        width: d,
        icon: m
      } = a, h = rl({
        transform: i,
        containerWidth: d,
        iconWidth: c
      }), v = {
        tag: "rect",
        attributes: {
          ...sn,
          fill: "white"
        }
      }, x = f.children ? {
        children: f.children.map(Xr)
      } : {}, _ = {
        tag: "g",
        attributes: {
          ...h.inner
        },
        children: [Xr({
          tag: f.tag,
          attributes: {
            ...f.attributes,
            ...h.path
          },
          ...x
        })]
      }, A = {
        tag: "g",
        attributes: {
          ...h.outer
        },
        children: [_]
      }, u = "mask-".concat(o || ut()), p = "clip-".concat(o || ut()), y = {
        tag: "mask",
        attributes: {
          ...sn,
          id: u,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [v, A]
      }, b = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: p
          },
          children: af(m)
        }, y]
      };
      return n.push(b, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(p, ")"),
          mask: "url(#".concat(u, ")"),
          ...sn
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, cf = {
  provides(e) {
    let t = !1;
    Ee.matchMedia && (t = Ee.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, s = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...r,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const a = {
        ...s,
        attributeName: "opacity"
      }, o = {
        tag: "circle",
        attributes: {
          ...r,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || o.children.push({
        tag: "animate",
        attributes: {
          ...s,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...a,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(o), n.push({
        tag: "path",
        attributes: {
          ...r,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...a,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...r,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...a,
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
}, lf = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ff = [ol, Vl, Xl, Yl, Kl, nf, rf, sf, of, cf, lf];
vl(ff, {
  mixoutsTo: Y
});
Y.noAuto;
const ua = Y.config, uf = Y.library;
Y.dom;
const Ft = Y.parse;
Y.findIconDefinition;
Y.toHtml;
const df = Y.icon;
Y.layer;
const mf = Y.text;
Y.counter;
const pf = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, hf = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, gf = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, yf = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, bf = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, wf = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, vf = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Ef = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, xf = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, _f = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Of = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, Sf = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Af = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Cf = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Pf = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Rf = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, Lf = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, Tf = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Nf = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
function Yr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yr(Object(n), !0).forEach(function(r) {
      q(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function kf(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ff(e) {
  var t = kf(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function q(e, t, n) {
  return t = Ff(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function If(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Df(e, t) {
  if (e == null) return {};
  var n = If(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++)
      r = a[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Sn(e) {
  return Mf(e) || zf(e) || jf(e) || Uf();
}
function Mf(e) {
  if (Array.isArray(e)) return An(e);
}
function zf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jf(e, t) {
  if (e) {
    if (typeof e == "string") return An(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return An(e, t);
  }
}
function An(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Uf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Bf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, da = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(u, p, y) {
      if (!f(p) || m(p) || h(p) || v(p) || c(p))
        return p;
      var b, C = 0, k = 0;
      if (d(p))
        for (b = [], k = p.length; C < k; C++)
          b.push(n(u, p[C], y));
      else {
        b = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) && (b[u(P, y)] = n(u, p[P], y));
      }
      return b;
    }, r = function(u, p) {
      p = p || {};
      var y = p.separator || "_", b = p.split || /(?=[A-Z])/;
      return u.split(b).join(y);
    }, s = function(u) {
      return x(u) ? u : (u = u.replace(/[\-_\s]+(.)?/g, function(p, y) {
        return y ? y.toUpperCase() : "";
      }), u.substr(0, 1).toLowerCase() + u.substr(1));
    }, a = function(u) {
      var p = s(u);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, o = function(u, p) {
      return r(u, p).toLowerCase();
    }, i = Object.prototype.toString, c = function(u) {
      return typeof u == "function";
    }, f = function(u) {
      return u === Object(u);
    }, d = function(u) {
      return i.call(u) == "[object Array]";
    }, m = function(u) {
      return i.call(u) == "[object Date]";
    }, h = function(u) {
      return i.call(u) == "[object RegExp]";
    }, v = function(u) {
      return i.call(u) == "[object Boolean]";
    }, x = function(u) {
      return u = u - 0, u === u;
    }, _ = function(u, p) {
      var y = p && "process" in p ? p.process : p;
      return typeof y != "function" ? u : function(b, C) {
        return y(b, u, C);
      };
    }, A = {
      camelize: s,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(u, p) {
        return n(_(s, p), u);
      },
      decamelizeKeys: function(u, p) {
        return n(_(o, p), u, p);
      },
      pascalizeKeys: function(u, p) {
        return n(_(a, p), u);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = A : t.humps = A;
  })(Bf);
})(da);
var Hf = da.exports, qf = ["class", "style"];
function Wf(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = Hf.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[s] = a, t;
  }, {});
}
function $f(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return Jn(c);
  }), s = Object.keys(e.attributes || {}).reduce(function(c, f) {
    var d = e.attributes[f];
    switch (f) {
      case "class":
        c.class = $f(d);
        break;
      case "style":
        c.style = Wf(d);
        break;
      default:
        c.attrs[f] = d;
    }
    return c;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, o = a === void 0 ? {} : a, i = Df(n, qf);
  return ts(e.tag, ee(ee(ee({}, t), {}, {
    class: s.class,
    style: ee(ee({}, s.style), o)
  }, s.attrs), i), r);
}
var ma = !1;
try {
  ma = process.env.NODE_ENV === "production";
} catch {
}
function Vf() {
  if (!ma && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function it(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? q({}, e, t) : {};
}
function Xf(e) {
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
  }, q(q(q(q(q(q(q(q(q(q(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), q(q(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Kr(e) {
  if (e && It(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ft.icon)
    return Ft.icon(e);
  if (e === null)
    return null;
  if (It(e) === "object" && e.prefix && e.iconName)
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
var Yf = Me({
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
    var r = n.attrs, s = G(function() {
      return Kr(t.icon);
    }), a = G(function() {
      return it("classes", Xf(t));
    }), o = G(function() {
      return it("transform", typeof t.transform == "string" ? Ft.transform(t.transform) : t.transform);
    }), i = G(function() {
      return it("mask", Kr(t.mask));
    }), c = G(function() {
      return df(s.value, ee(ee(ee(ee({}, a.value), o.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    es(c, function(d) {
      if (!d)
        return Vf("Could not find one or more icon(s)", s.value, i.value);
    }, {
      immediate: !0
    });
    var f = G(function() {
      return c.value ? Jn(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return f.value;
    };
  }
});
Me({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, s = ua.familyPrefix, a = G(function() {
      return ["".concat(s, "-layers")].concat(Sn(t.fixedWidth ? ["".concat(s, "-fw")] : []));
    });
    return function() {
      return ts("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
Me({
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
    var r = n.attrs, s = ua.familyPrefix, a = G(function() {
      return it("classes", [].concat(Sn(t.counter ? ["".concat(s, "-layers-counter")] : []), Sn(t.position ? ["".concat(s, "-layers-").concat(t.position)] : [])));
    }), o = G(function() {
      return it("transform", typeof t.transform == "string" ? Ft.transform(t.transform) : t.transform);
    }), i = G(function() {
      var f = mf(t.value.toString(), ee(ee({}, o.value), a.value)), d = f.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), c = G(function() {
      return Jn(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
uf.add(
  Nf,
  Af,
  wf,
  pf,
  Of,
  Ef,
  Tf,
  Lf,
  Sf,
  hf,
  bf,
  vf,
  Pf,
  _f,
  Rf,
  Cf,
  xf,
  gf,
  yf
);
const eu = {
  install: (e) => {
    e.component("simplisiti-component-editor", Oc), e.component("fa-icon", Yf);
  }
};
export {
  Gf as H,
  jn as _,
  xa as a,
  Gi as d,
  Jf as e,
  eu as m,
  Qf as p,
  Zf as r
};
