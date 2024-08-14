import _sfc_main$1 from './Paris-g35CgsyG.mjs';
import _sfc_main$2 from './index-Dn4zruDm.mjs';
import _sfc_main$3 from './LeftContent-TSclzmZo.mjs';
import _sfc_main$4 from './RightContent-MYr_7Q6K.mjs';
import { H as HandleRequest } from './server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './index-BMB04ZHY.mjs';
import './index-BBvJKyN0.mjs';
import './index-CdatWNO3.mjs';
import './index-DFV7j_wu.mjs';
import './index-OTTPGwoa.mjs';
import './SkeletonProductBox-XWsjMSl0.mjs';
import './index-C8UkQut3.mjs';
import './Horizontal-Dkn6eSRD.mjs';
import './nuxt-img-R5yzpfhK.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';
import './index-Bmsaf34f.mjs';
import './index-BKalLhOd.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let { data, pending } = ([__temp, __restore] = withAsyncContext(() => HandleRequest("theme/paris", {
      key: "getAllHomesInPage"
      // params: { slug: 'paris' }
    })), __temp = await __temp, __restore(), __temp);
    let {
      data: product,
      pending: loadingPosProducts,
      error
    } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest("product", {
        key: "getThemeParisProduct",
        params: {
          status: 1,
          theme: "paris",
          ids: (_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.content) == null ? void 0 : _b.products_ids.join(",")
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    let { data: blog } = ([__temp, __restore] = withAsyncContext(() => {
      var _a, _b;
      return HandleRequest("blog", {
        key: "GetAllFeaturedBlogs",
        params: {
          status: 1,
          ids: (_b = (_a = data == null ? void 0 : data.value.content.main_content) == null ? void 0 : _a.section9_featured_blogs) == null ? void 0 : _b.blog_ids.join(
            ","
          )
        }
      });
    }), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_ThemesWidgetsHomeBannerParis = _sfc_main$1;
      const _component_ThemesWidgetsBanner = _sfc_main$2;
      const _component_ThemesParisLeftContent = _sfc_main$3;
      const _component_ThemesParisRightContent = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-effect" }, _attrs))}>`);
      if ((_b = (_a = unref(data)) == null ? void 0 : _a.content) == null ? void 0 : _b.home_banner) {
        _push(`<section class="home-section pt-2">`);
        _push(ssrRenderComponent(_component_ThemesWidgetsHomeBannerParis, {
          data: (_d = (_c = unref(data)) == null ? void 0 : _c.content) == null ? void 0 : _d.home_banner
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="banner-section ratio_60">`);
      _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
        style: "horizontal",
        banners: (_g = (_f = (_e = unref(data)) == null ? void 0 : _e.content) == null ? void 0 : _f.featured_banners) == null ? void 0 : _g.banners
      }, null, _parent));
      _push(`</section><section class="product-section"><div class="container-fluid-lg"><div class="row g-sm-4 g-3">`);
      _push(ssrRenderComponent(_component_ThemesParisLeftContent, {
        leftdata: unref(data).content,
        Products: unref(product)
      }, null, _parent));
      _push(ssrRenderComponent(_component_ThemesParisRightContent, {
        data: unref(data),
        Products: unref(product),
        Blogs: unref(blog)
      }, null, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Paris/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
