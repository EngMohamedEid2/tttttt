import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    store: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_nuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vendor-share" }, _attrs))}><h5>${ssrInterpolate("Follow Us")} :</h5><ul>`);
      if (__props.store.facebook) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxtLink, {
          to: __props.store.facebook,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:facebook-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri:facebook-fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = __props.store) == null ? void 0 : _a.twitter) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxtLink, {
          to: __props.store.twitter,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:twitter-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri:twitter-fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = __props.store) == null ? void 0 : _b.instagram) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxtLink, {
          to: __props.store.instagram,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:instagram-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri:instagram-fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.store) == null ? void 0 : _c.youtube) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxtLink, {
          to: __props.store.youtube,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:youtube-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri:youtube-fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = __props.store) == null ? void 0 : _d.pinterest) {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxtLink, {
          to: __props.store.pinterest,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:pinterest-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, { name: "ri:pinterest-fill" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Widgets/StoreSocialLink/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
