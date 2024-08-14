import _sfc_main$1 from './index-C9z-JUPy.mjs';
import _sfc_main$2 from './index-C8UkQut3.mjs';
import _sfc_main$3 from './index-Bmsaf34f.mjs';
import _sfc_main$4 from './index-DORLaeSS.mjs';
import { v as useCollectionStore, s as storeToRefs, e as useDataStore, H as HandleRequest } from './server.mjs';
import { withAsyncContext, ref, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import './SearchDropdownInput-BRStx1Rm.mjs';
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
import './Vertical-DcNKOdfj.mjs';
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
    filter: Object,
    selectedGrid: String,
    show: Boolean
  },
  emits: ["changeProductPage", "modelValue"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    let store = useCollectionStore();
    let { filter, allProducts } = storeToRefs(useCollectionStore());
    storeToRefs(useDataStore());
    let { data } = ([__temp, __restore] = withAsyncContext(() => HandleRequest(
      "https://alsouq.anevex.com/app/shop-api/products?",
      {
        // key: "getProduct",
        params: store.filter
      }
    )), __temp = await __temp, __restore(), __temp);
    let gridClass = ref("");
    let emits = __emit;
    function setGridClass(value) {
      gridClass.value = value;
    }
    function changePage(toPage) {
      emits("changeProductPage", toPage);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_ShopCollectionWidgetsCollectionSort = _sfc_main$1;
      const _component_WidgetsProductBox = _sfc_main$2;
      const _component_WidgetsNoData = _sfc_main$3;
      const _component_WidgetsPagination = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsCollectionSort, {
        filter: unref(filter),
        selectedGrid: __props.selectedGrid,
        onSetGridClass: ($event) => setGridClass($event),
        show: __props.show
      }, null, _parent));
      _push(`<div class="${ssrRenderClass(unref(gridClass))}"><!--[-->`);
      ssrRenderList(unref(data).data, (product, index) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsProductBox, {
          product,
          style: "horizontal",
          classes: "product-box-3"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (!((_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added collection-no-data",
          image: "/svg/no-product.svg",
          text: "Sorry! Couldn't find the products you were looking For!",
          description: "Please check if you have misspelt something or try searching with other way."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_d = (_c = unref(data)) == null ? void 0 : _c.data) == null ? void 0 : _d.length) {
        _push(ssrRenderComponent(_component_WidgetsPagination, {
          Data: unref(data),
          onChangePage: changePage,
          filter: unref(filter)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/CollectionProduct/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
