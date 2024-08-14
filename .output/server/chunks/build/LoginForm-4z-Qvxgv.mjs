import _sfc_main$1 from './EmailField-BojWyXd0.mjs';
import _sfc_main$2 from './PasswordField-7r8oKleI.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$3 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './inputFieldValidators-6AcCCHeQ.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
  __name: "LoginForm",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      email: { data: "john.customer@example.com" },
      password: { data: "123456789" }
    });
    let formSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsInputFieldsEmailField = _sfc_main$1;
      const _component_WidgetsInputFieldsPasswordField = _sfc_main$2;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_WidgetsButton = _sfc_main$3;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "row g-4" }, _attrs))}><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsEmailField, {
        classes: "form-control",
        modelValue: unref(input).email,
        "onUpdate:modelValue": ($event) => unref(input).email = $event,
        formSubmitted: unref(formSubmitted),
        id: "email",
        placeholder: "Email Address"
      }, null, _parent));
      _push(`<label for="email">${ssrInterpolate(_ctx.$t("Email Address"))}</label></div></div><div class="col-12"><div class="form-floating log-in-form">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsPasswordField, {
        classes: "form-control",
        modelValue: unref(input).password,
        "onUpdate:modelValue": ($event) => unref(input).password = $event,
        formSubmitted: unref(formSubmitted),
        id: "password",
        placeholder: "Password"
      }, null, _parent));
      _push(`<label for="password">${ssrInterpolate(_ctx.$t("Password"))}</label></div></div><div class="col-12"><div class="forgot-box"><div class="form-check ps-0 m-0 remember-box"><input class="checkbox_animated check-box" type="checkbox" id="remeberme"><label class="form-check-label" for="remeberme">${ssrInterpolate(_ctx.$t("Remember me"))}</label></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/auth/forgot-password",
        class: "forgot-password"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Forgot Password ?"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Forgot Password ?")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-12">`);
      _push(ssrRenderComponent(_component_WidgetsButton, { id: "login_btn" }, {
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
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/CommonForm/LoginForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
