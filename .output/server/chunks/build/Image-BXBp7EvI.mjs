import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    Data: Object,
    GlobalSelectedVariant: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.Data.product_galleries, (productImages, index) => {
        _push(`<div class="col-12 wow fadeInUp"><div class="slider-image"><img${ssrRenderAttr("src", productImages == null ? void 0 : productImages.original_url)}${ssrRenderAttr("id", productImages.id)} class="img-fluid" alt=""></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Sticky/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
