import { s as storeToRefs, e as useDataStore, d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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
  setup(__props) {
    let { Notification } = storeToRefs(useDataStore());
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsNoData = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("Notifications"))}</h5></div></div>`);
      if ((_a = unref(Notification)) == null ? void 0 : _a.data.length) {
        _push(`<ul class="notification-list"><!--[-->`);
        ssrRenderList(unref(Notification).data, (notification) => {
          var _a2;
          _push(`<li class="${ssrRenderClass({ "unread": notification.data.read_at })}"><h4>${ssrInterpolate((_a2 = notification == null ? void 0 : notification.data) == null ? void 0 : _a2.message)}</h4><h5>`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri-time-line" }, null, _parent));
          _push(` ${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(notification == null ? void 0 : notification.created_at))}</h5></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_c = (_b = unref(Notification)) == null ? void 0 : _b.data) == null ? void 0 : _c.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          class: "no-data-added",
          image: "/svg/empty-items.svg",
          text: "No Notifications Found",
          description: "You have not received any notification yet"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` &gt;`);
            } else {
              return [
                createTextVNode(" >")
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Notification/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
