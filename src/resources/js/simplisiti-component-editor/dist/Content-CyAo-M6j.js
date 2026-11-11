import { defineComponent as d, openBlock as u, createElementBlock as x, createElementVNode as f, ref as C, computed as v, onMounted as _, createBlock as y, createCommentVNode as b } from "vue";
import { n as m } from "./main-DO7gq7CN.js";
const h = { class: "flex flex-col gap-1" }, T = /* @__PURE__ */ f("label", { class: "text-xs font-semibold text-gray-700" }, "Texto", -1), L = ["value"], k = /* @__PURE__ */ d({
  __name: "TextContent",
  props: {
    content: {
      type: [String, null],
      required: !0
    }
  },
  emits: ["update:content", "change"],
  setup(a, { emit: l }) {
    const t = l, e = (n) => {
      const o = n.target;
      t("update:content", o.value), t("change");
    };
    return (n, o) => (u(), x("div", h, [
      T,
      f("textarea", {
        class: "min-h-24 w-full resize-y rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        value: a.content,
        onInput: o[0] || (o[0] = (s) => e(s))
      }, null, 40, L)
    ]));
  }
}), w = {
  a: "text",
  p: "text",
  h1: "text"
}, B = /* @__PURE__ */ d({
  __name: "Content",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spContent", "update:spClassList"],
  setup(a, { emit: l }) {
    const t = a, e = C(null), n = v(() => t.element ? w[t.element.tagName.toLowerCase()] : null), o = () => {
      var r;
      n.value === "text" && (e.value = m(((r = t.element) == null ? void 0 : r.innerHTML) ?? ""));
    }, s = l, c = () => {
      s("update:spClassList", []);
    }, p = () => {
      c(), e.value = m(e.value ?? ""), s("update:spContent", {
        content: e.value,
        type: n.value
      });
    };
    return _(() => {
      o(), p(), c();
    }), (r, i) => (u(), x("div", null, [
      n.value === "text" ? (u(), y(k, {
        key: 0,
        content: e.value,
        "onUpdate:content": i[0] || (i[0] = (g) => e.value = g),
        onChange: p
      }, null, 8, ["content"])) : b("", !0)
    ]));
  }
});
export {
  B as default
};
