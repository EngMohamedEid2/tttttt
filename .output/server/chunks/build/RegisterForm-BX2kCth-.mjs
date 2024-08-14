import _sfc_main$1 from './NonEmptyField-CvQGP-Qy.mjs';
import _sfc_main$2 from './EmailField-BojWyXd0.mjs';
import __nuxt_component_2 from './SearchDropdown-DHfaS-o_.mjs';
import _sfc_main$3 from './NumberField-D_3QVr37.mjs';
import _sfc_main$4 from './PasswordField-7r8oKleI.mjs';
import _sfc_main$5 from './RePasswordField-DTJ5pMq3.mjs';
import _sfc_main$6 from './index-CdatWNO3.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { A as AllCountryCode } from './country_code-DDslUgiY.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './server.mjs';
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
  __name: "RegisterForm",
  __ssrInlineRender: true,
  props: { input: Object, formSubmitted: Boolean },
  emits: ["handleRegister"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsInputFieldsNonEmptyField = _sfc_main$1;
      const _component_WidgetsInputFieldsEmailField = _sfc_main$2;
      const _component_WidgetsInputFieldsSearchDropdown = __nuxt_component_2;
      const _component_WidgetsInputFieldsNumberField = _sfc_main$3;
      const _component_WidgetsInputFieldsPasswordField = _sfc_main$4;
      const _component_WidgetsInputFieldsRePasswordField = _sfc_main$5;
      const _component_WidgetsButton = _sfc_main$6;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "row g-4" }, _attrs))}><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: __props.formSubmitted,
        modelValue: __props.input.name,
        "onUpdate:modelValue": ($event) => __props.input.name = $event,
        id: "name",
        placeholder: "name"
      }, null, _parent));
      _push(`<label for="name">${ssrInterpolate(_ctx.$t("Full Name"))}</label></div></div><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsEmailField, {
        classes: "form-control",
        formSubmitted: __props.formSubmitted,
        modelValue: __props.input.email,
        "onUpdate:modelValue": ($event) => __props.input.email = $event,
        id: "email",
        placeholder: "Email Address"
      }, null, _parent));
      _push(`<label for="email">${ssrInterpolate(_ctx.$t("Email Address"))}</label></div></div><div class="col-12 phone-field"><div class="form-floating log-in-form"><div class="d-flex row"><span class="col-4 pe-0 adshjahkjsdh">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        formSubmitted: __props.formSubmitted,
        "select-first": true,
        getValueKey: "id",
        "display-key": "name",
        modelValue: __props.input.country_code,
        "onUpdate:modelValue": ($event) => __props.input.country_code = $event,
        "form-submitted": __props.formSubmitted,
        options: unref(AllCountryCode)
      }, null, _parent));
      _push(`</span><span class="col-8 ps-0"><div class="form-floating">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNumberField, {
        type: "number",
        formSubmitted: __props.formSubmitted,
        classes: "form-control",
        errorMessage: "phone number is required.",
        modelValue: __props.input.phone,
        "onUpdate:modelValue": ($event) => __props.input.phone = $event,
        id: "phone",
        placeholder: "phone"
      }, null, _parent));
      _push(`<label for="phone">${ssrInterpolate(_ctx.$t("Phone Number"))}</label></div></span></div></div></div><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsPasswordField, {
        classes: "form-control",
        formSubmitted: __props.formSubmitted,
        modelValue: __props.input.password,
        "onUpdate:modelValue": ($event) => __props.input.password = $event,
        id: "password",
        placeholder: "password"
      }, null, _parent));
      _push(`<label for="password">${ssrInterpolate(_ctx.$t("Password"))}</label></div></div><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsRePasswordField, {
        errorMessage: "Confirm Password is required",
        formSubmitted: __props.formSubmitted,
        modelValue: __props.input.password_confirmation,
        "onUpdate:modelValue": ($event) => __props.input.password_confirmation = $event,
        classes: "form-control",
        id: "password_confirmation",
        placeholder: "password_confirmation",
        passwordToCompere: __props.input.password.data
      }, null, _parent));
      _push(`<label for="password_confirmation">${ssrInterpolate(_ctx.$t("Password Confirmation"))}</label></div></div><div class="col-12"><div class="forgot-box"><div class="form-check ps-0 m-0 remember-box"><input class="checkbox_animated check-box" type="checkbox" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault">${ssrInterpolate(_ctx.$t("I agree with"))} <span>${ssrInterpolate(_ctx.$t("Terms"))}</span> ${ssrInterpolate(_ctx.$t("and"))} <span>${ssrInterpolate(_ctx.$t("Privacy"))}</span></label></div></div></div><div class="col-12">`);
      _push(ssrRenderComponent(_component_WidgetsButton, { id: "sign_up" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Sign Up"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Sign Up")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/CommonForm/RegisterForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
