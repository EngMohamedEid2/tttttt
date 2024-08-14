import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { ref, watch, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { H as HandleRequest } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "Pages",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    let props = __props;
    const filteredPages = ref([]);
    watch(data, () => {
      fetchFilteredPages();
    });
    const fetchFilteredPages = () => {
      var _a, _b;
      let { data: pages } = HandleRequest(`page`, { key: `GetAllpages` });
      const ids = (_b = (_a = props.data.value) == null ? void 0 : _a.footer) == null ? void 0 : _b.footer_pages;
      if (Array.isArray(ids)) {
        filteredPages.value = pages.value.data.filter((page) => ids.includes(page.id));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(unref(filteredPages), (page) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/pages/${page.slug}`,
          class: "text-content"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(page == null ? void 0 : page.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(page == null ? void 0 : page.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Pages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
