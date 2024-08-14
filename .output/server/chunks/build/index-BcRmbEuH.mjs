import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    option: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_b = (_a = __props.option) == null ? void 0 : _a.product) == null ? void 0 : _b.safe_checkout) && ((_c = __props.product) == null ? void 0 : _c.safe_checkout)) {
        _push(`<div class="paymnet-option"><div class="product-title"><h4>${ssrInterpolate(_ctx.$t("Guaranteed Safe Checkout"))}</h4>`);
        if ((_e = (_d = __props.option) == null ? void 0 : _d.product) == null ? void 0 : _e.safe_checkout_image) {
          _push(`<img${ssrRenderAttr("src", (_g = (_f = __props.option) == null ? void 0 : _f.product) == null ? void 0 : _g.safe_checkout_image)} class="img-fluid payment-img">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_i = (_h = __props.option) == null ? void 0 : _h.product) == null ? void 0 : _i.secure_checkout) && ((_j = __props.product) == null ? void 0 : _j.secure_checkout)) {
        _push(`<div class="secure-site-sec"><h4>${ssrInterpolate(_ctx.$t("Secure Checkout"))}</h4>`);
        if ((_l = (_k = __props.option) == null ? void 0 : _k.product) == null ? void 0 : _l.secure_checkout_image) {
          _push(`<img${ssrRenderAttr("src", (_n = (_m = __props.option) == null ? void 0 : _m.product) == null ? void 0 : _n.secure_checkout_image)} class="img-fluid payment-img">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/PaymentOption/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
