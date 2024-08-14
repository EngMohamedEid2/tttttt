import { _ as __nuxt_component_0 } from './nuxt-link-D35ckuRb.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, createVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL, s as storeToRefs, e as useDataStore } from './server.mjs';
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
import 'swiper/vue';
import 'mitt';
import 'vue3-toastify';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'swiper';
import '@vueuse/components';

const _imports_0 = publicAssetsURL("/images/mega-menu2.png");
const _sfc_main = {
  __name: "MenuList",
  __ssrInlineRender: true,
  props: {
    menu: Object,
    show: Boolean
  },
  setup(__props) {
    storeToRefs(useDataStore());
    ref([]);
    ref([]);
    let showdefalut = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_HeaderElementsMenuList = _sfc_main;
      _push(`<!--[-->`);
      if (__props.menu.type === "sub") {
        _push(`<a class="nav-link dropdown-toggle">${ssrInterpolate(__props.menu.title)} `);
        if (__props.menu.badge) {
          _push(`<label class="new-dropdown">${ssrInterpolate(__props.menu.badge)}</label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.menu.type === "link") {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: ["dropdown-item", unref(showdefalut) == __props.menu.title ? "show" : ""],
          to: { path: `${__props.menu.path}`, query: __props.menu.params }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.menu.title)} `);
              if (__props.menu.label) {
                _push2(`<label class="${ssrRenderClass([__props.menu.labelClass, "menu-label"])}"${_scopeId}>${ssrInterpolate(__props.menu.label)}</label>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createTextVNode(toDisplayString(__props.menu.title) + " ", 1),
                __props.menu.label ? (openBlock(), createBlock("label", {
                  key: 0,
                  class: ["menu-label", __props.menu.labelClass]
                }, toDisplayString(__props.menu.label), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.menu.megaMenu && __props.menu.megaMenuType === "link") {
        _push(`<div class="${ssrRenderClass([unref(showdefalut) == __props.menu.title ? "show" : "", "dropdown-menu dropdown-menu-2"])}"><div class="row"><!--[-->`);
        ssrRenderList(__props.menu.children, (megaMenu) => {
          _push(`<div class="dropdown-column col-xl-3"><!--[-->`);
          ssrRenderList(megaMenu.children, (link) => {
            _push(`<div>`);
            if (link.type === "sub") {
              _push(`<h5 class="dropdown-header {{ link.class }}">${ssrInterpolate(link.title)}</h5>`);
            } else {
              _push(`<!---->`);
            }
            if (link.type === "link") {
              _push(ssrRenderComponent(_component_nuxt_link, {
                class: "dropdown-item",
                to: { path: `${link.path}`, query: link.params }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(link.title)} `);
                    if (link.label) {
                      _push2(`<label class="${ssrRenderClass([link.labelClass, "menu-label"])}"${_scopeId}>${ssrInterpolate(link.label)}</label>`);
                    } else {
                      _push2(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.title) + " ", 1),
                      link.label ? (openBlock(), createBlock("label", {
                        key: 0,
                        class: ["menu-label", link.labelClass]
                      }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            if (link.type === "external_link") {
              _push(ssrRenderComponent(_component_nuxt_link, {
                to: link.path,
                class: "dropdown-item",
                target: "_blank"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(link.title)} `);
                    if (link.label) {
                      _push2(`<label class="${ssrRenderClass([link.labelClass, "menu-label"])}"${_scopeId}>${ssrInterpolate(link.label)}</label>`);
                    } else {
                      _push2(`<!---->`);
                    }
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.title) + " ", 1),
                      link.label ? (openBlock(), createBlock("label", {
                        key: 0,
                        class: ["menu-label", link.labelClass]
                      }, toDisplayString(link.label), 3)) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]-->`);
        if (__props.menu.slider === "banner") {
          _push(`<div class="dropdown-column col-xl-3 d-xl-block d-none"></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.menu.slider === "banner_landscape") {
          _push(`<div class="dropdown-column col-xl-12 d-xl-block d-none"><div class="menu-img-banner rounded overflow-hidden mx-0 mt-3 mb-0"><img${ssrRenderAttr("src", _imports_0)} class="img-fluid"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.menu.megaMenu && __props.menu.megaMenuType === "image") {
        _push(`<div class="${ssrRenderClass([unref(showdefalut) == __props.menu.title ? "show" : "", "dropdown-menu dropdown-menu-2 dropdown-image"])}"><div class="dropdown-column"><!--[-->`);
        ssrRenderList(__props.menu.children, (imageMenu) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            class: "dropdown-item",
            key: imageMenu,
            to: imageMenu.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", imageMenu.image)} class="img-fluid" alt="imageMenu.title"${_scopeId}><span${_scopeId}>${ssrInterpolate(imageMenu.title)}</span>`);
              } else {
                return [
                  createVNode("img", {
                    src: imageMenu.image,
                    class: "img-fluid",
                    alt: "imageMenu.title"
                  }, null, 8, ["src"]),
                  createVNode("span", null, toDisplayString(imageMenu.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.menu.children && !__props.menu.megaMenu) {
        _push(`<ul class="${ssrRenderClass([unref(showdefalut) == __props.menu.title ? "show" : "", "dropdown-menu"])}"><!--[-->`);
        ssrRenderList((_a = __props.menu) == null ? void 0 : _a.children, (child, index) => {
          _push(`<li class="${ssrRenderClass([child.children ? "dropdown" : "", "nav-item"])}">`);
          _push(ssrRenderComponent(_component_HeaderElementsMenuList, { menu: child }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Elements/MenuList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
