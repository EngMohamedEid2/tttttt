import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import '@vueuse/components';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["confirm", "close"],
  setup(__props, { emit: __emit }) {
    let emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body text-center p-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:question-line",
        class: "icon-box wo-bg"
      }, null, _parent));
      _push(`<h5 class="modal-title">${ssrInterpolate(_ctx.$t("Confirmation"))}</h5><p>${ssrInterpolate(_ctx.$t("Are you sure you want to proceed?"))}?</p><div class="button-box">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-md fw-bold btn-theme-outline",
        id: "confirm_no_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("No"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("No")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color btn-md fw-bold text-light",
        id: "confirm_yes_btn",
        onOnClick: () => {
          unref(emit)("confirm");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Yes"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Yes")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ConfrmationModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
