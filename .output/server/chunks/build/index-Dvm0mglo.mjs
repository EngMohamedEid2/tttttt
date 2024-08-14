import { t as transform } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash';
import 'axios';
import 'vue-i18n';
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';
import '@vueuse/components';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pickup-box" }, _attrs))}><div class="product-title"><h4>${ssrInterpolate(_ctx.$t("Product Information"))}</h4></div><div class="product-info"><ul class="product-info-list product-info-list-2">`);
      if ((_a = __props.product) == null ? void 0 : _a.sku) {
        _push(`<li>${ssrInterpolate(_ctx.$t("SKU"))}: ${ssrInterpolate((_b = __props.product) == null ? void 0 : _b.sku)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = __props.product) == null ? void 0 : _c.unit) {
        _push(`<li>${ssrInterpolate(_ctx.$t("SKU"))}: ${ssrInterpolate((_d = __props.product) == null ? void 0 : _d.unit)}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_e = __props.product) == null ? void 0 : _e.sku) {
        _push(`<li>${ssrInterpolate(_ctx.$t("Weight"))}: ${ssrInterpolate((_f = __props.product) == null ? void 0 : _f.weight)} ${ssrInterpolate(_ctx.$t("Gms"))}</li>`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = __props.product) == null ? void 0 : _g.stock_status) {
        _push(`<li class="text- capitalize">${ssrInterpolate(_ctx.$t("Stock Status"))}: ${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))((_h = __props.product) == null ? void 0 : _h.stock_status))}</li>`);
      } else {
        _push(`<!---->`);
      }
      if (((_i = __props.product) == null ? void 0 : _i.quantity) > 0) {
        _push(`<li>${ssrInterpolate(_ctx.$t("Quantity"))}: ${ssrInterpolate((_j = __props.product) == null ? void 0 : _j.quantity)} ${ssrInterpolate(_ctx.$t("Items Left"))}</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductInformation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
