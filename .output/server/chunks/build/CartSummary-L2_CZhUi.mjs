import _sfc_main$1 from './index-Dg95hgCG.mjs';
import _sfc_main$2 from './index-CdatWNO3.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL, s as storeToRefs, l as useCartStore, r as useCheckoutStore, k as useCurrencyStore, f as useUserStore } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/images/offer.gif");
const _sfc_main = {
  __name: "CartSummary",
  __ssrInlineRender: true,
  setup(__props) {
    let { cart, CartTotal } = storeToRefs(useCartStore());
    let { CheckoutInfo, loading } = storeToRefs(useCheckoutStore());
    let coupon = ref("");
    let appliedCoupon = ref(false);
    let store = useCurrencyStore();
    store.allCurrency();
    let { User, UserInfo } = storeToRefs(useUserStore());
    let user = ref(UserInfo);
    function setCoupon() {
      appliedCoupon.value = useCheckoutStore().couponError == void 0 ? true : false;
      useCheckoutStore().getCouponCode(coupon.value);
      useCheckoutStore().SetCheckoutInfo();
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
      const _component_WidgetsLoader = _sfc_main$1;
      const _component_WidgetsButton = _sfc_main$2;
      if ((_a = unref(cart)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><form><div class="custom-box-loader">`);
        if (unref(loading)) {
          _push(`<div class="box-loader">`);
          _push(ssrRenderComponent(_component_WidgetsLoader, { loaderClass: "custom-loader-wrapper blur-bg" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<ul class="summary-total"><li><h4>${ssrInterpolate(_ctx.$t("Subtotal"))}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_c = (_b = unref(CheckoutInfo)) == null ? void 0 : _b.total) == null ? void 0 : _c.sub_total : _ctx.$t("Not Calculated Yet"))}</h4></li><li><h4>${ssrInterpolate(_ctx.$t("Shipping"))}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_e = (_d = unref(CheckoutInfo)) == null ? void 0 : _d.total) == null ? void 0 : _e.shipping_total : _ctx.$t("Not Calculated Yet"))}</h4></li><li><h4>${ssrInterpolate(_ctx.$t("Tax"))}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_g = (_f = unref(CheckoutInfo)) == null ? void 0 : _f.total) == null ? void 0 : _g.tax_total : _ctx.$t("Not Calculated Yet"))}</h4></li>`);
        if (unref(user) && unref(CheckoutInfo) && ((_i = (_h = unref(user)) == null ? void 0 : _h.point) == null ? void 0 : _i.balance)) {
          _push(`<li><h4>${ssrInterpolate(_ctx.$t("Points"))}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_k = (_j = unref(CheckoutInfo)) == null ? void 0 : _j.total) == null ? void 0 : _k.convert_point_amount : _ctx.$t("Not Calculated Yet"))}</h4></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user) && unref(CheckoutInfo) && ((_m = (_l = unref(user)) == null ? void 0 : _l.point) == null ? void 0 : _m.balance)) {
          _push(`<li class="border-cls"><label class="form-check-label m-0" for="ponts">${ssrInterpolate("Would you prefer to pay using points?")}</label><input class="checkbox_animated check-it"${ssrIncludeBooleanAttr(Array.isArray(unref(useCheckoutStore)().CheckoutData.points_amount) ? ssrLooseContain(unref(useCheckoutStore)().CheckoutData.points_amount, null) : unref(useCheckoutStore)().CheckoutData.points_amount) ? " checked" : ""} type="checkbox" id="ponts"></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user) && unref(CheckoutInfo) && ((_o = (_n = unref(user)) == null ? void 0 : _n.wallet) == null ? void 0 : _o.balance)) {
          _push(`<li><h4>${ssrInterpolate(_ctx.$t("Wallet Balance"))}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_q = (_p = unref(CheckoutInfo)) == null ? void 0 : _p.total) == null ? void 0 : _q.convert_wallet_balance : "not_calculated_yet")}</h4></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user) && unref(CheckoutInfo) && ((_s = (_r = unref(user)) == null ? void 0 : _r.wallet) == null ? void 0 : _s.balance)) {
          _push(`<li class="border-cls"><label class="form-check-label m-0" for="wallet">${ssrInterpolate("Would you prefer to pay using wallet?")}</label><input class="checkbox_animated check-it" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(useCheckoutStore)().CheckoutData.wallet_balance) ? ssrLooseContain(unref(useCheckoutStore)().CheckoutData.wallet_balance, null) : unref(useCheckoutStore)().CheckoutData.wallet_balance) ? " checked" : ""} id="wallet"></li>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(user) && unref(CheckoutInfo)) {
          _push(`<li class="coupon-sec">`);
          if (!unref(appliedCoupon)) {
            _push(`<a class="promocode-title"><h4>${ssrInterpolate("Have a promo code?")}</h4></a>`);
          } else {
            _push(`<!---->`);
          }
          if (!unref(appliedCoupon)) {
            _push(`<div class="w-100"><div class="coupon-box mt-2 d-flex w-100"><div class="${ssrRenderClass([{ "coupon-error": unref(useCheckoutStore)().couponError }, "input-group"])}"><input type="text"${ssrRenderAttr("value", unref(coupon))} class="${ssrRenderClass([{ "is-invalid": unref(useCheckoutStore)().couponError }, "form-control"])}" id="coupon">`);
            _push(ssrRenderComponent(_component_WidgetsButton, {
              classes: "btn-apply",
              type: "button",
              id: "coupon_apply",
              onClick: ($event) => unref(coupon).length && setCoupon()
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("Apply"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Apply")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            if (unref(useCheckoutStore)().couponError) {
              _push(`<div class="invalid-feedback">${ssrInterpolate(unref(useCheckoutStore)().couponError)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(appliedCoupon)) {
            _push(`<div class="apply-sec mb-3"><div><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="offer gif"><h4>${ssrInterpolate(_ctx.$t("You Saved"))} <span>${ssrInterpolate((_u = (_t = unref(CheckoutInfo)) == null ? void 0 : _t.total) == null ? void 0 : _u.coupon_total_discount)}</span> ${ssrInterpolate(_ctx.$t("With this code"))} \u{1F389} <p>${ssrInterpolate(_ctx.$t("Coupon Applied"))}</p></h4></div><a href="javascript:void(0)">${ssrInterpolate(_ctx.$t("Remove"))}</a></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="list-total"><h4>${ssrInterpolate("Total")}</h4><h4 class="price">${ssrInterpolate(unref(CheckoutInfo) ? (_w = (_v = unref(CheckoutInfo)) == null ? void 0 : _v.total) == null ? void 0 : _w.total : _ctx.$t("Not Calculated Yet"))}</h4></li></ul>`);
        if (Object.keys(unref(CheckoutInfo)).length) {
          _push(ssrRenderComponent(_component_WidgetsButton, {
            class: "btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold",
            id: "place_order",
            onClick: ($event) => unref(useCheckoutStore)().PlaceOrder()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.$t("Place Order"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.$t("Place Order")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></form></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Checkout/sidebar/CartSummary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
