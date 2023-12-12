import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  name: "ClipboardLine"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1_3595)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M7 4V2H17V4H20.007C20.555 4 21 4.445 21 4.993V21.007C20.9997 21.2703 20.895 21.5227 20.7089 21.7089C20.5227 21.895 20.2703 21.9997 20.007 22H3.993C3.72972 21.9997 3.4773 21.895 3.29114 21.7089C3.10497 21.5227 3.00026 21.2703 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1_3595" }, [
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
const ClipboardLine = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ClipboardLine as default
};
