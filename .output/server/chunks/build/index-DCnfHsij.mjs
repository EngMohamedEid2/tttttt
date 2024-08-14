import { h as useFetch, B as BaseUrl, G as GetHeaders, f as useUserStore, d as __nuxt_component_1 } from './server.mjs';
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
  props: {
    addressId: Number
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    async function handleDelete() {
      await useFetch("/address/" + props.addressId, {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "delete",
        key: "deleteAddress"
      }, "$m8EstQwxC0");
      useUserStore().UpdateUserInfo();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-body p-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:delete-bin-line",
        class: "icon-box"
      }, null, _parent));
      _push(`<h5 class="modal-title text-center">${ssrInterpolate("Delete Item")}?</h5><p class="text-center">${ssrInterpolate("This Item Will Be Deleted Permanently. You Can't Undo This Action.")}</p><div class="button-box">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
        id: "delete_no_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("No")}`);
          } else {
            return [
              createTextVNode(toDisplayString("No"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color btn-md fw-bold text-light",
        id: "delete_yes_btn",
        onClick: ($event) => handleDelete()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("yes")}`);
          } else {
            return [
              createTextVNode(toDisplayString("yes"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/DeleteModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
