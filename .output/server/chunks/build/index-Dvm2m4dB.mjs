import _sfc_main$1 from './index-DMnDyt2w.mjs';
import { s as storeToRefs, e as useDataStore, i as useRoute, a as useRouter, v as useCollectionStore } from './server.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './index-BxaGIHyk.mjs';
import './index-BX6k5hJy.mjs';
import './index-Ciwgdybr.mjs';
import './Category-1rvSbpeA.mjs';
import './Attribute-CbhxpYVx.mjs';
import './Price-BZgpsa8Q.mjs';
import './Rating-D50GE10J.mjs';
import './index-DEbpnvkR.mjs';
import './index-C9z-JUPy.mjs';
import './SearchDropdownInput-BRStx1Rm.mjs';
import './index-C8UkQut3.mjs';
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
import './index-Bmsaf34f.mjs';
import './index-DORLaeSS.mjs';
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
    storeToRefs(useDataStore());
    const route = useRoute();
    const router = useRouter();
    let layout = ref("");
    layout.value = route == null ? void 0 : route.query.layout;
    let { filter } = storeToRefs(useCollectionStore());
    ref(0);
    let store = useCollectionStore();
    let currentPage = ref(1);
    watch(
      () => {
        var _a;
        return (_a = route == null ? void 0 : route.query) == null ? void 0 : _a.layout;
      },
      () => {
        var _a, _b;
        if ((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.layout) {
          layout.value = (_b = route == null ? void 0 : route.query) == null ? void 0 : _b.layout;
        }
      },
      { deep: true }
    );
    function clickedPage(toPage) {
      currentPage.value = toPage;
      store.getParams();
    }
    store.getParams();
    watch(
      () => store.filterObject,
      () => {
        router.push({
          // path: '/collections',
          query: {
            layout: layout.value,
            sortBy: store.filterObject.sort.value,
            field: store.filterObject.field,
            category_id: store.filterObject.selectedCategories ? store.filterObject.selectedCategories.join(",") : useRoute().query.category,
            attribute: store.filterObject.selectedAttributes.join(","),
            price: store.filterObject.selectedPrice.join(","),
            rating: store.filterObject.selectedRating.join(","),
            tag: useRoute().query.tag,
            page: currentPage.value
          }
        });
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopCollectionLeftSidebar = _sfc_main$1;
      _push(ssrRenderComponent(_component_ShopCollectionLeftSidebar, mergeProps({
        onChangePage: clickedPage,
        filter: unref(filter),
        layout: unref(layout)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
