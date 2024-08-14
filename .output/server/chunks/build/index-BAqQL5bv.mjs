import _sfc_main$1 from './index-CdatWNO3.mjs';
import { k as useCurrencyStore, h as useFetch, B as BaseUrl, G as GetHeaders, e as useDataStore, d as __nuxt_component_1 } from './server.mjs';
import { ref, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
    qna: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let store = useCurrencyStore();
    store.allCurrency();
    const emit = __emit;
    let question = ref("");
    props.qna && setInitialValues(props.qna);
    function setInitialValues(values) {
      question.value = values.question;
    }
    async function submitQuestion() {
      let userData = localStorage.getItem("usersAccount");
      if (question.value != "" && userData) {
        if (props.qna) {
          await useFetch("question-and-answer/" + props.qna.id, {
            baseURL: BaseUrl,
            headers: GetHeaders(),
            body: {
              question: question.value,
              answer: "",
              product_id: props.product.id
            },
            method: "put",
            key: "UpdateQuestion"
          }, "$xmbz3Tr6Gp");
        } else {
          await useFetch("question-and-answer", {
            baseURL: BaseUrl,
            headers: GetHeaders(),
            body: {
              question: question.value,
              answer: "",
              product_id: props.product.id
            },
            method: "post",
            key: "AskQuestion"
          }, "$PFIxTvz7qg");
        }
        useDataStore().GetAllQustionAnswer(props.product.id);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate("Ask a question")}</h3>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-close",
        id: "profile_modal_close_btn",
        onOnClick: () => {
          emit("close");
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
      _push(`</div><div class="modal-body"><form class="product-review-form"><div class="product-wrapper"><div class="product-image"><img${ssrRenderAttr("src", __props.product.product_thumbnail ? __props.product.product_thumbnail.original_url : "/images/product.png")} class="img-fluid"${ssrRenderAttr("alt", __props.product.name)}></div><div class="product-content"><h5 class="name">${ssrInterpolate((_a = __props.product) == null ? void 0 : _a.name)}</h5><div class="product-review-rating"><div class="product-rating"><h6 class="price-number">${ssrInterpolate(unref(store).currency.symbol)} ${ssrInterpolate(Number(unref(store).convertCurrency((_b = __props.product) == null ? void 0 : _b.sale_price)).toFixed(2))}</h6></div></div></div></div><div class="review-box"><label class="form-label" for="content">${ssrInterpolate("Your Questions")} *</label><textarea placeholder="Your Questions&#39;" class="form-control" id="content" rows="3">${ssrInterpolate(unref(question))}</textarea></div></form><div class="modal-footer">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
        type: "button",
        id: "cancel_profile_btn",
        onOnClick: () => {
          emit("close");
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Cancel")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Cancel"))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn theme-bg-color btn-md fw-bold text-light",
        id: "submit_profile_btn",
        onOnClick: submitQuestion
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate("Submit")}`);
          } else {
            return [
              createTextVNode(toDisplayString("Submit"))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/QuestionModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
