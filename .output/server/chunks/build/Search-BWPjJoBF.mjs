import { a as useRouter, d as __nuxt_component_1 } from './server.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    let term = ref("");
    let show = ref(false);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(`<div class="input-group"><input type="search" class="form-control" placeholder="Search Hear..."${ssrRenderAttr("value", unref(term))}><button class="btn" type="button" id="button-addon2">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:search-line" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "berlin") {
        _push(`<div class="input-group"><a href="javascript:void(0)" class="btn">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:search-line" }, null, _parent));
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "classic") {
        _push(`<div class="searchbar-box-2 input-group d-xl-flex d-none"><button class="btn search-icon" type="button">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:search-line" }, null, _parent));
        _push(`</button><input type="text" class="form-control" placeholder="Search for products, styles,brands..."${ssrRenderAttr("value", unref(term))}><button class="btn search-button" type="button">Search</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "standard") {
        _push(`<div><input type="search" class="form-control" placeholder="search for product, delivered to your door..."><button class="btn search-button">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:search-line" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ open: unref(show) }, "search-full"])}"><div class="input-group"><span class="input-group-text">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "fe:search",
        class: "font-light"
      }, null, _parent));
      _push(`</span><input type="text" class="form-control search-type" placeholder="Search here.."><span class="input-group-text close-search">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent));
      _push(`</span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
