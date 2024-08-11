import { defineComponent as U, computed as v, openBlock as p, createElementBlock as c, createElementVNode as n, toDisplayString as r, withDirectives as m, Fragment as f, renderList as h, vModelSelect as C, pushScopeId as V, popScopeId as L, ref as $, onMounted as q, createVNode as k } from "vue";
import { S as w } from "./Spacing-B7YPeZlN.js";
import { _ as x, p as A } from "./main-oDxIiNIx.js";
const u = (e) => (V("data-v-33128c28"), e = e(), L(), e), D = { class: "sp-spacing__container" }, M = { class: "sp-spacing__select-container" }, j = { class: "sp-spacing__select-item" }, B = /* @__PURE__ */ u(() => /* @__PURE__ */ n("label", null, "Arriba", -1)), E = /* @__PURE__ */ u(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), G = ["value"], N = { class: "sp-spacing__select-item" }, z = /* @__PURE__ */ u(() => /* @__PURE__ */ n("label", null, "Abajo", -1)), F = /* @__PURE__ */ u(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), P = ["value"], H = { class: "sp-spacing__select-item" }, J = /* @__PURE__ */ u(() => /* @__PURE__ */ n("label", null, "Izquierda", -1)), K = /* @__PURE__ */ u(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), Q = ["value"], R = { class: "sp-spacing__select-item" }, T = /* @__PURE__ */ u(() => /* @__PURE__ */ n("label", null, "Derecha", -1)), W = /* @__PURE__ */ u(() => /* @__PURE__ */ n("option", { value: "" }, null, -1)), X = ["value"], Y = /* @__PURE__ */ U({
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
    const { type: y, spacingConfig: S } = e, s = b, o = (d) => w.map((i) => ({
      value: `sp-style__${y}-${d}__${i}`,
      label: i
    })), l = v(() => o("top")), I = v(() => o("bottom")), _ = v(() => o("left")), g = v(() => o("right")), a = () => {
      s("update:spacingConfig", S);
    };
    return (d, i) => (p(), c("div", D, [
      n("div", null, [
        n("h2", null, r(e.title), 1)
      ]),
      n("div", M, [
        n("div", j, [
          B,
          m(n("select", {
            "onUpdate:modelValue": i[0] || (i[0] = (t) => e.spacingConfig.top = t),
            onChange: a
          }, [
            E,
            (p(!0), c(f, null, h(l.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, r(t.label), 9, G))), 128))
          ], 544), [
            [C, e.spacingConfig.top]
          ])
        ]),
        n("div", N, [
          z,
          m(n("select", {
            "onUpdate:modelValue": i[1] || (i[1] = (t) => e.spacingConfig.bottom = t),
            onChange: a
          }, [
            F,
            (p(!0), c(f, null, h(I.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, r(t.label), 9, P))), 128))
          ], 544), [
            [C, e.spacingConfig.bottom]
          ])
        ]),
        n("div", H, [
          J,
          m(n("select", {
            "onUpdate:modelValue": i[2] || (i[2] = (t) => e.spacingConfig.left = t),
            onChange: a
          }, [
            K,
            (p(!0), c(f, null, h(_.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, r(t.label), 9, Q))), 128))
          ], 544), [
            [C, e.spacingConfig.left]
          ])
        ]),
        n("div", R, [
          T,
          m(n("select", {
            "onUpdate:modelValue": i[3] || (i[3] = (t) => e.spacingConfig.right = t),
            onChange: a
          }, [
            W,
            (p(!0), c(f, null, h(g.value, (t) => (p(), c("option", {
              key: t.value,
              value: t.value
            }, r(t.label), 9, X))), 128))
          ], 544), [
            [C, e.spacingConfig.right]
          ])
        ])
      ])
    ]));
  }
}), O = /* @__PURE__ */ x(Y, [["__scopeId", "data-v-33128c28"]]), Z = (e) => (V("data-v-1ea4f148"), e = e(), L(), e), tt = { class: "sp-spacing__container" }, et = /* @__PURE__ */ Z(() => /* @__PURE__ */ n("hr", { class: "sp-spacing__separator" }, null, -1)), nt = /* @__PURE__ */ U({
  __name: "Spacing",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update"],
  setup(e, { emit: b }) {
    const y = e, S = b, s = $({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), o = $({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), l = (g) => A(g, y.spClassList), I = () => {
      s.value.top = l("sp-style__spacing-margin-top__"), s.value.bottom = l("sp-style__spacing-margin-bottom__"), s.value.left = l("sp-style__spacing-margin-left__"), s.value.right = l("sp-style__spacing-margin-right__"), o.value.top = l("sp-style__spacing-padding-top__"), o.value.bottom = l("sp-style__spacing-padding-bottom__"), o.value.left = l("sp-style__spacing-padding-left__"), o.value.right = l("sp-style__spacing-padding-right__");
    }, _ = () => {
      console.log(s);
      const g = [
        s.value.top,
        s.value.bottom,
        s.value.left,
        s.value.right,
        o.value.top,
        o.value.bottom,
        o.value.left,
        o.value.right
      ].filter((a) => a);
      S("update", g);
    };
    return q(() => {
      I();
    }), (g, a) => (p(), c("div", tt, [
      k(O, {
        title: "Margen",
        type: "margin",
        spacingConfig: s.value,
        "onUpdate:spacingConfig": [
          a[0] || (a[0] = (d) => s.value = d),
          _
        ]
      }, null, 8, ["spacingConfig"]),
      et,
      k(O, {
        title: "Padding",
        type: "padding",
        spacingConfig: o.value,
        "onUpdate:spacingConfig": [
          a[1] || (a[1] = (d) => o.value = d),
          _
        ]
      }, null, 8, ["spacingConfig"])
    ]));
  }
}), it = /* @__PURE__ */ x(nt, [["__scopeId", "data-v-1ea4f148"]]);
export {
  it as default
};
