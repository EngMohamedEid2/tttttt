import _sfc_main$1 from './TopHeader-BsQ4uSb-.mjs';
import _sfc_main$2 from './NavMenuButton-B1Bu-7v1.mjs';
import _sfc_main$3 from './Logo-Ded94yzr.mjs';
import _sfc_main$4 from './Search-BWPjJoBF.mjs';
import _sfc_main$5 from './SearchBox-DY-EliGJ.mjs';
import _sfc_main$6 from './Support-7Hr7S03d.mjs';
import _sfc_main$7 from './index-PANIpzWL.mjs';
import _sfc_main$8 from './MyAccount-DTotHw7b.mjs';
import _sfc_main$9 from './Category-BCctRYkb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$a from './MenuList-DRskWRZM.mjs';
import _sfc_main$b from './TodayDeal-BVgE3-M3.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { M as Menu } from './menu-rOt1jxMn.mjs';
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
import './index-De4InbXS.mjs';
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
import './index-CNdF-Gmr.mjs';
import './index-BqSnbTRI.mjs';
import './links-CiE55gld.mjs';
import './index-BMB04ZHY.mjs';
import './index-BBvJKyN0.mjs';
import './index-BE1zGU45.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object,
    logo: String,
    sticky: Boolean
  },
  setup(__props) {
    let stick = ref(false);
    let active = ref(false);
    function toggle(value) {
      active.value = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_HeaderElementsTopHeader = _sfc_main$1;
      const _component_HeaderElementsNavMenuButton = _sfc_main$2;
      const _component_HeaderElementsLogo = _sfc_main$3;
      const _component_HeaderElementsSearch = _sfc_main$4;
      const _component_HeaderElementsSearchBox = _sfc_main$5;
      const _component_HeaderElementsSupport = _sfc_main$6;
      const _component_HeaderElementsCarts = _sfc_main$7;
      const _component_HeaderElementsMyAccount = _sfc_main$8;
      const _component_HeaderElementsCategory = _sfc_main$9;
      const _component_Icon = __nuxt_component_1;
      const _component_HeaderElementsMenuList = _sfc_main$a;
      const _component_HeaderElementsTodayDeal = _sfc_main$b;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["pb-md-4 pb-0", { active: unref(stick) && __props.sticky }]
      }, _attrs))}>`);
      if ((_b = (_a = __props.themeOptions) == null ? void 0 : _a.header) == null ? void 0 : _b.page_top_bar_enable) {
        _push(ssrRenderComponent(_component_HeaderElementsTopHeader, { themeOptions: __props.themeOptions }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="top-nav top-header sticky-header"><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="navbar-top"><div class="d-xl-none d-inline-flex">`);
      _push(ssrRenderComponent(_component_HeaderElementsNavMenuButton, {
        onActiveMenu: ($event) => toggle($event),
        show: unref(active)
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_HeaderElementsLogo, {
        themeOptions: __props.themeOptions,
        textClass: "txt-theme f-w-600",
        logo: __props.logo
      }, null, _parent));
      _push(`<div class="middle-box"><div class="search-box">`);
      _push(ssrRenderComponent(_component_HeaderElementsSearch, null, null, _parent));
      _push(`</div></div><div class="rightside-box"><ul class="right-side-menu"><li class="right-side">`);
      _push(ssrRenderComponent(_component_HeaderElementsSearchBox, null, null, _parent));
      _push(`</li>`);
      if ((_d = (_c = __props.themeOptions) == null ? void 0 : _c.header) == null ? void 0 : _d.support_number) {
        _push(`<li class="right-side">`);
        _push(ssrRenderComponent(_component_HeaderElementsSupport, { themeOptions: __props.themeOptions }, null, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="right-side"><div class="onhover-dropdown header-badge">`);
      _push(ssrRenderComponent(_component_HeaderElementsCarts, null, null, _parent));
      _push(`</div></li><li class="right-side onhover-dropdown">`);
      _push(ssrRenderComponent(_component_HeaderElementsMyAccount, null, null, _parent));
      _push(`</li></ul></div></div></div></div></div></div><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="header-nav"><div class="header-nav-left">`);
      _push(ssrRenderComponent(_component_HeaderElementsCategory, { data: __props.themeOptions }, null, _parent));
      _push(`</div><div class="header-nav-middle"><div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky"><div id="primaryMenu" class="${ssrRenderClass([{ show: unref(active) }, "offcanvas offcanvas-collapse order-xl-2"])}"><div class="offcanvas-header navbar-shadow"><h5>${ssrInterpolate(_ctx.$t("Menu"))}</h5><button${ssrRenderAttr("type", "button")}${ssrRenderAttr("id", "toggle_menu_btn")} class="${ssrRenderClass("btn-close lead")}">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:close-fill" }, null, _parent));
      _push(`</button></div><div class="offcanvas-body"><ul class="navbar-nav"><!--[-->`);
      ssrRenderList(unref(Menu), (menu, index) => {
        _push(`<li class="${ssrRenderClass([
          menu.type == "sub" && menu.children ? "nav-item dropdown" : "nav-item",
          menu.megaMenu ? "dropdown-mega" : "",
          { "new-nav-item": menu.badge }
        ])}">`);
        _push(ssrRenderComponent(_component_HeaderElementsMenuList, {
          show: true,
          menu
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      if (unref(active)) {
        _push(`<div class="${ssrRenderClass([{ show: unref(active) }, "offcanvas-backdrop"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if ((_f = (_e = __props.themeOptions) == null ? void 0 : _e.header) == null ? void 0 : _f.today_deals.length) {
        _push(`<div class="header-nav-right">`);
        _push(ssrRenderComponent(_component_HeaderElementsTodayDeal, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/BasicHeader/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
