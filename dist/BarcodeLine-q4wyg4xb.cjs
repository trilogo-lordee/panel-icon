"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const _pluginVue_exportHelper = require("./_plugin-vue_export-helper-fhnQq0tA.cjs");
const _sfc_main = {
  name: "BarcodeLine"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1_1776)" }, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M2 4H4V20H2V4ZM6 4H7V20H6V4ZM8 4H10V20H8V4ZM11 4H13V20H11V4ZM14 4H16V20H14V4ZM17 4H18V20H17V4ZM19 4H22V20H19V4Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("defs", null, [
  /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1_1776" }, [
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
const BarcodeLine = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.default = BarcodeLine;
