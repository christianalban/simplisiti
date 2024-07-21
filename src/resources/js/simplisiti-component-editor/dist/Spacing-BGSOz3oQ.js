import { defineComponent as g, computed as i, openBlock as l, createElementBlock as n, createElementVNode as e, toDisplayString as o, Fragment as _, renderList as u, pushScopeId as m, popScopeId as S, createVNode as v } from "vue";
import { _ as b } from "./main-TiEshLSm.js";
const k = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96"
], c = (s) => (m("data-v-17ec4c84"), s = s(), S(), s), O = { class: "sp-spacing__container" }, x = { class: "sp-spacing__select-container" }, q = { class: "sp-spacing__select-item" }, w = /* @__PURE__ */ c(() => /* @__PURE__ */ e("label", null, "Arriba", -1)), A = /* @__PURE__ */ c(() => /* @__PURE__ */ e("option", { value: "" }, null, -1)), B = ["value"], D = { class: "sp-spacing__select-item" }, E = /* @__PURE__ */ c(() => /* @__PURE__ */ e("label", null, "Abajo", -1)), N = /* @__PURE__ */ c(() => /* @__PURE__ */ e("option", { value: "" }, null, -1)), V = ["value"], j = { class: "sp-spacing__select-item" }, z = /* @__PURE__ */ c(() => /* @__PURE__ */ e("label", null, "Izquierda", -1)), C = /* @__PURE__ */ c(() => /* @__PURE__ */ e("option", { value: "" }, null, -1)), F = ["value"], L = { class: "sp-spacing__select-item" }, M = /* @__PURE__ */ c(() => /* @__PURE__ */ e("label", null, "Derecha", -1)), P = /* @__PURE__ */ c(() => /* @__PURE__ */ e("option", { value: "" }, null, -1)), G = ["value"], H = /* @__PURE__ */ g({
  __name: "SpacingSelect",
  props: {
    title: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !0
    }
  },
  setup(s) {
    const { type: r } = s, a = (d) => k.map((p) => ({
      value: `sp-spacing__${r}-${d}__${p}`,
      label: p
    })), y = i(() => a("top")), f = i(() => a("bottom")), I = i(() => a("left")), $ = i(() => a("right"));
    return (d, p) => (l(), n("div", O, [
      e("div", null, [
        e("h2", null, o(s.title), 1)
      ]),
      e("div", x, [
        e("div", q, [
          w,
          e("select", null, [
            A,
            (l(!0), n(_, null, u(y.value, (t) => (l(), n("option", {
              key: t.value,
              value: t.value
            }, o(t.label), 9, B))), 128))
          ])
        ]),
        e("div", D, [
          E,
          e("select", null, [
            N,
            (l(!0), n(_, null, u(f.value, (t) => (l(), n("option", {
              key: t.value,
              value: t.value
            }, o(t.label), 9, V))), 128))
          ])
        ]),
        e("div", j, [
          z,
          e("select", null, [
            C,
            (l(!0), n(_, null, u(I.value, (t) => (l(), n("option", {
              key: t.value,
              value: t.value
            }, o(t.label), 9, F))), 128))
          ])
        ]),
        e("div", L, [
          M,
          e("select", null, [
            P,
            (l(!0), n(_, null, u($.value, (t) => (l(), n("option", {
              key: t.value,
              value: t.value
            }, o(t.label), 9, G))), 128))
          ])
        ])
      ])
    ]));
  }
}), h = /* @__PURE__ */ b(H, [["__scopeId", "data-v-17ec4c84"]]), J = (s) => (m("data-v-bd74e2b4"), s = s(), S(), s), K = { class: "sp-spacing__container" }, Q = /* @__PURE__ */ J(() => /* @__PURE__ */ e("hr", { class: "sp-spacing__separator" }, null, -1)), R = /* @__PURE__ */ g({
  __name: "Spacing",
  setup(s) {
    return (r, a) => (l(), n("div", K, [
      v(h, {
        title: "Margen",
        type: "margin"
      }),
      Q,
      v(h, {
        title: "Padding",
        type: "padding"
      })
    ]));
  }
}), W = /* @__PURE__ */ b(R, [["__scopeId", "data-v-bd74e2b4"]]);
export {
  W as default
};
