import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "grid"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.type == "grid") {
        _push(`<div class="blog-skeleton"><div class="skeleton-div"><div class="product-box skeleton-box"><div class="skeleton"><div class="skeleton__section skeleton__section--card"><div class="skeleton__img"></div><div><div class="skeleton__header skeleton__header--long"></div><div class="skeleton__p"></div></div></div><div class="content-div"><div class="skeleton__p"></div><div class="skeleton__p"></div><div class="skeleton__p"></div></div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.type == "sidebar") {
        _push(`<div class="accordion left-accordion-box"><div class="accordion-item skeleton-accordion"><h2 class="accordion-header"><button class="accordion-button" type="button"><span></span></button></h2><div class="accordion-collapse"><div class="accordion-body"><ul><li class="placeholder col-6"></li><li class="placeholder col-7"></li><li class="placeholder col-10"></li><li class="placeholder col-9"></li><li class="placeholder col-7"></li><li class="placeholder col-6"></li><li class="placeholder col-7"></li><li class="placeholder col-11"></li><li class="placeholder col-9"></li><li class="placeholder col-7"></li><li class="placeholder col-8"></li><li class="placeholder col-7"></li><li class="placeholder col-11"></li><li class="placeholder col-9"></li><li class="placeholder col-7"></li><li class="placeholder col-6"></li><li class="placeholder col-8"></li><li class="placeholder col-4"></li><li class="placeholder col-9"></li><li class="placeholder col-7"></li></ul></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/SkeletonBlogs.vue/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
