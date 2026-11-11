import { defineComponent as i, openBlock as p, createElementBlock as d, createElementVNode as m, ref as g, onMounted as _, createVNode as x } from "vue";
const b = { class: "flex flex-col gap-1" }, y = /* @__PURE__ */ m("label", { class: "text-xs font-semibold text-gray-700" }, "Url", -1), h = ["value"], v = /* @__PURE__ */ i({
  __name: "TextContent",
  props: {
    content: {
      type: [String, null],
      required: !0
    }
  },
  emits: ["update:content", "change"],
  setup(r, { emit: l }) {
    const n = l, e = (o) => {
      const t = o.target;
      n("update:content", t.value), n("change");
    };
    return (o, t) => (p(), d("div", b, [
      y,
      m("textarea", {
        class: "min-h-24 w-full resize-y rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        value: r.content,
        onInput: t[0] || (t[0] = (s) => e(s))
      }, null, 40, h)
    ]));
  }
}), L = /* @__PURE__ */ i({
  __name: "Url",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spAttribute", "update:spClassList"],
  setup(r, { emit: l }) {
    const n = r, e = g(null), o = () => {
      var u;
      e.value = ((u = n.element) == null ? void 0 : u.getAttribute("href")) || "";
    }, t = l, s = () => {
      t("update:spClassList", []);
    }, a = () => {
      s(), t("update:spAttribute", {
        content: e.value,
        type: "href"
      });
    };
    return _(() => {
      o(), a(), s();
    }), (u, c) => (p(), d("div", null, [
      x(v, {
        content: e.value,
        "onUpdate:content": c[0] || (c[0] = (f) => e.value = f),
        onChange: a
      }, null, 8, ["content"])
    ]));
  }
});
export {
  L as default
};
