import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { ref, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { i as useRoute, a as useRouter, s as storeToRefs, C as useSiteStore } from './server.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "Logo",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object,
    textClass: { type: String, default: "text-white f-w-600" },
    logo: String
  },
  setup(__props) {
    let headerLogo = ref("");
    useRoute();
    useRouter();
    let { SiteSettings } = storeToRefs(useSiteStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: "/theme/osaka",
        class: "web-logo nav-logo"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            if (unref(headerLogo)) {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", unref(headerLogo))} class="img-fluid" alt=""${_scopeId}></div>`);
            } else {
              _push2(`<div${_scopeId}><h2 class="${ssrRenderClass(__props.textClass)}"${_scopeId}>${ssrInterpolate(((_c = (_b = (_a = unref(SiteSettings)) == null ? void 0 : _a.values) == null ? void 0 : _b.general) == null ? void 0 : _c.site_title) ? (_f = (_e = (_d = unref(SiteSettings)) == null ? void 0 : _d.values) == null ? void 0 : _e.general) == null ? void 0 : _f.site_title : "Logo")}</h2></div>`);
            }
          } else {
            return [
              unref(headerLogo) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("img", {
                  src: unref(headerLogo),
                  class: "img-fluid",
                  alt: ""
                }, null, 8, ["src"])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("h2", { class: __props.textClass }, toDisplayString(((_i = (_h = (_g = unref(SiteSettings)) == null ? void 0 : _g.values) == null ? void 0 : _h.general) == null ? void 0 : _i.site_title) ? (_l = (_k = (_j = unref(SiteSettings)) == null ? void 0 : _j.values) == null ? void 0 : _k.general) == null ? void 0 : _l.site_title : "Logo"), 3)
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Logo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
