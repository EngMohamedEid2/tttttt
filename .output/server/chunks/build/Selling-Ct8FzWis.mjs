import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "Selling",
  __ssrInlineRender: true,
  props: {
    sellerStore: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.sellerStore.status) {
        _push(`<section class="selling-section section-b-space"><div class="container-fluid-lg"><div class="vendor-title"><h5>${ssrInterpolate(__props.sellerStore.title)}</h5><p>${ssrInterpolate(__props.sellerStore.description)}</p><a href="#" class="btn btn-animation theme-bg-color d-inline-block mt-3">${ssrInterpolate(_ctx.$t("Start Selling"))}</a></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/BecomeSeller/Selling.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
