import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { i as isFormValid } from './formValidator-CtAl43Qx.mjs';
import { c as convertInputData } from './form-BZIsiZ8w.mjs';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

function setInitialValues({ initialValues, inputs }) {
  var initialData = initialValues, inputs = inputs;
  initialData && Object.keys(inputs).forEach((key) => {
    var _a, _b;
    if (!inputs[key].ignore) {
      if (inputs[key].mapKey) {
        let dataToStore = GetMapKeyData({ initialData, mapKey: inputs[key].mapKey });
        inputs[key].data = dataToStore;
      } else {
        inputs[key].data = initialData[key];
        if (((_a = inputs[key]) == null ? void 0 : _a.type) == "multiSelect") {
          ((_b = initialData[key]) == null ? void 0 : _b.length) && (inputs[key].data = initialData[key].map((item) => item.id));
          inputs[key].selected = initialData[key];
        }
        if (inputs[key].isImage) {
          if (inputs[key].multiple) {
            inputs[key].data = initialData[key.split("_id")[0]].map((el) => el.id) || [];
            inputs[key].selected = initialData[key.split("_id")[0]];
          } else {
            inputs[key].data = initialData[key];
            inputs[key].selected = initialData[key.split("_id")[0]];
          }
        }
        if (inputs[key].type && inputs[key].type == "dropdown") {
          inputs[key].data = initialData[key];
          inputs[key].selected = { name: initialData[key], value: initialData[key] };
          inputs[key].displayValue = initialData[key];
        }
      }
    }
  });
}
function GetMapKeyData({ initialData, mapKey }) {
  let mapKeyArray = mapKey.split(".");
  let dataToReturn = _.cloneDeep(initialData);
  mapKeyArray.forEach((key) => {
    dataToReturn = dataToReturn[key];
  });
  return dataToReturn;
}
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: {
    OnSubmit: Function,
    Inputs: Object,
    NotRequiredFields: { type: Array, default: [] },
    InitialData: Object,
    Classes: String
  },
  setup(__props, { expose: __expose }) {
    let props = __props;
    let FormData = ref({ IsValid: false, data: {}, IsSubmitted: false });
    props.InitialData && setInitialValues({ initialValues: props.InitialData, inputs: props.Inputs });
    const HandleSubmit = () => {
      FormData.value.IsSubmitted = true;
      if (isFormValid({ FormData: props.Inputs, notRequired: props.NotRequiredFields })) {
        FormData.value.IsValid = true;
        FormData.value.data = convertInputData({ data: props.Inputs });
        props.OnSubmit && props.OnSubmit(FormData.value.data);
      }
    };
    __expose({
      HandleSubmit
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: __props.Classes }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        FormData: unref(FormData),
        submit: HandleSubmit,
        FormSubmitted: unref(FormData).IsSubmitted
      }, null, _push, _parent);
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Wrapper/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
