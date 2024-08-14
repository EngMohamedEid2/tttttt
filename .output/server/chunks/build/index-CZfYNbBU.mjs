import _sfc_main$1 from './RecentPost-BhgpHgd4.mjs';
import _sfc_main$2 from './BlogCategory-ie-tYsh3.mjs';
import _sfc_main$3 from './BlogTag-J-637fqh.mjs';
import { useSSRContext } from 'vue';
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
import './index-Bmsaf34f.mjs';
import './date-COFsu0Eb.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    blogs: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_BlogSidebarRecentPost = _sfc_main$1;
      const _component_BlogSidebarBlogCategory = _sfc_main$2;
      const _component_BlogSidebarBlogTag = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="left-sidebar-box wow fadeInUp"><div class="accordion left-accordion-box" id="accordionPanelsStayOpenExample"><div class="accordion-item">`);
      _push(ssrRenderComponent(_component_BlogSidebarRecentPost, {
        blogs: (_a = __props.blogs) == null ? void 0 : _a.data
      }, null, _parent));
      _push(`</div><div class="accordion-item">`);
      _push(ssrRenderComponent(_component_BlogSidebarBlogCategory, null, null, _parent));
      _push(`</div><div class="accordion-item">`);
      _push(ssrRenderComponent(_component_BlogSidebarBlogTag, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
