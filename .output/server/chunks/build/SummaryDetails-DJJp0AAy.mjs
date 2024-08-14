import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { k as useCurrencyStore } from './server.mjs';
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
  __name: "SummaryDetails",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card h-m30" }, _attrs))}><div class="card-body"><h3 class="fw-semibold mb-3">${ssrInterpolate(_ctx.$t("Summary"))}</h3><div class="tracking-total tracking-wrapper"><ul><li>${ssrInterpolate(_ctx.$t("Subtotal"))} <span>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(((_a = __props.order) == null ? void 0 : _a.amount) ? (_b = __props.order) == null ? void 0 : _b.amount : 0)).toFixed(2))}</span></li><li>${ssrInterpolate(_ctx.$t("Shipping"))} <span>${ssrInterpolate((_c = unref(store)) == null ? void 0 : _c.currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(((_d = __props.order) == null ? void 0 : _d.shipping_total) ? (_e = __props.order) == null ? void 0 : _e.shipping_total : 0)).toFixed(2))}</span></li><li>${ssrInterpolate(_ctx.$t("Tax"))} <span>${ssrInterpolate((_f = unref(store)) == null ? void 0 : _f.currency.symbol)} ${ssrInterpolate(Number((_i = unref(store)) == null ? void 0 : _i.convertCurrency(((_g = __props.order) == null ? void 0 : _g.tax_total) ? (_h = __props.order) == null ? void 0 : _h.tax_total : 0)).toFixed(2))}</span></li>`);
      if (((_j = __props.order) == null ? void 0 : _j.points_amount) != 0) {
        _push(`<li class="txt-primary fw-bold">${ssrInterpolate(_ctx.$t("Points"))} <span>${ssrInterpolate((_k = __props.order) == null ? void 0 : _k.points_amount)}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_l = __props.order) == null ? void 0 : _l.wallet_balance) != 0) {
        _push(`<li class="txt-primary fw-bold">${ssrInterpolate(_ctx.$t("Wallet Balance"))} <span>${ssrInterpolate((_n = (_m = unref(store)) == null ? void 0 : _m.currency) == null ? void 0 : _n.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((_o = __props.order) == null ? void 0 : _o.wallet_balance)).toFixed(2))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_p = __props.order) == null ? void 0 : _p.coupon_total_discount) != 0) {
        _push(`<li class="txt-primary fw-bold">${ssrInterpolate(_ctx.$t("Coupon Discount"))} <span>${ssrInterpolate((_r = (_q = unref(store)) == null ? void 0 : _q.currency) == null ? void 0 : _r.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((_s = __props.order) == null ? void 0 : _s.coupon_total_discount)).toFixed(2))}</span></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li>${ssrInterpolate(_ctx.$t("Total"))} <span>${ssrInterpolate((_u = (_t = unref(store)) == null ? void 0 : _t.currency) == null ? void 0 : _u.symbol)} ${ssrInterpolate(((_v = __props.order) == null ? void 0 : _v.total) ? __props.order.total : 0)}</span></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/SummaryDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
