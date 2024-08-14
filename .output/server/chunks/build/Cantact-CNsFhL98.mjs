import { p as publicAssetsURL, d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/playstore.svg");
const _imports_1 = publicAssetsURL("/images/appstore.svg");
const _sfc_main = {
  __name: "Cantact",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-contact" }, _attrs))}><ul>`);
      if ((_b = (_a = __props.data) == null ? void 0 : _a.footer) == null ? void 0 : _b.support_number) {
        _push(`<li><div class="footer-number">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:phone-line",
          size: "18"
        }, null, _parent));
        _push(`<div class="contact-number"><h6 class="text-content">${ssrInterpolate(_ctx.$t("Customer Support 24/7"))}</h6><h5>${ssrInterpolate((_d = (_c = __props.data) == null ? void 0 : _c.footer) == null ? void 0 : _d.support_number)}</h5></div></div></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = (_e = __props.data) == null ? void 0 : _e.footer) == null ? void 0 : _f.support_email) {
        _push(`<li><div class="footer-number">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:mail-line",
          size: "18"
        }, null, _parent));
        _push(`<div class="contact-number"><h6 class="text-content">${ssrInterpolate(_ctx.$t("Email Address :"))}</h6><h5>${ssrInterpolate((_h = (_g = __props.data) == null ? void 0 : _g.footer) == null ? void 0 : _h.support_email)}</h5></div></div></li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_j = (_i = __props.data) == null ? void 0 : _i.footer) == null ? void 0 : _j.play_store_url) || ((_l = (_k = __props.data) == null ? void 0 : _k.footer) == null ? void 0 : _l.app_store_url)) {
        _push(`<li class="social-app mb-0"><h5 class="mb-2 text-content">Download App :</h5><ul>`);
        if ((_n = (_m = __props.data) == null ? void 0 : _m.footer) == null ? void 0 : _n.play_store_url) {
          _push(`<li class="mb-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: (_p = (_o = __props.data) == null ? void 0 : _o.footer) == null ? void 0 : _p.play_store_url,
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} class="lazyload" alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0,
                    class: "lazyload",
                    alt: ""
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_r = (_q = __props.data) == null ? void 0 : _q.footer) == null ? void 0 : _r.app_store_url) {
          _push(`<li class="mb-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: (_t = (_s = __props.data) == null ? void 0 : _s.footer) == null ? void 0 : _t.app_store_url,
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} class="lazyload" alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_1,
                    class: "lazyload",
                    alt: ""
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Cantact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
