import { Swiper, SwiperSlide } from 'swiper/vue';
import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Image",
  __ssrInlineRender: true,
  props: {
    Data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="row"><div class="col-12"><div class="slider-3-product product-wrapper">`);
      _push(ssrRenderComponent(_component_swiper, {
        loop: true,
        class: "banner-slider",
        "slides-per-view": 4,
        "space-between": 15
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.Data.product_galleries, (productImages, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: index,
                class: _ctx.slideId == index ? "" : ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="product-slider-image"${_scopeId2}><img${ssrRenderAttr("src", productImages == null ? void 0 : productImages.original_url)}${ssrRenderAttr("id", productImages.id)} class="img-fluid"${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "product-slider-image" }, [
                        createVNode("img", {
                          src: productImages == null ? void 0 : productImages.original_url,
                          id: productImages.id,
                          class: "img-fluid"
                        }, null, 8, ["src", "id"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(__props.Data.product_galleries, (productImages, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: index,
                  class: _ctx.slideId == index ? "" : ""
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "product-slider-image" }, [
                      createVNode("img", {
                        src: productImages == null ? void 0 : productImages.original_url,
                        id: productImages.id,
                        class: "img-fluid"
                      }, null, 8, ["src", "id"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shop/ProductDetails/Silder/Image.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
