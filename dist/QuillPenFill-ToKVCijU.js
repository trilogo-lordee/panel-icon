import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  name: "QuillPenFill"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1_4066)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M21 2C6 2 4 16 3 22H4.998C5.664 18.667 7.331 16.834 10 16.5C14 16 17 12.5 18 9.5L16.5 8.5L17.5 7.5C18.5 6.5 19.504 5 21 2Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1_4066" }, [
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
const QuillPenFill = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  QuillPenFill as default
};
