import _sfc_main$1 from './index-BMB04ZHY.mjs';
import _sfc_main$2 from './index-Dn4zruDm.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import './index-BBvJKyN0.mjs';
import './index-CdatWNO3.mjs';
import 'swiper/vue';
import './server.mjs';
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
import './index-uA_ar0VB.mjs';
import './nuxt-link-D35ckuRb.mjs';

const _sfc_main = {
  __name: "LeftContent",
  __ssrInlineRender: true,
  props: {
    leftdata: Object,
    Category: Object,
    Products: [Object, Array]
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
      const _component_ThemesWidgetsCategories = _sfc_main$1;
      const _component_ThemesWidgetsBanner = _sfc_main$2;
      if ((_c = (_b = (_a = __props.leftdata) == null ? void 0 : _a.main_content) == null ? void 0 : _b.sidebar) == null ? void 0 : _c.status) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-xxl-3 col-xl-4 d-none d-xl-block" }, _attrs))}><div class="p-sticky">`);
        if ((_h = (_g = (_f = (_e = (_d = __props.leftdata) == null ? void 0 : _d.main_content) == null ? void 0 : _e.sidebar) == null ? void 0 : _f.categories_icon_list) == null ? void 0 : _g.category_ids) == null ? void 0 : _h.length) {
          _push(`<div>`);
          _push(ssrRenderComponent(_component_ThemesWidgetsCategories, {
            Category: __props.Category,
            style: "vertical",
            categoryIds: ((_l = (_k = (_j = (_i = __props.leftdata) == null ? void 0 : _i.main_content) == null ? void 0 : _j.sidebar) == null ? void 0 : _k.categories_icon_list) == null ? void 0 : _l.category_ids) || []
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          classes: "ratio_156 section-t-space",
          style: "vertical",
          banners: (_p = (_o = (_n = (_m = __props.leftdata) == null ? void 0 : _m.main_content) == null ? void 0 : _n.sidebar) == null ? void 0 : _o.left_side_banners) == null ? void 0 : _p.banner_1
        }, null, _parent));
        _push(ssrRenderComponent(_component_ThemesWidgetsBanner, {
          classes: "ratio_medium section-t-space",
          style: "vertical",
          banners: (_t = (_s = (_r = (_q = __props.leftdata) == null ? void 0 : _q.main_content) == null ? void 0 : _r.sidebar) == null ? void 0 : _s.left_side_banners) == null ? void 0 : _t.banner_2
        }, null, _parent));
        if (((_x = (_w = (_v = (_u = __props.leftdata) == null ? void 0 : _u.main_content) == null ? void 0 : _v.sidebar) == null ? void 0 : _w.sidebar_products) == null ? void 0 : _x.status) && ((_C = (_B = (_A = (_z = (_y = __props.leftdata) == null ? void 0 : _y.main_content) == null ? void 0 : _z.sidebar) == null ? void 0 : _A.sidebar_products) == null ? void 0 : _B.product_ids) == null ? void 0 : _C.length) || 0 > 3) {
          _push(`<div><div class="section-t-space"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Paris/LeftContent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
