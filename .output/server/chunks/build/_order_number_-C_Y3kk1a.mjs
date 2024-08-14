import _sfc_main$1 from './index-BB3w89tg.mjs';
import { h as useFetch, B as BaseUrl, G as GetHeaders, i as useRoute } from './server.mjs';
import { withAsyncContext, ref, resolveComponent, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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
  __name: "[order_number]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, refresh, pending } = ([__temp, __restore] = withAsyncContext(() => useFetch(`trackOrder/${useRoute().params.order_number}`, {
      baseURL: BaseUrl,
      headers: GetHeaders(),
      method: "get",
      key: `GetOrder${useRoute().params.order_number}`,
      cache: false
    }, "$8RKDZsWidX")), __temp = await __temp, __restore(), __temp), order_statuses = ref([
      { title: "Order Processed", component: "CommonSvgOrderStatusProcessed" },
      { title: "Order Shipped", component: "CommonSvgOrderStatusShipped" },
      { title: "Order Enroute", component: "CommonSvgOrderStatusEnroute" },
      { title: "Order Arrived", component: "CommonSvgOrderStatusArrived" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_OrderTable = resolveComponent("OrderTable");
      const _component_OrderStatusRightSidebar = resolveComponent("OrderStatusRightSidebar");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, null, null, _parent));
      if (!unref(pending)) {
        _push(`<section class="section-b-space order-tracking-sec"><div class="container-fluid-lg"><div class="row"><div class="col-12 mb-4"><div class="order-detail-title"><h2>Your order: ${ssrInterpolate(unref(data).order_number)}</h2><div class="right-detail">`);
        if (unref(data).payment_status.toLowerCase().includes("complete")) {
          _push(`<label>Status : <span class="text-theme">Completed</span></label>`);
        } else {
          _push(`<a href="#" class="btn btn-2-animation btn-animation btn-md">Pay Now</a>`);
        }
        _push(`<a href="#" class="btn btn-2-animation btn-animation btn-md">Download Invoice</a></div></div></div><div class="col-9"><div class="mb-4"><div class="tracking-panel"><ul><!--[-->`);
        ssrRenderList(unref(order_statuses), (status, index) => {
          _push(`<li class="${ssrRenderClass([{ active: index + 1 <= unref(data).order_status.sequence }])}"><div class="panel-content"><div class="icon">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(status.component), null, null), _parent);
          _push(`</div><div class="status">${ssrInterpolate(status.title)}</div></div></li>`);
        });
        _push(`<!--]--></ul></div></div><div class="tracking-wrapper">`);
        _push(ssrRenderComponent(_component_OrderTable, {
          items: unref(data).products
        }, null, _parent));
        _push(`</div></div>`);
        if (unref(data)) {
          _push(ssrRenderComponent(_component_OrderStatusRightSidebar, { order: unref(data) }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/status/[order_number].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
