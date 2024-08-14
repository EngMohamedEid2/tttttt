import _sfc_main$1 from './index-CdatWNO3.mjs';
import { k as useCurrencyStore, l as useCartStore, d as __nuxt_component_1, z as _sfc_main$6 } from './server.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
    product: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    let selectedVariation = ref(null);
    let productQty = ref(1);
    let store = useCurrencyStore();
    store.allCurrency();
    function selectVariation(variation) {
      selectedVariation.value = variation;
    }
    function updateQuantity(qty) {
      if (1 > productQty.value + qty)
        return;
      productQty.value = productQty.value + qty;
    }
    function replaceCart() {
      var _a;
      useCartStore().addToCartProduct({ product: props == null ? void 0 : props.product, quantity: productQty == null ? void 0 : productQty.value, variation_id: (_a = selectedVariation == null ? void 0 : selectedVariation.value) == null ? void 0 : _a.id, variation: selectedVariation == null ? void 0 : selectedVariation.value });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsVariantAttributes = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="name">${ssrInterpolate(unref(selectedVariation) ? (_a = unref(selectedVariation)) == null ? void 0 : _a.name : (_b = __props.product) == null ? void 0 : _b.name)}</h3>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-close",
        id: "profile_modal_close_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-close-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="modal-body"><div class="right-box-contain"><div class="price-rating"><h3 class="theme-color price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(selectedVariation) ? (_c = unref(selectedVariation)) == null ? void 0 : _c.sale_price.toFixed(2) : (_d = __props.product) == null ? void 0 : _d.sale_price)).toFixed(2))} `);
      if (unref(selectedVariation) ? (_e = unref(selectedVariation)) == null ? void 0 : _e.discount : (_f = __props.product) == null ? void 0 : _f.discount) {
        _push(`<del class="text-content">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(selectedVariation) ? (_g = unref(selectedVariation)) == null ? void 0 : _g.price.toFixed(2) : (_h = __props.product) == null ? void 0 : _h.price)).toFixed(2))}</del>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedVariation) ? (_i = unref(selectedVariation)) == null ? void 0 : _i.discount : (_j = __props.product) == null ? void 0 : _j.discount) {
        _push(`<span class="offer-top ms-2">${ssrInterpolate(unref(selectedVariation) ? (_k = unref(selectedVariation)) == null ? void 0 : _k.discount : (_l = __props.product) == null ? void 0 : _l.discount)}% ${ssrInterpolate("off")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3></div><div class="product-package">`);
      _push(ssrRenderComponent(_component_WidgetsVariantAttributes, {
        product: (_m = __props.product) == null ? void 0 : _m.product,
        attributes: ((_o = (_n = __props.product) == null ? void 0 : _n.product) == null ? void 0 : _o.attributes) || [],
        onSelectVariation: ($event) => selectVariation($event)
      }, null, _parent));
      _push(`</div><div class="note-box product-package"><div class="cart_qty qty-box product-qty as;dn"><div class="input-group">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "add-to-cart" + __props.product.id,
        onOnClick: ($event) => updateQuantity(-1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri:subtract-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri:subtract-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="form-control input-number qty-input" type="text" name="quantity"${ssrRenderAttr("value", unref(productQty))} readonly>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "qty-left-minus" + __props.product.id,
        onOnClick: ($event) => updateQuantity(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri:add-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri:add-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(selectedVariation) && ((_p = unref(selectedVariation)) == null ? void 0 : _p.stock_status) == "in_stock" || ((_q = __props.product) == null ? void 0 : _q.stock_status) == "in_stock" && ((_r = __props.product) == null ? void 0 : _r.type) === "simple") {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          id: "replacecartbtnVariation" + __props.product.id,
          classes: "btn btn-md cart-button scroll-button text-white",
          onOnClick: ($event) => {
            var _a2;
            return replaceCart((_a2 = _ctx.item) == null ? void 0 : _a2.product);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { namw: "ri-shopping-cart-line" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("Update Item"))}`);
            } else {
              return [
                createVNode(_component_Icon, { namw: "ri-shopping-cart-line" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("Update Item")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: "btn btn-md cart-button scroll-button text-white",
          id: "soldoutbtnreplaceproduct",
          disabled: false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            if (_push2) {
              if (((_a2 = unref(selectedVariation)) == null ? void 0 : _a2.stock_status) == "in_stock") {
                _push2(ssrRenderComponent(_component_Icon, { name: "ri:shopping-cart-line me-1" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(((_b2 = unref(selectedVariation)) == null ? void 0 : _b2.stock_status) == "out_of_stock" || ((_c2 = __props.product) == null ? void 0 : _c2.stock_status) == "out_of_stock" ? "sold_out" : "add_to_cart")}`);
            } else {
              return [
                ((_d2 = unref(selectedVariation)) == null ? void 0 : _d2.stock_status) == "in_stock" ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: "ri:shopping-cart-line me-1"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(((_e2 = unref(selectedVariation)) == null ? void 0 : _e2.stock_status) == "out_of_stock" || ((_f2 = __props.product) == null ? void 0 : _f2.stock_status) == "out_of_stock" ? "sold_out" : "add_to_cart"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/VariationModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
