import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-BThYQhNe.mjs';
import { ref, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { k as useCurrencyStore } from './server.mjs';
import '@vueuse/components';
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
import './index-CdatWNO3.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';

const _sfc_main = {
  __name: "ProductTable",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    let refund = ref(false);
    let singleProduct = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsRefundModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_b = (_a = __props.order) == null ? void 0 : _a.products) == null ? void 0 : _b.length) {
        _push(`<div class="card"><div class="card-body"><div class="tracking-wrapper table-responsive"><table class="table product-table"><thead><tr><th scope="col">${ssrInterpolate(_ctx.$t("Image"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Name"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Price"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Quantity"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Subtotal"))}</th><th scope="col">${ssrInterpolate(_ctx.$t("Refund Status"))}</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(__props.order.products, (product) => {
          var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
          _push(`<tr><td class="product-image"><img${ssrRenderAttr("src", ((_a2 = product == null ? void 0 : product.pivot) == null ? void 0 : _a2.variation) && ((_c = (_b2 = product == null ? void 0 : product.pivot) == null ? void 0 : _b2.variation) == null ? void 0 : _c.variation_image) ? (_f = (_e = (_d = product == null ? void 0 : product.pivot) == null ? void 0 : _d.variation) == null ? void 0 : _e.variation_image) == null ? void 0 : _f.original_url : (product == null ? void 0 : product.product_thumbnail) ? (_g = product == null ? void 0 : product.product_thumbnail) == null ? void 0 : _g.original_url : "/images/product.png")} class="img-fluid" alt="product"></td><td><h6>${ssrInterpolate(((_h = product == null ? void 0 : product.pivot) == null ? void 0 : _h.variation) ? (_j = (_i = product == null ? void 0 : product.pivot) == null ? void 0 : _i.variation) == null ? void 0 : _j.name : product == null ? void 0 : product.name)}</h6></td><td><h6>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((_k = product == null ? void 0 : product.pivot) == null ? void 0 : _k.single_price)).toFixed(2))}</h6></td><td><h6>${ssrInterpolate((_l = product == null ? void 0 : product.pivot) == null ? void 0 : _l.quantity)}</h6></td><td><h6>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((_m = product == null ? void 0 : product.pivot) == null ? void 0 : _m.subtotal)).toFixed(2))}</h6></td><td>`);
          if ((product == null ? void 0 : product.is_return) === 1 && ((_n = __props.order) == null ? void 0 : _n.payment_status) && ((_o = __props.order) == null ? void 0 : _o.payment_status) === "COMPLETED" && __props.order.order_status && __props.order.order_status.slug == "delivered" && !((_p = product == null ? void 0 : product.pivot) == null ? void 0 : _p.refund_status)) {
            _push(`<a href="javascript:void(0)">${ssrInterpolate(_ctx.$t("Ask For Refund"))}</a>`);
          } else {
            _push(`<span>`);
            if ((_q = product == null ? void 0 : product.pivot) == null ? void 0 : _q.refund_status) {
              _push(`<div class="status-{{product?.pivot?.refund_status?.toLowerCase()}}"><span>${ssrInterpolate((_r = product == null ? void 0 : product.pivot) == null ? void 0 : _r.refund_status)}</span></div>`);
            } else {
              _push(`<!---->`);
            }
            if (!((_s = product == null ? void 0 : product.pivot) == null ? void 0 : _s.refund_status)) {
              _push(`<div>${ssrInterpolate("-")}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          }
          _push(`</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(refund),
        onClose: ($event) => isRef(refund) ? refund.value = false : refund = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsRefundModal, {
              product: unref(singleProduct),
              orderId: __props.order.id,
              onClose: ($event) => isRef(refund) ? refund.value = false : refund = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsRefundModal, {
                product: unref(singleProduct),
                orderId: __props.order.id,
                onClose: ($event) => isRef(refund) ? refund.value = false : refund = false
              }, null, 8, ["product", "orderId", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/ProductTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
