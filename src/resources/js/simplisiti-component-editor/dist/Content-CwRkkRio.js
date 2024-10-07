import { defineComponent as i, openBlock as p, createElementBlock as m, createElementVNode as _, pushScopeId as v, popScopeId as x, ref as f, computed as g, onMounted as y, createBlock as h, createCommentVNode as T } from "vue";
import { _ as L } from "./main-DXuX3gBg.js";
const I = (t) => (v("data-v-26c4d301"), t = t(), x(), t), k = { class: "sp-font__select-item" }, M = /* @__PURE__ */ I(() => /* @__PURE__ */ _("label", null, "Texto", -1)), S = ["value"], B = /* @__PURE__ */ i({
  __name: "TextContent",
  props: {
    content: {
      type: [String, null],
      required: !0
    }
  },
  emits: ["update:content", "change"],
  setup(t, { emit: c }) {
    const e = c, n = (o) => {
      const s = o.target;
      e("update:content", s.value), e("change");
    };
    return (o, s) => (p(), m("div", k, [
      M,
      _("textarea", {
        class: "sp-font__select-text",
        value: t.content,
        onInput: s[0] || (s[0] = (a) => n(a))
      }, null, 40, S)
    ]));
  }
}), E = /* @__PURE__ */ L(B, [["__scopeId", "data-v-26c4d301"]]), N = {
  a: "text",
  p: "text",
  h1: "text"
}, H = /* @__PURE__ */ i({
  __name: "Content",
  props: {
    element: {
      type: [HTMLElement, null],
      required: !0
    }
  },
  emits: ["update:spContent", "update:spClassList"],
  setup(t, { emit: c }) {
    const e = t, n = f(null), o = g(() => e.element ? N[e.element.tagName.toLowerCase()] : null), s = () => {
      var l;
      o.value === "text" && (n.value = (l = e.element) == null ? void 0 : l.innerHTML);
    }, a = c, u = () => {
      a("update:spClassList", []);
    }, r = () => {
      u(), a("update:spContent", {
        content: n.value,
        type: o.value
      });
    };
    return y(() => {
      s(), r(), u();
    }), (l, d) => (p(), m("div", null, [
      o.value === "text" ? (p(), h(E, {
        key: 0,
        content: n.value,
        "onUpdate:content": d[0] || (d[0] = (C) => n.value = C),
        onChange: r
      }, null, 8, ["content"])) : T("", !0)
    ]));
  }
});
export {
  H as default
};
