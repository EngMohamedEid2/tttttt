import _sfc_main$1 from './index-BB3w89tg.mjs';
import __nuxt_component_1 from './index-BtpqVaIK.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
import './ContactDetails-D8pkHVQ9.mjs';
import './ContactForm-D7K7gU4i.mjs';
import './Form-Bs8W6qiJ.mjs';
import './formValidator-CtAl43Qx.mjs';
import './form-BZIsiZ8w.mjs';
import './TextInput-C4houpP8.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './EmailInput-DGFq9ZV4.mjs';
import './LargeTextInput-oqRuzrWl.mjs';
import './Map-CNbQM3Gi.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var breadcrumbs = { page: "Contact Us", links: [{ name: "Contact Us" }] };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_PagesContactUs = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(ssrRenderComponent(_component_PagesContactUs, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
