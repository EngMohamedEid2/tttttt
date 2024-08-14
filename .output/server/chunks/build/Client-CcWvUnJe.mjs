import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { s as storeToRefs, e as useDataStore } from './server.mjs';
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
  __name: "Client",
  __ssrInlineRender: true,
  setup(__props) {
    let modules = [Autoplay];
    let { ThemeOptions } = storeToRefs(useDataStore());
    let aboutClient = ref(ThemeOptions.value.options.about_us.clients);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "client-section section-lg-space" }, _attrs))}><div class="container-fluid-lg"><div class="row"><div class="col-12"><div class="about-us-title text-center"><h4>${ssrInterpolate(unref(aboutClient).sub_title)}</h4><h2 class="center">${ssrInterpolate(unref(aboutClient).title)}</h2></div><div class="slider-dots">`);
      _push(ssrRenderComponent(_component_swiper, {
        autoplay: { delay: 2500, disableOnInteraction: true },
        modules: unref(modules),
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutClient).content, (client, index) => {
              _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="slider-3_1 product-wrapper"${_scopeId2}><div${_scopeId2}><div class="clint-contain"${_scopeId2}><div class="client-icon"${_scopeId2}><img${ssrRenderAttr("src", client.icon)}${ssrRenderAttr("alt", client.title)}${_scopeId2}></div><h2${_scopeId2}>${ssrInterpolate(client.count)}</h2><h4${_scopeId2}>${ssrInterpolate(client.title)}</h4><p${_scopeId2}>${ssrInterpolate(client.description)}</p></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "slider-3_1 product-wrapper" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "clint-contain" }, [
                            createVNode("div", { class: "client-icon" }, [
                              createVNode("img", {
                                src: client.icon,
                                alt: client.title
                              }, null, 8, ["src", "alt"])
                            ]),
                            createVNode("h2", null, toDisplayString(client.count), 1),
                            createVNode("h4", null, toDisplayString(client.title), 1),
                            createVNode("p", null, toDisplayString(client.description), 1)
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutClient).content, (client, index) => {
                return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "slider-3_1 product-wrapper" }, [
                      createVNode("div", null, [
                        createVNode("div", { class: "clint-contain" }, [
                          createVNode("div", { class: "client-icon" }, [
                            createVNode("img", {
                              src: client.icon,
                              alt: client.title
                            }, null, 8, ["src", "alt"])
                          ]),
                          createVNode("h2", null, toDisplayString(client.count), 1),
                          createVNode("h4", null, toDisplayString(client.title), 1),
                          createVNode("p", null, toDisplayString(client.description), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pages/AboutUs/Client.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
