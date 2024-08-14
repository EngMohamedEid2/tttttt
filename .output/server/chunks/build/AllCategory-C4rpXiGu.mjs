import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "AllCategory",
  __ssrInlineRender: true,
  props: {
    categories: Object,
    style: [String, Object]
  },
  setup(__props) {
    useCollectionStore();
    let selectedCategorySlug = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "classic_vertical") {
        _push(`<div class="shop-left-sidebar"><ul class="nav nav-pills mb-3 custom-nav-tab"><!--[-->`);
        ssrRenderList(__props.categories, (category) => {
          var _a2;
          _push(`<li class="nav-item"><button class="${ssrRenderClass([{ active: unref(selectedCategorySlug).length && unref(selectedCategorySlug).includes(category.slug) }, "nav-link"])}">${ssrInterpolate(category == null ? void 0 : category.name)} <img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a2 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a2.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}></button></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = __props.categories) == null ? void 0 : _a.length) && __props.style == "dropdown") {
        _push(`<ul class="category-list"><!--[-->`);
        ssrRenderList(__props.categories, (category) => {
          var _a2;
          _push(`<li class="onhover-category-list"><a href="javascript:void(0)" class="category-name"><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a2 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a2.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}><h6>${ssrInterpolate(category == null ? void 0 : category.name)}</h6></a></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = __props.categories) == null ? void 0 : _b.length) && __props.style == "input_dropdown") {
        _push(`<button class="btn location-button"><select class="form-select locat-name"><option>All Category</option><!--[-->`);
        ssrRenderList(__props.categories, (category) => {
          _push(`<option>${ssrInterpolate(category.name)}</option>`);
        });
        _push(`<!--]--></select></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/AllCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
