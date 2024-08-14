import _sfc_main$1 from './LoginForm-4z-Qvxgv.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { N as NavigationLinks } from './links-CiE55gld.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-CiTIP3wF.mjs';
import { _ as _export_sfc } from './server.mjs';
import './EmailField-BojWyXd0.mjs';
import './inputFieldValidators-6AcCCHeQ.mjs';
import './PasswordField-7r8oKleI.mjs';
import './index-CdatWNO3.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  var _a;
  const _component_AuthCommonFormLoginForm = _sfc_main$1;
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "log-in-section background-image-2 section-b-space" }, _attrs))}><div class="container-fluid-lg w-100"><div class="row"><div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"><div class="image-contain"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto"><div class="log-in-box"><div class="log-in-title"><h3>${ssrInterpolate(_ctx.$t("Welcome To Fastkart"))}</h3><h4>${ssrInterpolate(_ctx.$t("Log In Your Account"))}</h4></div><div class="input-box">`);
  _push(ssrRenderComponent(_component_AuthCommonFormLoginForm, null, null, _parent));
  _push(`</div><div class="other-log-in"><h6>${ssrInterpolate(_ctx.$t("or"))}</h6></div><div class="sign-up-box"><h4>${ssrInterpolate(_ctx.$t("Don't have an account"))}?</h4>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: (_a = "NavigationLinks" in _ctx ? _ctx.NavigationLinks : unref(NavigationLinks)) == null ? void 0 : _a.signUp
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("Sign Up"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("Sign Up")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as default };
