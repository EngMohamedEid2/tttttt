import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from 'vue/server-renderer';
import { v as useCollectionStore, s as storeToRefs, e as useDataStore } from './server.mjs';
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
  __name: "Category",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useCollectionStore();
    storeToRefs(
      useCollectionStore()
    );
    let { Categories } = storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "category-list custom-padding custom-height" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(Categories), (category, index) => {
        _push(`<li><div class="form-check ps-0 m-0 category-list-box"><input class="checkbox_animated" type="checkbox"${ssrRenderAttr("id", category.name)}${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(store).filterObject.selectedCategories) ? ssrLooseContain(unref(store).filterObject.selectedCategories, category.id) : unref(store).filterObject.selectedCategories) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", category.name)}><span class="name">${ssrInterpolate(category.name)}</span></label></div></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/filter/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
