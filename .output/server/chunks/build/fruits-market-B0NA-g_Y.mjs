import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './index-B4qeDUy3.mjs';
import _sfc_main$3 from './index-WSABCRTn.mjs';
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
import './index-BX6k5hJy.mjs';
import './index-Ciwgdybr.mjs';
import './Category-1rvSbpeA.mjs';
import './Attribute-CbhxpYVx.mjs';
import './Price-BZgpsa8Q.mjs';
import './Rating-D50GE10J.mjs';
import './index-C2K7bQml.mjs';
import './index-CWXewHSq.mjs';
import './index-BvojuXMb.mjs';
import './index-ExfrZjuY.mjs';
import './index-BVvAGb5-.mjs';
import './index-DEbpnvkR.mjs';
import './index-C9z-JUPy.mjs';
import './SearchDropdownInput-BRStx1Rm.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './index-DORLaeSS.mjs';

const _sfc_main = {
  __name: "fruits-market",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { ThemeOptions } = storeToRefs(useDataStore());
    var breadcrumbs = { page: "Fruits Market", links: [{ name: "Sellers Store" }, { name: "Fruits Market" }] };
    let router = useRoute();
    const layout = ref("basic_store_details");
    let StoreParams = ref({ paginate: 9, page: 1, search: "" });
    let { data: store } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("store/slug/fruits-market", { key: "GetStore", params: StoreParams.value })), __temp = await __temp, __restore(), __temp);
    watch(() => router == null ? void 0 : router.query.layout, () => {
      if (router == null ? void 0 : router.query.layout) {
        layout.value = router == null ? void 0 : router.query.layout;
      } else {
        layout.value = ThemeOptions.value.options.seller && ThemeOptions.value.options.seller.store_layout ? ThemeOptions.value.options.seller.store_layout : "basic_store";
      }
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_ShopSellerDetailsBasic = _sfc_main$2;
      const _component_ShopSellerDetailsClassic = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      if (unref(layout) == "basic_store_details") {
        _push(ssrRenderComponent(_component_ShopSellerDetailsBasic, {
          store: unref(store),
          layout: unref(layout)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(layout) == "classic_store_details") {
        _push(ssrRenderComponent(_component_ShopSellerDetailsClassic, {
          store: unref(store),
          layout: unref(layout)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/seller/store/fruits-market.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
