import { ref, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    startDate: String,
    endDate: String
  },
  setup(__props) {
    let remainingTime = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(remainingTime)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "time deal-timer product-deal-timer mx-md-0 mx-auto" }, _attrs))}><div class="product-title"><h4>${ssrInterpolate(_ctx.$t("Hurry up! Sales Ends In"))}</h4></div><ul><li><div class="counter d-block"><div class="days d-block"><h5>${ssrInterpolate(unref(remainingTime).days)}</h5></div><h6>${ssrInterpolate(_ctx.$t("Days"))}</h6></div></li><li><div class="counter d-block"><div class="hours d-block"><h5>${ssrInterpolate(unref(remainingTime).hours)}</h5></div><h6>${ssrInterpolate(_ctx.$t("Hours"))}</h6></div></li><li><div class="counter d-block"><div class="minutes d-block"><h5>${ssrInterpolate(unref(remainingTime).minutes)}</h5></div><h6>${ssrInterpolate(_ctx.$t("Min"))}</h6></div></li><li><div class="counter d-block"><div class="seconds d-block"><h5>${ssrInterpolate(unref(remainingTime).seconds)}</h5></div><h6>${ssrInterpolate(_ctx.$t("Sec"))}</h6></div></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/SaleTimer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
