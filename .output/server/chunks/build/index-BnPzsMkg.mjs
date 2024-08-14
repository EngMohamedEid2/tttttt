import _sfc_main$1 from './index-DNSmjjhk.mjs';
import _sfc_main$2 from './index-CovoJLFO.mjs';
import _sfc_main$3 from './index-BtkUq1-V.mjs';
import _sfc_main$4 from './index-DBRg07Qz.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { i as useRoute, a as useRouter, s as storeToRefs, e as useDataStore } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './TopHeader-BsQ4uSb-.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './TopContent-Cya12LiP.mjs';
import './Language-Dt3xNQm7.mjs';
import './index-CdatWNO3.mjs';
import '@vueuse/components';
import 'vue-i18n';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash';
import 'axios';
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';
import './NavMenuButton-B1Bu-7v1.mjs';
import './Logo-Ded94yzr.mjs';
import './Search-BWPjJoBF.mjs';
import './SearchBox-DY-EliGJ.mjs';
import './Support-7Hr7S03d.mjs';
import './index-PANIpzWL.mjs';
import './index-De4InbXS.mjs';
import './index-CNdF-Gmr.mjs';
import './MyAccount-DTotHw7b.mjs';
import './index-BqSnbTRI.mjs';
import './links-CiE55gld.mjs';
import './Category-BCctRYkb.mjs';
import './index-BMB04ZHY.mjs';
import './index-BBvJKyN0.mjs';
import './MenuList-DRskWRZM.mjs';
import './TodayDeal-BVgE3-M3.mjs';
import './index-BE1zGU45.mjs';
import './index-Bmsaf34f.mjs';
import './menu-rOt1jxMn.mjs';
import './Compare-MWqC-tfg.mjs';
import './Wishlist-b9uHKA8s.mjs';
import './cart-CFBr-x30.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    logo: String
  },
  setup(__props) {
    let style = ref("basic_header");
    let sticky = ref(true);
    useRoute();
    useRouter();
    let { ThemeOptions } = storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_HeaderBasicHeader = _sfc_main$1;
      const _component_HeaderClassicHeader = _sfc_main$2;
      const _component_HeaderStandardHeader = _sfc_main$3;
      const _component_HeaderMinimalHeader = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(style) == "basic_header") {
        _push(ssrRenderComponent(_component_HeaderBasicHeader, {
          sticky: unref(sticky),
          logo: __props.logo,
          themeOptions: (_a = unref(ThemeOptions)) == null ? void 0 : _a.options
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(style) == "classic_header") {
        _push(ssrRenderComponent(_component_HeaderClassicHeader, {
          themeOptions: (_b = unref(ThemeOptions)) == null ? void 0 : _b.options,
          sticky: unref(sticky),
          logo: __props.logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(style) == "standard_header") {
        _push(ssrRenderComponent(_component_HeaderStandardHeader, {
          themeOptions: (_c = unref(ThemeOptions)) == null ? void 0 : _c.options,
          sticky: unref(sticky),
          logo: __props.logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(style) == "minimal_header") {
        _push(ssrRenderComponent(_component_HeaderMinimalHeader, {
          themeOptions: (_d = unref(ThemeOptions)) == null ? void 0 : _d.options,
          sticky: unref(sticky),
          logo: __props.logo
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
