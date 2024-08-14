import _sfc_main$1 from './Form-Bs8W6qiJ.mjs';
import __nuxt_component_1 from './TextInput-C4houpP8.mjs';
import __nuxt_component_2 from './EmailInput-DGFq9ZV4.mjs';
import __nuxt_component_3 from './LargeTextInput-oqRuzrWl.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { H as HandleRequest, G as GetHeaders, B as BaseUrl } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './formValidator-CtAl43Qx.mjs';
import './form-BZIsiZ8w.mjs';
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

const _sfc_main = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    let inputs = ref({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    let Form = ref("");
    const HandleSubmit = () => {
      Form.value.HandleSubmit();
    };
    const Submit = async (Data) => {
      await HandleRequest("contact-us", {
        headers: GetHeaders(),
        baseURL: BaseUrl,
        method: "post",
        body: Data
      });
      inputs.value = "";
    };
    __expose({ HandleSubmit });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsWrapperForm = _sfc_main$1;
      const _component_WidgetsInputFieldsCommonTextInput = __nuxt_component_1;
      const _component_WidgetsInputFieldsCommonEmailInput = __nuxt_component_2;
      const _component_WidgetsInputFieldsCommonLargeTextInput = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title d-xxl-none d-block"><h2>${ssrInterpolate(_ctx.$t("Contact Us"))}</h2></div>`);
      _push(ssrRenderComponent(_component_WidgetsWrapperForm, {
        ref_key: "Form",
        ref: Form,
        OnSubmit: Submit,
        Inputs: unref(inputs)
      }, {
        default: withCtx(({ FormSubmitted }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="right-sidebar-box"${_scopeId}><div class="row"${_scopeId}><div class="col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsInputFieldsCommonTextInput, {
              modelValue: unref(inputs).name,
              "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
              label: "Full Name",
              errorMessage: "Name is required",
              FormSubmitted,
              placeholder: "Enter Full Name",
              IconClass: "fa-solid fa-user"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-xxl-6 col-lg-12 col-sm-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsInputFieldsCommonEmailInput, {
              modelValue: unref(inputs).email,
              "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
              label: "Email",
              errorMessage: "Email is required",
              FormSubmitted,
              placeholder: "Enter Email Address",
              IconClass: "fa-solid fa-envelope"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-xxl-6 col-lg-12 col-sm-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsInputFieldsCommonTextInput, {
              modelValue: unref(inputs).phone,
              "onUpdate:modelValue": ($event) => unref(inputs).phone = $event,
              label: "Phone Number",
              errorMessage: "Phone is required",
              inputType: "phone",
              FormSubmitted,
              placeholder: "Enter Your Phone Number",
              IconClass: "fa-solid fa-mobile-screen-button"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsInputFieldsCommonTextInput, {
              modelValue: unref(inputs).subject,
              "onUpdate:modelValue": ($event) => unref(inputs).subject = $event,
              label: "Subject",
              errorMessage: "Subject is required",
              FormSubmitted,
              placeholder: "Enter Subject",
              IconClass: "fa-solid fa-user"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-12"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsInputFieldsCommonLargeTextInput, {
              modelValue: unref(inputs).message,
              "onUpdate:modelValue": ($event) => unref(inputs).message = $event,
              label: "Message",
              errorMessage: "Message is required",
              FormSubmitted,
              placeholder: "Enter Your Message",
              IconClass: "fa-solid fa-message"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><button type="button" class="btn btn-animation btn-md fw-bold ms-auto"${_scopeId}>Send Message</button></div>`);
          } else {
            return [
              createVNode("div", { class: "right-sidebar-box" }, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-12" }, [
                    createVNode(_component_WidgetsInputFieldsCommonTextInput, {
                      modelValue: unref(inputs).name,
                      "onUpdate:modelValue": ($event) => unref(inputs).name = $event,
                      label: "Full Name",
                      errorMessage: "Name is required",
                      FormSubmitted,
                      placeholder: "Enter Full Name",
                      IconClass: "fa-solid fa-user"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "FormSubmitted"])
                  ]),
                  createVNode("div", { class: "col-xxl-6 col-lg-12 col-sm-6" }, [
                    createVNode(_component_WidgetsInputFieldsCommonEmailInput, {
                      modelValue: unref(inputs).email,
                      "onUpdate:modelValue": ($event) => unref(inputs).email = $event,
                      label: "Email",
                      errorMessage: "Email is required",
                      FormSubmitted,
                      placeholder: "Enter Email Address",
                      IconClass: "fa-solid fa-envelope"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "FormSubmitted"])
                  ]),
                  createVNode("div", { class: "col-xxl-6 col-lg-12 col-sm-6" }, [
                    createVNode(_component_WidgetsInputFieldsCommonTextInput, {
                      modelValue: unref(inputs).phone,
                      "onUpdate:modelValue": ($event) => unref(inputs).phone = $event,
                      label: "Phone Number",
                      errorMessage: "Phone is required",
                      inputType: "phone",
                      FormSubmitted,
                      placeholder: "Enter Your Phone Number",
                      IconClass: "fa-solid fa-mobile-screen-button"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "FormSubmitted"])
                  ]),
                  createVNode("div", { class: "col-12" }, [
                    createVNode(_component_WidgetsInputFieldsCommonTextInput, {
                      modelValue: unref(inputs).subject,
                      "onUpdate:modelValue": ($event) => unref(inputs).subject = $event,
                      label: "Subject",
                      errorMessage: "Subject is required",
                      FormSubmitted,
                      placeholder: "Enter Subject",
                      IconClass: "fa-solid fa-user"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "FormSubmitted"])
                  ]),
                  createVNode("div", { class: "col-12" }, [
                    createVNode(_component_WidgetsInputFieldsCommonLargeTextInput, {
                      modelValue: unref(inputs).message,
                      "onUpdate:modelValue": ($event) => unref(inputs).message = $event,
                      label: "Message",
                      errorMessage: "Message is required",
                      FormSubmitted,
                      placeholder: "Enter Your Message",
                      IconClass: "fa-solid fa-message"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "FormSubmitted"])
                  ])
                ]),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-animation btn-md fw-bold ms-auto"
                }, "Send Message")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/ContactUs/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
