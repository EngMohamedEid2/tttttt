import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "SearchDropdownInput",
  __ssrInlineRender: true,
  props: {
    options: Array,
    modelValue: Object,
    displayKey: {
      default: "display",
      type: String
    },
    dropdownId: {
      default: "dropDown",
      type: String
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown" }, _attrs))}><button class="dropdown-toggle" type="button"${ssrRenderAttr("id", __props.dropdownId)} data-bs-toggle="dropdown"><span>${ssrInterpolate(__props.modelValue[__props.displayKey] || "Select")}</span>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-down-s-line" }, null, _parent));
      _push(`</button><ul class="dropdown-menu"><!--[-->`);
      ssrRenderList(__props.options, (option, index) => {
        _push(`<li><a class="dropdown-item" href="javascript:void(0)">${ssrInterpolate(option.display)}</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/Common/SearchDropdownInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
