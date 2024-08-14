import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { s as storeToRefs, l as useCartStore, k as useCurrencyStore, d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Summary",
  __ssrInlineRender: true,
  setup(__props) {
    let { cart, CartTotal } = storeToRefs(useCartStore());
    let store = useCurrencyStore();
    store.allCurrency();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "summery-box p-sticky" }, _attrs))}><div class="summery-header"><h3>${ssrInterpolate(_ctx.$t("Cart Total"))}</h3></div><div class="summery-contain"><ul><li><h4>${ssrInterpolate(_ctx.$t("Subtotal"))}</h4><h4 class="price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(CartTotal))).toFixed(2))}</h4></li><li class="align-items-start"><h4>${ssrInterpolate(_ctx.$t("Shipping"))}</h4><h4 class="price text-end">${ssrInterpolate(_ctx.$t("Cost at Checkout"))}</h4></li><li class="align-items-start"><h4>${ssrInterpolate(_ctx.$t("Tax"))}</h4><h4 class="price text-end">${ssrInterpolate(_ctx.$t("Cost at Checkout"))}</h4></li></ul></div><ul class="summery-total"><li class="list-total border-top-0"><h4>${ssrInterpolate(_ctx.$t("Total"))}</h4><h4 class="price theme-color">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(CartTotal))).toFixed(2))}</h4></li></ul><div class="button-group cart-button"><ul><li>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/checkout" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="btn btn-animation proceed-btn fw-bold"${_scopeId}>${ssrInterpolate(_ctx.$t("Process To Checkout"))}</button>`);
          } else {
            return [
              createVNode("button", { class: "btn btn-animation proceed-btn fw-bold" }, toDisplayString(_ctx.$t("Process To Checkout")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><button onclick="location.href = &#39;/collections&#39;" class="btn btn-light shopping-button text-dark">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:arrow-left-line",
        class: ""
      }, null, _parent));
      _push(`${ssrInterpolate(_ctx.$t("Return To Shopping"))}</button></li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Cart/Summary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
