import { p as publicAssetsURL, i as useRoute, a as useRouter, s as storeToRefs, e as useDataStore, v as useCollectionStore, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './SearchDropdownInput-BRStx1Rm.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/svg/grid-3.svg");
const _imports_1 = publicAssetsURL("/svg/grid-4.svg");
const _imports_2 = publicAssetsURL("/svg/grid.svg");
const _imports_3 = publicAssetsURL("/svg/grid-5.svg");
const _imports_4 = publicAssetsURL("/svg/list.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    filter: Object,
    show: Boolean,
    selectedGrid: { type: String, default: "collection_4_grid" }
  },
  emits: ["setGridClass"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let route = useRoute();
    useRouter();
    storeToRefs(useDataStore());
    let classes = ref("row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section");
    let { sortingOptions, sort } = storeToRefs(useCollectionStore());
    let emits = __emit;
    let store = useCollectionStore();
    watch(() => useRoute().query.layout, () => {
      let layout = useRoute().query.layout;
      if (layout) {
        grid(layout);
      }
    }, { deep: true });
    function grid(value) {
      if (value == "collection_3_grid") {
        classes.value = "row g-sm-4 g-3 product-list-section row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2";
        props.selectedGrid = value;
      } else if (value == "collection_4_grid") {
        classes.value = "row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2";
        props.selectedGrid = value;
      } else if (value == "collection_5_grid") {
        classes.value = "row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2";
        props.selectedGrid = value;
      } else if (value == "collection_list_view") {
        classes.value = "row g-sm-4 g-3 product-list-section row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 list-style";
        props.selectedGrid = value;
      } else if (value == "collection_no_sidebar") {
        classes.value = "row g-sm-4 g-3 product-list-section row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-2";
        props.selectedGrid = value;
      }
      emits("setGridClass", classes.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsInputFieldsCommonSearchDropdownInput = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "show-button" }, _attrs))}>`);
      if (("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().query.layout !== "collection_no_sidebar" && ("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().query.layout !== "collection_offcanvas_filter") {
        _push(`<div class="filter-button-group mt-0"><div class="filter-button d-inline-block d-lg-none"><a>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri-filter-2-fill" }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("Filter Menu"))}</a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="top-filter-menu"><div class="category-dropdown">`);
      if (unref(route).query.layout == "collection_offcanvas_filter") {
        _push(`<a href="javascript:void(0)" class="filter-offcanvas-title">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:filter-2-fill" }, null, _parent));
        _push(` Filter Menu </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h5 class="text-content">Sort By :</h5>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsCommonSearchDropdownInput, {
        modelValue: unref(store).filterObject.sort,
        "onUpdate:modelValue": ($event) => unref(store).filterObject.sort = $event,
        options: unref(sortingOptions),
        "dropdown-id": "sortByDropdown"
      }, null, _parent));
      _push(`</div><div class="grid-option d-none d-md-block"><ul><li class="${ssrRenderClass([[{ active: __props.selectedGrid == "collection_3_grid" }], "three-grid"])}"><a href="javascript:void(0)"><img${ssrRenderAttr("src", _imports_0)} alt="sort"></a></li><li class="${ssrRenderClass([[{ active: __props.selectedGrid == "collection_4_grid" }], "grid-btn d-xxl-inline-block d-none"])}"><a href="javascript:void(0)"><img${ssrRenderAttr("src", _imports_1)} class="d-lg-inline-block d-none" alt="sort"><img${ssrRenderAttr("src", _imports_2)} class="img-fluid d-lg-none d-inline-block" alt="sort"></a></li><li class="${ssrRenderClass([[{ active: __props.selectedGrid == "collection_5_grid" }], "grid-btn d-xxl-inline-block d-none"])}"><a href="javascript:void(0)"><img${ssrRenderAttr("src", _imports_3)} class="d-lg-inline-block d-none" alt="sort"><img${ssrRenderAttr("src", _imports_2)} class="img-fluid d-lg-none d-inline-block" alt="sort"></a></li><li class="${ssrRenderClass([[{ active: __props.selectedGrid == "collection_list_view" }], "list-btn"])}"><a href="javascript:void(0)"><img${ssrRenderAttr("src", _imports_4)} alt=""></a></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/CollectionSort/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
