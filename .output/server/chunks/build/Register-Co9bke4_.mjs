import _sfc_main$1 from './RegisterForm-BX2kCth-.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { p as publicAssetsURL, H as HandleRequest, G as GetHeaders, B as BaseUrl } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { i as isFormValid } from './formValidator-CtAl43Qx.mjs';
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './EmailField-BojWyXd0.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/components';
import '@vueuse/core';
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
import './NumberField-D_3QVr37.mjs';
import './PasswordField-7r8oKleI.mjs';
import './RePasswordField-DTJ5pMq3.mjs';
import './index-CdatWNO3.mjs';
import './country_code-DDslUgiY.mjs';

const _imports_0 = publicAssetsURL("/images/inner-page/sign-up.png");
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      name: { data: "" },
      email: { data: "" },
      phone: { data: "" },
      password: { data: "" },
      password_confirmation: { data: "" },
      country_code: { data: "" }
    });
    let formSubmitted = ref(false);
    async function handleRegister() {
      formSubmitted.value = true;
      if (isFormValid({ formData: input.value })) {
        await HandleRequest("register", {
          headers: GetHeaders(),
          baseURL: BaseUrl,
          method: "post",
          body: {
            name: input.value.name.data,
            email: input.value.email.data,
            phone: input.value.phone.data,
            password: input.value.password.data,
            password_confirmation: input.value.password_confirmation.data,
            country_code: input.value.country_code.data
          }
        });
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthCommonFormRegisterForm = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "log-in-section section-b-space" }, _attrs))}><div class="container-fluid-lg w-100"><div class="row"><div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"><div class="image-contain"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto"><div class="log-in-box"><div class="log-in-title"><h3>${ssrInterpolate(_ctx.$t("Welcome To Our Store"))}</h3><h4>${ssrInterpolate(_ctx.$t("Create New Account"))}</h4></div><div class="input-box">`);
      _push(ssrRenderComponent(_component_AuthCommonFormRegisterForm, {
        onHandleRegister: ($event) => handleRegister(),
        input: unref(input),
        formSubmitted: unref(formSubmitted)
      }, null, _parent));
      _push(`</div><div class="other-log-in"><h6>${ssrInterpolate(_ctx.$t("or"))}</h6></div><div class="sign-up-box"><h4>${ssrInterpolate(_ctx.$t("Already have an account"))}?</h4>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/auth/login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Log In"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Log In")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="col-xxl-7 col-xl-6 col-lg-6"></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
