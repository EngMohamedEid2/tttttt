import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './About-rVzQ0ppa.mjs';
import _sfc_main$3 from './Service-CIXFx_bB.mjs';
import _sfc_main$4 from './Business-DJB4Fmcg.mjs';
import _sfc_main$5 from './Selling-Ct8FzWis.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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
    sellerStore: Object
  },
  setup(__props) {
    var breadcrumbs = { page: "Become Seller", links: [{ name: "Become Seller" }] };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopSellerBecomeSellerAbout = _sfc_main$2;
      const _component_ShopSellerBecomeSellerService = _sfc_main$3;
      const _component_ShopSellerBecomeSellerBusiness = _sfc_main$4;
      const _component_ShopSellerBecomeSellerSelling = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(ssrRenderComponent(_component_ShopSellerBecomeSellerAbout, {
        sellerStore: __props.sellerStore.about
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopSellerBecomeSellerService, {
        sellerStore: __props.sellerStore.services
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopSellerBecomeSellerBusiness, {
        sellerStore: __props.sellerStore.steps
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopSellerBecomeSellerSelling, {
        sellerStore: __props.sellerStore.start_selling
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/BecomeSeller/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
