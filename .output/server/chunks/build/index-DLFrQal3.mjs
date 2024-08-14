import _sfc_main$1 from './index-CdatWNO3.mjs';
import { s as storeToRefs, e as useDataStore, h as useFetch, B as BaseUrl, G as GetHeaders, a as useRouter, d as __nuxt_component_1 } from './server.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
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
    orderNumber: Number
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    let { Settings } = storeToRefs(useDataStore());
    let payment_method = ref("");
    async function submit() {
      var _a;
      let { data, error } = await useFetch("rePayment", {
        baseURL: BaseUrl,
        headers: GetHeaders(),
        method: "post",
        key: "rePayment",
        cache: false,
        body: {
          order_number: props.orderNumber,
          payment_method: payment_method.value,
          return_url: "http://localhost:3000/account/order/details",
          cancel_url: "http://localhost:3000"
        }
      }, "$VYqV6cL480");
      if (!error.value) {
        (_a = data.value) == null ? void 0 : _a.order_number;
        if (payment_method.value == "cod") {
          emit("close");
          useRouter().push(`/account/order/details/${props.orderNumber}`);
        } else {
          (void 0).open(data.value.url, "");
          useRouter().push(`/account/order/details/${props.orderNumber}`);
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate(_ctx.$t("Pay Now"))}</h3>`);
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
      _push(`</div><div class="modal-body"><div class="checkout-box"><div class="checkout-detail"><div class="row g-3"><!--[-->`);
      ssrRenderList(unref(Settings).values.payment_methods, (payment, index) => {
        _push(`<div class="col-md-6">`);
        if (payment.status) {
          _push(`<div class="payment-option"><div class="payment-category w-100"><div class="form-check"><input class="form-check-input" type="radio" name="payment_method"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(payment_method), payment.name)) ? " checked" : ""}${ssrRenderAttr("value", payment.name)}${ssrRenderAttr("id", payment.name)}><label class="form-check-label"${ssrRenderAttr("for", payment.name)}>${ssrInterpolate(payment.name)}</label></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      if (((_a = _ctx.paymentType) == null ? void 0 : _a.touched) && ((_b = _ctx.paymentType.errors) == null ? void 0 : _b["required"])) {
        _push(`<div class="invalid-feedback">${ssrInterpolate("Select Payment Method is Rquired")}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="modal-footer">`);
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
        onClick: ($event) => submit()
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/PayModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
