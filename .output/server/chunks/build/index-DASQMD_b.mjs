import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './index-F-n9KYBM.mjs';
import _sfc_main$3 from './index-CWAt_-Gu.mjs';
import _sfc_main$4 from './index-DORLaeSS.mjs';
import { s as storeToRefs, e as useDataStore, i as useRoute, H as HandleRequest } from './server.mjs';
import { ref, withAsyncContext, watch, unref, useSSRContext } from 'vue';
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
import './index-BR7WT9uM.mjs';
import './index-C2K7bQml.mjs';
import './index-BvojuXMb.mjs';
import './index-CWXewHSq.mjs';
import './index-DOs8NKeQ.mjs';
import './index-BH6f2NPb.mjs';
import './index-BTC3LS2J.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { ThemeOptions } = storeToRefs(useDataStore());
    var breadcrumbs = { page: "Sellers Store", links: [{ name: "Sellers Store" }] };
    let router = useRoute();
    let skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 9 }, (_, index) => index);
    let layout = ref(router == null ? void 0 : router.query.layout);
    let StoreParams = ref({ paginate: 9, page: 1, search: "" });
    let { data: store } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("store", { key: "GetStore", params: StoreParams.value })), __temp = await __temp, __restore(), __temp);
    watch(() => router == null ? void 0 : router.query.layout, () => {
      if (router == null ? void 0 : router.query.layout) {
        layout.value = router == null ? void 0 : router.query.layout;
      } else {
        layout.value = ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? ThemeOptions.value.options.seller.store_layout : "basic_store";
      }
    }, { deep: true });
    const ChangePage = ({ toPage }) => {
      StoreParams.value.page = toPage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopSellerStoreBasic = _sfc_main$2;
      const _component_ShopSellerStoreClassic = _sfc_main$3;
      const _component_WidgetsPagination = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(`<section class="seller-grid-section section-b-space">`);
      if (unref(layout) === "basic_store") {
        _push(ssrRenderComponent(_component_ShopSellerStoreBasic, {
          stores: (_a = unref(store)) == null ? void 0 : _a.data,
          skeletonItems: unref(skeletonItems),
          skeletonLoader: unref(skeletonLoader)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) === "classic_store") {
        _push(ssrRenderComponent(_component_ShopSellerStoreClassic, {
          stores: (_b = unref(store)) == null ? void 0 : _b.data,
          skeletonItems: unref(skeletonItems),
          skeletonLoader: unref(skeletonLoader)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if ((_d = (_c = unref(store)) == null ? void 0 : _c.data) == null ? void 0 : _d.length) {
        _push(`<div class="custome-pagination section-b-space">`);
        _push(ssrRenderComponent(_component_WidgetsPagination, {
          Data: unref(store),
          onChangePage: (toPage) => ChangePage({ toPage })
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/stores/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
