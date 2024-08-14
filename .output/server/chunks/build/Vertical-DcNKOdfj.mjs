import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-R5yzpfhK.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { k as useCurrencyStore } from './server.mjs';
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
  __name: "Vertical",
  __ssrInlineRender: true,
  props: {
    product: Object,
    class: String
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "offer-product" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/product/${__props.product.slug}`,
        class: "offer-image"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: ((_a2 = __props.product) == null ? void 0 : _a2.product_thumbnail) ? (_c = (_b2 = __props.product) == null ? void 0 : _b2.product_thumbnail) == null ? void 0 : _c.original_url : "/images/product.png",
              alt: "product"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: ((_d = __props.product) == null ? void 0 : _d.product_thumbnail) ? (_f = (_e = __props.product) == null ? void 0 : _e.product_thumbnail) == null ? void 0 : _f.original_url : "/images/product.png",
                alt: "product"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="offer-detail"><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/product/${__props.product.slug}`,
        class: "text-title"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h6 class="name"${_scopeId}>${ssrInterpolate(__props.product.name)}</h6>`);
          } else {
            return [
              createVNode("h6", { class: "name" }, toDisplayString(__props.product.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.product.unit) {
        _push(`<span>${ssrInterpolate(__props.product.unit)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="vertical-price"><h5 class="price theme-color">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency((_a = __props.product) == null ? void 0 : _a.sale_price))}</h5>`);
      if (__props.product.discount) {
        _push(`<del class="text-content">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency((_b = __props.product) == null ? void 0 : _b.price))}</del>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ProductBox/Vertical.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
