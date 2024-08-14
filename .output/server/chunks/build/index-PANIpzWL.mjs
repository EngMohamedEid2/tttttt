import _sfc_main$1 from './index-CdatWNO3.mjs';
import { k as useCurrencyStore, s as storeToRefs, e as useDataStore, l as useCartStore, d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import __nuxt_component_0$1 from './index-De4InbXS.mjs';
import _sfc_main$2 from './index-CNdF-Gmr.mjs';
import { ref, watch, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    let { Settings, ThemeOptions } = storeToRefs(useDataStore());
    let { cart, CartTotal } = storeToRefs(useCartStore());
    let cartStore = useCartStore();
    let cartStyle = ref("cart_sidebar");
    let shippingFreeAmt = ref(0);
    ref(0);
    let shippingCal = ref(0);
    let confetti = ref(0);
    let confettiItems = Array.from({ length: 150 }, (_, index) => index);
    let singleVeriationProduct = ref({});
    let variationModal = ref(false);
    function variationProductModal(item) {
      if (variationModal.value == false) {
        variationModal.value = true;
        singleVeriationProduct.value = item;
      } else {
        variationModal.value = false;
      }
    }
    function cartToggle(value) {
      cartStore.cartToggle = value;
    }
    watch(CartTotal, () => {
      var _a, _b;
      const setting = Settings.value;
      shippingFreeAmt.value = (_b = (_a = setting == null ? void 0 : setting.values) == null ? void 0 : _a.general) == null ? void 0 : _b.min_order_free_shipping;
      shippingCal.value = CartTotal.value * 100 / shippingFreeAmt.value;
      if (shippingCal.value > 100) {
        shippingCal.value = 100;
        if (confetti.value == 0) {
          confetti.value = 1;
          setTimeout(() => {
            confetti.value = 2;
          }, 4500);
        }
      } else {
        confetti.value = 0;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_WidgetsModalsCommon = __nuxt_component_0$1;
      const _component_WidgetsModalsVariationModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(ssrRenderComponent(_component_WidgetsButton, {
          type: "button",
          classes: "btn p-0 position-relative header-wishlist",
          id: "cart_sidebar_btn",
          onClick: ($event) => unref(cartStyle) == "cart_sidebar" && unref(cartStore).cartToggleValue(true)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, { name: "ri-shopping-cart-line" }, null, _parent2, _scopeId));
              if ((_a2 = unref(cart)) == null ? void 0 : _a2.length) {
                _push2(`<span class="position-absolute top-0 start-100 translate-middle badge"${_scopeId}>${ssrInterpolate((_b2 = unref(cart)) == null ? void 0 : _b2.length)} <span class="visually-hidden"${_scopeId}>${ssrInterpolate("Unread Messages")}</span></span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_Icon, { name: "ri-shopping-cart-line" }),
                ((_c2 = unref(cart)) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "position-absolute top-0 start-100 translate-middle badge"
                }, [
                  createTextVNode(toDisplayString((_d2 = unref(cart)) == null ? void 0 : _d2.length) + " ", 1),
                  createVNode("span", { class: "visually-hidden" }, toDisplayString("Unread Messages"))
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "classic") {
        _push(`<a href="javascript:void(0)" class="header-icon swap-icon">`);
        if ((_a = unref(cart)) == null ? void 0 : _a.length) {
          _push(`<small class="badge-number badge-light">${ssrInterpolate((_b = unref(cart)) == null ? void 0 : _b.length)}</small>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_Icon, { name: "ri-shopping-cart-line" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "fixed-cart": unref(cartStyle) == "cart_sidebar", "show": unref(cartStore).cartToggle }, "onhover-div"])}"><div class="cart-title"><h4>${ssrInterpolate(_ctx.$t("Shopping Cart"))}</h4><a href="javascript:void(0)">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri-close-line" }, null, _parent));
      _push(`</a></div>`);
      if ((_c = unref(cart)) == null ? void 0 : _c.length) {
        _push(`<div class="pere-text-box success-box">`);
        if (unref(shippingFreeAmt) > unref(CartTotal)) {
          _push(`<p>${ssrInterpolate("Spend")} <span class="shipping">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(shippingFreeAmt) - unref(CartTotal))).toFixed(2))}</span> ${ssrInterpolate("More and Enjoy")} <span class="shipping">${ssrInterpolate(_ctx.$t("Free Shipping"))}!</span></p>`);
        } else {
          _push(`<p><span class="shipping">${ssrInterpolate(_ctx.$t("Congratulations"))}!</span> ${ssrInterpolate(_ctx.$t("Enjoy free shipping on us"))}!</p>`);
        }
        _push(`<div class="progress" role="progressbar"><div class="${ssrRenderClass([{ "danger-progress": unref(shippingCal) <= 30, "warning-progress": unref(shippingCal) >= 31 && unref(shippingCal) <= 80 }, "progress-bar progress-bar-striped progress-bar-animated"])}" style="${ssrRenderStyle({ width: unref(shippingCal) + "%" })}"><div class="progress-icon">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:truck-line" }, null, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = unref(cart)) == null ? void 0 : _d.length) {
        _push(`<ul class="cart-list"><!--[-->`);
        ssrRenderList(unref(cart), (item) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _i, _j, _k;
          _push(`<li class="product-box-contain"><div class="drop-cart"><a href="javascript:void(0)" class="drop-image"><img${ssrRenderAttr("src", (item == null ? void 0 : item.variation) && ((_a2 = item == null ? void 0 : item.variation) == null ? void 0 : _a2.variation_image) ? (_c2 = (_b2 = item == null ? void 0 : item.variation) == null ? void 0 : _b2.variation_image) == null ? void 0 : _c2.original_url : ((_d2 = item == null ? void 0 : item.product) == null ? void 0 : _d2.product_thumbnail) ? (_f2 = (_e2 = item == null ? void 0 : item.product) == null ? void 0 : _e2.product_thumbnail) == null ? void 0 : _f2.original_url : "/images/product.png")} class="img-fluid"${ssrRenderAttr("alt", (_g = item == null ? void 0 : item.product) == null ? void 0 : _g.name)}></a><div class="drop-contain"><a href="javascript:void(0)"><h5>${ssrInterpolate((item == null ? void 0 : item.variation) ? (_h = item == null ? void 0 : item.variation) == null ? void 0 : _h.name : (_i = item == null ? void 0 : item.product) == null ? void 0 : _i.name)}</h5></a><h6>${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate((item == null ? void 0 : item.variation) ? Number(unref(store).convertCurrency(item.variation.sale_price)).toFixed(2) : Number(unref(store).convertCurrency(item.product.sale_price)).toFixed(2))}</h6>`);
          if (item == null ? void 0 : item.variation) {
            _push(`<h5 class="gram"><pre>${ssrInterpolate((_k = (_j = item == null ? void 0 : item.variation) == null ? void 0 : _j.attribute_values[0]) == null ? void 0 : _k.value)}</pre></h5>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="cart_qty qty-box product-qty"><div class="input-group h-100">`);
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn qty-left-minus",
            id: "add-to-cart" + item.product.id,
            onOnClick: ($event) => unref(useCartStore)().ChangeQuantity({ CartItem: item, quantity: -1 })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (item.quantity > 1) {
                  _push2(ssrRenderComponent(_component_Icon, { name: "ri-subtract-line" }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (item.quantity <= 1) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: "ri-delete-bin-line",
                    onClick: ($event) => unref(useCartStore)().RemoveFromCart({ CartItem: item })
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  item.quantity > 1 ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: "ri-subtract-line"
                  })) : createCommentVNode("", true),
                  item.quantity <= 1 ? (openBlock(), createBlock(_component_Icon, {
                    key: 1,
                    name: "ri-delete-bin-line",
                    onClick: ($event) => unref(useCartStore)().RemoveFromCart({ CartItem: item })
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<input class="form-control input-number qty-input" type="number" name="quantity"${ssrRenderAttr("value", item == null ? void 0 : item.quantity)} readonly>`);
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn qty-left-minus",
            id: "qty-left-minus" + item.product.id,
            onOnClick: ($event) => unref(useCartStore)().ChangeQuantity({ CartItem: item })
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
            _: 2
          }, _parent));
          _push(`</div></div><div><div class="header-button-group">`);
          if (item == null ? void 0 : item.variation) {
            _push(ssrRenderComponent(_component_WidgetsButton, {
              classes: "edit-button close_button",
              id: "cart_item_edit_btn" + item.product.id,
              onOnClick: ($event) => variationProductModal(item)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_Icon, { name: "ri-pencil-line" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "ri-pencil-line" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "delete-button close_button",
            id: "cart_item_delete_btn" + item.product.id,
            onOnClick: ($event) => unref(useCartStore)().RemoveFromCart({ CartItem: item })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, { name: "ri-delete-bin-line" }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, { name: "ri-delete-bin-line" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div></div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_e = unref(cart)) == null ? void 0 : _e.length)) {
        _push(`<div class="empty-cart-box"><i class="ri-shopping-cart-line"></i><h5>${ssrInterpolate(_ctx.$t("Your cart is currently empty"))}</h5></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = unref(cart)) == null ? void 0 : _f.length) {
        _push(`<div class="bottom-box"><p class="free">${ssrInterpolate(_ctx.$t("Shipping and taxes are calculated at checkout"))}</p><div class="price-box"><h5>${ssrInterpolate(_ctx.$t("Total"))}:</h5><h4 class="fw-bold">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency(unref(CartTotal))).toFixed(2))}</h4></div><div class="button-group">`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/cart",
          class: "btn btn-sm cart-button",
          onClick: ($event) => unref(cartStore).cartToggleValue(false)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("View Cart"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("View Cart")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/checkout",
          class: "btn btn-sm cart-button theme-bg-color text-white",
          onClick: ($event) => cartToggle(false)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t("Checkout"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("Checkout")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([{ "show": unref(cartStore).cartToggle && unref(cartStore).cartToggle }, "bg-overlay"])}"></div><div class="${ssrRenderClass([{ "show": unref(confetti) == 1 && unref(cartStore).cartToggle }, "confetti-wrapper"])}"><!--[-->`);
      ssrRenderList(unref(confettiItems), (item) => {
        _push(`<div><div class="${ssrRenderClass(`confetti-${item}`)}"></div></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(variationModal),
        onClose: ($event) => variationProductModal(_ctx.item),
        modalClass: "variation-modal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsVariationModal, {
              product: unref(singleVeriationProduct),
              onClose: ($event) => variationProductModal(_ctx.item)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsVariationModal, {
                product: unref(singleVeriationProduct),
                onClose: ($event) => variationProductModal(_ctx.item)
              }, null, 8, ["product", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Carts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
