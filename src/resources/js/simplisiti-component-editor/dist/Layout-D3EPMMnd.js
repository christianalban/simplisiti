import { defineComponent as k, ref as g, computed as b, resolveComponent as L, openBlock as r, createElementBlock as p, createElementVNode as t, withDirectives as i, vModelRadio as _, createVNode as n, createTextVNode as m, Fragment as f, renderList as C, toDisplayString as w, createCommentVNode as O, pushScopeId as j, popScopeId as A } from "vue";
import { _ as F } from "./main-BKzuiPgC.js";
const I = 12, N = 12, v = (c) => (j("data-v-23abe356"), c = c(), A(), c), S = { class: "sp-layout__container" }, M = { class: "sp-layout__header" }, B = { class: "sp-layout__body" }, D = { class: "sp-layout__body" }, E = {
  key: 0,
  class: "sp-layout__grid-container"
}, R = { class: "sp-layout__grid-item sp-layout__columns-container" }, T = {
  name: "",
  id: ""
}, X = /* @__PURE__ */ v(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), $ = ["value"], H = { class: "sp-layout__grid-item sp-layout__rows-container" }, W = {
  name: "",
  id: ""
}, q = /* @__PURE__ */ v(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), G = ["value"], J = { class: "sp-layout__horizontal-alignment-container" }, K = /* @__PURE__ */ v(() => /* @__PURE__ */ t("label", null, "Horizontal", -1)), P = { class: "sp-layout__buttons-container" }, Q = { class: "sp-layout__button__aligment" }, Y = { class: "sp-layout__button__aligment" }, Z = { class: "sp-layout__button__aligment" }, tt = { class: "sp-layout__button__aligment" }, et = { class: "sp-layout__vertical-alignment-container" }, lt = /* @__PURE__ */ v(() => /* @__PURE__ */ t("label", null, "Vertical", -1)), ot = { class: "sp-layout__buttons-container" }, nt = { class: "sp-layout__button__aligment" }, at = { class: "sp-layout__button__aligment" }, st = { class: "sp-layout__button__aligment" }, it = /* @__PURE__ */ k({
  __name: "Layout",
  emits: ["update"],
  setup(c, { emit: V }) {
    const d = g(null), a = g(null), u = g(null), U = V, h = (y) => {
      const l = y === "rows" ? I : N, o = [];
      for (let e = 0; e < l; e++)
        o.push(e + 1);
      return o;
    }, x = b(() => h("columns")), z = b(() => h("rows")), s = () => {
      const y = [
        d.value,
        a.value,
        u.value
      ].filter((l) => l);
      U("update", y);
    };
    return (y, l) => {
      const o = L("fa-icon");
      return r(), p("div", S, [
        t("div", M, [
          t("label", null, [
            i(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": l[0] || (l[0] = (e) => d.value = e),
              onChange: s
            }, null, 544), [
              [_, d.value]
            ]),
            n(o, { icon: "arrows-left-right" }),
            m(" Flexible ")
          ]),
          t("label", null, [
            i(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": l[1] || (l[1] = (e) => d.value = e),
              onChange: s
            }, null, 544), [
              [_, d.value]
            ]),
            n(o, { icon: "table-cells" }),
            m(" Tabla ")
          ])
        ]),
        t("div", B, [
          t("div", D, [
            d.value === "sp-style__layout-display__grid" ? (r(), p("div", E, [
              t("div", R, [
                t("label", null, [
                  n(o, { icon: "grip" }),
                  m(" Columas ")
                ]),
                t("select", T, [
                  X,
                  (r(!0), p(f, null, C(x.value, (e) => (r(), p("option", {
                    key: e,
                    value: `sp-style__layout-columns__${e}`
                  }, w(e), 9, $))), 128))
                ])
              ]),
              t("div", H, [
                t("label", null, [
                  n(o, { icon: "grip-vertical" }),
                  m(" Filas ")
                ]),
                t("select", W, [
                  q,
                  (r(!0), p(f, null, C(z.value, (e) => (r(), p("option", {
                    key: e,
                    value: `sp-style__layout-rows__${e}`
                  }, w(e), 9, G))), 128))
                ])
              ])
            ])) : O("", !0),
            t("div", J, [
              K,
              t("div", P, [
                t("label", Q, [
                  n(o, { icon: "arrows-up-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__start",
                    "onUpdate:modelValue": l[2] || (l[2] = (e) => a.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, a.value]
                  ])
                ]),
                t("label", Y, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__center",
                    "onUpdate:modelValue": l[3] || (l[3] = (e) => a.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, a.value]
                  ])
                ]),
                t("label", Z, [
                  n(o, { icon: "arrows-up-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__end",
                    "onUpdate:modelValue": l[4] || (l[4] = (e) => a.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, a.value]
                  ])
                ]),
                t("label", tt, [
                  n(o, { icon: "bars" }),
                  i(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__between",
                    "onUpdate:modelValue": l[5] || (l[5] = (e) => a.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, a.value]
                  ])
                ])
              ])
            ]),
            t("div", et, [
              lt,
              t("div", ot, [
                t("label", nt, [
                  n(o, { icon: "arrows-up-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__start",
                    "onUpdate:modelValue": l[6] || (l[6] = (e) => u.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, u.value]
                  ])
                ]),
                t("label", at, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__center",
                    "onUpdate:modelValue": l[7] || (l[7] = (e) => u.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, u.value]
                  ])
                ]),
                t("label", st, [
                  n(o, { icon: "arrows-up-to-line" }),
                  i(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__end",
                    "onUpdate:modelValue": l[8] || (l[8] = (e) => u.value = e),
                    onChange: s
                  }, null, 544), [
                    [_, u.value]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), dt = /* @__PURE__ */ F(it, [["__scopeId", "data-v-23abe356"]]);
export {
  dt as default
};
