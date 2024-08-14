import _sfc_main$1 from './TotalContain-BWVIMHvg.mjs';
import _sfc_main$2 from './ProfileInformation-BbLpRHuM.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import './virtual_public-Dcjzr4DX.mjs';
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
import './virtual_public-BmmeNPlo.mjs';
import './index-De4InbXS.mjs';
import './index-3nSzk2YZ.mjs';
import './index-CdatWNO3.mjs';
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './EmailField-BojWyXd0.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './NumberField-D_3QVr37.mjs';
import './form-BZIsiZ8w.mjs';
import './country_code-DDslUgiY.mjs';
import './formValidator-CtAl43Qx.mjs';
import './index-BtYfkuY0.mjs';
import './PasswordField-7r8oKleI.mjs';
import './RePasswordField-DTJ5pMq3.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_AccountDashboardTotalContain = _sfc_main$1;
      const _component_AccountDashboardProfileInformation = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-pane fade show active" }, _attrs))}><div class="dashboard-home"><div class="title-header"><div class="d-flex align-items-center"><h5>${ssrInterpolate(_ctx.$t("My Dashboard"))}</h5></div></div><div class="dashboard-user-name"><h6 class="text-content">${ssrInterpolate(_ctx.$t("Hello"))}, <b class="text-title">${ssrInterpolate((_a = __props.user) == null ? void 0 : _a.name)}</b></h6><p class="text-content">${ssrInterpolate(_ctx.$t(
        "Welcome to your personalized My Account Dashboard. Here, you have the power to manage your entire e-commerce  experience in one place.Whether you're exploring the latest products, checking your wallet balance, or updating  your profile, everything is at your fingertips"
      ))}</p></div><div class="total-box">`);
      _push(ssrRenderComponent(_component_AccountDashboardTotalContain, { user: __props.user }, null, _parent));
      _push(`</div><div class="profile-about dashboard-bg-box">`);
      _push(ssrRenderComponent(_component_AccountDashboardProfileInformation, { user: __props.user }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Account/Dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
