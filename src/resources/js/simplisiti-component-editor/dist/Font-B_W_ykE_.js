import { defineComponent as g, ref as d, computed as z, onMounted as x, openBlock as i, createElementBlock as r, createElementVNode as e, withDirectives as f, Fragment as F, renderList as I, toDisplayString as v, vModelSelect as k, vModelText as M, pushScopeId as O, popScopeId as T } from "vue";
import { r as V, p as w, _ as B } from "./main-C4Hl9r_F.js";
const D = [
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72",
  "96",
  "128"
], E = (o) => D.map((a) => ({
  value: o(a).replace(".", "_"),
  label: a
})), m = (o) => (O("data-v-bb4d8513"), o = o(), T(), o), G = { class: "sp-font__container" }, U = { class: "sp-font__select-container" }, j = { class: "sp-font__select-item" }, A = /* @__PURE__ */ m(() => /* @__PURE__ */ e("label", null, "Tamaño", -1)), H = /* @__PURE__ */ m(() => /* @__PURE__ */ e("option", { value: "" }, null, -1)), N = ["value"], $ = { class: "sp-font__select-container" }, q = { class: "sp-font__select-item" }, J = /* @__PURE__ */ g({
  __name: "Font",
  props: {
    spClassList: {
      type: Array,
      default: []
    },
    spStyleList: {
      type: Object,
      default: []
    }
  },
  emits: ["update:spClassList", "update:spStyleList"],
  setup(o, { emit: a }) {
    const p = o, c = d(null), n = d(
      { color: "#000000" }
    ), y = (t) => w(t, p.spClassList), S = () => E((t) => `sp-style__font-size__${t}`), L = z(() => S()), C = () => {
      c.value = y("sp-style__font-size__");
    }, b = () => {
      for (const t in p.spStyleList)
        t === "color" && (n.value.color = V(p.spStyleList[t]));
    }, u = a, _ = () => {
      const t = [
        c.value
      ].filter((l) => l);
      u("update:spClassList", t);
    }, h = () => {
      const t = {
        color: n.value.color
      };
      u("update:spStyleList", t);
    };
    return x(() => {
      C(), b(), _();
    }), (t, l) => (i(), r("div", G, [
      e("div", U, [
        e("div", j, [
          A,
          f(e("select", {
            "onUpdate:modelValue": l[0] || (l[0] = (s) => c.value = s),
            onChange: _
          }, [
            H,
            (i(!0), r(F, null, I(L.value, (s) => (i(), r("option", {
              key: s.value,
              value: s.value
            }, v(s.label), 9, N))), 128))
          ], 544), [
            [k, c.value]
          ])
        ])
      ]),
      e("div", $, [
        e("div", q, [
          e("label", null, "Color " + v(n.value.color), 1),
          f(e("input", {
            class: "sp-font__select-color",
            type: "color",
            "onUpdate:modelValue": l[1] || (l[1] = (s) => n.value.color = s),
            onChange: h
          }, null, 544), [
            [M, n.value.color]
          ])
        ])
      ])
    ]));
  }
}), Q = /* @__PURE__ */ B(J, [["__scopeId", "data-v-bb4d8513"]]);
export {
  Q as default
};
