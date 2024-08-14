import { ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
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
    product: Object,
    themeOptions: Object
  },
  setup(__props) {
    var _a, _b;
    let props = __props;
    let relatedProducts = ref([]);
    let { Products } = storeToRefs(useDataStore());
    relatedProducts.value = (_b = (_a = Products == null ? void 0 : Products.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter(
      (product) => {
        var _a2, _b2;
        return (_b2 = (_a2 = props == null ? void 0 : props.product) == null ? void 0 : _a2.related_products) == null ? void 0 : _b2.includes(product.id);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      if ((_a2 = unref(relatedProducts)) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-25" }, _attrs))}></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/TrendingProducts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
