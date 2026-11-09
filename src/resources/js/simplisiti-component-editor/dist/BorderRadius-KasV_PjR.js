import { defineComponent as g, ref as v, onMounted as h, openBlock as l, createElementBlock as i, createElementVNode as t, Fragment as p, renderList as c, toDisplayString as m, withDirectives as k, unref as x, vModelSelect as C } from "vue";
import { S } from "./Spacing-DDxIO4L1.js";
import { p as L } from "./main-DxHbv7mZ.js";
const w = (n) => S.map((r) => ({
  value: `sp-style__border-radius-${n}__${r}`.replace(".", "_"),
  label: r
})), B = { class: "space-y-3" }, R = /* @__PURE__ */ t("div", null, [
  /* @__PURE__ */ t("h2", { class: "text-sm font-semibold text-gray-800" }, "Redondeado")
], -1), I = { class: "grid grid-cols-2 gap-2" }, V = { class: "text-xs font-semibold text-gray-700" }, $ = ["onUpdate:modelValue"], q = /* @__PURE__ */ t("option", { value: "" }, null, -1), z = ["value"], U = /* @__PURE__ */ g({
  __name: "BorderRadius",
  props: {
    spClassList: {
      type: Array,
      default: []
    }
  },
  emits: ["update:spClassList"],
  setup(n, { emit: r }) {
    const _ = n, f = r, a = v({
      "top-left": void 0,
      "top-right": void 0,
      "bottom-right": void 0,
      "bottom-left": void 0
    }), d = [
      { key: "top-left", label: "Superior izquierda" },
      { key: "top-right", label: "Superior derecha" },
      { key: "bottom-right", label: "Inferior derecha" },
      { key: "bottom-left", label: "Inferior izquierda" }
    ], b = (e) => L(`sp-style__border-radius-${e}__`, _.spClassList), y = () => {
      for (const e of d)
        a.value[e.key] = b(e.key);
    }, u = () => {
      f("update:spClassList", d.map(({ key: e }) => a.value[e]).filter((e) => !!e));
    };
    return h(() => {
      y(), u();
    }), (e, D) => (l(), i("div", B, [
      R,
      t("div", I, [
        (l(), i(p, null, c(d, (o) => t("div", {
          key: o.key,
          class: "flex flex-col gap-1"
        }, [
          t("label", V, m(o.label), 1),
          k(t("select", {
            "onUpdate:modelValue": (s) => a.value[o.key] = s,
            class: "w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
            onChange: u
          }, [
            q,
            (l(!0), i(p, null, c(x(w)(o.key), (s) => (l(), i("option", {
              key: s.value,
              value: s.value
            }, m(s.label), 9, z))), 128))
          ], 40, $), [
            [C, a.value[o.key]]
          ])
        ])), 64))
      ])
    ]));
  }
});
export {
  U as default
};
