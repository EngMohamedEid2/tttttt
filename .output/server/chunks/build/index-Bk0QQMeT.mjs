import { t as transform } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkout-detail" }, _attrs))}><div class="row g-sm-4 g-3"><!--[-->`);
      ssrRenderList((_a = __props.setting) == null ? void 0 : _a.payment_methods, (payment, index) => {
        _push(`<div class="col-xxl-6">`);
        if (payment == null ? void 0 : payment.status) {
          _push(`<div class="payment-option"><div class="payment-category w-100"><div class="form-check custom-form-check hide-check-box w-100"><input class="form-check-input" type="radio" name="payment_method"${ssrIncludeBooleanAttr(index === 0) ? " checked" : ""}${ssrRenderAttr("id", payment.name)}><label class="form-check-label text-uppercase" for="{{payment.name}}">${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(payment.name))}</label></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/payment-block/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
