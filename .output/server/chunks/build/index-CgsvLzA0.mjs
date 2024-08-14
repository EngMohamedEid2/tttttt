import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-Chsussq8.mjs';
import _sfc_main$2 from './index-BIIz-G6l.mjs';
import { ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
import './index-CdatWNO3.mjs';
import './index-Bmsaf34f.mjs';
import './index-De4InbXS.mjs';
import './index-4U42YdIQ.mjs';
import './index-BAqQL5bv.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    reviews: Object,
    questionAnswers: Object
  },
  setup(__props) {
    let open = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_1;
      const _component_ShopProductDetailsWidgetsProductReview = _sfc_main$1;
      const _component_ShopProductDetailsWidgetsQuestionsAnswers = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="accordion accordion-box product-section-box mt-0" id="accordionExample"><div class="accordion shipping-accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#${"description"}`)}${ssrRenderAttr("aria-expanded", _ctx.show == true ? "true" : "false")}><span>${ssrInterpolate(_ctx.$t("Description"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-down-s-line" }, null, _parent));
      _push(`</button></h2><div${ssrRenderAttr("id", `${"description"}`)} data-bs-parent="#accordionExample" class="${ssrRenderClass([{ "show": unref(open) == true }, "accordion-collapse collapse"])}"><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="product-description"><div class="nav-desh ckeditor-content">${(_a = __props.product) == null ? void 0 : _a.description}</div></div></div></div></div></div></div><div class="accordion shipping-accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#${"review"}`)}><span>${ssrInterpolate(_ctx.$t("Review"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-down-s-line" }, null, _parent));
      _push(`</button></h2><div${ssrRenderAttr("id", `${"review"}`)} class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body">`);
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductReview, {
        product: __props.product,
        reviews: __props.reviews
      }, null, _parent));
      _push(`</div></div></div></div></div><div class="accordion shipping-accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#${"qa"}`)}><span>${ssrInterpolate(_ctx.$t("QA"))}</span>`);
      _push(ssrRenderComponent(_component_Icon, { name: "ri:arrow-down-s-line" }, null, _parent));
      _push(`</button></h2><div${ssrRenderAttr("id", `${"qa"}`)} class="accordion-collapse collapse" data-bs-parent="#accordionExample"><div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample"><div class="accordion-body">`);
      _push(ssrRenderComponent(_component_ShopProductDetailsWidgetsQuestionsAnswers, {
        product: __props.product,
        questionAnswers: __props.questionAnswers
      }, null, _parent));
      _push(`</div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductDetailsAccordion/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
