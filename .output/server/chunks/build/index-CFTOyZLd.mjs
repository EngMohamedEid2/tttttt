import { H as HandleRequest, d as __nuxt_component_1 } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
  async setup(__props) {
    let __temp, __restore;
    let { data: faq, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("faq", {
      key: "getAllfaq"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="faq-box-contain section-b-space"><div class="container"><div class="row"><div class="col-xl-5"><div class="faq-contain"><h2>${ssrInterpolate(_ctx.$t("Frequently Asked Questions"))}</h2><p>${ssrInterpolate(_ctx.$t("We are answering most frequent questions. No worries if you not find exact one. You can find out more by searching."))}</p></div></div><div class="col-xl-7"><div class="faq-accordion"><div class="accordion" id="accordionExample"><div class="accordion shipping-accordion" id="accordionExample"><!--[-->`);
      ssrRenderList(unref(faq).data, (faq2, index) => {
        _push(`<div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#${"faq" + index + 1}`)}${ssrRenderAttr("aria-expanded", index === 0 ? "true" : "false")}>${ssrInterpolate(faq2.title)} `);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-down-s-line" }, null, _parent));
        _push(`</button></h2><div${ssrRenderAttr("id", `${"faq" + index + 1}`)} data-bs-parent="#accordionExample" class="${ssrRenderClass([{ "show": index === 0 }, "accordion-collapse collapse"])}"><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body"><p>${ssrInterpolate(faq2.description)}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
