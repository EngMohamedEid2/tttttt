import { s as storeToRefs, e as useDataStore, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-Ciwgdybr.mjs';
import _sfc_main$2 from './Category-1rvSbpeA.mjs';
import _sfc_main$3 from './Attribute-CbhxpYVx.mjs';
import _sfc_main$4 from './Price-BZgpsa8Q.mjs';
import _sfc_main$5 from './Rating-D50GE10J.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    filter: Object,
    opensidebar: Boolean
  },
  setup(__props) {
    storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_ShopCollectionWidgetsFilter = _sfc_main$1;
      const _component_ShopCollectionWidgetsFilterCategory = _sfc_main$2;
      const _component_ShopCollectionWidgetsFilterAttribute = _sfc_main$3;
      const _component_ShopCollectionWidgetsFilterPrice = _sfc_main$4;
      const _component_ShopCollectionWidgetsFilterRating = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shop-left-sidebar" }, _attrs))}><div class="leftbox-overlay"></div><div class="back-button"><h3><a class="text-title">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-close-fill" }, null, _parent));
      _push(`<span>${ssrInterpolate(_ctx.$t("Back"))}</span></a></h3></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsFilter, null, null, _parent));
      _push(`<div class="accordion custome-accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#category-dropdown`)}><span>${ssrInterpolate(_ctx.$t("Categories"))}</span></button></h2><div${ssrRenderAttr("id", `category-dropdown`)} class="accordion-collapse collapse show"><div class="accordion-body">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsFilterCategory, null, null, _parent));
      _push(`</div></div></div><div class="accordion-item">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsFilterAttribute, null, null, _parent));
      _push(`</div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#price-dropdown`)}><span>${ssrInterpolate(_ctx.$t("Price"))}</span></button></h2><div${ssrRenderAttr("id", `price-dropdown`)} class="accordion-collapse collapse show"><div class="accordion-body">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsFilterPrice, { filter: __props.filter }, null, _parent));
      _push(`</div></div></div><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#rating-dropdown`)}><span>${ssrInterpolate(_ctx.$t("Rating"))}</span></button></h2><div${ssrRenderAttr("id", `rating-dropdown`)} class="accordion-collapse collapse show"><div class="accordion-body">`);
      _push(ssrRenderComponent(_component_ShopCollectionWidgetsFilterRating, { filter: __props.filter }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
