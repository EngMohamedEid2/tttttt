import _sfc_main$1 from './SkeletonProductBox-XWsjMSl0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import _sfc_main$2 from './index-C8UkQut3.mjs';
import _sfc_main$3 from './index-Bmsaf34f.mjs';
import { ref, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { Autoplay, Navigation } from 'swiper';
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
import '@vueuse/components';
import './nuxt-img-R5yzpfhK.mjs';
import './index-CdatWNO3.mjs';
import './CheckExistingProduct-BIZpEY04.mjs';
import './dataFilters-CmGMXT_3.mjs';
import './Vertical-DcNKOdfj.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    style: { type: [String, Object], default: "vertical" },
    productIds: Array,
    products: Object,
    menuProducts: Array,
    boxClass: String,
    productstyle: { type: String, default: "modern" },
    layout: String,
    sliderPerView: { type: Number, default: 5 },
    slider: Boolean,
    showItem: Number,
    spaceBetween: Number
  },
  setup(__props) {
    const modules = ref([Autoplay, Navigation]);
    let props = __props;
    let breakpoints = {
      0: {
        slidesPerView: 2,
        spaceBetween: 12
      },
      790: {
        slidesPerView: 3,
        spaceBetween: 16
      },
      1040: {
        slidesPerView: 4
      },
      1280: {
        slidesPerView: 5
      },
      1500: {
        // slidesPerView: 6,
        spaceBetween: 24,
        slidesPerView: props.sliderPerView
      }
    };
    const skeletonLoader = ref(true);
    let skeletonItems = Array.from({ length: 5 }, (_, index) => index);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_WidgetsProductBoxSkeletonProductBox = _sfc_main$1;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_WidgetsProductBox = _sfc_main$2;
      const _component_WidgetsNoData = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.style == "horizontal") {
        _push(`<div class="${ssrRenderClass(!unref(skeletonLoader) ? __props.productstyle ? __props.productstyle : "" : "")}">`);
        if (unref(skeletonLoader)) {
          _push(`<div>`);
          if (__props.style == "horizontal") {
            _push(`<div class="${ssrRenderClass(__props.productstyle)}"><div class="row row-cols-5 m-0"><!--[-->`);
            ssrRenderList(unref(skeletonItems), (item) => {
              _push(`<div>`);
              _push(ssrRenderComponent(_component_WidgetsProductBoxSkeletonProductBox, null, null, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!--[-->`);
          if (__props.slider) {
            _push(`<div class="product-box-slider">`);
            _push(ssrRenderComponent(_component_swiper, {
              loop: true,
              class: "banner-slider",
              spaceBetween: __props.spaceBetween,
              "slides-per-view": __props.sliderPerView,
              breakpoints: unref(breakpoints),
              autoplay: {
                delay: 1e3,
                pauseOnMouseEnter: false
              },
              modules: unref(modules),
              navigation: true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.products, (product, index) => {
                    _push2(ssrRenderComponent(_component_swiper_slide, {
                      autoHeight: true,
                      key: `product${index}`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="row m-0"${_scopeId2}><div class="col-12 px-0"${_scopeId2}>`);
                          _push3(ssrRenderComponent(_component_WidgetsProductBox, {
                            product,
                            style: "horizontal",
                            classes: __props.boxClass
                          }, null, _parent3, _scopeId2));
                          _push3(`</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "row m-0" }, [
                              createVNode("div", { class: "col-12 px-0" }, [
                                createVNode(_component_WidgetsProductBox, {
                                  product,
                                  style: "horizontal",
                                  classes: __props.boxClass
                                }, null, 8, ["product", "classes"])
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
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product, index) => {
                      return openBlock(), createBlock(_component_swiper_slide, {
                        autoHeight: true,
                        key: `product${index}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "row m-0" }, [
                            createVNode("div", { class: "col-12 px-0" }, [
                              createVNode(_component_WidgetsProductBox, {
                                product,
                                style: "horizontal",
                                classes: __props.boxClass
                              }, null, 8, ["product", "classes"])
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
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!((_a = __props.products) == null ? void 0 : _a.length)) {
        _push(ssrRenderComponent(_component_WidgetsNoData, {
          classes: "no-data-added bg-light",
          text: "No Product Found"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
