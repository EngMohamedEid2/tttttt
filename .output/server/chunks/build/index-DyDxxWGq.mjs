import _sfc_main$1 from './Denver-CPNrmY9e.mjs';
import _sfc_main$2 from './index-BMB04ZHY.mjs';
import _sfc_main$3 from './index-DFV7j_wu.mjs';
import _sfc_main$4 from './index-OTTPGwoa.mjs';
import _sfc_main$5 from './index-uA_ar0VB.mjs';
import _sfc_main$6 from './index-CqvVwqy9.mjs';
import _sfc_main$7 from './index-CdAkXDRf.mjs';
import { H as HandleRequest } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import './index-BBvJKyN0.mjs';
import './index-CdatWNO3.mjs';
import 'swiper/vue';
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
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';
import '@vueuse/components';
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-link-D35ckuRb.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/denver", {
      key: "getAllDenver",
      params: { slug: "denver" }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest("product", {
        key: "getThemeDenverProduct",
        params: { status: 1, theme: "denver", ids: (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids.join(",") }
      });
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca;
      const _component_ThemesWidgetsHomeBannerDenver = _sfc_main$1;
      const _component_ThemesWidgetsCategories = _sfc_main$2;
      const _component_WidgetsTitle = _sfc_main$3;
      const _component_ThemesWidgetsProduct = _sfc_main$4;
      const _component_WidgetsImageLink = _sfc_main$5;
      const _component_ThemesWidgetsFourColumnProduct = _sfc_main$6;
      const _component_ThemesWidgetsNewsletter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner) {
        _push(`<section class="home-section-2 home-section-bg pt-md-0 pt-2 overflow-hidden">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerDenver, {
          data: (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.home_banner
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_g = (_f = (_e = unref(data)) == null ? void 0 : _e.content) == null ? void 0 : _f.categories_icon_list) == null ? void 0 : _g.status) && ((_k = (_j = (_i = (_h = unref(data)) == null ? void 0 : _h.content) == null ? void 0 : _i.categories_icon_list) == null ? void 0 : _j.category_ids) == null ? void 0 : _k.length)) {
        _push(`<section><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
          style: "horizontal",
          theme: "paris",
          categoryIds: ((_n = (_m = (_l = unref(data)) == null ? void 0 : _l.content) == null ? void 0 : _m.categories_icon_list) == null ? void 0 : _n.category_ids) || [],
          image: (_q = (_p = (_o = unref(data)) == null ? void 0 : _o.content) == null ? void 0 : _p.categories_icon_list) == null ? void 0 : _q.image_url
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_u = (_t = (_s = (_r = unref(data)) == null ? void 0 : _r.content) == null ? void 0 : _s.products_list_1) == null ? void 0 : _t.product_ids) == null ? void 0 : _u.length) || 0 >= 6) {
        _push(`<section class="product-section product-section-3"><div class="container-fluid-lg"><div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_x = (_w = (_v = unref(data)) == null ? void 0 : _v.content) == null ? void 0 : _w.products_list_1) == null ? void 0 : _x.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_A = (_z = (_y = unref(data)) == null ? void 0 : _y.content) == null ? void 0 : _z.products_list_1) == null ? void 0 : _A.product_ids) || [],
          slider: true,
          style: "horizontal",
          sliderPerView: 6,
          productstyle: "product-solid",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_D = (_C = (_B = unref(data)) == null ? void 0 : _B.content) == null ? void 0 : _C.two_column_banners) == null ? void 0 : _D.status) {
        _push(`<section><div class="container-fluid-lg"><div class="row g-4"><div class="col-xxl-8 col-xl-12 col-md-7">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_G = (_F = (_E = unref(data)) == null ? void 0 : _E.content) == null ? void 0 : _F.two_column_banners) == null ? void 0 : _G.banner_1,
          bgImage: false
        }, null, _parent));
        _push(`</div><div class="col-xxl-4 col-xl-12 col-md-5">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_J = (_I = (_H = unref(data)) == null ? void 0 : _H.content) == null ? void 0 : _I.two_column_banners) == null ? void 0 : _J.banner_2,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="top-selling-section no-bg-category"><div class="container-fluid-lg"><div class="row">`);
      if ((_N = (_M = (_L = (_K = unref(data)) == null ? void 0 : _K.content) == null ? void 0 : _L.slider_product_with_banner) == null ? void 0 : _M.left_side_banners) == null ? void 0 : _N.status) {
        _push(`<div class="col-xl-3 col-lg-4 d-lg-block d-none">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain-2 hover-effect",
          image: (_R = (_Q = (_P = (_O = unref(data)) == null ? void 0 : _O.content) == null ? void 0 : _P.slider_product_with_banner) == null ? void 0 : _Q.left_side_banners) == null ? void 0 : _R.banner_1,
          height: false,
          bgImage: false
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(((_V = (_U = (_T = (_S = unref(data)) == null ? void 0 : _S.content) == null ? void 0 : _T.slider_product_with_banner) == null ? void 0 : _U.left_side_banners) == null ? void 0 : _V.status) ? "col-xl-9 col-lg-8" : "col-xxl-12 col-lg-12")}">`);
      _push(ssrRenderComponent(_component_ThemesWidgetsFourColumnProduct, {
        Products: unref(product),
        col: "col-xl-4 col-lg-6 col-md-4 col-sm-6",
        data: (_Y = (_X = (_W = unref(data)) == null ? void 0 : _W.content) == null ? void 0 : _X.slider_product_with_banner) == null ? void 0 : _Y.slider_products
      }, null, _parent));
      _push(`</div></div></div></section>`);
      if (((_$ = (__ = (_Z = unref(data)) == null ? void 0 : _Z.content) == null ? void 0 : __.coupon_banner) == null ? void 0 : _$.status) && ((_ba = (_aa = unref(data)) == null ? void 0 : _aa.content) == null ? void 0 : _ba.coupon_banner)) {
        _push(`<section class="section-t-space"><div class="container-fluid-lg"><div class="banner-contain">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_da = (_ca = unref(data)) == null ? void 0 : _ca.content) == null ? void 0 : _da.coupon_banner,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ha = (_ga = (_fa = (_ea = unref(data)) == null ? void 0 : _ea.content) == null ? void 0 : _fa.products_list_2) == null ? void 0 : _ga.product_ids) == null ? void 0 : _ha.length) || 0 >= 6) {
        _push(`<section class="product-section product-section-3"><div class="container-fluid-lg"><div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_ka = (_ja = (_ia = unref(data)) == null ? void 0 : _ia.content) == null ? void 0 : _ja.products_list_2) == null ? void 0 : _ka.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_na = (_ma = (_la = unref(data)) == null ? void 0 : _la.content) == null ? void 0 : _ma.products_list_2) == null ? void 0 : _na.product_ids) || [],
          slider: true,
          style: "horizontal",
          sliderPerView: 6,
          productstyle: "product-solid",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ra = (_qa = (_pa = (_oa = unref(data)) == null ? void 0 : _oa.content) == null ? void 0 : _pa.products_list_3) == null ? void 0 : _qa.product_ids) == null ? void 0 : _ra.length) || 0 >= 6) {
        _push(`<section class="product-section product-section-3"><div class="container-fluid-lg"><div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_ua = (_ta = (_sa = unref(data)) == null ? void 0 : _sa.content) == null ? void 0 : _ta.products_list_3) == null ? void 0 : _ua.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_xa = (_wa = (_va = unref(data)) == null ? void 0 : _va.content) == null ? void 0 : _wa.products_list_3) == null ? void 0 : _xa.product_ids) || [],
          slider: true,
          style: "horizontal",
          sliderPerView: 6,
          productstyle: "product-solid",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Aa = (_za = (_ya = unref(data)) == null ? void 0 : _ya.content) == null ? void 0 : _za.news_letter) == null ? void 0 : _Aa.status) {
        _push(`<section class="newsletter-section section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsNewsletter, {
          data: (_Ca = (_Ba = unref(data)) == null ? void 0 : _Ba.content) == null ? void 0 : _Ca.news_letter
        }, null, _parent));
        _push(`</section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Denver/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
