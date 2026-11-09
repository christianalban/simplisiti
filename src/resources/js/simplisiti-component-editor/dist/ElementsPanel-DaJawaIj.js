import { defineComponent as u, resolveComponent as _, openBlock as r, createElementBlock as o, Fragment as f, renderList as b, unref as t, createVNode as x, createElementVNode as s, toDisplayString as y } from "vue";
import { H as c, a as h, e as E, d as i } from "./main-DFq0rhtB.js";
const v = { class: "flex w-full flex-col gap-1.5 p-2.5" }, k = /* @__PURE__ */ s("div", null, [
  /* @__PURE__ */ s("h2", { class: "m-0 text-lg font-bold text-gray-900" }, "Elementos")
], -1), D = ["title", "onDragstart"], w = /* @__PURE__ */ u({
  __name: "ElementsPanel",
  setup(L) {
    const g = Object.keys(c).map((e) => ({
      icon: c[e],
      title: h[e],
      element: e
    }));
    return (e, a) => {
      const m = _("fa-icon");
      return r(), o("div", v, [
        k,
        (r(!0), o(f, null, b(t(g), ({ icon: p, title: l, element: d }) => (r(), o("div", {
          key: d,
          class: "flex cursor-grab items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-50 active:cursor-grabbing",
          title: l,
          draggable: "true",
          onDragstart: (n) => t(E)(d, n),
          onDragend: a[0] || (a[0] = //@ts-ignore
          (...n) => t(i) && t(i)(...n))
        }, [
          x(m, {
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
