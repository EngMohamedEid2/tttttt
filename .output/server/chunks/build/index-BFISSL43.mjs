import _sfc_main$1 from './index-CdatWNO3.mjs';
import { p as publicAssetsURL, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './NavLink-DUfEGm2n.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './index-De4InbXS.mjs';
import './index-BqSnbTRI.mjs';

const _imports_0 = publicAssetsURL("/images/inner-page/cover-img.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    user: Object,
    UserInfo: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let emit = __emit;
    function closeSidebar() {
      emit("close");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_AccountSidebarNavLink = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dashboard-left-sidebar" }, _attrs))}><div class="close-button d-flex d-lg-none">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "close-sidebar",
        style: "button",
        id: "close_sidebar_btn",
        onOnClick: ($event) => closeSidebar()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-close-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-close-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="profile-box"><div class="cover-image"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="cover-img"></div><div class="profile-contain"><div class="profile-image"><div class="position-relative">`);
      if (((_a = __props.user) == null ? void 0 : _a.profile_image) && ((_c = (_b = __props.user) == null ? void 0 : _b.profile_image) == null ? void 0 : _c.original_url)) {
        _push(`<img${ssrRenderAttr("src", (_e = (_d = __props.user) == null ? void 0 : _d.profile_image) == null ? void 0 : _e.original_url)} class="update_img" alt="profile">`);
      } else {
        _push(`<div class="user-round"><h4>${ssrInterpolate((_i = (_h = (_g = (_f = __props.user) == null ? void 0 : _f.name) == null ? void 0 : _g.charAt(0)) == null ? void 0 : _h.toString()) == null ? void 0 : _i.toUpperCase())}</h4></div>`);
      }
      _push(`</div></div><div class="profile-name"><h3>${ssrInterpolate(__props.UserInfo.name)}</h3><h6 class="text-content">${ssrInterpolate(__props.UserInfo.email)}</h6></div></div></div>`);
      _push(ssrRenderComponent(_component_AccountSidebarNavLink, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Sidebar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
