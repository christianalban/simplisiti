import { defineComponent as u, resolveComponent as _, openBlock as n, createElementBlock as r, Fragment as f, renderList as b, unref as t, createVNode as x, createElementVNode as o, toDisplayString as y } from "vue";
import { H as c, a as h, e as v, d as i } from "./main-C_Ly4T5r.js";
const E = { class: "flex w-full flex-col gap-1.5 p-2.5" }, k = /* @__PURE__ */ o("div", null, [
  /* @__PURE__ */ o("h2", { class: "m-0 text-lg font-bold text-gray-900" }, "Elementos")
], -1), D = ["title", "onDragstart"], w = /* @__PURE__ */ u({
  __name: "ElementsPanel",
  setup(L) {
    const g = Object.keys(c).map((e) => ({
      icon: c[e],
      title: h[e],
      element: e
    }));
    return (e, s) => {
      const m = _("fa-icon");
      return n(), r("div", E, [
        k,
        (n(!0), r(f, null, b(t(g), ({ icon: p, title: a, element: l }) => (n(), r("div", {
          key: l,
          class: "flex cursor-grab items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-50 active:cursor-grabbing",
          title: a,
          draggable: "true",
          onDragstart: (d) => t(v)(l),
          onDragend: s[0] || (s[0] = //@ts-ignore
          (...d) => t(i) && t(i)(...d))
        }, [
          x(m, {
            icon: p,
            class: "h-4 w-4 shrink-0 text-gray-600"
          }, null, 8, ["icon"]),
          o("span", null, y(a), 1)
        ], 40, D))), 128))
      ]);
    };
  }
});
export {
  w as default
};
