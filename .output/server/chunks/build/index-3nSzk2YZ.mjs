import _sfc_main$1 from './index-CdatWNO3.mjs';
import { h as useFetch, B as BaseUrl, G as GetHeaders, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$2 from './NonEmptyField-CvQGP-Qy.mjs';
import _sfc_main$3 from './EmailField-BojWyXd0.mjs';
import __nuxt_component_2 from './SearchDropdown-DHfaS-o_.mjs';
import _sfc_main$4 from './NumberField-D_3QVr37.mjs';
import { ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { c as convertInputData } from './form-BZIsiZ8w.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { A as AllCountryCode } from './country_code-DDslUgiY.mjs';
import { i as isFormValid } from './formValidator-CtAl43Qx.mjs';
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
import '@vueuse/core';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    initialData: Object
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let emit = __emit;
    let input = ref({
      name: { data: "" },
      email: { data: "" },
      country_code: { data: "" },
      phone: { data: "" },
      status: { data: 1 }
    });
    let formSubmitted = ref(false);
    function setInitialValues(initialValues) {
      Object.keys(initialValues).forEach((key) => {
        input.value[key].data = initialValues[key];
      });
    }
    props.initialData && setInitialValues(props.initialData);
    async function handleSubmit() {
      input.value.country_code.data = "1";
      formSubmitted.value = true;
      let ObjTOSend = { data: {} };
      if (isFormValid({ formData: input.value })) {
        ObjTOSend.data = convertInputData({ data: input.value });
        await useFetch("updateProfile", {
          baseURL: BaseUrl,
          headers: GetHeaders(),
          cache: false,
          method: "put",
          body: ObjTOSend.data,
          key: "updatePassword"
        }, "$TrRz85uUeT");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsInputFieldsNonEmptyField = _sfc_main$2;
      const _component_WidgetsInputFieldsEmailField = _sfc_main$3;
      const _component_WidgetsInputFieldsSearchDropdown = __nuxt_component_2;
      const _component_WidgetsInputFieldsNumberField = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="modal-header"><h3 class="fw-semibold">${ssrInterpolate("Edit Profile")}</h3>`);
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
      _push(`</div><form><div class="modal-body address-form"><div class="row g-4"><div class="col-xxl-12"><div class=""><label class="form-label" for="name">${ssrInterpolate("Full Name")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNonEmptyField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        modelValue: unref(input).name,
        "onUpdate:modelValue": ($event) => unref(input).name = $event,
        id: "name",
        placeholder: "Enter Name"
      }, null, _parent));
      _push(`</div></div><div class="col-12"><div class=""><label for="email" class="form-label">${ssrInterpolate("Email Address")}</label>`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsEmailField, {
        classes: "form-control",
        formSubmitted: unref(formSubmitted),
        readonly: true,
        modelValue: unref(input).email,
        "onUpdate:modelValue": ($event) => unref(input).email = $event,
        id: "email",
        placeholder: "Enter Email Address"
      }, null, _parent));
      _push(`</div></div><div class="col-12 phone-field"><div class=""><div class="d-flex row"><label class="form-label" for="phone">${ssrInterpolate("Phone Number")}</label><span class="col-3 pe-0">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsSearchDropdown, {
        formSubmitted: unref(formSubmitted),
        "select-first": true,
        country: true,
        getValueKey: "id",
        "display-key": "name",
        "form-submitted": unref(formSubmitted),
        modelValue: unref(input).country_code,
        "onUpdate:modelValue": ($event) => unref(input).country_code = $event,
        options: unref(AllCountryCode)
      }, null, _parent));
      _push(`</span><span class="col-9 ps-0">`);
      _push(ssrRenderComponent(_component_WidgetsInputFieldsNumberField, {
        type: "number",
        modelValue: unref(input).phone,
        "onUpdate:modelValue": ($event) => unref(input).phone = $event,
        formSubmitted: unref(formSubmitted),
        classes: "form-control",
        errorMessage: "phone number is required.",
        id: "phone",
        placeholder: "phone"
      }, null, _parent));
      _push(`</span></div></div></div></div><div class="modal-footer">`);
      _push(ssrRenderComponent(_component_WidgetsButton, {
        classes: "btn btn-theme-outline btn-md fw-bold",
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
        type: "submit",
        onClick: ($event) => handleSubmit(),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Modals/EditProdileModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
