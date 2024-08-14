import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { s as storeToRefs, l as useCartStore, m as useApiCartStore, o as useCookie, k as useCurrencyStore, d as __nuxt_component_1 } from './server.mjs';
import { P as PlaceholderImage } from './dataFilters-CmGMXT_3.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { I as IsProductInCart } from './CheckExistingProduct-BIZpEY04.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "Products",
  __ssrInlineRender: true,
  setup(__props) {
    let { cart, CartTotal } = storeToRefs(useCartStore());
    storeToRefs(useApiCartStore());
    if (useCookie("uat").value) {
      useCartStore().GetCartDataFromApi();
    }
    let ProductImage = ({ product }) => {
      var _a, _b, _c;
      return ((_b = (_a = product == null ? void 0 : product.selectedVariant) == null ? void 0 : _a.variation_image) == null ? void 0 : _b.original_url) || ((_c = product == null ? void 0 : product.product_thumbnail) == null ? void 0 : _c.original_url) || PlaceholderImage;
    };
    const productObjects = cart.value.map((product) => product);
    computed(() => {
      return IsProductInCart({ product: productObjects });
    });
    let store = useCurrencyStore();
    store.allCurrency();
    function cartAction(item) {
      useWishlistStore().AddToWishlist({ product: item.product });
      useCartStore().RemoveFromCart({ CartItem: item });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-table" }, _attrs))}><div class="table-responsive-xl"><table class="table"><tbody><!--[-->`);
      ssrRenderList(unref(cart), (item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
        _push(`<tr class="product-box-contain"><td class="product-detail"><div class="product border-0">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/product/${item.product.slug}`,
          class: "product-image"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", unref(ProductImage)({ product: item.product }))} class="img-fluid" alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: unref(ProductImage)({ product: item.product }),
                  class: "img-fluid",
                  alt: ""
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="product-detail"><ul><li class="name">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: `/product/${item.product.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`${ssrInterpolate(item.variation ? item.variation.name : (_a2 = item.product) == null ? void 0 : _a2.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.variation ? item.variation.name : (_b2 = item.product) == null ? void 0 : _b2.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li><li class="text-content"><span class="text-title">${ssrInterpolate("Sold By:")}</span>${ssrInterpolate("Fastkart")}</li>`);
        if (item.product && ((_a = item.product) == null ? void 0 : _a.unit)) {
          _push(`<li class="text-content"><span class="text-title">${ssrInterpolate("Unit: ")}</span>${ssrInterpolate((_b = item.product) == null ? void 0 : _b.unit)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li><h5 class="text-content d-inline-block">${ssrInterpolate("Price :")}</h5><span>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((item == null ? void 0 : item.variation) ? item.variation.sale_price : (_c = item.product) == null ? void 0 : _c.sale_price)).toFixed(2))}</span>`);
        if ((_d = item.product) == null ? void 0 : _d.discount) {
          _push(`<span class="text-content">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(item.variation ? item.variation.price : (_e = item.product) == null ? void 0 : _e.price)).toFixed(2))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
        if ((_f = item.product) == null ? void 0 : _f.discount) {
          _push(`<li><h5 class="saving theme-color">${ssrInterpolate("Saving :")} ${ssrInterpolate(Number((item.variation ? item.variation.price : (_g = item.product) == null ? void 0 : _g.price) - (item.variation ? item.variation.sale_price : (_h = item.product) == null ? void 0 : _h.sale_price)).toFixed(2))}</h5></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="quantity-price-box"><div class="cart_qty"><div class="input-group"><button type="button" class="btn qty-left-minus" data-type="minus" data-field="">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:subtract-line" }, null, _parent));
        _push(`</button><input class="form-control input-number qty-input" type="text" name="quantity"${ssrRenderAttr("value", item.quantity)}><button type="button" class="btn qty-right-plus" data-type="plus" data-field="">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:add-line",
          class: "ms-0"
        }, null, _parent));
        _push(`</button></div></div></li><li><h5>${ssrInterpolate("Total:")} ${ssrInterpolate(Number(item.variation ? item.variation.sale_price : ((_i = item.product) == null ? void 0 : _i.sale_price) * item.quantity).toFixed(2))}</h5></li></ul></div></div></td><td class="price"><h4 class="table-title text-content">${ssrInterpolate("Price")}</h4><h5>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((item == null ? void 0 : item.variation) ? item.variation.sale_price : (_j = item.product) == null ? void 0 : _j.sale_price)).toFixed(2))} `);
        if ((_k = item.product) == null ? void 0 : _k.discount) {
          _push(`<del class="text-content">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(item.variation ? item.variation.price : (_l = item.product) == null ? void 0 : _l.price)).toFixed(2))}</del>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h5>`);
        if ((_m = item.product) == null ? void 0 : _m.discount) {
          _push(`<h6 class="theme-color">${ssrInterpolate("You Save :")} ${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(item.variation ? item.variation.price : (_n = item.product) == null ? void 0 : _n.price) - (item.variation ? item.variation.sale_price : (_o = item.product) == null ? void 0 : _o.sale_price)).toFixed(2))}</h6>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="quantity"><h4 class="table-title text-content">${ssrInterpolate("Quantity")}</h4><div class="quantity-price"><div class="cart_qty"><div class="input-group"><button type="button" class="btn qty-left-minus" data-type="minus" data-field="">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:subtract-line" }, null, _parent));
        _push(`</button><input class="form-control input-number qty-input" type="text" name="quantity"${ssrRenderAttr("value", item.quantity)}><button type="button" class="btn qty-right-plus" data-type="plus" data-field="">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "ri:add-line",
          class: "ms-0"
        }, null, _parent));
        _push(`</button></div></div></div></td><td class="subtotal"><h4 class="table-title text-content">${ssrInterpolate("Total")}</h4><h5>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(item.variation ? item.variation.sale_price : (_p = item.product) == null ? void 0 : _p.sale_price) * item.quantity).toFixed(2))}</h5></td><td class="save-remove"><h4 class="table-title text-content">${ssrInterpolate("Action")}</h4>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "javascript:void(0)",
          class: "save close_button",
          onClick: ($event) => cartAction(item)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate("Save for later")}`);
            } else {
              return [
                createTextVNode(toDisplayString("Save for later"))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<br>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "javascript:void(0)",
          class: "remove close_button",
          onClick: ($event) => unref(useCartStore)().RemoveFromCart({ CartItem: item })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate("Remove")}`);
            } else {
              return [
                createTextVNode(toDisplayString("Remove"))
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Cart/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
