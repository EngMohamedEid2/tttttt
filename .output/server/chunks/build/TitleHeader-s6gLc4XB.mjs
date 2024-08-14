import { d as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import __nuxt_component_0$1 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-DLFrQal3.mjs';
import { ref, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from 'vue';
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
import './index-CdatWNO3.mjs';

const _sfc_main = {
  __name: "TitleHeader",
  __ssrInlineRender: true,
  props: {
    order: Object
  },
  setup(__props) {
    let payment = ref(false);
    let order_number = ref(0);
    function payModal(number, state = true) {
      payment.value = state;
      order_number.value = number;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_Icon = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_WidgetsModalsCommon = __nuxt_component_0$1;
      const _component_WidgetsModalsPayModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title-header"><div class="d-flex align-items-center w-100 justify-content-between"><h5>${ssrInterpolate(_ctx.$t("Order Number"))}: #${ssrInterpolate((_a = __props.order) == null ? void 0 : _a.order_number)}</h5><div class="right-option">`);
      if ((((_b = __props.order) == null ? void 0 : _b.payment_status) === "FAILED" || ((_c = __props.order) == null ? void 0 : _c.payment_status) === "PENDING") && (((_d = __props.order) == null ? void 0 : _d.order_status) && ((_f = (_e = __props.order) == null ? void 0 : _e.order_status) == null ? void 0 : _f.slug) != "cancelled") && ((_g = __props.order) == null ? void 0 : _g.payment_method) != "cod") {
        _push(`<a href="javascript:void(0)" class="btn btn-md fw-bold text-light theme-bg-color">${ssrInterpolate(_ctx.$t("Pay Now"))}`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri-refresh-line" }, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (((_h = __props.order) == null ? void 0 : _h.invoice_url) && ((_i = __props.order) == null ? void 0 : _i.payment_status) && ((_j = __props.order) == null ? void 0 : _j.payment_status) === "COMPLETED") {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: __props.order.invoice_url,
          class: "btn btn-md fw-bold text-light theme-bg-color ms-auto gap-2",
          download: "download"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate("Invoice")} `);
              _push2(ssrRenderComponent(_component_Icon, { name: "ri:download-2-fill" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString("Invoice") + " "),
                createVNode(_component_Icon, { name: "ri:download-2-fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        showModal: unref(payment),
        onClose: ($event) => payModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsModalsPayModal, {
              orderNumber: unref(order_number),
              onClose: ($event) => payModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_WidgetsModalsPayModal, {
                orderNumber: unref(order_number),
                onClose: ($event) => payModal({ state: false })
              }, null, 8, ["orderNumber", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/TitleHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
