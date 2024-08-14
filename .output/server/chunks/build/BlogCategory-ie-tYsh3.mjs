import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { H as HandleRequest } from './server.mjs';
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

const _sfc_main = {
  __name: "BlogCategory",
  __ssrInlineRender: true,
  setup(__props) {
    let { data: category } = HandleRequest(`category`, {
      key: `GetBrownsByCategory`,
      params: { type: "post" }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_WidgetsNoData = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><h2 class="accordion-header" id="panelsStayOpen-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo">${ssrInterpolate(_ctx.$t("Category"))}</button></h2><div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse collapse show"><div class="accordion-body p-0"><div class="category-list-box"><ul><!--[-->`);
      ssrRenderList((_a = unref(category)) == null ? void 0 : _a.data, (category2) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "dropdown-item",
          to: { path: "/blog", query: { category: category2 == null ? void 0 : category2.slug } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="category-name"${_scopeId}><h5${_scopeId}>${ssrInterpolate(category2 == null ? void 0 : category2.name)}</h5>`);
              if (category2 == null ? void 0 : category2.blogs_count) {
                _push2(`<span${_scopeId}>(${ssrInterpolate(category2 == null ? void 0 : category2.blogs_count)})</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "category-name" }, [
                  createVNode("h5", null, toDisplayString(category2 == null ? void 0 : category2.name), 1),
                  (category2 == null ? void 0 : category2.blogs_count) ? (openBlock(), createBlock("span", { key: 0 }, "(" + toDisplayString(category2 == null ? void 0 : category2.blogs_count) + ")", 1)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
      if (!((_c = (_b = unref(category)) == null ? void 0 : _b.data) == null ? void 0 : _c.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added bg-light",
          text: "No Category Found"
        }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/sidebar/BlogCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
