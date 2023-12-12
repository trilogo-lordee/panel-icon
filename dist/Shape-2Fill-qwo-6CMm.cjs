"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const _pluginVue_exportHelper = require("./_plugin-vue_export-helper-fhnQq0tA.cjs");
const _sfc_main = {
  name: "Shape-2Fill"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1_4218)" }, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M2 2H7V7H2V2ZM2 17H7V22H2V17ZM17 2H22V7H17V2ZM17 17H22V22H17V17ZM8 4H16V6H8V4ZM4 8H6V16H4V8ZM18 8H20V16H18V8ZM8 18H16V20H8V18Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("defs", null, [
  /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1_4218" }, [
    /* @__PURE__ */ vue.createElementVNode("rect", {
      width: "24",
      height: "24",
      fill: "white"
    })
  ])
], -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const Shape2Fill = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.default = Shape2Fill;
