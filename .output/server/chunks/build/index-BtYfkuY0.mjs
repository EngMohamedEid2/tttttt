import _sfc_main$1 from './index-CdatWNO3.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './PasswordField-7r8oKleI.mjs';
import _sfc_main$3 from './RePasswordField-DTJ5pMq3.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import './inputFieldValidators-6AcCCHeQ.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let input = ref({
      current_password: { data: "" },
      password: { data: "" },
      password_confirmation: { data: "" }
    });
    let emit = __emit;
    let formSubmitted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsInputFieldsPasswordField = _sfc_main$2;
      const _component_WidgetsInputFieldsRePasswordField = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate("Change Password")}</h3>`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-close",
        id: "password_modal_close_btn",
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
      _push(`</div><form><div class="modal-body address-form"><div class="row g-4"><div class="col-xxl-12"><div><label for="cpass" class="form-label">${ssrInterpolate("Current Password")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsPasswordField, {
        errorMessage: "Current Password is required",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).current_password,
        "onUpdate:modelValue": ($event) => unref(input).current_password = $event,
        classes: "form-control",
        id: "cpass",
        placeholder: "Ente  Current Password"
      }, null, _parent));
      _push(`</div></div><div class="col-12"><div><label class="form-label" for="npass">${ssrInterpolate("New Password")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsPasswordField, {
        errorMessage: "New Password is required",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).password,
        "onUpdate:modelValue": ($event) => unref(input).password = $event,
        classes: "form-control",
        id: "npass",
        placeholder: "Enter New Password"
      }, null, _parent));
      _push(`</div></div><div class="col-12"><div><label class="form-label" for="cnpass">${ssrInterpolate("Confirm Password")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsRePasswordField, {
        errorMessage: "Confirm Password is required",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(input).password_confirmation = $event,
        classes: "form-control",
        id: "cnpass",
        placeholder: "Enter Confirm Password",
        passwordToCompere: unref(input).password.data
      }, null, _parent));
      _push(`</div></div></div><div class="modal-footer">`);
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
        id: "submit_profile_btn"
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
      _push(`</div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/ChnagePasswordModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
