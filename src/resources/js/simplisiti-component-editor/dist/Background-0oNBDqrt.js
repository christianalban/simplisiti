import { defineComponent as b, ref as a, onMounted as g, openBlock as m, createElementBlock as y, createElementVNode as r, withDirectives as v, vModelText as x } from "vue";
import { r as h } from "./main-BFmV-A_O.js";
const _ = { class: "space-y-3" }, k = { class: "flex flex-col gap-1" }, C = /* @__PURE__ */ r("label", { class: "text-xs font-semibold text-gray-700" }, "Color de fondo", -1), L = /* @__PURE__ */ b({
  __name: "Background",
  props: {
    spStyleList: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:spStyleList"],
  setup(l, { emit: u }) {
    const c = l, d = u, e = a("#ffffff"), o = a(!0), s = () => {
      d("update:spStyleList", {
        "background-color": o.value ? "transparent" : e.value
      });
    }, i = () => {
      o.value = !1, s();
    }, p = () => {
      o.value = !0, s();
    };
    return g(() => {
      const t = c.spStyleList["background-color"];
      t && t !== "transparent" && (e.value = h(t) || e.value, o.value = !1);
    }), (t, n) => (m(), y("div", _, [
      r("div", k, [
        C,
        v(r("input", {
          "onUpdate:modelValue": n[0] || (n[0] = (f) => e.value = f),
          class: "h-8 w-full cursor-pointer rounded-md border border-gray-300 bg-white p-1 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          type: "color",
          onChange: i
        }, null, 544), [
          [x, e.value]
        ])
      ]),
      r("button", {
        type: "button",
        class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20",
        onClick: p
      }, " Restablecer transparente ")
    ]));
  }
});
export {
  L as default
};
