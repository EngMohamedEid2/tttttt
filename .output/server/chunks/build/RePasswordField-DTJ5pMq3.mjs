import { ref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { c as validateRePassword } from './inputFieldValidators-6AcCCHeQ.mjs';

const _sfc_main = {
  __name: "RePasswordField",
  __ssrInlineRender: true,
  props: {
    errorMessage: String,
    classes: String,
    id: String,
    placeholder: String,
    modelValue: Object,
    passwordToCompere: String,
    formSubmitted: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let validStatus = ref({});
    const emit = __emit;
    watch(() => props.formSubmitted, () => {
      props.formSubmitted && updated(props.modelValue.data);
    });
    function updated(inputValue) {
      validStatus.value = validateRePassword({ value: inputValue, valueToCompare: props.passwordToCompere, minlength: 8, errorMessage: props.errorMessage });
      emit("update:modelValue", { data: inputValue, errorMessage: validStatus.value.errorMessage });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="password"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("placeholder", __props.placeholder || "Enter Value")} class="${ssrRenderClass(__props.classes)}"${ssrRenderAttr("value", __props.modelValue.data)}>`);
      if (__props.modelValue.errorMessage) {
        _push(`<p class="text-danger pt-2 m-0">${ssrInterpolate(_ctx.$t(__props.modelValue.errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/RePasswordField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
