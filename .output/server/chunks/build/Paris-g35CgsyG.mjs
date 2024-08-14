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
  __name: "Paris",
  __ssrInlineRender: true,
  props: {
    data: Object,
    theme: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_WidgetsImageLink = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid-lg" }, _attrs))}><div class="row g-4">`);
      if ((_b = (_a = __props.data) == null ? void 0 : _a.main_banner) == null ? void 0 : _b.image_url) {
        _push(`<div class="col-xl-8 ratio_65"><div class="home-contain h-100 skeleton-banner-xl"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          class: "b-left",
          image: (_c = __props.data) == null ? void 0 : _c.main_banner,
          bgImage: true
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_e = (_d = __props.data) == null ? void 0 : _d.sub_banner_1) == null ? void 0 : _e.image_url) && ((_g = (_f = __props.data) == null ? void 0 : _f.sub_banner_2) == null ? void 0 : _g.image_url)) {
        _push(`<div class="col-xl-4 ratio_65"><div class="row g-4">`);
        if ((_i = (_h = __props.data) == null ? void 0 : _h.sub_banner_1) == null ? void 0 : _i.image_url) {
          _push(`<div class="col-xl-12 col-md-6 skeleton-banner-sm"><div class="home-contain"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            class: "b-left",
            image: (_j = __props.data) == null ? void 0 : _j.sub_banner_1,
            bgImage: true
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_l = (_k = __props.data) == null ? void 0 : _k.sub_banner_2) == null ? void 0 : _l.image_url) {
          _push(`<div class="col-xl-12 col-md-6 skeleton-banner-sm"><div class="home-contain"><div class="skeleton-text-wrap"><span class="placeholder col-7"></span><span class="placeholder col-5"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span></div>`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            class: "b-left",
            image: (_m = __props.data) == null ? void 0 : _m.sub_banner_2,
            bgImage: true
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/HomeBanner/Paris.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
