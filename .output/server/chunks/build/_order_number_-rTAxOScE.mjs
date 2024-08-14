import { g as defineStore, h as useFetch, B as BaseUrl, G as GetHeaders, i as useRoute } from './server.mjs';
import { P as PlaceholderImage } from './dataFilters-CmGMXT_3.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const useSettingsStore = defineStore("settings-store", () => {
  let currencySymbol = ref("$"), currencyName = ref("USD");
  return {
    currencySymbol,
    currencyName
  };
});

const _sfc_main = {
  __name: "[order_number]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, refresh, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`trackOrder/${useRoute().params.order_number}`, {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get",
      key: `GetOrderInSuccess${useRoute().params.order_number}`,
      params: { order_number: useRoute().params.order_number }
    }, "$ZUHwIhKrvg")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!unref(pending)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><section class="cart-section section-b-space"><div class="container-fluid-lg"><div class="row g-sm-4 g-3"><div class="col-xxl-9 col-lg-8"><div class="cart-table order-table order-table-2"><div class="table-responsive"><table class="table mb-0"><tbody><!--[-->`);
        ssrRenderList(unref(data).products, (product, index) => {
          var _a2, _b2, _c2;
          _push(`<tr><td class="product-detail"><div class="product border-0"><img${ssrRenderAttr("src", ((_a2 = product.product_thumbnail) == null ? void 0 : _a2.original_url) || ((_b2 = product.product_galleries[0]) == null ? void 0 : _b2.original_url) || ("PlaceholderImage" in _ctx ? _ctx.PlaceholderImage : unref(PlaceholderImage)))} class="img-fluid" alt=""><div class="product-detail"><ul><li class="name">${ssrInterpolate(product.name)}</li><li class="text-content">Sold By: ${ssrInterpolate(product.store.store_name)}</li><li class="text-content">Quantity - 500 g</li></ul></div></div></td><td class="price"><h4 class="table-title text-content"> Price</h4><h6 class="theme-color">$${ssrInterpolate(product.price || 0)}</h6></td><td class="quantity"><h4 class="table-title text-content">Qty</h4><h4 class="text-title">${ssrInterpolate((_c2 = product.pivot) == null ? void 0 : _c2.quantity)}</h4></td><td class="subtotal"><h4 class="table-title text-content">Total</h4><h5>$${ssrInterpolate(product.pivot.subtotal || 0)}</h5></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div><div class="col-xxl-3 col-lg-4"><div class="row g-4"><div class="col-lg-12 col-sm-6"><div class="summery-box"><div class="summery-header"><h3>Price Details</h3><h5 class="ms-auto theme-color">(${ssrInterpolate(unref(data).products.length)} Items)</h5></div><ul class="summery-contain"><li><h4>SubTotal</h4><h4 class="price">$${ssrInterpolate(unref(data).amount)}</h4></li><li><h4>Tax</h4><h4 class="price">$${ssrInterpolate(unref(data).tax_total)}</h4></li><li><h4>Shipping</h4><h4 class="price">$${ssrInterpolate(unref(data).shipping_total)}</h4></li></ul><ul class="summery-total"><li class="list-total"><h4>Total (${ssrInterpolate(unref(useSettingsStore)().currencyName)})</h4><h4 class="price">$${ssrInterpolate(unref(data).total)}</h4></li></ul></div></div><div class="col-lg-12 col-sm-6"><div class="summery-box"><div class="summery-header d-block"><h3>Shipping Address</h3></div><ul class="summery-contain pb-0 border-bottom-0"><li class="d-block"><h4>${ssrInterpolate(`${unref(data).shipping_address.street} ${unref(data).shipping_address.city}`)}</h4><h4 class="mt-2">${ssrInterpolate((_b = (_a = unref(data).shipping_address) == null ? void 0 : _a.state) == null ? void 0 : _b.name)}, ${ssrInterpolate((_e = (_d = (_c = unref(data)) == null ? void 0 : _c.shipping_address) == null ? void 0 : _d.country) == null ? void 0 : _e.name)} ${ssrInterpolate((_g = (_f = unref(data)) == null ? void 0 : _f.shipping_address) == null ? void 0 : _g.pincode)}</h4></li><li class="pb-0"><h4>Expected Date Of Delivery:</h4><h4 class="price theme-color"><a href="#" class="text-danger">Track Order</a></h4></li></ul><ul class="summery-total"><li class="list-total border-top-0 pt-2"><h4 class="fw-bold">Oct 21, 2021</h4></li></ul></div></div><div class="col-12"><div class="summery-box"><div class="summery-header d-block"><h3>Payment Method</h3></div><ul class="summery-contain pb-0 border-bottom-0"><li class="d-block pt-0"><p class="text-content">${ssrInterpolate(unref(data).payment_method)}</p></li></ul></div></div></div></div></div></div></section></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/success/[order_number].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
