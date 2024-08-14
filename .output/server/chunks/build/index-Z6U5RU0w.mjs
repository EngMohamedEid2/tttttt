import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './Products-CIHt03Tb.mjs';
import _sfc_main$3 from './Summary-BQF_ZiMp.mjs';
import _sfc_main$4 from './index-Bmsaf34f.mjs';
import { s as storeToRefs, l as useCartStore, m as useApiCartStore, o as useCookie } from './server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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
import './dataFilters-CmGMXT_3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './wishlist-DasiP7YX.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var breadcrumbs = { page: "Cart", links: [{ name: "Cart" }] };
    let { cart, CartTotal } = storeToRefs(useCartStore());
    storeToRefs(useApiCartStore());
    if (useCookie("uat").value) {
      useCartStore().GetCartDataFromApi();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopCartProducts = _sfc_main$2;
      const _component_ShopCartSummary = _sfc_main$3;
      const _component_WidgetsNoData = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(`<section class="cart-section section-b-space"><div class="container-fluid-lg">`);
      if (unref(cart).length) {
        _push(`<div class="row g-xl-5 g-sm-4 g-3"><div class="col-xxl-9 col-xl-8">`);
        _push(ssrRenderComponent(_component_ShopCartProducts, null, null, _parent));
        _push(`</div><div class="col-xxl-3 col-xl-4">`);
        _push(ssrRenderComponent(_component_ShopCartSummary, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_a = unref(cart)) == null ? void 0 : _a.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Items Added",
          description: "It appears that nothing has been added to your cart."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
