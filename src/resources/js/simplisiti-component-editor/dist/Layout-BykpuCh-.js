import { defineComponent as E, ref as m, computed as U, onMounted as G, resolveComponent as R, openBlock as i, createElementBlock as _, createElementVNode as l, withDirectives as s, vModelRadio as r, createVNode as n, createTextVNode as g, vModelSelect as x, createCommentVNode as L, Fragment as z, renderList as k, toDisplayString as b, normalizeClass as S, pushScopeId as B, popScopeId as H } from "vue";
import { s as T } from "./Spacing-6yBgarMA.js";
import { p as X, _ as W } from "./main-DXuX3gBg.js";
const q = 12, J = 12, f = (h) => (B("data-v-9584ef15"), h = h(), H(), h), K = { class: "sp-layout__container" }, P = { class: "sp-layout__header" }, Q = { class: "sp-layout__body" }, Y = { class: "sp-layout__body" }, Z = {
  key: 0,
  class: "sp-layout__flex-container"
}, ll = { class: "sp-layout__grid-item sp-layout__flex-direction-container" }, tl = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "" }, null, -1)), el = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1)), ol = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1)), al = [
  tl,
  el,
  ol
], sl = { class: "sp-layout__gap-spacing-container" }, nl = { class: "sp-layout__grid-item sp-layout__gap-container" }, ul = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "" }, null, -1)), il = ["value"], _l = {
  key: 1,
  class: "sp-layout__grid-container"
}, pl = { class: "sp-layout__grid-item sp-layout__columns-container" }, rl = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "" }, null, -1)), dl = ["value"], cl = { class: "sp-layout__grid-item sp-layout__rows-container" }, yl = /* @__PURE__ */ f(() => /* @__PURE__ */ l("option", { value: "" }, null, -1)), vl = ["value"], ml = { class: "sp-layout__buttons-container" }, gl = { class: "sp-layout__button__aligment" }, fl = { class: "sp-layout__button__aligment" }, hl = { class: "sp-layout__button__aligment" }, bl = {
  key: 0,
  class: "sp-layout__button__aligment"
}, Cl = { class: "sp-layout__buttons-container" }, wl = { class: "sp-layout__button__aligment" }, Vl = { class: "sp-layout__button__aligment" }, xl = { class: "sp-layout__button__aligment" }, Ul = /* @__PURE__ */ E({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:spClassList"],
  setup(h, { emit: $ }) {
    const j = h, p = m(null), u = m(null), d = m(null), c = m(null), C = m(null), w = m(null), V = m(null), v = (y) => X(y, j.spClassList), A = () => T((y) => `sp-style__layout-gap__${y}`), F = U(() => A()), I = () => {
      p.value = v("sp-style__layout-display__"), u.value = v("sp-style__layout-justify-content__"), d.value = v("sp-style__layout-align-items__"), c.value = v("sp-style__layout-flex-direction__"), C.value = v("sp-style__layout-grid-template__columns-"), w.value = v("sp-style__layout-grid-template__rows-"), V.value = v("sp-style__layout-gap__");
    }, M = $, O = (y) => {
      const e = y === "rows" ? q : J, o = [];
      for (let t = 0; t < e; t++)
        o.push(t + 1);
      return o;
    }, D = U(() => O("columns")), N = U(() => O("rows")), a = () => {
      const y = [
        p.value,
        u.value,
        d.value,
        c.value,
        C.value,
        w.value,
        V.value
      ].filter((e) => e);
      M("update:spClassList", y);
    };
    return G(() => {
      I(), a();
    }), (y, e) => {
      const o = R("fa-icon");
      return i(), _("div", K, [
        l("div", P, [
          l("label", null, [
            s(l("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": e[0] || (e[0] = (t) => p.value = t),
              onChange: a
            }, null, 544), [
              [r, p.value]
            ]),
            n(o, { icon: "arrows-left-right" }),
            g(" Flexible ")
          ]),
          l("label", null, [
            s(l("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": e[1] || (e[1] = (t) => p.value = t),
              onChange: a
            }, null, 544), [
              [r, p.value]
            ]),
            n(o, { icon: "table-cells" }),
            g(" Tabla ")
          ])
        ]),
        l("div", Q, [
          l("div", Y, [
            p.value === "sp-style__layout-display__flex" ? (i(), _("div", Z, [
              l("div", ll, [
                l("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Dirección ")
                ]),
                s(l("select", {
                  "onUpdate:modelValue": e[2] || (e[2] = (t) => c.value = t),
                  onChange: a
                }, al, 544), [
                  [x, c.value]
                ])
              ])
            ])) : L("", !0),
            l("div", sl, [
              l("div", nl, [
                l("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Espaciado ")
                ]),
                s(l("select", {
                  "onUpdate:modelValue": e[3] || (e[3] = (t) => V.value = t),
                  onChange: a
                }, [
                  ul,
                  (i(!0), _(z, null, k(F.value, (t) => (i(), _("option", {
                    key: t.value,
                    value: t.value
                  }, b(t.label), 9, il))), 128))
                ], 544), [
                  [x, V.value]
                ])
              ])
            ]),
            p.value === "sp-style__layout-display__grid" ? (i(), _("div", _l, [
              l("div", pl, [
                l("label", null, [
                  n(o, { icon: "grip" }),
                  g(" Columas ")
                ]),
                s(l("select", {
                  "onUpdate:modelValue": e[4] || (e[4] = (t) => C.value = t),
                  onChange: a
                }, [
                  rl,
                  (i(!0), _(z, null, k(D.value, (t) => (i(), _("option", {
                    key: `sp-style__layout-grid-template__columns-${t}`,
                    value: `sp-style__layout-grid-template__columns-${t}`
                  }, b(t), 9, dl))), 128))
                ], 544), [
                  [x, C.value]
                ])
              ]),
              l("div", cl, [
                l("label", null, [
                  n(o, { icon: "grip-vertical" }),
                  g(" Filas ")
                ]),
                s(l("select", {
                  "onUpdate:modelValue": e[5] || (e[5] = (t) => w.value = t),
                  onChange: a
                }, [
                  yl,
                  (i(!0), _(z, null, k(N.value, (t) => (i(), _("option", {
                    key: `sp-style__layout-grid-template__rows-${t}`,
                    value: `sp-style__layout-grid-template__rows-${t}`
                  }, b(t), 9, vl))), 128))
                ], 544), [
                  [x, w.value]
                ])
              ])
            ])) : L("", !0),
            l("div", {
              class: S(`sp-layout__horizontal-alignment-container ${c.value}`)
            }, [
              l("label", null, b(c.value === "sp-style__layout-flex-direction__column" ? "Vertical" : "Horizontal"), 1),
              l("div", ml, [
                l("label", gl, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__start",
                    "onUpdate:modelValue": e[6] || (e[6] = (t) => u.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                l("label", fl, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__center",
                    "onUpdate:modelValue": e[7] || (e[7] = (t) => u.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                l("label", hl, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__end",
                    "onUpdate:modelValue": e[8] || (e[8] = (t) => u.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                p.value === "sp-style__layout-display__flex" ? (i(), _("label", bl, [
                  n(o, { icon: "bars" }),
                  s(l("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__between",
                    "onUpdate:modelValue": e[9] || (e[9] = (t) => u.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ])) : L("", !0)
              ])
            ], 2),
            l("div", {
              class: S(`sp-layout__vertical-alignment-container ${c.value}`)
            }, [
              l("label", null, b(c.value === "sp-style__layout-flex-direction__column" ? "Horizontal" : "Vertical"), 1),
              l("div", Cl, [
                l("label", wl, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__start",
                    "onUpdate:modelValue": e[10] || (e[10] = (t) => d.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ]),
                l("label", Vl, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__center",
                    "onUpdate:modelValue": e[11] || (e[11] = (t) => d.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ]),
                l("label", xl, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(l("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__end",
                    "onUpdate:modelValue": e[12] || (e[12] = (t) => d.value = t),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ])
              ])
            ], 2)
          ])
        ])
      ]);
    };
  }
}), Ol = /* @__PURE__ */ W(Ul, [["__scopeId", "data-v-9584ef15"]]);
export {
  Ol as default
};
