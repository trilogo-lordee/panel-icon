"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const _pluginVue_exportHelper = require("./_plugin-vue_export-helper-fhnQq0tA.cjs");
const _sfc_main = {
  name: "PulseLine"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1_4425)" }, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M9 7.539L15 21.539L18.659 13H23V11H17.341L15 16.461L9 2.461L5.341 11H1V13H6.659L9 7.539Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("defs", null, [
  /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1_4425" }, [
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
const PulseLine = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.default = PulseLine;
