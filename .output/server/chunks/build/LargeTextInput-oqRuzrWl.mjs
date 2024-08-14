import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
import { v as validateNonEmptyFields } from './inputFieldValidators-6AcCCHeQ.mjs';
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
  __name: "LargeTextInput",
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
      validStatus.value = props.checkValidation ? validateNonEmptyFields({
        value: String(inputValue),
        errorMessage: props.errorMessage
      }) : { valid: true };
      emit("update:modelValue", {
        data: props.inputType == "number" ? Number(inputValue) : inputValue,
        errorMessage: validStatus.value.errorMessage
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-md-4 mb-3 custom-form" }, _attrs))} data-v-b04b6bac><label class="form-label"${ssrRenderAttr("for", __props.label)} data-v-b04b6bac>${ssrInterpolate(__props.label)}</label><div class="custom-input" data-v-b04b6bac><textarea${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}${ssrRenderAttr("type", __props.inputType)}${ssrRenderAttr("id", __props.label)}${ssrRenderAttr("placeholder", _ctx.$t(__props.placeholder || "Enter Value"))} class="${ssrRenderClass([[unref(props).classes, unref(inputClasses)], "form-control"])}" data-v-b04b6bac>${ssrInterpolate(__props.modelValue.data ? __props.modelValue.data : "")}</textarea><i class="${ssrRenderClass(__props.IconClass)}" data-v-b04b6bac></i></div>`);
      if (__props.modelValue.errorMessage) {
        _push(`<p class="error-message" data-v-b04b6bac>${ssrInterpolate(_ctx.$t(__props.modelValue.errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/Common/LargeTextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b04b6bac"]]);

export { __nuxt_component_3 as default };
