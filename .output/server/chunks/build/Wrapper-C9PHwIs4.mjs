import _sfc_main$1 from './index-BFISSL43.mjs';
import _sfc_main$2 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { s as storeToRefs, f as useUserStore } from './server.mjs';
import './NavLink-DUfEGm2n.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-De4InbXS.mjs';
import '@vueuse/components';
import './index-BqSnbTRI.mjs';
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
  __name: "Wrapper",
  __ssrInlineRender: true,
  setup(__props) {
    let { User, UserInfo } = storeToRefs(useUserStore());
    let user = ref(UserInfo);
    let open = ref(false);
    function openMenu() {
      open.value = !open.value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountSidebar = _sfc_main$1;
      const _component_WidgetsButton = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "user-dashboard-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-xxl-3 col-lg-4">`);
      _push(ssrRenderComponent(_component_AccountSidebar, {
        onClose: ($event) => openMenu(),
        class: unref(open) ? "show" : "",
        user: unref(user),
        UserInfo: unref(useUserStore)().UserInfo
      }, null, _parent));
      _push(`</div><div class="col-xxl-9 col-lg-8">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none",
        type: "button",
        id: "show_menu",
        onOnClick: ($event) => openMenu()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Show Menu"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Show Menu")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="dashboard-right-sidebar">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
