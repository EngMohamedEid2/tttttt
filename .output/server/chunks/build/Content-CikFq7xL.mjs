import { k as useCurrencyStore, t as transform, w as _sfc_main$7 } from './server.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    compare: Object
  },
  setup(__props) {
    let store = useCurrencyStore();
    store.allCurrency();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtRating = _sfc_main$7;
      _push(`<section${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.compare, (product, index) => {
        var _a;
        _push(`<div class="col"><div class="compare-part"><div class="img-section"><div><img${ssrRenderAttr("src", (product == null ? void 0 : product.product_thumbnail) ? (_a = product == null ? void 0 : product.product_thumbnail) == null ? void 0 : _a.original_url : "images/product.png")} class="img-fluid"${ssrRenderAttr("alt", product == null ? void 0 : product.name)}></div><a href="javascript:void(0)" tabindex="0"><h5 class="text-title">${ssrInterpolate(product == null ? void 0 : product.name)}</h5></a></div><div class="detail-part"><div class="title-detail"><h5>${ssrInterpolate(_ctx.$t("Discount"))}</h5></div><div class="inner-detail"><p>${ssrInterpolate((product == null ? void 0 : product.discount) ? product == null ? void 0 : product.discount : "-")}</p></div></div><div class="detail-part"><div class="title-detail"><h5>${ssrInterpolate(_ctx.$t("Price"))}</h5></div><div class="inner-detail"><p>${ssrInterpolate(unref(store).currency.symbol)}${ssrInterpolate(Number(unref(store).convertCurrency(product == null ? void 0 : product.sale_price)).toFixed(2))}</p></div></div><div class="detail-part"><div class="title-detail"><h5>${ssrInterpolate(_ctx.$t("Availability"))}</h5></div><div class="inner-detail"><p>${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(product == null ? void 0 : product.stock_status))}</p></div></div><div class="detail-part"><div class="title-detail"><h5>${ssrInterpolate(_ctx.$t("Rating"))}</h5></div><div class="inner-detail"><div class="compare-rating">`);
        _push(ssrRenderComponent(_component_NuxtRating, {
          "read-only": true,
          ratingValue: (product == null ? void 0 : product.rating_count) || 0,
          "rating-size": "25px"
        }, null, _parent));
        _push(`<span class="text-content rating-text">(${ssrInterpolate(product == null ? void 0 : product.reviews_count)} ${ssrInterpolate(_ctx.$t("Review"))})</span></div></div></div><div class="detail-part"><div class="title-detail"><h5>${ssrInterpolate(_ctx.$t("Weight"))}</h5></div><div class="inner-detail"><p>${ssrInterpolate((product == null ? void 0 : product.weight) ? product == null ? void 0 : product.weight : "-")}</p></div></div><div class="btn-part"><button class="btn btn-animation btn-sm">${ssrInterpolate(_ctx.$t("Move To Cart"))}</button></div><div class="remove-part"><a href="javascript:void(0)" class="text-content remove_column"><i class="fa-solid fa-trash-can me-2"></i>${ssrInterpolate(_ctx.$t("Remove"))}</a></div></div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Compare/Content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
