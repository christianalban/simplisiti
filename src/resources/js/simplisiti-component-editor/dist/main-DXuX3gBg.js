import { ref as V, defineComponent as ve, shallowReactive as ba, onMounted as Kt, resolveComponent as Jt, openBlock as R, createElementBlock as W, Fragment as Re, createElementVNode as M, renderList as At, unref as de, normalizeClass as Qt, createVNode as Se, withDirectives as or, createBlock as at, resolveDynamicComponent as ir, vShow as va, defineAsyncComponent as _t, computed as q, withModifiers as cr, toDisplayString as xa, createCommentVNode as Zt, resolveDirective as wa, watch as lr, h as fr } from "vue";
const Ea = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, Sa = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, bl = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, Aa = [
  "div",
  "a",
  "p",
  "h1",
  "img"
];
function ur(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _a } = Object.prototype, { getPrototypeOf: en } = Object, st = /* @__PURE__ */ ((e) => (t) => {
  const n = _a.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Y = (e) => (e = e.toLowerCase(), (t) => st(t) === e), ot = (e) => (t) => typeof t === e, { isArray: Oe } = Array, ze = ot("undefined");
function Ca(e) {
  return e !== null && !ze(e) && e.constructor !== null && !ze(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const dr = Y("ArrayBuffer");
function Oa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && dr(e.buffer), t;
}
const La = ot("string"), j = ot("function"), mr = ot("number"), it = (e) => e !== null && typeof e == "object", Pa = (e) => e === !0 || e === !1, Ge = (e) => {
  if (st(e) !== "object")
    return !1;
  const t = en(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ta = Y("Date"), Na = Y("File"), ka = Y("Blob"), Ra = Y("FileList"), Fa = (e) => it(e) && j(e.pipe), Ma = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || j(e.append) && ((t = st(e)) === "formdata" || // detect form-data instance
  t === "object" && j(e.toString) && e.toString() === "[object FormData]"));
}, Ia = Y("URLSearchParams"), [za, Da, ja, Ba] = ["ReadableStream", "Request", "Response", "Headers"].map(Y), Ua = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Be(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Oe(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let i;
    for (r = 0; r < o; r++)
      i = s[r], t.call(null, e[i], i, e);
  }
}
function pr(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, hr = (e) => !ze(e) && e !== ue;
function Ct() {
  const { caseless: e } = hr(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && pr(t, a) || a;
    Ge(t[s]) && Ge(r) ? t[s] = Ct(t[s], r) : Ge(r) ? t[s] = Ct({}, r) : Oe(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Be(arguments[r], n);
  return t;
}
const Ha = (e, t, n, { allOwnKeys: r } = {}) => (Be(t, (a, s) => {
  n && j(a) ? e[s] = ur(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), qa = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wa = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, $a = (e, t, n, r) => {
  let a, s, o;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && en(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Va = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ya = (e) => {
  if (!e) return null;
  if (Oe(e)) return e;
  let t = e.length;
  if (!mr(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ga = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && en(Uint8Array)), Xa = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, Ka = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ja = Y("HTMLFormElement"), Qa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), vn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Za = Y("RegExp"), gr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Be(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, es = (e) => {
  gr(e, (t, n) => {
    if (j(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (j(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ts = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Oe(e) ? r(e) : r(String(e).split(t)), n;
}, ns = () => {
}, rs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, pt = "abcdefghijklmnopqrstuvwxyz", xn = "0123456789", yr = {
  DIGIT: xn,
  ALPHA: pt,
  ALPHA_DIGIT: pt + pt.toUpperCase() + xn
}, as = (e = 16, t = yr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ss(e) {
  return !!(e && j(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const os = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (it(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Oe(r) ? [] : {};
        return Be(r, (o, i) => {
          const l = n(o, a + 1);
          !ze(l) && (s[i] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, is = Y("AsyncFunction"), cs = (e) => e && (it(e) || j(e)) && j(e.then) && j(e.catch), br = ((e, t) => e ? setImmediate : t ? ((n, r) => (ue.addEventListener("message", ({ source: a, data: s }) => {
  a === ue && s === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), ue.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  j(ue.postMessage)
), ls = typeof queueMicrotask < "u" ? queueMicrotask.bind(ue) : typeof process < "u" && process.nextTick || br, u = {
  isArray: Oe,
  isArrayBuffer: dr,
  isBuffer: Ca,
  isFormData: Ma,
  isArrayBufferView: Oa,
  isString: La,
  isNumber: mr,
  isBoolean: Pa,
  isObject: it,
  isPlainObject: Ge,
  isReadableStream: za,
  isRequest: Da,
  isResponse: ja,
  isHeaders: Ba,
  isUndefined: ze,
  isDate: Ta,
  isFile: Na,
  isBlob: ka,
  isRegExp: Za,
  isFunction: j,
  isStream: Fa,
  isURLSearchParams: Ia,
  isTypedArray: Ga,
  isFileList: Ra,
  forEach: Be,
  merge: Ct,
  extend: Ha,
  trim: Ua,
  stripBOM: qa,
  inherits: Wa,
  toFlatObject: $a,
  kindOf: st,
  kindOfTest: Y,
  endsWith: Va,
  toArray: Ya,
  forEachEntry: Xa,
  matchAll: Ka,
  isHTMLForm: Ja,
  hasOwnProperty: vn,
  hasOwnProp: vn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gr,
  freezeMethods: es,
  toObjectSet: ts,
  toCamelCase: Qa,
  noop: ns,
  toFiniteNumber: rs,
  findKey: pr,
  global: ue,
  isContextDefined: hr,
  ALPHABET: yr,
  generateString: as,
  isSpecCompliantForm: ss,
  toJSONObject: os,
  isAsyncFn: is,
  isThenable: cs,
  setImmediate: br,
  asap: ls
};
function S(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
u.inherits(S, Error, {
  toJSON: function() {
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
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const vr = S.prototype, xr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xr[e] = { value: e };
});
Object.defineProperties(S, xr);
Object.defineProperty(vr, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, a, s) => {
  const o = Object.create(vr);
  return u.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), S.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const fs = null;
function Ot(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function wr(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function wn(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = wr(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function us(e) {
  return u.isArray(e) && !e.some(Ot);
}
const ds = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ct(e, t, n) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = u.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, p) {
    return !u.isUndefined(p[v]);
  });
  const r = n.metaTokens, a = n.visitor || f, s = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
  if (!u.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (u.isDate(g))
      return g.toISOString();
    if (!l && u.isBlob(g))
      throw new S("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(g) || u.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function f(g, v, p) {
    let m = g;
    if (g && !p && typeof g == "object") {
      if (u.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (u.isArray(g) && us(g) || (u.isFileList(g) || u.endsWith(v, "[]")) && (m = u.toArray(g)))
        return v = wr(v), m.forEach(function(w, C) {
          !(u.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? wn([v], C, s) : o === null ? v : v + "[]",
            c(w)
          );
        }), !1;
    }
    return Ot(g) ? !0 : (t.append(wn(p, v, s), c(g)), !1);
  }
  const d = [], y = Object.assign(ds, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Ot
  });
  function E(g, v) {
    if (!u.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), u.forEach(g, function(m, h) {
        (!(u.isUndefined(m) || m === null) && a.call(
          t,
          m,
          u.isString(h) ? h.trim() : h,
          v,
          y
        )) === !0 && E(m, v ? v.concat(h) : [h]);
      }), d.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function En(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function tn(e, t) {
  this._pairs = [], e && ct(e, this, t);
}
const Er = tn.prototype;
Er.append = function(t, n) {
  this._pairs.push([t, n]);
};
Er.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, En);
  } : En;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function ms(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Sr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ms, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = u.isURLSearchParams(t) ? t.toString() : new tn(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Sn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
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
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ar = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ps = typeof URLSearchParams < "u" ? URLSearchParams : tn, hs = typeof FormData < "u" ? FormData : null, gs = typeof Blob < "u" ? Blob : null, ys = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ps,
    FormData: hs,
    Blob: gs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nn = typeof window < "u" && typeof document < "u", Lt = typeof navigator == "object" && navigator || void 0, bs = nn && (!Lt || ["ReactNative", "NativeScript", "NS"].indexOf(Lt.product) < 0), vs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xs = nn && window.location.href || "http://localhost", ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nn,
  hasStandardBrowserEnv: bs,
  hasStandardBrowserWebWorkerEnv: vs,
  navigator: Lt,
  origin: xs
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...ws,
  ...ys
};
function Es(e, t) {
  return ct(e, new I.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return I.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ss(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function As(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function _r(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && u.isArray(a) ? a.length : o, l ? (u.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !u.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && u.isArray(a[o]) && (a[o] = As(a[o])), !i);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, a) => {
      t(Ss(r), a, n, 0);
    }), n;
  }
  return null;
}
function _s(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ue = {
  transitional: Ar,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = u.isObject(t);
    if (s && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return a ? JSON.stringify(_r(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Es(t, this.formSerializer).toString();
      if ((i = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ct(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), _s(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ue.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (u.isResponse(t) || u.isReadableStream(t))
      return t;
    if (t && u.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (o)
          throw i.name === "SyntaxError" ? S.from(i, S.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return t;
  }],
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
u.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ue.headers[e] = {};
});
const Cs = u.toObjectSet([
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
]), Os = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Cs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, An = Symbol("internals");
function Te(e) {
  return e && String(e).trim().toLowerCase();
}
function Xe(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Xe) : String(e);
}
function Ls(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ps = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ht(e, t, n, r, a) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function Ts(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ns(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, s, o) {
        return this[r].call(this, t, a, s, o);
      },
      configurable: !0
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(i, l, c) {
      const f = Te(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = u.findKey(a, f);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = Xe(i));
    }
    const o = (i, l) => u.forEach(i, (c, f) => s(c, f, l));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (u.isString(t) && (t = t.trim()) && !Ps(t))
      o(Os(t), n);
    else if (u.isHeaders(t))
      for (const [i, l] of t.entries())
        s(l, i, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Te(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Ls(a);
        if (u.isFunction(n))
          return n.call(this, a, r);
        if (u.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Te(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ht(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Te(o), o) {
        const i = u.findKey(r, o);
        i && (!n || ht(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return u.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || ht(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (a, s) => {
      const o = u.findKey(r, s);
      if (o) {
        n[o] = Xe(a), delete n[s];
        return;
      }
      const i = t ? Ts(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Xe(a), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && u.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[An] = this[An] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Te(o);
      r[i] || (Ns(a, o), r[i] = !0);
    }
    return u.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(z);
function gt(e, t) {
  const n = this || Ue, r = t || n, a = z.from(r.headers);
  let s = r.data;
  return u.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Cr(e) {
  return !!(e && e.__CANCEL__);
}
function Le(e, t, n) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, n), this.name = "CanceledError";
}
u.inherits(Le, S, {
  __CANCEL__: !0
});
function Or(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function ks(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), f = r[s];
    o || (o = c), n[a] = l, r[a] = c;
    let d = s, y = 0;
    for (; d !== a; )
      y += n[d++], d = d % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const E = f && c - f;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function Fs(e, t) {
  let n = 0, r = 1e3 / t, a, s;
  const o = (c, f = Date.now()) => {
    n = f, a = null, s && (clearTimeout(s), s = null), e.apply(null, c);
  };
  return [(...c) => {
    const f = Date.now(), d = f - n;
    d >= r ? o(c, f) : (a = c, s || (s = setTimeout(() => {
      s = null, o(a);
    }, r - d)));
  }, () => a && o(a)];
}
const Qe = (e, t, n = 3) => {
  let r = 0;
  const a = Rs(50, 250);
  return Fs((s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, l = o - r, c = a(l), f = o <= i;
    r = o;
    const d = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && f ? (i - o) / c : void 0,
      event: s,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, _n = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Cn = (e) => (...t) => u.asap(() => e(...t)), Ms = I.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = I.navigator && /(msie|trident)/i.test(I.navigator.userAgent), n = document.createElement("a");
    let r;
    function a(s) {
      let o = s;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = a(window.location.href), function(o) {
      const i = u.isString(o) ? a(o) : o;
      return i.protocol === r.protocol && i.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Is = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, s) {
      const o = [e + "=" + encodeURIComponent(t)];
      u.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), u.isString(r) && o.push("path=" + r), u.isString(a) && o.push("domain=" + a), s === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
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
function zs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ds(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Lr(e, t) {
  return e && !zs(t) ? Ds(e, t) : t;
}
const On = (e) => e instanceof z ? { ...e } : e;
function ge(e, t) {
  t = t || {};
  const n = {};
  function r(c, f, d) {
    return u.isPlainObject(c) && u.isPlainObject(f) ? u.merge.call({ caseless: d }, c, f) : u.isPlainObject(f) ? u.merge({}, f) : u.isArray(f) ? f.slice() : f;
  }
  function a(c, f, d) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, f, d);
  }
  function s(c, f) {
    if (!u.isUndefined(f))
      return r(void 0, f);
  }
  function o(c, f) {
    if (u.isUndefined(f)) {
      if (!u.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, f);
  }
  function i(c, f, d) {
    if (d in t)
      return r(c, f);
    if (d in e)
      return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
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
    responseEncoding: o,
    validateStatus: i,
    headers: (c, f) => a(On(c), On(f), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = l[f] || a, y = d(e[f], t[f], f);
    u.isUndefined(y) && d !== i || (n[f] = y);
  }), n;
}
const Pr = (e) => {
  const t = ge({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: s, headers: o, auth: i } = t;
  t.headers = o = z.from(o), t.url = Sr(Lr(t.baseURL, t.url), e.params, e.paramsSerializer), i && o.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (u.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [c, ...f] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(t)), r || r !== !1 && Ms(t.url))) {
    const c = a && s && Is.read(s);
    c && o.set(a, c);
  }
  return t;
}, js = typeof XMLHttpRequest < "u", Bs = js && function(e) {
  return new Promise(function(n, r) {
    const a = Pr(e);
    let s = a.data;
    const o = z.from(a.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = a, f, d, y, E, g;
    function v() {
      E && E(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(a.method.toUpperCase(), a.url, !0), p.timeout = a.timeout;
    function m() {
      if (!p)
        return;
      const w = z.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), _ = {
        data: !i || i === "text" || i === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: e,
        request: p
      };
      Or(function(N) {
        n(N), v();
      }, function(N) {
        r(N), v();
      }, _), p = null;
    }
    "onloadend" in p ? p.onloadend = m : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, p.onabort = function() {
      p && (r(new S("Request aborted", S.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let C = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const _ = a.transitional || Ar;
      a.timeoutErrorMessage && (C = a.timeoutErrorMessage), r(new S(
        C,
        _.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        p
      )), p = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in p && u.forEach(o.toJSON(), function(C, _) {
      p.setRequestHeader(_, C);
    }), u.isUndefined(a.withCredentials) || (p.withCredentials = !!a.withCredentials), i && i !== "json" && (p.responseType = a.responseType), c && ([y, g] = Qe(c, !0), p.addEventListener("progress", y)), l && p.upload && ([d, E] = Qe(l), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", E)), (a.cancelToken || a.signal) && (f = (w) => {
      p && (r(!w || w.type ? new Le(null, e, p) : w), p.abort(), p = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const h = ks(a.url);
    if (h && I.protocols.indexOf(h) === -1) {
      r(new S("Unsupported protocol " + h + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(s || null);
  });
}, Us = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const s = function(c) {
      if (!a) {
        a = !0, i();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof S ? f : new Le(f instanceof Error ? f.message : f));
      }
    };
    let o = t && setTimeout(() => {
      o = null, s(new S(`timeout ${t} of ms exceeded`, S.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(s) : c.removeEventListener("abort", s);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", s));
    const { signal: l } = r;
    return l.unsubscribe = () => u.asap(i), l;
  }
}, Hs = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, qs = async function* (e, t) {
  for await (const n of Ws(e))
    yield* Hs(n, t);
}, Ws = async function* (e) {
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
}, Ln = (e, t, n, r) => {
  const a = qs(e, t);
  let s = 0, o, i = (l) => {
    o || (o = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: f } = await a.next();
        if (c) {
          i(), l.close();
          return;
        }
        let d = f.byteLength;
        if (n) {
          let y = s += d;
          n(y);
        }
        l.enqueue(new Uint8Array(f));
      } catch (c) {
        throw i(c), c;
      }
    },
    cancel(l) {
      return i(l), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, lt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Tr = lt && typeof ReadableStream == "function", $s = lt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Nr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Vs = Tr && Nr(() => {
  let e = !1;
  const t = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Pn = 64 * 1024, Pt = Tr && Nr(() => u.isReadableStream(new Response("").body)), Ze = {
  stream: Pt && ((e) => e.body)
};
lt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ze[t] && (Ze[t] = u.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new S(`Response type '${t}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ys = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(I.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e) || u.isArrayBuffer(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await $s(e)).byteLength;
}, Gs = async (e, t) => {
  const n = u.toFiniteNumber(e.getContentLength());
  return n ?? Ys(t);
}, Xs = lt && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: s,
    timeout: o,
    onDownloadProgress: i,
    onUploadProgress: l,
    responseType: c,
    headers: f,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = Pr(e);
  c = c ? (c + "").toLowerCase() : "text";
  let E = Us([a, s && s.toAbortSignal()], o), g;
  const v = E && E.unsubscribe && (() => {
    E.unsubscribe();
  });
  let p;
  try {
    if (l && Vs && n !== "get" && n !== "head" && (p = await Gs(f, r)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (u.isFormData(r) && (k = _.headers.get("content-type")) && f.setContentType(k), _.body) {
        const [N, te] = _n(
          p,
          Qe(Cn(l))
        );
        r = Ln(_.body, Pn, N, te);
      }
    }
    u.isString(d) || (d = d ? "include" : "omit");
    const m = "credentials" in Request.prototype;
    g = new Request(t, {
      ...y,
      signal: E,
      method: n.toUpperCase(),
      headers: f.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: m ? d : void 0
    });
    let h = await fetch(g);
    const w = Pt && (c === "stream" || c === "response");
    if (Pt && (i || w && v)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((x) => {
        _[x] = h[x];
      });
      const k = u.toFiniteNumber(h.headers.get("content-length")), [N, te] = i && _n(
        k,
        Qe(Cn(i), !0)
      ) || [];
      h = new Response(
        Ln(h.body, Pn, N, () => {
          te && te(), v && v();
        }),
        _
      );
    }
    c = c || "text";
    let C = await Ze[u.findKey(Ze, c) || "text"](h, e);
    return !w && v && v(), await new Promise((_, k) => {
      Or(_, k, {
        data: C,
        headers: z.from(h.headers),
        status: h.status,
        statusText: h.statusText,
        config: e,
        request: g
      });
    });
  } catch (m) {
    throw v && v(), m && m.name === "TypeError" && /fetch/i.test(m.message) ? Object.assign(
      new S("Network Error", S.ERR_NETWORK, e, g),
      {
        cause: m.cause || m
      }
    ) : S.from(m, m && m.code, e, g);
  }
}), Tt = {
  http: fs,
  xhr: Bs,
  fetch: Xs
};
u.forEach(Tt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Tn = (e) => `- ${e}`, Ks = (e) => u.isFunction(e) || e === null || e === !1, kr = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !Ks(n) && (r = Tt[(o = String(n)).toLowerCase()], r === void 0))
        throw new S(`Unknown adapter '${o}'`);
      if (r)
        break;
      a[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(Tn).join(`
`) : " " + Tn(s[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Tt
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Le(null, e);
}
function Nn(e) {
  return yt(e), e.headers = z.from(e.headers), e.data = gt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kr.getAdapter(e.adapter || Ue.adapter)(e).then(function(r) {
    return yt(e), r.data = gt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = z.from(r.headers), r;
  }, function(r) {
    return Cr(r) || (yt(e), r && r.response && (r.response.data = gt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = z.from(r.response.headers))), Promise.reject(r);
  });
}
const Rr = "1.7.7", rn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  rn[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kn = {};
rn.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Rr + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new S(
        a(o, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !kn[o] && (kn[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, i) : !0;
  };
};
function Js(e, t, n) {
  if (typeof e != "object")
    throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], o = t[s];
    if (o) {
      const i = e[s], l = i === void 0 || o(i, s, e);
      if (l !== !0)
        throw new S("option " + s + " must be " + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new S("Unknown option " + s, S.ERR_BAD_OPTION);
  }
}
const Nt = {
  assertOptions: Js,
  validators: rn
}, ne = Nt.validators;
class me {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Sn(),
      response: new Sn()
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
      if (r instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const s = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ge(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Nt.assertOptions(r, {
      silentJSONParsing: ne.transitional(ne.boolean),
      forcedJSONParsing: ne.transitional(ne.boolean),
      clarifyTimeoutError: ne.transitional(ne.boolean)
    }, !1), a != null && (u.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Nt.assertOptions(a, {
      encode: ne.function,
      serialize: ne.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && u.merge(
      s.common,
      s[n.method]
    );
    s && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete s[g];
      }
    ), n.headers = z.concat(o, s);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, i.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let f, d = 0, y;
    if (!l) {
      const g = [Nn.bind(this), void 0];
      for (g.unshift.apply(g, i), g.push.apply(g, c), y = g.length, f = Promise.resolve(n); d < y; )
        f = f.then(g[d++], g[d++]);
      return f;
    }
    y = i.length;
    let E = n;
    for (d = 0; d < y; ) {
      const g = i[d++], v = i[d++];
      try {
        E = g(E);
      } catch (p) {
        v.call(this, p);
        break;
      }
    }
    try {
      f = Nn.call(this, E);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, y = c.length; d < y; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = ge(this.defaults, t);
    const n = Lr(t.baseURL, t.url);
    return Sr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  me.prototype[t] = function(n, r) {
    return this.request(ge(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, i) {
      return this.request(ge(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  me.prototype[t] = n(), me.prototype[t + "Form"] = n(!0);
});
class an {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const o = new Promise((i) => {
        r.subscribe(i), s = i;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, i) {
      r.reason || (r.reason = new Le(s, o, i), n(r.reason));
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
      token: new an(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function Qs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Zs(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const kt = {
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
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
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
  NetworkAuthenticationRequired: 511
};
Object.entries(kt).forEach(([e, t]) => {
  kt[t] = e;
});
function Fr(e) {
  const t = new me(e), n = ur(me.prototype.request, t);
  return u.extend(n, me.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Fr(ge(e, a));
  }, n;
}
const T = Fr(Ue);
T.Axios = me;
T.CanceledError = Le;
T.CancelToken = an;
T.isCancel = Cr;
T.VERSION = Rr;
T.toFormData = ct;
T.AxiosError = S;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = Qs;
T.isAxiosError = Zs;
T.mergeConfig = ge;
T.AxiosHeaders = z;
T.formToJSON = (e) => _r(u.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = kr.getAdapter;
T.HttpStatusCode = kt;
T.default = T;
const eo = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-BykpuCh-.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-D03oxWwg.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-C-_Pfb7m.js")
  },
  content: {
    title: "Contenido",
    icon: "paragraph",
    component: () => import("./Content-CwRkkRio.js")
  },
  url: {
    title: "URL",
    icon: "link",
    component: () => import("./Url-BRRgap8I.js")
  },
  src: {
    title: "SRC",
    icon: "link",
    component: () => import("./Src-tMcduCsP.js")
  }
}, to = {
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
}, no = [
  "color"
];
class He {
  create() {
    const t = this.createElement();
    return Rt(t), t;
  }
}
class ro extends He {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class ao extends He {
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
class so extends He {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class oo extends He {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class io extends He {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const co = (e) => {
  if (e === "div")
    return new ao();
  if (e === "a")
    return new ro();
  if (e === "p")
    return new so();
  if (e === "h1")
    return new oo();
  if (e === "img")
    return new io();
  throw new Error("Invalid type");
}, qe = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, Mr = (e) => {
  qe("elementRemoved", { simplisitiId: e });
}, Ir = (e, t) => {
  qe("contentChange", { simplisitiId: e, content: t });
}, lo = (e, t) => {
  qe("classChange", { simplisitiId: e, spClassList: t });
}, fo = (e, t) => {
  qe("styleChange", { simplisitiId: e, spStyleList: t });
}, uo = (e, t) => {
  qe("attributeChange", { simplisitiId: e, attribute: t });
};
let J = null;
const oe = V(!1), Ae = V(!1), xe = V(null), ae = V(null), mo = (e, t) => {
  Ae.value || (Ae.value = !0, xe.value = t, t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, zr = (e, t) => {
  Ae.value || (yo(), t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, po = (e, t) => {
  Ae.value || t.classList.remove("sp-element__active"), e.preventDefault(), e.stopPropagation();
}, ho = (e, t) => {
  var r, a;
  const n = t;
  ae.value !== null && (J == null || J.replaceWith(ae.value)), n.innerHTML.startsWith("-empty-") && (n.innerHTML = n.innerHTML.replace("-empty-", "")), (r = ae.value) != null && r.dataset.simplisitiid && Mr((a = ae.value) == null ? void 0 : a.dataset.simplisitiid), setTimeout(() => {
    n.classList.remove("sp-element__active"), (n.dataset.simplisitiid || n.id === "simplisiti-component-preview") && Ir(n.dataset.simplisitiid, n.innerHTML.replace(/sp-element__active/, "")), go(), e.preventDefault(), e.stopPropagation();
  }, 10);
}, go = () => {
  oe.value = !1, ae.value = null;
}, yo = () => {
  document.querySelectorAll(".sp-element__active").forEach((t) => {
    t.classList.remove("sp-element__active");
  });
}, bo = (e, t) => {
  J === null && (J = document.createElement("div"), J.id = "sp-element__placeholder", J.classList.add("sp-element__placeholder"));
  const n = Array.from(t.childNodes).filter((a) => a.nodeName != "#text"), r = wo(e, t);
  n[r] !== void 0 ? t.insertBefore(J, n[r]) : t.appendChild(J);
}, vo = (e, t) => {
  if (zr(e, t), oe.value && t.nodeName !== "DIV") {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  oe.value && ae.value !== null && bo(e, t);
}, xo = (e, t) => {
  oe.value || (oe.value = !0, ae.value = t, e.preventDefault(), e.stopPropagation());
}, vl = (e) => {
  oe.value = !0;
  const t = co(e);
  ae.value = t.create();
}, wo = (e, t) => {
  const n = e.clientX, r = e.clientY, a = t.childNodes.values(), s = Array.from(a).filter((o) => o.nodeName != "#text");
  for (let o = 0; o < s.length; o++) {
    const i = s[o].getBoundingClientRect(), l = i.left + i.width / 2, c = i.top + i.height / 2, f = t.classList;
    if (n < l && f.contains("sp-style__layout-flex-direction__row") || r < c && f.contains("sp-style__layout-flex-direction__column"))
      return o;
  }
  return s.length;
}, Rt = (e) => {
  e.addEventListener("click", (n) => mo(n, e)), e.addEventListener("mouseover", (n) => zr(n, e)), e.addEventListener("mouseout", (n) => po(n, e));
  const t = e;
  t.tagName === "DIV" && (t.addEventListener("dragover", (n) => vo(n, e)), t.addEventListener("drop", (n) => ho(n, e))), t.setAttribute("draggable", "true"), e.addEventListener("drag", (n) => xo(n, e));
}, Eo = (e) => {
  const t = Sa[e];
  return to[t].map((r) => ({
    tab: r,
    ...eo[r]
  }));
}, xl = (e, t) => t.find((n) => n.startsWith(e)), bt = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, wl = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), r = parseInt(t[1]), a = parseInt(t[2]);
  return "#" + bt(n) + bt(r) + bt(a);
}, So = (e) => {
  document.querySelectorAll(e).forEach((r) => Rt(r));
  const n = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
  n && Rt(n);
}, Ao = () => {
  Aa.forEach((e) => {
    So(`[data-simplisitiid="simplisiti-component-preview"] ${e}`);
  });
}, _o = (e) => new Promise((t) => {
  T.post("/compile_styles", { html: e }).then(({ data: n }) => {
    let r = document.getElementById("simplisiti-preview-style");
    r || (r = document.createElement("style"), r.id = "simplisiti-preview-style"), r.textContent = n, document.head.appendChild(r), t();
  });
}), Co = { class: "sp-wizard-popup__tabs-container" }, Oo = { class: "sp-wizard-popup__tabs" }, Lo = { class: "sp-wizard-popup__tab" }, Po = ["title", "onClick"], To = { class: "sp-wizard-popup__content" }, No = { class: "sp-wizard-popup__content-header" }, ko = /* @__PURE__ */ ve({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = V([]), a = V({}), s = ba([]), o = V(void 0), i = t, l = () => {
      for (const x of Eo(n.tagName.toLowerCase()))
        s.push({
          component: _t(x.component),
          icon: x.icon,
          title: x.title,
          tab: x.tab,
          spClassList: r.value,
          spStyleList: a.value,
          spContent: {
            content: "",
            type: "text"
          },
          spAttribute: {
            content: "",
            type: "src"
          }
        });
    }, c = (x) => {
      o.value = x, i("tabChange", x.tab);
    }, f = () => {
      s.length > 0 && c(s[0]);
    }, d = (x) => {
      var A;
      return ((A = o.value) == null ? void 0 : A.tab) === x.tab;
    }, y = (x) => new Promise((A) => {
      setTimeout(() => {
        n.classList.remove(x), A();
      }, 10);
    }), E = (x) => new Promise((A) => {
      setTimeout(() => {
        n.classList.add(x), A();
      }, 10);
    }), g = () => new Promise((x) => {
      n.classList.forEach(async (A) => {
        A.startsWith("sp-style") && await y(A);
      }), x();
    }), v = (x) => new Promise((A) => {
      x.forEach(async (D) => {
        await E(D);
      }), A();
    }), p = (x) => new Promise((A) => {
      for (const D in x)
        n.style.setProperty(D, x[D]);
      A();
    }), m = (x) => new Promise((A) => {
      n.innerHTML = x.content, A();
    }), h = (x) => new Promise((A) => {
      n.setAttribute(x.type, x.content), A();
    }), w = (x, A) => {
      A != null && A.spClassList && (A.spClassList = x);
      const D = s.flatMap((P) => P.spClassList);
      r.value = D, g().then(() => {
        v(D).then(() => {
          n.dataset.simplisitiid && lo(n.dataset.simplisitiid, D);
        });
      });
    }, C = (x) => {
      var D;
      (D = o.value) != null && D.spStyleList && (o.value.spStyleList = x);
      const A = s.reduce((P, Ve) => ({ ...P, ...Ve.spStyleList, ...x }), {});
      a.value = A, p(A).then(() => {
        n.dataset.simplisitiid && fo(n.dataset.simplisitiid, A);
      });
    }, _ = (x) => {
      var A;
      (A = o.value) != null && A.spContent && (o.value.spContent = x), m(x).then(() => {
        n.dataset.simplisitiid && x.type === "text" && Ir(n.dataset.simplisitiid, x.content);
      });
    }, k = (x) => {
      var A;
      (A = o.value) != null && A.spAttribute && (o.value.spAttribute = x), h(x).then(() => {
        n.dataset.simplisitiid && uo(n.dataset.simplisitiid, x);
      });
    }, N = () => {
      r.value = Array.from(n.classList).filter((x) => x.startsWith("sp-style"));
    }, te = () => {
      for (let x in n.style)
        no.includes(x) && n.style[x] !== "" && (a.value[x] = n.style[x]);
    };
    return Kt(() => {
      N(), te(), l(), f();
    }), (x, A) => {
      const D = Jt("fa-icon");
      return R(), W(Re, null, [
        M("div", Co, [
          M("div", Oo, [
            (R(!0), W(Re, null, At(de(s), (P) => (R(), W("div", Lo, [
              M("button", {
                class: Qt(["sp-wizard-popup__tab-button", { "sp-wizard-popup__tab-button__active": d(P) }]),
                title: P.title,
                onClick: (Ve) => c(P)
              }, [
                Se(D, {
                  icon: P.icon
                }, null, 8, ["icon"])
              ], 10, Po)
            ]))), 256))
          ])
        ]),
        M("div", To, [
          M("div", No, [
            (R(!0), W(Re, null, At(de(s), (P) => (R(), W("div", null, [
              or(M("div", null, [
                (R(), at(ir(P == null ? void 0 : P.component), {
                  "sp-class-list": P == null ? void 0 : P.spClassList,
                  "onUpdate:spClassList": (Ve) => w(Ve, P),
                  "sp-style-list": P == null ? void 0 : P.spStyleList,
                  "onUpdate:spStyleList": C,
                  element: e.element,
                  "onUpdate:spContent": _,
                  "onUpdate:spAttribute": k
                }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
              ], 512), [
                [va, d(P)]
              ])
            ]))), 256))
          ])
        ])
      ], 64);
    };
  }
}), sn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Ro = /* @__PURE__ */ sn(ko, [["__scopeId", "data-v-0f7f4822"]]), Fo = { class: "sp-configuration-popup__header" }, Mo = { class: "sp-configuration-popup__body" }, Io = /* @__PURE__ */ ve({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = V(null), a = V(!1), s = t, o = (d) => {
      setTimeout(() => {
        if (!d || !r.value) return;
        const y = d.getBoundingClientRect(), E = document.body.offsetWidth, g = document.body.offsetHeight, v = 250, p = 10;
        let m = y.top, h = y.left + y.width + p;
        h + v > E && (h = y.right - v, m = y.top - r.value.offsetHeight - p, m < p && (m = p)), m + r.value.offsetHeight > g && (m = g - r.value.offsetHeight - p), r.value.style.top = `${m}px`, r.value.style.left = `${h}px`;
      }, 50);
    }, i = q(() => {
      var y;
      const d = (y = n == null ? void 0 : n.tagName) == null ? void 0 : y.toLowerCase();
      return d && Ea[d] || "Element";
    }), l = (d) => {
      setTimeout(() => {
        s("close", d), a.value = !0;
      }, 300);
    }, c = (d) => {
      n && (n.remove(), n.dataset.simplisitiid && Mr(n.dataset.simplisitiid), s("close", d)), a.value = !0;
    }, f = () => {
      o(n);
    };
    return o(n), Kt(() => {
      document.addEventListener("scroll", () => {
        o(n);
      });
    }), (d, y) => {
      const E = Jt("fa-icon");
      return R(), W("div", {
        class: Qt(["sp-configuration-popup", { "sp-configuration-popup_closed": a.value }]),
        ref_key: "popup",
        ref: r,
        onClick: cr((g) => {
        }, ["stop"])
      }, [
        M("div", Fo, [
          M("h4", null, xa(i.value), 1),
          M("button", {
            class: "sp-configuration-popup__button",
            onClick: c
          }, [
            Se(E, { icon: "trash" })
          ]),
          M("button", {
            class: "sp-configuration-popup__button",
            onClick: l
          }, [
            Se(E, { icon: "times" })
          ])
        ]),
        M("div", Mo, [
          e.element ? (R(), at(Ro, {
            key: 0,
            element: e.element,
            onTabChange: f
          }, null, 8, ["element"])) : Zt("", !0)
        ])
      ], 2);
    };
  }
}), zo = /* @__PURE__ */ sn(Io, [["__scopeId", "data-v-9896d74d"]]), Rn = [
  {
    icon: "cube",
    component: _t(() => import("./ElementsPanel-JL6fLgg9.js"))
  },
  {
    icon: "comment-dots",
    component: _t(() => import("./CodeGeneratorPanel-DqsBTwGH.js"))
  }
], Do = { class: "sp-element__floating-container" }, jo = { class: "sp-element__component-container" }, Bo = { class: "sp-element__side-buttons" }, Uo = ["onClick"], Ho = /* @__PURE__ */ ve({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = V(!1), n = V(Rn[0]), r = () => {
      t.value = !t.value;
    }, a = (s) => {
      n.value = s, t.value = !0;
    };
    return (s, o) => {
      const i = Jt("fa-icon"), l = wa("key");
      return R(), W("div", Do, [
        M("div", {
          class: Qt(["sp-element__floating-panel", { "sp-element__floating-panel__closed": de(oe) || !t.value }])
        }, [
          M("div", jo, [
            (R(), at(ir(n.value.component)))
          ])
        ], 2),
        M("div", Bo, [
          (R(!0), W(Re, null, At(de(Rn), (c) => or((R(), W("button", {
            class: "sp-element__close-button",
            onClick: (f) => a(c)
          }, [
            Se(i, {
              icon: c.icon
            }, null, 8, ["icon"])
          ], 8, Uo)), [
            [l, c.icon]
          ])), 256)),
          t.value ? (R(), W("button", {
            key: 0,
            class: "sp-element__close-button",
            onClick: r
          }, [
            Se(i, { icon: "times" })
          ])) : Zt("", !0)
        ])
      ]);
    };
  }
}), qo = /* @__PURE__ */ sn(Ho, [["__scopeId", "data-v-e6c667dc"]]), Wo = /* @__PURE__ */ ve({
  __name: "App",
  setup(e) {
    lr(oe, (n) => {
      const r = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      n ? r == null || r.classList.add("sp-element__add-element-mode") : r == null || r.classList.remove("sp-element__add-element-mode");
    });
    const t = () => {
      xe.value && xe.value.classList.remove("sp-element__active"), xe.value = null, Ae.value = !1;
    };
    return Kt(() => {
      const n = document.body.innerHTML;
      _o(n).then(() => {
        Ao();
      });
    }), (n, r) => {
      var a;
      return R(), W(Re, null, [
        de(Ae) ? (R(), at(zo, {
          key: 0,
          element: de(xe),
          type: (a = de(xe)) == null ? void 0 : a.tagName,
          onClose: cr(t, ["stop"])
        }, null, 8, ["element", "type"])) : Zt("", !0),
        Se(qo)
      ], 64);
    };
  }
}), Fn = () => {
};
let on = {}, Dr = {}, jr = null, Br = {
  mark: Fn,
  measure: Fn
};
try {
  typeof window < "u" && (on = window), typeof document < "u" && (Dr = document), typeof MutationObserver < "u" && (jr = MutationObserver), typeof performance < "u" && (Br = performance);
} catch {
}
const {
  userAgent: Mn = ""
} = on.navigator || {}, ie = on, O = Dr, In = jr, Ye = Br;
ie.document;
const ee = !!O.documentElement && !!O.head && typeof O.addEventListener == "function" && typeof O.createElement == "function", Ur = ~Mn.indexOf("MSIE") || ~Mn.indexOf("Trident/");
var L = "classic", Hr = "duotone", B = "sharp", U = "sharp-duotone", $o = [L, Hr, B, U], Vo = {
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
}, zn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Yo = ["kit"], Go = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Xo = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Ko = {
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
}, Jo = {
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
}, Qo = {
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
}, Zo = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, ei = {
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
}, ti = {
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
}, qr = {
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
}, ni = ["solid", "regular", "light", "thin", "duotone", "brands"], Wr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ri = Wr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ne = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ai = [...Object.keys(Zo), ...ni, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ne.GROUP, Ne.SWAP_OPACITY, Ne.PRIMARY, Ne.SECONDARY].concat(Wr.map((e) => "".concat(e, "x"))).concat(ri.map((e) => "w-".concat(e))), si = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, oi = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ii = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Dn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Q = "___FONT_AWESOME___", Ft = 16, $r = "fa", Vr = "svg-inline--fa", ye = "data-fa-i2svg", Mt = "data-fa-pseudo-element", ci = "data-fa-pseudo-element-pending", cn = "data-prefix", ln = "data-icon", jn = "fontawesome-i2svg", li = "async", fi = ["HTML", "HEAD", "STYLE", "SCRIPT"], Yr = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Gr = [L, B, U];
function We(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[L];
    }
  });
}
const Xr = {
  ...qr
};
Xr[L] = {
  ...qr[L],
  ...zn.kit,
  ...zn["kit-duotone"]
};
const pe = We(Xr), It = {
  ...ti
};
It[L] = {
  ...It[L],
  ...Dn.kit,
  ...Dn["kit-duotone"]
};
const De = We(It), zt = {
  ...ei
};
zt[L] = {
  ...zt[L],
  ...ii.kit
};
const he = We(zt), Dt = {
  ...Qo
};
Dt[L] = {
  ...Dt[L],
  ...oi.kit
};
const ui = We(Dt), di = Go, Kr = "fa-layers-text", mi = Xo, pi = {
  ...Vo
};
We(pi);
const hi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], vt = Ne, _e = /* @__PURE__ */ new Set();
Object.keys(De[L]).map(_e.add.bind(_e));
Object.keys(De[B]).map(_e.add.bind(_e));
Object.keys(De[U]).map(_e.add.bind(_e));
const gi = [...Yo, ...ai], Fe = ie.FontAwesomeConfig || {};
function yi(e) {
  var t = O.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function bi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
O && typeof O.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = bi(yi(n));
  a != null && (Fe[r] = a);
});
const Jr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: $r,
  replacementClass: Vr,
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
Fe.familyPrefix && (Fe.cssPrefix = Fe.familyPrefix);
const Ce = {
  ...Jr,
  ...Fe
};
Ce.autoReplaceSvg || (Ce.observeMutations = !1);
const b = {};
Object.keys(Jr).forEach((e) => {
  Object.defineProperty(b, e, {
    enumerable: !0,
    set: function(t) {
      Ce[e] = t, Me.forEach((n) => n(b));
    },
    get: function() {
      return Ce[e];
    }
  });
});
Object.defineProperty(b, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ce.cssPrefix = e, Me.forEach((t) => t(b));
  },
  get: function() {
    return Ce.cssPrefix;
  }
});
ie.FontAwesomeConfig = b;
const Me = [];
function vi(e) {
  return Me.push(e), () => {
    Me.splice(Me.indexOf(e), 1);
  };
}
const re = Ft, G = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function xi(e) {
  if (!e || !ee)
    return;
  const t = O.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = O.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const s = n[a], o = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = s);
  }
  return O.head.insertBefore(t, r), e;
}
const wi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function je() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += wi[Math.random() * 62 | 0];
  return t;
}
function Pe(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function fn(e) {
  return e.classList ? Pe(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Qr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ei(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Qr(e[n]), '" '), "").trim();
}
function ft(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function un(e) {
  return e.size !== G.size || e.x !== G.x || e.y !== G.y || e.rotate !== G.rotate || e.flipX || e.flipY;
}
function Si(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), i = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(s, " ").concat(o, " ").concat(i)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: l,
    path: c
  };
}
function Ai(e) {
  let {
    transform: t,
    width: n = Ft,
    height: r = Ft,
    startCentered: a = !1
  } = e, s = "";
  return a && Ur ? s += "translate(".concat(t.x / re - n / 2, "em, ").concat(t.y / re - r / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : s += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), s += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var _i = `:root, :host {
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
function Zr() {
  const e = $r, t = Vr, n = b.cssPrefix, r = b.replacementClass;
  let a = _i;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    a = a.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return a;
}
let Bn = !1;
function xt() {
  b.autoAddCss && !Bn && (xi(Zr()), Bn = !0);
}
var Ci = {
  mixout() {
    return {
      dom: {
        css: Zr,
        insertCss: xt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        xt();
      },
      beforeI2svg() {
        xt();
      }
    };
  }
};
const Z = ie || {};
Z[Q] || (Z[Q] = {});
Z[Q].styles || (Z[Q].styles = {});
Z[Q].hooks || (Z[Q].hooks = {});
Z[Q].shims || (Z[Q].shims = []);
var X = Z[Q];
const ea = [], ta = function() {
  O.removeEventListener("DOMContentLoaded", ta), et = 1, ea.map((e) => e());
};
let et = !1;
ee && (et = (O.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(O.readyState), et || O.addEventListener("DOMContentLoaded", ta));
function Oi(e) {
  ee && (et ? setTimeout(e, 0) : ea.push(e));
}
function $e(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Qr(e) : "<".concat(t, " ").concat(Ei(n), ">").concat(r.map($e).join(""), "</").concat(t, ">");
}
function Un(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var wt = function(t, n, r, a) {
  var s = Object.keys(t), o = s.length, i = n, l, c, f;
  for (r === void 0 ? (l = 1, f = t[s[0]]) : (l = 0, f = r); l < o; l++)
    c = s[l], f = i(f, t[c], c, t);
  return f;
};
function Li(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      const s = e.charCodeAt(n++);
      (s & 64512) == 56320 ? t.push(((a & 1023) << 10) + (s & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function jt(e) {
  const t = Li(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Pi(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Hn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Bt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Hn(t);
  typeof X.hooks.addPack == "function" && !r ? X.hooks.addPack(e, Hn(t)) : X.styles[e] = {
    ...X.styles[e] || {},
    ...a
  }, e === "fas" && Bt("fa", t);
}
const {
  styles: fe,
  shims: Ti
} = X, Ni = {
  [L]: Object.values(he[L]),
  [B]: Object.values(he[B]),
  [U]: Object.values(he[U])
};
let dn = null, na = {}, ra = {}, aa = {}, sa = {}, oa = {};
const ki = {
  [L]: Object.keys(pe[L]),
  [B]: Object.keys(pe[B]),
  [U]: Object.keys(pe[U])
};
function Ri(e) {
  return ~gi.indexOf(e);
}
function Fi(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ri(a) ? a : null;
}
const ia = () => {
  const e = (r) => wt(fe, (a, s, o) => (a[o] = wt(s, r, {}), a), {});
  na = e((r, a, s) => (a[3] && (r[a[3]] = s), a[2] && a[2].filter((i) => typeof i == "number").forEach((i) => {
    r[i.toString(16)] = s;
  }), r)), ra = e((r, a, s) => (r[s] = s, a[2] && a[2].filter((i) => typeof i == "string").forEach((i) => {
    r[i] = s;
  }), r)), oa = e((r, a, s) => {
    const o = a[2];
    return r[s] = s, o.forEach((i) => {
      r[i] = s;
    }), r;
  });
  const t = "far" in fe || b.autoFetchSvg, n = wt(Ti, (r, a) => {
    const s = a[0];
    let o = a[1];
    const i = a[2];
    return o === "far" && !t && (o = "fas"), typeof s == "string" && (r.names[s] = {
      prefix: o,
      iconName: i
    }), typeof s == "number" && (r.unicodes[s.toString(16)] = {
      prefix: o,
      iconName: i
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  aa = n.names, sa = n.unicodes, dn = ut(b.styleDefault, {
    family: b.familyDefault
  });
};
vi((e) => {
  dn = ut(e.styleDefault, {
    family: b.familyDefault
  });
});
ia();
function mn(e, t) {
  return (na[e] || {})[t];
}
function Mi(e, t) {
  return (ra[e] || {})[t];
}
function se(e, t) {
  return (oa[e] || {})[t];
}
function ca(e) {
  return aa[e] || {
    prefix: null,
    iconName: null
  };
}
function Ii(e) {
  const t = sa[e], n = mn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ce() {
  return dn;
}
const pn = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ut(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = L
  } = t, r = pe[n][e], a = De[n][e] || De[n][r], s = e in X.styles ? e : null;
  return a || s || null;
}
const zi = {
  [L]: Object.keys(he[L]),
  [B]: Object.keys(he[B]),
  [U]: Object.keys(he[U])
};
function dt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [L]: "".concat(b.cssPrefix, "-").concat(L),
    [B]: "".concat(b.cssPrefix, "-").concat(B),
    [U]: "".concat(b.cssPrefix, "-").concat(U)
  };
  let a = null, s = L;
  const o = $o.filter((l) => l !== Hr);
  o.forEach((l) => {
    (e.includes(r[l]) || e.some((c) => zi[l].includes(c))) && (s = l);
  });
  const i = e.reduce((l, c) => {
    const f = Fi(b.cssPrefix, c);
    if (fe[c] ? (c = Ni[s].includes(c) ? ui[s][c] : c, a = c, l.prefix = c) : ki[s].indexOf(c) > -1 ? (a = c, l.prefix = ut(c, {
      family: s
    })) : f ? l.iconName = f : c !== b.replacementClass && !o.some((d) => c === r[d]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const d = a === "fa" ? ca(l.iconName) : {}, y = se(l.prefix, l.iconName);
      d.prefix && (a = null), l.iconName = d.iconName || y || l.iconName, l.prefix = d.prefix || l.prefix, l.prefix === "far" && !fe.far && fe.fas && !b.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, pn());
  return (e.includes("fa-brands") || e.includes("fab")) && (i.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (i.prefix = "fad"), !i.prefix && s === B && (fe.fass || b.autoFetchSvg) && (i.prefix = "fass", i.iconName = se(i.prefix, i.iconName) || i.iconName), !i.prefix && s === U && (fe.fasds || b.autoFetchSvg) && (i.prefix = "fasds", i.iconName = se(i.prefix, i.iconName) || i.iconName), (i.prefix === "fa" || a === "fa") && (i.prefix = ce() || "fas"), i;
}
class Di {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const a = n.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((s) => {
      this.definitions[s] = {
        ...this.definitions[s] || {},
        ...a[s]
      }, Bt(s, a[s]);
      const o = he[L][s];
      o && Bt(o, a[s]), ia();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((a) => {
      const {
        prefix: s,
        iconName: o,
        icon: i
      } = r[a], l = i[2];
      t[s] || (t[s] = {}), l.length > 0 && l.forEach((c) => {
        typeof c == "string" && (t[s][c] = i);
      }), t[s][o] = i;
    }), t;
  }
}
let qn = [], we = {};
const Ee = {}, ji = Object.keys(Ee);
function Bi(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return qn = e, we = {}, Object.keys(Ee).forEach((r) => {
    ji.indexOf(r) === -1 && delete Ee[r];
  }), qn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((s) => {
      typeof a[s] == "function" && (n[s] = a[s]), typeof a[s] == "object" && Object.keys(a[s]).forEach((o) => {
        n[s] || (n[s] = {}), n[s][o] = a[s][o];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((o) => {
        we[o] || (we[o] = []), we[o].push(s[o]);
      });
    }
    r.provides && r.provides(Ee);
  }), n;
}
function Ut(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (we[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function be(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (we[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function le() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ee[e] ? Ee[e].apply(null, t) : void 0;
}
function Ht(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ce();
  if (t)
    return t = se(n, t) || t, Un(la.definitions, n, t) || Un(X.styles, n, t);
}
const la = new Di(), Ui = () => {
  b.autoReplaceSvg = !1, b.observeMutations = !1, be("noAuto");
}, Hi = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (be("beforeI2svg", e), le("pseudoElements2svg", e), le("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    b.autoReplaceSvg === !1 && (b.autoReplaceSvg = !0), b.observeMutations = !0, Oi(() => {
      Wi({
        autoReplaceSvgRoot: t
      }), be("watch", e);
    });
  }
}, qi = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: se(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ut(e[0]);
      return {
        prefix: n,
        iconName: se(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(b.cssPrefix, "-")) > -1 || e.match(di))) {
      const t = dt(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ce(),
        iconName: se(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ce();
      return {
        prefix: t,
        iconName: se(t, e) || e
      };
    }
  }
}, H = {
  noAuto: Ui,
  config: b,
  dom: Hi,
  parse: qi,
  library: la,
  findIconDefinition: Ht,
  toHtml: $e
}, Wi = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = O
  } = e;
  (Object.keys(X.styles).length > 0 || b.autoFetchSvg) && ee && b.autoReplaceSvg && H.dom.i2svg({
    node: t
  });
};
function mt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => $e(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ee) return;
      const n = O.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function $i(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: s,
    transform: o
  } = e;
  if (un(o) && n.found && !r.found) {
    const {
      width: i,
      height: l
    } = n, c = {
      x: i / l / 2,
      y: 0.5
    };
    a.style = ft({
      ...s,
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Vi(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: a,
    symbol: s
  } = e;
  const o = s === !0 ? "".concat(t, "-").concat(b.cssPrefix, "-").concat(n) : s;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...a,
        id: o
      },
      children: r
    }]
  }];
}
function hn(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: a,
    transform: s,
    symbol: o,
    title: i,
    maskId: l,
    titleId: c,
    extra: f,
    watchable: d = !1
  } = e, {
    width: y,
    height: E
  } = n.found ? n : t, g = r === "fak", v = [b.replacementClass, a ? "".concat(b.cssPrefix, "-").concat(a) : ""].filter((_) => f.classes.indexOf(_) === -1).filter((_) => _ !== "" || !!_).concat(f.classes).join(" ");
  let p = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": r,
      "data-icon": a,
      class: v,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(E)
    }
  };
  const m = g && !~f.classes.indexOf("fa-fw") ? {
    width: "".concat(y / E * 16 * 0.0625, "em")
  } : {};
  d && (p.attributes[ye] = ""), i && (p.children.push({
    tag: "title",
    attributes: {
      id: p.attributes["aria-labelledby"] || "title-".concat(c || je())
    },
    children: [i]
  }), delete p.attributes.title);
  const h = {
    ...p,
    prefix: r,
    iconName: a,
    main: t,
    mask: n,
    maskId: l,
    transform: s,
    symbol: o,
    styles: {
      ...m,
      ...f.styles
    }
  }, {
    children: w,
    attributes: C
  } = n.found && t.found ? le("generateAbstractMask", h) || {
    children: [],
    attributes: {}
  } : le("generateAbstractIcon", h) || {
    children: [],
    attributes: {}
  };
  return h.children = w, h.attributes = C, o ? Vi(h) : $i(h);
}
function Wn(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: a,
    title: s,
    extra: o,
    watchable: i = !1
  } = e, l = {
    ...o.attributes,
    ...s ? {
      title: s
    } : {},
    class: o.classes.join(" ")
  };
  i && (l[ye] = "");
  const c = {
    ...o.styles
  };
  un(a) && (c.transform = Ai({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const f = ft(c);
  f.length > 0 && (l.style = f);
  const d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), s && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [s]
  }), d;
}
function Yi(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, a = {
    ...r.attributes,
    ...n ? {
      title: n
    } : {},
    class: r.classes.join(" ")
  }, s = ft(r.styles);
  s.length > 0 && (a.style = s);
  const o = [];
  return o.push({
    tag: "span",
    attributes: a,
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
  styles: Et
} = X;
function qt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(b.cssPrefix, "-").concat(vt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(b.cssPrefix, "-").concat(vt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(b.cssPrefix, "-").concat(vt.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : a = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: a
  };
}
const Gi = {
  found: !1,
  width: 512,
  height: 512
};
function Xi(e, t) {
  !Yr && !b.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Wt(e, t) {
  let n = t;
  return t === "fa" && b.styleDefault !== null && (t = ce()), new Promise((r, a) => {
    if (n === "fa") {
      const s = ca(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && Et[t] && Et[t][e]) {
      const s = Et[t][e];
      return r(qt(s));
    }
    Xi(e, t), r({
      ...Gi,
      icon: b.showMissingIcons && e ? le("missingIconAbstract") || {} : {}
    });
  });
}
const $n = () => {
}, $t = b.measurePerformance && Ye && Ye.mark && Ye.measure ? Ye : {
  mark: $n,
  measure: $n
}, ke = 'FA "6.6.0"', Ki = (e) => ($t.mark("".concat(ke, " ").concat(e, " begins")), () => fa(e)), fa = (e) => {
  $t.mark("".concat(ke, " ").concat(e, " ends")), $t.measure("".concat(ke, " ").concat(e), "".concat(ke, " ").concat(e, " begins"), "".concat(ke, " ").concat(e, " ends"));
};
var gn = {
  begin: Ki,
  end: fa
};
const Ke = () => {
};
function Vn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ye) : null) == "string";
}
function Ji(e) {
  const t = e.getAttribute ? e.getAttribute(cn) : null, n = e.getAttribute ? e.getAttribute(ln) : null;
  return t && n;
}
function Qi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(b.replacementClass);
}
function Zi() {
  return b.autoReplaceSvg === !0 ? Je.replace : Je[b.autoReplaceSvg] || Je.replace;
}
function ec(e) {
  return O.createElementNS("http://www.w3.org/2000/svg", e);
}
function tc(e) {
  return O.createElement(e);
}
function ua(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? ec : tc
  } = t;
  if (typeof e == "string")
    return O.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(ua(s, {
      ceFn: n
    }));
  }), r;
}
function nc(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Je = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ua(n), t);
      }), t.getAttribute(ye) === null && b.keepOriginalSource) {
        let n = O.createComment(nc(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~fn(t).indexOf(b.replacementClass))
      return Je.replace(e);
    const r = new RegExp("".concat(b.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((o, i) => (i === b.replacementClass || i.match(r) ? o.toSvg.push(i) : o.toNode.push(i), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const a = n.map((s) => $e(s)).join(`
`);
    t.setAttribute(ye, ""), t.innerHTML = a;
  }
};
function Yn(e) {
  e();
}
function da(e, t) {
  const n = typeof t == "function" ? t : Ke;
  if (e.length === 0)
    n();
  else {
    let r = Yn;
    b.mutateApproach === li && (r = ie.requestAnimationFrame || Yn), r(() => {
      const a = Zi(), s = gn.begin("mutate");
      e.map(a), s(), n();
    });
  }
}
let yn = !1;
function ma() {
  yn = !0;
}
function Vt() {
  yn = !1;
}
let tt = null;
function Gn(e) {
  if (!In || !b.observeMutations)
    return;
  const {
    treeCallback: t = Ke,
    nodeCallback: n = Ke,
    pseudoElementsCallback: r = Ke,
    observeMutationsRoot: a = O
  } = e;
  tt = new In((s) => {
    if (yn) return;
    const o = ce();
    Pe(s).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !Vn(i.addedNodes[0]) && (b.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && b.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && Vn(i.target) && ~hi.indexOf(i.attributeName))
        if (i.attributeName === "class" && Ji(i.target)) {
          const {
            prefix: l,
            iconName: c
          } = dt(fn(i.target));
          i.target.setAttribute(cn, l || o), c && i.target.setAttribute(ln, c);
        } else Qi(i.target) && n(i.target);
    });
  }), ee && tt.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function rc() {
  tt && tt.disconnect();
}
function ac(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const s = a.split(":"), o = s[0], i = s.slice(1);
    return o && i.length > 0 && (r[o] = i.join(":").trim()), r;
  }, {})), n;
}
function sc(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = dt(fn(e));
  return a.prefix || (a.prefix = ce()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Mi(a.prefix, e.innerText) || mn(a.prefix, jt(e.innerText))), !a.iconName && b.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function oc(e) {
  const t = Pe(e.attributes).reduce((a, s) => (a.name !== "class" && a.name !== "style" && (a[s.name] = s.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return b.autoA11y && (n ? t["aria-labelledby"] = "".concat(b.replacementClass, "-title-").concat(r || je()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ic() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: G,
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
function Xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = sc(e), s = oc(e), o = Ut("parseNodeAttributes", {}, e);
  let i = t.styleParser ? ac(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: G,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: i,
      attributes: s
    },
    ...o
  };
}
const {
  styles: cc
} = X;
function pa(e) {
  const t = b.autoReplaceSvg === "nest" ? Xn(e, {
    styleParser: !1
  }) : Xn(e);
  return ~t.extra.classes.indexOf(Kr) ? le("generateLayersText", e, t) : le("generateSvgReplacementMutation", e, t);
}
let K = /* @__PURE__ */ new Set();
Gr.map((e) => {
  K.add("fa-".concat(e));
});
Object.keys(pe[L]).map(K.add.bind(K));
Object.keys(pe[B]).map(K.add.bind(K));
Object.keys(pe[U]).map(K.add.bind(K));
K = [...K];
function Kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = O.documentElement.classList, r = (f) => n.add("".concat(jn, "-").concat(f)), a = (f) => n.remove("".concat(jn, "-").concat(f)), s = b.autoFetchSvg ? K : Gr.map((f) => "fa-".concat(f)).concat(Object.keys(cc));
  s.includes("fa") || s.push("fa");
  const o = [".".concat(Kr, ":not([").concat(ye, "])")].concat(s.map((f) => ".".concat(f, ":not([").concat(ye, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Pe(e.querySelectorAll(o));
  } catch {
  }
  if (i.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const l = gn.begin("onTree"), c = i.reduce((f, d) => {
    try {
      const y = pa(d);
      y && f.push(y);
    } catch (y) {
      Yr || y.name === "MissingIcon" && console.error(y);
    }
    return f;
  }, []);
  return new Promise((f, d) => {
    Promise.all(c).then((y) => {
      da(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), f();
      });
    }).catch((y) => {
      l(), d(y);
    });
  });
}
function lc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pa(e).then((n) => {
    n && da([n], t);
  });
}
function fc(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ht(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : Ht(a || {})), e(r, {
      ...n,
      mask: a
    });
  };
}
const uc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = G,
    symbol: r = !1,
    mask: a = null,
    maskId: s = null,
    title: o = null,
    titleId: i = null,
    classes: l = [],
    attributes: c = {},
    styles: f = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: y,
    icon: E
  } = e;
  return mt({
    type: "icon",
    ...e
  }, () => (be("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), b.autoA11y && (o ? c["aria-labelledby"] = "".concat(b.replacementClass, "-title-").concat(i || je()) : (c["aria-hidden"] = "true", c.focusable = "false")), hn({
    icons: {
      main: qt(E),
      mask: a ? qt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: y,
    transform: {
      ...G,
      ...n
    },
    symbol: r,
    title: o,
    maskId: s,
    titleId: i,
    extra: {
      attributes: c,
      styles: f,
      classes: l
    }
  })));
};
var dc = {
  mixout() {
    return {
      icon: fc(uc)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Kn, e.nodeCallback = lc, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = O,
        callback: r = () => {
        }
      } = t;
      return Kn(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: a,
        titleId: s,
        prefix: o,
        transform: i,
        symbol: l,
        mask: c,
        maskId: f,
        extra: d
      } = n;
      return new Promise((y, E) => {
        Promise.all([Wt(r, o), c.iconName ? Wt(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((g) => {
          let [v, p] = g;
          y([t, hn({
            icons: {
              main: v,
              mask: p
            },
            prefix: o,
            iconName: r,
            transform: i,
            symbol: l,
            maskId: f,
            title: a,
            titleId: s,
            extra: d,
            watchable: !0
          })]);
        }).catch(E);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        transform: s,
        styles: o
      } = t;
      const i = ft(o);
      i.length > 0 && (r.style = i);
      let l;
      return un(s) && (l = le("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), n.push(l || a.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, mc = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return mt({
          type: "layer"
        }, () => {
          be("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((a) => {
            Array.isArray(a) ? a.map((s) => {
              r = r.concat(s.abstract);
            }) : r = r.concat(a.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(b.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, pc = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: a = {},
          styles: s = {}
        } = t;
        return mt({
          type: "counter",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Yi({
          content: e.toString(),
          title: n,
          extra: {
            attributes: a,
            styles: s,
            classes: ["".concat(b.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, hc = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = G,
          title: r = null,
          classes: a = [],
          attributes: s = {},
          styles: o = {}
        } = t;
        return mt({
          type: "text",
          content: e
        }, () => (be("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Wn({
          content: e,
          transform: {
            ...G,
            ...n
          },
          title: r,
          extra: {
            attributes: s,
            styles: o,
            classes: ["".concat(b.cssPrefix, "-layers-text"), ...a]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: a,
        extra: s
      } = n;
      let o = null, i = null;
      if (Ur) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / l, i = c.height / l;
      }
      return b.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Wn({
        content: t.innerHTML,
        width: o,
        height: i,
        transform: a,
        title: r,
        extra: s,
        watchable: !0
      })]);
    };
  }
};
const gc = new RegExp('"', "ug"), Jn = [1105920, 1112319], Qn = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Jo,
  ...Ko,
  ...si
}, Yt = Object.keys(Qn).reduce((e, t) => (e[t.toLowerCase()] = Qn[t], e), {}), yc = Object.keys(Yt).reduce((e, t) => {
  const n = Yt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function bc(e) {
  const t = e.replace(gc, ""), n = Pi(t, 0), r = n >= Jn[0] && n <= Jn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: jt(a ? t[0] : t),
    isSecondary: r || a
  };
}
function vc(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Yt[n] || {})[a] || yc[n];
}
function Zn(e, t) {
  const n = "".concat(ci).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Pe(e.children).filter((y) => y.getAttribute(Mt) === t)[0], i = ie.getComputedStyle(e, t), l = i.getPropertyValue("font-family"), c = l.match(mi), f = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
    if (c && d !== "none" && d !== "") {
      const y = i.getPropertyValue("content");
      let E = vc(l, f);
      const {
        value: g,
        isSecondary: v
      } = bc(y), p = c[0].startsWith("FontAwesome");
      let m = mn(E, g), h = m;
      if (p) {
        const w = Ii(g);
        w.iconName && w.prefix && (m = w.iconName, E = w.prefix);
      }
      if (m && !v && (!o || o.getAttribute(cn) !== E || o.getAttribute(ln) !== h)) {
        e.setAttribute(n, h), o && e.removeChild(o);
        const w = ic(), {
          extra: C
        } = w;
        C.attributes[Mt] = t, Wt(m, E).then((_) => {
          const k = hn({
            ...w,
            icons: {
              main: _,
              mask: pn()
            },
            prefix: E,
            iconName: h,
            extra: C,
            watchable: !0
          }), N = O.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(N, e.firstChild) : e.appendChild(N), N.outerHTML = k.map((te) => $e(te)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function xc(e) {
  return Promise.all([Zn(e, "::before"), Zn(e, "::after")]);
}
function wc(e) {
  return e.parentNode !== document.head && !~fi.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Mt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function er(e) {
  if (ee)
    return new Promise((t, n) => {
      const r = Pe(e.querySelectorAll("*")).filter(wc).map(xc), a = gn.begin("searchPseudoElements");
      ma(), Promise.all(r).then(() => {
        a(), Vt(), t();
      }).catch(() => {
        a(), Vt(), n();
      });
    });
}
var Ec = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = er, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = O
      } = t;
      b.searchPseudoElements && er(n);
    };
  }
};
let tr = !1;
var Sc = {
  mixout() {
    return {
      dom: {
        unwatch() {
          ma(), tr = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Gn(Ut("mutationObserverCallbacks", {}));
      },
      noAuto() {
        rc();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        tr ? Vt() : Gn(Ut("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const nr = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const a = r.toLowerCase().split("-"), s = a[0];
    let o = a.slice(1).join("-");
    if (s && o === "h")
      return n.flipX = !0, n;
    if (s && o === "v")
      return n.flipY = !0, n;
    if (o = parseFloat(o), isNaN(o))
      return n;
    switch (s) {
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
var Ac = {
  mixout() {
    return {
      parse: {
        transform: (e) => nr(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = nr(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: a,
        iconWidth: s
      } = t;
      const o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, i = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), f = {
        transform: "".concat(i, " ").concat(l, " ").concat(c)
      }, d = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, y = {
        outer: o,
        inner: f,
        path: d
      };
      return {
        tag: "g",
        attributes: {
          ...y.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...y.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...y.path
            }
          }]
        }]
      };
    };
  }
};
const St = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function rr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function _c(e) {
  return e.tag === "g" ? e.children : [e];
}
var Cc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? dt(n.split(" ").map((a) => a.trim())) : pn();
        return r.prefix || (r.prefix = ce()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: a,
        mask: s,
        maskId: o,
        transform: i
      } = t;
      const {
        width: l,
        icon: c
      } = a, {
        width: f,
        icon: d
      } = s, y = Si({
        transform: i,
        containerWidth: f,
        iconWidth: l
      }), E = {
        tag: "rect",
        attributes: {
          ...St,
          fill: "white"
        }
      }, g = c.children ? {
        children: c.children.map(rr)
      } : {}, v = {
        tag: "g",
        attributes: {
          ...y.inner
        },
        children: [rr({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...y.path
          },
          ...g
        })]
      }, p = {
        tag: "g",
        attributes: {
          ...y.outer
        },
        children: [v]
      }, m = "mask-".concat(o || je()), h = "clip-".concat(o || je()), w = {
        tag: "mask",
        attributes: {
          ...St,
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [E, p]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h
          },
          children: _c(d)
        }, w]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(m, ")"),
          ...St
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Oc = {
  provides(e) {
    let t = !1;
    ie.matchMedia && (t = ie.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, a = {
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
      const s = {
        ...a,
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
          ...a,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...s,
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
            ...s,
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
}, Lc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Pc = [Ci, dc, mc, pc, hc, Ec, Sc, Ac, Cc, Oc, Lc];
Bi(Pc, {
  mixoutsTo: H
});
H.noAuto;
const ha = H.config, Tc = H.library;
H.dom;
const nt = H.parse;
H.findIconDefinition;
H.toHtml;
const Nc = H.icon;
H.layer;
const kc = H.text;
H.counter;
const Rc = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Fc = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Mc = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, Ic = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, zc = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Dc = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, jc = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Bc = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Uc = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, Hc = {
  prefix: "fas",
  iconName: "comment-dots",
  icon: [512, 512, [128172, 62075, "commenting"], "f4ad", "M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3c0 0 0 0 0 0c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, qc = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Wc = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, $c = {
  prefix: "fas",
  iconName: "gear",
  icon: [512, 512, [9881, "cog"], "f013", "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]
}, Vc = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Yc = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Gc = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Xc = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, Kc = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, Jc = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, Qc = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Zc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, el = {
  prefix: "fas",
  iconName: "gears",
  icon: [640, 512, ["cogs"], "f085", "M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
};
function ar(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ar(Object(n), !0).forEach(function(r) {
      F(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ar(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tl(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nl(e) {
  var t = tl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
}
function F(e, t, n) {
  return t = nl(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rl(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function al(e, t) {
  if (e == null) return {};
  var n = rl(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Gt(e) {
  return sl(e) || ol(e) || il(e) || cl();
}
function sl(e) {
  if (Array.isArray(e)) return Xt(e);
}
function ol(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function il(e, t) {
  if (e) {
    if (typeof e == "string") return Xt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xt(e, t);
  }
}
function Xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ll = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ga = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(m, h, w) {
      if (!c(h) || d(h) || y(h) || E(h) || l(h))
        return h;
      var C, _ = 0, k = 0;
      if (f(h))
        for (C = [], k = h.length; _ < k; _++)
          C.push(n(m, h[_], w));
      else {
        C = {};
        for (var N in h)
          Object.prototype.hasOwnProperty.call(h, N) && (C[m(N, w)] = n(m, h[N], w));
      }
      return C;
    }, r = function(m, h) {
      h = h || {};
      var w = h.separator || "_", C = h.split || /(?=[A-Z])/;
      return m.split(C).join(w);
    }, a = function(m) {
      return g(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function(h, w) {
        return w ? w.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, s = function(m) {
      var h = a(m);
      return h.substr(0, 1).toUpperCase() + h.substr(1);
    }, o = function(m, h) {
      return r(m, h).toLowerCase();
    }, i = Object.prototype.toString, l = function(m) {
      return typeof m == "function";
    }, c = function(m) {
      return m === Object(m);
    }, f = function(m) {
      return i.call(m) == "[object Array]";
    }, d = function(m) {
      return i.call(m) == "[object Date]";
    }, y = function(m) {
      return i.call(m) == "[object RegExp]";
    }, E = function(m) {
      return i.call(m) == "[object Boolean]";
    }, g = function(m) {
      return m = m - 0, m === m;
    }, v = function(m, h) {
      var w = h && "process" in h ? h.process : h;
      return typeof w != "function" ? m : function(C, _) {
        return w(C, m, _);
      };
    }, p = {
      camelize: a,
      decamelize: o,
      pascalize: s,
      depascalize: o,
      camelizeKeys: function(m, h) {
        return n(v(a, h), m);
      },
      decamelizeKeys: function(m, h) {
        return n(v(o, h), m, h);
      },
      pascalizeKeys: function(m, h) {
        return n(v(s, h), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = p : t.humps = p;
  })(ll);
})(ga);
var fl = ga.exports, ul = ["class", "style"];
function dl(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = fl.camelize(n.slice(0, r)), s = n.slice(r + 1).trim();
    return t[a] = s, t;
  }, {});
}
function ml(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function bn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return bn(l);
  }), a = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var f = e.attributes[c];
    switch (c) {
      case "class":
        l.class = ml(f);
        break;
      case "style":
        l.style = dl(f);
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
  var s = n.style, o = s === void 0 ? {} : s, i = al(n, ul);
  return fr(e.tag, $($($({}, t), {}, {
    class: a.class,
    style: $($({}, a.style), o)
  }, a.attrs), i), r);
}
var ya = !1;
try {
  ya = process.env.NODE_ENV === "production";
} catch {
}
function pl() {
  if (!ya && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ie(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? F({}, e, t) : {};
}
function hl(e) {
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
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function sr(e) {
  if (e && rt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (nt.icon)
    return nt.icon(e);
  if (e === null)
    return null;
  if (rt(e) === "object" && e.prefix && e.iconName)
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
var gl = ve({
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
    var r = n.attrs, a = q(function() {
      return sr(t.icon);
    }), s = q(function() {
      return Ie("classes", hl(t));
    }), o = q(function() {
      return Ie("transform", typeof t.transform == "string" ? nt.transform(t.transform) : t.transform);
    }), i = q(function() {
      return Ie("mask", sr(t.mask));
    }), l = q(function() {
      return Nc(a.value, $($($($({}, s.value), o.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    lr(l, function(f) {
      if (!f)
        return pl("Could not find one or more icon(s)", a.value, i.value);
    }, {
      immediate: !0
    });
    var c = q(function() {
      return l.value ? bn(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
});
ve({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, a = ha.familyPrefix, s = q(function() {
      return ["".concat(a, "-layers")].concat(Gt(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return fr("div", {
        class: s.value
      }, r.default ? r.default() : []);
    };
  }
});
ve({
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
    var r = n.attrs, a = ha.familyPrefix, s = q(function() {
      return Ie("classes", [].concat(Gt(t.counter ? ["".concat(a, "-layers-counter")] : []), Gt(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), o = q(function() {
      return Ie("transform", typeof t.transform == "string" ? nt.transform(t.transform) : t.transform);
    }), i = q(function() {
      var c = kc(t.value.toString(), $($({}, o.value), s.value)), f = c.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = q(function() {
      return bn(i.value, {}, r);
    });
    return function() {
      return l.value;
    };
  }
});
Tc.add(
  Zc,
  Yc,
  Dc,
  Rc,
  Wc,
  Bc,
  Qc,
  Jc,
  Vc,
  Fc,
  zc,
  jc,
  Xc,
  qc,
  Kc,
  Gc,
  Uc,
  Mc,
  Ic,
  Hc,
  el,
  $c
);
const El = {
  install: (e) => {
    e.component("simplisiti-component-editor", Wo), e.component("fa-icon", gl);
  }
};
export {
  bl as H,
  sn as _,
  Ea as a,
  T as b,
  _o as c,
  go as d,
  vl as e,
  Ir as f,
  Ao as i,
  El as m,
  xl as p,
  wl as r
};
