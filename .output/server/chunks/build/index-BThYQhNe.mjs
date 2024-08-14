import _sfc_main$1 from './index-CdatWNO3.mjs';
import { h as useFetch, B as BaseUrl, G as GetHeaders, d as __nuxt_component_1 } from './server.mjs';
import __nuxt_component_2 from './SearchDropdown-DHfaS-o_.mjs';
import { ref, unref, withCtx, createVNode, isRef, createTextVNode, toDisplayString, useSSRContext } from 'vue';
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
import '@vueuse/core';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    orderId: Number
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    let paymentMethod = ref({ data: "" });
    let reason = ref("");
    let option = [
      {
        label: "Wallet",
        value: "wallet"
      },
      {
        label: "Paypal",
        value: "paypal"
      },
      {
        label: "Bank",
        value: "bank"
      }
    ];
    async function sendRequest() {
      if (reason.value != "" && paymentMethod.value.data != "") {
        await useFetch("/refund", {
          baseURL: BaseUrl,
          headers: GetHeaders(),
          method: "post",
          body: {
            product_id: props.product.id,
            reason: reason.value,
            order_id: props.orderId,
            payment_type: paymentMethod.value.data
          },
          key: "sendRefund"
        }, "$26QCYVam93");
        emit("close");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsInputFieldsSearchDropdown = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate(_ctx.$t("Refund"))}</h3>`);
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
      _push(`</div><div class="modal-body"><form class="product-review-form"><div class="product-wrapper"><div class="product-image"><img${ssrRenderAttr("src", ((_a = __props.product) == null ? void 0 : _a.product_thumbnail) ? (_b = __props.product) == null ? void 0 : _b.product_thumbnail.original_url : "/images/product.png")} class="img-fluid"${ssrRenderAttr("alt", (_c = __props.product) == null ? void 0 : _c.name)}></div><div class="product-content"><h5 class="name">${ssrInterpolate((_d = __props.product) == null ? void 0 : _d.name)}</h5><div class="product-review-rating"><div class="product-rating"><h6 class="price-number">${ssrInterpolate((_e = __props.product) == null ? void 0 : _e.sale_price)}</h6></div></div></div></div><div class="review-box"><form><label class="form-label" for="content">${ssrInterpolate(_ctx.$t("Reason"))} *</label><textarea placeholder="Enter Reason" class="form-control" id="content" rows="3" formControlName="reason">${ssrInterpolate(unref(reason))}</textarea><label class="form-label mt-3" for="payment_option">${ssrInterpolate(_ctx.$t("Payment Option"))}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        "get-value-key": "value",
        placeholder: "Select Payment Method",
        "display-key": "label",
        "form-submitted": _ctx.formSubmitted,
        modelValue: unref(paymentMethod),
        "onUpdate:modelValue": ($event) => isRef(paymentMethod) ? paymentMethod.value = $event : paymentMethod = $event,
        options: unref(option)
      }, null, _parent));
      _push(`</form></div></form><div class="modal-footer">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
        type: "button",
        id: "cancel_profile_btn",
        onOnClick: () => {
          unref(emit)("close");
        }
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
        onClick: ($event) => sendRequest()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/RefundModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
