import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { ref, unref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    coupon: Object
  },
  setup(__props) {
    const skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 10 }, (_, index) => index);
    function copyFunction(txt) {
      (void 0).clipboard.writeText(txt);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxtLink = __nuxt_component_0;
      const _component_WidgetsNoData = _sfc_main$1;
      if (unref(skeletonLoader)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-b-space section-t-space offer-section skeleton-offer" }, _attrs))}><div class="container-fluid-lg"><div class="row g-md-4 g-3"><!--[-->`);
        ssrRenderList(unref(skeletonItems), (item) => {
          _push(`<div class="col-xxl-3 col-lg-4 col-sm-6"><div class="coupon-box"><div class="coupon-name"><div class="card-name"><div><h5 class="fw-semibold dark-text"></h5></div></div></div><div class="coupon-content"><p></p><p class="long"></p><p class="long long-s"></p></div></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "section-b-space section-t-space offer-section" }, _attrs))}><div class="container-fluid-lg"><div class="row g-md-4 g-3"><!--[-->`);
        ssrRenderList((_a = __props.coupon) == null ? void 0 : _a.data, (coupon) => {
          _push(`<div class="col-xxl-3 col-lg-4 col-sm-6"><div class="coupon-box"><div class="coupon-name"><div class="card-name"><div><h5 class="fw-semibold dark-text">${ssrInterpolate(coupon.title)}</h5></div></div></div><div class="coupon-content"><p>${ssrInterpolate(coupon.description)}</p><div class="coupon-apply"><h6 class="coupon-code success-color">#${ssrInterpolate(coupon.code)}</h6>`);
          _push(ssrRenderComponent(_component_nuxtLink, {
            class: "btn theme-btn border-btn copy-btn mt-0",
            onClick: ($event) => copyFunction(coupon.code)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("Copy Code "))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Copy Code ")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]-->`);
        if (!((_c = (_b = __props.coupon) == null ? void 0 : _b.data) == null ? void 0 : _c.length) && !unref(skeletonLoader)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            classes: "no-data-added collection-no-data",
            image: "/svg/no-product.svg",
            text: "I regret to inform you that the offer is currently unavailable."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Offer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
