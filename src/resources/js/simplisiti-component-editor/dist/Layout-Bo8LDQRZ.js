import { defineComponent as E, ref as m, computed as x, onMounted as G, resolveComponent as R, openBlock as i, createElementBlock as _, createElementVNode as t, withDirectives as s, vModelRadio as r, createVNode as n, createTextVNode as g, vModelSelect as V, createCommentVNode as U, Fragment as k, renderList as L, toDisplayString as z, pushScopeId as $, popScopeId as B } from "vue";
import { s as T } from "./Spacing-B7YPeZlN.js";
import { p as X, _ as H } from "./main-oDxIiNIx.js";
const W = 12, q = 12, y = (h) => ($("data-v-326eca6a"), h = h(), B(), h), J = { class: "sp-layout__container" }, K = { class: "sp-layout__header" }, P = { class: "sp-layout__body" }, Q = { class: "sp-layout__body" }, Y = {
  key: 0,
  class: "sp-layout__flex-container"
}, Z = { class: "sp-layout__grid-item sp-layout__flex-direction-container" }, tt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), lt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1)), et = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1)), ot = [
  tt,
  lt,
  et
], at = { class: "sp-layout__gap-spacing-container" }, st = { class: "sp-layout__grid-item sp-layout__gap-container" }, nt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), ut = ["value"], it = {
  key: 1,
  class: "sp-layout__grid-container"
}, _t = { class: "sp-layout__grid-item sp-layout__columns-container" }, pt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), rt = ["value"], dt = { class: "sp-layout__grid-item sp-layout__rows-container" }, ct = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), yt = ["value"], vt = { class: "sp-layout__horizontal-alignment-container" }, mt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("label", null, "Horizontal", -1)), gt = { class: "sp-layout__buttons-container" }, ht = { class: "sp-layout__button__aligment" }, bt = { class: "sp-layout__button__aligment" }, ft = { class: "sp-layout__button__aligment" }, Ct = {
  key: 0,
  class: "sp-layout__button__aligment"
}, wt = { class: "sp-layout__vertical-alignment-container" }, Vt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("label", null, "Vertical", -1)), xt = { class: "sp-layout__buttons-container" }, Ut = { class: "sp-layout__button__aligment" }, kt = { class: "sp-layout__button__aligment" }, Lt = { class: "sp-layout__button__aligment" }, zt = /* @__PURE__ */ E({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update"],
  setup(h, { emit: S }) {
    const j = h, p = m(null), u = m(null), d = m(null), b = m(null), f = m(null), C = m(null), w = m(null), v = (c) => X(c, j.spClassList), A = () => T((c) => `sp-style__layout-gap__${c}`), F = x(() => A()), I = () => {
      p.value = v("sp-style__layout-display__"), u.value = v("sp-style__layout-justify-content__"), d.value = v("sp-style__layout-align-items__"), b.value = v("sp-style__layout-flex-direction__"), f.value = v("sp-style__layout-grid-template__columns-"), C.value = v("sp-style__layout-grid-template__rows-"), w.value = v("sp-style__layout-gap__");
    }, M = S, O = (c) => {
      const e = c === "rows" ? W : q, o = [];
      for (let l = 0; l < e; l++)
        o.push(l + 1);
      return o;
    }, D = x(() => O("columns")), N = x(() => O("rows")), a = () => {
      const c = [
        p.value,
        u.value,
        d.value,
        b.value,
        f.value,
        C.value,
        w.value
      ].filter((e) => e);
      M("update", c);
    };
    return G(() => {
      I();
    }), (c, e) => {
      const o = R("fa-icon");
      return i(), _("div", J, [
        t("div", K, [
          t("label", null, [
            s(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": e[0] || (e[0] = (l) => p.value = l),
              onChange: a
            }, null, 544), [
              [r, p.value]
            ]),
            n(o, { icon: "arrows-left-right" }),
            g(" Flexible ")
          ]),
          t("label", null, [
            s(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": e[1] || (e[1] = (l) => p.value = l),
              onChange: a
            }, null, 544), [
              [r, p.value]
            ]),
            n(o, { icon: "table-cells" }),
            g(" Tabla ")
          ])
        ]),
        t("div", P, [
          t("div", Q, [
            p.value === "sp-style__layout-display__flex" ? (i(), _("div", Y, [
              t("div", Z, [
                t("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Dirección ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[2] || (e[2] = (l) => b.value = l),
                  onChange: a
                }, ot, 544), [
                  [V, b.value]
                ])
              ])
            ])) : U("", !0),
            t("div", at, [
              t("div", st, [
                t("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Espaciado ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[3] || (e[3] = (l) => w.value = l),
                  onChange: a
                }, [
                  nt,
                  (i(!0), _(k, null, L(F.value, (l) => (i(), _("option", {
                    key: l.value,
                    value: l.value
                  }, z(l.label), 9, ut))), 128))
                ], 544), [
                  [V, w.value]
                ])
              ])
            ]),
            p.value === "sp-style__layout-display__grid" ? (i(), _("div", it, [
              t("div", _t, [
                t("label", null, [
                  n(o, { icon: "grip" }),
                  g(" Columas ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[4] || (e[4] = (l) => f.value = l),
                  onChange: a
                }, [
                  pt,
                  (i(!0), _(k, null, L(D.value, (l) => (i(), _("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__columns-${l}`
                  }, z(l), 9, rt))), 128))
                ], 544), [
                  [V, f.value]
                ])
              ]),
              t("div", dt, [
                t("label", null, [
                  n(o, { icon: "grip-vertical" }),
                  g(" Filas ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[5] || (e[5] = (l) => C.value = l),
                  onChange: a
                }, [
                  ct,
                  (i(!0), _(k, null, L(N.value, (l) => (i(), _("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__rows-${l}`
                  }, z(l), 9, yt))), 128))
                ], 544), [
                  [V, C.value]
                ])
              ])
            ])) : U("", !0),
            t("div", vt, [
              mt,
              t("div", gt, [
                t("label", ht, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__start",
                    "onUpdate:modelValue": e[6] || (e[6] = (l) => u.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                t("label", bt, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__center",
                    "onUpdate:modelValue": e[7] || (e[7] = (l) => u.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                t("label", ft, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__end",
                    "onUpdate:modelValue": e[8] || (e[8] = (l) => u.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ]),
                p.value === "sp-style__layout-display__flex" ? (i(), _("label", Ct, [
                  n(o, { icon: "bars" }),
                  s(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__between",
                    "onUpdate:modelValue": e[9] || (e[9] = (l) => u.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, u.value]
                  ])
                ])) : U("", !0)
              ])
            ]),
            t("div", wt, [
              Vt,
              t("div", xt, [
                t("label", Ut, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__start",
                    "onUpdate:modelValue": e[10] || (e[10] = (l) => d.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ]),
                t("label", kt, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__center",
                    "onUpdate:modelValue": e[11] || (e[11] = (l) => d.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ]),
                t("label", Lt, [
                  n(o, { icon: "arrows-up-to-line" }),
                  s(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__end",
                    "onUpdate:modelValue": e[12] || (e[12] = (l) => d.value = l),
                    onChange: a
                  }, null, 544), [
                    [r, d.value]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), At = /* @__PURE__ */ H(zt, [["__scopeId", "data-v-326eca6a"]]);
export {
  At as default
};
