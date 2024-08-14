import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  props: {
    sellerStore: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.sellerStore.status) {
        _push(`<section class="saller-poster-section"><div class="container-fluid-lg"><div class="row">`);
        if (__props.sellerStore.image_url) {
          _push(`<div class="col-12"><div class="poster-box"><div class="poster-image"><img${ssrRenderAttr("src", (_a = __props.sellerStore) == null ? void 0 : _a.image_url)} class="img-fluid" alt=""></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="col-12"><div class="seller-title h-100 d-flex align-items-center"><div><h2>${ssrInterpolate(__props.sellerStore.title)}</h2><p>${ssrInterpolate(__props.sellerStore.description)}</p></div></div></div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/BecomeSeller/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
