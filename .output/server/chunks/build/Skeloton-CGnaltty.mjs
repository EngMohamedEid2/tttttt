import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-part" }, _attrs))}><div class="img-section"><div><div class="compare-img"></div></div><a href="javascript:void(0)" tabindex="0"><h5 class="placeholder col-6"></h5></a></div><div class="detail-part"><div class="title-detail"><h5 class="placeholder col-3"></h5></div><div class="inner-detail"><p class="placeholder col-1"></p></div></div><div class="detail-part"><div class="title-detail"><h5 class="placeholder col-1"></h5></div><div class="inner-detail"><p class="placeholder col-2"></p></div></div><div class="detail-part"><div class="title-detail"><h5 class="placeholder col-4"></h5></div><div class="inner-detail"><p class="placeholder col-3"></p></div></div><div class="detail-part"><div class="title-detail"><h5 class="placeholder col-1"></h5></div><div class="inner-detail"><div class="compare-rating"><span class="placeholder col-4"></span></div></div></div><div class="detail-part"><div class="title-detail"><h5 class="placeholder col-1"></h5></div><div class="inner-detail"><p class="placeholder col-3"></p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Compare/Skeloton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
