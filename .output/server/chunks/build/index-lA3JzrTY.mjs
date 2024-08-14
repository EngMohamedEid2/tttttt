import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useCompareStore } from './compare-CJlobl4e.mjs';
import { u as useWishlistStore } from './wishlist-DasiP7YX.mjs';
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
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-box" }, _attrs))}><div class="product-image">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "dropdown-item",
        to: `/product/${(_a = __props.product) == null ? void 0 : _a.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.product.product_thumbnail ? __props.product.product_thumbnail.original_url : "/images/product.png")} class="img-fluid" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: __props.product.product_thumbnail ? __props.product.product_thumbnail.original_url : "/images/product.png",
                class: "img-fluid",
                alt: ""
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="product-option"><li><a href="javascript:void(0)">`);
      if (unref(useCompareStore)().ExistsInCompare({ product: __props.product })) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "teenyicons:git-compare-outline",
          size: "20"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "teenyicons:git-compare-outline",
          size: "20"
        }, null, _parent));
      }
      _push(`</a></li><li>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:outline-remove-red-eye",
        size: "20"
      }, null, _parent));
      _push(`</li><li><a href="javascript:void(0)">`);
      if (unref(useWishlistStore)().ExistsInCart({ product: __props.product })) {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fe:heart",
          size: "20"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fe:heart-o",
          size: "20"
        }, null, _parent));
      }
      _push(`</a></li></ul></div><div class="product-detail">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "dropdown-item",
        to: `/product/${(_b = __props.product) == null ? void 0 : _b.slug}`
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
      _push(`<h5 class="sold text-content"><span class="theme-color price">$ ${ssrInterpolate(Number(__props.product.sale_price).toFixed(2))}</span>`);
      if (__props.product.discount) {
        _push(`<del>$ ${ssrInterpolate(Number(__props.product.price).toFixed(2))}</del>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h5></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/MenuProduct/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
