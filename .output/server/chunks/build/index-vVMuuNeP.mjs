import _sfc_main$1 from './index-CdatWNO3.mjs';
import { p as publicAssetsURL, s as storeToRefs, e as useDataStore, a as useRouter } from './server.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _imports_0 = publicAssetsURL("/images/inner-page/404.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let { ThemeOptions } = storeToRefs(useDataStore());
    function back() {
      useRouter().go(-1);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_WidgetsButton = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-404 section-lg-space" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="image-404"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div></div>`);
      if ((_b = (_a = unref(ThemeOptions).options) == null ? void 0 : _a.error_page) == null ? void 0 : _b.error_page_content) {
        _push(`<div class="col-12"><div class="contain-404"><h3 class="text-content">${ssrInterpolate((_d = (_c = unref(ThemeOptions).options) == null ? void 0 : _c.error_page) == null ? void 0 : _d.error_page_content)}</h3>`);
        if ((_f = (_e = unref(ThemeOptions).options) == null ? void 0 : _e.error_page) == null ? void 0 : _f.back_button_enable) {
          _push(ssrRenderComponent(_component_WidgetsButton, {
            classes: "btn btn-md text-white theme-bg-color mt-4 mx-auto",
            id: "back_button",
            onOnClick: ($event) => back()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2;
              if (_push2) {
                _push2(`${ssrInterpolate((_b2 = (_a2 = unref(ThemeOptions).options) == null ? void 0 : _a2.error_page) == null ? void 0 : _b2.back_button_text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_d2 = (_c2 = unref(ThemeOptions).options) == null ? void 0 : _c2.error_page) == null ? void 0 : _d2.back_button_text), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/Error404/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
