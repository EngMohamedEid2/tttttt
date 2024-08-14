import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { withAsyncContext, ref, unref, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { k as useCurrencyStore, e as useDataStore, s as storeToRefs, l as useCartStore } from './server.mjs';
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
    productData: Object
  },
  async setup(__props) {
    var _a;
    let __temp, __restore;
    let props = __props;
    let store = useCurrencyStore();
    store.allCurrency();
    [__temp, __restore] = withAsyncContext(() => useDataStore().GetProduct()), await __temp, __restore();
    let { Products } = storeToRefs(useDataStore());
    let crossSellProducts = (_a = Products == null ? void 0 : Products.value.data) == null ? void 0 : _a.filter((product) => {
      var _a2, _b;
      return (_b = (_a2 = props.productData) == null ? void 0 : _a2.cross_sell_products) == null ? void 0 : _b.includes(product.id);
    });
    let total = ref(0);
    ref([]);
    ref([]);
    let selectedProduct = ref([]);
    const AddToCartAll = () => {
      selectedProduct.value.forEach((product) => {
        if (product) {
          useCartStore().addToCartProduct({
            product: product ? product : null,
            quantity: 1,
            variation: null,
            variation_id: null
          });
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_WidgetsButton = _sfc_main$1;
      if ((_a2 = unref(crossSellProducts)) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "related-product bundle-sec" }, _attrs))}><div class="product-title-2"><h4>${ssrInterpolate(_ctx.$t("Frequently bought together"))}</h4></div><div class="related-box"><div class="related-image"><ul><!--[-->`);
        ssrRenderList(unref(crossSellProducts), (crossSellproduct) => {
          _push(`<li><div class="product-box product-box-bg wow fadeInUp"><div class="product-image">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${crossSellproduct.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b;
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", crossSellproduct.product_thumbnail ? (_a3 = crossSellproduct == null ? void 0 : crossSellproduct.product_thumbnail) == null ? void 0 : _a3.original_url : "/images/product.png")} class="img-fluid" alt=""${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: crossSellproduct.product_thumbnail ? (_b = crossSellproduct == null ? void 0 : crossSellproduct.product_thumbnail) == null ? void 0 : _b.original_url : "/images/product.png",
                    class: "img-fluid",
                    alt: ""
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="product-detail">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${crossSellproduct.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h6 class="name"${_scopeId}>${ssrInterpolate(crossSellproduct.name)}</h6>`);
              } else {
                return [
                  createVNode("h6", { class: "name" }, toDisplayString(crossSellproduct.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<h5 class="sold text-content"><span class="theme-color price">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(crossSellproduct.sale_price)).toFixed(2))}</span>`);
          if (crossSellproduct == null ? void 0 : crossSellproduct.discount) {
            _push(`<del>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(crossSellproduct.price)).toFixed(2))}</del>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</h5></div></div></li>`);
        });
        _push(`<!--]--></ul></div><div class="budle-list"><ul><!--[-->`);
        ssrRenderList(unref(crossSellProducts), (crossSellproduct) => {
          _push(`<li><div class="form-check"><input class="checkbox_animated" type="checkbox"${ssrRenderAttr("value", crossSellproduct.id)}${ssrRenderAttr("id", crossSellproduct.id)}><label class="form-check-label"${ssrRenderAttr("for", crossSellproduct.id)}><span class="color color-1">${ssrInterpolate(crossSellproduct.name)} <span>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(crossSellproduct.sale_price)).toFixed(2))}</span></span></label></div></li>`);
        });
        _push(`<!--]--><li class="contant"><h5>${ssrInterpolate(_ctx.$t("Product Selected for"))}</h5><h4 class="theme-color">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(total))).toFixed(2))}</h4>`);
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: "btn text-white theme-bg-color btn-md mt-sm-4 mt-3 fw-bold",
          id: "addcartAllbtn",
          disabled: !unref(total),
          iconClass: "fa-solid fa-cart-shopping ms-2",
          onOnClick: ($event) => AddToCartAll()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(" Add All To Cart"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(" Add All To Cart")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductBundle/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
