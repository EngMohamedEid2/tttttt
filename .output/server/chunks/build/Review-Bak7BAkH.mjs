import { Swiper, SwiperSlide } from 'swiper/vue';
import { s as storeToRefs, e as useDataStore, d as __nuxt_component_1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Autoplay } from 'swiper';
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
  __name: "Review",
  __ssrInlineRender: true,
  setup(__props) {
    let modules = [Autoplay];
    let reviewSlider = {
      0: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      975: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1375: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    };
    let { ThemeOptions } = storeToRefs(useDataStore());
    let aboutTestimonial = ref(ThemeOptions.value.options.about_us.testimonial);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "review-section section-lg-space" }, _attrs))}><div class="container-fluid"><div class="about-us-title text-center"><h4 class="text-content">${ssrInterpolate(unref(aboutTestimonial).sub_title)}</h4><h2 class="center">${ssrInterpolate(unref(aboutTestimonial).title)}</h2></div><div class="row"><div class="col-12"><div class="slider-dots">`);
      _push(ssrRenderComponent(_component_swiper, {
        modules: unref(modules),
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: unref(reviewSlider),
        slidesPerView: "auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutTestimonial).reviews, (testi, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="reviewer-box"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:double-quotes-r",
                      class: "quotes"
                    }, null, _parent3, _scopeId2));
                    _push3(`<h3${_scopeId2}>${ssrInterpolate(testi.title)}</h3><p class="truncate-line"${_scopeId2}>${ssrInterpolate(testi.review)}</p><div class="reviewer-profile"${_scopeId2}><div class="reviewer-image"${_scopeId2}><img${ssrRenderAttr("src", testi.profile_image_url)} class="" alt=""${_scopeId2}></div><div class="reviewer-name"${_scopeId2}><h4${_scopeId2}>${ssrInterpolate(testi.name)}</h4><h6${_scopeId2}>${ssrInterpolate(testi.designation)}</h6></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "reviewer-box" }, [
                        createVNode(_component_Icon, {
                          name: "ri:double-quotes-r",
                          class: "quotes"
                        }),
                        createVNode("h3", null, toDisplayString(testi.title), 1),
                        createVNode("p", { class: "truncate-line" }, toDisplayString(testi.review), 1),
                        createVNode("div", { class: "reviewer-profile" }, [
                          createVNode("div", { class: "reviewer-image" }, [
                            createVNode("img", {
                              src: testi.profile_image_url,
                              class: "",
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "reviewer-name" }, [
                            createVNode("h4", null, toDisplayString(testi.name), 1),
                            createVNode("h6", null, toDisplayString(testi.designation), 1)
                          ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutTestimonial).reviews, (testi, index) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "reviewer-box" }, [
                      createVNode(_component_Icon, {
                        name: "ri:double-quotes-r",
                        class: "quotes"
                      }),
                      createVNode("h3", null, toDisplayString(testi.title), 1),
                      createVNode("p", { class: "truncate-line" }, toDisplayString(testi.review), 1),
                      createVNode("div", { class: "reviewer-profile" }, [
                        createVNode("div", { class: "reviewer-image" }, [
                          createVNode("img", {
                            src: testi.profile_image_url,
                            class: "",
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "reviewer-name" }, [
                          createVNode("h4", null, toDisplayString(testi.name), 1),
                          createVNode("h6", null, toDisplayString(testi.designation), 1)
                        ])
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
      _push(`</div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/Review.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
