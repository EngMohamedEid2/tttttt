import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
  __name: "Social",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      if (((_b = (_a = __props.data) == null ? void 0 : _a.footer) == null ? void 0 : _b.facebook) || ((_d = (_c = __props.data) == null ? void 0 : _c.footer) == null ? void 0 : _d.twitter) || ((_f = (_e = __props.data) == null ? void 0 : _e.footer) == null ? void 0 : _f.instagram) || ((_h = (_g = __props.data) == null ? void 0 : _g.footer) == null ? void 0 : _h.pinterest)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "social-link" }, _attrs))}><h6 class="text-content">Stay connected :</h6><ul>`);
        if ((_j = (_i = __props.data) == null ? void 0 : _i.footer) == null ? void 0 : _j.facebook) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.data.footer.facebook,
            target: "_blank",
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri:facebook-fill",
                  size: "13"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ri:facebook-fill",
                    size: "13"
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
        if ((_l = (_k = __props.data) == null ? void 0 : _k.footer) == null ? void 0 : _l.twitter) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.data.footer.twitter,
            target: "_blank",
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri:twitter-fill",
                  size: "13"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ri:twitter-fill",
                    size: "13"
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
        if ((_n = (_m = __props.data) == null ? void 0 : _m.footer) == null ? void 0 : _n.instagram) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.data.footer.instagram,
            target: "_blank",
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri:instagram-fill",
                  size: "13"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ri:instagram-fill",
                    size: "13"
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
        if ((_p = (_o = __props.data) == null ? void 0 : _o.footer) == null ? void 0 : _p.pinterest) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: __props.data.footer.pinterest,
            target: "_blank",
            class: "text-content"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri:pinterest-fill",
                  size: "13"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ri:pinterest-fill",
                    size: "13"
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
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Social.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
