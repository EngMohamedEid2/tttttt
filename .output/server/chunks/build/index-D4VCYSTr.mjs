import _sfc_main$1 from './TitleHeader-s6gLc4XB.mjs';
import _sfc_main$2 from './TrackingPanel-C1wi9Gyc.mjs';
import _sfc_main$3 from './ProductTable-DMd6q2Wa.mjs';
import _sfc_main$4 from './ConsumerDetails-D8UYehTm.mjs';
import _sfc_main$5 from './SummaryDetails-DJJp0AAy.mjs';
import _sfc_main$6 from './SubOrders-Bk2WBQex.mjs';
import { i as useRoute, H as HandleRequest } from './server.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './index-DLFrQal3.mjs';
import './index-CdatWNO3.mjs';
import './index-BThYQhNe.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './date-COFsu0Eb.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const filteredOrder = ref(null);
    [__temp, __restore] = withAsyncContext(() => HandleRequest(`order`, {
      key: "getAllSingleOrder",
      params: 10
    })), __temp = await __temp, __restore();
    let { data: orderStatus } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("orderStatus", {
      key: "getorderStatus",
      params: 10
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AccountOrdersDetailsTitleHeader = _sfc_main$1;
      const _component_AccountOrdersDetailsTrackingPanel = _sfc_main$2;
      const _component_AccountOrdersDetailsProductTable = _sfc_main$3;
      const _component_AccountOrdersDetailsConsumerDetails = _sfc_main$4;
      const _component_AccountOrdersDetailsSummaryDetails = _sfc_main$5;
      const _component_AccountOrdersDetailsSubOrders = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AccountOrdersDetailsTitleHeader, { order: unref(filteredOrder) }, null, _parent));
      _push(ssrRenderComponent(_component_AccountOrdersDetailsTrackingPanel, {
        order: unref(filteredOrder),
        orderStatus: unref(orderStatus)
      }, null, _parent));
      _push(ssrRenderComponent(_component_AccountOrdersDetailsProductTable, { order: unref(filteredOrder) }, null, _parent));
      _push(`<div class="row"><div class="col-xxl-8 col-lg-12 col-md-7">`);
      _push(ssrRenderComponent(_component_AccountOrdersDetailsConsumerDetails, { order: unref(filteredOrder) }, null, _parent));
      _push(`</div><div class="col-xxl-4 col-lg-12 col-md-5">`);
      _push(ssrRenderComponent(_component_AccountOrdersDetailsSummaryDetails, { order: unref(filteredOrder) }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_AccountOrdersDetailsSubOrders, { order: unref(filteredOrder) }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
