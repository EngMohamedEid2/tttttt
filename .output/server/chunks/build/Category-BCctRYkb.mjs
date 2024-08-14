import _sfc_main$1 from './index-CdatWNO3.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './index-BMB04ZHY.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './index-BBvJKyN0.mjs';

const _sfc_main = {
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_ThemesWidgetsCategories = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "dropdown-category",
        id: "all_categories_btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "ri-apps-line",
              class: "f-w-600 me-2"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$t("All Categories"))}</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "ri-apps-line",
                class: "f-w-600 me-2"
              }),
              createVNode("span", null, toDisplayString(_ctx.$t("All Categories")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="category-dropdown"><div class="category-title"><h5>${ssrInterpolate(_ctx.$t("Categories"))}</h5>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn p-0 close-button text-content",
        id: "categories_btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-close-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
        style: "dropdown",
        categoryIds: (_b = (_a = __props.data) == null ? void 0 : _a.header) == null ? void 0 : _b.category_ids
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
