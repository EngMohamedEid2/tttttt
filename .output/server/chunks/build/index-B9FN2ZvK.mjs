import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './index-Dm9iJoV3.mjs';
import _sfc_main$3 from './index-D2hMtD5O.mjs';
import _sfc_main$4 from './index-oENEhLu5.mjs';
import _sfc_main$5 from './index-xfyZBlSB.mjs';
import _sfc_main$6 from './index-B8lFTWVo.mjs';
import _sfc_main$7 from './index-DP_8h5ta.mjs';
import _sfc_main$8 from './index-Bj1ttgz6.mjs';
import { s as storeToRefs, e as useDataStore, H as HandleRequest, i as useRoute } from './server.mjs';
import { withAsyncContext, ref, watch, onUnmounted, unref, useSSRContext } from 'vue';
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
import './Images-LLHPLOmm.mjs';
import './index-BPCZWda6.mjs';
import './index-CJpnbIWS.mjs';
import './index-BJd3hL9t.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './compare-CJlobl4e.mjs';
import './wishlist-DasiP7YX.mjs';
import './index-HKl3TCDR.mjs';
import './index-De4InbXS.mjs';
import './index-36xWC6J0.mjs';
import './index-B8xgC6e1.mjs';
import './index-BAqQL5bv.mjs';
import './index-Dvm0mglo.mjs';
import './index-BeMhFN0r.mjs';
import './index-BcRmbEuH.mjs';
import './index-Ce_Crazo.mjs';
import './index-pGv8rus9.mjs';
import './index-BFJGnOqz.mjs';
import './index-Dlt19KKI.mjs';
import './index-Chsussq8.mjs';
import './index-Bmsaf34f.mjs';
import './index-4U42YdIQ.mjs';
import './index-BIIz-G6l.mjs';
import './index-BLH2nixh.mjs';
import './index-DDk_TMsi.mjs';
import './index-WMKtNC4F.mjs';
import './index-CyTwRXik.mjs';
import './index-uA_ar0VB.mjs';
import './Image-C9oxrcUc.mjs';
import './Image-Pbz6eKoP.mjs';
import './Image-BXBp7EvI.mjs';
import './index-CgsvLzA0.mjs';
import './index-DFV7j_wu.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: { Data: { type: Object }, option: { type: Object } },
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    let { ThemeOptions, queAns, SingleProducts } = storeToRefs(useDataStore());
    let { data, error } = ([__temp, __restore] = withAsyncContext(() => HandleRequest(`product/slug/${useRoute().params.slug}`, { key: "getSingleDetailsProduct", params: { status: 1 } })), __temp = await __temp, __restore(), __temp);
    let { data: productReview } = ([__temp, __restore] = withAsyncContext(() => {
      var _a2;
      return HandleRequest("front/review", { key: "getProductReview", params: { product_id: (_a2 = data == null ? void 0 : data.value) == null ? void 0 : _a2.id } });
    }), __temp = await __temp, __restore(), __temp);
    var breadcrumbs = { page: (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.name, links: [{ name: "Product" }, { name: (_b = data == null ? void 0 : data.value) == null ? void 0 : _b.name }] };
    const route = useRoute();
    let layout = ref(route == null ? void 0 : route.query.layout);
    const isScrollActive = ref(false);
    [__temp, __restore] = withAsyncContext(() => HandleRequest(`product/slug/${useRoute().params.slug}`, { key: "getSingleDetailsProduct", params: { status: 1 } })), __temp = await __temp, __restore();
    watch(() => {
      var _a2;
      return (_a2 = route == null ? void 0 : route.query) == null ? void 0 : _a2.layout;
    }, () => {
      var _a2, _b2;
      if ((_a2 = route == null ? void 0 : route.query) == null ? void 0 : _a2.layout) {
        layout.value = (_b2 = route == null ? void 0 : route.query) == null ? void 0 : _b2.layout;
      } else {
        console.log("ThemeOptions", ThemeOptions);
      }
    }, { deep: true });
    const onScroll = () => {
      const button = (void 0).querySelector(".scroll-button");
      if (button) {
        const buttonRect = button.getBoundingClientRect();
        if (buttonRect.bottom < (void 0).innerHeight && buttonRect.bottom < 0) {
          isScrollActive.value = true;
          (void 0).body.classList.add("stickyCart");
        } else {
          isScrollActive.value = false;
          (void 0).body.classList.remove("stickyCart");
        }
      }
    };
    useDataStore().GetAllQustionAnswer((_c = data == null ? void 0 : data.value) == null ? void 0 : _c.id);
    useDataStore().GetSingleProduct();
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", onScroll);
      (void 0).body.classList.remove("stickyCart");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopProductDetailsThumbnail = _sfc_main$2;
      const _component_ShopProductDetailsImage4 = _sfc_main$3;
      const _component_ShopProductDetailsSilder = _sfc_main$4;
      const _component_ShopProductDetailsSticky = _sfc_main$5;
      const _component_ShopProductDetailsAccordions = _sfc_main$6;
      const _component_ShopProductDetailsWidgetsRelatedProducts = _sfc_main$7;
      const _component_ShopProductDetailsWidgetsStickyCheckout = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(`<section class="product-section section-b-space">`);
      if (unref(layout) == "product_thumbnail") {
        _push(ssrRenderComponent(_component_ShopProductDetailsThumbnail, {
          Data: unref(data),
          option: (_a2 = unref(ThemeOptions)) == null ? void 0 : _a2.options,
          reviews: (_b2 = unref(productReview)) == null ? void 0 : _b2.data,
          questionAnswers: unref(queAns).data
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) == "product_images") {
        _push(ssrRenderComponent(_component_ShopProductDetailsImage4, {
          Data: unref(data),
          option: (_c2 = unref(ThemeOptions)) == null ? void 0 : _c2.options,
          reviews: (_d = unref(productReview)) == null ? void 0 : _d.data,
          questionAnswers: unref(queAns).data
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) == "product_slider") {
        _push(ssrRenderComponent(_component_ShopProductDetailsSilder, {
          Data: unref(data),
          option: (_e = unref(ThemeOptions)) == null ? void 0 : _e.options,
          reviews: (_f = unref(productReview)) == null ? void 0 : _f.data,
          questionAnswers: unref(queAns).data
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) == "product_sticky") {
        _push(ssrRenderComponent(_component_ShopProductDetailsSticky, {
          Data: unref(data),
          option: (_g = unref(ThemeOptions)) == null ? void 0 : _g.options,
          reviews: (_h = unref(productReview)) == null ? void 0 : _h.data,
          questionAnswers: unref(queAns).data
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) == "product_accordion") {
        _push(ssrRenderComponent(_component_ShopProductDetailsAccordions, {
          Data: unref(data),
          option: (_i = unref(ThemeOptions)) == null ? void 0 : _i.options,
          reviews: (_j = unref(productReview)) == null ? void 0 : _j.data,
          questionAnswers: unref(queAns).data
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if ((_l = (_k = unref(data)) == null ? void 0 : _k.related_products) == null ? void 0 : _l.length) {
        _push(`<section class="product-list-section section-b-space pt-0">`);
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsRelatedProducts, { product: unref(data) }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsStickyCheckout, { product: unref(data) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
