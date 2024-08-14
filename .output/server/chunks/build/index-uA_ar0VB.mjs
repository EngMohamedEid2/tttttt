import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
    image: Object,
    link: String,
    bgImage: Boolean,
    classes: String,
    saleclass: String,
    height: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_NuxtLink = __nuxt_component_0;
      if (((_b = (_a = __props.image) == null ? void 0 : _a.redirect_link) == null ? void 0 : _b.link_type) === "external_url") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.saleclass }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: (_d = (_c = __props.image) == null ? void 0 : _c.redirect_link) == null ? void 0 : _d.link,
          target: "_blank",
          class: "banner-contain d-block h-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              if (__props.bgImage) {
                _push2(`<div class="${ssrRenderClass([__props.classes, "h-100 bg-size"])}" style="${ssrRenderStyle({ "background-image": "url(" + ((_a2 = __props.image) == null ? void 0 : _a2.image_url) + ")" })}"${_scopeId}></div>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", (_b2 = __props.image) == null ? void 0 : _b2.image_url)} class="h-100 img-fluid w-100" alt="banner"${_scopeId}>`);
              }
            } else {
              return [
                __props.bgImage ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["h-100 bg-size", __props.classes],
                  style: { "background-image": "url(" + ((_c2 = __props.image) == null ? void 0 : _c2.image_url) + ")" }
                }, null, 6)) : (openBlock(), createBlock("img", {
                  key: 1,
                  src: (_d2 = __props.image) == null ? void 0 : _d2.image_url,
                  class: "h-100 img-fluid w-100",
                  alt: "banner"
                }, null, 8, ["src"]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (((_f = (_e = __props.image) == null ? void 0 : _e.redirect_link) == null ? void 0 : _f.link_type) === "collection") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.saleclass }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/collections",
            query: { category: (_h = (_g = __props.image) == null ? void 0 : _g.redirect_link) == null ? void 0 : _h.link }
          },
          class: "h-100 d-block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              if (__props.bgImage) {
                _push2(`<div class="${ssrRenderClass([__props.classes, "h-100 bg-size"])}" style="${ssrRenderStyle({ "background-image": "url(" + ((_a2 = __props.image) == null ? void 0 : _a2.image_url) + ")" })}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!__props.bgImage) {
                _push2(`<img${ssrRenderAttr("src", (_b2 = __props.image) == null ? void 0 : _b2.image_url)} class="img-fluid w-100" alt="banner"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.bgImage ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["h-100 bg-size", __props.classes],
                  style: { "background-image": "url(" + ((_c2 = __props.image) == null ? void 0 : _c2.image_url) + ")" }
                }, null, 6)) : createCommentVNode("", true),
                !__props.bgImage ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: (_d2 = __props.image) == null ? void 0 : _d2.image_url,
                  class: "img-fluid w-100",
                  alt: "banner"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (((_j = (_i = __props.image) == null ? void 0 : _i.redirect_link) == null ? void 0 : _j.link_type) === "product") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.saleclass }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "javascript:void(0)" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              if (__props.bgImage) {
                _push2(`<div class="${ssrRenderClass([__props.classes, "h-100 bg-size"])}" style="${ssrRenderStyle({ "background-image": "url(" + ((_a2 = __props.image) == null ? void 0 : _a2.image_url) + ")" })}"${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!__props.bgImage) {
                _push2(`<img${ssrRenderAttr("src", (_b2 = __props.image) == null ? void 0 : _b2.image_url)} class="h-100 img-fluid w-100" alt="banner"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.bgImage ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["h-100 bg-size", __props.classes],
                  style: { "background-image": "url(" + ((_c2 = __props.image) == null ? void 0 : _c2.image_url) + ")" }
                }, null, 6)) : createCommentVNode("", true),
                !__props.bgImage ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: (_d2 = __props.image) == null ? void 0 : _d2.image_url,
                  class: "h-100 img-fluid w-100",
                  alt: "banner"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (__props.bgImage) {
          _push(`<div class="${ssrRenderClass([__props.classes, "h-100 bg-size"])}" style="${ssrRenderStyle({ "background-image": "url(" + ((_k = __props.image) == null ? void 0 : _k.image_url) + ")" })}"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!__props.bgImage) {
          _push(`<img${ssrRenderAttr("src", __props.image.image_url)} class="h-100 img-fluid w-100" alt="banner">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ImageLink/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
