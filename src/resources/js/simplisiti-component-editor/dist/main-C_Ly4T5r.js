import { ref as $, defineComponent as be, shallowReactive as ha, onMounted as Yt, resolveComponent as Gt, openBlock as q, createElementBlock as ae, createElementVNode as D, Fragment as pn, renderList as hn, unref as we, normalizeClass as Xt, createVNode as Me, withDirectives as ga, createBlock as rt, resolveDynamicComponent as nr, vShow as ya, defineAsyncComponent as rr, computed as z, withModifiers as ar, toDisplayString as ba, createCommentVNode as sr, watch as or, h as ir } from "vue";
const va = {
  div: "Contenedor",
  a: "Enlace",
  p: "Párrafo",
  h1: "Cabecera 1",
  img: "Imagen"
}, xa = {
  div: "container",
  a: "ancord",
  p: "paragraph",
  h1: "header1",
  img: "image"
}, fl = {
  div: "square",
  a: "link",
  p: "paragraph",
  h1: "heading",
  img: "image"
}, wa = [
  "div",
  "a",
  "p",
  "h1",
  "img"
];
function cr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ea } = Object.prototype, { getPrototypeOf: Kt } = Object, at = /* @__PURE__ */ ((e) => (t) => {
  const n = Ea.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), V = (e) => (e = e.toLowerCase(), (t) => at(t) === e), st = (e) => (t) => typeof t === e, { isArray: Oe } = Array, Ie = st("undefined");
function Sa(e) {
  return e !== null && !Ie(e) && e.constructor !== null && !Ie(e.constructor) && j(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const lr = V("ArrayBuffer");
function Aa(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && lr(e.buffer), t;
}
const Ca = st("string"), j = st("function"), fr = st("number"), ot = (e) => e !== null && typeof e == "object", Oa = (e) => e === !0 || e === !1, Ye = (e) => {
  if (at(e) !== "object")
    return !1;
  const t = Kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, _a = V("Date"), La = V("File"), Pa = V("Blob"), Ta = V("FileList"), Na = (e) => ot(e) && j(e.pipe), ka = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || j(e.append) && ((t = at(e)) === "formdata" || // detect form-data instance
  t === "object" && j(e.toString) && e.toString() === "[object FormData]"));
}, Ra = V("URLSearchParams"), [Fa, Ma, Ia, za] = ["ReadableStream", "Request", "Response", "Headers"].map(V), Da = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function je(e, t, { allOwnKeys: n = !1 } = {}) {
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
function ur(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const ue = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, dr = (e) => !Ie(e) && e !== ue;
function St() {
  const { caseless: e } = dr(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && ur(t, a) || a;
    Ye(t[s]) && Ye(r) ? t[s] = St(t[s], r) : Ye(r) ? t[s] = St({}, r) : Oe(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && je(arguments[r], n);
  return t;
}
const ja = (e, t, n, { allOwnKeys: r } = {}) => (je(t, (a, s) => {
  n && j(a) ? e[s] = cr(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), Ba = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ua = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ha = (e, t, n, r) => {
  let a, s, o;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !i[o] && (t[o] = e[o], i[o] = !0);
    e = n !== !1 && Kt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, qa = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wa = (e) => {
  if (!e) return null;
  if (Oe(e)) return e;
  let t = e.length;
  if (!fr(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $a = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Kt(Uint8Array)), Va = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, Ya = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Ga = V("HTMLFormElement"), Xa = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), gn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ka = V("RegExp"), mr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  je(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, Ja = (e) => {
  mr(e, (t, n) => {
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
}, Qa = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Oe(e) ? r(e) : r(String(e).split(t)), n;
}, Za = () => {
}, es = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, mt = "abcdefghijklmnopqrstuvwxyz", yn = "0123456789", pr = {
  DIGIT: yn,
  ALPHA: mt,
  ALPHA_DIGIT: mt + mt.toUpperCase() + yn
}, ts = (e = 16, t = pr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ns(e) {
  return !!(e && j(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const rs = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (ot(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Oe(r) ? [] : {};
        return je(r, (o, i) => {
          const l = n(o, a + 1);
          !Ie(l) && (s[i] = l);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, as = V("AsyncFunction"), ss = (e) => e && (ot(e) || j(e)) && j(e.then) && j(e.catch), hr = ((e, t) => e ? setImmediate : t ? ((n, r) => (ue.addEventListener("message", ({ source: a, data: s }) => {
  a === ue && s === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), ue.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  j(ue.postMessage)
), os = typeof queueMicrotask < "u" ? queueMicrotask.bind(ue) : typeof process < "u" && process.nextTick || hr, u = {
  isArray: Oe,
  isArrayBuffer: lr,
  isBuffer: Sa,
  isFormData: ka,
  isArrayBufferView: Aa,
  isString: Ca,
  isNumber: fr,
  isBoolean: Oa,
  isObject: ot,
  isPlainObject: Ye,
  isReadableStream: Fa,
  isRequest: Ma,
  isResponse: Ia,
  isHeaders: za,
  isUndefined: Ie,
  isDate: _a,
  isFile: La,
  isBlob: Pa,
  isRegExp: Ka,
  isFunction: j,
  isStream: Na,
  isURLSearchParams: Ra,
  isTypedArray: $a,
  isFileList: Ta,
  forEach: je,
  merge: St,
  extend: ja,
  trim: Da,
  stripBOM: Ba,
  inherits: Ua,
  toFlatObject: Ha,
  kindOf: at,
  kindOfTest: V,
  endsWith: qa,
  toArray: Wa,
  forEachEntry: Va,
  matchAll: Ya,
  isHTMLForm: Ga,
  hasOwnProperty: gn,
  hasOwnProp: gn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: mr,
  freezeMethods: Ja,
  toObjectSet: Qa,
  toCamelCase: Xa,
  noop: Za,
  toFiniteNumber: es,
  findKey: ur,
  global: ue,
  isContextDefined: dr,
  ALPHABET: pr,
  generateString: ts,
  isSpecCompliantForm: ns,
  toJSONObject: rs,
  isAsyncFn: as,
  isThenable: ss,
  setImmediate: hr,
  asap: os
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
const gr = S.prototype, yr = {};
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
  yr[e] = { value: e };
});
Object.defineProperties(S, yr);
Object.defineProperty(gr, "isAxiosError", { value: !0 });
S.from = (e, t, n, r, a, s) => {
  const o = Object.create(gr);
  return u.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), S.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const is = null;
function At(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function br(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function bn(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = br(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function cs(e) {
  return u.isArray(e) && !e.some(At);
}
const ls = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function it(e, t, n) {
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
      else if (u.isArray(g) && cs(g) || (u.isFileList(g) || u.endsWith(v, "[]")) && (m = u.toArray(g)))
        return v = br(v), m.forEach(function(w, O) {
          !(u.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? bn([v], O, s) : o === null ? v : v + "[]",
            c(w)
          );
        }), !1;
    }
    return At(g) ? !0 : (t.append(bn(p, v, s), c(g)), !1);
  }
  const d = [], y = Object.assign(ls, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: At
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
function vn(e) {
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
function Jt(e, t) {
  this._pairs = [], e && it(e, this, t);
}
const vr = Jt.prototype;
vr.append = function(t, n) {
  this._pairs.push([t, n]);
};
vr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, vn);
  } : vn;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function fs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || fs, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = u.isURLSearchParams(t) ? t.toString() : new Jt(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class xn {
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
const wr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, us = typeof URLSearchParams < "u" ? URLSearchParams : Jt, ds = typeof FormData < "u" ? FormData : null, ms = typeof Blob < "u" ? Blob : null, ps = {
  isBrowser: !0,
  classes: {
    URLSearchParams: us,
    FormData: ds,
    Blob: ms
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qt = typeof window < "u" && typeof document < "u", Ct = typeof navigator == "object" && navigator || void 0, hs = Qt && (!Ct || ["ReactNative", "NativeScript", "NS"].indexOf(Ct.product) < 0), gs = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ys = Qt && window.location.href || "http://localhost", bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qt,
  hasStandardBrowserEnv: hs,
  hasStandardBrowserWebWorkerEnv: gs,
  navigator: Ct,
  origin: ys
}, Symbol.toStringTag, { value: "Module" })), F = {
  ...bs,
  ...ps
};
function vs(e, t) {
  return it(e, new F.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return F.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xs(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ws(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Er(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const i = Number.isFinite(+o), l = s >= n.length;
    return o = !o && u.isArray(a) ? a.length : o, l ? (u.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !i) : ((!a[o] || !u.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && u.isArray(a[o]) && (a[o] = ws(a[o])), !i);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, a) => {
      t(xs(r), a, n, 0);
    }), n;
  }
  return null;
}
function Es(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Be = {
  transitional: wr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = u.isObject(t);
    if (s && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return a ? JSON.stringify(Er(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return vs(t, this.formSerializer).toString();
      if ((i = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return it(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), Es(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Be.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
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
    FormData: F.classes.FormData,
    Blob: F.classes.Blob
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
  Be.headers[e] = {};
});
const Ss = u.toObjectSet([
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
]), As = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Ss[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, wn = Symbol("internals");
function Pe(e) {
  return e && String(e).trim().toLowerCase();
}
function Ge(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ge) : String(e);
}
function Cs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pt(e, t, n, r, a) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function _s(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ls(e, t) {
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
class M {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(i, l, c) {
      const f = Pe(l);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = u.findKey(a, f);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || l] = Ge(i));
    }
    const o = (i, l) => u.forEach(i, (c, f) => s(c, f, l));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (u.isString(t) && (t = t.trim()) && !Os(t))
      o(As(t), n);
    else if (u.isHeaders(t))
      for (const [i, l] of t.entries())
        s(l, i, r);
    else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Pe(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Cs(a);
        if (u.isFunction(n))
          return n.call(this, a, r);
        if (u.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Pe(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Pe(o), o) {
        const i = u.findKey(r, o);
        i && (!n || pt(r, r[i], i, n)) && (delete r[i], a = !0);
      }
    }
    return u.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || pt(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (a, s) => {
      const o = u.findKey(r, s);
      if (o) {
        n[o] = Ge(a), delete n[s];
        return;
      }
      const i = t ? _s(s) : String(s).trim();
      i !== s && delete n[s], n[i] = Ge(a), r[i] = !0;
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
    const r = (this[wn] = this[wn] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const i = Pe(o);
      r[i] || (Ls(a, o), r[i] = !0);
    }
    return u.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
M.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(M.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(M);
function ht(e, t) {
  const n = this || Be, r = t || n, a = M.from(r.headers);
  let s = r.data;
  return u.forEach(e, function(i) {
    s = i.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Sr(e) {
  return !!(e && e.__CANCEL__);
}
function _e(e, t, n) {
  S.call(this, e ?? "canceled", S.ERR_CANCELED, t, n), this.name = "CanceledError";
}
u.inherits(_e, S, {
  __CANCEL__: !0
});
function Ar(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new S(
    "Request failed with status code " + n.status,
    [S.ERR_BAD_REQUEST, S.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ps(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ts(e, t) {
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
function Ns(e, t) {
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
const Je = (e, t, n = 3) => {
  let r = 0;
  const a = Ts(50, 250);
  return Ns((s) => {
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
}, En = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Sn = (e) => (...t) => u.asap(() => e(...t)), ks = F.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = F.navigator && /(msie|trident)/i.test(F.navigator.userAgent), n = document.createElement("a");
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
), Rs = F.hasStandardBrowserEnv ? (
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
function Fs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ms(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cr(e, t) {
  return e && !Fs(t) ? Ms(e, t) : t;
}
const An = (e) => e instanceof M ? { ...e } : e;
function he(e, t) {
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
    headers: (c, f) => a(An(c), An(f), !0)
  };
  return u.forEach(Object.keys(Object.assign({}, e, t)), function(f) {
    const d = l[f] || a, y = d(e[f], t[f], f);
    u.isUndefined(y) && d !== i || (n[f] = y);
  }), n;
}
const Or = (e) => {
  const t = he({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: s, headers: o, auth: i } = t;
  t.headers = o = M.from(o), t.url = xr(Cr(t.baseURL, t.url), e.params, e.paramsSerializer), i && o.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (u.isFormData(n)) {
    if (F.hasStandardBrowserEnv || F.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [c, ...f] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...f].join("; "));
    }
  }
  if (F.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(t)), r || r !== !1 && ks(t.url))) {
    const c = a && s && Rs.read(s);
    c && o.set(a, c);
  }
  return t;
}, Is = typeof XMLHttpRequest < "u", zs = Is && function(e) {
  return new Promise(function(n, r) {
    const a = Or(e);
    let s = a.data;
    const o = M.from(a.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = a, f, d, y, E, g;
    function v() {
      E && E(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(f), a.signal && a.signal.removeEventListener("abort", f);
    }
    let p = new XMLHttpRequest();
    p.open(a.method.toUpperCase(), a.url, !0), p.timeout = a.timeout;
    function m() {
      if (!p)
        return;
      const w = M.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), C = {
        data: !i || i === "text" || i === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: w,
        config: e,
        request: p
      };
      Ar(function(N) {
        n(N), v();
      }, function(N) {
        r(N), v();
      }, C), p = null;
    }
    "onloadend" in p ? p.onloadend = m : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, p.onabort = function() {
      p && (r(new S("Request aborted", S.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new S("Network Error", S.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let O = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const C = a.transitional || wr;
      a.timeoutErrorMessage && (O = a.timeoutErrorMessage), r(new S(
        O,
        C.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED,
        e,
        p
      )), p = null;
    }, s === void 0 && o.setContentType(null), "setRequestHeader" in p && u.forEach(o.toJSON(), function(O, C) {
      p.setRequestHeader(C, O);
    }), u.isUndefined(a.withCredentials) || (p.withCredentials = !!a.withCredentials), i && i !== "json" && (p.responseType = a.responseType), c && ([y, g] = Je(c, !0), p.addEventListener("progress", y)), l && p.upload && ([d, E] = Je(l), p.upload.addEventListener("progress", d), p.upload.addEventListener("loadend", E)), (a.cancelToken || a.signal) && (f = (w) => {
      p && (r(!w || w.type ? new _e(null, e, p) : w), p.abort(), p = null);
    }, a.cancelToken && a.cancelToken.subscribe(f), a.signal && (a.signal.aborted ? f() : a.signal.addEventListener("abort", f)));
    const h = Ps(a.url);
    if (h && F.protocols.indexOf(h) === -1) {
      r(new S("Unsupported protocol " + h + ":", S.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(s || null);
  });
}, Ds = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const s = function(c) {
      if (!a) {
        a = !0, i();
        const f = c instanceof Error ? c : this.reason;
        r.abort(f instanceof S ? f : new _e(f instanceof Error ? f.message : f));
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
}, js = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, Bs = async function* (e, t) {
  for await (const n of Us(e))
    yield* js(n, t);
}, Us = async function* (e) {
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
}, Cn = (e, t, n, r) => {
  const a = Bs(e, t);
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
}, ct = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", _r = ct && typeof ReadableStream == "function", Hs = ct && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Lr = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, qs = _r && Lr(() => {
  let e = !1;
  const t = new Request(F.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), On = 64 * 1024, Ot = _r && Lr(() => u.isReadableStream(new Response("").body)), Qe = {
  stream: Ot && ((e) => e.body)
};
ct && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Qe[t] && (Qe[t] = u.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new S(`Response type '${t}' is not supported`, S.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ws = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(F.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e) || u.isArrayBuffer(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await Hs(e)).byteLength;
}, $s = async (e, t) => {
  const n = u.toFiniteNumber(e.getContentLength());
  return n ?? Ws(t);
}, Vs = ct && (async (e) => {
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
  } = Or(e);
  c = c ? (c + "").toLowerCase() : "text";
  let E = Ds([a, s && s.toAbortSignal()], o), g;
  const v = E && E.unsubscribe && (() => {
    E.unsubscribe();
  });
  let p;
  try {
    if (l && qs && n !== "get" && n !== "head" && (p = await $s(f, r)) !== 0) {
      let C = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (u.isFormData(r) && (k = C.headers.get("content-type")) && f.setContentType(k), C.body) {
        const [N, te] = En(
          p,
          Je(Sn(l))
        );
        r = Cn(C.body, On, N, te);
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
    const w = Ot && (c === "stream" || c === "response");
    if (Ot && (i || w && v)) {
      const C = {};
      ["status", "statusText", "headers"].forEach((x) => {
        C[x] = h[x];
      });
      const k = u.toFiniteNumber(h.headers.get("content-length")), [N, te] = i && En(
        k,
        Je(Sn(i), !0)
      ) || [];
      h = new Response(
        Cn(h.body, On, N, () => {
          te && te(), v && v();
        }),
        C
      );
    }
    c = c || "text";
    let O = await Qe[u.findKey(Qe, c) || "text"](h, e);
    return !w && v && v(), await new Promise((C, k) => {
      Ar(C, k, {
        data: O,
        headers: M.from(h.headers),
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
}), _t = {
  http: is,
  xhr: zs,
  fetch: Vs
};
u.forEach(_t, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _n = (e) => `- ${e}`, Ys = (e) => u.isFunction(e) || e === null || e === !1, Pr = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !Ys(n) && (r = _t[(o = String(n)).toLowerCase()], r === void 0))
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
` + s.map(_n).join(`
`) : " " + _n(s[0]) : "as no adapter specified";
      throw new S(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: _t
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _e(null, e);
}
function Ln(e) {
  return gt(e), e.headers = M.from(e.headers), e.data = ht.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pr.getAdapter(e.adapter || Be.adapter)(e).then(function(r) {
    return gt(e), r.data = ht.call(
      e,
      e.transformResponse,
      r
    ), r.headers = M.from(r.headers), r;
  }, function(r) {
    return Sr(r) || (gt(e), r && r.response && (r.response.data = ht.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = M.from(r.response.headers))), Promise.reject(r);
  });
}
const Tr = "1.7.7", Zt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Zt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Pn = {};
Zt.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Tr + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, i) => {
    if (t === !1)
      throw new S(
        a(o, " has been removed" + (n ? " in " + n : "")),
        S.ERR_DEPRECATED
      );
    return n && !Pn[o] && (Pn[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, i) : !0;
  };
};
function Gs(e, t, n) {
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
const Lt = {
  assertOptions: Gs,
  validators: Zt
}, ne = Lt.validators;
class de {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new xn(),
      response: new xn()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = he(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Lt.assertOptions(r, {
      silentJSONParsing: ne.transitional(ne.boolean),
      forcedJSONParsing: ne.transitional(ne.boolean),
      clarifyTimeoutError: ne.transitional(ne.boolean)
    }, !1), a != null && (u.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Lt.assertOptions(a, {
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
    ), n.headers = M.concat(o, s);
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
      const g = [Ln.bind(this), void 0];
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
      f = Ln.call(this, E);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, y = c.length; d < y; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(t) {
    t = he(this.defaults, t);
    const n = Cr(t.baseURL, t.url);
    return xr(n, t.params, t.paramsSerializer);
  }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
  de.prototype[t] = function(n, r) {
    return this.request(he(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, i) {
      return this.request(he(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  de.prototype[t] = n(), de.prototype[t + "Form"] = n(!0);
});
class en {
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
      r.reason || (r.reason = new _e(s, o, i), n(r.reason));
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
      token: new en(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function Xs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ks(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const Pt = {
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
Object.entries(Pt).forEach(([e, t]) => {
  Pt[t] = e;
});
function Nr(e) {
  const t = new de(e), n = cr(de.prototype.request, t);
  return u.extend(n, de.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Nr(he(e, a));
  }, n;
}
const T = Nr(Be);
T.Axios = de;
T.CanceledError = _e;
T.CancelToken = en;
T.isCancel = Sr;
T.VERSION = Tr;
T.toFormData = it;
T.AxiosError = S;
T.Cancel = T.CanceledError;
T.all = function(t) {
  return Promise.all(t);
};
T.spread = Xs;
T.isAxiosError = Ks;
T.mergeConfig = he;
T.AxiosHeaders = M;
T.formToJSON = (e) => Er(u.isHTMLForm(e) ? new FormData(e) : e);
T.getAdapter = Pr.getAdapter;
T.HttpStatusCode = Pt;
T.default = T;
const Js = {
  layout: {
    title: "Layout",
    icon: "object-group",
    component: () => import("./Layout-DevmKf9e.js")
  },
  spacing: {
    title: "Espaciado",
    icon: "expand",
    component: () => import("./Spacing-C4tGem1q.js")
  },
  font: {
    title: "Fuente",
    icon: "font",
    component: () => import("./Font-BX4hOYdk.js")
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
}, Qs = {
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
}, Zs = [
  "color"
];
class Ue {
  create() {
    const t = this.createElement();
    return Tt(t), t;
  }
}
class eo extends Ue {
  createElement() {
    const t = document.createElement("a");
    return t.innerHTML = "Enlace", t;
  }
}
class to extends Ue {
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
class no extends Ue {
  createElement() {
    const t = document.createElement("p");
    return t.innerHTML = "Parrafo", t;
  }
}
class ro extends Ue {
  createElement() {
    const t = document.createElement("h1");
    return t.innerHTML = "Cabecera 1", t;
  }
}
class ao extends Ue {
  createElement() {
    const t = document.createElement("img");
    return t.src = "https://via.placeholder.com/150", t;
  }
}
const so = (e) => {
  if (e === "div")
    return new to();
  if (e === "a")
    return new eo();
  if (e === "p")
    return new no();
  if (e === "h1")
    return new ro();
  if (e === "img")
    return new ao();
  throw new Error("Invalid type");
}, He = (e, t) => {
  window.parent.document.dispatchEvent(new CustomEvent(e, { detail: t }));
}, kr = (e) => {
  He("elementRemoved", { simplisitiId: e });
}, Rr = (e, t) => {
  He("contentChange", { simplisitiId: e, content: t });
}, oo = (e, t) => {
  He("classChange", { simplisitiId: e, spClassList: t });
}, io = (e, t) => {
  He("styleChange", { simplisitiId: e, spStyleList: t });
}, co = (e, t) => {
  He("attributeChange", { simplisitiId: e, attribute: t });
};
let K = null;
const J = $(!1), Se = $(!1), ve = $(null), se = $(null), lo = (e, t) => {
  Se.value || (Se.value = !0, ve.value = t, t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, Fr = (e, t) => {
  Se.value || (po(), t.classList.add("sp-element__active")), e.preventDefault(), e.stopPropagation();
}, fo = (e, t) => {
  Se.value || t.classList.remove("sp-element__active"), e.preventDefault(), e.stopPropagation();
}, uo = (e, t) => {
  var r, a;
  const n = t;
  se.value !== null && (K == null || K.replaceWith(se.value)), n.innerHTML.startsWith("-empty-") && (n.innerHTML = n.innerHTML.replace("-empty-", "")), (r = se.value) != null && r.dataset.simplisitiid && kr((a = se.value) == null ? void 0 : a.dataset.simplisitiid), setTimeout(() => {
    n.classList.remove("sp-element__active"), (n.dataset.simplisitiid || n.id === "simplisiti-component-preview") && Rr(n.dataset.simplisitiid, n.innerHTML.replace(/sp-element__active/, "")), mo(), e.preventDefault(), e.stopPropagation();
  }, 10);
}, mo = () => {
  J.value = !1, se.value = null;
}, po = () => {
  document.querySelectorAll(".sp-element__active").forEach((t) => {
    t.classList.remove("sp-element__active");
  });
}, ho = (e, t) => {
  K === null && (K = document.createElement("div"), K.id = "sp-element__placeholder", K.classList.add("sp-element__placeholder"));
  const n = Array.from(t.childNodes).filter((a) => a.nodeName != "#text"), r = bo(e, t);
  n[r] !== void 0 ? t.insertBefore(K, n[r]) : t.appendChild(K);
}, go = (e, t) => {
  if (Fr(e, t), J.value && t.nodeName !== "DIV") {
    e.preventDefault(), e.stopPropagation();
    return;
  }
  J.value && se.value !== null && ho(e, t);
}, yo = (e, t) => {
  J.value || (J.value = !0, se.value = t, e.preventDefault(), e.stopPropagation());
}, ul = (e) => {
  J.value = !0;
  const t = so(e);
  se.value = t.create();
}, bo = (e, t) => {
  const n = e.clientX, r = e.clientY, a = t.childNodes.values(), s = Array.from(a).filter((o) => o.nodeName != "#text");
  for (let o = 0; o < s.length; o++) {
    const i = s[o].getBoundingClientRect(), l = i.left + i.width / 2, c = i.top + i.height / 2, f = t.classList;
    if (n < l && f.contains("sp-style__layout-flex-direction__row") || r < c && f.contains("sp-style__layout-flex-direction__column"))
      return o;
  }
  return s.length;
}, Tt = (e) => {
  e.addEventListener("click", (n) => lo(n, e)), e.addEventListener("mouseover", (n) => Fr(n, e)), e.addEventListener("mouseout", (n) => fo(n, e));
  const t = e;
  t.tagName === "DIV" && (t.addEventListener("dragover", (n) => go(n, e)), t.addEventListener("drop", (n) => uo(n, e))), t.setAttribute("draggable", "true"), e.addEventListener("drag", (n) => yo(n, e));
}, vo = (e) => {
  const t = xa[e];
  return Qs[t].map((r) => ({
    tab: r,
    ...Js[r]
  }));
}, dl = (e, t) => t.find((n) => n.startsWith(e)), yt = (e) => {
  var t = e.toString(16);
  return t.length == 1 ? "0" + t : t;
}, ml = (e) => {
  if (e === "")
    return "";
  if (e.match(/#[0-9A-Fa-f]{6}/))
    return e;
  const t = e.match(/\d+/g), n = parseInt(t[0]), r = parseInt(t[1]), a = parseInt(t[2]);
  return "#" + yt(n) + yt(r) + yt(a);
}, xo = (e) => {
  document.querySelectorAll(e).forEach((r) => Tt(r));
  const n = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
  n && Tt(n);
}, wo = () => {
  wa.forEach((e) => {
    xo(`[data-simplisitiid="simplisiti-component-preview"] ${e}`);
  });
}, Eo = (e) => new Promise((t) => {
  T.post("/compile_styles", { html: e }).then(({ data: n }) => {
    let r = document.getElementById("simplisiti-preview-style");
    r || (r = document.createElement("style"), r.id = "simplisiti-preview-style"), r.textContent = n, document.head.appendChild(r), t();
  });
}), So = { class: "w-[215px]" }, Ao = { class: "flex" }, Co = ["title", "onClick"], Oo = { class: "pt-2" }, _o = /* @__PURE__ */ be({
  __name: "Wizard",
  props: {
    element: {
      type: HTMLElement,
      required: !0
    }
  },
  emits: ["tabChange"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = $([]), a = $({}), s = ha([]), o = $(void 0), i = t, l = () => {
      for (const x of vo(n.tagName.toLowerCase()))
        s.push({
          component: rr(x.component),
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
      x.forEach(async (I) => {
        await E(I);
      }), A();
    }), p = (x) => new Promise((A) => {
      for (const I in x)
        n.style.setProperty(I, x[I]);
      A();
    }), m = (x) => new Promise((A) => {
      n.innerHTML = x.content, A();
    }), h = (x) => new Promise((A) => {
      n.setAttribute(x.type, x.content), A();
    }), w = (x, A) => {
      A != null && A.spClassList && (A.spClassList = x);
      const I = s.flatMap((P) => P.spClassList);
      r.value = I, g().then(() => {
        v(I).then(() => {
          n.dataset.simplisitiid && oo(n.dataset.simplisitiid, I);
        });
      });
    }, O = (x) => {
      var I;
      (I = o.value) != null && I.spStyleList && (o.value.spStyleList = x);
      const A = s.reduce((P, $e) => ({ ...P, ...$e.spStyleList, ...x }), {});
      a.value = A, p(A).then(() => {
        n.dataset.simplisitiid && io(n.dataset.simplisitiid, A);
      });
    }, C = (x) => {
      var A;
      (A = o.value) != null && A.spContent && (o.value.spContent = x), m(x).then(() => {
        n.dataset.simplisitiid && x.type === "text" && Rr(n.dataset.simplisitiid, x.content);
      });
    }, k = (x) => {
      var A;
      (A = o.value) != null && A.spAttribute && (o.value.spAttribute = x), h(x).then(() => {
        n.dataset.simplisitiid && co(n.dataset.simplisitiid, x);
      });
    }, N = () => {
      r.value = Array.from(n.classList).filter((x) => x.startsWith("sp-style"));
    }, te = () => {
      for (let x in n.style)
        Zs.includes(x) && n.style[x] !== "" && (a.value[x] = n.style[x]);
    };
    return Yt(() => {
      N(), te(), l(), f();
    }), (x, A) => {
      const I = Gt("fa-icon");
      return q(), ae("div", So, [
        D("div", Ao, [
          (q(!0), ae(pn, null, hn(we(s), (P) => (q(), ae("div", {
            key: P.tab
          }, [
            D("button", {
              class: Xt([
                "cursor-pointer border-0 bg-gray-100 p-2 text-sm text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset",
                { "bg-blue-100 text-blue-900": d(P) }
              ]),
              title: P.title,
              onClick: ($e) => c(P)
            }, [
              Me(I, {
                icon: P.icon
              }, null, 8, ["icon"])
            ], 10, Co)
          ]))), 128))
        ]),
        D("div", Oo, [
          (q(!0), ae(pn, null, hn(we(s), (P) => (q(), ae("div", null, [
            ga(D("div", null, [
              (q(), rt(nr(P == null ? void 0 : P.component), {
                "sp-class-list": P == null ? void 0 : P.spClassList,
                "onUpdate:spClassList": ($e) => w($e, P),
                "sp-style-list": P == null ? void 0 : P.spStyleList,
                "onUpdate:spStyleList": O,
                element: e.element,
                "onUpdate:spContent": C,
                "onUpdate:spAttribute": k
              }, null, 40, ["sp-class-list", "onUpdate:spClassList", "sp-style-list", "element"]))
            ], 512), [
              [ya, d(P)]
            ])
          ]))), 256))
        ])
      ]);
    };
  }
}), Lo = { class: "flex items-center gap-2 border-b border-gray-200 py-1.5" }, Po = { class: "m-0 text-sm font-semibold text-gray-800" }, To = { class: "pt-2" }, No = /* @__PURE__ */ be({
  __name: "ConfigurationPopUp",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const { element: n } = e, r = $(null), a = $(!1), s = t, o = (d) => {
      setTimeout(() => {
        if (!d || !r.value) return;
        const y = d.getBoundingClientRect(), E = document.body.offsetWidth, g = document.body.offsetHeight, v = 250, p = 10;
        let m = y.top, h = y.left + y.width + p;
        h + v > E && (h = y.right - v, m = y.top - r.value.offsetHeight - p, m < p && (m = p)), m + r.value.offsetHeight > g && (m = g - r.value.offsetHeight - p), r.value.style.top = `${m}px`, r.value.style.left = `${h}px`;
      }, 50);
    }, i = z(() => {
      var y;
      const d = (y = n == null ? void 0 : n.tagName) == null ? void 0 : y.toLowerCase();
      return d && va[d] || "Element";
    }), l = (d) => {
      setTimeout(() => {
        s("close", d), a.value = !0;
      }, 300);
    }, c = (d) => {
      n && (n.remove(), n.dataset.simplisitiid && kr(n.dataset.simplisitiid), s("close", d)), a.value = !0;
    }, f = () => {
      o(n);
    };
    return o(n), Yt(() => {
      document.addEventListener("scroll", () => {
        o(n);
      });
    }), (d, y) => {
      const E = Gt("fa-icon");
      return q(), ae("div", {
        class: Xt([
          "fixed z-[1000] min-w-max rounded-md bg-white p-3 shadow-lg ring-1 ring-black/5 animate-editor-fade-in",
          { "animate-editor-fade-out": a.value }
        ]),
        ref_key: "popup",
        ref: r,
        onClick: y[0] || (y[0] = ar(() => {
        }, ["stop"]))
      }, [
        D("div", Lo, [
          D("h4", Po, ba(i.value), 1),
          D("button", {
            class: "ml-auto cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500",
            onClick: c
          }, [
            Me(E, { icon: "trash" })
          ]),
          D("button", {
            class: "cursor-pointer rounded-md p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500",
            onClick: l
          }, [
            Me(E, { icon: "times" })
          ])
        ]),
        D("div", To, [
          e.element ? (q(), rt(_o, {
            key: 0,
            element: e.element,
            onTabChange: f
          }, null, 8, ["element"])) : sr("", !0)
        ])
      ], 2);
    };
  }
}), ko = [
  {
    icon: "cube",
    component: rr(() => import("./ElementsPanel-Be3rmYKG.js"))
  }
], Ro = { class: "fixed inset-y-0 left-0 z-[1000] flex overflow-y-auto" }, Fo = { class: "min-w-[300px]" }, Mo = { class: "flex flex-col items-center justify-center" }, Io = ["aria-label"], zo = /* @__PURE__ */ be({
  __name: "ElementFloatingPanel",
  setup(e) {
    const t = $(!1), n = $(ko[0]), r = z(() => t.value && !J.value), a = () => {
      t.value = !r.value;
    };
    return (s, o) => {
      const i = Gt("fa-icon");
      return q(), ae("div", Ro, [
        D("div", {
          class: Xt([
            "flex w-[300px] gap-1.5 overflow-hidden bg-white shadow-lg transition-[width] duration-300",
            { "!w-0": we(J) || !t.value }
          ])
        }, [
          D("div", Fo, [
            (q(), rt(nr(n.value.component)))
          ])
        ], 2),
        D("div", Mo, [
          D("button", {
            class: "cursor-pointer w-7 rounded-r-md bg-gray-100 p-1.5 text-base text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none",
            onClick: a,
            "aria-label": r.value ? "Cerrar elementos" : "Abrir elementos"
          }, [
            Me(i, {
              icon: r.value ? "xmark" : n.value.icon
            }, null, 8, ["icon"])
          ], 8, Io)
        ])
      ]);
    };
  }
}), Do = { class: "min-h-full font-sans text-sm text-gray-800" }, jo = /* @__PURE__ */ be({
  __name: "App",
  setup(e) {
    or(J, (n) => {
      const r = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      n ? r == null || r.classList.add("sp-element__add-element-mode") : r == null || r.classList.remove("sp-element__add-element-mode");
    });
    const t = () => {
      ve.value && ve.value.classList.remove("sp-element__active"), ve.value = null, Se.value = !1;
    };
    return Yt(() => {
      const n = document.body.innerHTML;
      Eo(n).then(() => {
        wo();
      });
    }), (n, r) => {
      var a;
      return q(), ae("div", Do, [
        we(Se) ? (q(), rt(No, {
          key: 0,
          element: we(ve),
          type: (a = we(ve)) == null ? void 0 : a.tagName,
          onClose: ar(t, ["stop"])
        }, null, 8, ["element", "type"])) : sr("", !0),
        Me(zo)
      ]);
    };
  }
}), Tn = () => {
};
let tn = {}, Mr = {}, Ir = null, zr = {
  mark: Tn,
  measure: Tn
};
try {
  typeof window < "u" && (tn = window), typeof document < "u" && (Mr = document), typeof MutationObserver < "u" && (Ir = MutationObserver), typeof performance < "u" && (zr = performance);
} catch {
}
const {
  userAgent: Nn = ""
} = tn.navigator || {}, ie = tn, _ = Mr, kn = Ir, Ve = zr;
ie.document;
const ee = !!_.documentElement && !!_.head && typeof _.addEventListener == "function" && typeof _.createElement == "function", Dr = ~Nn.indexOf("MSIE") || ~Nn.indexOf("Trident/");
var L = "classic", jr = "duotone", B = "sharp", U = "sharp-duotone", Bo = [L, jr, B, U], Uo = {
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
}, Rn = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Ho = ["kit"], qo = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Wo = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, $o = {
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
}, Vo = {
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
}, Yo = {
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
}, Go = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Xo = {
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
}, Ko = {
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
}, Br = {
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
}, Jo = ["solid", "regular", "light", "thin", "duotone", "brands"], Ur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qo = Ur.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Te = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Zo = [...Object.keys(Go), ...Jo, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Te.GROUP, Te.SWAP_OPACITY, Te.PRIMARY, Te.SECONDARY].concat(Ur.map((e) => "".concat(e, "x"))).concat(Qo.map((e) => "w-".concat(e))), ei = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, ti = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, ni = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Fn = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const Q = "___FONT_AWESOME___", Nt = 16, Hr = "fa", qr = "svg-inline--fa", ge = "data-fa-i2svg", kt = "data-fa-pseudo-element", ri = "data-fa-pseudo-element-pending", nn = "data-prefix", rn = "data-icon", Mn = "fontawesome-i2svg", ai = "async", si = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wr = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), $r = [L, B, U];
function qe(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[L];
    }
  });
}
const Vr = {
  ...Br
};
Vr[L] = {
  ...Br[L],
  ...Rn.kit,
  ...Rn["kit-duotone"]
};
const me = qe(Vr), Rt = {
  ...Ko
};
Rt[L] = {
  ...Rt[L],
  ...Fn.kit,
  ...Fn["kit-duotone"]
};
const ze = qe(Rt), Ft = {
  ...Xo
};
Ft[L] = {
  ...Ft[L],
  ...ni.kit
};
const pe = qe(Ft), Mt = {
  ...Yo
};
Mt[L] = {
  ...Mt[L],
  ...ti.kit
};
const oi = qe(Mt), ii = qo, Yr = "fa-layers-text", ci = Wo, li = {
  ...Uo
};
qe(li);
const fi = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], bt = Te, Ae = /* @__PURE__ */ new Set();
Object.keys(ze[L]).map(Ae.add.bind(Ae));
Object.keys(ze[B]).map(Ae.add.bind(Ae));
Object.keys(ze[U]).map(Ae.add.bind(Ae));
const ui = [...Ho, ...Zo], ke = ie.FontAwesomeConfig || {};
function di(e) {
  var t = _.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function mi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
_ && typeof _.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const a = mi(di(n));
  a != null && (ke[r] = a);
});
const Gr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Hr,
  replacementClass: qr,
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
ke.familyPrefix && (ke.cssPrefix = ke.familyPrefix);
const Ce = {
  ...Gr,
  ...ke
};
Ce.autoReplaceSvg || (Ce.observeMutations = !1);
const b = {};
Object.keys(Gr).forEach((e) => {
  Object.defineProperty(b, e, {
    enumerable: !0,
    set: function(t) {
      Ce[e] = t, Re.forEach((n) => n(b));
    },
    get: function() {
      return Ce[e];
    }
  });
});
Object.defineProperty(b, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Ce.cssPrefix = e, Re.forEach((t) => t(b));
  },
  get: function() {
    return Ce.cssPrefix;
  }
});
ie.FontAwesomeConfig = b;
const Re = [];
function pi(e) {
  return Re.push(e), () => {
    Re.splice(Re.indexOf(e), 1);
  };
}
const re = Nt, Y = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function hi(e) {
  if (!e || !ee)
    return;
  const t = _.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = _.head.childNodes;
  let r = null;
  for (let a = n.length - 1; a > -1; a--) {
    const s = n[a], o = (s.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(o) > -1 && (r = s);
  }
  return _.head.insertBefore(t, r), e;
}
const gi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function De() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += gi[Math.random() * 62 | 0];
  return t;
}
function Le(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function an(e) {
  return e.classList ? Le(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Xr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yi(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Xr(e[n]), '" '), "").trim();
}
function lt(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function sn(e) {
  return e.size !== Y.size || e.x !== Y.x || e.y !== Y.y || e.rotate !== Y.rotate || e.flipX || e.flipY;
}
function bi(e) {
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
function vi(e) {
  let {
    transform: t,
    width: n = Nt,
    height: r = Nt,
    startCentered: a = !1
  } = e, s = "";
  return a && Dr ? s += "translate(".concat(t.x / re - n / 2, "em, ").concat(t.y / re - r / 2, "em) ") : a ? s += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : s += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), s += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), s += "rotate(".concat(t.rotate, "deg) "), s;
}
var xi = `:root, :host {
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
function Kr() {
  const e = Hr, t = qr, n = b.cssPrefix, r = b.replacementClass;
  let a = xi;
  if (n !== e || r !== t) {
    const s = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    a = a.replace(s, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return a;
}
let In = !1;
function vt() {
  b.autoAddCss && !In && (hi(Kr()), In = !0);
}
var wi = {
  mixout() {
    return {
      dom: {
        css: Kr,
        insertCss: vt
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        vt();
      },
      beforeI2svg() {
        vt();
      }
    };
  }
};
const Z = ie || {};
Z[Q] || (Z[Q] = {});
Z[Q].styles || (Z[Q].styles = {});
Z[Q].hooks || (Z[Q].hooks = {});
Z[Q].shims || (Z[Q].shims = []);
var G = Z[Q];
const Jr = [], Qr = function() {
  _.removeEventListener("DOMContentLoaded", Qr), Ze = 1, Jr.map((e) => e());
};
let Ze = !1;
ee && (Ze = (_.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(_.readyState), Ze || _.addEventListener("DOMContentLoaded", Qr));
function Ei(e) {
  ee && (Ze ? setTimeout(e, 0) : Jr.push(e));
}
function We(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Xr(e) : "<".concat(t, " ").concat(yi(n), ">").concat(r.map(We).join(""), "</").concat(t, ">");
}
function zn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var xt = function(t, n, r, a) {
  var s = Object.keys(t), o = s.length, i = n, l, c, f;
  for (r === void 0 ? (l = 1, f = t[s[0]]) : (l = 0, f = r); l < o; l++)
    c = s[l], f = i(f, t[c], c, t);
  return f;
};
function Si(e) {
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
function It(e) {
  const t = Si(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Ai(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function Dn(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function zt(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, a = Dn(t);
  typeof G.hooks.addPack == "function" && !r ? G.hooks.addPack(e, Dn(t)) : G.styles[e] = {
    ...G.styles[e] || {},
    ...a
  }, e === "fas" && zt("fa", t);
}
const {
  styles: fe,
  shims: Ci
} = G, Oi = {
  [L]: Object.values(pe[L]),
  [B]: Object.values(pe[B]),
  [U]: Object.values(pe[U])
};
let on = null, Zr = {}, ea = {}, ta = {}, na = {}, ra = {};
const _i = {
  [L]: Object.keys(me[L]),
  [B]: Object.keys(me[B]),
  [U]: Object.keys(me[U])
};
function Li(e) {
  return ~ui.indexOf(e);
}
function Pi(e, t) {
  const n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Li(a) ? a : null;
}
const aa = () => {
  const e = (r) => xt(fe, (a, s, o) => (a[o] = xt(s, r, {}), a), {});
  Zr = e((r, a, s) => (a[3] && (r[a[3]] = s), a[2] && a[2].filter((i) => typeof i == "number").forEach((i) => {
    r[i.toString(16)] = s;
  }), r)), ea = e((r, a, s) => (r[s] = s, a[2] && a[2].filter((i) => typeof i == "string").forEach((i) => {
    r[i] = s;
  }), r)), ra = e((r, a, s) => {
    const o = a[2];
    return r[s] = s, o.forEach((i) => {
      r[i] = s;
    }), r;
  });
  const t = "far" in fe || b.autoFetchSvg, n = xt(Ci, (r, a) => {
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
  ta = n.names, na = n.unicodes, on = ft(b.styleDefault, {
    family: b.familyDefault
  });
};
pi((e) => {
  on = ft(e.styleDefault, {
    family: b.familyDefault
  });
});
aa();
function cn(e, t) {
  return (Zr[e] || {})[t];
}
function Ti(e, t) {
  return (ea[e] || {})[t];
}
function oe(e, t) {
  return (ra[e] || {})[t];
}
function sa(e) {
  return ta[e] || {
    prefix: null,
    iconName: null
  };
}
function Ni(e) {
  const t = na[e], n = cn("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ce() {
  return on;
}
const ln = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function ft(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = L
  } = t, r = me[n][e], a = ze[n][e] || ze[n][r], s = e in G.styles ? e : null;
  return a || s || null;
}
const ki = {
  [L]: Object.keys(pe[L]),
  [B]: Object.keys(pe[B]),
  [U]: Object.keys(pe[U])
};
function ut(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [L]: "".concat(b.cssPrefix, "-").concat(L),
    [B]: "".concat(b.cssPrefix, "-").concat(B),
    [U]: "".concat(b.cssPrefix, "-").concat(U)
  };
  let a = null, s = L;
  const o = Bo.filter((l) => l !== jr);
  o.forEach((l) => {
    (e.includes(r[l]) || e.some((c) => ki[l].includes(c))) && (s = l);
  });
  const i = e.reduce((l, c) => {
    const f = Pi(b.cssPrefix, c);
    if (fe[c] ? (c = Oi[s].includes(c) ? oi[s][c] : c, a = c, l.prefix = c) : _i[s].indexOf(c) > -1 ? (a = c, l.prefix = ft(c, {
      family: s
    })) : f ? l.iconName = f : c !== b.replacementClass && !o.some((d) => c === r[d]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const d = a === "fa" ? sa(l.iconName) : {}, y = oe(l.prefix, l.iconName);
      d.prefix && (a = null), l.iconName = d.iconName || y || l.iconName, l.prefix = d.prefix || l.prefix, l.prefix === "far" && !fe.far && fe.fas && !b.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, ln());
  return (e.includes("fa-brands") || e.includes("fab")) && (i.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (i.prefix = "fad"), !i.prefix && s === B && (fe.fass || b.autoFetchSvg) && (i.prefix = "fass", i.iconName = oe(i.prefix, i.iconName) || i.iconName), !i.prefix && s === U && (fe.fasds || b.autoFetchSvg) && (i.prefix = "fasds", i.iconName = oe(i.prefix, i.iconName) || i.iconName), (i.prefix === "fa" || a === "fa") && (i.prefix = ce() || "fas"), i;
}
class Ri {
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
      }, zt(s, a[s]);
      const o = pe[L][s];
      o && zt(o, a[s]), aa();
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
let jn = [], xe = {};
const Ee = {}, Fi = Object.keys(Ee);
function Mi(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return jn = e, xe = {}, Object.keys(Ee).forEach((r) => {
    Fi.indexOf(r) === -1 && delete Ee[r];
  }), jn.forEach((r) => {
    const a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach((s) => {
      typeof a[s] == "function" && (n[s] = a[s]), typeof a[s] == "object" && Object.keys(a[s]).forEach((o) => {
        n[s] || (n[s] = {}), n[s][o] = a[s][o];
      });
    }), r.hooks) {
      const s = r.hooks();
      Object.keys(s).forEach((o) => {
        xe[o] || (xe[o] = []), xe[o].push(s[o]);
      });
    }
    r.provides && r.provides(Ee);
  }), n;
}
function Dt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  return (xe[e] || []).forEach((o) => {
    t = o.apply(null, [t, ...r]);
  }), t;
}
function ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (xe[e] || []).forEach((s) => {
    s.apply(null, n);
  });
}
function le() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ee[e] ? Ee[e].apply(null, t) : void 0;
}
function jt(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ce();
  if (t)
    return t = oe(n, t) || t, zn(oa.definitions, n, t) || zn(G.styles, n, t);
}
const oa = new Ri(), Ii = () => {
  b.autoReplaceSvg = !1, b.observeMutations = !1, ye("noAuto");
}, zi = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ee ? (ye("beforeI2svg", e), le("pseudoElements2svg", e), le("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    b.autoReplaceSvg === !1 && (b.autoReplaceSvg = !0), b.observeMutations = !0, Ei(() => {
      ji({
        autoReplaceSvgRoot: t
      }), ye("watch", e);
    });
  }
}, Di = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: oe(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = ft(e[0]);
      return {
        prefix: n,
        iconName: oe(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(b.cssPrefix, "-")) > -1 || e.match(ii))) {
      const t = ut(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ce(),
        iconName: oe(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ce();
      return {
        prefix: t,
        iconName: oe(t, e) || e
      };
    }
  }
}, H = {
  noAuto: Ii,
  config: b,
  dom: zi,
  parse: Di,
  library: oa,
  findIconDefinition: jt,
  toHtml: We
}, ji = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = _
  } = e;
  (Object.keys(G.styles).length > 0 || b.autoFetchSvg) && ee && b.autoReplaceSvg && H.dom.i2svg({
    node: t
  });
};
function dt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => We(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!ee) return;
      const n = _.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Bi(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: a,
    styles: s,
    transform: o
  } = e;
  if (sn(o) && n.found && !r.found) {
    const {
      width: i,
      height: l
    } = n, c = {
      x: i / l / 2,
      y: 0.5
    };
    a.style = lt({
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
function Ui(e) {
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
function fn(e) {
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
  } = n.found ? n : t, g = r === "fak", v = [b.replacementClass, a ? "".concat(b.cssPrefix, "-").concat(a) : ""].filter((C) => f.classes.indexOf(C) === -1).filter((C) => C !== "" || !!C).concat(f.classes).join(" ");
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
  d && (p.attributes[ge] = ""), i && (p.children.push({
    tag: "title",
    attributes: {
      id: p.attributes["aria-labelledby"] || "title-".concat(c || De())
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
    attributes: O
  } = n.found && t.found ? le("generateAbstractMask", h) || {
    children: [],
    attributes: {}
  } : le("generateAbstractIcon", h) || {
    children: [],
    attributes: {}
  };
  return h.children = w, h.attributes = O, o ? Ui(h) : Bi(h);
}
function Bn(e) {
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
  i && (l[ge] = "");
  const c = {
    ...o.styles
  };
  sn(a) && (c.transform = vi({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const f = lt(c);
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
function Hi(e) {
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
  }, s = lt(r.styles);
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
  styles: wt
} = G;
function Bt(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let a = null;
  return Array.isArray(r) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(b.cssPrefix, "-").concat(bt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(b.cssPrefix, "-").concat(bt.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(b.cssPrefix, "-").concat(bt.PRIMARY),
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
const qi = {
  found: !1,
  width: 512,
  height: 512
};
function Wi(e, t) {
  !Wr && !b.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Ut(e, t) {
  let n = t;
  return t === "fa" && b.styleDefault !== null && (t = ce()), new Promise((r, a) => {
    if (n === "fa") {
      const s = sa(e) || {};
      e = s.iconName || e, t = s.prefix || t;
    }
    if (e && t && wt[t] && wt[t][e]) {
      const s = wt[t][e];
      return r(Bt(s));
    }
    Wi(e, t), r({
      ...qi,
      icon: b.showMissingIcons && e ? le("missingIconAbstract") || {} : {}
    });
  });
}
const Un = () => {
}, Ht = b.measurePerformance && Ve && Ve.mark && Ve.measure ? Ve : {
  mark: Un,
  measure: Un
}, Ne = 'FA "6.6.0"', $i = (e) => (Ht.mark("".concat(Ne, " ").concat(e, " begins")), () => ia(e)), ia = (e) => {
  Ht.mark("".concat(Ne, " ").concat(e, " ends")), Ht.measure("".concat(Ne, " ").concat(e), "".concat(Ne, " ").concat(e, " begins"), "".concat(Ne, " ").concat(e, " ends"));
};
var un = {
  begin: $i,
  end: ia
};
const Xe = () => {
};
function Hn(e) {
  return typeof (e.getAttribute ? e.getAttribute(ge) : null) == "string";
}
function Vi(e) {
  const t = e.getAttribute ? e.getAttribute(nn) : null, n = e.getAttribute ? e.getAttribute(rn) : null;
  return t && n;
}
function Yi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(b.replacementClass);
}
function Gi() {
  return b.autoReplaceSvg === !0 ? Ke.replace : Ke[b.autoReplaceSvg] || Ke.replace;
}
function Xi(e) {
  return _.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ki(e) {
  return _.createElement(e);
}
function ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Xi : Ki
  } = t;
  if (typeof e == "string")
    return _.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(s) {
    r.setAttribute(s, e.attributes[s]);
  }), (e.children || []).forEach(function(s) {
    r.appendChild(ca(s, {
      ceFn: n
    }));
  }), r;
}
function Ji(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ke = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(ca(n), t);
      }), t.getAttribute(ge) === null && b.keepOriginalSource) {
        let n = _.createComment(Ji(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~an(t).indexOf(b.replacementClass))
      return Ke.replace(e);
    const r = new RegExp("".concat(b.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const s = n[0].attributes.class.split(" ").reduce((o, i) => (i === b.replacementClass || i.match(r) ? o.toSvg.push(i) : o.toNode.push(i), o), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = s.toSvg.join(" "), s.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", s.toNode.join(" "));
    }
    const a = n.map((s) => We(s)).join(`
`);
    t.setAttribute(ge, ""), t.innerHTML = a;
  }
};
function qn(e) {
  e();
}
function la(e, t) {
  const n = typeof t == "function" ? t : Xe;
  if (e.length === 0)
    n();
  else {
    let r = qn;
    b.mutateApproach === ai && (r = ie.requestAnimationFrame || qn), r(() => {
      const a = Gi(), s = un.begin("mutate");
      e.map(a), s(), n();
    });
  }
}
let dn = !1;
function fa() {
  dn = !0;
}
function qt() {
  dn = !1;
}
let et = null;
function Wn(e) {
  if (!kn || !b.observeMutations)
    return;
  const {
    treeCallback: t = Xe,
    nodeCallback: n = Xe,
    pseudoElementsCallback: r = Xe,
    observeMutationsRoot: a = _
  } = e;
  et = new kn((s) => {
    if (dn) return;
    const o = ce();
    Le(s).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !Hn(i.addedNodes[0]) && (b.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && b.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && Hn(i.target) && ~fi.indexOf(i.attributeName))
        if (i.attributeName === "class" && Vi(i.target)) {
          const {
            prefix: l,
            iconName: c
          } = ut(an(i.target));
          i.target.setAttribute(nn, l || o), c && i.target.setAttribute(rn, c);
        } else Yi(i.target) && n(i.target);
    });
  }), ee && et.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Qi() {
  et && et.disconnect();
}
function Zi(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, a) => {
    const s = a.split(":"), o = s[0], i = s.slice(1);
    return o && i.length > 0 && (r[o] = i.join(":").trim()), r;
  }, {})), n;
}
function ec(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = ut(an(e));
  return a.prefix || (a.prefix = ce()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ti(a.prefix, e.innerText) || cn(a.prefix, It(e.innerText))), !a.iconName && b.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function tc(e) {
  const t = Le(e.attributes).reduce((a, s) => (a.name !== "class" && a.name !== "style" && (a[s.name] = s.value), a), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return b.autoA11y && (n ? t["aria-labelledby"] = "".concat(b.replacementClass, "-title-").concat(r || De()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function nc() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Y,
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
function $n(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: a
  } = ec(e), s = tc(e), o = Dt("parseNodeAttributes", {}, e);
  let i = t.styleParser ? Zi(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Y,
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
  styles: rc
} = G;
function ua(e) {
  const t = b.autoReplaceSvg === "nest" ? $n(e, {
    styleParser: !1
  }) : $n(e);
  return ~t.extra.classes.indexOf(Yr) ? le("generateLayersText", e, t) : le("generateSvgReplacementMutation", e, t);
}
let X = /* @__PURE__ */ new Set();
$r.map((e) => {
  X.add("fa-".concat(e));
});
Object.keys(me[L]).map(X.add.bind(X));
Object.keys(me[B]).map(X.add.bind(X));
Object.keys(me[U]).map(X.add.bind(X));
X = [...X];
function Vn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ee) return Promise.resolve();
  const n = _.documentElement.classList, r = (f) => n.add("".concat(Mn, "-").concat(f)), a = (f) => n.remove("".concat(Mn, "-").concat(f)), s = b.autoFetchSvg ? X : $r.map((f) => "fa-".concat(f)).concat(Object.keys(rc));
  s.includes("fa") || s.push("fa");
  const o = [".".concat(Yr, ":not([").concat(ge, "])")].concat(s.map((f) => ".".concat(f, ":not([").concat(ge, "])"))).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Le(e.querySelectorAll(o));
  } catch {
  }
  if (i.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  const l = un.begin("onTree"), c = i.reduce((f, d) => {
    try {
      const y = ua(d);
      y && f.push(y);
    } catch (y) {
      Wr || y.name === "MissingIcon" && console.error(y);
    }
    return f;
  }, []);
  return new Promise((f, d) => {
    Promise.all(c).then((y) => {
      la(y, () => {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), l(), f();
      });
    }).catch((y) => {
      l(), d(y);
    });
  });
}
function ac(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  ua(e).then((n) => {
    n && la([n], t);
  });
}
function sc(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : jt(t || {});
    let {
      mask: a
    } = n;
    return a && (a = (a || {}).icon ? a : jt(a || {})), e(r, {
      ...n,
      mask: a
    });
  };
}
const oc = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Y,
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
  return dt({
    type: "icon",
    ...e
  }, () => (ye("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), b.autoA11y && (o ? c["aria-labelledby"] = "".concat(b.replacementClass, "-title-").concat(i || De()) : (c["aria-hidden"] = "true", c.focusable = "false")), fn({
    icons: {
      main: Bt(E),
      mask: a ? Bt(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: y,
    transform: {
      ...Y,
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
var ic = {
  mixout() {
    return {
      icon: sc(oc)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Vn, e.nodeCallback = ac, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = _,
        callback: r = () => {
        }
      } = t;
      return Vn(n, r);
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
        Promise.all([Ut(r, o), c.iconName ? Ut(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((g) => {
          let [v, p] = g;
          y([t, fn({
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
      const i = lt(o);
      i.length > 0 && (r.style = i);
      let l;
      return sn(s) && (l = le("generateAbstractTransformGrouping", {
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
}, cc = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return dt({
          type: "layer"
        }, () => {
          ye("beforeDOMElementCreation", {
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
}, lc = {
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
        return dt({
          type: "counter",
          content: e
        }, () => (ye("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Hi({
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
}, fc = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = Y,
          title: r = null,
          classes: a = [],
          attributes: s = {},
          styles: o = {}
        } = t;
        return dt({
          type: "text",
          content: e
        }, () => (ye("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Bn({
          content: e,
          transform: {
            ...Y,
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
      if (Dr) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        o = c.width / l, i = c.height / l;
      }
      return b.autoA11y && !r && (s.attributes["aria-hidden"] = "true"), Promise.resolve([t, Bn({
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
const uc = new RegExp('"', "ug"), Yn = [1105920, 1112319], Gn = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Vo,
  ...$o,
  ...ei
}, Wt = Object.keys(Gn).reduce((e, t) => (e[t.toLowerCase()] = Gn[t], e), {}), dc = Object.keys(Wt).reduce((e, t) => {
  const n = Wt[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function mc(e) {
  const t = e.replace(uc, ""), n = Ai(t, 0), r = n >= Yn[0] && n <= Yn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: It(a ? t[0] : t),
    isSecondary: r || a
  };
}
function pc(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), a = isNaN(r) ? "normal" : r;
  return (Wt[n] || {})[a] || dc[n];
}
function Xn(e, t) {
  const n = "".concat(ri).concat(t.replace(":", "-"));
  return new Promise((r, a) => {
    if (e.getAttribute(n) !== null)
      return r();
    const o = Le(e.children).filter((y) => y.getAttribute(kt) === t)[0], i = ie.getComputedStyle(e, t), l = i.getPropertyValue("font-family"), c = l.match(ci), f = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
    if (c && d !== "none" && d !== "") {
      const y = i.getPropertyValue("content");
      let E = pc(l, f);
      const {
        value: g,
        isSecondary: v
      } = mc(y), p = c[0].startsWith("FontAwesome");
      let m = cn(E, g), h = m;
      if (p) {
        const w = Ni(g);
        w.iconName && w.prefix && (m = w.iconName, E = w.prefix);
      }
      if (m && !v && (!o || o.getAttribute(nn) !== E || o.getAttribute(rn) !== h)) {
        e.setAttribute(n, h), o && e.removeChild(o);
        const w = nc(), {
          extra: O
        } = w;
        O.attributes[kt] = t, Ut(m, E).then((C) => {
          const k = fn({
            ...w,
            icons: {
              main: C,
              mask: ln()
            },
            prefix: E,
            iconName: h,
            extra: O,
            watchable: !0
          }), N = _.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(N, e.firstChild) : e.appendChild(N), N.outerHTML = k.map((te) => We(te)).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function hc(e) {
  return Promise.all([Xn(e, "::before"), Xn(e, "::after")]);
}
function gc(e) {
  return e.parentNode !== document.head && !~si.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(kt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Kn(e) {
  if (ee)
    return new Promise((t, n) => {
      const r = Le(e.querySelectorAll("*")).filter(gc).map(hc), a = un.begin("searchPseudoElements");
      fa(), Promise.all(r).then(() => {
        a(), qt(), t();
      }).catch(() => {
        a(), qt(), n();
      });
    });
}
var yc = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Kn, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = _
      } = t;
      b.searchPseudoElements && Kn(n);
    };
  }
};
let Jn = !1;
var bc = {
  mixout() {
    return {
      dom: {
        unwatch() {
          fa(), Jn = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Wn(Dt("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Qi();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Jn ? qt() : Wn(Dt("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Qn = (e) => {
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
var vc = {
  mixout() {
    return {
      parse: {
        transform: (e) => Qn(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Qn(n)), e;
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
const Et = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Zn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function xc(e) {
  return e.tag === "g" ? e.children : [e];
}
var wc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ut(n.split(" ").map((a) => a.trim())) : ln();
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
      } = s, y = bi({
        transform: i,
        containerWidth: f,
        iconWidth: l
      }), E = {
        tag: "rect",
        attributes: {
          ...Et,
          fill: "white"
        }
      }, g = c.children ? {
        children: c.children.map(Zn)
      } : {}, v = {
        tag: "g",
        attributes: {
          ...y.inner
        },
        children: [Zn({
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
      }, m = "mask-".concat(o || De()), h = "clip-".concat(o || De()), w = {
        tag: "mask",
        attributes: {
          ...Et,
          id: m,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [E, p]
      }, O = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: h
          },
          children: xc(d)
        }, w]
      };
      return n.push(O, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(h, ")"),
          mask: "url(#".concat(m, ")"),
          ...Et
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ec = {
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
}, Sc = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Ac = [wi, ic, cc, lc, fc, yc, bc, vc, wc, Ec, Sc];
Mi(Ac, {
  mixoutsTo: H
});
H.noAuto;
const da = H.config, Cc = H.library;
H.dom;
const tt = H.parse;
H.findIconDefinition;
H.toHtml;
const Oc = H.icon;
H.layer;
const _c = H.text;
H.counter;
const Lc = {
  prefix: "fas",
  iconName: "arrows-up-to-line",
  icon: [576, 512, [], "e4c2", "M32 96l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64S14.3 96 32 96zM9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L96 237.3 96 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96zm320 45.3c12.5 12.5 32.8 12.5 45.3 0L416 237.3 416 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3z"]
}, Pc = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]
}, Tc = {
  prefix: "fas",
  iconName: "heading",
  icon: [448, 512, ["header"], "f1dc", "M0 64C0 46.3 14.3 32 32 32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 112 224 0 0-112-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 144 0 176 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-144-224 0 0 144 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l16 0 0-176L48 96 32 96C14.3 96 0 81.7 0 64z"]
}, Nc = {
  prefix: "fas",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, kc = {
  prefix: "fas",
  iconName: "arrow-down-wide-short",
  icon: [576, 512, ["sort-amount-asc", "sort-amount-down"], "f160", "M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7 96 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 301.7 32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L320 96z"]
}, Rc = {
  prefix: "fas",
  iconName: "arrows-left-right",
  icon: [512, 512, ["arrows-h"], "f07e", "M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]
}, Fc = {
  prefix: "fas",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z"]
}, Mc = {
  prefix: "fas",
  iconName: "object-group",
  icon: [576, 512, [], "f247", "M32 119.4C12.9 108.4 0 87.7 0 64C0 28.7 28.7 0 64 0c23.7 0 44.4 12.9 55.4 32l337.1 0C467.6 12.9 488.3 0 512 0c35.3 0 64 28.7 64 64c0 23.7-12.9 44.4-32 55.4l0 273.1c19.1 11.1 32 31.7 32 55.4c0 35.3-28.7 64-64 64c-23.7 0-44.4-12.9-55.4-32l-337.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4l0-273.1zM456.6 96L119.4 96c-5.6 9.7-13.7 17.8-23.4 23.4l0 273.1c9.7 5.6 17.8 13.7 23.4 23.4l337.1 0c5.6-9.7 13.7-17.8 23.4-23.4l0-273.1c-9.7-5.6-17.8-13.7-23.4-23.4zM128 160c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-96zM256 320l32 0c35.3 0 64-28.7 64-64l0-32 64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-32z"]
}, Ic = {
  prefix: "fas",
  iconName: "cube",
  icon: [512, 512, [], "f1b2", "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"]
}, zc = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Dc = {
  prefix: "fas",
  iconName: "table-cells",
  icon: [512, 512, ["th"], "f00a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"]
}, jc = {
  prefix: "fas",
  iconName: "grip-vertical",
  icon: [320, 512, [], "f58e", "M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"]
}, Bc = {
  prefix: "fas",
  iconName: "arrows-left-right-to-line",
  icon: [640, 512, [], "e4ba", "M32 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 96C0 78.3 14.3 64 32 64zm214.6 73.4c12.5 12.5 12.5 32.8 0 45.3L205.3 224l229.5 0-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 288l-229.5 0 41.4 41.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0zM640 96l0 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-320c0-17.7 14.3-32 32-32s32 14.3 32 32z"]
}, Uc = {
  prefix: "fas",
  iconName: "paragraph",
  icon: [448, 512, [182], "f1dd", "M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]
}, Hc = {
  prefix: "fas",
  iconName: "link",
  icon: [640, 512, [128279, "chain"], "f0c1", "M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]
}, qc = {
  prefix: "fas",
  iconName: "font",
  icon: [448, 512, [], "f031", "M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]
}, Wc = {
  prefix: "fas",
  iconName: "grip",
  icon: [448, 512, ["grip-horizontal"], "f58d", "M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm32-192l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"]
}, $c = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96z"]
}, Vc = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
};
function er(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? er(Object(n), !0).forEach(function(r) {
      R(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : er(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Yc(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gc(e) {
  var t = Yc(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nt(e) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nt(e);
}
function R(e, t, n) {
  return t = Gc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Xc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Kc(e, t) {
  if (e == null) return {};
  var n = Xc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (a = 0; a < s.length; a++)
      r = s[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function $t(e) {
  return Jc(e) || Qc(e) || Zc(e) || el();
}
function Jc(e) {
  if (Array.isArray(e)) return Vt(e);
}
function Qc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zc(e, t) {
  if (e) {
    if (typeof e == "string") return Vt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Vt(e, t);
  }
}
function Vt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function el() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ma = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(m, h, w) {
      if (!c(h) || d(h) || y(h) || E(h) || l(h))
        return h;
      var O, C = 0, k = 0;
      if (f(h))
        for (O = [], k = h.length; C < k; C++)
          O.push(n(m, h[C], w));
      else {
        O = {};
        for (var N in h)
          Object.prototype.hasOwnProperty.call(h, N) && (O[m(N, w)] = n(m, h[N], w));
      }
      return O;
    }, r = function(m, h) {
      h = h || {};
      var w = h.separator || "_", O = h.split || /(?=[A-Z])/;
      return m.split(O).join(w);
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
      return typeof w != "function" ? m : function(O, C) {
        return w(O, m, C);
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
  })(tl);
})(ma);
var nl = ma.exports, rl = ["class", "style"];
function al(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = nl.camelize(n.slice(0, r)), s = n.slice(r + 1).trim();
    return t[a] = s, t;
  }, {});
}
function sl(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function mn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return mn(l);
  }), a = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var f = e.attributes[c];
    switch (c) {
      case "class":
        l.class = sl(f);
        break;
      case "style":
        l.style = al(f);
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
  var s = n.style, o = s === void 0 ? {} : s, i = Kc(n, rl);
  return ir(e.tag, W(W(W({}, t), {}, {
    class: a.class,
    style: W(W({}, a.style), o)
  }, a.attrs), i), r);
}
var pa = !1;
try {
  pa = process.env.NODE_ENV === "production";
} catch {
}
function ol() {
  if (!pa && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fe(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? R({}, e, t) : {};
}
function il(e) {
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
  }, R(R(R(R(R(R(R(R(R(R(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), R(R(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function tr(e) {
  if (e && nt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (tt.icon)
    return tt.icon(e);
  if (e === null)
    return null;
  if (nt(e) === "object" && e.prefix && e.iconName)
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
var cl = be({
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
    var r = n.attrs, a = z(function() {
      return tr(t.icon);
    }), s = z(function() {
      return Fe("classes", il(t));
    }), o = z(function() {
      return Fe("transform", typeof t.transform == "string" ? tt.transform(t.transform) : t.transform);
    }), i = z(function() {
      return Fe("mask", tr(t.mask));
    }), l = z(function() {
      return Oc(a.value, W(W(W(W({}, s.value), o.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    or(l, function(f) {
      if (!f)
        return ol("Could not find one or more icon(s)", a.value, i.value);
    }, {
      immediate: !0
    });
    var c = z(function() {
      return l.value ? mn(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
});
be({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, a = da.familyPrefix, s = z(function() {
      return ["".concat(a, "-layers")].concat($t(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return ir("div", {
        class: s.value
      }, r.default ? r.default() : []);
    };
  }
});
be({
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
    var r = n.attrs, a = da.familyPrefix, s = z(function() {
      return Fe("classes", [].concat($t(t.counter ? ["".concat(a, "-layers-counter")] : []), $t(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), o = z(function() {
      return Fe("transform", typeof t.transform == "string" ? tt.transform(t.transform) : t.transform);
    }), i = z(function() {
      var c = _c(t.value.toString(), W(W({}, o.value), s.value)), f = c.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = z(function() {
      return mn(i.value, {}, r);
    });
    return function() {
      return l.value;
    };
  }
});
Cc.add(
  Vc,
  Bc,
  Rc,
  Lc,
  Dc,
  Mc,
  $c,
  Wc,
  jc,
  Pc,
  kc,
  Fc,
  Hc,
  zc,
  qc,
  Uc,
  Ic,
  Tc,
  Nc
);
const pl = {
  install: (e) => {
    e.component("simplisiti-component-editor", jo), e.component("fa-icon", cl);
  }
};
export {
  fl as H,
  va as a,
  mo as d,
  ul as e,
  pl as m,
  dl as p,
  ml as r
};
