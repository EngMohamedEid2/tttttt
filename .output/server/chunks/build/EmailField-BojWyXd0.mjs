import { ref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { a as validateEmail } from './inputFieldValidators-6AcCCHeQ.mjs';

const _sfc_main = {
  __name: "EmailField",
  __ssrInlineRender: true,
  props: {
    classes: String,
    id: String,
    placeholder: String,
    modelValue: Object,
    minLength: Number,
    errorMessage: String,
    formSubmitted: Boolean,
    readonly: {
      default: false,
      type: Boolean
    },
    validate: {
      default: true,
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let validStatus = ref({});
    const emit = __emit;
    watch(() => props.formSubmitted, () => {
      var _a;
      props.formSubmitted && Updated((_a = props.modelValue) == null ? void 0 : _a.data);
    });
    function Updated(inputValue) {
      validStatus.value = props.validate ? validateEmail({
        value: String(inputValue),
        minLength: props.minLength,
        errorMessage: props.errorMessage
      }) : inputValue;
      validStatus.value = validateEmail(inputValue);
      emit("update:modelValue", { data: inputValue, errorMessage: validStatus.value.errorMessage });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="email" class="${ssrRenderClass(__props.classes)}"${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", (_a = __props.modelValue) == null ? void 0 : _a.data)}${ssrRenderAttr("placeholder", _ctx.$t(__props.placeholder || "Enter Value"))}${ssrIncludeBooleanAttr(__props.readonly) ? " disabled" : ""}>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/InputFields/EmailField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
