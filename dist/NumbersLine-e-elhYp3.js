import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  name: "NumbersLine"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1_3547)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1_3547" }, [
    /* @__PURE__ */ createElementVNode("rect", {
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
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const NumbersLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  NumbersLine as default
};
