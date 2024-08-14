import { k as useCurrencyStore, l as useCartStore, z as _sfc_main$6, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
    selectedVariation: Object,
    product: Object
  },
  setup(__props) {
    let props = __props;
    let productQty = ref(1);
    let selectedVariation = ref(null);
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
    function handleAddProduct() {
      var _a;
      useCartStore().addToCartProduct({ product: props.product, quantity: productQty == null ? void 0 : productQty.value, variation_id: (_a = selectedVariation == null ? void 0 : selectedVariation.value) == null ? void 0 : _a.id, variation: selectedVariation == null ? void 0 : selectedVariation.value });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_WidgetsVariantAttributes = _sfc_main$6;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sticky-bottom-cart" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="cart-content"><div class="product-image"><img${ssrRenderAttr("src", unref(selectedVariation) && unref(selectedVariation).variation_image ? unref(selectedVariation).variation_image.original_url : __props.product.product_thumbnail ? __props.product.product_thumbnail.original_url : "/images/product.png")} class="img-fluid" alt="product"><div class="content"><h5>${ssrInterpolate(unref(selectedVariation) ? unref(selectedVariation).name : (_a = __props.product) == null ? void 0 : _a.name)}</h5><h6>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? unref(selectedVariation).sale_price : __props.product.sale_price))} `);
      if (unref(selectedVariation) ? unref(selectedVariation).discount : __props.product.discount) {
        _push(`<del class="text-danger">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? unref(selectedVariation).price : __props.product.price))}</del>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(selectedVariation) ? unref(selectedVariation).discount : __props.product.discount) {
        _push(`<span>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(unref(store).convertCurrency(unref(selectedVariation) ? unref(selectedVariation).discount : __props.product.discount))}% ${ssrInterpolate("off")}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h6></div></div><div class="selection-section"><div class="form-group mb-0 choose-product">`);
      _push(ssrRenderComponent(_component_WidgetsVariantAttributes, {
        product: __props.product,
        attributes: ((_b = __props.product) == null ? void 0 : _b.attributes) || [],
        onSelectVariation: ($event) => selectVariation($event),
        isAllVariantStyleDropdown: true
      }, null, _parent));
      _push(`</div><div class="cart_qty qty-box product-qty m-0"><div class="input-group h-100">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "add-to-cart" + __props.product.id,
        onOnClick: ($event) => updateQuantity(-1)
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
      _push(`<input class="form-control input-number qty-input border-0" type="text" name="quantity"${ssrRenderAttr("value", unref(productQty))} readonly>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn qty-left-minus",
        id: "qty-left-minus" + __props.product.id,
        onOnClick: ($event) => updateQuantity(1)
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
      _push(`</div></div></div><div class="add-btn">`);
      if (unref(selectedVariation) && ((_c = unref(selectedVariation)) == null ? void 0 : _c.stock_status) == "in_stock" || ((_d = __props.product) == null ? void 0 : _d.stock_status) == "in_stock" && __props.product.type === "simple") {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          id: "addcartbtnVariationsticky" + __props.product.id,
          classes: "btn theme-bg-color text-white",
          onOnClick: ($event) => handleAddProduct()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="ri-shopping-cart-line me-1"${_scopeId}></i> ${ssrInterpolate("Add to Cart")}`);
            } else {
              return [
                createVNode("i", { class: "ri-shopping-cart-line me-1" }),
                createTextVNode(" " + toDisplayString("Add to Cart"))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsButton, {
          class: "btn theme-bg-color text-white",
          id: "soldoutbtncheckout",
          disabled: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`${ssrInterpolate(((_a2 = unref(selectedVariation)) == null ? void 0 : _a2.stock_status) == "out_of_stock" || __props.product.stock_status == "out_of_stock" ? _ctx.$t("Sold Out") : _ctx.$t("Add to Cart"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(((_b2 = unref(selectedVariation)) == null ? void 0 : _b2.stock_status) == "out_of_stock" || __props.product.stock_status == "out_of_stock" ? _ctx.$t("Sold Out") : _ctx.$t("Add to Cart")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/StickyCheckout/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
