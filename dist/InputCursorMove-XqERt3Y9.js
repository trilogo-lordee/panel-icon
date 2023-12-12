import { openBlock, createElementBlock, createElementVNode } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-yVxbj29m.js";
const _sfc_main = {
  name: "InputCursorMove"
};
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1_2144)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M8 21V19H11V5H8V3H16V5H13V19H16V21H8ZM18.05 7.05L23 12L18.05 16.95L16.636 15.536L20.172 12L16.636 8.464L18.05 7.05ZM5.95 7.05L7.364 8.464L3.828 12L7.364 15.536L5.95 16.95L1 12L5.95 7.05Z",
    fill: "#47455C"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1_2144" }, [
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
const InputCursorMove = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  InputCursorMove as default
};
