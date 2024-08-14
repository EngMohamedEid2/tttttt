import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "SkeletonSliderBlog",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "grid"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="blog-skeleton"><div class="skeleton-div"><div class="product-box skeleton-box"><div class="skeleton"><div class="skeleton__section skeleton__section--card"><div class="skeleton__img"></div><div><div class="skeleton__header skeleton__header--long"></div><div class="skeleton__p"></div></div></div><div class="content-div"><div class="skeleton__p"></div><div class="skeleton__p"></div><div class="skeleton__p"></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Blog/SkeletonSliderBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
