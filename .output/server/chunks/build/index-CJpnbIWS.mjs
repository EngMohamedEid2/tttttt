import { k as useCurrencyStore, l as useCartStore, a as useRouter, w as _sfc_main$7, z as _sfc_main$6, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-BJd3hL9t.mjs';
import _sfc_main$2 from './index-CdatWNO3.mjs';
import { ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { I as IsProductInCart } from './CheckExistingProduct-BIZpEY04.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useCompareStore } from './compare-CJlobl4e.mjs';
import { u as useWishlistStore } from './wishlist-DasiP7YX.mjs';
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
    product: { type: Object }
  },
  setup(__props) {
    let props = __props;
    let store = useCurrencyStore();
    store.allCurrency();
    let productQty = ref(1);
    let selectedVariation = ref(null);
    ref(null);
    let buyNow = ref(false);
    function selectVariation(variation) {
      selectedVariation.value = variation;
    }
    computed(() => {
      return IsProductInCart({ product: props.product });
    });
    function updateQuantity(qty) {
      if (1 > productQty.value + qty)
        return;
      productQty.value = productQty.value + qty;
      checkStockAvailable();
    }
    function checkStockAvailable() {
      var _a, _b;
      if (selectedVariation.value) {
        selectedVariation.value["stock_status"] = ((_a = selectedVariation == null ? void 0 : selectedVariation.value) == null ? void 0 : _a.quantity) < productQty.value ? "out_of_stock" : "in_stock";
      } else {
        props.product["stock_status"] = ((_b = props.product) == null ? void 0 : _b.quantity) < productQty.value ? "out_of_stock" : "in_stock";
      }
    }
    function handleAddProduct(buyNow2) {
      var _a;
      useCartStore().addToCartProduct({ product: props.product, quantity: productQty == null ? void 0 : productQty.value, variation_id: (_a = selectedVariation == null ? void 0 : selectedVariation.value) == null ? void 0 : _a.id, variation: selectedVariation == null ? void 0 : selectedVariation.value });
      if (buyNow2) {
        useRouter().push("/checkout");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
      const _component_NuxtRating = _sfc_main$7;
      const _component_WidgetsVariantAttributes = _sfc_main$6;
      const _component_ShopProductDetailsWidgetsSaleTimer = _sfc_main$1;
      const _component_WidgetsButton = _sfc_main$2;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 class="name">${ssrInterpolate(unref(selectedVariation) ? (_a = unref(selectedVariation)) == null ? void 0 : _a.name : (_b = __props.product) == null ? void 0 : _b.name)}</h2><div class="price-rating"><h3 class="theme-color price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? Number((_c = unref(selectedVariation)) == null ? void 0 : _c.sale_price).toFixed(2) : Number((_d = __props.product) == null ? void 0 : _d.sale_price).toFixed(2)))} `);
      if (unref(selectedVariation) ? unref(selectedVariation).discount : (_e = __props.product) == null ? void 0 : _e.discount) {
        _push(`<del class="text-content">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? Number((_f = unref(selectedVariation)) == null ? void 0 : _f.price).toFixed(2) : Number((_g = __props.product) == null ? void 0 : _g.price).toFixed(2)))}</del>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedVariation) ? unref(selectedVariation).discount : (_h = __props.product) == null ? void 0 : _h.discount) {
        _push(`<span class="offer-top">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? Number((_i = unref(selectedVariation)) == null ? void 0 : _i.discount).toFixed(2) : Number((_j = __props.product) == null ? void 0 : _j.discount).toFixed(2)))}% ${ssrInterpolate("off")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h3><div class="product-rating custom-rate">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "read-only": true,
        ratingValue: ((_k = __props.product) == null ? void 0 : _k.rating_count) || 0,
        "rating-size": "25px"
      }, null, _parent));
      _push(`<span class="review">${ssrInterpolate((_l = __props.product) == null ? void 0 : _l.reviews_count)} ${ssrInterpolate(_ctx.$t("Review"))}</span></div></div>`);
      if ((_m = __props.product) == null ? void 0 : _m.short_description) {
        _push(`<div class="product-contain"><p>${(_n = __props.product) == null ? void 0 : _n.short_description}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="product-package">`);
      _push(ssrRenderComponent(_component_WidgetsVariantAttributes, {
        product: __props.product,
        attributes: (_o = __props.product) == null ? void 0 : _o.attributes,
        onSelectVariation: ($event) => selectVariation($event)
      }, null, _parent));
      _push(`</div>`);
      if (((_p = __props.product) == null ? void 0 : _p.sale_starts_at) && ((_q = __props.product) == null ? void 0 : _q.sale_expired_at)) {
        _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsSaleTimer, {
          startDate: (_r = __props.product) == null ? void 0 : _r.sale_starts_at,
          endDate: (_s = __props.product) == null ? void 0 : _s.sale_expired_at
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="note-box product-package"><div class="cart_qty qty-box product-qty"><div class="input-group">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "'add-to-cart'+product.id'",
        onClick: ($event) => updateQuantity(-1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-subtract-fill" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-subtract-fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input class="form-control input-number qty-input" type="text" name="quantity"${ssrRenderAttr("value", unref(productQty))} readonly>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "'qty-left-minus'+product.id'",
        onClick: ($event) => updateQuantity(1)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-add-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-add-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="wishlist-btn-group">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "wishlist-button btn",
        id: "'wishlist_btn'",
        onClick: ($event) => unref(useWishlistStore)().ToggleFromWishlist({ product: __props.product })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-heart-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-heart-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "wishlist-button btn",
        id: "'compare_btn'",
        onClick: ($event) => unref(useCompareStore)().ToggleFromCompare({ product: __props.product })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ri-refresh-line" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, { name: "ri-refresh-line" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="dynamic-checkout">`);
      if (unref(selectedVariation) && ((_t = unref(selectedVariation)) == null ? void 0 : _t.stock_status) == "in_stock" || ((_u = __props.product) == null ? void 0 : _u.stock_status) == "in_stock" && ((_v = __props.product) == null ? void 0 : _v.type) === "simple") {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          id: "addcartbtnVariation" + __props.product.id,
          classes: "btn btn-md bg-theme scroll-button",
          onClick: ($event) => (handleAddProduct(), unref(useCartStore)().cartToggleValue(true))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri-shopping-cart-line" }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("Add to Cart"))}`);
            } else {
              return [
                createVNode(_component_Icon, { name: "ri-shopping-cart-line" }),
                createTextVNode(" " + toDisplayString(_ctx.$t("Add to Cart")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: "btn btn-md bg-theme scroll-button disabled",
          id: "soldoutbtnproductcontain",
          disabled: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            if (_push2) {
              if (((_a2 = unref(selectedVariation)) == null ? void 0 : _a2.stock_status) == "in_stock") {
                _push2(ssrRenderComponent(_component_Icon, { class: "ri-shopping-cart-line me-1" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(` ${ssrInterpolate(((_b2 = unref(selectedVariation)) == null ? void 0 : _b2.stock_status) == "out_of_stock" || ((_c2 = __props.product) == null ? void 0 : _c2.stock_status) == "out_of_stock" ? _ctx.$t("Sold Out") : _ctx.$t("Add to Cart"))}`);
            } else {
              return [
                ((_d2 = unref(selectedVariation)) == null ? void 0 : _d2.stock_status) == "in_stock" ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  class: "ri-shopping-cart-line me-1"
                })) : createCommentVNode("", true),
                createTextVNode(" " + toDisplayString(((_e2 = unref(selectedVariation)) == null ? void 0 : _e2.stock_status) == "out_of_stock" || ((_f2 = __props.product) == null ? void 0 : _f2.stock_status) == "out_of_stock" ? _ctx.$t("Sold Out") : _ctx.$t("Add to Cart")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      if (!unref(buyNow)) {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: "btn btn-md border-theme-color",
          id: "buynowbtn" + __props.product.id,
          disabled: unref(selectedVariation) && unref(selectedVariation).stock_status == "in_stock" || __props.product.stock_status == "in_stock" && __props.product.type && __props.product.type === "simple" ? false : true,
          onClick: ($event) => (unref(selectedVariation) && unref(selectedVariation).stock_status == "in_stock" || __props.product.stock_status == "in_stock" && __props.product.type && __props.product.type === "simple") && handleAddProduct(true)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate("Buy Now")}`);
            } else {
              return [
                createTextVNode(toDisplayString("Buy Now"))
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductContain/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
