import { defineComponent as k, ref as b, computed as f, onMounted as A, resolveComponent as O, openBlock as d, createElementBlock as c, createElementVNode as t, withDirectives as _, vModelRadio as u, createVNode as s, createTextVNode as v, Fragment as C, renderList as w, toDisplayString as V, createCommentVNode as F, pushScopeId as I, popScopeId as M } from "vue";
import { _ as N } from "./main-DBE15yFp.js";
const S = 12, W = 12, m = (y) => (I("data-v-bcbcb3c5"), y = y(), M(), y), B = { class: "sp-layout__container" }, D = { class: "sp-layout__header" }, E = { class: "sp-layout__body" }, R = { class: "sp-layout__body" }, T = {
  key: 0,
  class: "sp-layout__grid-container"
}, X = { class: "sp-layout__grid-item sp-layout__columns-container" }, $ = {
  name: "",
  id: ""
}, H = /* @__PURE__ */ m(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), q = ["value"], G = { class: "sp-layout__grid-item sp-layout__rows-container" }, J = {
  name: "",
  id: ""
}, K = /* @__PURE__ */ m(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), P = ["value"], Q = { class: "sp-layout__horizontal-alignment-container" }, Y = /* @__PURE__ */ m(() => /* @__PURE__ */ t("label", null, "Horizontal", -1)), Z = { class: "sp-layout__buttons-container" }, tt = { class: "sp-layout__button__aligment" }, lt = { class: "sp-layout__button__aligment" }, et = { class: "sp-layout__button__aligment" }, ot = { class: "sp-layout__button__aligment" }, st = { class: "sp-layout__vertical-alignment-container" }, at = /* @__PURE__ */ m(() => /* @__PURE__ */ t("label", null, "Vertical", -1)), nt = { class: "sp-layout__buttons-container" }, it = { class: "sp-layout__button__aligment" }, _t = { class: "sp-layout__button__aligment" }, ut = { class: "sp-layout__button__aligment" }, pt = /* @__PURE__ */ k({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update"],
  setup(y, { emit: L }) {
    const g = y, r = b(null), a = b(null), p = b(null), U = () => {
      r.value = g.spClassList.find((n) => n.startsWith("sp-style__layout-display__")), a.value = g.spClassList.find((n) => n.startsWith("sp-style__layout-justify-content__")), p.value = g.spClassList.find((n) => n.startsWith("sp-style__layout-align-items__"));
    }, x = L, h = (n) => {
      const e = n === "rows" ? S : W, o = [];
      for (let l = 0; l < e; l++)
        o.push(l + 1);
      return o;
    }, z = f(() => h("columns")), j = f(() => h("rows")), i = () => {
      const n = [
        r.value,
        a.value,
        p.value
      ].filter((e) => e);
      x("update", n);
    };
    return A(() => {
      U();
    }), (n, e) => {
      const o = O("fa-icon");
      return d(), c("div", B, [
        t("div", D, [
          t("label", null, [
            _(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": e[0] || (e[0] = (l) => r.value = l),
              onChange: i
            }, null, 544), [
              [u, r.value]
            ]),
            s(o, { icon: "arrows-left-right" }),
            v(" Flexible ")
          ]),
          t("label", null, [
            _(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": e[1] || (e[1] = (l) => r.value = l),
              onChange: i
            }, null, 544), [
              [u, r.value]
            ]),
            s(o, { icon: "table-cells" }),
            v(" Tabla ")
          ])
        ]),
        t("div", E, [
          t("div", R, [
            r.value === "sp-style__layout-display__grid" ? (d(), c("div", T, [
              t("div", X, [
                t("label", null, [
                  s(o, { icon: "grip" }),
                  v(" Columas ")
                ]),
                t("select", $, [
                  H,
                  (d(!0), c(C, null, w(z.value, (l) => (d(), c("option", {
                    key: l,
                    value: `sp-style__layout-columns__${l}`
                  }, V(l), 9, q))), 128))
                ])
              ]),
              t("div", G, [
                t("label", null, [
                  s(o, { icon: "grip-vertical" }),
                  v(" Filas ")
                ]),
                t("select", J, [
                  K,
                  (d(!0), c(C, null, w(j.value, (l) => (d(), c("option", {
                    key: l,
                    value: `sp-style__layout-rows__${l}`
                  }, V(l), 9, P))), 128))
                ])
              ])
            ])) : F("", !0),
            t("div", Q, [
              Y,
              t("div", Z, [
                t("label", tt, [
                  s(o, { icon: "arrows-up-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__start",
                    "onUpdate:modelValue": e[2] || (e[2] = (l) => a.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, a.value]
                  ])
                ]),
                t("label", lt, [
                  s(o, { icon: "arrows-left-right-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__center",
                    "onUpdate:modelValue": e[3] || (e[3] = (l) => a.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, a.value]
                  ])
                ]),
                t("label", et, [
                  s(o, { icon: "arrows-up-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__end",
                    "onUpdate:modelValue": e[4] || (e[4] = (l) => a.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, a.value]
                  ])
                ]),
                t("label", ot, [
                  s(o, { icon: "bars" }),
                  _(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__between",
                    "onUpdate:modelValue": e[5] || (e[5] = (l) => a.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, a.value]
                  ])
                ])
              ])
            ]),
            t("div", st, [
              at,
              t("div", nt, [
                t("label", it, [
                  s(o, { icon: "arrows-up-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__start",
                    "onUpdate:modelValue": e[6] || (e[6] = (l) => p.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, p.value]
                  ])
                ]),
                t("label", _t, [
                  s(o, { icon: "arrows-left-right-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__center",
                    "onUpdate:modelValue": e[7] || (e[7] = (l) => p.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, p.value]
                  ])
                ]),
                t("label", ut, [
                  s(o, { icon: "arrows-up-to-line" }),
                  _(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__end",
                    "onUpdate:modelValue": e[8] || (e[8] = (l) => p.value = l),
                    onChange: i
                  }, null, 544), [
                    [u, p.value]
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), ct = /* @__PURE__ */ N(pt, [["__scopeId", "data-v-bcbcb3c5"]]);
export {
  ct as default
};
