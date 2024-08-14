import __nuxt_component_0 from './ContactDetails-D8pkHVQ9.mjs';
import _sfc_main$1 from './ContactForm-D7K7gU4i.mjs';
import __nuxt_component_2 from './Map-CNbQM3Gi.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './Form-Bs8W6qiJ.mjs';
import './formValidator-CtAl43Qx.mjs';
import './form-BZIsiZ8w.mjs';
import './TextInput-C4houpP8.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './EmailInput-DGFq9ZV4.mjs';
import './LargeTextInput-oqRuzrWl.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PagesContactUsContactDetails = __nuxt_component_0;
  const _component_PagesContactUsContactForm = _sfc_main$1;
  const _component_PagesContactUsMap = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)}><section class="contact-box-section"><div class="container-fluid-lg"><div class="row g-lg-5 g-3"><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_PagesContactUsContactDetails, null, null, _parent));
  _push(`</div><div class="col-lg-6">`);
  _push(ssrRenderComponent(_component_PagesContactUsContactForm, null, null, _parent));
  _push(`</div></div></div></section>`);
  _push(ssrRenderComponent(_component_PagesContactUsMap, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/ContactUs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
