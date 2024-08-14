import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './index-Bu5C3edu.mjs';
import { ref, withAsyncContext, watch, unref, useSSRContext } from 'vue';
import { i as useRoute, s as storeToRefs, e as useDataStore, H as HandleRequest } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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
import './index-BaVrQBsA.mjs';
import './index-DORLaeSS.mjs';
import './index-Bmsaf34f.mjs';
import './date-COFsu0Eb.mjs';
import './index-CZfYNbBU.mjs';
import './RecentPost-BhgpHgd4.mjs';
import './BlogCategory-ie-tYsh3.mjs';
import './BlogTag-J-637fqh.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let filter = ref({
      page: 1,
      paginate: 12,
      status: 1,
      category: "",
      tag: ""
    });
    let router = useRoute();
    let style = ref("");
    let sidebar = ref("left_sidebar");
    let { ThemeOptions } = storeToRefs(useDataStore());
    let breadcrumb = ref({
      title: "Blogs"
    });
    let breadcrumbs = ref();
    let { data: blog, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("blog", {
      key: "getfilterblogs",
      params: filter.value
    })), __temp = await __temp, __restore(), __temp);
    function handleBlog() {
      var _a, _b, _c, _d, _e;
      const params = router.query;
      filter.value.category = params["category"] ? params["category"] : "";
      filter.value.tag = params["tag"] ? params["tag"] : "";
      if (params["style"]) {
        style.value = params["style"];
      }
      if (params["sidebar"]) {
        sidebar.value = params["sidebar"];
      }
      if (!params["style"] && !params["sidebar"]) {
        style.value = (_c = (_b = (_a = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _a.options) == null ? void 0 : _b.blog) == null ? void 0 : _c.blog_style;
        sidebar.value = (_e = (_d = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _d.options) == null ? void 0 : _e.blog.blog_sidebar_type;
      }
      breadcrumb.value.title = filter.value.category ? `Blogs: ${filter.value.category.replaceAll("-", " ")}` : filter.value.tag ? `Blogs: ${filter.value.tag.replaceAll("-", " ")}` : "Blogs";
      breadcrumbs.value = {
        page: breadcrumb.value.title,
        links: [{ name: "Blogs" }]
      };
    }
    watch(
      () => router.query,
      () => {
        handleBlog();
      },
      { deep: true }
    );
    console.log(useRoute().path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_Blog = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(ssrRenderComponent(_component_Blog, {
        style: unref(style),
        sidebar: unref(sidebar),
        blog: unref(blog),
        themeOption: unref(ThemeOptions).options,
        filter: unref(filter)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
