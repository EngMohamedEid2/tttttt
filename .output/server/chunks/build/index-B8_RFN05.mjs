import _sfc_main$1 from './Osaka-D3dKKLMx.mjs';
import _sfc_main$2 from './index-Dn4zruDm.mjs';
import _sfc_main$3 from './index-DFV7j_wu.mjs';
import _sfc_main$4 from './index-OTTPGwoa.mjs';
import _sfc_main$5 from './index-dr19D4Xd.mjs';
import { H as HandleRequest } from './server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './index-uA_ar0VB.mjs';
import './nuxt-link-D35ckuRb.mjs';
import '../routes/api/index.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'swiper/vue';
import 'swiper';
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
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
import '@vueuse/components';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/osaka", {
      key: "getAllOsaka",
      params: { slug: "osaka" }
    })), __temp = await __temp, __restore(), __temp);
    let { data: product, error } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest(
        "https://alsouq.anevex.com/app/shop-api/sections?ewd=rewf",
        {
          // key: "getThemeParisProduct",
          params: {
            status: 1,
            theme: "osaka",
            ids: (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids.join(",")
          }
        }
      );
    }), __temp = await __temp, __restore(), __temp);
    [__temp, __restore] = withAsyncContext(() => {
      var _a, _b, _c;
      return HandleRequest("blog", {
        key: "GetAllFeaturedBlogs",
        params: {
          status: 1,
          ids: (_c = (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.featured_blogs) == null ? void 0 : _c.blog_ids.join(",")
        }
      });
    }), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _component_ThemesWidgetsHomeBannerOsaka = _sfc_main$1;
      const _component_ThemesWidgetsBanner = _sfc_main$2;
      const _component_WidgetsTitle = _sfc_main$3;
      const _component_ThemesWidgetsProduct = _sfc_main$4;
      const _component_ThemesWidgetsCollection = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-effect" }, _attrs))}><section class="home-section pt-2">`);
      _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerOsaka, {
        data: (_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner
      }, null, _parent));
      _push(`</section>`);
      if ((_e = (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.coupons) == null ? void 0 : _e.status) {
        _push(`<section><div class="container-fluid-lg sale-banner"><div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: {
            image_url: (_g = (_f = unref(product)) == null ? void 0 : _f.data[0]) == null ? void 0 : _g.advertisements[0].image,
            redirect_link: {
              link: "vegetables-fruits",
              link_type: "collection"
            },
            status: true
          },
          classes: "banner-contain hover-effect",
          style: "full_width"
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(6, (i) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
        _push(`<section><div class="container-fluid-lg">`);
        _push(ssrRenderComponent(_component_WidgetsTitle, {
          title: (_b2 = (_a2 = unref(product)) == null ? void 0 : _a2.data[i]) == null ? void 0 : _b2.title,
          description: (_d2 = (_c2 = unref(product)) == null ? void 0 : _c2.data[i]) == null ? void 0 : _d2.description
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          products: (_f2 = (_e2 = unref(product)) == null ? void 0 : _e2.data[i]) == null ? void 0 : _f2.products_to_show,
          productIds: ((_i2 = (_h2 = (_g2 = unref(data)) == null ? void 0 : _g2.content) == null ? void 0 : _h2.products_list_1) == null ? void 0 : _i2.product_ids) || [],
          slider: true,
          style: "horizontal",
          sliderPerView: 6
        }, null, _parent));
        _push(`</div></section>`);
      });
      _push(`<!--]-->`);
      if ((_j = (_i = (_h = unref(data)) == null ? void 0 : _h.content) == null ? void 0 : _i.offer_banner) == null ? void 0 : _j.status) {
        _push(`<section><div class="container-fluid-lg"><div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          banners: {
            image_url: (_l = (_k = unref(product)) == null ? void 0 : _k.data[3]) == null ? void 0 : _l.advertisements[0].image,
            redirect_link: {
              link: "vegetables-fruits",
              link_type: "collection"
            },
            status: true
          },
          classes: "offer-box hover-effect",
          style: "full_width"
        }, null, _parent));
        _push(`</div></div></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_o = (_n = (_m = unref(data)) == null ? void 0 : _m.content) == null ? void 0 : _n.product_bundles) == null ? void 0 : _o.status) {
        _push(`<section><div class="container-fluid-lg"><div class="row"><div class="col-12">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsCollection, {
          data: (_r = (_q = (_p = unref(data)) == null ? void 0 : _p.content) == null ? void 0 : _q.product_bundles) == null ? void 0 : _r.bundles
        }, null, _parent));
        _push(`</div></div></div></section>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Osaka/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
