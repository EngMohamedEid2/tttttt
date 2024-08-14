import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "SkeletonProductBox",
  __ssrInlineRender: true,
  props: {
    style: {
      type: [String, Object],
      default: "horizontal"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "horizontal") {
        _push(`<div class="skeleton-div"><div class="product-box skeleton-box"><div class="skeleton"><div class="skeleton__section skeleton__section--card"><div class="skeleton__img"></div><div><div class="skeleton__header skeleton__header--long"></div><div class="skeleton__p"></div></div></div><div class="skeleton__p"></div><div class="skeleton__p"></div><div class="skeleton__p"></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "vertical") {
        _push(`<div class="offer-product skeleton-vertical"><a class="offer-image"></a><div class="offer-detail"><div><a href="javascript:void(0)" class="text-title"><h6 class="name"></h6></a><span></span><div class="vertical-price"></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ProductBox/SkeletonProductBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
