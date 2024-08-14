import { ref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { v as validateNonEmptyFields } from './inputFieldValidators-6AcCCHeQ.mjs';

const _sfc_main = {
  __name: "NumberField",
  __ssrInlineRender: true,
  props: {
    type: String,
    classes: String,
    id: String,
    placeholder: String,
    modelValue: Object,
    errorMessage: String,
    formSubmitted: Boolean
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    const emit = __emit;
    let validStatus = ref({});
    watch(() => props.formSubmitted, () => {
      var _a;
      props.formSubmitted && updated((_a = props.modelValue) == null ? void 0 : _a.data);
    });
    function updated(inputValue) {
      validStatus.value = validateNonEmptyFields({ value: String(inputValue), minLength: props.minLength, errorMessage: props.errorMessage });
      emit("update:modelValue", {
        data: props.inputType == "number" ? Number(inputValue) : inputValue,
        errorMessage: validStatus.value.errorMessage
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><input${ssrRenderAttr("type", __props.type)} class="${ssrRenderClass([__props.classes, "number"])}"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", (_a = __props.modelValue) == null ? void 0 : _a.data)}${ssrRenderAttr("placeholder", __props.placeholder || "Enter Value")}>`);
      if ((_b = __props.modelValue) == null ? void 0 : _b.errorMessage) {
        _push(`<p class="text-danger pt-2 m-0">${ssrInterpolate(_ctx.$t((_c = __props.modelValue) == null ? void 0 : _c.errorMessage))}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/NumberField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
