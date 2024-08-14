import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { r as useCheckoutStore } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    setting: Object
  },
  emits: ["selectDelivery"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    let props = __props;
    const emit = __emit;
    let selectedTitle = ref("");
    let deliveryType = ref("");
    ref("");
    let delivery_interval = ref("");
    if ((_a = props.setting) == null ? void 0 : _a.delivery) {
      let delivery = {
        delivery_description: ((_c = (_b = props.setting.delivery) == null ? void 0 : _b.default) == null ? void 0 : _c.title) + " | " + ((_e = (_d = props.setting.delivery) == null ? void 0 : _d.default) == null ? void 0 : _e.description),
        delivery_interval: delivery_interval.value
      };
      useCheckoutStore().setDeliveryDescription(((_h = (_g = (_f = props.setting) == null ? void 0 : _f.delivery) == null ? void 0 : _g.default) == null ? void 0 : _h.title) + " | " + ((_k = (_j = (_i = props.setting) == null ? void 0 : _i.delivery) == null ? void 0 : _j.default) == null ? void 0 : _k.description));
      emit("selectDelivery", delivery);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-detail" }, _attrs))}><div class="row g-4">`);
      if ((_a2 = __props.setting) == null ? void 0 : _a2.delivery) {
        _push(`<div class="col-xxl-6"><div class="delivery-option"><div class="delivery-category"><div class="shipment-detail w-100"><div class="form-check custom-form-check hide-check-box"><input class="form-check-input" type="radio" name="standard" id="standard"${ssrIncludeBooleanAttr(true) ? " checked" : ""}><label class="form-check-label" for="standard">${ssrInterpolate(__props.setting.delivery.default.title)} | ${ssrInterpolate(__props.setting.delivery.default.description)}</label></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c2 = (_b2 = __props.setting) == null ? void 0 : _b2.delivery) == null ? void 0 : _c2.same_day_delivery) {
        _push(`<div class="col-xxl-6"><div class="delivery-option"><div class="delivery-category"><div class="shipment-detail w-100"><div class="form-check mb-0 custom-form-check show-box-checked"><input class="form-check-input" type="radio" name="standard" id="future"><label class="form-check-label" for="future">${ssrInterpolate(__props.setting.delivery.same_day.title)} | ${ssrInterpolate(__props.setting.delivery.same_day.description)}</label></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_e2 = (_d2 = __props.setting) == null ? void 0 : _d2.delivery) == null ? void 0 : _e2.same_day_delivery) {
        _push(`<div class="${ssrRenderClass([{ "show": unref(deliveryType) && unref(deliveryType) == "same_day" }, "col-12 future-box"])}"><div class="future-option"><div class="delivery-items"><div><h4>${ssrInterpolate(_ctx.$t("Select Timing Slot:"))}:</h4><ul><!--[-->`);
        ssrRenderList(__props.setting.delivery.same_day_intervals, (intervals, i) => {
          _push(`<li class="${ssrRenderClass({ "active": unref(selectedTitle) == intervals.title })}"><a href="javascript:void(0)">${ssrInterpolate(intervals.description)}</a></li>`);
        });
        _push(`<!--]--></ul></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/delivery-block/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
