import { defineComponent as w, ref as x, computed as p, resolveComponent as V, openBlock as n, createElementBlock as a, createElementVNode as o, withDirectives as y, vModelRadio as v, createVNode as l, createTextVNode as c, Fragment as m, renderList as h, toDisplayString as b, createCommentVNode as C, pushScopeId as k, popScopeId as O } from "vue";
import { _ as F } from "./main-TiEshLSm.js";
const I = 12, L = 12, r = (u) => (k("data-v-40dcea15"), u = u(), O(), u), N = { class: "sp-layout__container" }, S = { class: "sp-layout__header" }, M = { class: "sp-layout__body" }, z = { class: "sp-layout__body" }, A = {
  key: 0,
  class: "sp-layout__grid-container"
}, B = { class: "sp-layout__grid-item sp-layout__columns-container" }, D = {
  name: "",
  id: ""
}, E = /* @__PURE__ */ r(() => /* @__PURE__ */ o("option", { value: "" }, null, -1)), R = ["value"], T = { class: "sp-layout__grid-item sp-layout__rows-container" }, U = {
  name: "",
  id: ""
}, X = /* @__PURE__ */ r(() => /* @__PURE__ */ o("option", { value: "" }, null, -1)), $ = ["value"], H = { class: "sp-layout__horizontal-alignment-container" }, W = /* @__PURE__ */ r(() => /* @__PURE__ */ o("label", null, "Horizontal", -1)), j = { class: "sp-layout__buttons-container" }, q = { class: "sp-layout__vertical-alignment-container" }, G = /* @__PURE__ */ r(() => /* @__PURE__ */ o("label", null, "Vertical", -1)), J = { class: "sp-layout__buttons-container" }, K = /* @__PURE__ */ w({
  __name: "Layout",
  setup(u) {
    const i = x(null), _ = (d) => {
      const s = d === "rows" ? I : L, e = [];
      for (let t = 0; t < s; t++)
        e.push(t + 1);
      return e;
    }, f = p(() => _("columns")), g = p(() => _("rows"));
    return (d, s) => {
      const e = V("fa-icon");
      return n(), a("div", N, [
        o("div", S, [
          o("label", null, [
            y(o("input", {
              type: "radio",
              name: "display",
              value: "sp-layout-display-flex",
              "onUpdate:modelValue": s[0] || (s[0] = (t) => i.value = t)
            }, null, 512), [
              [v, i.value]
            ]),
            l(e, { icon: "arrows-left-right" }),
            c(" Flexible ")
          ]),
          o("label", null, [
            y(o("input", {
              type: "radio",
              name: "display",
              value: "sp-layout-display-grid",
              "onUpdate:modelValue": s[1] || (s[1] = (t) => i.value = t)
            }, null, 512), [
              [v, i.value]
            ]),
            l(e, { icon: "table-cells" }),
            c(" Tabla ")
          ])
        ]),
        o("div", M, [
          o("div", z, [
            i.value === "sp-layout-display-grid" ? (n(), a("div", A, [
              o("div", B, [
                o("label", null, [
                  l(e, { icon: "grip" }),
                  c(" Columas ")
                ]),
                o("select", D, [
                  E,
                  (n(!0), a(m, null, h(f.value, (t) => (n(), a("option", {
                    key: t,
                    value: `sp-layout-columns-${t}`
                  }, b(t), 9, R))), 128))
                ])
              ]),
              o("div", T, [
                o("label", null, [
                  l(e, { icon: "grip-vertical" }),
                  c(" Filas ")
                ]),
                o("select", U, [
                  X,
                  (n(!0), a(m, null, h(g.value, (t) => (n(), a("option", {
                    key: t,
                    value: `sp-layout-rows-${t}`
                  }, b(t), 9, $))), 128))
                ])
              ])
            ])) : C("", !0),
            o("div", H, [
              W,
              o("div", j, [
                o("button", null, [
                  l(e, { icon: "arrows-up-to-line" })
                ]),
                o("button", null, [
                  l(e, { icon: "arrows-left-right-to-line" })
                ]),
                o("button", null, [
                  l(e, { icon: "arrows-up-to-line" })
                ])
              ])
            ]),
            o("div", q, [
              G,
              o("div", J, [
                o("button", null, [
                  l(e, { icon: "arrows-up-to-line" })
                ]),
                o("button", null, [
                  l(e, { icon: "arrows-left-right-to-line" })
                ]),
                o("button", null, [
                  l(e, { icon: "arrows-up-to-line" })
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), Y = /* @__PURE__ */ F(K, [["__scopeId", "data-v-40dcea15"]]);
export {
  Y as default
};
