import _sfc_main$1 from './Image-C9oxrcUc.mjs';
import _sfc_main$2 from './index-BPCZWda6.mjs';
import _sfc_main$3 from './index-CJpnbIWS.mjs';
import _sfc_main$4 from './index-HKl3TCDR.mjs';
import _sfc_main$5 from './index-Dvm0mglo.mjs';
import _sfc_main$6 from './index-BeMhFN0r.mjs';
import _sfc_main$7 from './index-BcRmbEuH.mjs';
import _sfc_main$8 from './index-Ce_Crazo.mjs';
import _sfc_main$9 from './index-pGv8rus9.mjs';
import _sfc_main$a from './index-BFJGnOqz.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
import './index-BJd3hL9t.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './compare-CJlobl4e.mjs';
import './wishlist-DasiP7YX.mjs';
import './index-De4InbXS.mjs';
import './index-36xWC6J0.mjs';
import './index-B8xgC6e1.mjs';
import './index-BAqQL5bv.mjs';
import './nuxt-link-D35ckuRb.mjs';
import './index-Dlt19KKI.mjs';
import './index-Chsussq8.mjs';
import './index-Bmsaf34f.mjs';
import './index-4U42YdIQ.mjs';
import './index-BIIz-G6l.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    Data: { type: Object },
    option: { type: Object },
    reviews: Object,
    questionAnswers: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_ShopProductDetailsImage4Image = _sfc_main$1;
      const _component_ShopProductDetailsWidgetsProductView = _sfc_main$2;
      const _component_ShopProductDetailsWidgetsProductContain = _sfc_main$3;
      const _component_ShopProductDetailsWidgetsProductAction = _sfc_main$4;
      const _component_ShopProductDetailsWidgetsProductInformation = _sfc_main$5;
      const _component_ShopProductDetailsWidgetsProductDeliveryInformation = _sfc_main$6;
      const _component_ShopProductDetailsWidgetsPaymentOption = _sfc_main$7;
      const _component_ShopProductDetailsWidgetsProductSocialShare = _sfc_main$8;
      const _component_ShopProductDetailsWidgetsProductBundle = _sfc_main$9;
      const _component_ShopProductDetailsWidgetsProductDetailsTabs = _sfc_main$a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product-section pt-0" }, _attrs))}><div class="container-fluid-lg"><div class="row g-4"><div class="col-xl-6"><div class="product-left-box"><div class="row g-sm-4 g-2">`);
      _push(ssrRenderComponent(_component_ShopProductDetailsImage4Image, { Data: __props.Data }, null, _parent));
      _push(`</div></div></div><div class="col-xl-6"><div class="right-box-contain">`);
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductView, {
        product: __props.Data,
        option: __props.option
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductContain, {
        product: __props.Data,
        option: __props.option
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductAction, {
        product: __props.Data,
        option: __props.option
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductInformation, { product: __props.Data }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductDeliveryInformation, { product: __props.Data }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsPaymentOption, {
        product: __props.Data,
        option: __props.option
      }, null, _parent));
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductSocialShare, {
        product: __props.Data,
        option: __props.option
      }, null, _parent));
      _push(`</div></div>`);
      if (((_a = __props.Data) == null ? void 0 : _a.cross_sell_products) && ((_c = (_b = __props.Data) == null ? void 0 : _b.cross_sell_products) == null ? void 0 : _c.length)) {
        _push(`<div class="col-12 related-product-2">`);
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductBundle, { productData: __props.Data }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-12">`);
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductDetailsTabs, {
        product: __props.Data,
        reviews: __props.reviews,
        questionAnswers: __props.questionAnswers
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Image4/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
