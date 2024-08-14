import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: `/seller/store/${__props.store.slug}`
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if ((_a = __props.store) == null ? void 0 : _a.store_logo) {
              _push2(`<div class="image"${_scopeId}><img${ssrRenderAttr("src", __props.store.store_logo.original_url)} alt="" class="img-fluid"${_scopeId}></div>`);
            } else {
              _push2(`<h1 class="vendor-text"${_scopeId}>${ssrInterpolate((_e = (_d = (_c = (_b = __props.store) == null ? void 0 : _b.store_name) == null ? void 0 : _c.charAt(0)) == null ? void 0 : _d.toString()) == null ? void 0 : _e.toUpperCase())}</h1>`);
            }
          } else {
            return [
              ((_f = __props.store) == null ? void 0 : _f.store_logo) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "image"
              }, [
                createVNode("img", {
                  src: __props.store.store_logo.original_url,
                  alt: "",
                  class: "img-fluid"
                }, null, 8, ["src"])
              ])) : (openBlock(), createBlock("h1", {
                key: 1,
                class: "vendor-text"
              }, toDisplayString((_j = (_i = (_h = (_g = __props.store) == null ? void 0 : _g.store_name) == null ? void 0 : _h.charAt(0)) == null ? void 0 : _i.toString()) == null ? void 0 : _j.toUpperCase()), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Widgets/StoreLogo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
