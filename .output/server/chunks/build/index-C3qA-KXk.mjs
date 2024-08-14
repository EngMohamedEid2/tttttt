import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    useCompareStore().GetCompare();
    let { compare } = storeToRefs(useCompareStore());
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0;
      if ((_a = unref(compare)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "compare-fix" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/compare" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`<h5${_scopeId}>${ssrInterpolate(_ctx.$t("Compare"))} <span${_scopeId}>(${ssrInterpolate((_a2 = unref(compare)) == null ? void 0 : _a2.length)})</span></h5>`);
            } else {
              return [
                createVNode("h5", null, [
                  createTextVNode(toDisplayString(_ctx.$t("Compare")) + " ", 1),
                  createVNode("span", null, "(" + toDisplayString((_b = unref(compare)) == null ? void 0 : _b.length) + ")", 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/StickyCompare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
