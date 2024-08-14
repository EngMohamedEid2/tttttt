import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    class: {
      type: String,
      default: "banner-contain-2 hover-effect"
    },
    imageUrl: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.imageUrl) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-contain-2 hover-effect section-b-space" }, _attrs))}><img${ssrRenderAttr("src", __props.imageUrl)} class="img-fluid rounded-3" alt="banner"></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Collection/widgets/Banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
