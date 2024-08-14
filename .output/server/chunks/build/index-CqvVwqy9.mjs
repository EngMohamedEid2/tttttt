import _sfc_main$1 from './index-OTTPGwoa.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: Object,
    Products: Object,
    col: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
      const _component_ThemesWidgetsProduct = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row g-4" }, _attrs))}>`);
      if (((_b = (_a = __props.data) == null ? void 0 : _a.product_slider_1) == null ? void 0 : _b.status) && ((_e = (_d = (_c = __props.data) == null ? void 0 : _c.product_slider_1) == null ? void 0 : _d.product_ids) == null ? void 0 : _e.length)) {
        _push(`<div class="${ssrRenderClass(__props.col ? __props.col : "col-xxl-3 col-xl-4 col-sm-6")}"><div class="category-menu"><h3>${ssrInterpolate((_g = (_f = __props.data) == null ? void 0 : _f.product_slider_1) == null ? void 0 : _g.title)}</h3>`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_i = (_h = __props.data) == null ? void 0 : _h.product_slider_1) == null ? void 0 : _i.product_ids) || [],
          style: "vertical"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_k = (_j = __props.data) == null ? void 0 : _j.product_slider_2) == null ? void 0 : _k.status) && ((_n = (_m = (_l = __props.data) == null ? void 0 : _l.product_slider_2) == null ? void 0 : _m.product_ids) == null ? void 0 : _n.length)) {
        _push(`<div class="${ssrRenderClass(__props.col ? __props.col : "col-xxl-3 col-xl-4 col-sm-6")}"><div class="category-menu"><h3>${ssrInterpolate((_p = (_o = __props.data) == null ? void 0 : _o.product_slider_2) == null ? void 0 : _p.title)}</h3>`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_r = (_q = __props.data) == null ? void 0 : _q.product_slider_2) == null ? void 0 : _r.product_ids) || [],
          style: "vertical"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_t = (_s = __props.data) == null ? void 0 : _s.product_slider_3) == null ? void 0 : _t.status) && ((_w = (_v = (_u = __props.data) == null ? void 0 : _u.product_slider_3) == null ? void 0 : _v.product_ids) == null ? void 0 : _w.length)) {
        _push(`<div class="${ssrRenderClass(__props.col ? __props.col : "col-xxl-3 col-xl-4 col-sm-6")}"><div class="category-menu"><h3>${ssrInterpolate((_y = (_x = __props.data) == null ? void 0 : _x.product_slider_3) == null ? void 0 : _y.title)}</h3>`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_A = (_z = __props.data) == null ? void 0 : _z.product_slider_3) == null ? void 0 : _A.product_ids) || [],
          style: "vertical"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_C = (_B = __props.data) == null ? void 0 : _B.product_slider_4) == null ? void 0 : _C.status) && ((_F = (_E = (_D = __props.data) == null ? void 0 : _D.product_slider_4) == null ? void 0 : _E.product_ids) == null ? void 0 : _F.length)) {
        _push(`<div class="${ssrRenderClass(__props.col ? __props.col : "col-xxl-3 col-xl-4 col-sm-6")}"><div class="category-menu"><h3>${ssrInterpolate((_H = (_G = __props.data) == null ? void 0 : _G.product_slider_4) == null ? void 0 : _H.title)}</h3>`);
        _push(ssrRenderComponent(_component_ThemesWidgetsProduct, {
          Products: __props.Products,
          productIds: ((_J = (_I = __props.data) == null ? void 0 : _I.product_slider_4) == null ? void 0 : _J.product_ids) || [],
          style: "vertical"
        }, null, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/FourColumnProduct/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
