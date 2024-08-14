import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-section" }, _attrs))}><div class="container-fluid-lg"><div class="row g-3 row-cols-xxl-5 row-cols-lg-3 row-cols-sm-2"><!--[-->`);
      ssrRenderList(__props.data, (service) => {
        _push(`<div><div class="service-contain-2"><img${ssrRenderAttr("src", service.image_url)} class="icon-width" alt=""><div class="service-detail"><h3>${ssrInterpolate(service == null ? void 0 : service.title)}</h3><h6 class="text-content">${ssrInterpolate(service == null ? void 0 : service.sub_title)}</h6></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Service/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
