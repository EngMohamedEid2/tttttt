import _sfc_main$1 from './Rome-BQF3dRS2.mjs';
import _sfc_main$2 from './index-DFV7j_wu.mjs';
import _sfc_main$3 from './index-BMB04ZHY.mjs';
import _sfc_main$4 from './index-Dn4zruDm.mjs';
import _sfc_main$5 from './index-OTTPGwoa.mjs';
import _sfc_main$6 from './index-uA_ar0VB.mjs';
import _sfc_main$7 from './index-CqvVwqy9.mjs';
import __nuxt_component_7 from './index-BKalLhOd.mjs';
import _sfc_main$8 from './index-CdAkXDRf.mjs';
import { ref, withAsyncContext, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { a as useRouter, H as HandleRequest } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  async setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    let __temp, __restore;
    ref(null);
    useRouter();
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const productFilterIds = ref([]);
    const selectedCategoryId = ref(null);
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/rome", {
      key: "getAllRomes",
      params: { slug: "rome" }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a2, _b2;
      return HandleRequest("product", {
        key: "getThemeParisProduct",
        params: { status: 1, theme: "rome", ids: (_b2 = (_a2 = data == null ? void 0 : data.value) == null ? void 0 : _a2.content) == null ? void 0 : _b2.products_ids.join(",") }
      });
    }), __temp = await __temp, __restore(), __temp);
    let { data: blog } = ([__temp, __restore] = withAsyncContext(() => {
      var _a2, _b2, _c2, _d2;
      return HandleRequest("blog", {
        key: "GetAllFeaturedBlogs",
        params: { status: 1, ids: (_d2 = (_c2 = (_b2 = (_a2 = data == null ? void 0 : data.value) == null ? void 0 : _a2.content) == null ? void 0 : _b2.featured_blogs) == null ? void 0 : _c2.blog_ids) == null ? void 0 : _d2.join(",") }
      });
    }), __temp = await __temp, __restore(), __temp);
    let categoryProduct = (_d = (_c = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.categories_products) == null ? void 0 : _c.category_ids) == null ? void 0 : _d.join(",");
    let { data: productsCategory } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("product", {
      key: "getProductCategory",
      params: { category_ids: categoryProduct }
    })), __temp = await __temp, __restore(), __temp);
    function selectCategory(id) {
      var _a2, _b2, _c2;
      selectedCategoryId.value = id;
      if (selectedCategoryId.value) {
        productFilterIds.value = (_c2 = (_b2 = (_a2 = productsCategory == null ? void 0 : productsCategory.value) == null ? void 0 : _a2.data) == null ? void 0 : _b2.filter((product2) => {
          var _a3;
          return (_a3 = product2 == null ? void 0 : product2.categories) == null ? void 0 : _a3.map((category) => category == null ? void 0 : category.id).includes(id);
        })) == null ? void 0 : _c2.map((product2) => product2.id).slice(0, 5);
      }
    }
    if (((_e = data == null ? void 0 : data.value) == null ? void 0 : _e.content.categories_products) && ((_f = data == null ? void 0 : data.value) == null ? void 0 : _f.content.categories_products.category_ids.length)) {
      selectCategory((_i = (_h = (_g = data == null ? void 0 : data.value) == null ? void 0 : _g.content) == null ? void 0 : _h.categories_products) == null ? void 0 : _i.category_ids[0]);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua, _va, _wa, _xa, _ya, _za, _Aa, _Ba, _Ca, _Da, _Ea, _Fa, _Ga, _Ha, _Ia, _Ja, _Ka;
      const _component_ThemesWidgetsHomeBannerRome = _sfc_main$1;
      const _component_WidgetsTitle = _sfc_main$2;
      const _component_ThemesWidgetsCategories = _sfc_main$3;
      const _component_ThemesWidgetsBanner = _sfc_main$4;
      const _component_ThemesWidgetsProduct = _sfc_main$5;
      const _component_WidgetsImageLink = _sfc_main$6;
      const _component_ThemesWidgetsFourColumnProduct = _sfc_main$7;
      const _component_ThemesWidgetsBlog = __nuxt_component_7;
      const _component_ThemesWidgetsNewsletter = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-effect" }, _attrs))}>`);
      if ((_b2 = (_a2 = unref(data)) == null ? void 0 : _a2.content) == null ? void 0 : _b2.home_banner) {
        _push(`<section class="home-section-2 home-section-small section-b-space" style="${ssrRenderStyle({ "background-image": "url(" + ((_e2 = (_d2 = (_c2 = unref(data)) == null ? void 0 : _c2.content) == null ? void 0 : _d2.home_banner) == null ? void 0 : _e2.bg_image_url) + ")" })}">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerRome, {
          data: (_g2 = (_f2 = unref(data)) == null ? void 0 : _f2.content) == null ? void 0 : _g2.home_banner
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_j = (_i2 = (_h2 = unref(data)) == null ? void 0 : _h2.content) == null ? void 0 : _i2.categories_image_list) == null ? void 0 : _j.status) {
        _push(`<section class="category-section-2"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_m = (_l = (_k = unref(data)) == null ? void 0 : _k.content) == null ? void 0 : _l.categories_image_list) == null ? void 0 : _m.title,
          style: "simple"
        }, null, _parent));
        _push(`<div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
          style: "horizontal",
          theme: "rome",
          categoryIds: ((_p = (_o = (_n = unref(data)) == null ? void 0 : _n.content) == null ? void 0 : _o.categories_image_list) == null ? void 0 : _p.category_ids) || [],
          image: (_s = (_r = (_q = unref(data)) == null ? void 0 : _q.content) == null ? void 0 : _r.categories_icon_list) == null ? void 0 : _s.image_url
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_v = (_u = (_t = unref(data)) == null ? void 0 : _t.content) == null ? void 0 : _u.value_banners) == null ? void 0 : _v.status) {
        _push(`<section class="overflow-hidden">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_y = (_x = (_w = unref(data)) == null ? void 0 : _w.content) == null ? void 0 : _x.value_banners) == null ? void 0 : _y.title,
          style: "simple",
          classes: "container-fluid-lg"
        }, null, _parent));
        _push(`<div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: (_B = (_A = (_z = unref(data)) == null ? void 0 : _z.content) == null ? void 0 : _A.value_banners) == null ? void 0 : _B.banners,
          style: "horizontal-3",
          sliderPerView: 3
        }, null, _parent));
        _push(`</div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_E = (_D = (_C = unref(data)) == null ? void 0 : _C.content) == null ? void 0 : _D.categories_products) == null ? void 0 : _E.status) && ((_I = (_H = (_G = (_F = unref(data)) == null ? void 0 : _F.content) == null ? void 0 : _G.categories_products) == null ? void 0 : _H.category_ids) == null ? void 0 : _I.length)) {
        _push(`<section class="product-section">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_L = (_K = (_J = unref(data)) == null ? void 0 : _J.content) == null ? void 0 : _K.categories_products) == null ? void 0 : _L.title,
          style: "simple",
          classes: "container-fluid-lg"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j2, _k2, _l2, _m2, _n2;
            if (_push2) {
              if ((_d3 = (_c3 = (_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.content) == null ? void 0 : _b3.categories_products) == null ? void 0 : _c3.category_ids) == null ? void 0 : _d3.length) {
                _push2(ssrRenderComponent(_component_ThemesWidgetsCategories, {
                  style: "filter",
                  onSelectCategory: ($event) => selectCategory($event),
                  selectedCategoryId: unref(selectedCategoryId),
                  categoryIds: ((_g3 = (_f3 = (_e3 = unref(data)) == null ? void 0 : _e3.content) == null ? void 0 : _f3.categories_products) == null ? void 0 : _g3.category_ids) || []
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                ((_k2 = (_j2 = (_i3 = (_h3 = unref(data)) == null ? void 0 : _h3.content) == null ? void 0 : _i3.categories_products) == null ? void 0 : _j2.category_ids) == null ? void 0 : _k2.length) ? (openBlock(), createBlock(_component_ThemesWidgetsCategories, {
                  key: 0,
                  style: "filter",
                  onSelectCategory: ($event) => selectCategory($event),
                  selectedCategoryId: unref(selectedCategoryId),
                  categoryIds: ((_n2 = (_m2 = (_l2 = unref(data)) == null ? void 0 : _l2.content) == null ? void 0 : _m2.categories_products) == null ? void 0 : _n2.category_ids) || []
                }, null, 8, ["onSelectCategory", "selectedCategoryId", "categoryIds"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(productsCategory),
          productIds: unref(productFilterIds) || [],
          slider: false,
          style: "horizontal",
          boxClass: "product-box-bg",
          productstyle: "product-standard",
          showItem: 5
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_O = (_N = (_M = unref(data)) == null ? void 0 : _M.content) == null ? void 0 : _N.two_column_banners) == null ? void 0 : _O.status) {
        _push(`<section class="banner-section"><div class="container-fluid-lg"><div class="row gy-xl-0 gy-3"><div class="col-lg-6">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain-3 hover-effect",
          image: (_R = (_Q = (_P = unref(data)) == null ? void 0 : _P.content) == null ? void 0 : _Q.two_column_banners) == null ? void 0 : _R.banner_1,
          bgImage: false
        }, null, _parent));
        _push(`</div><div class="col-lg-6">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain-3 hover-effect",
          image: (_U = (_T = (_S = unref(data)) == null ? void 0 : _S.content) == null ? void 0 : _T.two_column_banners) == null ? void 0 : _U.banner_2,
          bgImage: false
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_X = (_W = (_V = unref(data)) == null ? void 0 : _V.content) == null ? void 0 : _W.slider_products) == null ? void 0 : _X.status) {
        _push(`<section class="top-selling-section border-box section-b-space"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsFourColumnProduct, {
          Products: unref(product),
          data: (_Z = (_Y = unref(data)) == null ? void 0 : _Y.content) == null ? void 0 : _Z.slider_products
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_aa = (_$ = (__ = unref(data)) == null ? void 0 : __.content) == null ? void 0 : _$.full_width_banner) == null ? void 0 : _aa.status) {
        _push(`<div class="container-fluid-lg">`);
        if ((_da = (_ca = (_ba = unref(data)) == null ? void 0 : _ba.content) == null ? void 0 : _ca.full_width_banner) == null ? void 0 : _da.status) {
          _push(`<div class="ratio_27">`);
          _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
            banners: (_fa = (_ea = unref(data)) == null ? void 0 : _ea.content) == null ? void 0 : _fa.full_width_banner,
            style: "full_width"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_ia = (_ha = (_ga = unref(data)) == null ? void 0 : _ga.content) == null ? void 0 : _ha.products_list_1) == null ? void 0 : _ia.status) && ((_ma = (_la = (_ka = (_ja = unref(data)) == null ? void 0 : _ja.content) == null ? void 0 : _ka.products_list_1) == null ? void 0 : _la.product_ids) == null ? void 0 : _ma.length) || 0 >= 6) {
        _push(`<section class="product-section"><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_pa = (_oa = (_na = unref(data)) == null ? void 0 : _na.content) == null ? void 0 : _oa.products_list_1) == null ? void 0 : _pa.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: unref(product),
          productIds: ((_sa = (_ra = (_qa = unref(data)) == null ? void 0 : _qa.content) == null ? void 0 : _ra.products_list_1) == null ? void 0 : _sa.product_ids) || [],
          slider: true,
          style: "horizontal",
          spaceBetween: 24,
          productstyle: "product-standard",
          boxClass: "product-box-bg",
          sliderPerView: 6
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (((_va = (_ua = (_ta = unref(data)) == null ? void 0 : _ta.content) == null ? void 0 : _ua.featured_blogs) == null ? void 0 : _va.status) && ((_za = (_ya = (_xa = (_wa = unref(data)) == null ? void 0 : _wa.content) == null ? void 0 : _xa.featured_blogs) == null ? void 0 : _ya.blog_ids) == null ? void 0 : _za.length) || 0 >= 3) {
        _push(`<section><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_Ca = (_Ba = (_Aa = unref(data)) == null ? void 0 : _Aa.content) == null ? void 0 : _Ba.featured_blogs) == null ? void 0 : _Ca.title,
          style: "simple"
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsBlog, {
          Blogs: unref(blog),
          blogIds: ((_Fa = (_Ea = (_Da = unref(data)) == null ? void 0 : _Da.content) == null ? void 0 : _Ea.featured_blogs) == null ? void 0 : _Fa.blog_ids) || []
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_Ia = (_Ha = (_Ga = unref(data)) == null ? void 0 : _Ga.content) == null ? void 0 : _Ha.news_letter) == null ? void 0 : _Ia.status) {
        _push(`<section class="newsletter-section-2 section-b-space">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsNewsletter, {
          data: (_Ka = (_Ja = unref(data)) == null ? void 0 : _Ja.content) == null ? void 0 : _Ka.news_letter,
          style: "classic"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Rome/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
