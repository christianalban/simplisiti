import { defineComponent as u, openBlock as i, createElementBlock as d, createElementVNode as _, pushScopeId as f, popScopeId as v, ref as C, onMounted as x, createVNode as g } from "vue";
import { _ as b } from "./main-CL4rb7T6.js";
const h = (t) => (f("data-v-fbcf1321"), t = t(), v(), t), S = { class: "sp-font__select-item" }, y = /* @__PURE__ */ h(() => /* @__PURE__ */ _("label", null, "Src", -1)), I = ["value"], L = /* @__PURE__ */ u({
  __name: "TextContent",
  props: {
    content: {
      type: [String, null],
      required: !0
    }
  },
  emits: ["update:content", "change"],
  setup(t, { emit: a }) {
    const o = a, n = (s) => {
      const e = s.target;
      o("update:content", e.value), o("change");
    };
    return (s, e) => (i(), d("div", S, [
      y,
      _("textarea", {
        class: "sp-font__select-text",
        value: t.content,
        onInput: e[0] || (e[0] = (c) => n(c))
      }, null, 40, I)
    ]));
  }
}), A = /* @__PURE__ */ b(L, [["__scopeId", "data-v-fbcf1321"]]), k = /* @__PURE__ */ u({
  __name: "Src",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spAttribute", "update:spClassList"],
  setup(t, { emit: a }) {
    const o = t, n = C(null), s = () => {
      var p;
      n.value = ((p = o.element) == null ? void 0 : p.getAttribute("src")) || "";
    }, e = a, c = () => {
      e("update:spClassList", []);
    }, l = () => {
      c(), e("update:spAttribute", {
        content: n.value,
        type: "src"
      });
    };
    return x(() => {
      s(), l(), c();
    }), (p, r) => (i(), d("div", null, [
      g(A, {
        content: n.value,
        "onUpdate:content": r[0] || (r[0] = (m) => n.value = m),
        onChange: l
      }, null, 8, ["content"])
    ]));
  }
});
export {
  k as default
};
