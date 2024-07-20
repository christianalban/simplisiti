import { defineComponent as b, computed as r, resolveComponent as f, openBlock as l, createElementBlock as a, createElementVNode as o, createVNode as e, createTextVNode as d, Fragment as p, renderList as h, toDisplayString as m, pushScopeId as w, popScopeId as g } from "vue";
import { _ as x } from "./main-FaYiRFMV.js";
const C = 12, O = 12, n = (i) => (w("data-v-e8a3c5a4"), i = i(), g(), i), k = { class: "sp-layout__container" }, F = { class: "sp-layout__header" }, I = /* @__PURE__ */ n(() => /* @__PURE__ */ o("input", {
  type: "radio",
  name: "display",
  value: "flex"
}, null, -1)), L = /* @__PURE__ */ n(() => /* @__PURE__ */ o("input", {
  type: "radio",
  name: "display",
  value: "grid"
}, null, -1)), S = { class: "sp-layout__body" }, V = { class: "sp-layout__body" }, N = { class: "sp-layout__grid-container" }, z = { class: "sp-layout__grid-item sp-layout__columns-container" }, A = /* @__PURE__ */ n(() => /* @__PURE__ */ o("label", null, "Columas", -1)), B = {
  name: "",
  id: ""
}, E = /* @__PURE__ */ n(() => /* @__PURE__ */ o("option", { value: "" }, null, -1)), M = ["value"], T = { class: "sp-layout__grid-item sp-layout__rows-container" }, X = /* @__PURE__ */ n(() => /* @__PURE__ */ o("label", null, "Filas", -1)), D = {
  name: "",
  id: ""
}, H = /* @__PURE__ */ n(() => /* @__PURE__ */ o("option", { value: "" }, null, -1)), R = ["value"], W = { class: "sp-layout__horizontal-alignment-container" }, j = /* @__PURE__ */ n(() => /* @__PURE__ */ o("label", null, "Horizontal", -1)), q = { class: "sp-layout__buttons-container" }, G = { class: "sp-layout__vertical-alignment-container" }, J = /* @__PURE__ */ n(() => /* @__PURE__ */ o("label", null, "Vertical", -1)), K = { class: "sp-layout__buttons-container" }, P = /* @__PURE__ */ b({
  __name: "Layout",
  setup(i) {
    const c = (_) => {
      const u = _ === "rows" ? C : O, t = [];
      for (let s = 0; s < u; s++)
        t.push(s + 1);
      return t;
    }, v = r(() => c("columns")), y = r(() => c("rows"));
    return (_, u) => {
      const t = f("fa-icon");
      return l(), a("div", k, [
        o("div", F, [
          o("label", null, [
            I,
            e(t, { icon: "arrows-left-right" }),
            d(" Flexible ")
          ]),
          o("label", null, [
            L,
            e(t, { icon: "table-cells" }),
            d(" Tabla ")
          ])
        ]),
        o("div", S, [
          o("div", V, [
            o("div", N, [
              o("div", z, [
                A,
                o("select", B, [
                  E,
                  (l(!0), a(p, null, h(v.value, (s) => (l(), a("option", {
                    key: s,
                    value: s
                  }, m(s), 9, M))), 128))
                ])
              ]),
              o("div", T, [
                X,
                o("select", D, [
                  H,
                  (l(!0), a(p, null, h(y.value, (s) => (l(), a("option", {
                    key: s,
                    value: s
                  }, m(s), 9, R))), 128))
                ])
              ])
            ]),
            o("div", W, [
              j,
              o("div", q, [
                o("button", null, [
                  e(t, { icon: "arrows-up-to-line" })
                ]),
                o("button", null, [
                  e(t, { icon: "arrows-left-right-to-line" })
                ]),
                o("button", null, [
                  e(t, { icon: "arrows-up-to-line" })
                ])
              ])
            ]),
            o("div", G, [
              J,
              o("div", K, [
                o("button", null, [
                  e(t, { icon: "arrows-up-to-line" })
                ]),
                o("button", null, [
                  e(t, { icon: "arrows-left-right-to-line" })
                ]),
                o("button", null, [
                  e(t, { icon: "arrows-up-to-line" })
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), Y = /* @__PURE__ */ x(P, [["__scopeId", "data-v-e8a3c5a4"]]);
export {
  Y as default
};
