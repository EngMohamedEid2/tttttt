import __nuxt_component_0 from './index-BR7WT9uM.mjs';
import _sfc_main$1 from './index-C2K7bQml.mjs';
import _sfc_main$2 from './index-BvojuXMb.mjs';
import _sfc_main$3 from './index-CWXewHSq.mjs';
import _sfc_main$4 from './index-DOs8NKeQ.mjs';
import _sfc_main$5 from './index-BH6f2NPb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$6 from './index-BTC3LS2J.mjs';
import _sfc_main$7 from './index-Bmsaf34f.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  props: {
    stores: Object,
    skeletonLoader: Object,
    skeletonItems: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ShopSellerStoreSekleton = __nuxt_component_0;
      const _component_ShopSellerWidgetsStoreLogo = _sfc_main$1;
      const _component_ShopSellerWidgetsStoreRating = _sfc_main$2;
      const _component_ShopSellerWidgetsStoreName = _sfc_main$3;
      const _component_ShopSellerWidgetsStoreProductCount = _sfc_main$4;
      const _component_ShopSellerWidgetsContectDetails = _sfc_main$5;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_1;
      const _component_ShopSellerWidgetsStoreProduct = _sfc_main$6;
      const _component_WidgetsNoData = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid-lg" }, _attrs))}><div class="row g-4">`);
      if (__props.skeletonLoader) {
        _push(`<!--[-->`);
        ssrRenderList(__props.skeletonItems, (item) => {
          _push(`<div class="col-xxl-4 col-md-6">`);
          _push(ssrRenderComponent(_component_ShopSellerStoreSekleton, null, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(__props.stores, (store) => {
          _push(`<div class="col-xxl-4 col-md-6"><div class="seller-grid-box seller-grid-box-1"><div class="grid-image">`);
          _push(ssrRenderComponent(_component_ShopSellerWidgetsStoreLogo, { store }, null, _parent));
          _push(`<div class="contain-name"><div><div class="since-number">`);
          _push(ssrRenderComponent(_component_ShopSellerWidgetsStoreRating, { store }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_ShopSellerWidgetsStoreName, { store }, null, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_ShopSellerWidgetsStoreProductCount, { store }, null, _parent));
          _push(`</div></div><div class="grid-contain"><div class="seller-contact-details">`);
          _push(ssrRenderComponent(_component_ShopSellerWidgetsContectDetails, { store }, null, _parent));
          _push(`</div><div class="seller-category">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/seller/store/${store.slug}`,
            class: "btn btn-sm theme-bg-color text-white fw-bold"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate("Visit Store")} `);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri-arrow-right-line",
                  size: "18"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(toDisplayString("Visit Store") + " "),
                  createVNode(_component_Icon, {
                    name: "ri-arrow-right-line",
                    size: "18"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_ShopSellerWidgetsStoreProduct, { store }, null, _parent));
          _push(`</div></div></div></div>`);
        });
        _push(`<!--]-->`);
        if (!((_a = __props.stores) == null ? void 0 : _a.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            classes: "no-data-added collection-no-data",
            image: "/svg/no-product.svg",
            text: "No Store Found",
            description: "I regret to inform you that the Store is currently unavailable."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Store/Basic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
