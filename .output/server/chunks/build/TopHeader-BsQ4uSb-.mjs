import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './TopContent-Cya12LiP.mjs';
import _sfc_main$2 from './Language-Dt3xNQm7.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
import './index-CdatWNO3.mjs';

const _sfc_main = {
  __name: "TopHeader",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_HeaderElementsTopContent = _sfc_main$1;
      const _component_HeaderElementsLanguage = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["header-top", { "bg-dark": (_b = (_a = __props.themeOptions) == null ? void 0 : _a.header) == null ? void 0 : _b.page_top_bar_dark }]
      }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-xxl-3 d-xxl-block d-none"><div class="top-left-header">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-white",
        to: "",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-white"${_scopeId}>${ssrInterpolate(_ctx.$t("Become a Seller"))}</span>`);
          } else {
            return [
              createVNode("span", { class: "text-white" }, toDisplayString(_ctx.$t("Become a Seller")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-xxl-6 col-lg-9 d-lg-block d-none pt-1"><div class="header-offer">`);
      _push(ssrRenderComponent(_component_HeaderElementsTopContent, { themeOptions: __props.themeOptions }, null, _parent));
      _push(`</div></div><div class="col-lg-3"><ul class="about-list right-nav-about"><li class="right-nav-list"><div class="dropdown theme-form-select">`);
      _push(ssrRenderComponent(_component_HeaderElementsLanguage, null, null, _parent));
      _push(`</div></li></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/TopHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
