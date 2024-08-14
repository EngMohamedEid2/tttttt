import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import _sfc_main$1 from './index-Bmsaf34f.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
import { Pagination, Autoplay } from 'swiper';
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

const _sfc_main = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    let modules = [Pagination, Autoplay];
    let { ThemeOptions, Blogs } = storeToRefs(useDataStore());
    let blogs = ref([]);
    blogs.value = (_b = (_a = Blogs == null ? void 0 : Blogs.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter(
      (blog) => {
        var _a2, _b2;
        return (_b2 = (_a2 = ThemeOptions.value.options.about_us) == null ? void 0 : _a2.blog.blog_ids) == null ? void 0 : _b2.includes(blog.id);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_nuxtLink = __nuxt_component_0;
      const _component_WidgetsNoData = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section-lg-space" }, _attrs))}><div class="container-fluid-lg"><div class="about-us-title text-center"><h4 class="text-content">${ssrInterpolate(_ctx.$t("Our Blog"))}</h4><h2 class="center">${ssrInterpolate(_ctx.$t("Our Latest Blog"))}</h2></div><div class="row"><div class="col-12"><div class="slider-dots">`);
      _push(ssrRenderComponent(_component_swiper, {
        autoplay: { delay: 2500, disableOnInteraction: true },
        loop: true,
        "slides-per-view": 5,
        "space-between": 15,
        pagination: { clickable: true },
        modules: unref(modules)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(blogs), (blog) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: blog }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${_scopeId2}><div class="blog-box"${_scopeId2}><div class="blog-box-image"${_scopeId2}><div class="blog-image"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_nuxtLink, {
                      to: `/blog/${blog.slug}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr(
                            "src",
                            blog.blog_thumbnail.original_url ? blog.blog_thumbnail.original_url : "/images/product.png"
                          )}${ssrRenderAttr("alt", blog.title)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: blog.blog_thumbnail.original_url ? blog.blog_thumbnail.original_url : "/images/product.png",
                              alt: blog.title
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(_component_nuxtLink, {
                      to: `/blog/${blog.slug}`,
                      class: "blog-detail d-block"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h6${_scopeId3}>${ssrInterpolate(blog.created_by.name)}</h6><h5${_scopeId3}>${ssrInterpolate(blog.title)}</h5>`);
                        } else {
                          return [
                            createVNode("h6", null, toDisplayString(blog.created_by.name), 1),
                            createVNode("h5", null, toDisplayString(blog.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", null, [
                        createVNode("div", { class: "blog-box" }, [
                          createVNode("div", { class: "blog-box-image" }, [
                            createVNode("div", { class: "blog-image" }, [
                              createVNode(_component_nuxtLink, {
                                to: `/blog/${blog.slug}`
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: blog.blog_thumbnail.original_url ? blog.blog_thumbnail.original_url : "/images/product.png",
                                    alt: blog.title
                                  }, null, 8, ["src", "alt"])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ])
                          ]),
                          createVNode(_component_nuxtLink, {
                            to: `/blog/${blog.slug}`,
                            class: "blog-detail d-block"
                          }, {
                            default: withCtx(() => [
                              createVNode("h6", null, toDisplayString(blog.created_by.name), 1),
                              createVNode("h5", null, toDisplayString(blog.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (blog) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: blog }, {
                  default: withCtx(() => [
                    createVNode("div", null, [
                      createVNode("div", { class: "blog-box" }, [
                        createVNode("div", { class: "blog-box-image" }, [
                          createVNode("div", { class: "blog-image" }, [
                            createVNode(_component_nuxtLink, {
                              to: `/blog/${blog.slug}`
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: blog.blog_thumbnail.original_url ? blog.blog_thumbnail.original_url : "/images/product.png",
                                  alt: blog.title
                                }, null, 8, ["src", "alt"])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ])
                        ]),
                        createVNode(_component_nuxtLink, {
                          to: `/blog/${blog.slug}`,
                          class: "blog-detail d-block"
                        }, {
                          default: withCtx(() => [
                            createVNode("h6", null, toDisplayString(blog.created_by.name), 1),
                            createVNode("h5", null, toDisplayString(blog.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!((_a2 = unref(blogs)) == null ? void 0 : _a2.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added bg-light",
          text: "No Blog Found"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/Blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
