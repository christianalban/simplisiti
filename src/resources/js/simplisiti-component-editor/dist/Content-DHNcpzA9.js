import { defineComponent as m, openBlock as r, createElementBlock as d, createElementVNode as x, ref as g, computed as C, onMounted as _, createBlock as y, createCommentVNode as v } from "vue";
const b = { class: "flex flex-col gap-1" }, h = /* @__PURE__ */ x("label", { class: "text-xs font-semibold text-gray-700" }, "Texto", -1), L = ["value"], T = /* @__PURE__ */ m({
  __name: "TextContent",
  props: {
    content: {
      type: [String, null],
      required: !0
    }
  },
  emits: ["update:content", "change"],
  setup(l, { emit: a }) {
    const e = a, t = (n) => {
      const o = n.target;
      e("update:content", o.value), e("change");
    };
    return (n, o) => (r(), d("div", b, [
      h,
      x("textarea", {
        class: "min-h-24 w-full resize-y rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        value: l.content,
        onInput: o[0] || (o[0] = (s) => t(s))
      }, null, 40, L)
    ]));
  }
}), k = {
  a: "text",
  p: "text",
  h1: "text"
}, M = /* @__PURE__ */ m({
  __name: "Content",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spContent", "update:spClassList"],
  setup(l, { emit: a }) {
    const e = l, t = g(null), n = C(() => e.element ? k[e.element.tagName.toLowerCase()] : null), o = () => {
      var u;
      n.value === "text" && (t.value = (u = e.element) == null ? void 0 : u.innerHTML);
    }, s = a, c = () => {
      s("update:spClassList", []);
    }, p = () => {
      c(), s("update:spContent", {
        content: t.value,
        type: n.value
      });
    };
    return _(() => {
      o(), p(), c();
    }), (u, i) => (r(), d("div", null, [
      n.value === "text" ? (r(), y(T, {
        key: 0,
        content: t.value,
        "onUpdate:content": i[0] || (i[0] = (f) => t.value = f),
        onChange: p
      }, null, 8, ["content"])) : v("", !0)
    ]));
  }
});
export {
  M as default
};
