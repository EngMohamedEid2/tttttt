import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let alert = ref({
      type: null,
      message: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(alert)["type"] == "error") {
        _push(`<div class="alert alert-danger login-alert" role="alert"><i class="ri-error-warning-line"></i> ${ssrInterpolate(unref(alert)["message"])}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(alert)["type"] == "success") {
        _push(`<div class="alert alert-success login-alert" role="alert"><i class="ri-check-line"></i>${ssrInterpolate(unref(alert)["message"])}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Alert/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
