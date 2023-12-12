"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const _pluginVue_exportHelper = require("./_plugin-vue_export-helper-fhnQq0tA.cjs");
const _sfc_main = {
  name: "CropFill"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("g", { "clip-path": "url(#clip0_1_4146)" }, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M19 17H22V19H19V22H17V19H6C5.73478 19 5.48043 18.8946 5.29289 18.7071C5.10536 18.5196 5 18.2652 5 18V7H2V5H5V2H7V5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V17Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("defs", null, [
  /* @__PURE__ */ vue.createElementVNode("clipPath", { id: "clip0_1_4146" }, [
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
const CropFill = /* @__PURE__ */ _pluginVue_exportHelper._export_sfc(_sfc_main, [["render", _sfc_render]]);
exports.default = CropFill;
