import { Swiper, SwiperSlide } from 'swiper/vue';
import _sfc_main$1 from './index-CdatWNO3.mjs';
import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode, withDirectives, vModelText, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    offers: Object
  },
  setup(__props) {
    let bankSlider = {
      0: {
        slidesPerView: 1
      },
      735: {
        slidesPerView: 2
      },
      1230: {
        slidesPerView: 3
      }
    };
    function copyFunction(txt) {
      (void 0).clipboard.writeText(txt);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_WidgetsButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-bank-3 arrow-slider slick-height" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_swiper, {
        breakpoints: unref(bankSlider),
        loop: true,
        class: "banner-slider",
        "slides-per-view": 3,
        "space-between": 15
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.offers, (offer, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: `product${index}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (offer == null ? void 0 : offer.status) {
                      _push3(`<div class="bank-offer"${_scopeId2}><div class="bank-header"${_scopeId2}><div class="bank-right w-100"${_scopeId2}><img${ssrRenderAttr("src", offer.image_url)} class="img-fluid" alt=""${_scopeId2}></div></div><div class="bank-footer"${_scopeId2}><h4${_scopeId2}>${ssrInterpolate(_ctx.$t("Code"))} : <input class="form-control" type="text"${ssrRenderAttr("name", offer.coupon_code)}${ssrRenderAttr("value", offer.coupon_code)}${_scopeId2}></h4>`);
                      _push3(ssrRenderComponent(_component_WidgetsButton, {
                        type: "button",
                        classes: "bank-coupon btn",
                        id: "coupon_btn",
                        onClick: ($event) => copyFunction(offer.coupon_code)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(_ctx.$t("Copy Code"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(_ctx.$t("Copy Code")), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      (offer == null ? void 0 : offer.status) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bank-offer"
                      }, [
                        createVNode("div", { class: "bank-header" }, [
                          createVNode("div", { class: "bank-right w-100" }, [
                            createVNode("img", {
                              src: offer.image_url,
                              class: "img-fluid",
                              alt: ""
                            }, null, 8, ["src"])
                          ])
                        ]),
                        createVNode("div", { class: "bank-footer" }, [
                          createVNode("h4", null, [
                            createTextVNode(toDisplayString(_ctx.$t("Code")) + " : ", 1),
                            withDirectives(createVNode("input", {
                              class: "form-control",
                              type: "text",
                              name: offer.coupon_code,
                              "onUpdate:modelValue": ($event) => offer.coupon_code = $event
                            }, null, 8, ["name", "onUpdate:modelValue"]), [
                              [vModelText, offer.coupon_code]
                            ])
                          ]),
                          createVNode(_component_WidgetsButton, {
                            type: "button",
                            classes: "bank-coupon btn",
                            id: "coupon_btn",
                            onClick: ($event) => copyFunction(offer.coupon_code)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("Copy Code")), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(__props.offers, (offer, index) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  key: `product${index}`
                }, {
                  default: withCtx(() => [
                    (offer == null ? void 0 : offer.status) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bank-offer"
                    }, [
                      createVNode("div", { class: "bank-header" }, [
                        createVNode("div", { class: "bank-right w-100" }, [
                          createVNode("img", {
                            src: offer.image_url,
                            class: "img-fluid",
                            alt: ""
                          }, null, 8, ["src"])
                        ])
                      ]),
                      createVNode("div", { class: "bank-footer" }, [
                        createVNode("h4", null, [
                          createTextVNode(toDisplayString(_ctx.$t("Code")) + " : ", 1),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            type: "text",
                            name: offer.coupon_code,
                            "onUpdate:modelValue": ($event) => offer.coupon_code = $event
                          }, null, 8, ["name", "onUpdate:modelValue"]), [
                            [vModelText, offer.coupon_code]
                          ])
                        ]),
                        createVNode(_component_WidgetsButton, {
                          type: "button",
                          classes: "bank-coupon btn",
                          id: "coupon_btn",
                          onClick: ($event) => copyFunction(offer.coupon_code)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Copy Code")), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/WalletOffer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
