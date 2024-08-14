import _sfc_main$1 from './index-DFV7j_wu.mjs';
import _sfc_main$2 from './index-OTTPGwoa.mjs';
import _sfc_main$3 from './index-BMB04ZHY.mjs';
import _sfc_main$4 from './index-uA_ar0VB.mjs';
import _sfc_main$5 from './index-Dn4zruDm.mjs';
import __nuxt_component_7 from './index-BKalLhOd.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './server.mjs';
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
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './index-BBvJKyN0.mjs';

const _sfc_main = {
  __name: "RightContent",
  __ssrInlineRender: true,
  props: {
    data: Object,
    Products: Object,
    Blogs: Object,
    Category: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka, _La, _Ma, _Na, _Oa, _Pa, _Qa, _Ra, _Sa, _Ta, _Ua, _Va, _Wa, _Xa, _Ya, _Za, __a, _$a, _ab, _bb, _cb, _db, _eb, _fb, _gb, _hb, _ib, _jb, _kb, _lb, _mb, _nb, _ob, _pb, _qb, _rb, _sb, _tb, _ub, _vb, _wb, _xb, _yb, _zb, _Ab, _Bb, _Cb, _Db, _Eb, _Fb, _Gb, _Hb, _Ib, _Jb, _Kb, _Lb;
      const _component_WidgetsTitle = _sfc_main$1;
      const _component_ThemesWidgetsProduct = _sfc_main$2;
      const _component_ThemesWidgetsCategories = _sfc_main$3;
      const _component_WidgetsImageLink = _sfc_main$4;
      const _component_ThemesWidgetsBanner = _sfc_main$5;
      const _component_ThemesWidgetsBlog = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ((_d = (_c = (_b = (_a = __props.data) == null ? void 0 : _a.content) == null ? void 0 : _b.main_content) == null ? void 0 : _c.sidebar) == null ? void 0 : _d.status) ? "col-xxl-9 col-xl-8" : "col-xxl-12 col-xl-12"
      }, _attrs))}>`);
      if (((_h = (_g = (_f = (_e = __props.data) == null ? void 0 : _e.content) == null ? void 0 : _f.main_content) == null ? void 0 : _g.section1_products) == null ? void 0 : _h.status) && ((_m = (_l = (_k = (_j = (_i = __props.data) == null ? void 0 : _i.content) == null ? void 0 : _j.main_content) == null ? void 0 : _k.section1_products) == null ? void 0 : _l.product_ids) == null ? void 0 : _m.length) || 0 >= 5) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_q = (_p = (_o = (_n = __props.data) == null ? void 0 : _n.content) == null ? void 0 : _o.main_content) == null ? void 0 : _p.section1_products) == null ? void 0 : _q.title,
          description: (_u = (_t = (_s = (_r = __props.data) == null ? void 0 : _r.content) == null ? void 0 : _s.main_content) == null ? void 0 : _t.section1_products) == null ? void 0 : _u.description
        }, null, _parent));
        _push(`<div class="section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_y = (_x = (_w = (_v = __props.data) == null ? void 0 : _v.content) == null ? void 0 : _w.main_content) == null ? void 0 : _x.section1_products) == null ? void 0 : _y.product_ids) || [],
          slider: true,
          style: "horizontal"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(ssrRenderComponent(_component_WidgetsTitle, {
        title: (_C = (_B = (_A = (_z = __props.data) == null ? void 0 : _z.content) == null ? void 0 : _A.main_content) == null ? void 0 : _B.section2_categories_list) == null ? void 0 : _C.title,
        description: (_G = (_F = (_E = (_D = __props.data) == null ? void 0 : _D.content) == null ? void 0 : _E.main_content) == null ? void 0 : _F.section2_categories_list) == null ? void 0 : _G.description
      }, null, _parent));
      _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
        style: "horizontal",
        Category: __props.Category,
        categoryIds: ((_K = (_J = (_I = (_H = __props.data) == null ? void 0 : _H.content) == null ? void 0 : _I.main_content) == null ? void 0 : _J.section2_categories_list) == null ? void 0 : _K.category_ids) || [],
        image: (_O = (_N = (_M = (_L = __props.data) == null ? void 0 : _L.content) == null ? void 0 : _M.main_content) == null ? void 0 : _N.section2_categories_list) == null ? void 0 : _O.image_url,
        theme: "paris"
      }, null, _parent));
      _push(`</div>`);
      if ((_S = (_R = (_Q = (_P = __props.data) == null ? void 0 : _P.content) == null ? void 0 : _Q.main_content) == null ? void 0 : _R.section3_two_column_banners) == null ? void 0 : _S.status) {
        _push(`<div><div class="section-t-space section-b-space"><div class="row g-md-4 g-3"><div class="col-md-6"><div class="banner-contain hover-effect">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_W = (_V = (_U = (_T = __props.data) == null ? void 0 : _T.content) == null ? void 0 : _U.main_content) == null ? void 0 : _V.section3_two_column_banners) == null ? void 0 : _W.banner_1,
          bgImage: false
        }, null, _parent));
        _push(`</div></div><div class="col-md-6"><div class="banner-contain hover-effect">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (__ = (_Z = (_Y = (_X = __props.data) == null ? void 0 : _X.content) == null ? void 0 : _Y.main_content) == null ? void 0 : _Z.section3_two_column_banners) == null ? void 0 : __.banner_2,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ca = (_ba = (_aa = (_$ = __props.data) == null ? void 0 : _$.content) == null ? void 0 : _aa.main_content) == null ? void 0 : _ba.section4_products) == null ? void 0 : _ca.status) && ((_ha = (_ga = (_fa = (_ea = (_da = __props.data) == null ? void 0 : _da.content) == null ? void 0 : _ea.main_content) == null ? void 0 : _fa.section4_products) == null ? void 0 : _ga.product_ids) == null ? void 0 : _ha.length) || 0 >= 5) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_la = (_ka = (_ja = (_ia = __props.data) == null ? void 0 : _ia.content) == null ? void 0 : _ja.main_content) == null ? void 0 : _ka.section4_products) == null ? void 0 : _la.title,
          description: (_pa = (_oa = (_na = (_ma = __props.data) == null ? void 0 : _ma.content) == null ? void 0 : _na.main_content) == null ? void 0 : _oa.section4_products) == null ? void 0 : _pa.description
        }, null, _parent));
        _push(`<div class="section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_ta = (_sa = (_ra = (_qa = __props.data) == null ? void 0 : _qa.content) == null ? void 0 : _ra.main_content) == null ? void 0 : _sa.section4_products) == null ? void 0 : _ta.product_ids) || [],
          slider: true,
          style: "horizontal"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_xa = (_wa = (_va = (_ua = __props.data) == null ? void 0 : _ua.content) == null ? void 0 : _va.main_content) == null ? void 0 : _wa.section5_coupons) == null ? void 0 : _xa.status) {
        _push(`<div class="section-b-space ratio_12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          saleclass: "sale-banner",
          banners: (_Aa = (_za = (_ya = __props.data) == null ? void 0 : _ya.content) == null ? void 0 : _za.main_content) == null ? void 0 : _Aa.section5_coupons,
          style: "full_width"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Ea = (_Da = (_Ca = (_Ba = __props.data) == null ? void 0 : _Ba.content) == null ? void 0 : _Ca.main_content) == null ? void 0 : _Da.section6_two_column_banners) == null ? void 0 : _Ea.status) {
        _push(`<div>`);
        if ((_Ia = (_Ha = (_Ga = (_Fa = __props.data) == null ? void 0 : _Fa.content) == null ? void 0 : _Ga.main_content) == null ? void 0 : _Ha.section6_two_column_banners) == null ? void 0 : _Ia.status) {
          _push(`<div class="section-b-space"><div class="row g-md-4 g-3"><div class="col-xxl-8 col-xl-12 col-md-7"><div class="banner-contain hover-effect h-100">`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            image: (_Ma = (_La = (_Ka = (_Ja = __props.data) == null ? void 0 : _Ja.content) == null ? void 0 : _Ka.main_content) == null ? void 0 : _La.section6_two_column_banners) == null ? void 0 : _Ma.banner_1,
            bgImage: false
          }, null, _parent));
          _push(`</div></div><div class="col-xxl-4 col-xl-12 col-md-5"><div class="banner-contain hover-effect">`);
          _push(ssrRenderComponent(_component_WidgetsImageLink, {
            image: (_Qa = (_Pa = (_Oa = (_Na = __props.data) == null ? void 0 : _Na.content) == null ? void 0 : _Oa.main_content) == null ? void 0 : _Pa.section6_two_column_banners) == null ? void 0 : _Qa.banner_2,
            bgImage: false
          }, null, _parent));
          _push(`</div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_Ua = (_Ta = (_Sa = (_Ra = __props.data) == null ? void 0 : _Ra.content) == null ? void 0 : _Sa.main_content) == null ? void 0 : _Ta.section4_products) == null ? void 0 : _Ua.status) && ((_Za = (_Ya = (_Xa = (_Wa = (_Va = __props.data) == null ? void 0 : _Va.content) == null ? void 0 : _Wa.main_content) == null ? void 0 : _Xa.section7_products) == null ? void 0 : _Ya.product_ids) == null ? void 0 : _Za.length) || 0 >= 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_bb = (_ab = (_$a = (__a = __props.data) == null ? void 0 : __a.content) == null ? void 0 : _$a.main_content) == null ? void 0 : _ab.section7_products) == null ? void 0 : _bb.title,
          description: (_fb = (_eb = (_db = (_cb = __props.data) == null ? void 0 : _cb.content) == null ? void 0 : _db.main_content) == null ? void 0 : _eb.section7_products) == null ? void 0 : _fb.description
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_jb = (_ib = (_hb = (_gb = __props.data) == null ? void 0 : _gb.content) == null ? void 0 : _hb.main_content) == null ? void 0 : _ib.section7_products) == null ? void 0 : _jb.product_ids) || [],
          style: "classic"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_nb = (_mb = (_lb = (_kb = __props.data) == null ? void 0 : _kb.content) == null ? void 0 : _lb.main_content) == null ? void 0 : _mb.section8_full_width_banner) == null ? void 0 : _nb.status) {
        _push(`<div><div class="section-b-space section-t-space"><div class="banner-contain hover-effect">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          image: (_qb = (_pb = (_ob = __props.data) == null ? void 0 : _ob.content) == null ? void 0 : _pb.main_content) == null ? void 0 : _qb.section8_full_width_banner,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ub = (_tb = (_sb = (_rb = __props.data) == null ? void 0 : _rb.content) == null ? void 0 : _sb.main_content) == null ? void 0 : _tb.section9_featured_blogs) == null ? void 0 : _ub.status) && ((_zb = (_yb = (_xb = (_wb = (_vb = __props.data) == null ? void 0 : _vb.content) == null ? void 0 : _wb.main_content) == null ? void 0 : _xb.section9_featured_blogs) == null ? void 0 : _yb.blog_ids) == null ? void 0 : _zb.length) || 0 >= 3) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Db = (_Cb = (_Bb = (_Ab = __props.data) == null ? void 0 : _Ab.content) == null ? void 0 : _Bb.main_content) == null ? void 0 : _Cb.section9_featured_blogs) == null ? void 0 : _Db.title,
          description: (_Hb = (_Gb = (_Fb = (_Eb = __props.data) == null ? void 0 : _Eb.content) == null ? void 0 : _Fb.main_content) == null ? void 0 : _Gb.section9_featured_blogs) == null ? void 0 : _Hb.description
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsBlog, {
          Blogs: __props.Blogs,
          blogIds: ((_Lb = (_Kb = (_Jb = (_Ib = __props.data) == null ? void 0 : _Ib.content) == null ? void 0 : _Jb.main_content) == null ? void 0 : _Kb.section9_featured_blogs) == null ? void 0 : _Lb.blog_ids) || [],
          slidesPerView: 3
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Paris/RightContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
