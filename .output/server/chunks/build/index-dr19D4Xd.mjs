import { Swiper, SwiperSlide } from 'swiper/vue';
import _sfc_main$1 from './index-uA_ar0VB.mjs';
import { mergeProps, unref, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    let breakpoints = {
      0: {
        slidesPerView: 1
      },
      600: {
        slidesPerView: 2
      },
      1050: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_WidgetsImageLink = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-4-1 ratio_65 no-arrow product-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_swiper, {
        loop: true,
        breakpoints: unref(breakpoints),
        class: "banner-slider",
        "space-between": 15,
        "slides-per-view": 4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, (bundles, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: `product${index}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (bundles == null ? void 0 : bundles.status) {
                      _push3(`<div${_scopeId2}><div class="product-slider wow fadeInUp"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_WidgetsImageLink, {
                        classes: "b-cl",
                        image: bundles,
                        bgImage: false
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="product-slider-detail"${_scopeId2}><div${_scopeId2}><a href="javascript:void(0)" class="d-block"${_scopeId2}><h3 class="text-title"${_scopeId2}>${ssrInterpolate(bundles == null ? void 0 : bundles.title)}</h3></a><h5${_scopeId2}>${ssrInterpolate(bundles == null ? void 0 : bundles.sub_title)}</h5></div></div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      (bundles == null ? void 0 : bundles.status) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "product-slider wow fadeInUp" }, [
                          createVNode(_component_WidgetsImageLink, {
                            classes: "b-cl",
                            image: bundles,
                            bgImage: false
                          }, null, 8, ["image"]),
                          createVNode("div", { class: "product-slider-detail" }, [
                            createVNode("div", null, [
                              createVNode("a", {
                                href: "javascript:void(0)",
                                class: "d-block"
                              }, [
                                createVNode("h3", { class: "text-title" }, toDisplayString(bundles == null ? void 0 : bundles.title), 1)
                              ]),
                              createVNode("h5", null, toDisplayString(bundles == null ? void 0 : bundles.sub_title), 1)
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (bundles, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: `product${index}`
                }, {
                  default: withCtx(() => [
                    (bundles == null ? void 0 : bundles.status) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "product-slider wow fadeInUp" }, [
                        createVNode(_component_WidgetsImageLink, {
                          classes: "b-cl",
                          image: bundles,
                          bgImage: false
                        }, null, 8, ["image"]),
                        createVNode("div", { class: "product-slider-detail" }, [
                          createVNode("div", null, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              class: "d-block"
                            }, [
                              createVNode("h3", { class: "text-title" }, toDisplayString(bundles == null ? void 0 : bundles.title), 1)
                            ]),
                            createVNode("h5", null, toDisplayString(bundles == null ? void 0 : bundles.sub_title), 1)
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/collection/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
