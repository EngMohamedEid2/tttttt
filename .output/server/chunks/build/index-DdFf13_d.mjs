import _sfc_main$1 from './index-DORLaeSS.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { H as HandleRequest, t as transform } from './server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
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
    let Refundparams = ref({ paginate: 10, page: 1 });
    let { data: refund, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("refund", {
      key: "getAllHomeRefund",
      params: Refundparams
    })), __temp = await __temp, __restore(), __temp);
    const ChangePage = ({ toPage }) => {
      Refundparams.value.page = toPage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_WidgetsPagination = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Refund"))}</h5></div></div>`);
      if ((_b = (_a = unref(refund)) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
        _push(`<div class="total-box mt-0"><div class="wallet-table mt-0 refund-table"><table><tbody><tr><th>${ssrInterpolate(_ctx.$t("No"))}</th><th>${ssrInterpolate(_ctx.$t("Order"))}</th><th>${ssrInterpolate(_ctx.$t("Status"))}</th><th>${ssrInterpolate(_ctx.$t("Reason"))}</th><th>${ssrInterpolate(_ctx.$t("Created At"))}</th></tr><!--[-->`);
        ssrRenderList((_c = unref(refund)) == null ? void 0 : _c.data, (refund2, index) => {
          var _a2;
          _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td><span class="fw-bolder">#${ssrInterpolate((_a2 = refund2 == null ? void 0 : refund2.order) == null ? void 0 : _a2.order_number)}</span></td><td><div class="${ssrRenderClass(`status-${refund2 == null ? void 0 : refund2.status}`)}"><span>${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(refund2 == null ? void 0 : refund2.status))}</span></div></td><td>${ssrInterpolate(refund2 == null ? void 0 : refund2.reason)}</td><td>${ssrInterpolate(unref(dateFormatter)(refund2 == null ? void 0 : refund2.created_at))}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        if ((_e = (_d = unref(refund)) == null ? void 0 : _d.data) == null ? void 0 : _e.length) {
          _push(`<nav class="custome-pagination">`);
          _push(ssrRenderComponent(_component_WidgetsPagination, {
            Data: unref(refund),
            onChangePage: (toPage) => ChangePage({ toPage })
          }, null, _parent));
          _push(`</nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_g = (_f = unref(refund)) == null ? void 0 : _f.data) == null ? void 0 : _g.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Refunds Found",
          description: "You have no refunds processed yet"
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Refund/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
