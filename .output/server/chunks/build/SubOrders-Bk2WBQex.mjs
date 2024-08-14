import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { k as useCurrencyStore, t as transform, d as __nuxt_component_1 } from './server.mjs';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "SubOrders",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      if ((_b = (_a = __props.order) == null ? void 0 : _a.sub_orders) == null ? void 0 : _b.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="card-body"><div class="tracking-wrapper table-responsive"><table class="table product-table"><thead><tr><th scope="col">${ssrInterpolate(_ctx.$t("Order Number"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Order Date"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Total Amount"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Status"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Action"))}</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.order.sub_orders, (subOrder, index) => {
          _push(`<tr><td><h6>${ssrInterpolate("#" + subOrder.order_number)}</h6></td><td><h6>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(subOrder.created_at))}</h6></td><td><h6>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(subOrder.amount)).toFixed(2))}</h6></td><td><h6><div class="${ssrRenderClass(`status-${subOrder.order_status.slug}`)}"><span>${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(subOrder.order_status.name))}</span></div></h6></td><td>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            href: "javascript:void(0)",
            to: `/account/order/details/${subOrder.order_number}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "ri-eye-line" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "ri-eye-line" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/SubOrders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
