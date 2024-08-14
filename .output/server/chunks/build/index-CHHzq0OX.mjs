import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/images/cookie-bar.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const checkCookies = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["cookie-bar-box", unref(checkCookies) ? "d-none" : ""]
      }, _attrs))}><div class="cookie-box"><div class="cookie-image"><img${ssrRenderAttr("src", _imports_0)} alt=""><h2>${ssrInterpolate(_ctx.$t("Cookies"))}!</h2></div><div class="cookie-contain"><h5 class="text-content">${ssrInterpolate(_ctx.$t("We use cookies to make your experience better"))}</h5></div></div><div class="button-group"><button class="btn privacy-button">${ssrInterpolate(_ctx.$t("Privacy Policy"))}</button><button class="btn ok-button">${ssrInterpolate(_ctx.$t("OK"))}</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Cookie/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
