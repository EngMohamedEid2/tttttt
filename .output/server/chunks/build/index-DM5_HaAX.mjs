import _sfc_main$1 from './index-CdatWNO3.mjs';
import { e as useDataStore, s as storeToRefs, d as __nuxt_component_1 } from './server.mjs';
import { ref, unref, mergeProps, isRef, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { OnClickOutside } from '@vueuse/components';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let open = ref(false);
    ref(false);
    let mode = ref("");
    ref("");
    ref();
    useDataStore().GetThemeoption();
    storeToRefs(useDataStore());
    const toggle = () => {
      open.value = !open.value;
    };
    const layoutMode = (value) => {
      mode.value = value;
      if (mode.value === "dark") {
        (void 0).getElementsByTagName("html")[0].classList.add("dark");
      } else {
        (void 0).getElementsByTagName("html")[0].classList.remove("dark");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WidgetsButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_1;
      _push(ssrRenderComponent(unref(OnClickOutside), mergeProps({
        onTrigger: () => {
          isRef(open) ? open.value = false : open = false;
        },
        class: "setting-box"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WidgetsButton, {
              classes: "btn setting-button",
              id: "toggle_btn",
              type: "button",
              onOnClick: ($event) => toggle()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: unref(open) ? "ri-close-fill" : "ri-settings-3-fill",
                    name: "ri:settings-4-fill"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, {
                      class: unref(open) ? "ri-close-fill" : "ri-settings-3-fill",
                      name: "ri:settings-4-fill"
                    }, null, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="${ssrRenderClass([[{ active: unref(open) }], "theme-setting-2"])}"${_scopeId}><div class="theme-box"${_scopeId}><ul${_scopeId}><li${_scopeId}><div class="setting-name"${_scopeId}><h4${_scopeId}>${ssrInterpolate(_ctx.$t("Color"))}</h4></div><div class="theme-setting-button color-picker"${_scopeId}><form class="form-control"${_scopeId}><label for="colorPick" class="form-label mb-0"${_scopeId}>${ssrInterpolate(_ctx.$t("Theme Colo"))}r</label><input type="color" class="form-control form-control-color" id="colorPick" value="#0da487" title="Choose your color"${_scopeId}></form></div></li><li${_scopeId}><div class="setting-name"${_scopeId}><h4${_scopeId}>${ssrInterpolate(_ctx.$t("Dark"))}</h4></div><div class="theme-setting-button"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_WidgetsButton, {
              classes: unref(mode) === "dark" ? "btn btn-2 active" : "btn btn-2",
              id: "dark_btn",
              type: "button",
              onOnClick: ($event) => layoutMode("dark")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Dark"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Dark")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_WidgetsButton, {
              classes: unref(mode) === "light" ? "btn btn-2 active" : "btn btn-2",
              id: "light_btn",
              type: "button",
              onOnClick: ($event) => layoutMode("light")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("Light"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("Light")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></li></ul></div></div>`);
          } else {
            return [
              createVNode(_component_WidgetsButton, {
                classes: "btn setting-button",
                id: "toggle_btn",
                type: "button",
                onOnClick: ($event) => toggle()
              }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, {
                    class: unref(open) ? "ri-close-fill" : "ri-settings-3-fill",
                    name: "ri:settings-4-fill"
                  }, null, 8, ["class"])
                ]),
                _: 1
              }, 8, ["onOnClick"]),
              createVNode("div", {
                class: ["theme-setting-2", [{ active: unref(open) }]]
              }, [
                createVNode("div", { class: "theme-box" }, [
                  createVNode("ul", null, [
                    createVNode("li", null, [
                      createVNode("div", { class: "setting-name" }, [
                        createVNode("h4", null, toDisplayString(_ctx.$t("Color")), 1)
                      ]),
                      createVNode("div", { class: "theme-setting-button color-picker" }, [
                        createVNode("form", { class: "form-control" }, [
                          createVNode("label", {
                            for: "colorPick",
                            class: "form-label mb-0"
                          }, toDisplayString(_ctx.$t("Theme Colo")) + "r", 1),
                          createVNode("input", {
                            type: "color",
                            class: "form-control form-control-color",
                            id: "colorPick",
                            value: "#0da487",
                            title: "Choose your color"
                          })
                        ])
                      ])
                    ]),
                    createVNode("li", null, [
                      createVNode("div", { class: "setting-name" }, [
                        createVNode("h4", null, toDisplayString(_ctx.$t("Dark")), 1)
                      ]),
                      createVNode("div", { class: "theme-setting-button" }, [
                        createVNode(_component_WidgetsButton, {
                          classes: unref(mode) === "dark" ? "btn btn-2 active" : "btn btn-2",
                          id: "dark_btn",
                          type: "button",
                          onOnClick: ($event) => layoutMode("dark")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Dark")), 1)
                          ]),
                          _: 1
                        }, 8, ["classes", "onOnClick"]),
                        createVNode(_component_WidgetsButton, {
                          classes: unref(mode) === "light" ? "btn btn-2 active" : "btn btn-2",
                          id: "light_btn",
                          type: "button",
                          onOnClick: ($event) => layoutMode("light")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("Light")), 1)
                          ]),
                          _: 1
                        }, 8, ["classes", "onOnClick"])
                      ])
                    ])
                  ])
                ])
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Widgets/ThemeCustomizer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
