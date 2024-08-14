import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    footer: Object,
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "theme-logo" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/theme/paris" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            if ((_a = __props.footer) == null ? void 0 : _a.footer_logo) {
              _push2(`<img${ssrRenderAttr("src", __props.footer.footer_logo)} class="img-fluid" alt="logo"${_scopeId}>`);
            } else {
              _push2(`<div${_scopeId}>`);
              if (__props.data && ((_b = __props.data) == null ? void 0 : _b.general)) {
                _push2(`<h2 class="f-w-600"${_scopeId}>${ssrInterpolate(__props.data.general.site_title ? !__props.data.general.site_title.split(" ")[0] : "Logo Here")}</h2>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
          } else {
            return [
              ((_c = __props.footer) == null ? void 0 : _c.footer_logo) ? (openBlock(), createBlock("img", {
                key: 0,
                src: __props.footer.footer_logo,
                class: "img-fluid",
                alt: "logo"
              }, null, 8, ["src"])) : (openBlock(), createBlock("div", { key: 1 }, [
                __props.data && ((_d = __props.data) == null ? void 0 : _d.general) ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: "f-w-600"
                }, toDisplayString(__props.data.general.site_title ? !__props.data.general.site_title.split(" ")[0] : "Logo Here"), 1)) : createCommentVNode("", true)
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
