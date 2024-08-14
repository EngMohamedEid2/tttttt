import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    classes: String,
    title: String,
    description: String,
    svg: { type: String, default: "leaf" },
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style === "simple") {
        _push(`<div class="${ssrRenderClass([__props.classes, "title title-flex-2"])}"><h2>${ssrInterpolate(__props.title)}</h2>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style === "basic") {
        _push(`<div class="${ssrRenderClass([__props.classes, "title"])}"><h2>${ssrInterpolate(__props.title)}</h2><span class="title-leaf"><svg class="icon-width"><use${ssrRenderAttr("xlink:href", `/svg/leaf.svg#${__props.svg}`)}></use></svg></span>`);
        if (__props.description) {
          _push(`<p>${ssrInterpolate(__props.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Title/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
