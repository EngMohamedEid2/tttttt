import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { N as NavigationLinks } from './links-CiE55gld.mjs';
import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Wishlist",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_a = "NavigationLinks" in _ctx ? _ctx.NavigationLinks : unref(NavigationLinks)) == null ? void 0 : _a.wishlist,
          class: "btn p-0 position-relative header-wishlist"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ri:heart-3-line",
                size: "24"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ri:heart-3-line",
                  size: "24"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "classic") {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_b = "NavigationLinks" in _ctx ? _ctx.NavigationLinks : unref(NavigationLinks)) == null ? void 0 : _b.wishlist,
          class: "header-icon bag-icon"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ri:heart-3-line",
                size: "24"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ri:heart-3-line",
                  size: "24"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Wishlist.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
