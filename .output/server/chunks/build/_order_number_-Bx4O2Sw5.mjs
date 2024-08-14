import _sfc_main$1 from './index-BFISSL43.mjs';
import _sfc_main$2 from './index-D4VCYSTr.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { s as storeToRefs, f as useUserStore } from './server.mjs';
import './index-CdatWNO3.mjs';
import './NavLink-DUfEGm2n.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-De4InbXS.mjs';
import '@vueuse/components';
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
import './index-BqSnbTRI.mjs';
import './TitleHeader-s6gLc4XB.mjs';
import './index-DLFrQal3.mjs';
import './TrackingPanel-C1wi9Gyc.mjs';
import './ProductTable-DMd6q2Wa.mjs';
import './index-BThYQhNe.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './ConsumerDetails-D8UYehTm.mjs';
import './SummaryDetails-DJJp0AAy.mjs';
import './SubOrders-Bk2WBQex.mjs';
import './date-COFsu0Eb.mjs';

const _sfc_main = {
  __name: "[order_number]",
  __ssrInlineRender: true,
  setup(__props) {
    let { User, UserInfo } = storeToRefs(useUserStore());
    let user = ref(UserInfo);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountSidebar = _sfc_main$1;
      const _component_AccountOrdersDetails = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "user-dashboard-section section-b-space" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-xxl-3 col-lg-4">`);
      _push(ssrRenderComponent(_component_AccountSidebar, {
        user: unref(user),
        UserInfo: unref(UserInfo)
      }, null, _parent));
      _push(`</div><div class="col-xxl-9 col-lg-8"><button class="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show Menu</button><div class="dashboard-right-sidebar">`);
      _push(ssrRenderComponent(_component_AccountOrdersDetails, null, null, _parent));
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/order/details/[order_number].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
