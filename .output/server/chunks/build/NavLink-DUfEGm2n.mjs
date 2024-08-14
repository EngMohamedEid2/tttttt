import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { i as useRoute, s as storeToRefs, e as useDataStore, f as useUserStore, d as __nuxt_component_1 } from './server.mjs';
import __nuxt_component_0$1 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-BqSnbTRI.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "NavLink",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    let route = useRoute();
    let modals = ref({ logout: false });
    let unreadNotificationCount = ref();
    let { Notification } = storeToRefs(useDataStore());
    async function toggleModal({ state = true }) {
      modals.value.logout = state;
    }
    unreadNotificationCount.value = (_c = (_b = (_a = Notification == null ? void 0 : Notification.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((item) => !item.read_at)) == null ? void 0 : _c.length;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsModalsCommon = __nuxt_component_0$1;
      const _component_WidgetsModalsConfrmationModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><ul class="nav nav-pills user-nav-pills" id="pills-tab" role="tablist"><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/dashboard" ? "active" : ""],
        to: "/account/dashboard"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-home-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Dashboard"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-home-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/notifications" ? "active" : ""],
        to: "/account/notifications"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-notification-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Notification"))} `);
            if (unref(unreadNotificationCount)) {
              _push2(`<span class="notification-count"${_scopeId}>${ssrInterpolate(unref(unreadNotificationCount))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-notification-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Notification")) + " ", 1),
              unref(unreadNotificationCount) ? (openBlock(), createBlock("span", {
                key: 0,
                class: "notification-count"
              }, toDisplayString(unref(unreadNotificationCount)), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/bank-details" ? "active" : ""],
        to: "/account/bank-details"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-bank-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Bank Details"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-bank-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Bank Details")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/wallet" ? "active" : ""],
        to: "/account/wallet"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-wallet-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("My Wallet"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-wallet-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("My Wallet")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/point" ? "active" : ""],
        to: "/account/point"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-coin-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Earning Points"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-coin-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Earning Points")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/order" ? "active" : ""],
        to: "/account/order"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-file-text-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("My Orders"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-file-text-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("My Orders")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/refund" ? "active" : ""],
        to: "/account/refund"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-money-dollar-circle-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Refund History"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-money-dollar-circle-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Refund History")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" role="presentation">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: ["nav-link", unref(route).fullPath == "/account/addresses" ? "active" : ""],
        to: "/account/addresses"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-map-pin-line" }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("Saved Address"))}`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-map-pin-line" }),
              createTextVNode(" " + toDisplayString(_ctx.$t("Saved Address")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item logout-cls" role="presentation"><a href="javascript:void(0)" class="btn gap-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-logout-box-r-line" }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("Logout"))}</a></li></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Sidebar/NavLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
