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
  __name: "Tokyo",
  __ssrInlineRender: true,
  props: {
    data: Object,
    theme: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_WidgetsImageLink = _sfc_main$1;
      if (__props.theme == "tokyo") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid-lg" }, _attrs))}><div class="row g-4"><div class="col-xxl-3 col-lg-4 col-sm-6 ratio_180 d-sm-block d-none"><div class="home-contain rounded skeleton-banner-vertical"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div><div class="h-100">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_a = __props.data) == null ? void 0 : _a.sub_banner_1,
          bgImage: true
        }, null, _parent));
        _push(`</div></div></div><div class="col-xxl-6 col-lg-8 order-xxl-0 ratio_87"><div class="home-contain rounded skeleton-banner-xl"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div><div class="h-100">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_b = __props.data) == null ? void 0 : _b.main_banner,
          bgImage: true
        }, null, _parent));
        _push(`</div></div></div><div class="col-xxl-3 col-xl-4 col-sm-6 ratio_180 custom-ratio d-xxl-block d-lg-none d-sm-block d-none"><div class="home-contain rounded skeleton-banner-vertical"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_c = __props.data) == null ? void 0 : _c.sub_banner_2,
          bgImage: true
        }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/HomeBanner/Tokyo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
