import { _ as _export_sfc, d as __nuxt_component_1 } from './server.mjs';
import { unref, withCtx, createVNode, withModifiers, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { OnClickOutside } from '@vueuse/components';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash';
import 'axios';
import 'vue-i18n';
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    modalClass: String,
    modalId: String,
    classes: String,
    showModal: Boolean
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9664805c>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.showModal) {
          _push2(`<div class="${ssrRenderClass([__props.modalClass, "modal fade theme-modal show d-block"])}"${ssrRenderAttr("id", __props.modalId)} tabindex="-1" data-v-9664805c><div class="${ssrRenderClass([__props.classes, "modal-dialog modal-dialog-centered"])}" data-v-9664805c>`);
          _push2(ssrRenderComponent(unref(OnClickOutside), {
            class: "modal-content",
            onTrigger: () => {
              unref(emit)("close");
            }
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<button type="button" class="btn-close" data-v-9664805c${_scopeId}>`);
                _push3(ssrRenderComponent(_component_Icon, { name: "ri:close-line" }, null, _parent2, _scopeId));
                _push3(`</button><div class="modal-body p-0" data-v-9664805c${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent2, _scopeId);
                _push3(`</div>`);
              } else {
                return [
                  createVNode("button", {
                    type: "button",
                    class: "btn-close",
                    onClick: withModifiers(() => {
                      unref(emit)("close");
                    }, ["prevent"])
                  }, [
                    createVNode(_component_Icon, { name: "ri:close-line" })
                  ], 8, ["onClick"]),
                  createVNode("div", { class: "modal-body p-0" }, [
                    renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ])
                ];
              }
            }),
            _: 3
          }, _parent));
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.showModal) {
          _push2(`<div class="bg-overlay show d-block" data-v-9664805c></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/Common/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9664805c"]]);

export { __nuxt_component_0 as default };
