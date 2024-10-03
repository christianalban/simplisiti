import { defineComponent as f, ref as c, resolveComponent as h, openBlock as l, createElementBlock as g, createElementVNode as o, withDirectives as S, vModelText as y, createBlock as d, toDisplayString as C, pushScopeId as w, popScopeId as x } from "vue";
import { b as E, c as b, f as G, i as k, _ as M } from "./main-dZkenMGG.js";
const T = (r) => (w("data-v-1a39ce30"), r = r(), x(), r), I = { class: "sp-element__element-content" }, B = /* @__PURE__ */ T(() => /* @__PURE__ */ o("div", null, [
  /* @__PURE__ */ o("h2", { class: "sp-element__title" }, "Generador de Componentes")
], -1)), D = { class: "sp-element__content" }, H = ["disabled"], L = /* @__PURE__ */ f({
  __name: "CodeGeneratorPanel",
  setup(r) {
    const i = c(""), s = c(!1), m = ["div", "a", "p", "h1", "img"], _ = (n) => m.map((e) => Array.from(n.getElementsByTagName(e))).flat(), u = (n) => {
      const t = new DOMParser().parseFromString(n, "text/html");
      return _(t).forEach((p) => {
        p.dataset.simplisitiid || (p.dataset.simplisitiid = Math.random().toString(36).substring(7));
      }), t.body.innerHTML;
    }, v = () => {
      const n = document.querySelector('[data-simplisitiid="simplisiti-component-preview"]');
      s.value = !0, E.post("https://gpt-tailwind.up.railway.app/api/generate", {
        prompt: i.value
      }).then((e) => {
        if (!n)
          return;
        const t = e.data.result;
        b(t).then(() => {
          const a = u(t);
          G("simplisiti-component-preview", a), n.innerHTML = a, k(), i.value = "";
        }).finally(() => {
          s.value = !1;
        });
      }).catch((e) => console.error("Error:", e));
    };
    return (n, e) => {
      const t = h("fa-icon");
      return l(), g("div", I, [
        B,
        o("div", D, [
          S(o("textarea", {
            "onUpdate:modelValue": e[0] || (e[0] = (a) => i.value = a),
            class: "sp-element__textarea",
            placeholder: "Ingresa un prompt"
          }, null, 512), [
            [y, i.value]
          ]),
          o("button", {
            class: "sp-element__button",
            onClick: v,
            disabled: s.value
          }, [
            s.value ? (l(), d(t, {
              key: 0,
              icon: "gear",
              class: "sp-element__icon sp-element__icon-procesing"
            })) : (l(), d(t, {
              key: 1,
              icon: "gears",
              class: "sp-element__icon"
            })),
            o("span", null, C(s.value ? "Generando" : "Generar") + " Componente", 1)
          ], 8, H)
        ])
      ]);
    };
  }
}), N = /* @__PURE__ */ M(L, [["__scopeId", "data-v-1a39ce30"]]);
export {
  N as default
};
