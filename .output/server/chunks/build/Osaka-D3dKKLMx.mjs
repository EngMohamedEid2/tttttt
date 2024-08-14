import _sfc_main$1 from './index-uA_ar0VB.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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

const _sfc_main = {
  __name: "Osaka",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsImageLink = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid-lg" }, _attrs))}><div class="row g-4"><div class="col-xl-9 col-lg-8"><div class="home-contain h-100 skeleton-banner-xl ratio_52"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
      _push(ssrRenderComponent(_component_WidgetsImageLink, {
        image: (_a = __props.data) == null ? void 0 : _a.main_banner,
        bgImage: true
      }, null, _parent));
      _push(`</div></div><div class="col-xl-3 col-lg-4 d-lg-inline-block d-none ratio_156"><div class="home-contain h-100 skeleton-banner-vertical"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
      _push(ssrRenderComponent(_component_WidgetsImageLink, {
        image: (_b = __props.data) == null ? void 0 : _b.sub_banner_1,
        bgImage: true
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/HomeBanner/Osaka.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
