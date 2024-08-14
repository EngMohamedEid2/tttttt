import { ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "TopContent",
  __ssrInlineRender: true,
  props: {
    themeOptions: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="mainSlider"><div><div class="middle-header"><div class="middle-content"><p><!--[-->`);
      ssrRenderList(__props.themeOptions.header.top_bar_content, (topContent, index) => {
        _push(`<span>${topContent.content}</span>`);
      });
      _push(`<!--]--></p></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/TopContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
