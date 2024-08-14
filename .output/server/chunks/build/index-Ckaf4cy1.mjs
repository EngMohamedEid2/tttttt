import { f as useUserStore, s as storeToRefs, e as useDataStore, r as useCheckoutStore, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-DiGTEq47.mjs';
import _sfc_main$2 from './index-BtaZgQ64.mjs';
import _sfc_main$3 from './index-Bk0QQMeT.mjs';
import _sfc_main$4 from './index-BUJB8xfo.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$5 from './index-BdUW6PKo.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
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
import './index-Bmsaf34f.mjs';
import './CartSummary-L2_CZhUi.mjs';
import './index-Dg95hgCG.mjs';
import './index-CdatWNO3.mjs';
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './NumberField-D_3QVr37.mjs';
import './country_code-DDslUgiY.mjs';
import './formValidator-CtAl43Qx.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore().GetUserInfo();
    let { User, UserInfo } = storeToRefs(useUserStore());
    let user = ref(UserInfo);
    let { Settings } = storeToRefs(useDataStore());
    storeToRefs(useDataStore());
    let editProfile = ref(false);
    setTimeout(() => {
      useCheckoutStore().allowApi(true);
    }, 1e3);
    function profileModal({ state = true }) {
      editProfile.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1;
      const _component_ShopCheckoutAddressBlock = _sfc_main$1;
      const _component_ShopCheckoutDeliveryBlock = _sfc_main$2;
      const _component_ShopCheckoutPaymentBlock = _sfc_main$3;
      const _component_ShopCheckoutSidebar = _sfc_main$4;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsAddressModal = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="checkout-section-2 section-b-space"><div class="container-fluid-lg"><div class="row g-sm-4 g-3"><div class="col-xxl-8 col-xl-7"><div class="left-sidebar-checkout"><div class="checkout-detail-box"><ul><li><div class="checkout-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-map-pin-line" }, null, _parent));
      _push(`</div><div class="checkout-box"><div href="javascript:void(0)" class="checkout-title"><h4>${ssrInterpolate(_ctx.$t("Shipping Address"))}</h4><a href="javascript:void(0)" class="d-flex align-items-center fw-bold">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-add-line" }, null, _parent));
      _push(` ${ssrInterpolate("Add New")}</a></div><div class="checkout-detail">`);
      _push(ssrRenderComponent(_component_ShopCheckoutAddressBlock, {
        addresses: (_a = unref(user)) == null ? void 0 : _a.address,
        type: "shipping"
      }, null, _parent));
      _push(`</div></div></li><li><div class="checkout-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-map-pin-line" }, null, _parent));
      _push(`</div><div class="checkout-box"><div href="javascript:void(0)" class="checkout-title"><h4>${ssrInterpolate(_ctx.$t("Billing Address"))}</h4><a href="javascript:void(0)" class="d-flex align-items-center fw-bold">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-add-line" }, null, _parent));
      _push(` ${ssrInterpolate(_ctx.$t("Add New"))}</a></div><div class="checkout-detail">`);
      _push(ssrRenderComponent(_component_ShopCheckoutAddressBlock, {
        addresses: (_b = unref(user)) == null ? void 0 : _b.address,
        type: "billing"
      }, null, _parent));
      _push(`</div></div></li><li><div class="checkout-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-truck-line" }, null, _parent));
      _push(`</div><div class="checkout-box"><div class="checkout-title"><h4>${ssrInterpolate(_ctx.$t("Delivery Options"))}</h4></div>`);
      if (!unref(user)) {
        _push(`<div class="empty-box"><h2>${ssrInterpolate(_ctx.$t("No Delivery Options Found"))}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ShopCheckoutDeliveryBlock, {
        setting: unref(Settings).values
      }, null, _parent));
      _push(`</div></li><li><div class="checkout-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-bank-card-line" }, null, _parent));
      _push(`</div><div class="checkout-box"><div class="checkout-title"><h4>${ssrInterpolate("Payment Options")}</h4></div>`);
      if (!unref(user)) {
        _push(`<div class="empty-box"><h2>${ssrInterpolate("No Payment Options Found")}</h2></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ShopCheckoutPaymentBlock, {
        setting: unref(Settings).values
      }, null, _parent));
      _push(`</div></li></ul></div></div></div>`);
      _push(ssrRenderComponent(_component_ShopCheckoutSidebar, null, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(editProfile),
        onClose: ($event) => profileModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsAddressModal, {
              user: unref(UserInfo),
              onClose: ($event) => profileModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsAddressModal, {
                user: unref(UserInfo),
                onClose: ($event) => profileModal({ state: false })
              }, null, 8, ["user", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
