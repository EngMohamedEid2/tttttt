import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { v as useCollectionStore } from './server.mjs';
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
  __name: "Price",
  __ssrInlineRender: true,
  props: {
    filter: Object
  },
  setup(__props) {
    let store = useCollectionStore();
    let prices = ref(
      [
        {
          id: 1,
          price: 100,
          text: "Below",
          value: "100"
        },
        {
          id: 2,
          minPrice: 100,
          maxPrice: 200,
          value: "0-200"
        },
        {
          id: 3,
          minPrice: 200,
          maxPrice: 400,
          value: "200-400"
        },
        {
          id: 4,
          minPrice: 400,
          maxPrice: 600,
          value: "400-600"
        },
        {
          id: 5,
          minPrice: 600,
          maxPrice: 800,
          value: "600-800"
        },
        {
          id: 6,
          minPrice: 800,
          maxPrice: 1e3,
          value: "800-1000"
        },
        {
          id: 7,
          price: 1e3,
          text: "Above",
          value: "1000"
        }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "category-list custom-padding custom-height" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(prices), (price, index) => {
        _push(`<li><div class="form-check ps-0 m-0 category-list-box"><input class="checkbox_animated" type="checkbox"${ssrRenderAttr("id", "price-filter" + index)}${ssrIncludeBooleanAttr(Array.isArray(unref(store).filterObject.selectedPrice) ? ssrLooseContain(unref(store).filterObject.selectedPrice, price.value) : unref(store).filterObject.selectedPrice) ? " checked" : ""}${ssrRenderAttr("value", price.value)}><label class="form-check-label"${ssrRenderAttr("for", "price-filter" + index)}>`);
        if (price.price) {
          _push(`<span class="name">${ssrInterpolate(price.text)} - $ ${ssrInterpolate(price.price)}</span>`);
        } else {
          _push(`<span class="name">$ ${ssrInterpolate(price.minPrice)} - $ ${ssrInterpolate(price.maxPrice)}</span>`);
        }
        _push(`</label></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/filter/Price.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
