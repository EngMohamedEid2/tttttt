import { Swiper, SwiperSlide } from 'swiper/vue';
import _sfc_main$1 from './index-uA_ar0VB.mjs';
import { unref, withCtx, openBlock, createBlock, createVNode, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { Autoplay } from 'swiper';
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
import '@vueuse/components';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    style: {
      type: String,
      default: "horizontal"
    },
    classes: String,
    contentClass: String,
    banners: Object,
    sliderPerView: Number,
    saleclass: String
  },
  setup(__props) {
    let modules = [Autoplay];
    let bannerSlider3 = {
      0: {
        slidesPerView: 1
      },
      800: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    };
    let breakpoints = {
      0: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 2
      },
      850: {
        slidesPerView: 3
      },
      1399: {
        slidesPerView: 4
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_WidgetsImageLink = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (((_a = __props.banners) == null ? void 0 : _a.length) && __props.style == "horizontal") {
        _push(`<div class="container-fluid-lg"><div class="banner-slider">`);
        _push(ssrRenderComponent(_component_swiper, {
          breakpoints: unref(breakpoints),
          loop: true,
          slidesPerView: 4,
          spaceBetween: 15
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.banners, (banner, index) => {
                _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (banner == null ? void 0 : banner.status) {
                        _push3(`<div class="banner-contain hover-effect"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_WidgetsImageLink, {
                          classes: "banner-contain",
                          image: banner,
                          bgImage: false,
                          saleclass: __props.saleclass
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        (banner == null ? void 0 : banner.status) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "banner-contain hover-effect"
                        }, [
                          createVNode(_component_WidgetsImageLink, {
                            classes: "banner-contain",
                            image: banner,
                            bgImage: false,
                            saleclass: __props.saleclass
                          }, null, 8, ["image", "saleclass"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.banners, (banner, index) => {
                  return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                    default: withCtx(() => [
                      (banner == null ? void 0 : banner.status) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "banner-contain hover-effect"
                      }, [
                        createVNode(_component_WidgetsImageLink, {
                          classes: "banner-contain",
                          image: banner,
                          bgImage: false,
                          saleclass: __props.saleclass
                        }, null, 8, ["image", "saleclass"])
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = __props.banners) == null ? void 0 : _b.length) && __props.style == "horizontal-3") {
        _push(`<div class="container-fluid-lg"><div class="banner-slider">`);
        _push(ssrRenderComponent(_component_swiper, {
          modules: unref(modules),
          autoplay: { delay: 1200, pauseOnMouseEnter: true },
          breakpoints: unref(bannerSlider3),
          loop: true,
          "slides-per-view": 3,
          "space-between": 15
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.banners, (banner, index) => {
                _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (banner == null ? void 0 : banner.status) {
                        _push3(`<div class="banner-contain hover-effect"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_WidgetsImageLink, {
                          classes: "banner-contain",
                          image: banner,
                          bgImage: false,
                          saleclass: __props.saleclass,
                          height: _ctx.height
                        }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        (banner == null ? void 0 : banner.status) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "banner-contain hover-effect"
                        }, [
                          createVNode(_component_WidgetsImageLink, {
                            classes: "banner-contain",
                            image: banner,
                            bgImage: false,
                            saleclass: __props.saleclass,
                            height: _ctx.height
                          }, null, 8, ["image", "saleclass", "height"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(__props.banners, (banner, index) => {
                  return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                    default: withCtx(() => [
                      (banner == null ? void 0 : banner.status) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "banner-contain hover-effect"
                      }, [
                        createVNode(_component_WidgetsImageLink, {
                          classes: "banner-contain",
                          image: banner,
                          bgImage: false,
                          saleclass: __props.saleclass,
                          height: _ctx.height
                        }, null, 8, ["image", "saleclass", "height"])
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
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_c = __props.banners) == null ? void 0 : _c.image_url) && __props.style == "vertical") {
        _push(`<div class="${ssrRenderClass(__props.classes)}"><div class="home-contain hover-effect">`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain",
          image: __props.banners,
          bgImage: false,
          saleclass: __props.saleclass
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = __props.banners) == null ? void 0 : _d.image_url) && __props.style == "full_width") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_WidgetsImageLink, {
          classes: "banner-contain sale-banner",
          image: __props.banners,
          bgImage: false,
          saleclass: __props.saleclass
        }, null, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Banner/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
