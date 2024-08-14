import { d as __nuxt_component_1 } from './server.mjs';
import { useSSRContext } from 'vue';
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
    store: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="saller-contact"><div class="seller-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:smartphone-line" }, null, _parent));
      _push(`</div><div class="contact-detail"><h5>${ssrInterpolate("Contact Us")}: <span>+ ${ssrInterpolate(__props.store.vendor.phone)}</span></h5></div></div><div class="saller-contact mt-2"><div class="seller-icon">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:mail-line" }, null, _parent));
      _push(`</div><div class="contact-detail"><h5>${ssrInterpolate("Email")}: <span>${ssrInterpolate(__props.store.vendor.email)}</span></h5></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/Seller/Widgets/ContectDetails/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
