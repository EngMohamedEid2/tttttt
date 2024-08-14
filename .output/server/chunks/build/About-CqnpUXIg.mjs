import { d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "About",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-logo-contain" }, _attrs))}>`);
      if ((_b = (_a = __props.data) == null ? void 0 : _a.footer) == null ? void 0 : _b.footer_about) {
        _push(`<p>${ssrInterpolate((_d = (_c = __props.data) == null ? void 0 : _c.footer) == null ? void 0 : _d.footer_about)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="address">`);
      if ((_f = (_e = __props.data) == null ? void 0 : _e.footer) == null ? void 0 : _f.about_address) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:home-line" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`${ssrInterpolate((_b2 = (_a2 = __props.data) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.about_address)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_d2 = (_c2 = __props.data) == null ? void 0 : _c2.footer) == null ? void 0 : _d2.about_address), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = (_g = __props.data) == null ? void 0 : _g.footer) == null ? void 0 : _h.about_email) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:mail-line" }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`${ssrInterpolate((_b2 = (_a2 = __props.data) == null ? void 0 : _a2.footer) == null ? void 0 : _b2.about_email)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_d2 = (_c2 = __props.data) == null ? void 0 : _c2.footer) == null ? void 0 : _d2.about_email), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
