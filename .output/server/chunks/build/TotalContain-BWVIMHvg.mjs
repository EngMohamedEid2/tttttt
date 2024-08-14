import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-Dcjzr4DX.mjs';
import { _ as _imports_0$1 } from './virtual_public-BmmeNPlo.mjs';
import { p as publicAssetsURL } from './server.mjs';
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

const _imports_2 = publicAssetsURL("/images/svg/order.svg");
const _sfc_main = {
  __name: "TotalContain",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row row-cols-xxl-3 g-sm-4 g-3" }, _attrs))}><div><div class="totle-contain"><div class="wallet-point-box"><img${ssrRenderAttr("src", _imports_0)} class="img-1" alt="wallet"><img${ssrRenderAttr("src", _imports_0)} alt="wallet"><div class="totle-detail"><h5>${ssrInterpolate(_ctx.$t("Balance"))}</h5><h3>${ssrInterpolate(((_a = __props.user) == null ? void 0 : _a.wallet) ? (_c = (_b = __props.user) == null ? void 0 : _b.wallet) == null ? void 0 : _c.balance : 0)}</h3></div></div></div></div><div><div class="totle-contain"><div class="wallet-point-box"><img${ssrRenderAttr("src", _imports_0$1)} class="img-1" alt="coin"><img${ssrRenderAttr("src", _imports_0$1)} alt="coin"><div class="totle-detail"><h5>${ssrInterpolate(_ctx.$t("Total Points"))}</h5><h3>${ssrInterpolate(((_d = __props.user) == null ? void 0 : _d.point) ? (_f = (_e = __props.user) == null ? void 0 : _e.point) == null ? void 0 : _f.balance : 0)}</h3></div></div></div></div><div><div class="totle-contain"><div class="wallet-point-box"><img${ssrRenderAttr("src", _imports_2)} class="img-1" alt="order"><img${ssrRenderAttr("src", _imports_2)} alt="order"><div class="totle-detail"><h5>${ssrInterpolate(_ctx.$t("Total Orders"))}</h5><h3>${ssrInterpolate(((_g = __props.user) == null ? void 0 : _g.orders_count) ? (_h = __props.user) == null ? void 0 : _h.orders_count : 0)}</h3></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Dashboard/TotalContain.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
