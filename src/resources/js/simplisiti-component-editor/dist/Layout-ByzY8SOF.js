import { defineComponent as G, ref as g, computed as z, onMounted as H, resolveComponent as T, openBlock as _, createElementBlock as d, createElementVNode as e, withDirectives as i, vModelRadio as p, createVNode as r, createTextVNode as x, vModelSelect as U, createCommentVNode as L, Fragment as k, renderList as A, toDisplayString as w, normalizeClass as f } from "vue";
import { s as X } from "./Spacing-DDxIO4L1.js";
import { p as I } from "./main-CjtwKxVb.js";
const W = 12, q = 12, J = { class: "space-y-3" }, K = { class: "flex flex-wrap gap-4 text-sm font-semibold text-gray-700" }, P = { class: "inline-flex cursor-pointer items-center gap-1.5" }, Q = { class: "editor-icon-wrapper" }, Y = { class: "inline-flex cursor-pointer items-center gap-1.5" }, Z = { class: "editor-icon-wrapper" }, ee = { class: "space-y-3" }, te = {
  key: 0,
  class: "flex flex-wrap gap-3"
}, le = { class: "flex w-1/2 min-w-[8rem] flex-col gap-1" }, oe = { class: "text-xs font-semibold text-gray-700" }, se = { class: "editor-icon-wrapper" }, ae = /* @__PURE__ */ e("option", { value: "" }, null, -1), ne = /* @__PURE__ */ e("option", { value: "sp-style__layout-flex-direction__row" }, "Fila", -1), ie = /* @__PURE__ */ e("option", { value: "sp-style__layout-flex-direction__column" }, "Columna", -1), re = [
  ae,
  ne,
  ie
], ue = { class: "flex flex-wrap gap-3" }, _e = { class: "flex w-1/2 min-w-[8rem] flex-col gap-1" }, de = { class: "text-xs font-semibold text-gray-700" }, ce = { class: "editor-icon-wrapper" }, pe = /* @__PURE__ */ e("option", { value: "" }, null, -1), ye = ["value"], ve = {
  key: 1,
  class: "grid grid-cols-2 gap-2"
}, me = { class: "flex flex-col gap-1" }, ge = { class: "text-xs font-semibold text-gray-700" }, fe = { class: "editor-icon-wrapper" }, xe = /* @__PURE__ */ e("option", { value: "" }, null, -1), we = ["value"], be = { class: "flex flex-col gap-1" }, he = { class: "text-xs font-semibold text-gray-700" }, Ce = { class: "editor-icon-wrapper" }, Ve = /* @__PURE__ */ e("option", { value: "" }, null, -1), Ue = ["value"], je = { class: "space-y-2" }, ze = { class: "text-xs font-semibold text-gray-700" }, Le = { class: "flex w-full justify-start gap-4" }, ke = { class: "editor-icon-wrapper" }, Ae = { class: "editor-icon-wrapper" }, Oe = { class: "editor-icon-wrapper" }, Fe = { class: "editor-icon-wrapper" }, Me = { class: "space-y-2" }, Re = { class: "text-xs font-semibold text-gray-700" }, $e = { class: "flex w-full justify-start gap-4" }, De = { class: "editor-icon-wrapper" }, Ne = { class: "editor-icon-wrapper" }, Se = { class: "editor-icon-wrapper" }, He = /* @__PURE__ */ G({
  __name: "Layout",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:spClassList"],
  setup(F, { emit: M }) {
    const R = F, c = g(null), a = g(null), u = g(null), y = g(null), b = g(null), h = g(null), C = g(null), v = (o) => I(o, R.spClassList), $ = () => X((o) => `sp-style__layout-gap__${o}`), D = z(() => $()), N = () => {
      c.value = v("sp-style__layout-display__"), a.value = v("sp-style__layout-justify-content__"), u.value = v("sp-style__layout-align-items__"), y.value = v("sp-style__layout-flex-direction__"), b.value = v("sp-style__layout-grid-template__columns-"), h.value = v("sp-style__layout-grid-template__rows-"), C.value = v("sp-style__layout-gap__");
    }, S = M, O = (o) => {
      const l = o === "rows" ? W : q, s = [];
      for (let t = 0; t < l; t++)
        s.push(t + 1);
      return s;
    }, B = z(() => O("columns")), E = z(() => O("rows")), n = () => {
      const o = [
        c.value,
        a.value,
        u.value,
        y.value,
        b.value,
        h.value,
        C.value
      ].filter((l) => l);
      S("update:spClassList", o);
    }, V = (o) => y.value === "sp-style__layout-flex-direction__column" ? ["rotate-0", "rotate-90", "rotate-180", "rotate-180"][o] || "rotate-0" : ["-rotate-90", "rotate-0", "rotate-90", "rotate-90"][o] || "rotate-0", j = (o) => y.value === "sp-style__layout-flex-direction__column" ? ["-rotate-90", "rotate-0", "rotate-90"][o] || "rotate-0" : ["rotate-0", "-rotate-90", "rotate-180"][o] || "rotate-0", m = (o, l) => [
      "wizard-icon-button cursor-pointer rounded-lg text-gray-600 transition-colors hover:bg-gray-100 focus-within:ring-2 focus-within:ring-blue-500",
      l,
      ...o ? ["wizard-icon-button--selected"] : []
    ];
    return H(() => {
      N(), n();
    }), (o, l) => {
      const s = T("fa-icon");
      return _(), d("div", J, [
        e("div", K, [
          e("label", P, [
            i(e("input", {
              class: "accent-blue-600",
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__flex",
              "onUpdate:modelValue": l[0] || (l[0] = (t) => c.value = t),
              onChange: n
            }, null, 544), [
              [p, c.value]
            ]),
            e("div", Q, [
              r(s, { icon: "arrows-left-right" })
            ]),
            x(" Flexible ")
          ]),
          e("label", Y, [
            i(e("input", {
              class: "accent-blue-600",
              type: "radio",
              name: "display",
              value: "sp-style__layout-display__grid",
              "onUpdate:modelValue": l[1] || (l[1] = (t) => c.value = t),
              onChange: n
            }, null, 544), [
              [p, c.value]
            ]),
            e("div", Z, [
              r(s, { icon: "table-cells" })
            ]),
            x(" Tabla ")
          ])
        ]),
        e("div", ee, [
          c.value === "sp-style__layout-display__flex" ? (_(), d("div", te, [
            e("div", le, [
              e("label", oe, [
                e("div", se, [
                  r(s, { icon: "arrow-down-wide-short" })
                ]),
                x(" Dirección ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[2] || (l[2] = (t) => y.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, re, 544), [
                [U, y.value]
              ])
            ])
          ])) : L("", !0),
          e("div", ue, [
            e("div", _e, [
              e("label", de, [
                e("div", ce, [
                  r(s, { icon: "arrow-down-wide-short" })
                ]),
                x(" Espaciado ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[3] || (l[3] = (t) => C.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                pe,
                (_(!0), d(k, null, A(D.value, (t) => (_(), d("option", {
                  key: t.value,
                  value: t.value
                }, w(t.label), 9, ye))), 128))
              ], 544), [
                [U, C.value]
              ])
            ])
          ]),
          c.value === "sp-style__layout-display__grid" ? (_(), d("div", ve, [
            e("div", me, [
              e("label", ge, [
                e("div", fe, [
                  r(s, { icon: "grip" })
                ]),
                x(" Columas ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[4] || (l[4] = (t) => b.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                xe,
                (_(!0), d(k, null, A(B.value, (t) => (_(), d("option", {
                  key: `sp-style__layout-grid-template__columns-${t}`,
                  value: `sp-style__layout-grid-template__columns-${t}`
                }, w(t), 9, we))), 128))
              ], 544), [
                [U, b.value]
              ])
            ]),
            e("div", be, [
              e("label", he, [
                e("div", Ce, [
                  r(s, { icon: "grip-vertical" })
                ]),
                x(" Filas ")
              ]),
              i(e("select", {
                "onUpdate:modelValue": l[5] || (l[5] = (t) => h.value = t),
                class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
                onChange: n
              }, [
                Ve,
                (_(!0), d(k, null, A(E.value, (t) => (_(), d("option", {
                  key: `sp-style__layout-grid-template__rows-${t}`,
                  value: `sp-style__layout-grid-template__rows-${t}`
                }, w(t), 9, Ue))), 128))
              ], 544), [
                [U, h.value]
              ])
            ])
          ])) : L("", !0),
          e("div", je, [
            e("label", ze, w(y.value === "sp-style__layout-flex-direction__column" ? "Vertical" : "Horizontal"), 1),
            e("div", Le, [
              e("label", {
                class: f(m(a.value === "sp-style__layout-justify-content__start", V(0)))
              }, [
                e("div", ke, [
                  r(s, { icon: "arrows-up-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__start",
                  "onUpdate:modelValue": l[6] || (l[6] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [p, a.value]
                ])
              ], 2),
              e("label", {
                class: f(m(a.value === "sp-style__layout-justify-content__center", V(1)))
              }, [
                e("div", Ae, [
                  r(s, { icon: "arrows-left-right-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__center",
                  "onUpdate:modelValue": l[7] || (l[7] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [p, a.value]
                ])
              ], 2),
              e("label", {
                class: f(m(a.value === "sp-style__layout-justify-content__end", V(2)))
              }, [
                e("div", Oe, [
                  r(s, { icon: "arrows-up-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__end",
                  "onUpdate:modelValue": l[8] || (l[8] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [p, a.value]
                ])
              ], 2),
              c.value === "sp-style__layout-display__flex" ? (_(), d("label", {
                key: 0,
                class: f(m(a.value === "sp-style__layout-justify-content__between", V(3)))
              }, [
                e("div", Fe, [
                  r(s, { icon: "bars" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "horizontal",
                  value: "sp-style__layout-justify-content__between",
                  "onUpdate:modelValue": l[9] || (l[9] = (t) => a.value = t),
                  onChange: n
                }, null, 544), [
                  [p, a.value]
                ])
              ], 2)) : L("", !0)
            ])
          ]),
          e("div", Me, [
            e("label", Re, w(y.value === "sp-style__layout-flex-direction__column" ? "Horizontal" : "Vertical"), 1),
            e("div", $e, [
              e("label", {
                class: f(m(u.value === "sp-style__layout-align-items__start", j(0)))
              }, [
                e("div", De, [
                  r(s, { icon: "arrows-up-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__start",
                  "onUpdate:modelValue": l[10] || (l[10] = (t) => u.value = t),
                  onChange: n
                }, null, 544), [
                  [p, u.value]
                ])
              ], 2),
              e("label", {
                class: f(m(u.value === "sp-style__layout-align-items__center", j(1)))
              }, [
                e("div", Ne, [
                  r(s, { icon: "arrows-left-right-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__center",
                  "onUpdate:modelValue": l[11] || (l[11] = (t) => u.value = t),
                  onChange: n
                }, null, 544), [
                  [p, u.value]
                ])
              ], 2),
              e("label", {
                class: f(m(u.value === "sp-style__layout-align-items__end", j(2)))
              }, [
                e("div", Se, [
                  r(s, { icon: "arrows-up-to-line" })
                ]),
                i(e("input", {
                  class: "sr-only",
                  type: "radio",
                  name: "vertical",
                  value: "sp-style__layout-align-items__end",
                  "onUpdate:modelValue": l[12] || (l[12] = (t) => u.value = t),
                  onChange: n
                }, null, 544), [
                  [p, u.value]
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
  He as default
};
