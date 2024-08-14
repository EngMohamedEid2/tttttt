import _sfc_main$1 from './index-CZfYNbBU.mjs';
import { H as HandleRequest, d as __nuxt_component_1 } from './server.mjs';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './RecentPost-BhgpHgd4.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-Bmsaf34f.mjs';
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
import './BlogCategory-ie-tYsh3.mjs';
import './BlogTag-J-637fqh.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    BlogData: Object
  },
  async setup(__props) {
    let __temp, __restore;
    let paramsBlog = { satus: 1, type: "post", pagination: 5 };
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("blog", {
      key: "getAllHomesInPage",
      params: paramsBlog
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_BlogSidebar = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row g-sm-4 g-3"><div class="${ssrRenderClass([{
        "order-lg-1": _ctx.sidebar === "right_sidebar",
        "d-none": _ctx.sidebar === "no_sidebar"
      }, "col-xxl-3 col-xl-4 col-lg-5 d-lg-block d-none"])}">`);
      _push(ssrRenderComponent(_component_BlogSidebar, { blogs: unref(data) }, null, _parent));
      _push(`</div><div class="col-xxl-9 col-xl-8 col-lg-7 ratio_50"><div class="blog-detail-image rounded-3 mb-4 bg-size" style="${ssrRenderStyle({
        "background-image": "url(" + ((_b = (_a = __props.BlogData) == null ? void 0 : _a.blog_thumbnail) == null ? void 0 : _b.original_url) + ")"
      })}"><img${ssrRenderAttr("src", (_d = (_c = __props.BlogData) == null ? void 0 : _c.blog_thumbnail) == null ? void 0 : _d.original_url)} class="bg-img img-fluid" alt=""><div class="blog-image-contain"><h2>${ssrInterpolate((_e = __props.BlogData) == null ? void 0 : _e.title)}</h2><ul class="contain-comment-list"><li><div class="user-list">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:user-line",
        size: "18"
      }, null, _parent));
      _push(`<span>${ssrInterpolate((_g = (_f = __props.BlogData) == null ? void 0 : _f.created_by) == null ? void 0 : _g.name)}</span></div></li><li><div class="user-list">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ri:time-line",
        size: "18"
      }, null, _parent));
      _push(`<span>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))((_h = __props.BlogData) == null ? void 0 : _h.created_at))}</span></div></li></ul></div></div><div class="blog-detail-contain ckeditor-content">${(_i = __props.BlogData) == null ? void 0 : _i.content}</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
