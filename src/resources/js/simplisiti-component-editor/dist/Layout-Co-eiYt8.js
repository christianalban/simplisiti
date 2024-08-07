import { defineComponent as E, ref as m, computed as x, onMounted as R, resolveComponent as $, openBlock as i, createElementBlock as _, createElementVNode as t, withDirectives as s, vModelRadio as r, createVNode as n, createTextVNode as g, vModelSelect as V, createCommentVNode as U, Fragment as k, renderList as L, toDisplayString as z, pushScopeId as B, popScopeId as G } from "vue";
import { s as T } from "./Spacing-B7YPeZlN.js";
import { _ as W } from "./main-3Qp25jYS.js";
const X = 12, H = 12, y = (h) => (B("data-v-77167799"), h = h(), G(), h), q = { class: "sp-layout__container" }, J = { class: "sp-layout__header" }, K = { class: "sp-layout__body" }, P = { class: "sp-layout__body" }, Q = {
  key: 0,
  class: "sp-layout__flex-container"
}, Y = { class: "sp-layout__grid-item sp-layout__flex-direction-container" }, Z = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), tt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1)), lt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1)), et = [
  Z,
  tt,
  lt
], ot = { class: "sp-layout__gap-spacing-container" }, at = { class: "sp-layout__grid-item sp-layout__gap-container" }, st = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), nt = ["value"], ut = {
  key: 1,
  class: "sp-layout__grid-container"
}, it = { class: "sp-layout__grid-item sp-layout__columns-container" }, _t = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), pt = ["value"], rt = { class: "sp-layout__grid-item sp-layout__rows-container" }, dt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), ct = ["value"], yt = { class: "sp-layout__horizontal-alignment-container" }, vt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("label", null, "Horizontal", -1)), mt = { class: "sp-layout__buttons-container" }, gt = { class: "sp-layout__button__aligment" }, ht = { class: "sp-layout__button__aligment" }, bt = { class: "sp-layout__button__aligment" }, ft = {
  key: 0,
  class: "sp-layout__button__aligment"
}, Ct = { class: "sp-layout__vertical-alignment-container" }, wt = /* @__PURE__ */ y(() => /* @__PURE__ */ t("label", null, "Vertical", -1)), Vt = { class: "sp-layout__buttons-container" }, xt = { class: "sp-layout__button__aligment" }, Ut = { class: "sp-layout__button__aligment" }, kt = { class: "sp-layout__button__aligment" }, Lt = /* @__PURE__ */ E({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update"],
  setup(h, { emit: S }) {
    const j = h, p = m(null), u = m(null), d = m(null), b = m(null), f = m(null), C = m(null), w = m(null), v = (c) => j.spClassList.find((e) => e.startsWith(c)), A = () => T((c) => `sp-style__layout-gap__${c}`), F = x(() => A()), I = () => {
      p.value = v("sp-style__layout-display__"), u.value = v("sp-style__layout-justify-content__"), d.value = v("sp-style__layout-align-items__"), b.value = v("sp-style__layout-flex-direction__"), f.value = v("sp-style__layout-grid-template__columns-"), C.value = v("sp-style__layout-grid-template__rows-"), w.value = v("sp-style__layout-gap__");
    }, M = S, O = (c) => {
      const e = c === "rows" ? X : H, o = [];
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
    return R(() => {
      I();
    }), (c, e) => {
      const o = $("fa-icon");
      return i(), _("div", q, [
        t("div", J, [
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
        t("div", K, [
          t("div", P, [
            p.value === "sp-style__layout-display__flex" ? (i(), _("div", Q, [
              t("div", Y, [
                t("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Dirección ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[2] || (e[2] = (l) => b.value = l),
                  onChange: a
                }, et, 544), [
                  [V, b.value]
                ])
              ])
            ])) : U("", !0),
            t("div", ot, [
              t("div", at, [
                t("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  g(" Espaciado ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[3] || (e[3] = (l) => w.value = l),
                  onChange: a
                }, [
                  st,
                  (i(!0), _(k, null, L(F.value, (l) => (i(), _("option", {
                    key: l.value,
                    value: l.value
                  }, z(l.label), 9, nt))), 128))
                ], 544), [
                  [V, w.value]
                ])
              ])
            ]),
            p.value === "sp-style__layout-display__grid" ? (i(), _("div", ut, [
              t("div", it, [
                t("label", null, [
                  n(o, { icon: "grip" }),
                  g(" Columas ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[4] || (e[4] = (l) => f.value = l),
                  onChange: a
                }, [
                  _t,
                  (i(!0), _(k, null, L(D.value, (l) => (i(), _("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__columns-${l}`
                  }, z(l), 9, pt))), 128))
                ], 544), [
                  [V, f.value]
                ])
              ]),
              t("div", rt, [
                t("label", null, [
                  n(o, { icon: "grip-vertical" }),
                  g(" Filas ")
                ]),
                s(t("select", {
                  "onUpdate:modelValue": e[5] || (e[5] = (l) => C.value = l),
                  onChange: a
                }, [
                  dt,
                  (i(!0), _(k, null, L(N.value, (l) => (i(), _("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__rows-${l}`
                  }, z(l), 9, ct))), 128))
                ], 544), [
                  [V, C.value]
                ])
              ])
            ])) : U("", !0),
            t("div", yt, [
              vt,
              t("div", mt, [
                t("label", gt, [
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
                t("label", ht, [
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
                t("label", bt, [
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
                p.value === "sp-style__layout-display__flex" ? (i(), _("label", ft, [
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
            t("div", Ct, [
              wt,
              t("div", Vt, [
                t("label", xt, [
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
                t("label", Ut, [
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
                t("label", kt, [
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
}), jt = /* @__PURE__ */ W(Lt, [["__scopeId", "data-v-77167799"]]);
export {
  jt as default
};
