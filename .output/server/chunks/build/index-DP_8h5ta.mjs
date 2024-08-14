import _sfc_main$1 from './index-DFV7j_wu.mjs';
import _sfc_main$2 from './index-C8UkQut3.mjs';
import { ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    var _a, _b;
    let props = __props;
    let relatedProducts = ref([]);
    let { Products } = storeToRefs(useDataStore());
    relatedProducts.value = (_b = (_a = Products == null ? void 0 : Products.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((product) => {
      var _a2, _b2;
      return (_b2 = (_a2 = props == null ? void 0 : props.product) == null ? void 0 : _a2.related_products) == null ? void 0 : _b2.includes(product.id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_WidgetsTitle = _sfc_main$1;
      const _component_WidgetsProductBox = _sfc_main$2;
      if ((_a2 = unref(relatedProducts)) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid-lg" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, { title: "You May Also Like" }, null, _parent));
        _push(`<div class="row g-3"><!--[-->`);
        ssrRenderList(unref(relatedProducts), (product) => {
          _push(`<div class="col-xxl-2 col-lg-3 col-md-4 col-6 product-box-contain">`);
          _push(ssrRenderComponent(_component_WidgetsProductBox, {
            product,
            classes: "product-box-3",
            style: "horizontal"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/RelatedProducts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
