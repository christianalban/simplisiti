import { defineComponent as u, openBlock as i, createElementBlock as d, createElementVNode as _, pushScopeId as f, popScopeId as v, ref as C, onMounted as h, createVNode as x } from "vue";
import { _ as g } from "./main-C4Hl9r_F.js";
const y = (t) => (f("data-v-63c32d24"), t = t(), v(), t), I = { class: "sp-font__select-item" }, b = /* @__PURE__ */ y(() => /* @__PURE__ */ _("label", null, "Url", -1)), L = ["value"], S = /* @__PURE__ */ u({
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
    return (s, e) => (i(), d("div", I, [
      b,
      _("textarea", {
        class: "sp-font__select-text",
        value: t.content,
        onInput: e[0] || (e[0] = (c) => n(c))
      }, null, 40, L)
    ]));
  }
}), A = /* @__PURE__ */ g(S, [["__scopeId", "data-v-63c32d24"]]), U = /* @__PURE__ */ u({
  __name: "Url",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spAttribute", "update:spClassList"],
  setup(t, { emit: a }) {
    const o = t, n = C(null), s = () => {
      var l;
      n.value = ((l = o.element) == null ? void 0 : l.getAttribute("href")) || "";
    }, e = a, c = () => {
      e("update:spClassList", []);
    }, p = () => {
      c(), e("update:spAttribute", {
        content: n.value,
        type: "href"
      });
    };
    return h(() => {
      s(), p(), c();
    }), (l, r) => (i(), d("div", null, [
      x(A, {
        content: n.value,
        "onUpdate:content": r[0] || (r[0] = (m) => n.value = m),
        onChange: p
      }, null, 8, ["content"])
    ]));
  }
});
export {
  U as default
};
