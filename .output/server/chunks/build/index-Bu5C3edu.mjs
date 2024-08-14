import _sfc_main$1 from './index-BaVrQBsA.mjs';
import _sfc_main$2 from './index-CZfYNbBU.mjs';
import { ref, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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
import './index-DORLaeSS.mjs';
import './index-Bmsaf34f.mjs';
import './date-COFsu0Eb.mjs';
import './RecentPost-BhgpHgd4.mjs';
import './BlogCategory-ie-tYsh3.mjs';
import './BlogTag-J-637fqh.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    blog: Object,
    style: [String, Object],
    sidebar: String,
    filter: Object,
    themeOption: Object
  },
  setup(__props) {
    const skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 12 }, (_, index) => index);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogSkeletonBlogs = resolveComponent("BlogSkeletonBlogs");
      const _component_BlogContent = _sfc_main$1;
      const _component_BlogSidebar = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row g-4"><div class="${ssrRenderClass([{
        "order-lg-2": __props.sidebar === "left_sidebar",
        "col-xxl-12 col-xl-12 col-lg-12": __props.sidebar === "no_sidebar",
        "col-xxl-9 col-xl-8 col-lg-7": __props.sidebar !== "no_sidebar"
      }, "col-xxl-9 col-xl-8 col-lg-7"])}">`);
      if (unref(skeletonLoader)) {
        _push(`<div><div class="row g-4"><!--[-->`);
        ssrRenderList(unref(skeletonItems), (item) => {
          _push(`<div class="${ssrRenderClass(
            __props.style === "list_view" ? "col-12 list_view" : "col-xxl-4 col-sm-6"
          )}">`);
          _push(ssrRenderComponent(_component_BlogSkeletonBlogs, { type: "grid" }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(ssrRenderComponent(_component_BlogContent, {
          blog: __props.blog,
          style: __props.style,
          sidebar: __props.sidebar,
          filter: __props.filter,
          themeOption: __props.themeOption
        }, null, _parent));
      }
      _push(`</div><div class="${ssrRenderClass([{
        "order-lg-1": __props.sidebar === "left_sidebar",
        "d-none": __props.sidebar === "no_sidebar"
      }, "col-xxl-3 col-xl-4 col-lg-5"])}"><div class="left-sidebar-box">`);
      if (unref(skeletonLoader)) {
        _push(ssrRenderComponent(_component_BlogSkeletonBlogs, { type: "sidebar" }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_BlogSidebar, { blogs: __props.blog }, null, _parent));
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
