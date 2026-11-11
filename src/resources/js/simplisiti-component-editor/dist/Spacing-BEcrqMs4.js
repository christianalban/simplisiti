import { defineComponent as S, computed as _, openBlock as u, createElementBlock as g, createElementVNode as t, toDisplayString as f, withDirectives as h, Fragment as y, renderList as x, vModelSelect as C, ref as V, onMounted as U, createVNode as w } from "vue";
import { s as k, a as L } from "./Spacing-DDxIO4L1.js";
import { p as O } from "./main-DO7gq7CN.js";
const q = { class: "space-y-2" }, A = { class: "text-sm font-semibold text-gray-800" }, D = { class: "grid grid-cols-2 gap-2" }, I = { class: "flex flex-col gap-1" }, M = /* @__PURE__ */ t("label", { class: "text-xs font-semibold text-gray-700" }, "Arriba", -1), j = /* @__PURE__ */ t("option", { value: "" }, null, -1), B = ["value"], E = { class: "flex flex-col gap-1" }, G = /* @__PURE__ */ t("label", { class: "text-xs font-semibold text-gray-700" }, "Abajo", -1), N = /* @__PURE__ */ t("option", { value: "" }, null, -1), F = ["value"], P = { class: "flex flex-col gap-1" }, T = /* @__PURE__ */ t("label", { class: "text-xs font-semibold text-gray-700" }, "Izquierda", -1), H = /* @__PURE__ */ t("option", { value: "" }, null, -1), J = ["value"], K = { class: "flex flex-col gap-1" }, Q = /* @__PURE__ */ t("label", { class: "text-xs font-semibold text-gray-700" }, "Derecha", -1), R = /* @__PURE__ */ t("option", { value: "" }, null, -1), W = ["value"], z = /* @__PURE__ */ S({
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
  setup(i, { emit: m }) {
    const { type: v, spacingConfig: b } = i, l = m, s = (r) => k((o) => `sp-style__spacing-${v}-${r}__${o}`), a = _(() => s("top")), n = _(() => s("bottom")), d = _(() => s("left")), c = _(() => s("right")), p = () => {
      l("update:spacingConfig", b);
    };
    return (r, o) => (u(), g("div", q, [
      t("div", null, [
        t("h2", A, f(i.title), 1)
      ]),
      t("div", D, [
        t("div", I, [
          M,
          h(t("select", {
            "onUpdate:modelValue": o[0] || (o[0] = (e) => i.spacingConfig.top = e),
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: p
          }, [
            j,
            (u(!0), g(y, null, x(a.value, (e) => (u(), g("option", {
              key: e.value,
              value: e.value
            }, f(e.label), 9, B))), 128))
          ], 544), [
            [C, i.spacingConfig.top]
          ])
        ]),
        t("div", E, [
          G,
          h(t("select", {
            "onUpdate:modelValue": o[1] || (o[1] = (e) => i.spacingConfig.bottom = e),
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: p
          }, [
            N,
            (u(!0), g(y, null, x(n.value, (e) => (u(), g("option", {
              key: e.value,
              value: e.value
            }, f(e.label), 9, F))), 128))
          ], 544), [
            [C, i.spacingConfig.bottom]
          ])
        ]),
        t("div", P, [
          T,
          h(t("select", {
            "onUpdate:modelValue": o[2] || (o[2] = (e) => i.spacingConfig.left = e),
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: p
          }, [
            H,
            (u(!0), g(y, null, x(d.value, (e) => (u(), g("option", {
              key: e.value,
              value: e.value
            }, f(e.label), 9, J))), 128))
          ], 544), [
            [C, i.spacingConfig.left]
          ])
        ]),
        t("div", K, [
          Q,
          h(t("select", {
            "onUpdate:modelValue": o[3] || (o[3] = (e) => i.spacingConfig.right = e),
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: p
          }, [
            R,
            (u(!0), g(y, null, x(c.value, (e) => (u(), g("option", {
              key: e.value,
              value: e.value
            }, f(e.label), 9, W))), 128))
          ], 544), [
            [C, i.spacingConfig.right]
          ])
        ])
      ])
    ]));
  }
}), X = { class: "flex flex-col gap-1" }, Y = { class: "text-xs font-semibold text-gray-700" }, Z = /* @__PURE__ */ t("option", { value: "" }, null, -1), tt = ["value"], $ = /* @__PURE__ */ S({
  __name: "DimensionSelect",
  props: {
    title: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !0
    },
    sizingValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:sizingValue"],
  setup(i, { emit: m }) {
    const v = i, b = m, l = _(() => L(v.type)), s = _({
      get: () => v.sizingValue,
      set: (a) => b("update:sizingValue", a)
    });
    return (a, n) => (u(), g("div", X, [
      t("label", Y, f(i.title), 1),
      h(t("select", {
        "onUpdate:modelValue": n[0] || (n[0] = (d) => s.value = d),
        class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      }, [
        Z,
        (u(!0), g(y, null, x(l.value, (d) => (u(), g("option", {
          key: d.value,
          value: d.value
        }, f(d.label), 9, tt))), 128))
      ], 512), [
        [C, s.value]
      ])
    ]));
  }
}), et = { class: "space-y-3" }, st = /* @__PURE__ */ t("hr", { class: "my-4 border-0 border-t border-gray-200" }, null, -1), ot = /* @__PURE__ */ t("hr", { class: "my-4 border-0 border-t border-gray-200" }, null, -1), it = { class: "space-y-2" }, nt = /* @__PURE__ */ t("h2", { class: "text-sm font-semibold text-gray-800" }, "Tamaño", -1), lt = { class: "grid grid-cols-2 gap-2" }, gt = /* @__PURE__ */ S({
  __name: "Spacing",
  props: {
    spClassList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:spClassList"],
  setup(i, { emit: m }) {
    const v = i, b = m, l = V({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), s = V({
      top: void 0,
      bottom: void 0,
      left: void 0,
      right: void 0
    }), a = V({
      width: void 0,
      height: void 0
    }), n = (p) => O(p, v.spClassList), d = () => {
      l.value.top = n("sp-style__spacing-margin-top__"), l.value.bottom = n("sp-style__spacing-margin-bottom__"), l.value.left = n("sp-style__spacing-margin-left__"), l.value.right = n("sp-style__spacing-margin-right__"), s.value.top = n("sp-style__spacing-padding-top__"), s.value.bottom = n("sp-style__spacing-padding-bottom__"), s.value.left = n("sp-style__spacing-padding-left__"), s.value.right = n("sp-style__spacing-padding-right__"), a.value.width = n("sp-style__sizing-width__"), a.value.height = n("sp-style__sizing-height__");
    }, c = () => {
      const p = [
        l.value.top,
        l.value.bottom,
        l.value.left,
        l.value.right,
        s.value.top,
        s.value.bottom,
        s.value.left,
        s.value.right,
        a.value.width,
        a.value.height
      ].filter((r) => r);
      b("update:spClassList", p);
    };
    return U(() => {
      d(), c();
    }), (p, r) => (u(), g("div", et, [
      w(z, {
        title: "Margen",
        type: "margin",
        spacingConfig: l.value,
        "onUpdate:spacingConfig": [
          r[0] || (r[0] = (o) => l.value = o),
          c
        ]
      }, null, 8, ["spacingConfig"]),
      st,
      w(z, {
        title: "Padding",
        type: "padding",
        spacingConfig: s.value,
        "onUpdate:spacingConfig": [
          r[1] || (r[1] = (o) => s.value = o),
          c
        ]
      }, null, 8, ["spacingConfig"]),
      ot,
      t("div", it, [
        nt,
        t("div", lt, [
          w($, {
            title: "Ancho",
            type: "width",
            sizingValue: a.value.width,
            "onUpdate:sizingValue": [
              r[2] || (r[2] = (o) => a.value.width = o),
              c
            ]
          }, null, 8, ["sizingValue"]),
          w($, {
            title: "Alto",
            type: "height",
            sizingValue: a.value.height,
            "onUpdate:sizingValue": [
              r[3] || (r[3] = (o) => a.value.height = o),
              c
            ]
          }, null, 8, ["sizingValue"])
        ])
      ])
    ]));
  }
});
export {
  gt as default
};
