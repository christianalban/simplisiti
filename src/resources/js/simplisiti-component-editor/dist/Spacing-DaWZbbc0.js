import { defineComponent as O, computed as v, openBlock as p, createElementBlock as c, createElementVNode as n, toDisplayString as _, withDirectives as m, Fragment as f, renderList as h, vModelSelect as C, pushScopeId as U, popScopeId as V, ref as L, onMounted as q, createVNode as $ } from "vue";
import { s as w } from "./Spacing-6yBgarMA.js";
import { _ as x, p as A } from "./main-CL4rb7T6.js";
const g = (e) => (U("data-v-96c95280"), e = e(), V(), e), D = { class: "sp-spacing__container" }, M = { class: "sp-spacing__select-container" }, j = { class: "sp-spacing__select-item" }, B = /* @__PURE__ */ g(() => /* @__PURE__ */ n("label", null, "Arriba", -1)), E = /* @__PURE__ */ g(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), G = ["value"], N = { class: "sp-spacing__select-item" }, z = /* @__PURE__ */ g(() => /* @__PURE__ */ n("label", null, "Abajo", -1)), F = /* @__PURE__ */ g(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), P = ["value"], H = { class: "sp-spacing__select-item" }, J = /* @__PURE__ */ g(() => /* @__PURE__ */ n("label", null, "Izquierda", -1)), K = /* @__PURE__ */ g(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), Q = ["value"], R = { class: "sp-spacing__select-item" }, T = /* @__PURE__ */ g(() => /* @__PURE__ */ n("label", null, "Derecha", -1)), W = /* @__PURE__ */ g(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), X = ["value"], Y = /* @__PURE__ */ O({
  __name: "SpacingSelect",
  props: {
    title: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !0
    },
    spacingConfig: {
      type: Object,
      default: () => ({
        top: "",
        bottom: "",
        left: "",
        right: ""
      })
    }
  },
  emits: ["update:spacingConfig"],
  setup(e, { emit: b }) {
    const { type: y, spacingConfig: S } = e, o = b, s = (d) => w((l) => `sp-style__spacing-${y}-${d}__${l}`), i = v(() => s("top")), I = v(() => s("bottom")), r = v(() => s("left")), u = v(() => s("right")), a = () => {
      o("update:spacingConfig", S);
    };
    return (d, l) => (p(), c("div", D, [
      n("div", null, [
        n("h2", null, _(e.title), 1)
      ]),
      n("div", M, [
        n("div", j, [
          B,
          m(n("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (t) => e.spacingConfig.top = t),
            onChange: a
          }, [
            E,
            (p(!0), c(f, null, h(i.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, _(t.label), 9, G))), 128))
          ], 544), [
            [C, e.spacingConfig.top]
          ])
        ]),
        n("div", N, [
          z,
          m(n("select", {
            "onUpdate:modelValue": l[1] || (l[1] = (t) => e.spacingConfig.bottom = t),
            onChange: a
          }, [
            F,
            (p(!0), c(f, null, h(I.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, _(t.label), 9, P))), 128))
          ], 544), [
            [C, e.spacingConfig.bottom]
          ])
        ]),
        n("div", H, [
          J,
          m(n("select", {
            "onUpdate:modelValue": l[2] || (l[2] = (t) => e.spacingConfig.left = t),
            onChange: a
          }, [
            K,
            (p(!0), c(f, null, h(r.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, _(t.label), 9, Q))), 128))
          ], 544), [
            [C, e.spacingConfig.left]
          ])
        ]),
        n("div", R, [
          T,
          m(n("select", {
            "onUpdate:modelValue": l[3] || (l[3] = (t) => e.spacingConfig.right = t),
            onChange: a
          }, [
            W,
            (p(!0), c(f, null, h(u.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, _(t.label), 9, X))), 128))
          ], 544), [
            [C, e.spacingConfig.right]
          ])
        ])
      ])
    ]));
  }
}), k = /* @__PURE__ */ x(Y, [["__scopeId", "data-v-96c95280"]]), Z = (e) => (U("data-v-0e6a2272"), e = e(), V(), e), tt = { class: "sp-spacing__container" }, et = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("hr", { class: "sp-spacing__separator" }, null, -1)), nt = /* @__PURE__ */ O({
  __name: "Spacing",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:spClassList"],
  setup(e, { emit: b }) {
    const y = e, S = b, o = L({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), s = L({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), i = (u) => A(u, y.spClassList), I = () => {
      o.value.top = i("sp-style__spacing-margin-top__"), o.value.bottom = i("sp-style__spacing-margin-bottom__"), o.value.left = i("sp-style__spacing-margin-left__"), o.value.right = i("sp-style__spacing-margin-right__"), s.value.top = i("sp-style__spacing-padding-top__"), s.value.bottom = i("sp-style__spacing-padding-bottom__"), s.value.left = i("sp-style__spacing-padding-left__"), s.value.right = i("sp-style__spacing-padding-right__");
    }, r = () => {
      const u = [
        o.value.top,
        o.value.bottom,
        o.value.left,
        o.value.right,
        s.value.top,
        s.value.bottom,
        s.value.left,
        s.value.right
      ].filter((a) => a);
      S("update:spClassList", u);
    };
    return q(() => {
      I(), r();
    }), (u, a) => (p(), c("div", tt, [
      $(k, {
        title: "Margen",
        type: "margin",
        spacingConfig: o.value,
        "onUpdate:spacingConfig": [
          a[0] || (a[0] = (d) => o.value = d),
          r
        ]
      }, null, 8, ["spacingConfig"]),
      et,
      $(k, {
        title: "Padding",
        type: "padding",
        spacingConfig: s.value,
        "onUpdate:spacingConfig": [
          a[1] || (a[1] = (d) => s.value = d),
          r
        ]
      }, null, 8, ["spacingConfig"])
    ]));
  }
}), it = /* @__PURE__ */ x(nt, [["__scopeId", "data-v-0e6a2272"]]);
export {
  it as default
};
