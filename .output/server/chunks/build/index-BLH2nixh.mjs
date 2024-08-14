import _sfc_main$1 from './index-DDk_TMsi.mjs';
import _sfc_main$2 from './index-WMKtNC4F.mjs';
import _sfc_main$3 from './index-CyTwRXik.mjs';
import { mergeProps, useSSRContext } from 'vue';
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
import './index-uA_ar0VB.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    option: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopProductDetailsWidgetsStoreInformation = _sfc_main$1;
      const _component_ShopProductDetailsWidgetsTrendingProducts = _sfc_main$2;
      const _component_ShopProductDetailsWidgetsProductBanner = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "right-sidebar-box" }, _attrs))}>`);
      if (__props.product.store) {
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsStoreInformation, {
          store: __props.product.store
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.option.product.is_trending_product) {
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsTrendingProducts, { product: __props.product }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.option.product.banner_enable && __props.option.product.banner_image_url) {
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductBanner, {
          image: __props.option.product.banner_image_url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
