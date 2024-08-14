import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { _ as __nuxt_component_1 } from './nuxt-img-R5yzpfhK.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { k as useCurrencyStore, l as useCartStore, d as __nuxt_component_1$1 } from './server.mjs';
import { computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { I as IsProductInCart } from './CheckExistingProduct-BIZpEY04.mjs';
import { P as PlaceholderImage } from './dataFilters-CmGMXT_3.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "Horizontal",
  __ssrInlineRender: true,
  props: {
    product: Object,
    classes: String,
    close: Boolean
  },
  setup(__props) {
    let props = __props;
    let store = useCurrencyStore();
    store.allCurrency();
    let CartItem = computed(() => {
      return IsProductInCart({ product: props.product });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_nuxt_img = __nuxt_component_1;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["product-box", __props.classes]
      }, _attrs))}><div class="product-image">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/product/${(_a = __props.product) == null ? void 0 : _a.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: __props.product.image || ("PlaceholderImage" in _ctx ? _ctx.PlaceholderImage : unref(PlaceholderImage)),
              class: "img-fluid",
              alt: __props.product.name
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_nuxt_img, {
                src: __props.product.image || ("PlaceholderImage" in _ctx ? _ctx.PlaceholderImage : unref(PlaceholderImage)),
                class: "img-fluid",
                alt: __props.product.name
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="product-detail">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/product/${(_b = __props.product) == null ? void 0 : _b.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<h6 class="name"${_scopeId}>${ssrInterpolate((_a2 = __props.product) == null ? void 0 : _a2.name)}</h6>`);
          } else {
            return [
              createVNode("h6", { class: "name" }, toDisplayString((_b2 = __props.product) == null ? void 0 : _b2.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h5 class="sold text-content"><span class="theme-color price">${ssrInterpolate(unref(store).convertCurrency(__props.product.retail_price))} ${ssrInterpolate(unref(store).currency.symbol)}</span></h5><div class="add-to-cart-box">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        id: "add-to-cart" + __props.product.id,
        classes: "btn btn-add-cart addcart-button",
        onClick: ($event) => (unref(useCartStore)().addToCart({ product: __props.product }), unref(useCartStore)().cartToggleValue(true))
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Add"))} <span class="add-icon"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-add-line" }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Add")) + " ", 1),
              createVNode("span", { class: "add-icon" }, [
                createVNode(_component_Icon, { name: "ri-add-line" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([[
        unref(CartItem) && !((_d = (_c = __props.product) == null ? void 0 : _c.variations) == null ? void 0 : _d.length) && unref(CartItem).quantity > 0 ? "open" : ""
      ], "cart_qty qty-box"])}"><div class="input-group">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        id: "qty-left-minus" + __props.product.id,
        classes: "qty-left-minus",
        onClick: ($event) => unref(useCartStore)().ChangeQuantity({ CartItem: unref(CartItem), quantity: -1 })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-subtract-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-subtract-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="form-control input-number qty-input" type="text" name="quantity"${ssrRenderAttr(
        "value",
        unref(CartItem) && unref(CartItem).quantity ? unref(CartItem).quantity : unref(CartItem)
      )} readonly>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        id: "qty-right-plus" + __props.product.id,
        classes: "qty-left-plus",
        onClick: ($event) => unref(useCartStore)().ChangeQuantity({ CartItem: unref(CartItem) })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-add-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-add-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ProductBox/Horizontal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
