import _sfc_main$1 from './index-BX6k5hJy.mjs';
import _sfc_main$2 from './index-C2K7bQml.mjs';
import _sfc_main$3 from './index-CWXewHSq.mjs';
import _sfc_main$4 from './index-BvojuXMb.mjs';
import _sfc_main$5 from './index-ExfrZjuY.mjs';
import _sfc_main$6 from './index-BVvAGb5-.mjs';
import _sfc_main$7 from './index-DEbpnvkR.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { v as useCollectionStore, a as useRouter, i as useRoute } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './index-Ciwgdybr.mjs';
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
import './Category-1rvSbpeA.mjs';
import './Attribute-CbhxpYVx.mjs';
import './Price-BZgpsa8Q.mjs';
import './Rating-D50GE10J.mjs';
import './nuxt-link-D35ckuRb.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    store: Object,
    layout: String
  },
  setup(__props) {
    let props = __props;
    let stores = useCollectionStore();
    let changePage = ref(1);
    stores.filterObject.store_slug.value = props.store.slug;
    function changePages(toPage) {
      changePage.value = toPage;
      setTimeout(async () => {
      }, 1e3);
    }
    function setRoute() {
      useRouter().push({
        path: useRoute().path,
        query: {
          layout: props.layout,
          sortBy: stores.filterObject.sort.value,
          field: stores.filterObject.field,
          category: stores.filterObject.selectedCategories.join(","),
          attribute: stores.filterObject.selectedAttributes.join(","),
          price: stores.filterObject.selectedPrice.join(","),
          rating: stores.filterObject.selectedRating.join(","),
          page: changePage.value,
          store_slug: stores.filterObject.store_slug.value
        }
      });
    }
    stores.getParams();
    watch(() => stores.filterObject, () => {
      setRoute();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopCollectionWidgetsSidebar = _sfc_main$1;
      const _component_ShopSellerWidgetsStoreLogo = _sfc_main$2;
      const _component_ShopSellerWidgetsStoreName = _sfc_main$3;
      const _component_ShopSellerWidgetsStoreRating = _sfc_main$4;
      const _component_ShopSellerWidgetsStoreDescription = _sfc_main$5;
      const _component_ShopSellerWidgetsStoreSocialLink = _sfc_main$6;
      const _component_ShopCollectionWidgetsCollectionProduct = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "section-b-space shop-section",
        id: "filtered_products"
      }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-xxl-3 col-lg-4"><div class="left-box">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsSidebar, { filter: _ctx.filter }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="vendor-detail-box"${_scopeId}><div class="vendor-name vendor-bottom"${_scopeId}><div class="vendor-logo"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ShopSellerWidgetsStoreLogo, { store: __props.store }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ShopSellerWidgetsStoreName, { store: __props.store }, null, _parent2, _scopeId));
            _push2(`<div class="product-rating vendor-rating"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ShopSellerWidgetsStoreRating, { store: __props.store }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(ssrRenderComponent(_component_ShopSellerWidgetsStoreDescription, { store: __props.store }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ShopSellerWidgetsStoreSocialLink, { store: __props.store }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "vendor-detail-box" }, [
                createVNode("div", { class: "vendor-name vendor-bottom" }, [
                  createVNode("div", { class: "vendor-logo" }, [
                    createVNode(_component_ShopSellerWidgetsStoreLogo, { store: __props.store }, null, 8, ["store"]),
                    createVNode("div", null, [
                      createVNode(_component_ShopSellerWidgetsStoreName, { store: __props.store }, null, 8, ["store"]),
                      createVNode("div", { class: "product-rating vendor-rating" }, [
                        createVNode(_component_ShopSellerWidgetsStoreRating, { store: __props.store }, null, 8, ["store"])
                      ])
                    ])
                  ]),
                  createVNode(_component_ShopSellerWidgetsStoreDescription, { store: __props.store }, null, 8, ["store"])
                ]),
                createVNode(_component_ShopSellerWidgetsStoreSocialLink, { store: __props.store }, null, 8, ["store"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-xxl-9 col-lg-8">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsCollectionProduct, {
        onChangeProductPage: changePages,
        filter: _ctx.filter
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Details/Basic/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
