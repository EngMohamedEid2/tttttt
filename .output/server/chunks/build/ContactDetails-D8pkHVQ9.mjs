import { p as publicAssetsURL, _ as _export_sfc, d as __nuxt_component_1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/inner-page/contact-us.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1;
  const _component_icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "left-sidebar-box" }, _attrs))}><div class="row"><div class="col-xl-12"><div class="contact-image"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div></div><div class="col-xl-12"><div class="contact-title"><h3>${ssrInterpolate(_ctx.$t("Get In Touch"))}</h3></div><div class="contact-detail"><div class="row g-4"><div class="col-xxl-6 col-lg-12 col-sm-6"><div class="contact-detail-box"><div class="contact-icon">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ri:phone-fill" }, null, _parent));
  _push(`</div><div class="contact-detail-title"><h4>${ssrInterpolate(_ctx.$t("Phone"))}</h4></div><div class="contact-detail-contain"><p>(+1) 618 190 496</p></div></div></div><div class="col-xxl-6 col-lg-12 col-sm-6"><div class="contact-detail-box"><div class="contact-icon">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ri:mail-fill" }, null, _parent));
  _push(`</div><div class="contact-detail-title"><h4>${ssrInterpolate(_ctx.$t("Email"))}</h4></div><div class="contact-detail-contain"><p>geweto9420@chokxus.com</p></div></div></div><div class="col-xxl-6 col-lg-12 col-sm-6"><div class="contact-detail-box"><div class="contact-icon">`);
  _push(ssrRenderComponent(_component_icon, { name: "ri:map-pin-fill" }, null, _parent));
  _push(`</div><div class="contact-detail-title"><h4>${ssrInterpolate(_ctx.$t("London Office"))}</h4></div><div class="contact-detail-contain"><p>Cruce Casa de Postas 29</p></div></div></div><div class="col-xxl-6 col-lg-12 col-sm-6"><div class="contact-detail-box"><div class="contact-icon">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ri:building-fill" }, null, _parent));
  _push(`</div><div class="contact-detail-title"><h4>${ssrInterpolate(_ctx.$t("Bournemouth Office"))}</h4></div><div class="contact-detail-contain"><p>Visitaci\xF3n de la Encina 22</p></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/ContactUs/ContactDetails.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
