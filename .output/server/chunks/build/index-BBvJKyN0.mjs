import _sfc_main$1 from './index-CdatWNO3.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { v as useCollectionStore, s as storeToRefs, e as useDataStore, i as useRoute, a as useRouter, d as __nuxt_component_1 } from './server.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    categoryIds: Array,
    Category: Array,
    style: { type: [String, Object], default: "vertical" },
    title: String,
    image: String,
    theme: String,
    slidesPerView: { type: Number, default: 7 },
    selectedCategoryId: Number,
    bgImage: String
  },
  emits: ["selectedCategory"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e;
    let props = __props;
    let styled = props.style;
    let store = useCollectionStore();
    let categorySlider3 = {
      0: {
        slidesPerView: 2
      },
      620: {
        slidesPerView: 3
      },
      620: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 5
      },
      1060: {
        slidesPerView: 6
      },
      1390: {
        slidesPerView: 7
      },
      1690: {
        slidesPerView: 8
      }
    };
    let categorySlider2 = {
      0: {
        slidesPerView: 2
      },
      460: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 4
      },
      800: {
        slidesPerView: 5
      },
      1e3: {
        slidesPerView: 6
      },
      1260: {
        slidesPerView: 7
      },
      1450: {
        slidesPerView: 8
      },
      1640: {
        slidesPerView: props.slidesPerView
      }
    };
    const emit = __emit;
    let { Categories } = storeToRefs(useDataStore());
    let categories = ref([]);
    let ProductCategory = ref([]);
    let selectedCategorySlug = ref([]);
    ref();
    useRoute();
    let router = useRouter();
    ProductCategory.value = (_b = (_a = Categories == null ? void 0 : Categories.value) == null ? void 0 : _a.data) == null ? void 0 : _b.filter((category) => category.type == "product");
    categories.value = props.categoryIds ? (_d = (_c = Categories == null ? void 0 : Categories.value) == null ? void 0 : _c.data) == null ? void 0 : _d.filter((category) => {
      var _a2;
      return (_a2 = props.categoryIds) == null ? void 0 : _a2.includes(category.id);
    }) : (_e = Categories == null ? void 0 : Categories.value) == null ? void 0 : _e.data;
    function selectCategory(id) {
      emit("selectedCategory", id);
    }
    const redirectToCollection = (slug) => {
      const index = selectedCategorySlug.value.indexOf(slug);
      if (index === -1) {
        selectedCategorySlug.value.push(slug);
      } else {
        selectedCategorySlug.value.splice(index, 1);
      }
      const queryParams = selectedCategorySlug.value.length ? selectedCategorySlug.value.join(",") : null;
      router.push({ path: "/collections", query: { category: queryParams, layout: "collection_left_sidebar" } });
      setTimeout(async () => {
        store.initialCheckedValue();
      }, 2e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g;
      const _component_WidgetsButton = _sfc_main$1;
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="category-menu section-b-space" style="${ssrRenderStyle(((_a2 = unref(categories)) == null ? void 0 : _a2.length) && __props.style == "vertical" ? null : { display: "none" })}"><h3>${ssrInterpolate(__props.title ? __props.title : _ctx.$t("Categories"))}</h3><ul><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        var _a3;
        _push(`<li><div class="category-list"><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}><h5><a href="javascript:void(0)">${ssrInterpolate(category == null ? void 0 : category.name)}</a></h5></div></li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (((_b2 = unref(categories)) == null ? void 0 : _b2.length) && __props.style == "classic_vertical") {
        _push(`<div class="shop-left-sidebar"><ul class="nav nav-pills mb-3 custom-nav-tab"><!--[-->`);
        ssrRenderList(unref(categories), (category) => {
          _push(`<li class="nav-item">`);
          _push(ssrRenderComponent(_component_WidgetsButton, {
            class: unref(selectedCategorySlug).length && unref(selectedCategorySlug).includes(category.slug) ? "nav-link active" : "nav-link",
            id: "nav_link_btn",
            onOnCLick: ($event) => redirectToCollection(category.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3;
              if (_push2) {
                _push2(`${ssrInterpolate(category.name)} <img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId}>`);
              } else {
                return [
                  createTextVNode(toDisplayString(category.name) + " ", 1),
                  createVNode("img", {
                    src: (category == null ? void 0 : category.category_icon) ? (_b3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _b3.original_url : "/images/category.png",
                    alt: category == null ? void 0 : category.name
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["category-slider", "product-wrapper"])}" style="${ssrRenderStyle(((_c2 = unref(categories)) == null ? void 0 : _c2.length) && __props.style == "horizontal" ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_swiper, {
        breakpoints: unref(categorySlider2),
        loop: true,
        class: "banner-slider",
        "slides-per-view": __props.slidesPerView,
        "space-between": 10
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categories), (category) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: category }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3, _c3, _d3, _e3, _f2;
                  if (_push3) {
                    if (__props.theme == "paris") {
                      _push3(`<div${_scopeId2}><a href="javascript:void(0)" class="${ssrRenderClass([{ "active": unref(selectedCategorySlug).length && unref(selectedCategorySlug).includes(category.slug) }, "category-box category-dark"])}"${_scopeId2}><img${ssrRenderAttr("src", __props.image ? __props.image : "/images/vegetable/shape.png")} class="background-image" alt=""${_scopeId2}><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId2}><h5${_scopeId2}>${ssrInterpolate(category.name)}</h5></a></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (__props.theme == "madrid") {
                      _push3(`<div${_scopeId2}><div class="category-box-list"${_scopeId2}><a href="javascript:void(0)" class="category-name"${_scopeId2}><h4${_scopeId2}>${ssrInterpolate(category.name)}</h4><h6${_scopeId2}>${ssrInterpolate(category.products_count)} ${ssrInterpolate("items")}</h6></a><div class="category-box-view"${_scopeId2}><a href="javascript:void(0)"${_scopeId2}><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_image) ? (_b3 = category == null ? void 0 : category.category_image) == null ? void 0 : _b3.original_url : "/images/category.png")} class="img-fluid"${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId2}></a>`);
                      _push3(ssrRenderComponent(_component_WidgetsButton, {
                        classes: "btn shop-button",
                        id: "shop_now_btn"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span${_scopeId3}>${ssrInterpolate("Shop Now")}</span>`);
                            _push4(ssrRenderComponent(_component_Icon, { name: "ri:arrow-right-s-line" }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode("span", null, toDisplayString("Shop Now")),
                              createVNode(_component_Icon, { name: "ri:arrow-right-s-line" })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (__props.theme == "rome") {
                      _push3(`<div${_scopeId2}><div class="shop-category-box border-0"${_scopeId2}><a href="javascript:void(0)" class="circle-1"${_scopeId2}><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_image) ? (_c3 = category == null ? void 0 : category.category_image) == null ? void 0 : _c3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId2}></a><div class="category-name"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate(category.name)}</h6></div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      __props.theme == "paris" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => redirectToCollection(category.slug),
                          class: ["category-box category-dark", { "active": unref(selectedCategorySlug).length && unref(selectedCategorySlug).includes(category.slug) }]
                        }, [
                          createVNode("img", {
                            src: __props.image ? __props.image : "/images/vegetable/shape.png",
                            class: "background-image",
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            src: (category == null ? void 0 : category.category_icon) ? (_d3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _d3.original_url : "/images/category.png",
                            alt: category == null ? void 0 : category.name
                          }, null, 8, ["src", "alt"]),
                          createVNode("h5", null, toDisplayString(category.name), 1)
                        ], 10, ["onClick"])
                      ])) : createCommentVNode("", true),
                      __props.theme == "madrid" ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", { class: "category-box-list" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "category-name"
                          }, [
                            createVNode("h4", null, toDisplayString(category.name), 1),
                            createVNode("h6", null, toDisplayString(category.products_count) + " " + toDisplayString("items"), 1)
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-box-view" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              onClick: ($event) => redirectToCollection(category.slug)
                            }, [
                              createVNode("img", {
                                src: (category == null ? void 0 : category.category_image) ? (_e3 = category == null ? void 0 : category.category_image) == null ? void 0 : _e3.original_url : "/images/category.png",
                                class: "img-fluid",
                                alt: category == null ? void 0 : category.name
                              }, null, 8, ["src", "alt"])
                            ], 8, ["onClick"]),
                            createVNode(_component_WidgetsButton, {
                              classes: "btn shop-button",
                              id: "shop_now_btn"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString("Shop Now")),
                                createVNode(_component_Icon, { name: "ri:arrow-right-s-line" })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      __props.theme == "rome" ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("div", { class: "shop-category-box border-0" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "circle-1"
                          }, [
                            createVNode("img", {
                              src: (category == null ? void 0 : category.category_image) ? (_f2 = category == null ? void 0 : category.category_image) == null ? void 0 : _f2.original_url : "/images/category.png",
                              alt: category == null ? void 0 : category.name
                            }, null, 8, ["src", "alt"])
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-name" }, [
                            createVNode("h6", null, toDisplayString(category.name), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: category }, {
                  default: withCtx(() => {
                    var _a3, _b3, _c3;
                    return [
                      __props.theme == "paris" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("a", {
                          href: "javascript:void(0)",
                          onClick: ($event) => redirectToCollection(category.slug),
                          class: ["category-box category-dark", { "active": unref(selectedCategorySlug).length && unref(selectedCategorySlug).includes(category.slug) }]
                        }, [
                          createVNode("img", {
                            src: __props.image ? __props.image : "/images/vegetable/shape.png",
                            class: "background-image",
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            src: (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png",
                            alt: category == null ? void 0 : category.name
                          }, null, 8, ["src", "alt"]),
                          createVNode("h5", null, toDisplayString(category.name), 1)
                        ], 10, ["onClick"])
                      ])) : createCommentVNode("", true),
                      __props.theme == "madrid" ? (openBlock(), createBlock("div", { key: 1 }, [
                        createVNode("div", { class: "category-box-list" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "category-name"
                          }, [
                            createVNode("h4", null, toDisplayString(category.name), 1),
                            createVNode("h6", null, toDisplayString(category.products_count) + " " + toDisplayString("items"), 1)
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-box-view" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              onClick: ($event) => redirectToCollection(category.slug)
                            }, [
                              createVNode("img", {
                                src: (category == null ? void 0 : category.category_image) ? (_b3 = category == null ? void 0 : category.category_image) == null ? void 0 : _b3.original_url : "/images/category.png",
                                class: "img-fluid",
                                alt: category == null ? void 0 : category.name
                              }, null, 8, ["src", "alt"])
                            ], 8, ["onClick"]),
                            createVNode(_component_WidgetsButton, {
                              classes: "btn shop-button",
                              id: "shop_now_btn"
                            }, {
                              default: withCtx(() => [
                                createVNode("span", null, toDisplayString("Shop Now")),
                                createVNode(_component_Icon, { name: "ri:arrow-right-s-line" })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      __props.theme == "rome" ? (openBlock(), createBlock("div", { key: 2 }, [
                        createVNode("div", { class: "shop-category-box border-0" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "circle-1"
                          }, [
                            createVNode("img", {
                              src: (category == null ? void 0 : category.category_image) ? (_c3 = category == null ? void 0 : category.category_image) == null ? void 0 : _c3.original_url : "/images/category.png",
                              alt: category == null ? void 0 : category.name
                            }, null, 8, ["src", "alt"])
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-name" }, [
                            createVNode("h6", null, toDisplayString(category.name), 1)
                          ])
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
      _push(`</div><div class="${ssrRenderClass(["category-slider", "product-wrapper"])}" style="${ssrRenderStyle(((_d2 = unref(categories)) == null ? void 0 : _d2.length) && __props.style == "horizontal" ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_component_swiper, {
        breakpoints: unref(categorySlider3),
        loop: true,
        class: "banner-slider",
        "slides-per-view": 8,
        "space-between": 10
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categories), (category) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: category }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a3, _b3;
                  if (_push3) {
                    if (__props.theme == "rome") {
                      _push3(`<div${_scopeId2}><div class="shop-category-box border-0"${_scopeId2}><a href="javascript:void(0)" class="circle-1"${_scopeId2}><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_image) ? (_a3 = category == null ? void 0 : category.category_image) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId2}></a><div class="category-name"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate(category.name)}</h6></div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      __props.theme == "rome" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "shop-category-box border-0" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "circle-1"
                          }, [
                            createVNode("img", {
                              src: (category == null ? void 0 : category.category_image) ? (_b3 = category == null ? void 0 : category.category_image) == null ? void 0 : _b3.original_url : "/images/category.png",
                              alt: category == null ? void 0 : category.name
                            }, null, 8, ["src", "alt"])
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-name" }, [
                            createVNode("h6", null, toDisplayString(category.name), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: category }, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      __props.theme == "rome" ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "shop-category-box border-0" }, [
                          createVNode("a", {
                            href: "javascript:void(0)",
                            onClick: ($event) => redirectToCollection(category.slug),
                            class: "circle-1"
                          }, [
                            createVNode("img", {
                              src: (category == null ? void 0 : category.category_image) ? (_a3 = category == null ? void 0 : category.category_image) == null ? void 0 : _a3.original_url : "/images/category.png",
                              alt: category == null ? void 0 : category.name
                            }, null, 8, ["src", "alt"])
                          ], 8, ["onClick"]),
                          createVNode("div", { class: "category-name" }, [
                            createVNode("h6", null, toDisplayString(category.name), 1)
                          ])
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
      _push(`</div>`);
      if (((_e2 = unref(categories)) == null ? void 0 : _e2.length) && __props.style == "classic") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_swiper, {
          breakpoints: unref(categorySlider2),
          loop: true,
          class: "banner-slider",
          "slides-per-view": __props.slidesPerView,
          "space-between": 10
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(categories), (category) => {
                _push2(ssrRenderComponent(_component_swiper_slide, { key: category }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a3, _b3;
                    if (_push3) {
                      _push3(`<div${_scopeId2}><div class="shop-category-box border-0 wow fadeIn"${_scopeId2}><a href="javascript:void(0)" class="circle-1"${_scopeId2}><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}${_scopeId2}></a><div class="category-name"${_scopeId2}><h6${_scopeId2}>${ssrInterpolate(category.name)}</h6></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode("div", { class: "shop-category-box border-0 wow fadeIn" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              onClick: ($event) => redirectToCollection(category.slug),
                              class: "circle-1"
                            }, [
                              createVNode("img", {
                                src: (category == null ? void 0 : category.category_icon) ? (_b3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _b3.original_url : "/images/category.png",
                                alt: category == null ? void 0 : category.name
                              }, null, 8, ["src", "alt"])
                            ], 8, ["onClick"]),
                            createVNode("div", { class: "category-name" }, [
                              createVNode("h6", null, toDisplayString(category.name), 1)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                  return openBlock(), createBlock(_component_swiper_slide, { key: category }, {
                    default: withCtx(() => {
                      var _a3;
                      return [
                        createVNode("div", null, [
                          createVNode("div", { class: "shop-category-box border-0 wow fadeIn" }, [
                            createVNode("a", {
                              href: "javascript:void(0)",
                              onClick: ($event) => redirectToCollection(category.slug),
                              class: "circle-1"
                            }, [
                              createVNode("img", {
                                src: (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png",
                                alt: category == null ? void 0 : category.name
                              }, null, 8, ["src", "alt"])
                            ], 8, ["onClick"]),
                            createVNode("div", { class: "category-name" }, [
                              createVNode("h6", null, toDisplayString(category.name), 1)
                            ])
                          ])
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="nav nav-tabs tab-style-color-2 tab-style-color" style="${ssrRenderStyle(((_f = unref(categories)) == null ? void 0 : _f.length) && __props.style == "filter" ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(_component_WidgetsButton, {
          classes: __props.selectedCategoryId == category.id ? "nav-link btn active" : "nav-link btn",
          id: "category" + category.id,
          onOnClick: ($event) => selectCategory(category.id)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(category == null ? void 0 : category.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(category == null ? void 0 : category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><ul class="category-list" style="${ssrRenderStyle(((_g = unref(categories)) == null ? void 0 : _g.length) && __props.style == "dropdown" ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(unref(categories), (category) => {
        var _a3;
        _push(`<li class="onhover-category-list"><a href="javascript:void(0)" class="category-name"><img${ssrRenderAttr("src", (category == null ? void 0 : category.category_icon) ? (_a3 = category == null ? void 0 : category.category_icon) == null ? void 0 : _a3.original_url : "/images/category.png")}${ssrRenderAttr("alt", category == null ? void 0 : category.name)}><h6>${ssrInterpolate(category == null ? void 0 : category.name)}</h6></a></li>`);
      });
      _push(`<!--]--></ul><div class="location-button" style="${ssrRenderStyle(unref(styled) === "input_dropdown" ? null : { display: "none" })}"><select class="form-select locat-name border-0"><option>${ssrInterpolate("All Category")}</option><!--[-->`);
      ssrRenderList(unref(ProductCategory), (category) => {
        _push(`<option>${ssrInterpolate(category.name)}</option>`);
      });
      _push(`<!--]--></select></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/Category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
