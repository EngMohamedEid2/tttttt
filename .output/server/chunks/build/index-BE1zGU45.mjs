import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
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
    todayDeal: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    let { Products } = storeToRefs(useDataStore());
    const props = __props;
    let emit = __emit;
    let TopDealInitial = ref();
    TopDealInitial.value = (_b = (_a = Products == null ? void 0 : Products.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter(
      (product) => {
        var _a2;
        return (_a2 = props.todayDeal) == null ? void 0 : _a2.includes(product.id);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_WidgetsNoData = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal-content" }, _attrs))}><div class="modal-header"><div><h5 class="modal-title w-100">${ssrInterpolate(_ctx.$t("Deal Today"))}</h5><p class="mt-1 text-content">${ssrInterpolate(_ctx.$t("Recommended deals for you."))}</p></div></div><div class="modal-body"><div class="deal-offer-box"><ul class="deal-offer-list"><!--[-->`);
      ssrRenderList(unref(TopDealInitial), (product) => {
        _push(`<li class="list-1"><div class="deal-offer-contain">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "deal-image",
          to: `/product/${product == null ? void 0 : product.slug}`,
          onClick: () => {
            unref(emit)("close");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", (product == null ? void 0 : product.product_thumbnail) ? (_a3 = product == null ? void 0 : product.product_thumbnail) == null ? void 0 : _a3.original_url : "images/product.png")} alt="product" height="100" width="100"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: (product == null ? void 0 : product.product_thumbnail) ? (_b2 = product == null ? void 0 : product.product_thumbnail) == null ? void 0 : _b2.original_url : "images/product.png",
                  alt: "product",
                  height: "100",
                  width: "100"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "deal-contain",
          to: `/product/${product == null ? void 0 : product.slug}`,
          onClick: () => {
            unref(emit)("close");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h5 class="fw-semibold"${_scopeId}>${ssrInterpolate(product == null ? void 0 : product.name)}</h5><h6${_scopeId}>$${ssrInterpolate(Number(product == null ? void 0 : product.sale_price).toFixed(2))} <del${_scopeId}>${ssrInterpolate(Number(product == null ? void 0 : product.price).toFixed(2))}</del> `);
              if (product == null ? void 0 : product.unit) {
                _push2(`<span${_scopeId}>${ssrInterpolate(product == null ? void 0 : product.unit)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</h6>`);
            } else {
              return [
                createVNode("h5", { class: "fw-semibold" }, toDisplayString(product == null ? void 0 : product.name), 1),
                createVNode("h6", null, [
                  createTextVNode("$" + toDisplayString(Number(product == null ? void 0 : product.sale_price).toFixed(2)) + " ", 1),
                  createVNode("del", null, toDisplayString(Number(product == null ? void 0 : product.price).toFixed(2)), 1),
                  createTextVNode(),
                  (product == null ? void 0 : product.unit) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(product == null ? void 0 : product.unit), 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (!((_a2 = unref(TopDealInitial)) == null ? void 0 : _a2.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added bg-light",
          text: "No Product Found"
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/Deals/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
