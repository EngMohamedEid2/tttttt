import _sfc_main$1 from './index-BB3w89tg.mjs';
import _sfc_main$2 from './Wrapper-C9PHwIs4.mjs';
import _sfc_main$3 from './index-DLkjunpW.mjs';
import { unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './server.mjs';
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
import './index-BFISSL43.mjs';
import './index-CdatWNO3.mjs';
import './NavLink-DUfEGm2n.mjs';
import './index-De4InbXS.mjs';
import './index-BqSnbTRI.mjs';
import './AddressBox-BsV-05a5.mjs';
import './index-Bmsaf34f.mjs';
import './index-BdUW6PKo.mjs';
import './NonEmptyField-CvQGP-Qy.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './SearchDropdown-DHfaS-o_.mjs';
import '@vueuse/core';
import './NumberField-D_3QVr37.mjs';
import './country_code-DDslUgiY.mjs';
import './formValidator-CtAl43Qx.mjs';
import './index-DCnfHsij.mjs';

const _sfc_main = {
  __name: "addresses",
  __ssrInlineRender: true,
  setup(__props) {
    var breadcrumbs = { page: "Saved Address", links: [{ name: "Saved Address" }] };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsBreadcrumb = _sfc_main$1;
      const _component_AccountWrapper = _sfc_main$2;
      const _component_AccountAddresses = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_WidgetsBreadcrumb, { breadcrumbs: unref(breadcrumbs) }, null, _parent));
      _push(ssrRenderComponent(_component_AccountWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_AccountAddresses, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_AccountAddresses)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/addresses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
