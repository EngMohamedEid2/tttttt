import _sfc_main$1 from './Madrid-DqCmloTD.mjs';
import _sfc_main$2 from './index-Dn4zruDm.mjs';
import _sfc_main$3 from './index-DFV7j_wu.mjs';
import _sfc_main$4 from './index-BMB04ZHY.mjs';
import _sfc_main$5 from './index-OTTPGwoa.mjs';
import _sfc_main$6 from './index-BfofmLq3.mjs';
import _sfc_main$7 from './index-D3nzSjU_.mjs';
import _sfc_main$8 from './index-uA_ar0VB.mjs';
import __nuxt_component_7 from './index-BKalLhOd.mjs';
import { H as HandleRequest } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import 'swiper/vue';
import 'swiper';
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
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/components';
import './index-BBvJKyN0.mjs';
import './index-CdatWNO3.mjs';
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './compare-CJlobl4e.mjs';
import './wishlist-DasiP7YX.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/madrid", {
      key: "getAllmadrid",
      params: { slug: "madrid" }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b, _c;
      return HandleRequest("product", {
        key: "getThemeParisProduct",
        params: {
          status: 1,
          theme: "madrid",
          ids: (_c = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids) == null ? void 0 : _c.join(",")
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    let { data: blog } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b, _c, _d;
      return HandleRequest("blog", {
        key: "GetAllFeaturedBlogs",
        params: {
          status: 1,
          ids: (_d = (_c = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.featured_blogs) == null ? void 0 : _c.blog_ids) == null ? void 0 : _d.join(",")
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb, _Mb, _Nb, _Ob, _Pb, _Qb, _Rb, _Sb, _Tb, _Ub, _Vb, _Wb, _Xb, _Yb, _Zb, __b, _$b, _ac, _bc, _cc, _dc, _ec, _fc, _gc, _hc, _ic, _jc, _kc, _lc, _mc, _nc;
      const _component_ThemesWidgetsHomeBannerMadrid = _sfc_main$1;
      const _component_ThemesWidgetsBanner = _sfc_main$2;
      const _component_WidgetsTitle = _sfc_main$3;
      const _component_ThemesWidgetsCategories = _sfc_main$4;
      const _component_ThemesWidgetsProduct = _sfc_main$5;
      const _component_ThemesWidgetsWalletOffer = _sfc_main$6;
      const _component_ThemesWidgetsDeal = _sfc_main$7;
      const _component_WidgetsImageLink = _sfc_main$8;
      const _component_ThemesWidgetsBlog = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if ((_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner) {
        _push(`<section class="home-section-2 home-section-bg pt-0 overflow-hidden">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerMadrid, {
          data: (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.home_banner
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_g = (_f = (_e = unref(data)) == null ? void 0 : _e.content) == null ? void 0 : _f.featured_banners) == null ? void 0 : _g.status) && ((_k = (_j = (_i = (_h = unref(data)) == null ? void 0 : _h.content) == null ? void 0 : _i.featured_banners) == null ? void 0 : _j.banners) == null ? void 0 : _k.length) || 0 >= 4) {
        _push(`<section class="banner-section ratio_60">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: (_n = (_m = (_l = unref(data)) == null ? void 0 : _l.content) == null ? void 0 : _m.featured_banners) == null ? void 0 : _n.banners,
          style: "horizontal"
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_q = (_p = (_o = unref(data)) == null ? void 0 : _o.content) == null ? void 0 : _p.categories_image_list) == null ? void 0 : _q.status) {
        _push(`<section class="category-section-3"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_t = (_s = (_r = unref(data)) == null ? void 0 : _r.content) == null ? void 0 : _s.categories_image_list) == null ? void 0 : _t.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
          style: "horizontal",
          theme: "madrid",
          slidesPerView: 8,
          categoryIds: ((_w = (_v = (_u = unref(data)) == null ? void 0 : _u.content) == null ? void 0 : _v.categories_image_list) == null ? void 0 : _w.category_ids) || [],
          image: (_z = (_y = (_x = unref(data)) == null ? void 0 : _x.content) == null ? void 0 : _y.categories_image_list) == null ? void 0 : _z.image_url
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_D = (_C = (_B = (_A = unref(data)) == null ? void 0 : _A.content) == null ? void 0 : _B.products_list_1) == null ? void 0 : _C.product_ids) == null ? void 0 : _D.length) || 0 >= 6) {
        _push(`<section class="product-section-3"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_G = (_F = (_E = unref(data)) == null ? void 0 : _E.content) == null ? void 0 : _F.products_list_1) == null ? void 0 : _G.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_J = (_I = (_H = unref(data)) == null ? void 0 : _H.content) == null ? void 0 : _I.products_list_1) == null ? void 0 : _J.product_ids) || [],
          sliderPerView: 6,
          spaceBetween: 15,
          slider: true,
          style: "horizontal",
          productstyle: "product-standard overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_M = (_L = (_K = unref(data)) == null ? void 0 : _K.content) == null ? void 0 : _L.bank_wallet_offers) == null ? void 0 : _M.status) {
        _push(`<section class="bank-section overflow-hidden"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_P = (_O = (_N = unref(data)) == null ? void 0 : _N.content) == null ? void 0 : _O.bank_wallet_offers) == null ? void 0 : _P.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsWalletOffer, {
          offers: (_S = (_R = (_Q = unref(data)) == null ? void 0 : _Q.content) == null ? void 0 : _R.bank_wallet_offers) == null ? void 0 : _S.offers
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_V = (_U = (_T = unref(data)) == null ? void 0 : _T.content) == null ? void 0 : _U.product_with_deals) == null ? void 0 : _V.status) {
        _push(`<section class="product-section product-section-3"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Y = (_X = (_W = unref(data)) == null ? void 0 : _W.content) == null ? void 0 : _X.product_with_deals) == null ? void 0 : _Y.title,
          style: "simple"
        }, null, _parent));
        _push(`<div class="row g-sm-4 g-3">`);
        if ((_aa = (_$ = (__ = (_Z = unref(data)) == null ? void 0 : _Z.content) == null ? void 0 : __.product_with_deals) == null ? void 0 : _$.deal_of_days) == null ? void 0 : _aa.status) {
          _push(`<div class="col-xxl-4 order-lg-2 d-xxl-block d-none">`);
          _push(ssrRenderComponent(_component_ThemesWidgetsDeal, {
            Products: unref(product),
            data: (_da = (_ca = (_ba = unref(data)) == null ? void 0 : _ba.content) == null ? void 0 : _ca.product_with_deals) == null ? void 0 : _da.deal_of_days
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([
          ((_ha = (_ga = (_fa = (_ea = unref(data)) == null ? void 0 : _ea.content) == null ? void 0 : _fa.product_with_deals) == null ? void 0 : _ga.deal_of_days) == null ? void 0 : _ha.status) && ((_ma = (_la = (_ka = (_ja = (_ia = unref(data)) == null ? void 0 : _ia.content) == null ? void 0 : _ja.product_with_deals) == null ? void 0 : _ka.deal_of_days) == null ? void 0 : _la.deals) == null ? void 0 : _ma.length) || 0 ? "col-xxl-8 col-lg-12 order-lg-1" : "col-xxl-12 col-lg-12 order-lg-1",
          "col-xxl-8 col-lg-12 order-lg-1"
        ])}">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_qa = (_pa = (_oa = (_na = unref(data)) == null ? void 0 : _na.content) == null ? void 0 : _oa.product_with_deals) == null ? void 0 : _pa.products_list) == null ? void 0 : _qa.product_ids) || [],
          slider: false,
          style: "horizontal",
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg",
          showItem: ((_ua = (_ta = (_sa = (_ra = unref(data)) == null ? void 0 : _ra.content) == null ? void 0 : _sa.product_with_deals) == null ? void 0 : _ta.deal_of_days) == null ? void 0 : _ua.status) && ((_za = (_ya = (_xa = (_wa = (_va = unref(data)) == null ? void 0 : _va.content) == null ? void 0 : _wa.product_with_deals) == null ? void 0 : _xa.deal_of_days) == null ? void 0 : _ya.deals) == null ? void 0 : _za.length) || 0 ? 4 : 6
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Ca = (_Ba = (_Aa = unref(data)) == null ? void 0 : _Aa.content) == null ? void 0 : _Ba.full_width_banner) == null ? void 0 : _Ca.status) {
        _push(`<section class="offer-section sale-banner"><div class="container-fluid-lg"><div class="row"><div class="col-12 ratio_12">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "offer-box hover-effect",
          image: (_Ea = (_Da = unref(data)) == null ? void 0 : _Da.content) == null ? void 0 : _Ea.full_width_banner,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Ia = (_Ha = (_Ga = (_Fa = unref(data)) == null ? void 0 : _Fa.content) == null ? void 0 : _Ga.products_list_2) == null ? void 0 : _Ha.product_ids) == null ? void 0 : _Ia.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_La = (_Ka = (_Ja = unref(data)) == null ? void 0 : _Ja.content) == null ? void 0 : _Ka.products_list_2) == null ? void 0 : _La.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_Oa = (_Na = (_Ma = unref(data)) == null ? void 0 : _Ma.content) == null ? void 0 : _Na.products_list_2) == null ? void 0 : _Oa.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          spaceBetween: 15,
          style: "horizontal",
          productstyle: "product-standard theme-plus",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Sa = (_Ra = (_Qa = (_Pa = unref(data)) == null ? void 0 : _Pa.content) == null ? void 0 : _Qa.products_list_3) == null ? void 0 : _Ra.product_ids) == null ? void 0 : _Sa.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Va = (_Ua = (_Ta = unref(data)) == null ? void 0 : _Ta.content) == null ? void 0 : _Ua.products_list_3) == null ? void 0 : _Va.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          spaceBetween: 15,
          productIds: ((_Ya = (_Xa = (_Wa = unref(data)) == null ? void 0 : _Wa.content) == null ? void 0 : _Xa.products_list_3) == null ? void 0 : _Ya.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          style: "horizontal",
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_$a = (__a = (_Za = unref(data)) == null ? void 0 : _Za.content) == null ? void 0 : __a.two_column_banners) == null ? void 0 : _$a.status) {
        _push(`<section class="banner-section"><div class="container-fluid-lg"><div class="row gy-lg-0 gy-3"><div class="col-lg-6">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain-3 hover-effect",
          image: (_cb = (_bb = (_ab = unref(data)) == null ? void 0 : _ab.content) == null ? void 0 : _bb.two_column_banners) == null ? void 0 : _cb.banner_1,
          bgImage: false
        }, null, _parent));
        _push(`</div><div class="col-lg-6">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain-3 hover-effect",
          image: (_fb = (_eb = (_db = unref(data)) == null ? void 0 : _db.content) == null ? void 0 : _eb.two_column_banners) == null ? void 0 : _fb.banner_2,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_jb = (_ib = (_hb = (_gb = unref(data)) == null ? void 0 : _gb.content) == null ? void 0 : _hb.products_list_4) == null ? void 0 : _ib.product_ids) == null ? void 0 : _jb.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_mb = (_lb = (_kb = unref(data)) == null ? void 0 : _kb.content) == null ? void 0 : _lb.products_list_4) == null ? void 0 : _mb.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_pb = (_ob = (_nb = unref(data)) == null ? void 0 : _nb.content) == null ? void 0 : _ob.products_list_4) == null ? void 0 : _pb.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          style: "horizontal",
          spaceBetween: 15,
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_tb = (_sb = (_rb = (_qb = unref(data)) == null ? void 0 : _qb.content) == null ? void 0 : _rb.products_list_5) == null ? void 0 : _sb.product_ids) == null ? void 0 : _tb.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_wb = (_vb = (_ub = unref(data)) == null ? void 0 : _ub.content) == null ? void 0 : _vb.products_list_5) == null ? void 0 : _wb.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_zb = (_yb = (_xb = unref(data)) == null ? void 0 : _xb.content) == null ? void 0 : _yb.products_list_5) == null ? void 0 : _zb.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          style: "horizontal",
          spaceBetween: 15,
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Cb = (_Bb = (_Ab = unref(data)) == null ? void 0 : _Ab.content) == null ? void 0 : _Bb.delivery_banners) == null ? void 0 : _Cb.status) {
        _push(`<section class="banner-section"><div class="container-fluid-lg"><div class="row gy-lg-0 gy-3"><div class="col-lg-8">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain  pt-sm-5 hover-effect",
          image: (_Fb = (_Eb = (_Db = unref(data)) == null ? void 0 : _Db.content) == null ? void 0 : _Eb.delivery_banners) == null ? void 0 : _Fb.banner_1,
          bgImage: false
        }, null, _parent));
        _push(`</div><div class="col-lg-4">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain pt-lg-4 hover-effect",
          image: (_Ib = (_Hb = (_Gb = unref(data)) == null ? void 0 : _Gb.content) == null ? void 0 : _Hb.delivery_banners) == null ? void 0 : _Ib.banner_2,
          bgImage: true,
          saleclass: "h-100"
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Mb = (_Lb = (_Kb = (_Jb = unref(data)) == null ? void 0 : _Jb.content) == null ? void 0 : _Kb.products_list_6) == null ? void 0 : _Lb.product_ids) == null ? void 0 : _Mb.length) && ((_Pb = (_Ob = (_Nb = unref(data)) == null ? void 0 : _Nb.content) == null ? void 0 : _Ob.products_list_6) == null ? void 0 : _Pb.status)) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Sb = (_Rb = (_Qb = unref(data)) == null ? void 0 : _Qb.content) == null ? void 0 : _Rb.products_list_6) == null ? void 0 : _Sb.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_Vb = (_Ub = (_Tb = unref(data)) == null ? void 0 : _Tb.content) == null ? void 0 : _Ub.products_list_6) == null ? void 0 : _Vb.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          style: "horizontal",
          spaceBetween: 15,
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Zb = (_Yb = (_Xb = (_Wb = unref(data)) == null ? void 0 : _Wb.content) == null ? void 0 : _Xb.products_list_7) == null ? void 0 : _Yb.product_ids) == null ? void 0 : _Zb.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_ac = (_$b = (__b = unref(data)) == null ? void 0 : __b.content) == null ? void 0 : _$b.products_list_7) == null ? void 0 : _ac.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_dc = (_cc = (_bc = unref(data)) == null ? void 0 : _bc.content) == null ? void 0 : _cc.products_list_7) == null ? void 0 : _dc.product_ids) || [],
          sliderPerView: 6,
          slider: true,
          style: "horizontal",
          spaceBetween: 15,
          productstyle: "product-standard theme-plus overflow-hidden",
          boxClass: "product-box-bg"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_hc = (_gc = (_fc = (_ec = unref(data)) == null ? void 0 : _ec.content) == null ? void 0 : _fc.featured_blogs) == null ? void 0 : _gc.blog_ids) == null ? void 0 : _hc.length) || 0 >= 3) {
        _push(`<section class="section-b-space"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_kc = (_jc = (_ic = unref(data)) == null ? void 0 : _ic.content) == null ? void 0 : _jc.featured_blogs) == null ? void 0 : _kc.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsBlog, {
          Blogs: unref(blog),
          blogIds: ((_nc = (_mc = (_lc = unref(data)) == null ? void 0 : _lc.content) == null ? void 0 : _mc.featured_blogs) == null ? void 0 : _nc.blog_ids) || [],
          sliderPerView: 4
        }, null, _parent));
        _push(`</div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Madrid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
