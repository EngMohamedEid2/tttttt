import { t as transform } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "ConsumerDetails",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-body"><h3 class="fw-semibold mb-3">${ssrInterpolate(_ctx.$t("Consumer Details"))}</h3><div class="customer-detail tracking-wrapper"><ul class="row g-3">`);
      if ((_a = __props.order) == null ? void 0 : _a.billing_address) {
        _push(`<li class="col-sm-6"><label>${ssrInterpolate(_ctx.$t("Billing Address"))}:</label><h4>${ssrInterpolate(__props.order.billing_address.street)} ${ssrInterpolate(__props.order.billing_address.city)} ${ssrInterpolate(__props.order.billing_address.state.name)} ${ssrInterpolate(__props.order.billing_address.country.name)} ${ssrInterpolate(__props.order.billing_address.pincode)} <br> ${ssrInterpolate(_ctx.$t("Phone"))} : +${ssrInterpolate(__props.order.shipping_address.country_code)} ${ssrInterpolate(__props.order.billing_address.phone)}</h4></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = __props.order) == null ? void 0 : _b.shipping_address) {
        _push(`<li class="col-sm-6"><label>${ssrInterpolate(_ctx.$t("Shipping Address"))}:</label><h4>${ssrInterpolate(__props.order.shipping_address.street)} ${ssrInterpolate(__props.order.shipping_address.city)} ${ssrInterpolate(__props.order.shipping_address.state.name)} ${ssrInterpolate(__props.order.shipping_address.country.name)} ${ssrInterpolate(__props.order.shipping_address.pincode)} <br> ${ssrInterpolate(_ctx.$t("Phone"))} : +${ssrInterpolate(__props.order.shipping_address.country_code)} ${ssrInterpolate(__props.order.shipping_address.phone)}</h4></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.order) == null ? void 0 : _c.delivery_description) {
        _push(`<li class="col-sm-6"><label>${ssrInterpolate(_ctx.$t("Delivery Slot"))}:</label><h4>${ssrInterpolate(__props.order.delivery_description)}</h4></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = __props.order) == null ? void 0 : _d.payment_method) {
        _push(`<li class="col-sm-3"><label>${ssrInterpolate(_ctx.$t("Payment Mode"))}:</label><div class="d-flex align-items-center gap-2"><h4>${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(__props.order.payment_method))}</h4></div></li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_e = __props.order) == null ? void 0 : _e.payment_method) {
        _push(`<li class="col-sm-3"><label>${ssrInterpolate(_ctx.$t("Payment Status"))}:</label><div class="d-flex align-items-center gap-2"><h4>${ssrInterpolate(__props.order.payment_status)}</h4></div></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/ConsumerDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
