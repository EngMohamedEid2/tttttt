import _sfc_main$1 from './NavMenuButton-B1Bu-7v1.mjs';
import _sfc_main$2 from './Logo-Ded94yzr.mjs';
import _sfc_main$3 from './Search-BWPjJoBF.mjs';
import _sfc_main$4 from './Support-7Hr7S03d.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$5 from './MenuList-DRskWRZM.mjs';
import _sfc_main$6 from './SearchBox-DY-EliGJ.mjs';
import _sfc_main$7 from './Compare-MWqC-tfg.mjs';
import _sfc_main$8 from './Wishlist-b9uHKA8s.mjs';
import _sfc_main$9 from './index-PANIpzWL.mjs';
import _sfc_main$a from './MyAccount-DTotHw7b.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { M as Menu } from './menu-rOt1jxMn.mjs';
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
import './nuxt-link-D35ckuRb.mjs';
import './links-CiE55gld.mjs';
import './index-CdatWNO3.mjs';
import './index-De4InbXS.mjs';
import './index-CNdF-Gmr.mjs';
import './index-BqSnbTRI.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object,
    logo: String,
    sticky: Boolean
  },
  setup(__props, { emit: __emit }) {
    let stick = ref(false);
    let active = ref(false);
    function toggle(val) {
      active.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderElementsNavMenuButton = _sfc_main$1;
      const _component_HeaderElementsLogo = _sfc_main$2;
      const _component_HeaderElementsSearch = _sfc_main$3;
      const _component_HeaderElementsSupport = _sfc_main$4;
      const _component_Icon = __nuxt_component_1;
      const _component_HeaderElementsMenuList = _sfc_main$5;
      const _component_HeaderElementsSearchBox = _sfc_main$6;
      const _component_HeaderElementsCompare = _sfc_main$7;
      const _component_HeaderElementsWishlist = _sfc_main$8;
      const _component_HeaderElementsCarts = _sfc_main$9;
      const _component_HeaderElementsMyAccount = _sfc_main$a;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header-3", { "active": unref(stick) && __props.sticky }]
      }, _attrs))}><div class="top-nav sticky-header sticky-header-2"><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="navbar-top">`);
      _push(ssrRenderComponent(_component_HeaderElementsNavMenuButton, {
        onActiveMenu: ($event) => toggle($event),
        show: unref(active)
      }, null, _parent));
      _push(ssrRenderComponent(_component_HeaderElementsLogo, {
        themeOptions: __props.themeOptions,
        textClass: "txt-theme f-w-600",
        logo: __props.logo
      }, null, _parent));
      _push(`<div class="middle-box"><div class="center-box">`);
      _push(ssrRenderComponent(_component_HeaderElementsSearch, { style: "classic" }, null, _parent));
      _push(`</div></div><div class="rightside-menu support-sidemenu">`);
      _push(ssrRenderComponent(_component_HeaderElementsSupport, {
        themeOptions: __props.themeOptions,
        style: "classic"
      }, null, _parent));
      _push(`</div></div></div></div></div></div><div class="container-fluid-lg"><div class="row"><div class="col-12 position-relative"><div class="main-nav nav-left-align"><div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky"><div id="primaryMenu" class="${ssrRenderClass([{ show: unref(active) }, "offcanvas offcanvas-collapse order-xl-2"])}"><div class="offcanvas-header navbar-shadow"><h5>${ssrInterpolate(_ctx.$t("Menu"))}</h5><button${ssrRenderAttr("type", "button")}${ssrRenderAttr("id", "toggle_menu_btn")} class="${ssrRenderClass("btn-close lead")}">`);
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
      _push(`<!--]--></ul></div></div></div><div class="rightside-menu"><ul class="option-list-2"><li>`);
      _push(ssrRenderComponent(_component_HeaderElementsSearchBox, { style: "classic" }, null, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_HeaderElementsCompare, null, null, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_HeaderElementsWishlist, { style: "classic" }, null, _parent));
      _push(`</li><li class="onhover-dropdown">`);
      _push(ssrRenderComponent(_component_HeaderElementsCarts, { style: "classic" }, null, _parent));
      _push(`</li></ul>`);
      _push(ssrRenderComponent(_component_HeaderElementsMyAccount, { style: "classic" }, null, _parent));
      _push(`</div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/ClassicHeader/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
