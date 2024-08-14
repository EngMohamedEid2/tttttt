import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
    breadcrumbs: Object
  },
  setup(__props) {
    function shortenText(text, maxLength) {
      if ((text == null ? void 0 : text.length) <= maxLength) {
        return text;
      } else {
        return (text == null ? void 0 : text.slice(0, maxLength - 3)) + "...";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "breadscrumb-section pt-0" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="breadscrumb-contain">`);
      if ((_a = __props.breadcrumbs) == null ? void 0 : _a.page) {
        _push(`<h2>${ssrInterpolate((_b = __props.breadcrumbs) == null ? void 0 : _b.page)}</h2>`);
      } else {
        _push(`<h2>${ssrInterpolate("Current Page Name Here")}</h2>`);
      }
      _push(`<nav><ol class="breadcrumb mb-0"><li class="breadcrumb-item">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/theme/paris" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri:home-3-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri:home-3-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList((_c = __props.breadcrumbs) == null ? void 0 : _c.links, (item, index) => {
        _push(`<li class="breadcrumb-item active">${ssrInterpolate(shortenText(item.name, 25))}</li>`);
      });
      _push(`<!--]--></ol></nav></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Breadcrumb/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
