import _sfc_main$1 from './index-C8UkQut3.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { p as publicAssetsURL, i as useRoute, e as useDataStore, s as storeToRefs } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
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
import './Vertical-DcNKOdfj.mjs';

const _imports_0 = publicAssetsURL("/svg/leaf.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let search = ref("");
    search.value = useRoute().query.search;
    let gridClass = ref(
      "row g-sm-4 g-3 row-cols-2 row-cols-md-3 cols-lg-4 row-cols-xxl-6 product-list-section"
    );
    [__temp, __restore] = withAsyncContext(() => useDataStore().GetSearch()), await __temp, __restore();
    let { searchProducts } = storeToRefs(useDataStore());
    if (useRoute().query.search) {
      searchProduct();
    }
    async function searchProduct() {
      useDataStore().setInitialParams(search.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsProductBox = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="search-section"><div class="container-fluid-lg"><div class="row"><div class="col-xxl-6 col-xl-8 mx-auto"><div class="title d-block text-center"><h2>${ssrInterpolate(_ctx.$t("Search for products"))}</h2><span class="title-leaf"><svg class="icon-width"><use${ssrRenderAttr("xlink:href", _imports_0 + "#leaf")}></use></svg></span></div><div class="search-box"><div class="input-group"><input type="text" class="form-control" placeholder=""${ssrRenderAttr("value", unref(search))}><button class="btn theme-bg-color text-white m-0" type="button" id="button-addon1">${ssrInterpolate(_ctx.$t(" Search"))}</button></div></div></div></div></div></section><section class="section-b-space"><div class="container-fluid-lg"><div class="${ssrRenderClass(unref(gridClass))}"><!--[-->`);
      ssrRenderList((_a = unref(searchProducts)) == null ? void 0 : _a.data, (product) => {
        _push(`<div class="col"><div class="search-product product-wrapper"><div>`);
        _push(ssrRenderComponent(_component_WidgetsProductBox, {
          style: "horizontal",
          product,
          classes: "product-box-3"
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
      if (!((_b = unref(searchProducts).data) == null ? void 0 : _b.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added collection-no-data",
          image: "/svg/no-product.svg",
          text: "Sorry! Couldn't find the products you were looking For!",
          description: "Please check if you have misspelt something or try searching with other way."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
