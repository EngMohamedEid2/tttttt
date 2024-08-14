import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { d as __nuxt_component_1 } from './server.mjs';
import _sfc_main$1 from './index-DORLaeSS.mjs';
import _sfc_main$2 from './index-Bmsaf34f.mjs';
import { d as dateFormatter } from './date-COFsu0Eb.mjs';
import { mergeProps, withCtx, createVNode, unref, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  props: {
    blog: Object,
    style: [String, Object],
    sidebar: String,
    filter: Object,
    themeOption: Object
  },
  setup(__props) {
    let props = __props;
    const ChangePage = ({ toPage }) => {
      props.filter.page = toPage;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_WidgetsPagination = _sfc_main$1;
      const _component_WidgetsNoData = _sfc_main$2;
      if ((_b = (_a = __props.blog) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["row g-4", { "ratio_65": __props.style === "list_view" }]
        }, _attrs))}><!--[-->`);
        ssrRenderList((_c = __props.blog) == null ? void 0 : _c.data, (blog) => {
          var _a2, _b2, _c2, _d2, _e2;
          _push(`<div class="${ssrRenderClass(__props.style === "list_view" ? "col-12" : "col-xxl-4 col-sm-6")}"><div class="${ssrRenderClass([{
            "blog-list": __props.style === "list_view",
            "sticky-blog-box": (blog == null ? void 0 : blog.is_sticky) === 1
          }, "blog-box"])}">`);
          if (blog == null ? void 0 : blog.is_featured) {
            _push(`<div class="blog-label-tag"><span>${ssrInterpolate(_ctx.$t("Featured"))}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="blog-image">`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/blog/${blog == null ? void 0 : blog.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3;
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", (_a3 = blog == null ? void 0 : blog.blog_thumbnail) == null ? void 0 : _a3.original_url)}${ssrRenderAttr("alt", blog == null ? void 0 : blog.title)}${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: (_b3 = blog == null ? void 0 : blog.blog_thumbnail) == null ? void 0 : _b3.original_url,
                    alt: blog == null ? void 0 : blog.title
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="${ssrRenderClass([{ "blog-contain-2": __props.style === "list_view" }, "blog-contain blog-contain-2"])}"><div class="blog-label"><span class="time">`);
          _push(ssrRenderComponent(_component_Icon, { name: "ri-time-line" }, null, _parent));
          _push(`<span>${ssrInterpolate(("dateFormatter" in _ctx ? _ctx.dateFormatter : unref(dateFormatter))(blog == null ? void 0 : blog.created_at))}</span></span>`);
          if ((_b2 = (_a2 = __props.themeOption) == null ? void 0 : _a2.blog) == null ? void 0 : _b2.blog_author_enable) {
            _push(`<span class="super">`);
            _push(ssrRenderComponent(_component_Icon, { name: "ri-user-line" }, null, _parent));
            _push(`<span>${ssrInterpolate((_c2 = blog == null ? void 0 : blog.created_by) == null ? void 0 : _c2.name)}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_nuxt_link, {
            to: `/blog/${blog == null ? void 0 : blog.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3${_scopeId}>${ssrInterpolate(blog == null ? void 0 : blog.title)}</h3>`);
              } else {
                return [
                  createVNode("h3", null, toDisplayString(blog == null ? void 0 : blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (blog == null ? void 0 : blog.description) {
            _push(`<p>${blog.description}</p>`);
          } else {
            _push(`<!---->`);
          }
          if ((_e2 = (_d2 = __props.themeOption) == null ? void 0 : _d2.blog) == null ? void 0 : _e2.read_more_enable) {
            _push(ssrRenderComponent(_component_nuxt_link, {
              to: `/blog/${blog == null ? void 0 : blog.slug}`,
              class: "blog-button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_ctx.$t("Read More"))} `);
                  _push2(ssrRenderComponent(_component_Icon, { name: "ri-arrow-right-fill" }, null, _parent2, _scopeId));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Read More")) + " ", 1),
                    createVNode(_component_Icon, { name: "ri-arrow-right-fill" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]-->`);
        if ((_e = (_d = __props.blog) == null ? void 0 : _d.data) == null ? void 0 : _e.length) {
          _push(`<div class="custome-pagination">`);
          _push(ssrRenderComponent(_component_WidgetsPagination, {
            Data: __props.blog,
            onChangePage: (toPage) => {
              ChangePage({ toPage });
            }
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (!((_g = (_f = __props.blog) == null ? void 0 : _f.data) == null ? void 0 : _g.length)) {
          _push(ssrRenderComponent(_component_WidgetsNoData, {
            classes: "no-data-added",
            image: "/svg/empty-items.svg",
            text: "No Blogs Found",
            description: "Oops! It seems that we could not find any blogs matching your search criteria."
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Content/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
