import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "Business",
  __ssrInlineRender: true,
  props: {
    sellerStore: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.sellerStore.status) {
        _push(`<section class="business-section section-b-space"><div class="container-fluid-lg"><div class="vendor-title mb-5"><h5>${ssrInterpolate(__props.sellerStore.title)}</h5></div><div class="business-contain"><div class="row g-xl-4 g-3"><div class="col-sm-6 col-xl-4"><div class="business-box"><div><div class="business-number"><h2>1</h2></div><div class="business-detail"><h4>${ssrInterpolate(__props.sellerStore.step_1.title)}</h4><p>${ssrInterpolate(__props.sellerStore.step_1.description)}</p></div></div></div></div><div class="col-sm-6 col-xl-4"><div class="business-box"><div><div class="business-number"><h2>2</h2></div><div class="business-detail"><h4>${ssrInterpolate(__props.sellerStore.step_2.title)}</h4><p>${ssrInterpolate(__props.sellerStore.step_2.description)}</p></div></div></div></div><div class="col-sm-6 col-xl-4"><div class="business-box"><div><div class="business-number"><h2>3</h2></div><div class="business-detail"><h4>${ssrInterpolate(__props.sellerStore.step_3.title)}</h4><p>${ssrInterpolate(__props.sellerStore.step_3.description)}</p></div></div></div></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/BecomeSeller/Business.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
