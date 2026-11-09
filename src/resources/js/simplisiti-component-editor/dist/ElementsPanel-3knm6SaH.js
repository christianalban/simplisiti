import { defineComponent as _, resolveComponent as u, openBlock as r, createElementBlock as o, Fragment as f, renderList as x, unref as t, createVNode as b, createElementVNode as s, toDisplayString as y } from "vue";
import { H as c, a as h, e as E, d as i } from "./main-DxHbv7mZ.js";
const k = { class: "flex w-full flex-col gap-1.5 p-2.5" }, v = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("h2", { class: "m-0 text-lg font-bold text-gray-900" }, "Elementos")
], -1), D = ["title", "onDragstart"], w = /* @__PURE__ */ _({
  __name: "ElementsPanel",
  setup(L) {
    const m = Object.keys(c).map((e) => ({
      icon: c[e],
      title: h[e],
      element: e
    }));
    return (e, a) => {
      const g = u("fa-icon");
      return r(), o("div", k, [
        v,
        (r(!0), o(f, null, x(t(m), ({ icon: p, title: l, element: d }) => (r(), o("div", {
          key: d,
          class: "flex cursor-grab items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-50",
          title: l,
          draggable: "true",
          onDragstart: (n) => t(E)(d, n),
          onDragend: a[0] || (a[0] = //@ts-ignore
          (...n) => t(i) && t(i)(...n))
        }, [
          b(g, {
            icon: p,
            class: "h-4 w-4 shrink-0 text-gray-600"
          }, null, 8, ["icon"]),
          s("span", null, y(l), 1)
        ], 40, D))), 128))
      ]);
    };
  }
});
export {
  w as default
};
