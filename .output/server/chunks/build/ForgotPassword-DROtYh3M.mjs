import _sfc_main$1 from './EmailField-BojWyXd0.mjs';
import _sfc_main$2 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { p as publicAssetsURL } from './server.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
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

const _imports_0 = publicAssetsURL("/images/inner-page/forgot.png");
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      email: { data: "" }
    });
    let formSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsInputFieldsEmailField = _sfc_main$1;
      const _component_WidgetsButton = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "log-in-section section-b-space forgot-section" }, _attrs))}><div class="container-fluid-lg w-100"><div class="row align-items-center"><div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"><div class="image-contain"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto"><div class="log-in-box"><div class="log-in-title"><h3>${ssrInterpolate(_ctx.$t("Welcome To Fastkart"))}</h3><h4>${ssrInterpolate(_ctx.$t("Forgot your password"))}</h4></div><div class="input-box"><form class="row g-4"><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsEmailField, {
        errorMessage: "Email is required.",
        formSubmitted: unref(formSubmitted),
        classes: "form-control",
        modelValue: unref(input).email,
        "onUpdate:modelValue": ($event) => unref(input).email = $event,
        id: "email",
        placeholder: "Email Adrress"
      }, null, _parent));
      _push(`<label for="email">${ssrInterpolate(_ctx.$t("Email Address"))}</label></div></div><div class="col-12">`);
      _push(ssrRenderComponent(_component_WidgetsButton, { id: "forgot_btn" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Send"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Send")), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
