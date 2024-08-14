import __nuxt_component_0 from './Vegetable-D-VcBAoC.mjs';
import _sfc_main$1 from './Client-CcWvUnJe.mjs';
import _sfc_main$2 from './Team-YDjXk0wK.mjs';
import _sfc_main$3 from './Review-Bak7BAkH.mjs';
import _sfc_main$4 from './Blog-mFJ4-hX9.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'swiper/vue';
import 'swiper';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './index-Bmsaf34f.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash';
import 'axios';
import 'vue-i18n';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/components';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PagesAboutUsVegetable = __nuxt_component_0;
  const _component_PagesAboutUsClient = _sfc_main$1;
  const _component_PagesAboutUsTeam = _sfc_main$2;
  const _component_PagesAboutUsReview = _sfc_main$3;
  const _component_PagesAboutUsBlog = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PagesAboutUsVegetable, null, null, _parent));
  _push(ssrRenderComponent(_component_PagesAboutUsClient, null, null, _parent));
  _push(ssrRenderComponent(_component_PagesAboutUsTeam, null, null, _parent));
  _push(ssrRenderComponent(_component_PagesAboutUsReview, null, null, _parent));
  _push(ssrRenderComponent(_component_PagesAboutUsBlog, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
