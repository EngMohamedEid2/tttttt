import { Swiper, SwiperSlide } from 'swiper/vue';
import { p as publicAssetsURL, l as useCartStore, d as __nuxt_component_1, w as _sfc_main$7 } from './server.mjs';
import { ref, unref, mergeProps, withCtx, openBlock, createBlock, createVNode, withModifiers, toDisplayString, createTextVNode, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useCompareStore } from './compare-CJlobl4e.mjs';
import { u as useWishlistStore } from './wishlist-DasiP7YX.mjs';
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
import 'swiper';
import '@vueuse/components';

const _imports_0 = publicAssetsURL("/images/svg/circle.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: Object,
    Products: Object
  },
  setup(__props) {
    let deals = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtRating = _sfc_main$7;
      if (unref(deals).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "product-bg-image wow fadeInUp",
          style: { "background-image": "url(" + ((_a = __props.data) == null ? void 0 : _a.image_url) + ")" }
        }, _attrs))}><div class="product-title product-warning"><h2>${ssrInterpolate((_b = __props.data) == null ? void 0 : _b.title)}</h2></div><div class="product-box-4 product-box-3 rounded-0">`);
        if ((_c = __props.data) == null ? void 0 : _c.label) {
          _push(`<div class="deal-box"><div class="circle-box"><div class="shape-circle"><img${ssrRenderAttr("src", _imports_0)} alt="circle"><div class="shape-text"><h6>${ssrInterpolate((_d = __props.data) == null ? void 0 : _d.label)}</h6></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="top-selling-slider product-arrow">`);
        _push(ssrRenderComponent(_component_swiper, {
          loop: true,
          class: "banner-slider",
          "slides-per-view": 1,
          "space-between": 15
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(deals).length, (deal, index) => {
                _push2(ssrRenderComponent(_component_swiper_slide, {
                  key: `product${index}`
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$;
                    if (_push3) {
                      if ((_a2 = unref(deals)[2]) == null ? void 0 : _a2.status) {
                        _push3(`<div${_scopeId2}><div class="product-image"${_scopeId2}><a href="javascript:void(0)"${_scopeId2}><img${ssrRenderAttr("src", (_d2 = (_c2 = (_b2 = unref(deals)[2]) == null ? void 0 : _b2.product) == null ? void 0 : _c2.product_thumbnail) == null ? void 0 : _d2.original_url)} class="img-fluid product-image"${ssrRenderAttr("alt", (_f = (_e = unref(deals)[2]) == null ? void 0 : _e.product) == null ? void 0 : _f.name)}${_scopeId2}></a><ul class="option"${_scopeId2}><li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View"${_scopeId2}><a href="javascript:void(0)"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_Icon, { name: "ri:eye-line" }, null, _parent3, _scopeId2));
                        _push3(`</a></li><li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist"${_scopeId2}><a href="javascript:void(0)" class="notifi-wishlist"${_scopeId2}>`);
                        if (unref(useWishlistStore)().ExistsInCart(unref(deals)[2])) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ri:heart-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ri:heart-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        }
                        _push3(`</a></li><li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare"${_scopeId2}><a href="javascript:void(0)"${_scopeId2}>`);
                        if (unref(useCompareStore)().ExistsInCompare(unref(deals)[2])) {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ri:refresh-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(ssrRenderComponent(_component_Icon, {
                            name: "ri:refresh-line",
                            size: "20"
                          }, null, _parent3, _scopeId2));
                        }
                        _push3(`</a></li></ul></div><div class="product-detail text-center"${_scopeId2}><ul class="product-rating justify-content-center"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_NuxtRating, {
                          "read-only": true,
                          ratingValue: ((_g = unref(deals)[2]) == null ? void 0 : _g.product.rating_count) || 0,
                          "rating-size": "25px"
                        }, null, _parent3, _scopeId2));
                        _push3(`</ul><a href="javascript:void(0)"${_scopeId2}><h3 class="name w-100 mx-auto text-center"${_scopeId2}>${ssrInterpolate((_i = (_h = unref(deals)[2]) == null ? void 0 : _h.product) == null ? void 0 : _i.name)}</h3></a><h3 class="price theme-color d-flex justify-content-center"${_scopeId2}> $ ${ssrInterpolate(Number((_k = (_j = unref(deals)[2]) == null ? void 0 : _j.product) == null ? void 0 : _k.sale_price).toFixed(2))}<del class="delete-price"${_scopeId2}>$ ${ssrInterpolate(Number((_m = (_l = unref(deals)[2]) == null ? void 0 : _l.product) == null ? void 0 : _m.price).toFixed(2))}</del></h3><div class="progress custom-progressbar"${_scopeId2}><div class="progress-bar" style="${ssrRenderStyle({ width: ((_o = (_n = unref(deals)[2]) == null ? void 0 : _n.product) == null ? void 0 : _o.quantity) * 100 / 10 + "%" })}" role="progressbar"${_scopeId2}></div></div><h5 class="text-content"${_scopeId2}>${ssrInterpolate(_ctx.$t("Sold"))} : <span${_scopeId2}>${ssrInterpolate((_q = (_p = unref(deals)[2]) == null ? void 0 : _p.product) == null ? void 0 : _q.quantity)} ${ssrInterpolate(_ctx.$t("items"))}</span><span class="ms-auto text-content"${_scopeId2}>${ssrInterpolate("Hurry up offer end in")}</span></h5>`);
                        if (!((_r = unref(deals)[2].remainingTime) == null ? void 0 : _r.seconds) >= 0) {
                          _push3(`<div class="timer timer-2 ms-0 my-4" id="clockdiv-1"${_scopeId2}><ul class="d-flex justify-content-center"${_scopeId2}><li${_scopeId2}><div class="counter"${_scopeId2}><div class="days"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate((_t = (_s = unref(deals)[2]) == null ? void 0 : _s.remainingTime) == null ? void 0 : _t.days)}</h6></div></div></li><li${_scopeId2}><div class="counter"${_scopeId2}><div class="hours"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate((_v = (_u = unref(deals)[2]) == null ? void 0 : _u.remainingTime) == null ? void 0 : _v.hours)}</h6></div></div></li><li${_scopeId2}><div class="counter"${_scopeId2}><div class="minutes"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate((_x = (_w = unref(deals)[2]) == null ? void 0 : _w.remainingTime) == null ? void 0 : _x.minutes)}</h6></div></div></li><li${_scopeId2}><div class="counter"${_scopeId2}><div class="seconds"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate((_z = (_y = unref(deals)[2]) == null ? void 0 : _y.remainingTime) == null ? void 0 : _z.seconds)}</h6></div></div></li></ul></div>`);
                        } else {
                          _push3(`<div${_scopeId2}><h2 class="mt-3"${_scopeId2}>${ssrInterpolate(((_A = unref(deals)[2].remainingTime) == null ? void 0 : _A.seconds) < 0 ? "offer_closed" : "")}</h2></div>`);
                        }
                        _push3(`</div></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        ((_B = unref(deals)[2]) == null ? void 0 : _B.status) ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "product-image" }, [
                            createVNode("a", { href: "javascript:void(0)" }, [
                              createVNode("img", {
                                src: (_E = (_D = (_C = unref(deals)[2]) == null ? void 0 : _C.product) == null ? void 0 : _D.product_thumbnail) == null ? void 0 : _E.original_url,
                                class: "img-fluid product-image",
                                alt: (_G = (_F = unref(deals)[2]) == null ? void 0 : _F.product) == null ? void 0 : _G.name
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("ul", { class: "option" }, [
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Quick View"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  onClick: withModifiers(() => {
                                    unref(useCartStore)().ToggleModal(unref(deals)[2]);
                                  }, ["prevent"])
                                }, [
                                  createVNode(_component_Icon, { name: "ri:eye-line" })
                                ], 8, ["onClick"])
                              ]),
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Wishlist"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "notifi-wishlist",
                                  onClick: withModifiers(($event) => unref(useWishlistStore)().ToggleFromWishlist(unref(deals)[2]), ["prevent"])
                                }, [
                                  unref(useWishlistStore)().ExistsInCart(unref(deals)[2]) ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: "ri:heart-line",
                                    size: "20"
                                  })) : (openBlock(), createBlock(_component_Icon, {
                                    key: 1,
                                    name: "ri:heart-line",
                                    size: "20"
                                  }))
                                ], 8, ["onClick"])
                              ]),
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Compare"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  onClick: withModifiers(($event) => unref(useCompareStore)().ToggleFromCompare(unref(deals)[2]), ["prevent"])
                                }, [
                                  unref(useCompareStore)().ExistsInCompare(unref(deals)[2]) ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: "ri:refresh-line",
                                    size: "20"
                                  })) : (openBlock(), createBlock(_component_Icon, {
                                    key: 1,
                                    name: "ri:refresh-line",
                                    size: "20"
                                  }))
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "product-detail text-center" }, [
                            createVNode("ul", { class: "product-rating justify-content-center" }, [
                              createVNode(_component_NuxtRating, {
                                "read-only": true,
                                ratingValue: ((_H = unref(deals)[2]) == null ? void 0 : _H.product.rating_count) || 0,
                                "rating-size": "25px"
                              }, null, 8, ["ratingValue"])
                            ]),
                            createVNode("a", { href: "javascript:void(0)" }, [
                              createVNode("h3", { class: "name w-100 mx-auto text-center" }, toDisplayString((_J = (_I = unref(deals)[2]) == null ? void 0 : _I.product) == null ? void 0 : _J.name), 1)
                            ]),
                            createVNode("h3", { class: "price theme-color d-flex justify-content-center" }, [
                              createTextVNode(" $ " + toDisplayString(Number((_L = (_K = unref(deals)[2]) == null ? void 0 : _K.product) == null ? void 0 : _L.sale_price).toFixed(2)), 1),
                              createVNode("del", { class: "delete-price" }, "$ " + toDisplayString(Number((_N = (_M = unref(deals)[2]) == null ? void 0 : _M.product) == null ? void 0 : _N.price).toFixed(2)), 1)
                            ]),
                            createVNode("div", { class: "progress custom-progressbar" }, [
                              createVNode("div", {
                                class: "progress-bar",
                                style: { width: ((_P = (_O = unref(deals)[2]) == null ? void 0 : _O.product) == null ? void 0 : _P.quantity) * 100 / 10 + "%" },
                                role: "progressbar"
                              }, null, 4)
                            ]),
                            createVNode("h5", { class: "text-content" }, [
                              createTextVNode(toDisplayString(_ctx.$t("Sold")) + " : ", 1),
                              createVNode("span", null, toDisplayString((_R = (_Q = unref(deals)[2]) == null ? void 0 : _Q.product) == null ? void 0 : _R.quantity) + " " + toDisplayString(_ctx.$t("items")), 1),
                              createVNode("span", { class: "ms-auto text-content" }, toDisplayString("Hurry up offer end in"))
                            ]),
                            !((_S = unref(deals)[2].remainingTime) == null ? void 0 : _S.seconds) >= 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "timer timer-2 ms-0 my-4",
                              id: "clockdiv-1"
                            }, [
                              createVNode("ul", { class: "d-flex justify-content-center" }, [
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "days" }, [
                                      createVNode("h6", null, toDisplayString((_U = (_T = unref(deals)[2]) == null ? void 0 : _T.remainingTime) == null ? void 0 : _U.days), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "hours" }, [
                                      createVNode("h6", null, toDisplayString((_W = (_V = unref(deals)[2]) == null ? void 0 : _V.remainingTime) == null ? void 0 : _W.hours), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "minutes" }, [
                                      createVNode("h6", null, toDisplayString((_Y = (_X = unref(deals)[2]) == null ? void 0 : _X.remainingTime) == null ? void 0 : _Y.minutes), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "seconds" }, [
                                      createVNode("h6", null, toDisplayString((__ = (_Z = unref(deals)[2]) == null ? void 0 : _Z.remainingTime) == null ? void 0 : __.seconds), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("h2", { class: "mt-3" }, toDisplayString(((_$ = unref(deals)[2].remainingTime) == null ? void 0 : _$.seconds) < 0 ? "offer_closed" : ""), 1)
                            ]))
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(deals).length, (deal, index) => {
                  return openBlock(), createBlock(_component_swiper_slide, {
                    key: `product${index}`
                  }, {
                    default: withCtx(() => {
                      var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
                      return [
                        ((_a2 = unref(deals)[2]) == null ? void 0 : _a2.status) ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "product-image" }, [
                            createVNode("a", { href: "javascript:void(0)" }, [
                              createVNode("img", {
                                src: (_d2 = (_c2 = (_b2 = unref(deals)[2]) == null ? void 0 : _b2.product) == null ? void 0 : _c2.product_thumbnail) == null ? void 0 : _d2.original_url,
                                class: "img-fluid product-image",
                                alt: (_f = (_e = unref(deals)[2]) == null ? void 0 : _e.product) == null ? void 0 : _f.name
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("ul", { class: "option" }, [
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Quick View"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  onClick: withModifiers(() => {
                                    unref(useCartStore)().ToggleModal(unref(deals)[2]);
                                  }, ["prevent"])
                                }, [
                                  createVNode(_component_Icon, { name: "ri:eye-line" })
                                ], 8, ["onClick"])
                              ]),
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Wishlist"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  class: "notifi-wishlist",
                                  onClick: withModifiers(($event) => unref(useWishlistStore)().ToggleFromWishlist(unref(deals)[2]), ["prevent"])
                                }, [
                                  unref(useWishlistStore)().ExistsInCart(unref(deals)[2]) ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: "ri:heart-line",
                                    size: "20"
                                  })) : (openBlock(), createBlock(_component_Icon, {
                                    key: 1,
                                    name: "ri:heart-line",
                                    size: "20"
                                  }))
                                ], 8, ["onClick"])
                              ]),
                              createVNode("li", {
                                "data-bs-toggle": "tooltip",
                                "data-bs-placement": "top",
                                title: "Compare"
                              }, [
                                createVNode("a", {
                                  href: "javascript:void(0)",
                                  onClick: withModifiers(($event) => unref(useCompareStore)().ToggleFromCompare(unref(deals)[2]), ["prevent"])
                                }, [
                                  unref(useCompareStore)().ExistsInCompare(unref(deals)[2]) ? (openBlock(), createBlock(_component_Icon, {
                                    key: 0,
                                    name: "ri:refresh-line",
                                    size: "20"
                                  })) : (openBlock(), createBlock(_component_Icon, {
                                    key: 1,
                                    name: "ri:refresh-line",
                                    size: "20"
                                  }))
                                ], 8, ["onClick"])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "product-detail text-center" }, [
                            createVNode("ul", { class: "product-rating justify-content-center" }, [
                              createVNode(_component_NuxtRating, {
                                "read-only": true,
                                ratingValue: ((_g = unref(deals)[2]) == null ? void 0 : _g.product.rating_count) || 0,
                                "rating-size": "25px"
                              }, null, 8, ["ratingValue"])
                            ]),
                            createVNode("a", { href: "javascript:void(0)" }, [
                              createVNode("h3", { class: "name w-100 mx-auto text-center" }, toDisplayString((_i = (_h = unref(deals)[2]) == null ? void 0 : _h.product) == null ? void 0 : _i.name), 1)
                            ]),
                            createVNode("h3", { class: "price theme-color d-flex justify-content-center" }, [
                              createTextVNode(" $ " + toDisplayString(Number((_k = (_j = unref(deals)[2]) == null ? void 0 : _j.product) == null ? void 0 : _k.sale_price).toFixed(2)), 1),
                              createVNode("del", { class: "delete-price" }, "$ " + toDisplayString(Number((_m = (_l = unref(deals)[2]) == null ? void 0 : _l.product) == null ? void 0 : _m.price).toFixed(2)), 1)
                            ]),
                            createVNode("div", { class: "progress custom-progressbar" }, [
                              createVNode("div", {
                                class: "progress-bar",
                                style: { width: ((_o = (_n = unref(deals)[2]) == null ? void 0 : _n.product) == null ? void 0 : _o.quantity) * 100 / 10 + "%" },
                                role: "progressbar"
                              }, null, 4)
                            ]),
                            createVNode("h5", { class: "text-content" }, [
                              createTextVNode(toDisplayString(_ctx.$t("Sold")) + " : ", 1),
                              createVNode("span", null, toDisplayString((_q = (_p = unref(deals)[2]) == null ? void 0 : _p.product) == null ? void 0 : _q.quantity) + " " + toDisplayString(_ctx.$t("items")), 1),
                              createVNode("span", { class: "ms-auto text-content" }, toDisplayString("Hurry up offer end in"))
                            ]),
                            !((_r = unref(deals)[2].remainingTime) == null ? void 0 : _r.seconds) >= 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "timer timer-2 ms-0 my-4",
                              id: "clockdiv-1"
                            }, [
                              createVNode("ul", { class: "d-flex justify-content-center" }, [
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "days" }, [
                                      createVNode("h6", null, toDisplayString((_t = (_s = unref(deals)[2]) == null ? void 0 : _s.remainingTime) == null ? void 0 : _t.days), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "hours" }, [
                                      createVNode("h6", null, toDisplayString((_v = (_u = unref(deals)[2]) == null ? void 0 : _u.remainingTime) == null ? void 0 : _v.hours), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "minutes" }, [
                                      createVNode("h6", null, toDisplayString((_x = (_w = unref(deals)[2]) == null ? void 0 : _w.remainingTime) == null ? void 0 : _x.minutes), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "counter" }, [
                                    createVNode("div", { class: "seconds" }, [
                                      createVNode("h6", null, toDisplayString((_z = (_y = unref(deals)[2]) == null ? void 0 : _y.remainingTime) == null ? void 0 : _z.seconds), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              createVNode("h2", { class: "mt-3" }, toDisplayString(((_A = unref(deals)[2].remainingTime) == null ? void 0 : _A.seconds) < 0 ? "offer_closed" : ""), 1)
                            ]))
                          ])
                        ])) : createCommentVNode("", true)
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
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Themes/Widgets/Deal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
