import { d as __nuxt_component_1 } from './server.mjs';
import { ref, mergeProps, useSSRContext } from 'vue';
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
    product: Object,
    option: Object
  },
  setup(__props) {
    ref("http://localhost:3000");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1;
      if (((_a = __props.product) == null ? void 0 : _a.social_share) && ((_c = (_b = __props.option) == null ? void 0 : _b.product) == null ? void 0 : _c.social_share)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "share-option" }, _attrs))}><div class="product-title mt-0"><h4>${ssrInterpolate(_ctx.$t("Share it"))}</h4></div><ul class="product-social"><li><a href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:facebook-fill" }, null, _parent));
        _push(`</a></li><li><a href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:twitter-fill" }, null, _parent));
        _push(`</a></li><li><a href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:linkedin-fill" }, null, _parent));
        _push(`</a></li><li><a href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:whatsapp-fill" }, null, _parent));
        _push(`</a></li><li><a href="javascript:void(0)">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:mail-fill" }, null, _parent));
        _push(`</a></li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductSocialShare/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
