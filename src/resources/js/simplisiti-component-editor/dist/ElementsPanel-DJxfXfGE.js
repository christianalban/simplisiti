import { defineComponent as f, resolveComponent as g, openBlock as o, createElementBlock as s, Fragment as E, renderList as v, unref as n, createVNode as I, createElementVNode as a, toDisplayString as b, pushScopeId as S, popScopeId as h } from "vue";
import { H as _, a as D, e as L, d, _ as M } from "./main-dZkenMGG.js";
const T = (e) => (S("data-v-c7b69432"), e = e(), h(), e), k = { class: "sp-element__element-content" }, x = /* @__PURE__ */ T(() => /* @__PURE__ */ a("div", null, [
  /* @__PURE__ */ a("h2", { class: "sp-element__title" }, "Elementos")
], -1)), C = ["title", "onDragstart"], H = /* @__PURE__ */ f({
  __name: "ElementsPanel",
  setup(e) {
    const m = Object.keys(_).map((t) => ({
      icon: _[t],
      title: D[t],
      element: t
    }));
    return (t, l) => {
      const p = g("fa-icon");
      return o(), s("div", k, [
        x,
        (o(!0), s(E, null, v(n(m), ({ icon: i, title: c, element: u }) => (o(), s("div", {
          class: "sp-element__icons-container",
          title: c,
          onDragstart: (r) => n(L)(u),
          onDragend: l[0] || (l[0] = //@ts-ignore
          (...r) => n(d) && n(d)(...r)),
          draggable: "true"
        }, [
          I(p, {
            icon: i,
            class: "sp-element__icon"
          }, null, 8, ["icon"]),
          a("span", null, b(c), 1)
        ], 40, C))), 256))
      ]);
    };
  }
}), A = /* @__PURE__ */ M(H, [["__scopeId", "data-v-c7b69432"]]);
export {
  A as default
};
