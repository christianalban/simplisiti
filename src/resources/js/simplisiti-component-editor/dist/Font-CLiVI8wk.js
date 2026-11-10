import { defineComponent as A, ref as g, computed as b, onMounted as G, resolveComponent as U, openBlock as a, createElementBlock as r, createElementVNode as e, withDirectives as C, Fragment as y, renderList as h, toDisplayString as m, vModelSelect as j, normalizeClass as v, createVNode as L, vModelText as H } from "vue";
import { r as q, p as J } from "./main-Bc5NpFyY.js";
const K = [
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72",
  "96",
  "128"
], P = [
  "normal",
  "line-through",
  "underline"
], Q = [
  "thin",
  "normal",
  "bold"
], R = (n) => K.map((s) => ({
  value: n(s).replace(".", "_"),
  label: s
})), X = (n) => P.map((s) => ({
  value: n(s),
  label: {
    normal: "Normal",
    "line-through": "Tachado",
    underline: "Subrayado"
  }[s]
})), Y = (n) => Q.map((s) => ({
  value: n(s),
  label: {
    thin: "Delgado",
    normal: "Normal",
    bold: "Bold"
  }[s]
})), Z = { class: "space-y-3" }, ee = { class: "grid grid-cols-2 gap-2" }, te = { class: "flex flex-col gap-1" }, le = /* @__PURE__ */ e("label", { class: "text-xs font-semibold text-gray-700" }, "Tamaño", -1), oe = /* @__PURE__ */ e("option", { value: "" }, null, -1), se = ["value"], ne = { class: "grid grid-cols-2 gap-2" }, ae = { class: "flex flex-col gap-1" }, re = /* @__PURE__ */ e("label", { class: "text-xs font-semibold text-gray-700" }, "Estilo", -1), ie = { class: "flex flex-nowrap gap-1" }, ce = ["title", "aria-label", "aria-pressed", "onClick"], ue = { class: "editor-icon-wrapper" }, de = { class: "grid grid-cols-2 gap-2" }, _e = { class: "flex flex-col gap-1" }, pe = /* @__PURE__ */ e("label", { class: "text-xs font-semibold text-gray-700" }, "Ancho", -1), ge = { class: "flex flex-nowrap gap-1" }, fe = ["title", "aria-label", "aria-pressed", "onClick"], ve = { class: "editor-icon-wrapper" }, be = { class: "grid grid-cols-2 gap-2" }, ye = { class: "flex flex-col gap-1" }, he = /* @__PURE__ */ e("label", { class: "text-xs font-semibold text-gray-700" }, "Italic", -1), me = { class: "flex flex-nowrap gap-1" }, xe = ["aria-pressed"], we = { class: "editor-icon-wrapper" }, Se = { class: "grid grid-cols-2 gap-2" }, Ce = { class: "flex flex-col gap-1" }, Le = { class: "text-xs font-semibold text-gray-700" }, z = "sp-style__font-style__italic", Ie = /* @__PURE__ */ A({
  __name: "Font",
  props: {
    spClassList: {
      type: Array,
      default: []
    },
    spStyleList: {
      type: Object,
      default: []
    }
  },
  emits: ["update:spClassList", "update:spStyleList"],
  setup(n, { emit: s }) {
    const c = n, f = g(null), u = g(null), d = g(null), i = g(!1), _ = g(
      { color: "#000000" }
    ), x = (l) => J(l, c.spClassList), k = () => R((l) => `sp-style__font-size__${l}`), I = b(() => k()), F = b(() => X((l) => `sp-style__font-style__${l}`)), W = b(() => Y((l) => `sp-style__font-weight__${l}`)), $ = {
      normal: "font",
      "line-through": "strikethrough",
      underline: "underline"
    }, N = {
      thin: "T",
      normal: "N",
      bold: "B"
    }, O = (l) => {
      const o = l.replace("sp-style__font-style__", "");
      return $[o];
    }, T = (l) => {
      const o = l.replace("sp-style__font-weight__", "");
      return N[o];
    }, B = (l) => {
      const o = l.replace("sp-style__font-weight__", "");
      return {
        thin: "font-light",
        normal: "font-normal",
        bold: "font-bold"
      }[o];
    }, V = () => {
      f.value = x("sp-style__font-size__"), u.value = c.spClassList.find((l) => [
        "sp-style__font-style__normal",
        "sp-style__font-style__line-through",
        "sp-style__font-style__underline"
      ].includes(l)) ?? null, d.value = x("sp-style__font-weight__"), i.value = c.spClassList.includes(z);
    }, D = () => {
      for (const l in c.spStyleList)
        l === "color" && (_.value.color = q(c.spStyleList[l]));
    }, w = s, p = () => {
      const l = [
        f.value,
        u.value,
        d.value,
        i.value ? z : null
      ].filter((o) => o);
      w("update:spClassList", l);
    }, E = () => {
      const l = {
        color: _.value.color
      };
      w("update:spStyleList", l);
    };
    return G(() => {
      V(), D(), p();
    }), (l, o) => {
      const S = U("fa-icon");
      return a(), r("div", Z, [
        e("div", ee, [
          e("div", te, [
            le,
            C(e("select", {
              "onUpdate:modelValue": o[0] || (o[0] = (t) => f.value = t),
              class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
              onChange: p
            }, [
              oe,
              (a(!0), r(y, null, h(I.value, (t) => (a(), r("option", {
                key: t.value,
                value: t.value
              }, m(t.label), 9, se))), 128))
            ], 544), [
              [j, f.value]
            ])
          ])
        ]),
        e("div", ne, [
          e("div", ae, [
            re,
            e("div", ie, [
              (a(!0), r(y, null, h(F.value, (t) => (a(), r("button", {
                key: t.value,
                type: "button",
                class: v([
                  "wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                  { "wizard-icon-button--selected": u.value === t.value }
                ]),
                title: t.label,
                "aria-label": t.label,
                "aria-pressed": u.value === t.value,
                onClick: (M) => {
                  u.value = t.value, p();
                }
              }, [
                e("div", ue, [
                  L(S, {
                    icon: O(t.value)
                  }, null, 8, ["icon"])
                ])
              ], 10, ce))), 128))
            ])
          ])
        ]),
        e("div", de, [
          e("div", _e, [
            pe,
            e("div", ge, [
              (a(!0), r(y, null, h(W.value, (t) => (a(), r("button", {
                key: t.value,
                type: "button",
                class: v([
                  "wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
                  { "wizard-icon-button--selected": d.value === t.value }
                ]),
                title: t.label,
                "aria-label": t.label,
                "aria-pressed": d.value === t.value,
                onClick: (M) => {
                  d.value = t.value, p();
                }
              }, [
                e("div", ve, [
                  e("span", {
                    class: v(["text-lg leading-none", B(t.value)])
                  }, m(T(t.value)), 3)
                ])
              ], 10, fe))), 128))
            ])
          ])
        ]),
        e("div", be, [
          e("div", ye, [
            he,
            e("div", me, [
              e("button", {
                type: "button",
                class: v(["wizard-icon-button rounded-md border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20", { "wizard-icon-button--selected": i.value }]),
                title: "Italic",
                "aria-label": "Italic",
                "aria-pressed": i.value,
                onClick: o[1] || (o[1] = (t) => {
                  i.value = !i.value, p();
                })
              }, [
                e("div", we, [
                  L(S, { icon: "italic" })
                ])
              ], 10, xe)
            ])
          ])
        ]),
        e("div", Se, [
          e("div", Ce, [
            e("label", Le, "Color " + m(_.value.color), 1),
            C(e("input", {
              class: "h-8 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
              type: "color",
              "onUpdate:modelValue": o[2] || (o[2] = (t) => _.value.color = t),
              onChange: E
            }, null, 544), [
              [H, _.value.color]
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  Ie as default
};
