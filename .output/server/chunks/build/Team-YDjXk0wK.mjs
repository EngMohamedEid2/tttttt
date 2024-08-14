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
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    let modules = [Autoplay];
    let { ThemeOptions } = storeToRefs(useDataStore());
    let aboutTeam = ref(ThemeOptions.value.options.about_us.team);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "team-section section-lg-space" }, _attrs))}><div class="container-fluid-lg"><div class="about-us-title text-center"><h4 class="text-content">${ssrInterpolate(unref(aboutTeam).sub_title)}</h4><h2 class="center">${ssrInterpolate(unref(aboutTeam).title)}</h2></div><div class="row"><div class="col-12"><div class="slider-dots">`);
      _push(ssrRenderComponent(_component_swiper, {
        autoplay: { delay: 2500, disableOnInteraction: true },
        modules: unref(modules),
        loop: true,
        slidesPerView: 4,
        spaceBetween: 50
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutTeam).members, (team, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="team-box"${_scopeId2}><div class="team-iamge"${_scopeId2}><img${ssrRenderAttr("src", team.profile_image_url)} class="img-fluid"${ssrRenderAttr("alt", team.name)}${_scopeId2}></div><div class="team-name"${_scopeId2}><h3${_scopeId2}>${ssrInterpolate(team.name)}</h3><h5${_scopeId2}>${ssrInterpolate(team.designation)}</h5><p${_scopeId2}>${ssrInterpolate(team.description)}</p><ul class="team-media"${_scopeId2}><li${_scopeId2}><a href="https://www.facebook.com/" class="fb-bg"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:facebook-fill",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></li><li${_scopeId2}><a href="https://in.pinterest.com/" class="pint-bg"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:pinterest-fill",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></li><li${_scopeId2}><a href="https://twitter.com/" class="twitter-bg"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:twitter-fill",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></li><li${_scopeId2}><a href="https://www.instagram.com/" class="insta-bg"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "ri:instagram-fill",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></li></ul></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "team-box" }, [
                        createVNode("div", { class: "team-iamge" }, [
                          createVNode("img", {
                            src: team.profile_image_url,
                            class: "img-fluid",
                            alt: team.name
                          }, null, 8, ["src", "alt"])
                        ]),
                        createVNode("div", { class: "team-name" }, [
                          createVNode("h3", null, toDisplayString(team.name), 1),
                          createVNode("h5", null, toDisplayString(team.designation), 1),
                          createVNode("p", null, toDisplayString(team.description), 1),
                          createVNode("ul", { class: "team-media" }, [
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "https://www.facebook.com/",
                                class: "fb-bg"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ri:facebook-fill",
                                  size: "16"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "https://in.pinterest.com/",
                                class: "pint-bg"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ri:pinterest-fill",
                                  size: "16"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "https://twitter.com/",
                                class: "twitter-bg"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ri:twitter-fill",
                                  size: "16"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "https://www.instagram.com/",
                                class: "insta-bg"
                              }, [
                                createVNode(_component_Icon, {
                                  name: "ri:instagram-fill",
                                  size: "16"
                                })
                              ])
                            ])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutTeam).members, (team, index) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "team-box" }, [
                      createVNode("div", { class: "team-iamge" }, [
                        createVNode("img", {
                          src: team.profile_image_url,
                          class: "img-fluid",
                          alt: team.name
                        }, null, 8, ["src", "alt"])
                      ]),
                      createVNode("div", { class: "team-name" }, [
                        createVNode("h3", null, toDisplayString(team.name), 1),
                        createVNode("h5", null, toDisplayString(team.designation), 1),
                        createVNode("p", null, toDisplayString(team.description), 1),
                        createVNode("ul", { class: "team-media" }, [
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://www.facebook.com/",
                              class: "fb-bg"
                            }, [
                              createVNode(_component_Icon, {
                                name: "ri:facebook-fill",
                                size: "16"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://in.pinterest.com/",
                              class: "pint-bg"
                            }, [
                              createVNode(_component_Icon, {
                                name: "ri:pinterest-fill",
                                size: "16"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://twitter.com/",
                              class: "twitter-bg"
                            }, [
                              createVNode(_component_Icon, {
                                name: "ri:twitter-fill",
                                size: "16"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "https://www.instagram.com/",
                              class: "insta-bg"
                            }, [
                              createVNode(_component_Icon, {
                                name: "ri:instagram-fill",
                                size: "16"
                              })
                            ])
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/Team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
