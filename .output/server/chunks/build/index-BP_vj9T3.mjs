import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { k as useCurrencyStore, H as HandleRequest, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-DORLaeSS.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { ref, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  async setup(__props) {
    let __temp, __restore;
    let store = useCurrencyStore();
    store.allCurrency();
    let paramOrder = ref({ page: 1, paginate: 10 });
    let { data: order, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("order", {
      key: "getAllOrdrsData",
      params: paramOrder
    })), __temp = await __temp, __restore(), __temp);
    const ChangePage = ({ toPage }) => {
      paramOrder.value.page = toPage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsPagination = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      _push(`<!--[--><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("My Orders"))}</h5></div></div>`);
      if ((_b = (_a = unref(order)) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
        _push(`<div class="total-box mt-0"><div class="wallet-table mt-0"><div class="table-responsive"><table><tbody><tr><th>${ssrInterpolate(_ctx.$t("No"))}</th><th>${ssrInterpolate(_ctx.$t("Order Number"))}</th><th>${ssrInterpolate(_ctx.$t("Date"))}</th><th>${ssrInterpolate(_ctx.$t("Amount"))}</th><th>${ssrInterpolate(_ctx.$t("Payment Status"))}</th><th>${ssrInterpolate(_ctx.$t("Payment Method"))}</th><th>${ssrInterpolate(_ctx.$t("Option"))}</th></tr><!--[-->`);
        ssrRenderList((_c = unref(order)) == null ? void 0 : _c.data, (order2, index) => {
          var _a2, _b2;
          _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td><span class="fw-bolder">#${ssrInterpolate(order2.order_number)}</span></td><td>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(order2 == null ? void 0 : order2.created_at))}</td><td>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(order2 == null ? void 0 : order2.total)).toFixed(2))}</td><td><div class="${ssrRenderClass(`status-${(_a2 = order2 == null ? void 0 : order2.payment_status) == null ? void 0 : _a2.toLowerCase()}`)}"><span>${ssrInterpolate(order2 == null ? void 0 : order2.payment_status)}</span></div></td><td>${ssrInterpolate((_b2 = order2 == null ? void 0 : order2.payment_method) == null ? void 0 : _b2.toUpperCase())}</td><td>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/account/order/details/${order2.order_number}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "ri:eye-line",
                  size: "14"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "ri:eye-line",
                    size: "14"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
        if ((_e = (_d = unref(order)) == null ? void 0 : _d.data) == null ? void 0 : _e.length) {
          _push(`<nav class="custome-pagination">`);
          _push(ssrRenderComponent(_component_WidgetsPagination, {
            Data: unref(order),
            onChangePage: (toPage) => ChangePage({ toPage })
          }, null, _parent));
          _push(`</nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_g = (_f = unref(order)) == null ? void 0 : _f.data) == null ? void 0 : _g.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Orders Found",
          description: "No orders have been made yet"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
