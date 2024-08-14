import _sfc_main$1 from './index-Dlt19KKI.mjs';
import _sfc_main$2 from './index-Chsussq8.mjs';
import _sfc_main$3 from './index-BIIz-G6l.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './server.mjs';
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
    let tabs = ref([
      { title: "Description", id: "pills-description" },
      { title: "Review", id: "pills-review" },
      { title: "Q&A", id: "pills-qa" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsWapperTab = _sfc_main$1;
      const _component_ShopProductDetailsWidgetsProductReview = _sfc_main$2;
      const _component_ShopProductDetailsWidgetsQuestionsAnswers = _sfc_main$3;
      _push(ssrRenderComponent(_component_WidgetsWapperTab, mergeProps({ tabs: unref(tabs) }, _attrs), {
        "pills-description": withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="product-description"${_scopeId}><div class="nav-desh ckeditor-content"${_scopeId}>${(_a = __props.product) == null ? void 0 : _a.description}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "product-description" }, [
                createVNode("div", {
                  class: "nav-desh ckeditor-content",
                  innerHTML: (_b = __props.product) == null ? void 0 : _b.description
                }, null, 8, ["innerHTML"])
              ])
            ];
          }
        }),
        "pills-review": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ShopProductDetailsWidgetsProductReview, {
              product: __props.product,
              reviews: __props.reviews
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ShopProductDetailsWidgetsProductReview, {
                product: __props.product,
                reviews: __props.reviews
              }, null, 8, ["product", "reviews"])
            ];
          }
        }),
        "pills-qa": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ShopProductDetailsWidgetsQuestionsAnswers, {
              product: __props.product,
              questionAnswers: __props.questionAnswers
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ShopProductDetailsWidgetsQuestionsAnswers, {
                product: __props.product,
                questionAnswers: __props.questionAnswers
              }, null, 8, ["product", "questionAnswers"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductDetailsTabs/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
