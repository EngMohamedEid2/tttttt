import { d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_Icon = __nuxt_component_1;
      if (((_a = __props.product) == null ? void 0 : _a.estimated_delivery_text) || ((_b = __props.product) == null ? void 0 : _b.return_policy_text) && ((_c = __props.product) == null ? void 0 : _c.is_return)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "delivery-info" }, _attrs))}><div class="product-title"><h4>${ssrInterpolate(_ctx.$t("Delivery Details"))}</h4></div><ul>`);
        if ((_d = __props.product) == null ? void 0 : _d.estimated_delivery_text) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri:truck-line" }, null, _parent));
          _push(` ${ssrInterpolate((_e = __props.product) == null ? void 0 : _e.estimated_delivery_text)}</li>`);
        } else {
          _push(`<!---->`);
        }
        if ((_f = __props.product) == null ? void 0 : _f.return_policy_text) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-left-right-line" }, null, _parent));
          _push(` ${ssrInterpolate((_g = __props.product) == null ? void 0 : _g.return_policy_text)}</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductDeliveryInformation/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
