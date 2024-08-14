import { p as publicAssetsURL, s as storeToRefs, e as useDataStore, d as __nuxt_component_1 } from './server.mjs';
import __nuxt_component_0 from './index-De4InbXS.mjs';
import _sfc_main$1 from './index-BE1zGU45.mjs';
import { ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './nuxt-link-D35ckuRb.mjs';
import './index-Bmsaf34f.mjs';

const _imports_0 = publicAssetsURL("/images/icon/hot-sale.png");
const _sfc_main = {
  __name: "TodayDeal",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "basic" }
  },
  setup(__props) {
    let todaysDeals = ref(false);
    let ModalData = ref();
    let { ThemeOptions } = storeToRefs(useDataStore());
    function toggleModal({ state = true }) {
      var _a, _b, _c;
      ModalData.value = (_c = (_b = (_a = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _a.options) == null ? void 0 : _b.header) == null ? void 0 : _c.today_deals;
      todaysDeals.value = state;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsModalsCommon = __nuxt_component_0;
      const _component_HeaderElementsDeals = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "basic") {
        _push(`<button class="btn deal-button">`);
        _push(ssrRenderComponent(_component_Icon, { name: "ri:flashlight-line" }, null, _parent));
        _push(`<span>${ssrInterpolate(_ctx.$t("Deal Today"))}</span></button>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.style == "standard") {
        _push(`<a class="btn theme-bg-color ms-3 fire-button"><div class="fire"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div><span>${ssrInterpolate(_ctx.$t("Hot Deals"))}</span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_WidgetsModalsCommon, {
        modalClass: "deal-modal",
        showModal: unref(todaysDeals),
        onClose: ($event) => toggleModal({ state: false })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_HeaderElementsDeals, {
              todayDeal: unref(ModalData),
              onClose: ($event) => toggleModal({ state: false })
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_HeaderElementsDeals, {
                todayDeal: unref(ModalData),
                onClose: ($event) => toggleModal({ state: false })
              }, null, 8, ["todayDeal", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/TodayDeal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
