import { defineComponent as h, ref as f, computed as L, onMounted as C, openBlock as c, createElementBlock as u, createElementVNode as t, withDirectives as _, Fragment as w, renderList as z, toDisplayString as g, vModelSelect as k, vModelText as F } from "vue";
import { r as M, p as O } from "./main-C_Ly4T5r.js";
const T = [
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
], V = (r) => T.map((n) => ({
  value: r(n).replace(".", "_"),
  label: n
})), B = { class: "space-y-3" }, D = { class: "grid grid-cols-2 gap-2" }, E = { class: "flex flex-col gap-1" }, G = /* @__PURE__ */ t("label", { class: "text-xs font-semibold text-gray-700" }, "Tamaño", -1), U = /* @__PURE__ */ t("option", { value: "" }, null, -1), j = ["value"], A = { class: "grid grid-cols-2 gap-2" }, H = { class: "flex flex-col gap-1" }, I = { class: "text-xs font-semibold text-gray-700" }, q = /* @__PURE__ */ h({
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
  setup(r, { emit: n }) {
    const i = r, a = f(null), l = f(
      { color: "#000000" }
    ), m = (e) => O(e, i.spClassList), y = () => V((e) => `sp-style__font-size__${e}`), v = L(() => y()), b = () => {
      a.value = m("sp-style__font-size__");
    }, x = () => {
      for (const e in i.spStyleList)
        e === "color" && (l.value.color = M(i.spStyleList[e]));
    }, p = n, d = () => {
      const e = [
        a.value
      ].filter((s) => s);
      p("update:spClassList", e);
    }, S = () => {
      const e = {
        color: l.value.color
      };
      p("update:spStyleList", e);
    };
    return C(() => {
      b(), x(), d();
    }), (e, s) => (c(), u("div", B, [
      t("div", D, [
        t("div", E, [
          G,
          _(t("select", {
            "onUpdate:modelValue": s[0] || (s[0] = (o) => a.value = o),
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: d
          }, [
            U,
            (c(!0), u(w, null, z(v.value, (o) => (c(), u("option", {
              key: o.value,
              value: o.value
            }, g(o.label), 9, j))), 128))
          ], 544), [
            [k, a.value]
          ])
        ])
      ]),
      t("div", A, [
        t("div", H, [
          t("label", I, "Color " + g(l.value.color), 1),
          _(t("input", {
            class: "h-8 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            type: "color",
            "onUpdate:modelValue": s[1] || (s[1] = (o) => l.value.color = o),
            onChange: S
          }, null, 544), [
            [F, l.value.color]
          ])
        ])
      ])
    ]));
  }
});
export {
  q as default
};
