import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    classes: {
      type: String,
      default: "btn btn-animation w-100 justify-content-center"
    },
    id: String,
    iconClass: String,
    label: String,
    type: String,
    disabled: Boolean
  },
  emits: ["onClick"],
  setup(__props, { emit: __emit }) {
    let buttonId = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: __props.classes,
        id: __props.id,
        type: __props.type,
        disabled: __props.disabled || unref(buttonId) == __props.id
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Button/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
