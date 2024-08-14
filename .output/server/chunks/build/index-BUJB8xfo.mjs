import _sfc_main$1 from './index-Bmsaf34f.mjs';
import _sfc_main$2 from './CartSummary-L2_CZhUi.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { k as useCurrencyStore, s as storeToRefs, l as useCartStore, f as useUserStore } from './server.mjs';
import './index-Dg95hgCG.mjs';
import './index-CdatWNO3.mjs';
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
    let store = useCurrencyStore();
    store.allCurrency();
    let { cart } = storeToRefs(useCartStore());
    let { User, UserInfo } = storeToRefs(useUserStore());
    ref(UserInfo);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsNoData = _sfc_main$1;
      const _component_ShopCheckoutSidebarCartSummary = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-xxl-4 col-xl-5" }, _attrs))}><div class="card pos-detail-card"><div class="card-body"><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Checkout"))}</h5></div></div><div class="product-details">`);
      if (!((_a = unref(cart)) == null ? void 0 : _a.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "empty-cart",
          image: "/svg/empty-items.svg",
          text: "No items in a cart"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(cart)) == null ? void 0 : _b.length) {
        _push(`<ul class="cart-listing"><!--[-->`);
        ssrRenderList(unref(cart), (item) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h;
          _push(`<li><img${ssrRenderAttr("src", (item == null ? void 0 : item.variation) && ((_a2 = item == null ? void 0 : item.variation) == null ? void 0 : _a2.variation_image) ? (_c = (_b2 = item == null ? void 0 : item.variation) == null ? void 0 : _b2.variation_image) == null ? void 0 : _c.original_url : ((_d = item == null ? void 0 : item.product) == null ? void 0 : _d.product_thumbnail) ? (_f = (_e = item == null ? void 0 : item.product) == null ? void 0 : _e.product_thumbnail) == null ? void 0 : _f.original_url : "/images/product.png")} class="img-fluid" alt="product"><div class="cart-content"><h4>${ssrInterpolate((item == null ? void 0 : item.variation) ? (_g = item == null ? void 0 : item.variation) == null ? void 0 : _g.name : (_h = item == null ? void 0 : item.product) == null ? void 0 : _h.name)}</h4><h5 class="text-theme">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((item == null ? void 0 : item.variation) ? item.variation.sale_price : item.product.sale_price)).toFixed(2))} X ${ssrInterpolate(item.quantity)}</h5><h5 class="price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((item == null ? void 0 : item.variation) ? item.variation.sale_price : item.product.sale_price) * item.quantity).toFixed(2))}</h5></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ShopCheckoutSidebarCartSummary, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
