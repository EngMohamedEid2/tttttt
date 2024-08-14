import { d as __nuxt_component_1 } from './server.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-36xWC6J0.mjs';
import _sfc_main$2 from './index-B8xgC6e1.mjs';
import _sfc_main$3 from './index-BAqQL5bv.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    product: Object,
    option: Object
  },
  setup(__props) {
    var _a, _b;
    let props = __props;
    let policy = ref("");
    let sizeChartModal = ref(false);
    let sizeChartData = props.product.size_chart_image;
    let deliveryModal = ref(false);
    let askQuestion = ref(false);
    policy.value = (_b = (_a = props == null ? void 0 : props.option) == null ? void 0 : _a.product) == null ? void 0 : _b.shipping_and_return;
    function sizechartModal({ state = true }) {
      sizeChartModal.value = state;
    }
    function deliveryReturnModal({ state = true }) {
      deliveryModal.value = state;
    }
    function askQuestionModal({ state = true }) {
      askQuestion.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_WidgetsModalsSizeChartModal = _sfc_main$1;
      const _component_WidgetsModalsDeliveryReturnModal = _sfc_main$2;
      const _component_WidgetsModalsQuestionModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a2 = __props.product) == null ? void 0 : _a2.quantity) && __props.product.quantity <= 10) {
        _push(`<div class="progress-sec"><div class="left-progressbar"><h6>${ssrInterpolate(_ctx.$t("Please hurry! only"))} ${ssrInterpolate(__props.product.quantity)} ${ssrInterpolate(_ctx.$t("left in stock"))}</h6><div class="${ssrRenderClass([{ "danger-progress": __props.product.quantity <= 2, "warning-progress": __props.product.quantity >= 3 && __props.product.quantity <= 7 }, "progress"])}" role="progressbar"><div class="progress-bar progress-bar-striped progress-bar-animated" style="${ssrRenderStyle({ width: __props.product.quantity * 100 / 10 + "%" })}"></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.product.size_chart_image || unref(policy) && __props.product.is_return) {
        _push(`<div class="size-delivery-info">`);
        if (__props.product.size_chart_image) {
          _push(`<a href="javascript:void(0)">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri:ruler-line" }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("Size Chart"))}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(policy) && __props.product.is_return) {
          _push(`<a href="javascript:void(0)">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri:truck-line" }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("Delivery Return"))}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(policy) && __props.product.is_return) {
          _push(`<a href="javascript:void(0)">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri:questionnaire-line" }, null, _parent));
          _push(` ${ssrInterpolate(_ctx.$t("Ask a Question"))}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(sizeChartModal),
        onClose: ($event) => sizechartModal({ state: false }),
        classes: "modal-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsSizeChartModal, {
              image: unref(sizeChartData),
              onClose: ($event) => sizechartModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsSizeChartModal, {
                image: unref(sizeChartData),
                onClose: ($event) => sizechartModal({ state: false })
              }, null, 8, ["image", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(deliveryModal),
        onClose: ($event) => deliveryReturnModal({ state: false }),
        classes: "modal-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsDeliveryReturnModal, {
              policy: unref(policy),
              onClose: ($event) => deliveryReturnModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsDeliveryReturnModal, {
                policy: unref(policy),
                onClose: ($event) => deliveryReturnModal({ state: false })
              }, null, 8, ["policy", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(askQuestion),
        onClose: ($event) => askQuestionModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsQuestionModal, {
              product: __props.product,
              onClose: ($event) => askQuestionModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsQuestionModal, {
                product: __props.product,
                onClose: ($event) => askQuestionModal({ state: false })
              }, null, 8, ["product", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Widgets/ProductAction/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
