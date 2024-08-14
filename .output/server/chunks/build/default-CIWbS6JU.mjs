import _sfc_main$1 from './index-Dg95hgCG.mjs';
import _sfc_main$2 from './index-BnPzsMkg.mjs';
import _sfc_main$3 from './index-DJ1Vkv4g.mjs';
import _sfc_main$4 from './index-0WWInS6M.mjs';
import _sfc_main$5 from './index-CHHzq0OX.mjs';
import _sfc_main$6 from './index-BR2GCeEN.mjs';
import _sfc_main$7 from './index-C-XU1qPo.mjs';
import _sfc_main$8 from './index-C3qA-KXk.mjs';
import _sfc_main$9 from './index-DM5_HaAX.mjs';
import _sfc_main$a from './index-BXRY-lbz.mjs';
import _sfc_main$b from './index-BF6SAdZD.mjs';
import _sfc_main$c from './index-DfH-Qiyu.mjs';
import { ref, watch, unref, useSSRContext } from 'vue';
import { i as useRoute, a as useRouter, e as useDataStore, s as storeToRefs } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import './index-DNSmjjhk.mjs';
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
import './index-CovoJLFO.mjs';
import './Compare-MWqC-tfg.mjs';
import './Wishlist-b9uHKA8s.mjs';
import './index-BtkUq1-V.mjs';
import './index-DBRg07Qz.mjs';
import './cart-CFBr-x30.mjs';
import './Logo-DkacPCPW.mjs';
import './About-CqnpUXIg.mjs';
import './Category-BBpcVzL5.mjs';
import './Links-DKmRfa4B.mjs';
import './Cantact-CNsFhL98.mjs';
import './Social-B5uxyuhT.mjs';
import './compare-CJlobl4e.mjs';
import './virtual_public-B7AuSzxX.mjs';
import 'js-cookie';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let loading = ref(false);
    const route = useRoute();
    const router = useRouter();
    useDataStore().GetProduct();
    useDataStore().GetCategory();
    useDataStore().GetThemeoption();
    useDataStore().GetNotifications();
    useDataStore().GetSettings();
    let { ThemeOptions } = storeToRefs(useDataStore());
    function setLogo() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      var headerLogo;
      var footerLogo;
      var footerClass;
      if (route.path == "/theme/paris" || route.path == "/theme/osaka") {
        headerLogo = "/images/logo/1.png";
        footerLogo = "/images/logo/1.png";
      } else if (route.path == "/theme/tokyo") {
        headerLogo = "/images/logo/2.png";
        footerLogo = "/images/logo/2.png";
      } else if (route.path == "/theme/rome") {
        headerLogo = "/images/logo/3.png";
        footerLogo = "/images/logo/3.png";
      } else if (route.path == "/theme/madrid") {
        headerLogo = "/images/logo/4.png";
        footerLogo = "/images/logo/4.png";
        footerClass = "footer-section-2 footer-color-2";
      } else if (route.path == "/theme/berlin" || route.path == "/theme/denver") {
        headerLogo = "/images/logo/6.png";
        footerLogo = "/images/logo/4.png";
        footerClass = "footer-section-2 footer-color-3";
      } else {
        headerLogo = (_d = (_c = (_b = (_a = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _a.options) == null ? void 0 : _b.logo) == null ? void 0 : _c.header_logo) == null ? void 0 : _d.original_url;
        footerLogo = (_h = (_g = (_f = (_e = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _e.options) == null ? void 0 : _f.logo) == null ? void 0 : _g.footer_logo) == null ? void 0 : _h.original_url;
        footerClass = ((_k = (_j = (_i = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _i.options) == null ? void 0 : _j.footer) == null ? void 0 : _k.footer_style) === "dark_mode" ? "footer-section-2 footer-color-3" : "";
      }
      return {
        header_logo: headerLogo,
        footer: { footer_logo: footerLogo, footer_class: footerClass }
      };
    }
    watch(
      () => router,
      () => {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
        }, 4e3);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_WidgetsLoader = _sfc_main$1;
      const _component_Header = _sfc_main$2;
      const _component_WidgetsMobileCart = _sfc_main$3;
      const _component_Footer = _sfc_main$4;
      const _component_WidgetsCookie = _sfc_main$5;
      const _component_WidgetsRecentlyPurchasePoppup = _sfc_main$6;
      const _component_WidgetsStickyCart = _sfc_main$7;
      const _component_WidgetsStickyCompare = _sfc_main$8;
      const _component_WidgetsThemeCustomizer = _sfc_main$9;
      const _component_WidgetsBackToTop = _sfc_main$a;
      const _component_WidgetsModalsNewsletterModal = _sfc_main$b;
      const _component_WidgetsModalsExitModal = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_WidgetsLoader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Header, {
        logo: setLogo().header_logo
      }, null, _parent));
      _push(ssrRenderComponent(_component_WidgetsMobileCart, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, {
        footer: setLogo().footer
      }, null, _parent));
      _push(ssrRenderComponent(_component_WidgetsCookie, null, null, _parent));
      _push(ssrRenderComponent(_component_WidgetsRecentlyPurchasePoppup, null, null, _parent));
      if (((_c = (_b = (_a = unref(ThemeOptions)) == null ? void 0 : _a.options) == null ? void 0 : _b.general) == null ? void 0 : _c.cart_style) == "cart_mini") {
        _push(ssrRenderComponent(_component_WidgetsStickyCart, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsStickyCompare, null, null, _parent));
      _push(`<div class="theme-option">`);
      _push(ssrRenderComponent(_component_WidgetsThemeCustomizer, null, null, _parent));
      if ((_f = (_e = (_d = unref(ThemeOptions)) == null ? void 0 : _d.options) == null ? void 0 : _e.general) == null ? void 0 : _f.back_to_top_enable) {
        _push(ssrRenderComponent(_component_WidgetsBackToTop, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsNewsletterModal, null, null, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsExitModal, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
