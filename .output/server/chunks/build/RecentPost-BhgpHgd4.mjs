import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { withCtx, createVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "RecentPost",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_WidgetsNoData = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><h2 class="accordion-header" id="panelsStayOpen-headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne">${ssrInterpolate(_ctx.$t("Recent Post"))}</button></h2><div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"><div class="accordion-body pt-0"><div class="recent-post-box"><!--[-->`);
      ssrRenderList((_a = __props.blogs) == null ? void 0 : _a.slice(1, 5), (blog) => {
        _push(`<div class="recent-box">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${blog == null ? void 0 : blog.slug}`,
          class: "recent-image"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", (_a2 = blog == null ? void 0 : blog.blog_thumbnail) == null ? void 0 : _a2.original_url)} class="bg-fluid"${ssrRenderAttr("alt", blog == null ? void 0 : blog.title)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: (_b2 = blog == null ? void 0 : blog.blog_thumbnail) == null ? void 0 : _b2.original_url,
                  class: "bg-fluid",
                  alt: blog == null ? void 0 : blog.title
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="recent-detail">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/blog/${blog == null ? void 0 : blog.slug}`,
          class: "recent-image"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h5 class="recent-name"${_scopeId}>${ssrInterpolate(blog == null ? void 0 : blog.title)}</h5><h6${_scopeId}>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(blog.created_at))}</h6>`);
            } else {
              return [
                createVNode("h5", { class: "recent-name" }, toDisplayString(blog == null ? void 0 : blog.title), 1),
                createVNode("h6", null, toDisplayString(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(blog.created_at)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (!((_b = __props.blogs) == null ? void 0 : _b.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added bg-light",
          text: "No Blog Found"
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/sidebar/RecentPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
