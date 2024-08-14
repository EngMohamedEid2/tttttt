import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
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
  setup(__props) {
    let { Settings } = storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "coming-soon-section pt-0",
        style: (_d = (_c = (_b = (_a = unref(Settings)) == null ? void 0 : _a.values) == null ? void 0 : _b.maintenance) == null ? void 0 : _c.maintenance_image) == null ? void 0 : _d.original_url
      }, _attrs))}><div class="bg-black"></div><div class="container-fluid-lg w-100"><div class="row"><div class="col-lg-5"></div><div class="col-xxl-5 col-xl-6 col-lg-7"><div class="coming-box"><div><div class="coming-title"><h2>${ssrInterpolate((_g = (_f = (_e = unref(Settings)) == null ? void 0 : _e.values) == null ? void 0 : _f.maintenance) == null ? void 0 : _g.title)}</h2></div><p class="coming-text">${ssrInterpolate((_j = (_i = (_h = unref(Settings)) == null ? void 0 : _h.values) == null ? void 0 : _i.maintenance) == null ? void 0 : _j.description)}</p></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maintenance/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
