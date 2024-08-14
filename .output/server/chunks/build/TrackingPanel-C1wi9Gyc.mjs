import { t as transform } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "TrackingPanel",
  __ssrInlineRender: true,
  props: {
    order: Object,
    orderStatus: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4" }, _attrs))}><div class="tracking-panel">`);
      if (__props.order && !((_b = (_a = __props.order) == null ? void 0 : _a.sub_orders) == null ? void 0 : _b.length)) {
        _push(`<ul><!--[-->`);
        ssrRenderList((_c = __props.orderStatus) == null ? void 0 : _c.data, (orderStatus, index) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
          _push(`<li class="${ssrRenderClass({
            "d-none": (orderStatus == null ? void 0 : orderStatus.sequence) >= ((_b2 = (_a2 = __props.order) == null ? void 0 : _a2.order_status) == null ? void 0 : _b2.sequence) && (((_c2 = __props.order) == null ? void 0 : _c2.order_status) && ((_d2 = __props.order) == null ? void 0 : _d2.order_status.slug) == "cancelled") || (orderStatus == null ? void 0 : orderStatus.slug) == "cancelled",
            "active": (orderStatus == null ? void 0 : orderStatus.sequence) <= ((_f2 = (_e2 = __props.order) == null ? void 0 : _e2.order_status) == null ? void 0 : _f2.sequence)
          })}"><div class="panel-content"><div class="icon"><img${ssrRenderAttr("src", `/svg/tracking/${orderStatus == null ? void 0 : orderStatus.slug}.svg`)} class="img-fluid" alt="image"></div><div class="status">${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))((_g2 = orderStatus == null ? void 0 : orderStatus.name) == null ? void 0 : _g2.replace("_", " ")))}</div></div></li>`);
        });
        _push(`<!--]-->`);
        if (((_d = __props.order) == null ? void 0 : _d.order_status) && ((_f = (_e = __props.order) == null ? void 0 : _e.order_status) == null ? void 0 : _f.slug) == "cancelled") {
          _push(`<li class="active cancelled-box">`);
          if ((_g = __props.order) == null ? void 0 : _g.order_status) {
            _push(`<div class="panel-content"><div class="icon"><img${ssrRenderAttr("src", `/svg/tracking/${__props.order.order_status.slug}.svg`)} class="img-fluid" alt="image"></div><div class="status">${ssrInterpolate(("transform" in _ctx ? _ctx.transform : unref(transform))(__props.order.order_status.name.replace("_", " ")))}</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Orders/Details/TrackingPanel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
