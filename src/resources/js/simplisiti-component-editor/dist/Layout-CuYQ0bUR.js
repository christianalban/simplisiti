import { defineComponent as D, ref as m, computed as x, onMounted as I, resolveComponent as N, openBlock as r, createElementBlock as d, createElementVNode as t, withDirectives as a, vModelRadio as u, createVNode as n, createTextVNode as h, vModelSelect as w, createCommentVNode as U, Fragment as L, renderList as z, toDisplayString as k, pushScopeId as R, popScopeId as B } from "vue";
import { _ as E } from "./main-BZqKBJdk.js";
const T = 12, W = 12, c = (g) => (R("data-v-b18449c6"), g = g(), B(), g), X = { class: "sp-layout__container" }, $ = { class: "sp-layout__header" }, G = { class: "sp-layout__body" }, H = { class: "sp-layout__body" }, q = {
  key: 0,
  class: "sp-layout__flex-container"
}, J = { class: "sp-layout__grid-item sp-layout__flex-direction-container" }, K = /* @__PURE__ */ c(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), P = /* @__PURE__ */ c(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1)), Q = /* @__PURE__ */ c(() => /* @__PURE__ */ t("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1)), Y = [
  K,
  P,
  Q
], Z = {
  key: 1,
  class: "sp-layout__grid-container"
}, tt = { class: "sp-layout__grid-item sp-layout__columns-container" }, lt = /* @__PURE__ */ c(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), et = ["value"], ot = { class: "sp-layout__grid-item sp-layout__rows-container" }, st = /* @__PURE__ */ c(() => /* @__PURE__ */ t("option", { value: "" }, null, -1)), at = ["value"], nt = { class: "sp-layout__horizontal-alignment-container" }, it = /* @__PURE__ */ c(() => /* @__PURE__ */ t("label", null, "Horizontal", -1)), ut = { class: "sp-layout__buttons-container" }, _t = { class: "sp-layout__button__aligment" }, pt = { class: "sp-layout__button__aligment" }, rt = { class: "sp-layout__button__aligment" }, dt = { class: "sp-layout__button__aligment" }, ct = { class: "sp-layout__vertical-alignment-container" }, yt = /* @__PURE__ */ c(() => /* @__PURE__ */ t("label", null, "Vertical", -1)), vt = { class: "sp-layout__buttons-container" }, mt = { class: "sp-layout__button__aligment" }, gt = { class: "sp-layout__button__aligment" }, ht = { class: "sp-layout__button__aligment" }, bt = /* @__PURE__ */ D({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update"],
  setup(g, { emit: j }) {
    const A = g, _ = m(null), i = m(null), p = m(null), b = m(null), f = m(null), C = m(null), y = (v) => A.spClassList.find((e) => e.startsWith(v)), F = () => {
      _.value = y("sp-style__layout-display__"), i.value = y("sp-style__layout-justify-content__"), p.value = y("sp-style__layout-align-items__"), b.value = y("sp-style__layout-flex-direction__"), f.value = y("sp-style__layout-grid-template__columns-"), C.value = y("sp-style__layout-grid-template__rows-");
    }, M = j, V = (v) => {
      const e = v === "rows" ? T : W, o = [];
      for (let l = 0; l < e; l++)
        o.push(l + 1);
      return o;
    }, O = x(() => V("columns")), S = x(() => V("rows")), s = () => {
      const v = [
        _.value,
        i.value,
        p.value,
        b.value,
        f.value,
        C.value
      ].filter((e) => e);
      M("update", v);
    };
    return I(() => {
      F();
    }), (v, e) => {
      const o = N("fa-icon");
      return r(), d("div", X, [
        t("div", $, [
          t("label", null, [
            a(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": e[0] || (e[0] = (l) => _.value = l),
              onChange: s
            }, null, 544), [
              [u, _.value]
            ]),
            n(o, { icon: "arrows-left-right" }),
            h(" Flexible ")
          ]),
          t("label", null, [
            a(t("input", {
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": e[1] || (e[1] = (l) => _.value = l),
              onChange: s
            }, null, 544), [
              [u, _.value]
            ]),
            n(o, { icon: "table-cells" }),
            h(" Tabla ")
          ])
        ]),
        t("div", G, [
          t("div", H, [
            _.value === "sp-style__layout-display__flex" ? (r(), d("div", q, [
              t("div", J, [
                t("label", null, [
                  n(o, { icon: "arrow-down-wide-short" }),
                  h(" Dirección ")
                ]),
                a(t("select", {
                  "onUpdate:modelValue": e[2] || (e[2] = (l) => b.value = l),
                  onChange: s
                }, Y, 544), [
                  [w, b.value]
                ])
              ])
            ])) : U("", !0),
            _.value === "sp-style__layout-display__grid" ? (r(), d("div", Z, [
              t("div", tt, [
                t("label", null, [
                  n(o, { icon: "grip" }),
                  h(" Columas ")
                ]),
                a(t("select", {
                  "onUpdate:modelValue": e[3] || (e[3] = (l) => f.value = l),
                  onChange: s
                }, [
                  lt,
                  (r(!0), d(L, null, z(O.value, (l) => (r(), d("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__columns-${l}`
                  }, k(l), 9, et))), 128))
                ], 544), [
                  [w, f.value]
                ])
              ]),
              t("div", ot, [
                t("label", null, [
                  n(o, { icon: "grip-vertical" }),
                  h(" Filas ")
                ]),
                a(t("select", {
                  "onUpdate:modelValue": e[4] || (e[4] = (l) => C.value = l),
                  onChange: s
                }, [
                  st,
                  (r(!0), d(L, null, z(S.value, (l) => (r(), d("option", {
                    key: l,
                    value: `sp-style__layout-grid-template__rows-${l}`
                  }, k(l), 9, at))), 128))
                ], 544), [
                  [w, C.value]
                ])
              ])
            ])) : U("", !0),
            t("div", nt, [
              it,
              t("div", ut, [
                t("label", _t, [
                  n(o, { icon: "arrows-up-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__start",
                    "onUpdate:modelValue": e[5] || (e[5] = (l) => i.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, i.value]
                  ])
                ]),
                t("label", pt, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__center",
                    "onUpdate:modelValue": e[6] || (e[6] = (l) => i.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, i.value]
                  ])
                ]),
                t("label", rt, [
                  n(o, { icon: "arrows-up-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__end",
                    "onUpdate:modelValue": e[7] || (e[7] = (l) => i.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, i.value]
                  ])
                ]),
                t("label", dt, [
                  n(o, { icon: "bars" }),
                  a(t("input", {
                    type: "radio",
                    name: "horizontal",
                    value: "sp-style__layout-justify-content__between",
                    "onUpdate:modelValue": e[8] || (e[8] = (l) => i.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, i.value]
                  ])
                ])
              ])
            ]),
            t("div", ct, [
              yt,
              t("div", vt, [
                t("label", mt, [
                  n(o, { icon: "arrows-up-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__start",
                    "onUpdate:modelValue": e[9] || (e[9] = (l) => p.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, p.value]
                  ])
                ]),
                t("label", gt, [
                  n(o, { icon: "arrows-left-right-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__center",
                    "onUpdate:modelValue": e[10] || (e[10] = (l) => p.value = l),
                    onChange: s
                  }, null, 544), [
                    [u, p.value]
                  ])
                ]),
                t("label", ht, [
                  n(o, { icon: "arrows-up-to-line" }),
                  a(t("input", {
                    type: "radio",
                    name: "vertical",
                    value: "sp-style__layout-align-items__end",
                    "onUpdate:modelValue": e[11] || (e[11] = (l) => p.value = l),
                    onChange: s
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
}), wt = /* @__PURE__ */ E(bt, [["__scopeId", "data-v-b18449c6"]]);
export {
  wt as default
};
