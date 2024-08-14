import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    store: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "product-image" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.store.product_images, (image) => {
        _push(`<li><img${ssrRenderAttr("src", image ? image : "/images/product.png")} class="img-fluid" alt=""></li>`);
      });
      _push(`<!--]-->`);
      if (__props.store.products_count > 3) {
        _push(`<li>+${ssrInterpolate(__props.store.products_count - 3)}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Widgets/StoreProduct/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
