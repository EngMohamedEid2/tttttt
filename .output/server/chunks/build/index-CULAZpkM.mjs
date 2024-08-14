import _sfc_main$1 from './NonEmptyField-CvQGP-Qy.mjs';
import _sfc_main$2 from './EmailField-BojWyXd0.mjs';
import _sfc_main$3 from './index-CdatWNO3.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './inputFieldValidators-6AcCCHeQ.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      bank_account_no: { data: null },
      bank_name: { data: "" },
      bank_holder_name: { data: "" },
      swift: { data: "" },
      ifsc: { data: "" },
      status: { data: 1 },
      paypal_email: { data: "" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsInputFieldsNonEmptyField = _sfc_main$1;
      const _component_WidgetsInputFieldsEmailField = _sfc_main$2;
      const _component_WidgetsButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Bank Details"))}</h5></div></div><form class="themeform-auth"><div class="row mb-3 align-items-center"><label for="bank_account_no" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Bank Account No"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).bank_account_no,
        "onUpdate:modelValue": ($event) => unref(input).bank_account_no = $event,
        id: "bank_account_no",
        placeholder: "Enter Bank Account No"
      }, null, _parent));
      _push(`</div></div><div class="row mb-3 align-items-center"><label for="bank_name" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Bank Name"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).bank_name,
        "onUpdate:modelValue": ($event) => unref(input).bank_name = $event,
        id: "bank_name",
        placeholder: "Enter Bank Name"
      }, null, _parent));
      _push(`</div></div><div class="row mb-3 align-items-center"><label for="bank_holder_name" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Holder Name"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).bank_holder_name,
        "onUpdate:modelValue": ($event) => unref(input).bank_holder_name = $event,
        id: "bank_holder_name",
        placeholder: "Enter Bank Holder Name"
      }, null, _parent));
      _push(`</div></div><div class="row mb-3 align-items-center"><label for="swift" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Swift"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).swift,
        "onUpdate:modelValue": ($event) => unref(input).swift = $event,
        id: "swift",
        placeholder: "Enter Swift"
      }, null, _parent));
      _push(`</div></div><div class="row mb-3 align-items-center"><label for="ifsc" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Ifsc"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).ifsc,
        "onUpdate:modelValue": ($event) => unref(input).ifsc = $event,
        id: "ifsc",
        placeholder: "Enter Ifsc"
      }, null, _parent));
      _push(`</div></div></form><div class="mb-3 title-header border-custom"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Paypal Details"))}</h5></div></div><form class="themeform-auth"><div class="row mb-3 align-items-center"><label for="paypal_email" class="form-label col-xxl-2 col-lg-12 col-md-3">${ssrInterpolate(_ctx.$t("Paypal Email"))}</label><div class="col-xxl-10 col-lg-12 col-md-9">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsEmailField, {
        classes: "form-control",
        validate: false,
        formSubmitted: _ctx.formSubmitted,
        modelValue: unref(input).paypal_email,
        "onUpdate:modelValue": ($event) => unref(input).paypal_email = $event,
        id: "paypal_email",
        placeholder: "Enter Paypal Email"
      }, null, _parent));
      _push(`</div></div><div class="text-end">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-animation theme-bg-color btn-md d-inline-block",
        id: "payout_btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Save"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Save")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/BankDetails/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
