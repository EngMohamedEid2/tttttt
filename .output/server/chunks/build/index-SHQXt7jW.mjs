import _sfc_main$1 from './Berlin-D5IfTCrN.mjs';
import _sfc_main$2 from './index-BWESexYH.mjs';
import _sfc_main$3 from './index-DFV7j_wu.mjs';
import _sfc_main$4 from './index-OTTPGwoa.mjs';
import _sfc_main$5 from './index-BMB04ZHY.mjs';
import _sfc_main$6 from './index-uA_ar0VB.mjs';
import _sfc_main$7 from './index-CdAkXDRf.mjs';
import { H as HandleRequest } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import './SkeletonProductBox-XWsjMSl0.mjs';
import 'swiper/vue';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
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
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './index-BBvJKyN0.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/berlin", {
      key: "getAllBerlin",
      params: { slug: "berlin" }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest("product", {
        key: "getThemeberlinProduct",
        params: { status: 1, theme: "berlin", ids: (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids.join(",") }
      });
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb;
      const _component_ThemesWidgetsHomeBannerBerlin = _sfc_main$1;
      const _component_ThemesWidgetsService = _sfc_main$2;
      const _component_WidgetsTitle = _sfc_main$3;
      const _component_ThemesWidgetsProduct = _sfc_main$4;
      const _component_ThemesWidgetsCategories = _sfc_main$5;
      const _component_WidgetsImageLink = _sfc_main$6;
      const _component_ThemesWidgetsNewsletter = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner) {
        _push(`<section class="home-section pt-md-0 pt-2 ratio_50">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerBerlin, {
          data: (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.home_banner
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = (_f = (_e = unref(data)) == null ? void 0 : _e.content) == null ? void 0 : _f.services_banner) == null ? void 0 : _g.status) {
        _push(ssrRenderComponent(_component_ThemesWidgetsService, {
          data: ((_j = (_i = (_h = unref(data)) == null ? void 0 : _h.content) == null ? void 0 : _i.services_banner) == null ? void 0 : _j.services) || []
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_m = (_l = (_k = unref(data)) == null ? void 0 : _k.content) == null ? void 0 : _l.main_content) == null ? void 0 : _m.status) {
        _push(`<section class="product-section"><div class="container-fluid-lg"><div class="row g-sm-4 g-3"><div class="${ssrRenderClass([((_q = (_p = (_o = (_n = unref(data)) == null ? void 0 : _n.content) == null ? void 0 : _o.main_content) == null ? void 0 : _p.sidebar) == null ? void 0 : _q.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12", "col-xxl-9 col-xl-8"])}">`);
        if (((_v = (_u = (_t = (_s = (_r = unref(data)) == null ? void 0 : _r.content) == null ? void 0 : _s.main_content) == null ? void 0 : _t.section1_products) == null ? void 0 : _u.product_ids) == null ? void 0 : _v.length) || 0 >= 5) {
          _push(`<div class="section-b-space">`);
          _push(ssrRenderComponent(_component_WidgetsTitle, {
            title: (_z = (_y = (_x = (_w = unref(data)) == null ? void 0 : _w.content) == null ? void 0 : _x.main_content) == null ? void 0 : _y.section1_products) == null ? void 0 : _z.title,
            description: (_D = (_C = (_B = (_A = unref(data)) == null ? void 0 : _A.content) == null ? void 0 : _B.main_content) == null ? void 0 : _C.section1_products) == null ? void 0 : _D.description
          }, null, _parent));
          _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
            Products: unref(product),
            spaceBetween: 15,
            productIds: ((_H = (_G = (_F = (_E = unref(data)) == null ? void 0 : _E.content) == null ? void 0 : _F.main_content) == null ? void 0 : _G.section1_products) == null ? void 0 : _H.product_ids) || [],
            slider: true,
            style: "horizontal",
            sliderPerView: 4,
            productstyle: "product-classic",
            boxClass: "product-box-bg"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_L = (_K = (_J = (_I = unref(data)) == null ? void 0 : _I.content) == null ? void 0 : _J.main_content) == null ? void 0 : _K.section2_categories_icon_list) == null ? void 0 : _L.status) {
          _push(`<div class="section-b-space">`);
          _push(ssrRenderComponent(_component_WidgetsTitle, {
            title: (_P = (_O = (_N = (_M = unref(data)) == null ? void 0 : _M.content) == null ? void 0 : _N.main_content) == null ? void 0 : _O.section2_categories_icon_list) == null ? void 0 : _P.title,
            description: (_T = (_S = (_R = (_Q = unref(data)) == null ? void 0 : _Q.content) == null ? void 0 : _R.main_content) == null ? void 0 : _S.section2_categories_icon_list) == null ? void 0 : _T.description
          }, null, _parent));
          _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
            style: "horizontal",
            theme: "paris",
            categoryIds: ((_X = (_W = (_V = (_U = unref(data)) == null ? void 0 : _U.content) == null ? void 0 : _V.main_content) == null ? void 0 : _W.section2_categories_icon_list) == null ? void 0 : _X.category_ids) || []
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_$ = (__ = (_Z = (_Y = unref(data)) == null ? void 0 : _Y.content) == null ? void 0 : _Z.main_content) == null ? void 0 : __.section3_two_column_banners) == null ? void 0 : _$.status) {
          _push(`<div class="section-b-space"><div class="row g-md-4 g-3"><div class="col-xxl-6 col-xl-12 col-lg-6 b-left">`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            classes: "banner-contain hover-effect",
            image: (_da = (_ca = (_ba = (_aa = unref(data)) == null ? void 0 : _aa.content) == null ? void 0 : _ba.main_content) == null ? void 0 : _ca.section3_two_column_banners) == null ? void 0 : _da.banner_1,
            bgImage: false
          }, null, _parent));
          _push(`</div><div class="col-xxl-6 col-xl-12 col-lg-6 b-left">`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            classes: "banner-contain hover-effect",
            image: (_ha = (_ga = (_fa = (_ea = unref(data)) == null ? void 0 : _ea.content) == null ? void 0 : _fa.main_content) == null ? void 0 : _ga.section3_two_column_banners) == null ? void 0 : _ha.banner_2,
            bgImage: false
          }, null, _parent));
          _push(`</div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_ma = (_la = (_ka = (_ja = (_ia = unref(data)) == null ? void 0 : _ia.content) == null ? void 0 : _ja.main_content) == null ? void 0 : _ka.section4_products) == null ? void 0 : _la.product_ids) == null ? void 0 : _ma.length) || 0 >= 5) {
          _push(`<div class="">`);
          _push(ssrRenderComponent(_component_WidgetsTitle, {
            title: (_qa = (_pa = (_oa = (_na = unref(data)) == null ? void 0 : _na.content) == null ? void 0 : _oa.main_content) == null ? void 0 : _pa.section4_products) == null ? void 0 : _qa.title,
            description: (_ua = (_ta = (_sa = (_ra = unref(data)) == null ? void 0 : _ra.content) == null ? void 0 : _sa.main_content) == null ? void 0 : _ta.section4_products) == null ? void 0 : _ua.description
          }, null, _parent));
          _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
            Products: unref(product),
            sliderPerView: 4,
            spaceBetween: 15,
            productIds: ((_ya = (_xa = (_wa = (_va = unref(data)) == null ? void 0 : _va.content) == null ? void 0 : _wa.main_content) == null ? void 0 : _xa.section4_products) == null ? void 0 : _ya.product_ids) || [],
            slider: true,
            style: "horizontal",
            productstyle: "product-classic",
            boxClass: "product-box-bg"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_Ca = (_Ba = (_Aa = (_za = unref(data)) == null ? void 0 : _za.content) == null ? void 0 : _Aa.main_content) == null ? void 0 : _Ba.sidebar) == null ? void 0 : _Ca.status) {
          _push(`<div class="col-xxl-3 col-xl-4 d-none d-xl-block"><div class="position-sticky top-0">`);
          if ((_Ha = (_Ga = (_Fa = (_Ea = (_Da = unref(data)) == null ? void 0 : _Da.content) == null ? void 0 : _Ea.main_content) == null ? void 0 : _Fa.sidebar) == null ? void 0 : _Ga.categories_icon_list) == null ? void 0 : _Ha.status) {
            _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
              style: "vertical",
              categoryIds: ((_Ma = (_La = (_Ka = (_Ja = (_Ia = unref(data)) == null ? void 0 : _Ia.content) == null ? void 0 : _Ja.main_content) == null ? void 0 : _Ka.sidebar) == null ? void 0 : _La.categories_icon_list) == null ? void 0 : _Ma.category_ids) || [],
              title: (_Ra = (_Qa = (_Pa = (_Oa = (_Na = unref(data)) == null ? void 0 : _Na.content) == null ? void 0 : _Oa.main_content) == null ? void 0 : _Pa.sidebar) == null ? void 0 : _Qa.categories_icon_list) == null ? void 0 : _Ra.title
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if ((_Wa = (_Va = (_Ua = (_Ta = (_Sa = unref(data)) == null ? void 0 : _Sa.content) == null ? void 0 : _Ta.main_content) == null ? void 0 : _Ua.sidebar) == null ? void 0 : _Va.right_side_banners) == null ? void 0 : _Wa.status) {
            _push(`<div class="section-t-space banner-contain">`);
            _push(ssrRenderComponent(_component_WidgetsImageLink, {
              classes: "banner-contain hover-effect",
              image: (_$a = (__a = (_Za = (_Ya = (_Xa = unref(data)) == null ? void 0 : _Xa.content) == null ? void 0 : _Ya.main_content) == null ? void 0 : _Za.sidebar) == null ? void 0 : __a.right_side_banners) == null ? void 0 : _$a.banner_1,
              bgImage: false
            }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (((_eb = (_db = (_cb = (_bb = (_ab = unref(data)) == null ? void 0 : _ab.content) == null ? void 0 : _bb.main_content) == null ? void 0 : _cb.sidebar) == null ? void 0 : _db.sidebar_products) == null ? void 0 : _eb.status) && ((_kb = (_jb = (_ib = (_hb = (_gb = (_fb = unref(data)) == null ? void 0 : _fb.content) == null ? void 0 : _gb.main_content) == null ? void 0 : _hb.sidebar) == null ? void 0 : _ib.sidebar_products) == null ? void 0 : _jb.product_ids) == null ? void 0 : _kb.length) || 0 >= 3) {
            _push(`<div class="section-t-space"><div class="category-menu"><h3>${ssrInterpolate((_pb = (_ob = (_nb = (_mb = (_lb = unref(data)) == null ? void 0 : _lb.content) == null ? void 0 : _mb.main_content) == null ? void 0 : _nb.sidebar) == null ? void 0 : _ob.sidebar_products) == null ? void 0 : _pb.title)}</h3>`);
            _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
              Products: unref(product),
              productIds: ((_ub = (_tb = (_sb = (_rb = (_qb = unref(data)) == null ? void 0 : _qb.content) == null ? void 0 : _rb.main_content) == null ? void 0 : _sb.sidebar) == null ? void 0 : _tb.sidebar_products) == null ? void 0 : _ub.product_ids) || [],
              style: "vertical"
            }, null, _parent));
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_wb = (_vb = unref(data)) == null ? void 0 : _vb.content) == null ? void 0 : _wb.full_width_banner) {
        _push(`<section class="banner-section"><div class="container-fluid-lg"><div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "home-contain hover-effect",
          image: (_yb = (_xb = unref(data)) == null ? void 0 : _xb.content) == null ? void 0 : _yb.full_width_banner,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Cb = (_Bb = (_Ab = (_zb = unref(data)) == null ? void 0 : _zb.content) == null ? void 0 : _Ab.product_list_1) == null ? void 0 : _Bb.product_ids) == null ? void 0 : _Cb.length) || 0 >= 3) {
        _push(`<section><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Fb = (_Eb = (_Db = unref(data)) == null ? void 0 : _Db.content) == null ? void 0 : _Eb.product_list_1) == null ? void 0 : _Fb.title,
          description: (_Ib = (_Hb = (_Gb = unref(data)) == null ? void 0 : _Gb.content) == null ? void 0 : _Hb.product_list_1) == null ? void 0 : _Ib.description
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_Lb = (_Kb = (_Jb = unref(data)) == null ? void 0 : _Jb.content) == null ? void 0 : _Kb.product_list_1) == null ? void 0 : _Lb.product_ids) || [],
          style: "classic"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Ob = (_Nb = (_Mb = unref(data)) == null ? void 0 : _Mb.content) == null ? void 0 : _Nb.news_letter) == null ? void 0 : _Ob.status) {
        _push(`<section class="newsletter-section section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsNewsletter, {
          data: (_Qb = (_Pb = unref(data)) == null ? void 0 : _Pb.content) == null ? void 0 : _Qb.news_letter
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Berlin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
