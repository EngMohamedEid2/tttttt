import _sfc_main$1 from './index-BFISSL43.mjs';
import _sfc_main$2 from './index-CdatWNO3.mjs';
import { j as __nuxt_component_2$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './index-BqSnbTRI.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let open = ref(false);
    function openMenu(value) {
      open.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountSidebar = _sfc_main$1;
      const _component_WidgetsButton = _sfc_main$2;
      const _component_NuxtPage = __nuxt_component_2$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "user-dashboard-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-xxl-3 col-lg-4"><div class="${ssrRenderClass([{ "show": unref(open) }, "dashboard-left-sidebar"])}">`);
      _push(ssrRenderComponent(_component_AccountSidebar, {
        "v-show": unref(open),
        onMenu: ($event) => openMenu(_ctx.event)
      }, null, _parent));
      _push(`</div></div><div class="col-xxl-9 col-lg-8 custom-box-loader" id="account">`);
      if (_ctx.loadingStatus) {
        _push(`<div class="box-loader"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        class: "btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none",
        type: "button",
        id: "show_menu",
        onOnClick: ($event) => openMenu(true)
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
      _push(`<div class="dashboard-right-sidebar"><div class="tab-content">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
