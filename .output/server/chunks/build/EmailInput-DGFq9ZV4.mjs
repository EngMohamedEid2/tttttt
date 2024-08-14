import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { a as validateEmail } from './inputFieldValidators-6AcCCHeQ.mjs';
import { _ as _export_sfc } from './server.mjs';
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
  __name: "EmailInput",
  __ssrInlineRender: true,
  props: {
    classes: { type: String, default: "form-control" },
    FormSubmitted: Boolean,
    inputId: String,
    label: String,
    minLength: Number,
    disabled: Boolean,
    modelValue: [Object, String],
    placeholder: String,
    IconClass: [Object, String],
    errorMessage: String,
    inputType: {
      default: "text",
      type: String
    },
    checkValidation: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    var props = __props;
    let inputClasses = ref(""), validStatus = ref({}), changed = ref(false);
    watch(() => props.FormSubmitted, () => {
      props.FormSubmitted && updated(props.modelValue.data || "");
    }, { deep: true });
    const emit = __emit;
    function updated(inputValue) {
      changed.value = true;
      validStatus.value = props.checkValidation ? validateEmail(inputValue) : { valid: true };
      emit("update:modelValue", { data: inputValue, errorMessage: validStatus.value.errorMessage });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-md-4 mb-3 custom-form" }, _attrs))} data-v-c34fbe19><label class="form-label"${ssrRenderAttr("for", __props.label)} data-v-c34fbe19>${ssrInterpolate(__props.label)}</label><div class="custom-input" data-v-c34fbe19><input${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} type="text"${ssrRenderAttr("value", __props.modelValue.data ? __props.modelValue.data : "")}${ssrRenderAttr("id", __props.label)}${ssrRenderAttr("placeholder", _ctx.$t(__props.placeholder || "Enter Value"))} class="${ssrRenderClass([[unref(props).classes, unref(inputClasses)], "form-control"])}" data-v-c34fbe19><i class="${ssrRenderClass([__props.IconClass])}" data-v-c34fbe19></i></div>`);
      if (__props.modelValue.errorMessage) {
        _push(`<p class="error-message" data-v-c34fbe19>${ssrInterpolate(_ctx.$t(__props.modelValue.errorMessage))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/Common/EmailInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c34fbe19"]]);

export { __nuxt_component_2 as default };
