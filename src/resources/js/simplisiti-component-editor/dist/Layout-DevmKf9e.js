import { defineComponent as G, ref as g, computed as z, onMounted as H, resolveComponent as T, openBlock as _, createElementBlock as p, createElementVNode as e, withDirectives as i, vModelRadio as c, createVNode as u, createTextVNode as x, vModelSelect as U, createCommentVNode as L, Fragment as k, renderList as A, toDisplayString as b, normalizeClass as f } from "vue";
import { s as X } from "./Spacing-6yBgarMA.js";
import { p as I } from "./main-C_Ly4T5r.js";
const W = 12, q = 12, J = { class: "space-y-3" }, K = { class: "flex flex-wrap gap-4 text-sm font-semibold text-gray-700" }, P = { class: "inline-flex cursor-pointer items-center gap-1.5" }, Q = { class: "inline-flex cursor-pointer items-center gap-1.5" }, Y = { class: "space-y-3" }, Z = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, ee = { class: "flex w-1/2 min-w-[8rem] flex-col gap-1" }, te = { class: "text-xs font-semibold text-gray-700" }, le = /* @__PURE__ */ e("option", { value: "" }, null, -1), se = /* @__PURE__ */ e("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1), oe = /* @__PURE__ */ e("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1), ae = [
  le,
  se,
  oe
], ne = { class: "flex flex-wrap gap-3" }, ie = { class: "flex w-1/2 min-w-[8rem] flex-col gap-1" }, ue = { class: "text-xs font-semibold text-gray-700" }, re = /* @__PURE__ */ e("option", { value: "" }, null, -1), _e = ["value"], pe = {
  key: 1,
  class: "grid grid-cols-2 gap-2"
}, de = { class: "flex flex-col gap-1" }, ce = { class: "text-xs font-semibold text-gray-700" }, ye = /* @__PURE__ */ e("option", { value: "" }, null, -1), me = ["value"], ve = { class: "flex flex-col gap-1" }, ge = { class: "text-xs font-semibold text-gray-700" }, fe = /* @__PURE__ */ e("option", { value: "" }, null, -1), xe = ["value"], be = { class: "space-y-2" }, we = { class: "text-xs font-semibold text-gray-700" }, he = { class: "flex w-full justify-start gap-4" }, Ce = { class: "space-y-2" }, Ve = { class: "text-xs font-semibold text-gray-700" }, Ue = { class: "flex w-full justify-start gap-4" }, ke = /* @__PURE__ */ G({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:spClassList"],
  setup(F, { emit: M }) {
    const R = F, d = g(null), a = g(null), r = g(null), y = g(null), w = g(null), h = g(null), C = g(null), m = (s) => I(s, R.spClassList), $ = () => X((s) => `sp-style__layout-gap__${s}`), D = z(() => $()), N = () => {
      d.value = m("sp-style__layout-display__"), a.value = m("sp-style__layout-justify-content__"), r.value = m("sp-style__layout-align-items__"), y.value = m("sp-style__layout-flex-direction__"), w.value = m("sp-style__layout-grid-template__columns-"), h.value = m("sp-style__layout-grid-template__rows-"), C.value = m("sp-style__layout-gap__");
    }, S = M, O = (s) => {
      const l = s === "rows" ? W : q, o = [];
      for (let t = 0; t < l; t++)
        o.push(t + 1);
      return o;
    }, B = z(() => O("columns")), E = z(() => O("rows")), n = () => {
      const s = [
        d.value,
        a.value,
        r.value,
        y.value,
        w.value,
        h.value,
        C.value
      ].filter((l) => l);
      S("update:spClassList", s);
    }, V = (s) => y.value === "sp-style__layout-flex-direction__column" ? ["rotate-0", "rotate-90", "rotate-180", "rotate-180"][s] || "rotate-0" : ["-rotate-90", "rotate-0", "rotate-90", "rotate-90"][s] || "rotate-0", j = (s) => y.value === "sp-style__layout-flex-direction__column" ? ["-rotate-90", "rotate-0", "rotate-90"][s] || "rotate-0" : ["rotate-0", "-rotate-90", "rotate-180"][s] || "rotate-0", v = (s, l) => [
      "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500",
      l,
      ...s ? ["bg-blue-100", "text-blue-700"] : []
    ];
    return H(() => {
      N(), n();
    }), (s, l) => {
      const o = T("fa-icon");
      return _(), p("div", J, [
        e("div", K, [
          e("label", P, [
            i(e("input", {
              class: "accent-blue-600",
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": l[0] || (l[0] = (t) => d.value = t),
              onChange: n
            }, null, 544), [
              [c, d.value]
            ]),
            u(o, { icon: "arrows-left-right" }),
            x(" Flexible ")
          ]),
          e("label", Q, [
            i(e("input", {
              class: "accent-blue-600",
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": l[1] || (l[1] = (t) => d.value = t),
              onChange: n
            }, null, 544), [
              [c, d.value]
            ]),
            u(o, { icon: "table-cells" }),
            x(" Tabla ")
          ])
        ]),
        e("div", Y, [
          d.value === "sp-style__layout-display__flex" ? (_(), p("div", Z, [
            e("div", ee, [
              e("label", te, [
                u(o, { icon: "arrow-down-wide-short" }),
                x(" Dirección ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[2] || (l[2] = (t) => y.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, ae, 544), [
                [U, y.value]
              ])
            ])
          ])) : L("", !0),
          e("div", ne, [
            e("div", ie, [
              e("label", ue, [
                u(o, { icon: "arrow-down-wide-short" }),
                x(" Espaciado ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[3] || (l[3] = (t) => C.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                re,
                (_(!0), p(k, null, A(D.value, (t) => (_(), p("option", {
                  key: t.value,
                  value: t.value
                }, b(t.label), 9, _e))), 128))
              ], 544), [
                [U, C.value]
              ])
            ])
          ]),
          d.value === "sp-style__layout-display__grid" ? (_(), p("div", pe, [
            e("div", de, [
              e("label", ce, [
                u(o, { icon: "grip" }),
                x(" Columas ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[4] || (l[4] = (t) => w.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                ye,
                (_(!0), p(k, null, A(B.value, (t) => (_(), p("option", {
                  key: `sp-style__layout-grid-template__columns-${t}`,
                  value: `sp-style__layout-grid-template__columns-${t}`
                }, b(t), 9, me))), 128))
              ], 544), [
                [U, w.value]
              ])
            ]),
            e("div", ve, [
              e("label", ge, [
                u(o, { icon: "grip-vertical" }),
                x(" Filas ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[5] || (l[5] = (t) => h.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                fe,
                (_(!0), p(k, null, A(E.value, (t) => (_(), p("option", {
                  key: `sp-style__layout-grid-template__rows-${t}`,
                  value: `sp-style__layout-grid-template__rows-${t}`
                }, b(t), 9, xe))), 128))
              ], 544), [
                [U, h.value]
              ])
            ])
          ])) : L("", !0),
          e("div", be, [
            e("label", we, b(y.value === "sp-style__layout-flex-direction__column" ? "Vertical" : "Horizontal"), 1),
            e("div", he, [
              e("label", {
                class: f(v(a.value === "sp-style__layout-justify-content__start", V(0)))
              }, [
                u(o, { icon: "arrows-up-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__start",
                  "onUpdate:modelValue": l[6] || (l[6] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [c, a.value]
                ])
              ], 2),
              e("label", {
                class: f(v(a.value === "sp-style__layout-justify-content__center", V(1)))
              }, [
                u(o, { icon: "arrows-left-right-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__center",
                  "onUpdate:modelValue": l[7] || (l[7] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [c, a.value]
                ])
              ], 2),
              e("label", {
                class: f(v(a.value === "sp-style__layout-justify-content__end", V(2)))
              }, [
                u(o, { icon: "arrows-up-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__end",
                  "onUpdate:modelValue": l[8] || (l[8] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [c, a.value]
                ])
              ], 2),
              d.value === "sp-style__layout-display__flex" ? (_(), p("label", {
                key: 0,
                class: f(v(a.value === "sp-style__layout-justify-content__between", V(3)))
              }, [
                u(o, { icon: "bars" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__between",
                  "onUpdate:modelValue": l[9] || (l[9] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [c, a.value]
                ])
              ], 2)) : L("", !0)
            ])
          ]),
          e("div", Ce, [
            e("label", Ve, b(y.value === "sp-style__layout-flex-direction__column" ? "Horizontal" : "Vertical"), 1),
            e("div", Ue, [
              e("label", {
                class: f(v(r.value === "sp-style__layout-align-items__start", j(0)))
              }, [
                u(o, { icon: "arrows-up-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__start",
                  "onUpdate:modelValue": l[10] || (l[10] = (t) => r.value = t),
                  onChange: n
                }, null, 544), [
                  [c, r.value]
                ])
              ], 2),
              e("label", {
                class: f(v(r.value === "sp-style__layout-align-items__center", j(1)))
              }, [
                u(o, { icon: "arrows-left-right-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__center",
                  "onUpdate:modelValue": l[11] || (l[11] = (t) => r.value = t),
                  onChange: n
                }, null, 544), [
                  [c, r.value]
                ])
              ], 2),
              e("label", {
                class: f(v(r.value === "sp-style__layout-align-items__end", j(2)))
              }, [
                u(o, { icon: "arrows-up-to-line" }),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__end",
                  "onUpdate:modelValue": l[12] || (l[12] = (t) => r.value = t),
                  onChange: n
                }, null, 544), [
                  [c, r.value]
                ])
              ], 2)
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  ke as default
};
