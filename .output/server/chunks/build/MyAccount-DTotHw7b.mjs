import { f as useUserStore, s as storeToRefs, d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import __nuxt_component_0$1 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-BqSnbTRI.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { N as NavigationLinks } from './links-CiE55gld.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
import './index-CdatWNO3.mjs';

const _sfc_main = {
  __name: "MyAccount",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    useUserStore().setDefaultUser();
    let modals = ref({ logout: false });
    let { User, UserInfo } = storeToRefs(useUserStore());
    async function toggleModal({ state = true }) {
      modals.value.logout = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      const _component_Icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_WidgetsModalsCommon = __nuxt_component_0$1;
      const _component_WidgetsModalsConfrmationModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(`<div><div class="delivery-login-box"><div class="delivery-icon">`);
        if (!unref(User).isLoggedIn) {
          _push(ssrRenderComponent(_component_Icon, { name: "ri:user-3-line" }, null, _parent));
        } else {
          _push(`<div class="user-box">`);
          if ((_b = (_a = unref(useUserStore)().UserInfo) == null ? void 0 : _a.profile_image) == null ? void 0 : _b.original_url) {
            _push(`<img${ssrRenderAttr("src", (_d = (_c = unref(useUserStore)().UserInfo) == null ? void 0 : _c.profile_image) == null ? void 0 : _d.original_url)} class="img-fluid" alt="profile" width="50" height="50">`);
          } else {
            _push(`<h3>${ssrInterpolate((_h = (_g = (_f = (_e = unref(useUserStore)().UserInfo) == null ? void 0 : _e.name) == null ? void 0 : _f.charAt(0)) == null ? void 0 : _g.toString()) == null ? void 0 : _h.toUpperCase())}</h3>`);
          }
          _push(`</div>`);
        }
        _push(`</div><div class="delivery-detail">`);
        if ((_i = unref(UserInfo)) == null ? void 0 : _i.name) {
          _push(`<h6>${ssrInterpolate(_ctx.$t("Hi"))},${ssrInterpolate((_j = unref(UserInfo)) == null ? void 0 : _j.name)}</h6>`);
        } else {
          _push(`<h6>${ssrInterpolate(_ctx.$t("Hi , User"))}</h6>`);
        }
        _push(`<h5>${ssrInterpolate(_ctx.$t("My Account"))}</h5></div></div><div class="onhover-div onhover-div-login"><ul class="user-box-name" style="${ssrRenderStyle(unref(User).isLoggedIn == false ? null : { display: "none" })}"><li class="product-box-contain">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_k = "NavigationLinks" in _ctx ? _ctx.NavigationLinks : unref(NavigationLinks)) == null ? void 0 : _k.login
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Log In"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Log In")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="product-box-contain">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: (_l = "NavigationLinks" in _ctx ? _ctx.NavigationLinks : unref(NavigationLinks)) == null ? void 0 : _l.signUp
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Register"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Register")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul><ul class="user-box-name" style="${ssrRenderStyle(unref(User).isLoggedIn ? null : { display: "none" })}"><li class="product-box-contain">`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/account/dashboard" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ri:user-3-line",
                class: "me-2"
              }, null, _parent2, _scopeId));
              _push2(`${ssrInterpolate(_ctx.$t("My Account"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ri:user-3-line",
                  class: "me-2"
                }),
                createTextVNode(toDisplayString(_ctx.$t("My Account")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="product-box-contain"><a href="#">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:logout-box-r-line",
          class: "me-2"
        }, null, _parent));
        _push(`${ssrInterpolate(_ctx.$t("Logout"))}</a></li></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "classic") {
        _push(`<a href="javascript:void(0)" class="user-box"><span class="header-icon">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:user-line" }, null, _parent));
        _push(`</span><div class="user-name"><h6 class="text-content">${ssrInterpolate(_ctx.$t("My Account"))}</h6><h4 class="mt-1">${ssrInterpolate(((_m = unref(User)) == null ? void 0 : _m.isLoggedIn) ? (_n = unref(UserInfo)) == null ? void 0 : _n.name : "User")}</h4></div></a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "standard") {
        _push(`<a href="javascript:void(0)" class="header-icon user-icon search-icon">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri-user-line" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(modals).logout,
        onClose: ($event) => toggleModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsConfrmationModal, {
              onClose: ($event) => toggleModal({ state: false }),
              onConfirm: ($event) => unref(useUserStore)().LogoutUser()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsConfrmationModal, {
                onClose: ($event) => toggleModal({ state: false }),
                onConfirm: ($event) => unref(useUserStore)().LogoutUser()
              }, null, 8, ["onClose", "onConfirm"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/MyAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
