import __nuxt_component_0 from './Skeloton-CGnaltty.mjs';
import _sfc_main$1 from './Content-CikFq7xL.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs } from './server.mjs';
import { u as useCompareStore } from './compare-CJlobl4e.mjs';
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
  setup(__props) {
    let { compare } = storeToRefs(useCompareStore());
    useCompareStore().GetCompare();
    let skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ShopCompareSkeloton = __nuxt_component_0;
      const _component_ShopCompareContent = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "compare-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row g-0 compare-row">`);
      if (unref(skeletonLoader)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(skeletonItems), (item) => {
          _push(`<div class="col skeleton-compare">`);
          _push(ssrRenderComponent(_component_ShopCompareSkeloton, null, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_ShopCompareContent, { compare: unref(compare) }, null, _parent));
      }
      _push(`</div>`);
      if (!((_a = unref(compare)) == null ? void 0 : _a.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added",
          image: "/svg/no-category.svg",
          text: "No Items Added",
          description: "It appears that nothing has been added to your compare list. Explore products if you want to."
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Compare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
