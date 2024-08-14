import _sfc_main$1 from './index-CdatWNO3.mjs';
import { s as storeToRefs, l as useCartStore, k as useCurrencyStore, d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    let { cart, CartTotal } = storeToRefs(useCartStore());
    let store = useCurrencyStore();
    store.allCurrency();
    let isOpen = ref(false);
    function openCart(isOpen2) {
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_a = unref(cart)) == null ? void 0 : _a.length) {
        _push(`<div class="button-item">`);
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: "item-btn btn text-white",
          id: "open_cart_btn",
          type: "button",
          onOnClick: ($event) => openCart()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri-shopping-cart-2-line" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri-shopping-cart-2-line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ active: unref(isOpen) && ((_b = unref(cart)) == null ? void 0 : _b.length) }, "item-section"])}">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "close-button",
        id: "close_cart_btn",
        type: "button",
        onOnClick: ($event) => openCart()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-close-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h6>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-shopping-cart-2-line" }, null, _parent));
      _push(`<span>${ssrInterpolate((_c = unref(cart)) == null ? void 0 : _c.length)} ${ssrInterpolate(_ctx.$t("Items"))}</span></h6><ul class="items-image"><!--[-->`);
      ssrRenderList(unref(cart).slice(0, 2), (item) => {
        var _a2, _b2, _c2, _d2, _e2, _f;
        _push(`<li><img${ssrRenderAttr(
          "src",
          (item == null ? void 0 : item.variation) && ((_a2 = item == null ? void 0 : item.variation) == null ? void 0 : _a2.variation_image) ? (_c2 = (_b2 = item == null ? void 0 : item.variation) == null ? void 0 : _b2.variation_image) == null ? void 0 : _c2.original_url : ((_d2 = item == null ? void 0 : item.product) == null ? void 0 : _d2.product_thumbnail) ? (_f = (_e2 = item == null ? void 0 : item.product) == null ? void 0 : _e2.product_thumbnail) == null ? void 0 : _f.original_url : "/images/product.png"
        )} alt="product"></li>`);
      });
      _push(`<!--]-->`);
      if (((_d = unref(cart)) == null ? void 0 : _d.length) > 2) {
        _push(`<li>+ ${ssrInterpolate(((_e = unref(cart)) == null ? void 0 : _e.length) - 2)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/cart",
        class: "btn item-button btn-sm fw-bold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(CartTotal))).toFixed(2))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(store).currency.symbol) + " " + toDisplayString(Number(unref(store).convertCurrency(unref(CartTotal))).toFixed(2)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/StickyCart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
