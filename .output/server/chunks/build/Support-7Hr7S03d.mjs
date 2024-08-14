import { p as publicAssetsURL, d as __nuxt_component_1 } from './server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/icon/support.png");
const _imports_1 = publicAssetsURL("/images/icon/music.png");
const _sfc_main = {
  __name: "Support",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object,
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(`<a href="javascript:void(0)" class="delivery-login-box"><div class="delivery-icon">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:customer-service-line" }, null, _parent));
        _push(`</div><div class="delivery-detail"><h6>${ssrInterpolate(_ctx.$t("24/7 Support Center"))}</h6><h5>${ssrInterpolate((_b = (_a = __props.themeOptions) == null ? void 0 : _a.header) == null ? void 0 : _b.support_number)}</h5></div></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "classic") {
        _push(`<div class="support-box"><div class="support-image"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="support"></div><div class="support-number"><h2>${ssrInterpolate((_d = (_c = __props.themeOptions) == null ? void 0 : _c.header) == null ? void 0 : _d.support_number)}</h2><h4>${ssrInterpolate(_ctx.$t("24/7 Support Center"))}</h4></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "standard") {
        _push(`<div class="nav-number"><img${ssrRenderAttr("src", _imports_1)} class="img-fluid" alt=""><span>${ssrInterpolate((_f = (_e = __props.themeOptions) == null ? void 0 : _e.header) == null ? void 0 : _f.support_number)}</span></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
