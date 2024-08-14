import _sfc_main$1 from './PasswordField-7r8oKleI.mjs';
import _sfc_main$2 from './RePasswordField-DTJ5pMq3.mjs';
import _sfc_main$3 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CiTIP3wF.mjs';
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

const _sfc_main = {
  __name: "UpdatePssword",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      password: { data: "" },
      password_confirmation: { data: "" }
    });
    let formSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsInputFieldsPasswordField = _sfc_main$1;
      const _component_WidgetsInputFieldsRePasswordField = _sfc_main$2;
      const _component_WidgetsButton = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "log-in-section background-image-2 section-b-space" }, _attrs))}><div class="container-fluid-lg w-100"><div class="row"><div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"><div class="image-contain"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto"><div class="log-in-box"><div class="log-in-title"><h3>${ssrInterpolate(_ctx.$t("Welcome to Fastkart"))}</h3><h4>${ssrInterpolate(_ctx.$t("Reset your account password"))}</h4></div><div class="input-box"><form class="row g-4"><div class="col-12"><div class="form-floating">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsPasswordField, {
        errorMessage: "Password is required",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).password,
        "onUpdate:modelValue": ($event) => unref(input).password = $event,
        classes: "form-control",
        id: "newPassword",
        placeholder: "password"
      }, null, _parent));
      _push(`<label for="newPassword">${ssrInterpolate(_ctx.$t("New Password"))}</label></div></div><div class="col-12"><div class="form-floating">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsRePasswordField, {
        errorMessage: "Confirm Password is required",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(input).password_confirmation = $event,
        classes: "form-control",
        id: "password_confirmation",
        placeholder: "Password Confirmation",
        passwordToCompere: unref(input).password.data
      }, null, _parent));
      _push(`<label for="confirmPassword">${ssrInterpolate(_ctx.$t("Confirm Password"))}</label></div></div><div class="col-12">`);
      _push(ssrRenderComponent(_component_WidgetsButton, { id: "Update_btn" }, {
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
      _push(`</div></form></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/UpdatePssword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
