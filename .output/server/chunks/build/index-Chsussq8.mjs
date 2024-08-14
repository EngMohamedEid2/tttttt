import { d as __nuxt_component_1, w as _sfc_main$7 } from './server.mjs';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$3 from './index-4U42YdIQ.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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
  setup(__props) {
    let reviewModal = ref(false);
    function reviewsModal({ state = true }) {
      reviewModal.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_NuxtRating = _sfc_main$7;
      const _component_WidgetsNoData = _sfc_main$2;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsReviewModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row">`);
      if (((_a = __props.product) == null ? void 0 : _a.can_review) || ((_b = __props.product) == null ? void 0 : _b.reviews_count)) {
        _push(`<div class="col-xl-5"><div class="product-rating-box"><div class="row">`);
        if ((_c = __props.product) == null ? void 0 : _c.reviews_count) {
          _push(`<div class="col-xl-12"><div class="product-main-rating">`);
          if ((_d = __props.product) == null ? void 0 : _d.rating_count) {
            _push(`<h2>${ssrInterpolate((_f = (_e = __props.product) == null ? void 0 : _e.rating_count) == null ? void 0 : _f.toFixed(2))} `);
            _push(ssrRenderComponent(_component_Icon, { name: "ri:star-fill" }, null, _parent));
            _push(`</h2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h5>${ssrInterpolate((_g = __props.product) == null ? void 0 : _g.reviews_count)} ${ssrInterpolate(_ctx.$t("Rating"))}</h5></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-xl-12">`);
        if ((_h = __props.product) == null ? void 0 : _h.reviews_count) {
          _push(`<ul class="product-rating-list"><!--[-->`);
          ssrRenderList((_k = (_j = (_i = __props.product) == null ? void 0 : _i.review_ratings) == null ? void 0 : _j.slice()) == null ? void 0 : _k.reverse(), (rate, index) => {
            var _a2, _b2, _c2;
            _push(`<li><div class="rating-product"><h5>${ssrInterpolate(((_b2 = (_a2 = __props.product) == null ? void 0 : _a2.review_ratings) == null ? void 0 : _b2.length) - 1 - index + 1)}`);
            _push(ssrRenderComponent(_component_Icon, { name: "ri-star-fill" }, null, _parent));
            _push(`</h5><div class="progress"><div class="progress-bar" style="${ssrRenderStyle({ "width": (rate / ((_c2 = __props.product) == null ? void 0 : _c2.reviews_count) * 100).toFixed(0) + "%" })}"></div></div><h5 class="total">${ssrInterpolate(rate)}</h5></div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if ((_l = __props.product) == null ? void 0 : _l.can_review) {
          _push(`<div class="review-title-2"><h4 class="fw-bold">${ssrInterpolate(_ctx.$t("Review this product"))}</h4><p>${ssrInterpolate(_ctx.$t("Let other customers know what you think"))}</p>`);
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn",
            id: "reviews_modal_btn",
            onOnClick: (reviewModal2) => {
              reviewsModal({ reviewModal: reviewModal2 });
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`${ssrInterpolate(((_a2 = __props.product) == null ? void 0 : _a2.user_review) ? "Edit Review" : "Write a review")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(((_b2 = __props.product) == null ? void 0 : _b2.user_review) ? "Edit Review" : "Write a review"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_m = __props.product) == null ? void 0 : _m.can_review) || ((_n = __props.product) == null ? void 0 : _n.reviews_count)) {
        _push(`<div class="col-xl-7"><div class="review-people">`);
        if ((_o = __props.reviews) == null ? void 0 : _o.length) {
          _push(`<ul class="review-list"><!--[-->`);
          ssrRenderList(__props.reviews, (review) => {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
            _push(`<li><div class="people-box"><div><div class="people-image people-text">`);
            if ((_a2 = review == null ? void 0 : review.consumer) == null ? void 0 : _a2.profile_image) {
              _push(`<img${ssrRenderAttr("src", (_c2 = (_b2 = review == null ? void 0 : review.consumer) == null ? void 0 : _b2.profile_image) == null ? void 0 : _c2.original_url)} class="img-fluid" alt="user">`);
            } else {
              _push(`<div class="user-round"><h4>${ssrInterpolate(((_g2 = (_f2 = (_e2 = (_d2 = review == null ? void 0 : review.consumer) == null ? void 0 : _d2.name) == null ? void 0 : _e2.charAt(0)) == null ? void 0 : _f2.toString()) == null ? void 0 : _g2.toUpperCase()) || "F")}</h4></div>`);
            }
            _push(`</div></div><div class="people-comment"><div class="people-name"><div class="date-time"><a class="name" href="javascript:void(0)">${ssrInterpolate((_h2 = review == null ? void 0 : review.consumer) == null ? void 0 : _h2.name)}</a><h6 class="text-content">${ssrInterpolate(review == null ? void 0 : review.created_at)}</h6></div><div class="product-rating">`);
            _push(ssrRenderComponent(_component_NuxtRating, {
              "read-only": true,
              ratingValue: (review == null ? void 0 : review.rating) || 0,
              "rating-size": "25px"
            }, null, _parent));
            _push(`</div></div><div class="reply"><p>${ssrInterpolate(review == null ? void 0 : review.description)}</p></div></div></div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        if (!((_p = __props.reviews) == null ? void 0 : _p.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            classes: "no-data-added",
            text: "No Review Yet",
            description: "There are currently no ratings or reviews for this product"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_q = __props.product) == null ? void 0 : _q.can_review) && !((_r = __props.product) == null ? void 0 : _r.reviews_count)) {
        _push(`<div class="col-xl-12">`);
        if (!((_s = __props.reviews) == null ? void 0 : _s.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            classes: "no-data-added",
            text: "No Review Yet",
            description: "There are currently no ratings or reviews for this product"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(reviewModal),
        onClose: ($event) => reviewsModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsReviewModal, {
              product: __props.product,
              reviews: __props.reviews,
              onClose: ($event) => reviewsModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsReviewModal, {
                product: __props.product,
                reviews: __props.reviews,
                onClose: ($event) => reviewsModal({ state: false })
              }, null, 8, ["product", "reviews", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductReview/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
