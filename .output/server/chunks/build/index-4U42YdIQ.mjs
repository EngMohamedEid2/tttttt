import _sfc_main$1 from './index-CdatWNO3.mjs';
import { h as useFetch, B as BaseUrl, G as GetHeaders, e as useDataStore, d as __nuxt_component_1, w as _sfc_main$7 } from './server.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
    product: Object,
    reviews: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    var _a, _b;
    let props = __props;
    let emit = __emit;
    let initialRating = ref((_a = props.product) == null ? void 0 : _a.rating_count);
    let ratingValue = ref(0);
    let discription = ref((_b = props.reviews[0]) == null ? void 0 : _b.description);
    function getRetingValue(event) {
      ratingValue.value = event;
    }
    async function submit() {
      await useFetch("/review/" + props.reviews[0].id, {
        baseURL: BaseUrl,
        method: "put",
        headers: GetHeaders(),
        body: {
          rating: ratingValue.value,
          review_image_id: null,
          description: discription.value
        }
      }, "$Uy8jg6n7j3");
      useDataStore().GetSingleProduct();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtRating = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate(unref(initialRating) ? "Edit a Review" : "Write a Review")}</h3>`);
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
      _push(`</div><div class="modal-body"><form class="product-review-form"><div class="product-wrapper"><div class="product-image"><img${ssrRenderAttr("src", __props.product.product_thumbnail ? __props.product.product_thumbnail.original_url : "/images/product.png")} class="img-fluid"${ssrRenderAttr("alt", __props.product.name)}></div><div class="product-content"><h5 class="name">${ssrInterpolate(__props.product.name)}</h5><div class="product-review-rating"><label>${ssrInterpolate(_ctx.$t("Rating"))}</label><div class="product-rating">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "read-only": false,
        ratingValue: unref(initialRating) || 0
      }, null, _parent));
      if (__props.product.rating_count) {
        _push(`<h6 class="rating-number">( ${ssrInterpolate(__props.product.rating_count.toFixed(2) || 0)})</h6>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="review-box"><div class="product-review-rating"><label>${ssrInterpolate(_ctx.$t("Rating"))}</label><div class="product-rating">`);
      _push(ssrRenderComponent(_component_NuxtRating, {
        "read-only": false,
        ratingValue: unref(initialRating) || 0,
        onRatingSelected: getRetingValue
      }, null, _parent));
      _push(`</div><div class="invalid-feedback">${ssrInterpolate(_ctx.$t("Rating is required"))}</div></div></div><div class="review-box"><label class="form-label" for="content">${ssrInterpolate(_ctx.$t("Review Content"))}</label><textarea placeholder="Write Something..." class="form-control" formControlName="description" rows="3">${ssrInterpolate(unref(discription))}</textarea></div></form><div class="modal-footer">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
        type: "button",
        id: "cancel_profile_btn",
        onOnClick: ($event) => _ctx.modal.dismiss("Cancel")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Cancel"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Cancel")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color btn-md fw-bold text-light",
        id: "submit_profile_btn",
        onOnClick: ($event) => submit()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Submit"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Submit")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ReviewModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
