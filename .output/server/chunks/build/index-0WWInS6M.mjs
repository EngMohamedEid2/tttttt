import _sfc_main$1 from './Logo-DkacPCPW.mjs';
import _sfc_main$2 from './About-CqnpUXIg.mjs';
import _sfc_main$3 from './Category-BBpcVzL5.mjs';
import _sfc_main$4 from './index-Bmsaf34f.mjs';
import _sfc_main$5 from './Links-DKmRfa4B.mjs';
import _sfc_main$6 from './Cantact-CNsFhL98.mjs';
import _sfc_main$7 from './Social-B5uxyuhT.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { p as publicAssetsURL, s as storeToRefs, e as useDataStore, H as HandleRequest } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './nuxt-link-D35ckuRb.mjs';
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

const _imports_0 = publicAssetsURL("/images/payment/1.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    footer: Object
  },
  setup(__props) {
    var _a, _b, _c;
    let active = ref({
      categories: false,
      useful_link: false,
      quick_pages: false
    });
    let CategoryInitial = ref([]);
    let { ThemeOptions } = storeToRefs(useDataStore());
    (_c = (_b = (_a = ThemeOptions == null ? void 0 : ThemeOptions.value) == null ? void 0 : _a.options) == null ? void 0 : _b.footer) == null ? void 0 : _c.footer_categories.map((id) => {
      let { data: categories } = HandleRequest(`category/${id}`, { key: `GetFooterCategory${id}`, type: "product" });
      CategoryInitial.value.push(categories);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca;
      const _component_FooterLogo = _sfc_main$1;
      const _component_FooterAbout = _sfc_main$2;
      const _component_FooterCategory = _sfc_main$3;
      const _component_WidgetsNoData = _sfc_main$4;
      const _component_FooterLinks = _sfc_main$5;
      const _component_FooterCantact = _sfc_main$6;
      const _component_FooterSocial = _sfc_main$7;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["section-t-space", (_a2 = __props.footer) == null ? void 0 : _a2.footer_class]
      }, _attrs))}><div class="container-fluid-lg"><div class="main-footer section-b-space"><div class="row g-md-4 g-3"><div class="col-xl-3 col-lg-4 col-sm-6"><div class="footer-logo">`);
      _push(ssrRenderComponent(_component_FooterLogo, {
        data: (_b2 = unref(ThemeOptions)) == null ? void 0 : _b2.options,
        footer: __props.footer
      }, null, _parent));
      _push(ssrRenderComponent(_component_FooterAbout, {
        data: (_c2 = unref(ThemeOptions)) == null ? void 0 : _c2.options
      }, null, _parent));
      _push(`</div></div>`);
      if ((_g = (_f = (_e = (_d = unref(ThemeOptions)) == null ? void 0 : _d.options) == null ? void 0 : _e.footer) == null ? void 0 : _f.footer_categories) == null ? void 0 : _g.length) {
        _push(`<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6"><div class="${ssrRenderClass([{ show: unref(active)["categories"] }, "footer-title"])}"><h4>${ssrInterpolate(_ctx.$t("Categories"))}</h4></div><div class="footer-contain">`);
        _push(ssrRenderComponent(_component_FooterCategory, { data: unref(CategoryInitial) }, null, _parent));
        if (!((_k = (_j = (_i = (_h = unref(ThemeOptions)) == null ? void 0 : _h.options) == null ? void 0 : _i.footer) == null ? void 0 : _j.footer_categories) == null ? void 0 : _k.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            class: "no-data-footer",
            text: "No Category Found"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_o = (_n = (_m = (_l = unref(ThemeOptions)) == null ? void 0 : _l.options) == null ? void 0 : _m.footer) == null ? void 0 : _n.useful_link) == null ? void 0 : _o.length) {
        _push(`<div class="col-xl col-lg-2 col-sm-3"><div class="${ssrRenderClass([{ show: unref(active)["useful_link"] }, "footer-title"])}"><h4>${ssrInterpolate(_ctx.$t("Useful Links"))}</h4></div><div class="footer-contain">`);
        _push(ssrRenderComponent(_component_FooterLinks, {
          links: (_r = (_q = (_p = unref(ThemeOptions)) == null ? void 0 : _p.options) == null ? void 0 : _q.footer) == null ? void 0 : _r.useful_link
        }, null, _parent));
        if (!((_v = (_u = (_t = (_s = unref(ThemeOptions)) == null ? void 0 : _s.options) == null ? void 0 : _t.footer) == null ? void 0 : _u.useful_link) == null ? void 0 : _v.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            class: "no-data-footer",
            text: "No Link Found"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_z = (_y = (_x = (_w = unref(ThemeOptions)) == null ? void 0 : _w.options) == null ? void 0 : _x.footer) == null ? void 0 : _y.help_center) == null ? void 0 : _z.length) {
        _push(`<div class="col-xl-2 col-sm-3"><div class="${ssrRenderClass([{ show: unref(active)["help_center"] }, "footer-title"])}"><h4>${ssrInterpolate(_ctx.$t("Help Center"))}</h4></div><div class="footer-contain">`);
        _push(ssrRenderComponent(_component_FooterLinks, {
          links: (_C = (_B = (_A = unref(ThemeOptions)) == null ? void 0 : _A.options) == null ? void 0 : _B.footer) == null ? void 0 : _C.help_center
        }, null, _parent));
        if (!((_G = (_F = (_E = (_D = unref(ThemeOptions)) == null ? void 0 : _D.options) == null ? void 0 : _E.footer) == null ? void 0 : _F.help_center) == null ? void 0 : _G.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            class: "no-data-footer",
            text: "No Link Found"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_J = (_I = (_H = unref(ThemeOptions)) == null ? void 0 : _H.options) == null ? void 0 : _I.footer) == null ? void 0 : _J.support_email) || ((_M = (_L = (_K = unref(ThemeOptions)) == null ? void 0 : _K.options) == null ? void 0 : _L.footer) == null ? void 0 : _M.support_number) || ((_P = (_O = (_N = unref(ThemeOptions)) == null ? void 0 : _N.options) == null ? void 0 : _O.footer) == null ? void 0 : _P.play_store_url) || ((_S = (_R = (_Q = unref(ThemeOptions)) == null ? void 0 : _Q.options) == null ? void 0 : _R.footer) == null ? void 0 : _S.app_store_url)) {
        _push(`<div class="col-xl-3 col-lg-4 col-sm-6"><div class="footer-title contact-title"><h4>${ssrInterpolate(_ctx.$t("Contact Us"))}</h4></div>`);
        _push(ssrRenderComponent(_component_FooterCantact, {
          data: unref(ThemeOptions).options
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="sub-footer section-small-space">`);
      if ((_V = (_U = (_T = unref(ThemeOptions)) == null ? void 0 : _T.options) == null ? void 0 : _U.footer) == null ? void 0 : _V.footer_copyright) {
        _push(`<div class="reserve">`);
        if ((_Y = (_X = (_W = unref(ThemeOptions)) == null ? void 0 : _W.options) == null ? void 0 : _X.footer) == null ? void 0 : _Y.copyright_content) {
          _push(`<h6 class="text-content">${ssrInterpolate((_$ = (__ = (_Z = unref(ThemeOptions)) == null ? void 0 : _Z.options) == null ? void 0 : __.footer) == null ? void 0 : _$.copyright_content)}</h6>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="payment"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid" alt=""></div>`);
      if ((_ca = (_ba = (_aa = unref(ThemeOptions)) == null ? void 0 : _aa.options) == null ? void 0 : _ba.footer) == null ? void 0 : _ca.social_media_enable) {
        _push(ssrRenderComponent(_component_FooterSocial, {
          data: unref(ThemeOptions).options
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
