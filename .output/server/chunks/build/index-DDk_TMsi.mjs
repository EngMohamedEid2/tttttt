import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { w as _sfc_main$7, d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_NuxtRating = _sfc_main$7;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "vendor-box" }, _attrs))}><div class="vendor-contain">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/seller/store/${(_a = __props.store) == null ? void 0 : _a.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
          if (_push2) {
            if ((_a2 = __props.store) == null ? void 0 : _a2.store_logo) {
              _push2(`<div class="vendor-image"${_scopeId}><img${ssrRenderAttr("src", (_c2 = (_b2 = __props.store) == null ? void 0 : _b2.store_logo) == null ? void 0 : _c2.original_url)} alt=""${_scopeId}></div>`);
            } else {
              _push2(`<h2 class="vendor-text"${_scopeId}>${ssrInterpolate((_e2 = (_d2 = __props.store) == null ? void 0 : _d2.store_name) == null ? void 0 : _e2.charAt(0).toString().toUpperCase())}</h2>`);
            }
          } else {
            return [
              ((_f2 = __props.store) == null ? void 0 : _f2.store_logo) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "vendor-image"
              }, [
                createVNode("img", {
                  src: (_h2 = (_g2 = __props.store) == null ? void 0 : _g2.store_logo) == null ? void 0 : _h2.original_url,
                  alt: ""
                }, null, 8, ["src"])
              ])) : (openBlock(), createBlock("h2", {
                key: 1,
                class: "vendor-text"
              }, toDisplayString((_j2 = (_i2 = __props.store) == null ? void 0 : _i2.store_name) == null ? void 0 : _j2.charAt(0).toString().toUpperCase()), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="vendor-name">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: `/seller/store/${(_b = __props.store) == null ? void 0 : _b.slug}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<h5 class="fw-500"${_scopeId}>${ssrInterpolate((_a2 = __props.store) == null ? void 0 : _a2.store_name)}</h5>`);
          } else {
            return [
              createVNode("h5", { class: "fw-500" }, toDisplayString((_b2 = __props.store) == null ? void 0 : _b2.store_name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="product-rating">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "read-only": true,
        ratingValue: __props.store.rating_count || 0,
        "rating-size": "25px"
      }, null, _parent));
      _push(`<span class="rating-content">(${ssrInterpolate((_c = __props.store) == null ? void 0 : _c.reviews_count)} ${ssrInterpolate(_ctx.$t("Review"))})</span></div></div></div><p class="vendor-detail">${(_d = __props.store) == null ? void 0 : _d.description}</p>`);
      if (!((_e = __props.store) == null ? void 0 : _e.hide_vendor_email) && !((_f = __props.store) == null ? void 0 : _f.hide_vendor_email)) {
        _push(`<div class="vendor-list"><ul>`);
        if (!((_g = __props.store) == null ? void 0 : _g.hide_vendor_phone)) {
          _push(`<li><div class="address-contact">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri-smartphone-line" }, null, _parent));
          _push(`<h5>${ssrInterpolate(_ctx.$t("Contact"))}: <span class="text-content">+${ssrInterpolate((_i = (_h = __props.store) == null ? void 0 : _h.vendor) == null ? void 0 : _i.country_code)} ${ssrInterpolate((_k = (_j = __props.store) == null ? void 0 : _j.vendor) == null ? void 0 : _k.phone)}</span></h5></div></li>`);
        } else {
          _push(`<!---->`);
        }
        if (!((_l = __props.store) == null ? void 0 : _l.hide_vendor_email)) {
          _push(`<li><div class="address-contact">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri-mail-line" }, null, _parent));
          _push(`<h5>${ssrInterpolate(_ctx.$t("Email"))}: <span class="text-content">${ssrInterpolate((_n = (_m = __props.store) == null ? void 0 : _m.vendor) == null ? void 0 : _n.email)}</span></h5></div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/StoreInformation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
