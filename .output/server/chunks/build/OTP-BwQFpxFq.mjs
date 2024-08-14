import _sfc_main$1 from './index-CdatWNO3.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/inner-page/otp.png");
const _sfc_main = {
  __name: "OTP",
  __ssrInlineRender: true,
  setup(__props) {
    let input = ref({
      token: { data: "" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "log-in-section otp-section section-b-space" }, _attrs))}><div class="container-fluid-lg w-100"><div class="row align-items-center"><div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto"><div class="image-contain"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt="image"></div></div><div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto"><div class="log-in-box"><div class="log-in-title"><h3 class="text-title">${ssrInterpolate(_ctx.$t("Please enter the one time password to verify your account"))}</h3><h5 class="text-content">${ssrInterpolate(_ctx.$t("A code has been sent to"))} <span>${ssrInterpolate(_ctx.$t("email"))}</span></h5></div><form><div class="outer-otp"><div id="otp" class="inner-otp"><input type="text" formControlName="otp" maxlength="5" oninput="this.value = this.value.replace(/[^0-9.]/g, &#39;&#39;).replace(/(\\..*)\\./g, &#39;$1&#39;);"${ssrRenderAttr("value", unref(input).token.data)}><p class="text-danger pt-2 m-0">${ssrInterpolate(unref(input).token.errorMessage)}</p></div></div>`);
      _push(ssrRenderComponent(_component_WidgetsButton, { id: "validate" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("Validate"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("Validate")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/OTP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
