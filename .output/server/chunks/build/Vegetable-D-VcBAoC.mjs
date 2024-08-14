import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL, _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/images/inner-page/about-us/1.jpg");
const _imports_1 = publicAssetsURL("/images/inner-page/about-us/2.jpg");
const _imports_2 = publicAssetsURL("/svg/3/delivery.svg");
const _imports_3 = publicAssetsURL("/svg/3/leaf.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "fresh-vegetable-section section-lg-space" }, _attrs))}><div class="container-fluid-lg"><div class="row gx-xl-5 gy-xl-0 g-3 ratio_148_1"><div class="col-xl-6 col-12"><div class="row g-sm-4 g-2"><div class="col-6"><div class="fresh-image-2"><div><img${ssrRenderAttr("src", _imports_0)} class="bg-img" alt=""></div></div></div><div class="col-6"><div class="fresh-image"><div><img${ssrRenderAttr("src", _imports_1)} class="bg-img" alt=""></div></div></div></div></div><div class="col-xl-6 col-12"><div class="fresh-contain p-center-left"><div><div class="review-title"><h4>${ssrInterpolate("About Us")}</h4><h2>${ssrInterpolate("We Make Organic Food In Market")}</h2></div><div class="delivery-list"><p class="text-content">${ssrInterpolate("Just a few seconds to measure your body temperature. Up to 5 users! The battery lasts up to 2 years. There are many variations of passages of Lorem Ipsum available.We started in 2019 and haven't stopped  smashing it since.A global brand that doesn't sleep, we are 24/7 and always bringing something new with  over 100 new products dropping on the monhtly, bringing you the latest looks for less.")}</p><ul class="delivery-box"><li><div class="delivery-box"><div class="delivery-icon"><img${ssrRenderAttr("src", _imports_2)} class="" alt=""></div><div class="delivery-detail"><h5 class="text">${ssrInterpolate("Free delivery for all orders")}</h5></div></div></li><li><div class="delivery-box"><div class="delivery-icon"><img${ssrRenderAttr("src", _imports_3)} class="" alt=""></div><div class="delivery-detail"><h5 class="text">${ssrInterpolate("Only fresh foods")}</h5></div></div></li><li><div class="delivery-box"><div class="delivery-icon"><img${ssrRenderAttr("src", _imports_2)} class="" alt=""></div><div class="delivery-detail"><h5 class="text">${ssrInterpolate("Free delivery for all orders")}</h5></div></div></li><li><div class="delivery-box"><div class="delivery-icon"><img${ssrRenderAttr("src", _imports_3)} class="" alt=""></div><div class="delivery-detail"><h5 class="text">${ssrInterpolate("Only fresh foods")}</h5></div></div></li></ul></div></div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/Vegetable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
