import _sfc_main$1 from './index-BBvJKyN0.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './index-CdatWNO3.mjs';
import 'swiper/vue';
import './server.mjs';
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
    categoryIds: Array,
    style: { type: [String, Object], default: "vertical" },
    title: String,
    image: String,
    theme: String,
    selectedCategoryId: Number,
    Category: Array,
    slidesPerView: { type: Number, default: 7 }
  },
  emits: ["selectCategory"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function selectCategory(id) {
      emit("selectCategory", id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsCategory = _sfc_main$1;
      _push(ssrRenderComponent(_component_WidgetsCategory, mergeProps({
        categoryIds: __props.categoryIds,
        style: __props.style,
        image: __props.image,
        theme: __props.theme,
        title: __props.title,
        slidesPerView: __props.slidesPerView,
        Category: __props.Category,
        selectedCategoryId: __props.selectedCategoryId,
        onSelectedCategory: ($event) => selectCategory($event)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
