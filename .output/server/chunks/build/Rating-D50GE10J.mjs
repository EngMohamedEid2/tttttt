import { v as useCollectionStore, w as _sfc_main$7 } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    filter: Object
  },
  setup(__props) {
    let store = useCollectionStore();
    let ratiing = ref(
      [
        { display: 5 },
        { display: 4 },
        { display: 3 },
        { display: 2 },
        { display: 1 }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtRating = _sfc_main$7;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "category-list custom-padding custom-height" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(ratiing), (rate, index) => {
        _push(`<li><div class="form-check ps-0 m-0 category-list-box"><input class="checkbox_animated" type="checkbox"${ssrRenderAttr("id", "rating-" + index)}${ssrIncludeBooleanAttr(Array.isArray(unref(store).filterObject.selectedRating) ? ssrLooseContain(unref(store).filterObject.selectedRating, rate.display) : unref(store).filterObject.selectedRating) ? " checked" : ""}${ssrRenderAttr("value", rate.display)}><label class="form-check-label"${ssrRenderAttr("for", "rating-" + index)}><span class="name">`);
        _push(ssrRenderComponent(_component_NuxtRating, {
          "read-only": true,
          ratingValue: (rate == null ? void 0 : rate.display) || 0,
          "rating-size": "25px"
        }, null, _parent));
        _push(`</span><span class="number">(${ssrInterpolate(rate.display)} Star)</span></label></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/filter/Rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
