import _sfc_main$1 from './Tokyo-Dp1gFhYA.mjs';
import _sfc_main$2 from './index-BMB04ZHY.mjs';
import _sfc_main$3 from './index-Dn4zruDm.mjs';
import _sfc_main$4 from './index-DFV7j_wu.mjs';
import _sfc_main$5 from './index-OTTPGwoa.mjs';
import _sfc_main$6 from './index-uA_ar0VB.mjs';
import _sfc_main$7 from './index-CqvVwqy9.mjs';
import _sfc_main$8 from './index-CdAkXDRf.mjs';
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
import './nuxt-link-D35ckuRb.mjs';
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/tokyo", {
      key: "getAllTokyo"
      // params: { slug: 'tokyo' }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest("product", {
        key: "getThemeParisProduct",
        params: { status: 1, theme: "tokyo", ids: (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids.join(",") }
      });
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb;
      const _component_ThemesWidgetsHomeBannerTokyo = _sfc_main$1;
      const _component_ThemesWidgetsCategories = _sfc_main$2;
      const _component_ThemesWidgetsBanner = _sfc_main$3;
      const _component_WidgetsTitle = _sfc_main$4;
      const _component_ThemesWidgetsProduct = _sfc_main$5;
      const _component_WidgetsImageLink = _sfc_main$6;
      const _component_ThemesWidgetsFourColumnProduct = _sfc_main$7;
      const _component_ThemesWidgetsNewsletter = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="home-section home-section-ratio pt-md-2 pt-4">`);
      _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerTokyo, {
        theme: "tokyo",
        data: (_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner
      }, null, _parent));
      _push(`</section>`);
      if ((_e = (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.categories_icon_list) == null ? void 0 : _e.status) {
        _push(`<section><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
          style: "horizontal",
          slidesPerView: 9,
          categoryIds: ((_h = (_g = (_f = unref(data)) == null ? void 0 : _f.content) == null ? void 0 : _g.categories_icon_list) == null ? void 0 : _h.category_ids) || [],
          image: (_k = (_j = (_i = unref(data)) == null ? void 0 : _i.content) == null ? void 0 : _j.categories_icon_list) == null ? void 0 : _k.image_url,
          theme: "paris"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_n = (_m = (_l = unref(data)) == null ? void 0 : _l.content) == null ? void 0 : _m.coupons) == null ? void 0 : _n.status) {
        _push(`<section><div class="container-fluid-lg"><div class="row"><div class="col-12 sale-banner">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: (_p = (_o = unref(data)) == null ? void 0 : _o.content) == null ? void 0 : _p.coupons,
          classes: "banner-contain hover-effect",
          style: "full_width"
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_s = (_r = (_q = unref(data)) == null ? void 0 : _q.content) == null ? void 0 : _r.featured_banners) == null ? void 0 : _s.status) {
        _push(`<section class="banner-section ratio_60 wow fadeInUp">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: (_v = (_u = (_t = unref(data)) == null ? void 0 : _t.content) == null ? void 0 : _u.featured_banners) == null ? void 0 : _v.banners,
          style: "horizontal"
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section><div class="container-fluid-lg"><div class="row g-3"><div class="${ssrRenderClass(((_z = (_y = (_x = (_w = unref(data)) == null ? void 0 : _w.content) == null ? void 0 : _x.main_content) == null ? void 0 : _y.sidebar) == null ? void 0 : _z.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12")}">`);
      if (((_D = (_C = (_B = (_A = unref(data)) == null ? void 0 : _A.content) == null ? void 0 : _B.main_content) == null ? void 0 : _C.section1_products) == null ? void 0 : _D.status) && ((_I = (_H = (_G = (_F = (_E = unref(data)) == null ? void 0 : _E.content) == null ? void 0 : _F.main_content) == null ? void 0 : _G.section1_products) == null ? void 0 : _H.product_ids) == null ? void 0 : _I.length) >= 5) {
        _push(`<div><div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_M = (_L = (_K = (_J = unref(data)) == null ? void 0 : _J.content) == null ? void 0 : _K.main_content) == null ? void 0 : _L.section1_products) == null ? void 0 : _M.title,
          description: (_Q = (_P = (_O = (_N = unref(data)) == null ? void 0 : _N.content) == null ? void 0 : _O.main_content) == null ? void 0 : _P.section1_products) == null ? void 0 : _Q.description,
          svg: "cake"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          spaceBetween: 15,
          productIds: ((_U = (_T = (_S = (_R = unref(data)) == null ? void 0 : _R.content) == null ? void 0 : _S.main_content) == null ? void 0 : _T.section1_products) == null ? void 0 : _U.product_ids) || [],
          slider: true,
          style: "horizontal",
          boxClass: "product-box-bg",
          productstyle: "product-standard"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Y = (_X = (_W = (_V = unref(data)) == null ? void 0 : _V.content) == null ? void 0 : _W.main_content) == null ? void 0 : _X.section2_slider_products) == null ? void 0 : _Y.status) && ((_ba = (_aa = (_$ = (__ = (_Z = unref(data)) == null ? void 0 : _Z.content) == null ? void 0 : __.main_content) == null ? void 0 : _$.section2_slider_products) == null ? void 0 : _aa.product_ids) == null ? void 0 : _ba.length) >= 5) {
        _push(`<div><div class="section-t-space">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_fa = (_ea = (_da = (_ca = unref(data)) == null ? void 0 : _ca.content) == null ? void 0 : _da.main_content) == null ? void 0 : _ea.section2_slider_products) == null ? void 0 : _fa.title,
          description: (_ja = (_ia = (_ha = (_ga = unref(data)) == null ? void 0 : _ga.content) == null ? void 0 : _ha.main_content) == null ? void 0 : _ia.section2_slider_products) == null ? void 0 : _ja.description,
          svg: "cake"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_na = (_ma = (_la = (_ka = unref(data)) == null ? void 0 : _ka.content) == null ? void 0 : _la.main_content) == null ? void 0 : _ma.section2_slider_products) == null ? void 0 : _na.product_ids) || [],
          style: "classic",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ra = (_qa = (_pa = (_oa = unref(data)) == null ? void 0 : _oa.content) == null ? void 0 : _pa.main_content) == null ? void 0 : _qa.section3_products) == null ? void 0 : _ra.status) && ((_wa = (_va = (_ua = (_ta = (_sa = unref(data)) == null ? void 0 : _sa.content) == null ? void 0 : _ta.main_content) == null ? void 0 : _ua.section3_products) == null ? void 0 : _va.product_ids) == null ? void 0 : _wa.length) >= 5) {
        _push(`<div><div class="section-t-space">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Aa = (_za = (_ya = (_xa = unref(data)) == null ? void 0 : _xa.content) == null ? void 0 : _ya.main_content) == null ? void 0 : _za.section3_products) == null ? void 0 : _Aa.title,
          description: (_Ea = (_Da = (_Ca = (_Ba = unref(data)) == null ? void 0 : _Ba.content) == null ? void 0 : _Ca.main_content) == null ? void 0 : _Da.section3_products) == null ? void 0 : _Ea.description,
          svg: "cake"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          spaceBetween: 15,
          productIds: ((_Ia = (_Ha = (_Ga = (_Fa = unref(data)) == null ? void 0 : _Fa.content) == null ? void 0 : _Ga.main_content) == null ? void 0 : _Ha.section3_products) == null ? void 0 : _Ia.product_ids) || [],
          slider: true,
          productstyle: "product-standard",
          style: "horizontal",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Ma = (_La = (_Ka = (_Ja = unref(data)) == null ? void 0 : _Ja.content) == null ? void 0 : _Ka.main_content) == null ? void 0 : _La.section4_products) == null ? void 0 : _Ma.status) && ((_Ra = (_Qa = (_Pa = (_Oa = (_Na = unref(data)) == null ? void 0 : _Na.content) == null ? void 0 : _Oa.main_content) == null ? void 0 : _Pa.section4_products) == null ? void 0 : _Qa.product_ids) == null ? void 0 : _Ra.length) >= 5) {
        _push(`<div><div class="section-t-space">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Va = (_Ua = (_Ta = (_Sa = unref(data)) == null ? void 0 : _Sa.content) == null ? void 0 : _Ta.main_content) == null ? void 0 : _Ua.section4_products) == null ? void 0 : _Va.title,
          description: (_Za = (_Ya = (_Xa = (_Wa = unref(data)) == null ? void 0 : _Wa.content) == null ? void 0 : _Xa.main_content) == null ? void 0 : _Ya.section4_products) == null ? void 0 : _Za.description,
          svg: "cake"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          spaceBetween: 15,
          productIds: ((_bb = (_ab = (_$a = (__a = unref(data)) == null ? void 0 : __a.content) == null ? void 0 : _$a.main_content) == null ? void 0 : _ab.section4_products) == null ? void 0 : _bb.product_ids) || [],
          slider: true,
          productstyle: "product-standard",
          style: "horizontal",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if ((_fb = (_eb = (_db = (_cb = unref(data)) == null ? void 0 : _cb.content) == null ? void 0 : _db.main_content) == null ? void 0 : _eb.sidebar) == null ? void 0 : _fb.status) {
        _push(`<div class="col-xxl-3 col-xl-4 d-none d-xl-block"><div class="position-sticky top-0">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          classes: "ratio_209 rounded",
          banners: (_kb = (_jb = (_ib = (_hb = (_gb = unref(data)) == null ? void 0 : _gb.content) == null ? void 0 : _hb.main_content) == null ? void 0 : _ib.sidebar) == null ? void 0 : _jb.right_side_banners) == null ? void 0 : _kb.banner_1,
          style: "vertical"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          classes: "ratio_125 section-t-space",
          banners: (_pb = (_ob = (_nb = (_mb = (_lb = unref(data)) == null ? void 0 : _lb.content) == null ? void 0 : _mb.main_content) == null ? void 0 : _nb.sidebar) == null ? void 0 : _ob.right_side_banners) == null ? void 0 : _pb.banner_2,
          style: "vertical"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
      if ((_sb = (_rb = (_qb = unref(data)) == null ? void 0 : _qb.content) == null ? void 0 : _rb.full_width_banner) == null ? void 0 : _sb.status) {
        _push(`<div><section><div class="container-fluid-lg"><div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_ub = (_tb = unref(data)) == null ? void 0 : _tb.content) == null ? void 0 : _ub.full_width_banner,
          bgImage: false,
          class: "home-contain hover-effect"
        }, null, _parent));
        _push(`</div></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_xb = (_wb = (_vb = unref(data)) == null ? void 0 : _vb.content) == null ? void 0 : _wb.slider_products) == null ? void 0 : _xb.status) {
        _push(`<div><section class="top-selling-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsFourColumnProduct, {
          Products: unref(product),
          data: (_zb = (_yb = unref(data)) == null ? void 0 : _yb.content) == null ? void 0 : _zb.slider_products
        }, null, _parent));
        _push(`</div></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Cb = (_Bb = (_Ab = unref(data)) == null ? void 0 : _Ab.content) == null ? void 0 : _Bb.news_letter) == null ? void 0 : _Cb.status) {
        _push(`<div><section class="newsletter-section section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsNewsletter, {
          data: (_Eb = (_Db = unref(data)) == null ? void 0 : _Db.content) == null ? void 0 : _Eb.news_letter
        }, null, _parent));
        _push(`</section></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Tokyo/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
