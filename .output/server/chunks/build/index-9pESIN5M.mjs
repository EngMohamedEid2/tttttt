import { s as storeToRefs, e as useDataStore, H as HandleRequest, t as transform, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-DORLaeSS.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BmmeNPlo.mjs';
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
    let Pointparams = ref({ paginate: 10, page: 1 });
    let { Settings } = storeToRefs(useDataStore());
    let { data: point, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("points/consumer", {
      key: "getAllPoints",
      params: Pointparams
    })), __temp = await __temp, __restore(), __temp);
    const ChangePage = ({ toPage }) => {
      Pointparams.value.page = toPage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsPagination = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Points"))}</h5></div></div>`);
      if ((_c = (_b = (_a = unref(point)) == null ? void 0 : _a.transactions) == null ? void 0 : _b.data) == null ? void 0 : _c.length) {
        _push(`<div class="total-box mt-0"><div class="row"><div class="col-12"><div class="totle-contain wallet-bg"><div class="wallet-point-box"><img${ssrRenderAttr("src", _imports_0)} alt="coin" class="img-fluid"><div class="totle-detail"><h5>${ssrInterpolate(_ctx.$t("Total Points"))}</h5><h3>${ssrInterpolate(unref(point) ? (_d = unref(point)) == null ? void 0 : _d.balance : 0)}</h3></div></div><div class="point-ratio"><h3 class="counter">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "me-2",
          name: "ri:information-line"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("1 Point"))} = ${ssrInterpolate(Number(1 / ((_g = (_f = (_e = unref(Settings)) == null ? void 0 : _e.values) == null ? void 0 : _f.wallet_points) == null ? void 0 : _g.point_currency_ratio)).toFixed(2))} ${ssrInterpolate(_ctx.$t("Balance"))}</h3></div></div></div></div><div class="wallet-table"><h4 class="user-dashboard-title">${ssrInterpolate(_ctx.$t("Transactions"))}</h4><table><tbody><tr><th>${ssrInterpolate(_ctx.$t("No"))}.</th><th>${ssrInterpolate(_ctx.$t("Date"))}</th><th>${ssrInterpolate(_ctx.$t("Amount"))}</th><th>${ssrInterpolate(_ctx.$t("Remark"))}</th><th>${ssrInterpolate(_ctx.$t("Status"))}</th></tr><!--[-->`);
        ssrRenderList((_i = (_h = unref(point)) == null ? void 0 : _h.transactions) == null ? void 0 : _i.data, (transaction, index) => {
          _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(transaction == null ? void 0 : transaction.created_at))}</td><td>${ssrInterpolate(transaction == null ? void 0 : transaction.amount)}</td><td>${ssrInterpolate(transaction == null ? void 0 : transaction.detail)}</td><td><div class="${ssrRenderClass(`status-${transaction == null ? void 0 : transaction.type}`)}"><span>${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(transaction == null ? void 0 : transaction.type))}</span></div></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div>`);
        if ((_l = (_k = (_j = unref(point)) == null ? void 0 : _j.transactions) == null ? void 0 : _k.data) == null ? void 0 : _l.length) {
          _push(`<nav class="custome-pagination">`);
          _push(ssrRenderComponent(_component_WidgetsPagination, {
            Data: unref(point).transactions,
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
      if (!((_o = (_n = (_m = unref(point)) == null ? void 0 : _m.transactions) == null ? void 0 : _n.data) == null ? void 0 : _o.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Transaction Found",
          description: "You have not earned any points yet"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Point/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
