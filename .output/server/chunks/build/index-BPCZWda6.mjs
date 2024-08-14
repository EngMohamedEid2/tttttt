import { d as __nuxt_component_1 } from './server.mjs';
import { ref, onUnmounted, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
    option: { type: Object },
    product: { type: Object }
  },
  setup(__props) {
    let ordersCount = ref(10);
    let viewsCount = ref(30);
    let countsInterval = ref();
    onUnmounted(() => {
      clearInterval(countsInterval.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_Icon = __nuxt_component_1;
      if (((_b = (_a = __props.option) == null ? void 0 : _a.product) == null ? void 0 : _b.encourage_order) && ((_c = __props.product) == null ? void 0 : _c.encourage_order) || ((_e = (_d = __props.option) == null ? void 0 : _d.product) == null ? void 0 : _e.encourage_view) && ((_f = __props.product) == null ? void 0 : _f.encourage_view)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-count" }, _attrs))}><ul>`);
        if (((_h = (_g = __props.option) == null ? void 0 : _g.product) == null ? void 0 : _h.encourage_order) && ((_i = __props.product) == null ? void 0 : _i.encourage_order)) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ri-flashlight-line",
            size: "18"
          }, null, _parent));
          _push(`<h6 class="lang">${ssrInterpolate(unref(ordersCount))} ${ssrInterpolate(_ctx.$t("Customers Ordered"))}</h6></li>`);
        } else {
          _push(`<!---->`);
        }
        if (((_k = (_j = __props.option) == null ? void 0 : _j.product) == null ? void 0 : _k.encourage_view) && ((_l = __props.product) == null ? void 0 : _l.encourage_view)) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "ri-eye-line",
            size: "18"
          }, null, _parent));
          _push(`<h6 class="lang">${ssrInterpolate(unref(viewsCount))} ${ssrInterpolate("Active View in this item")}</h6></li>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductView/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
