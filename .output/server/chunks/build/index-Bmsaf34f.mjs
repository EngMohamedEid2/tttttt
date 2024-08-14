import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    classes: { type: String, default: "no-data-added" },
    image: String,
    text: String,
    description: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.classes }, _attrs))}>`);
      if (__props.image) {
        _push(`<img${ssrRenderAttr("src", __props.image)} class="img-fluid" alt="no-data">`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h4>${ssrInterpolate(__props.text)}</h4><p>${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/NoData/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
