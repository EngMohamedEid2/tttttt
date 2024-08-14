import _sfc_main$1 from './Content-CuRKaHHO.mjs';
import { i as useRoute, H as HandleRequest } from './server.mjs';
import { ref, withAsyncContext, resolveComponent, unref, useSSRContext } from 'vue';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let route = useRoute();
    let slug = ref(route.params.slug);
    let { data, error } = ([__temp, __restore] = withAsyncContext(() => HandleRequest(`page/slug/${slug.value}`, { key: "getProductTopToSave" })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBreadCrumb = resolveComponent("CommonBreadCrumb");
      const _component_PagesContent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonBreadCrumb, {
        title: unref(slug),
        currentPage: unref(slug),
        formPage: "Pages"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PagesContent, { slug: unref(data) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
