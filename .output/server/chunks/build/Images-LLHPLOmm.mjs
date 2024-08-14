import { Swiper, SwiperSlide } from 'swiper/vue';
import { A as __nuxt_component_2$2 } from './server.mjs';
import { ref, resolveComponent, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { Navigation, Autoplay } from 'swiper';
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
  __name: "Images",
  __ssrInlineRender: true,
  props: {
    Data: Object
  },
  setup(__props) {
    let thumbnailProductSlider = {
      0: {
        slidesPerView: 3
      },
      530: {
        slidesPerView: 4
      },
      1399: {
        slidesPerView: 3
      },
      1430: {
        slidesPerView: 4
      }
    };
    let slideId = ref(0), swiperRef = ref(0), modules = [Navigation, Autoplay];
    function onSwiper(swiper) {
      swiperRef.value = swiper;
    }
    function slideTo(index) {
      swiperRef.value.slideTo(index + 1, 0);
      slideId.value = index;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_ClientOnly = __nuxt_component_2$2;
      const _component_vue_image_zoomer = resolveComponent("vue-image-zoomer");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-left-box" }, _attrs))}><div class="row g-2"><div class="col-12"><div class="product-main-1"><div class="product-label-group">`);
      if ((_a = __props.Data) == null ? void 0 : _a.is_sale_enable) {
        _push(`<div class="product-label-tag">${ssrInterpolate(_ctx.$t("SALE"))}</div>`);
      } else {
        _push(`<!--[-->`);
        if ((_b = __props.Data) == null ? void 0 : _b.is_featured) {
          _push(`<div class="product-label-tag warning-label-tag">${ssrInterpolate(_ctx.$t("FEATURED"))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_swiper, {
        autoplay: { delay: 2500, disableOnInteraction: true },
        modules: unref(modules),
        navigation: true,
        loop: true,
        class: "banner-slider",
        onSwiper,
        "slides-per-view": 1,
        "space-between": 15
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = __props.Data) == null ? void 0 : _a2.product_galleries, (productImages, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c, _d;
                  if (_push3) {
                    _push3(`<div class="slider-image"${_scopeId2}>`);
                    if (!((_b3 = (_a3 = __props.Data) == null ? void 0 : _a3.product_galleries) == null ? void 0 : _b3.length)) {
                      _push3(`<img${ssrRenderAttr("src", productImages == null ? void 0 : productImages.original_url)}${ssrRenderAttr("id", productImages.id)} class="img-fluid" alt=""${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slider-image" }, [
                        !((_d = (_c = __props.Data) == null ? void 0 : _c.product_galleries) == null ? void 0 : _d.length) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: productImages == null ? void 0 : productImages.original_url,
                          id: productImages.id,
                          class: "img-fluid",
                          alt: ""
                        }, null, 8, ["src", "id"])) : createCommentVNode("", true),
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_vue_image_zoomer, {
                              regular: productImages == null ? void 0 : productImages.original_url,
                              "img-class": "img-fluid w-100 image_zoom_cls-0",
                              "hover-message": "Click once on image",
                              "zoom-amount": 5
                            }, null, 8, ["regular"])
                          ]),
                          _: 2
                        }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = __props.Data) == null ? void 0 : _b2.product_galleries, (productImages, index) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                  default: withCtx(() => {
                    var _a3, _b3;
                    return [
                      createVNode("div", { class: "slider-image" }, [
                        !((_b3 = (_a3 = __props.Data) == null ? void 0 : _a3.product_galleries) == null ? void 0 : _b3.length) ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: productImages == null ? void 0 : productImages.original_url,
                          id: productImages.id,
                          class: "img-fluid",
                          alt: ""
                        }, null, 8, ["src", "id"])) : createCommentVNode("", true),
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            createVNode(_component_vue_image_zoomer, {
                              regular: productImages == null ? void 0 : productImages.original_url,
                              "img-class": "img-fluid w-100 image_zoom_cls-0",
                              "hover-message": "Click once on image",
                              "zoom-amount": 5
                            }, null, 8, ["regular"])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-12"><div class="bottom-slider-image left-slider slick-top">`);
      _push(ssrRenderComponent(_component_swiper, {
        loop: true,
        class: "banner-slider",
        breakpoints: unref(thumbnailProductSlider),
        "slides-per-view": 4,
        "space-between": 15
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = __props.Data) == null ? void 0 : _a2.product_galleries, (productImages, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: index,
                class: unref(slideId) == index ? "" : ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slider-image"${_scopeId2}><img${ssrRenderAttr("src", productImages == null ? void 0 : productImages.original_url)}${ssrRenderAttr("id", productImages.id)} class="img-fluid" alt=""${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slider-image" }, [
                        createVNode("img", {
                          src: productImages == null ? void 0 : productImages.original_url,
                          id: productImages.id,
                          class: "img-fluid",
                          alt: "",
                          onClick: ($event) => slideTo(index)
                        }, null, 8, ["src", "id", "onClick"])
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
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = __props.Data) == null ? void 0 : _b2.product_galleries, (productImages, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: index,
                  class: unref(slideId) == index ? "" : ""
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slider-image" }, [
                      createVNode("img", {
                        src: productImages == null ? void 0 : productImages.original_url,
                        id: productImages.id,
                        class: "img-fluid",
                        alt: "",
                        onClick: ($event) => slideTo(index)
                      }, null, 8, ["src", "id", "onClick"])
                    ])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Thumbnail/Images.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
